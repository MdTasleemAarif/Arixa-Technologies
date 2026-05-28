import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

type RedirectRule = {
  sourcePath: string;
  destinationPath: string;
  statusCode: 301 | 302 | 307 | 308;
};

const staticRedirects: RedirectRule[] = [
  { sourcePath: "/portfolio", destinationPath: "/services", statusCode: 301 },
  { sourcePath: "/pricing", destinationPath: "/contact", statusCode: 301 },
];

function normalizePath(pathname: string) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return normalized.length > 1 ? normalized.replace(/\/+$/, "") : normalized;
}

function toRedirectStatus(value: unknown): 301 | 302 | 307 | 308 {
  return value === 302 || value === 307 || value === 308 ? value : 301;
}

async function findRedirect(pathname: string): Promise<RedirectRule | null> {
  const sourcePath = normalizePath(pathname);
  const staticRule = staticRedirects.find((rule) => rule.sourcePath === sourcePath);

  if (staticRule) {
    return staticRule;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const { data } = await supabase
    .from("redirects")
    .select("source_path, destination_path, status_code")
    .eq("source_path", sourcePath)
    .eq("is_active", true)
    .maybeSingle();

  if (!data?.destination_path) {
    return null;
  }

  return {
    sourcePath: String(data.source_path),
    destinationPath: String(data.destination_path),
    statusCode: toRedirectStatus(data.status_code),
  };
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (request.method === "GET" || request.method === "HEAD") {
    const redirectRule = await findRedirect(pathname);

    if (redirectRule) {
      const targetUrl = redirectRule.destinationPath.startsWith("http")
        ? new URL(redirectRule.destinationPath)
        : new URL(redirectRule.destinationPath, request.url);

      if (targetUrl.pathname !== normalizePath(pathname)) {
        if (!targetUrl.search) {
          targetUrl.search = request.nextUrl.search;
        }

        return NextResponse.redirect(targetUrl, redirectRule.statusCode);
      }
    }
  }

  if (!pathname.startsWith("/admin") || pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next();
  }

  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options),
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|manifest.webmanifest|robots.txt|sitemap.xml|feed.xml|llms.txt|images/|.*\\.(?:png|jpg|jpeg|webp|svg|ico|css|js|map|woff|woff2)$).*)",
  ],
};
