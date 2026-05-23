export function gmailComposeUrl({
  to,
  subject,
  body,
}: {
  to?: string;
  subject?: string;
  body?: string;
}) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
  });

  if (to) {
    params.set("to", to);
  }

  if (subject) {
    params.set("su", subject);
  }

  if (body) {
    params.set("body", body);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
}
