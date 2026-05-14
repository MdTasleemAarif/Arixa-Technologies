import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional(),
  company: z.string().max(120).optional(),
  service: z.string().max(120).optional(),
  budget: z.string().max(120).optional(),
  message: z.string().min(10).max(4000),
  website: z.string().max(0).optional(),
});

export const careerApplicationSchema = z.object({
  jobSlug: z.string().min(2).max(160),
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional(),
  portfolioUrl: z.string().url().optional().or(z.literal("")),
  message: z.string().min(10).max(4000),
  website: z.string().max(0).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
});
