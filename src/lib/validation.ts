import { z } from "zod";

export const serviceOptions = [
  "Digital Marketing",
  "Graphics Design",
  "Web Development",
  "Business Automation",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "Under $500",
  "$500 – $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  email: z.email("Please enter a valid email address."),
  company: z.string().trim().max(100, "Company name is too long.").optional(),
  phone: z.string().trim().max(30, "Phone number is too long.").optional(),
  service: z.enum(serviceOptions, "Please choose a service."),
  budget: z.string().max(50).optional(),
  message: z
    .string()
    .trim()
    .min(20, "Please tell us a little more (at least 20 characters).")
    .max(2000, "Message is too long."),
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
