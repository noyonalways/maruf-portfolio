"use client";

import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircleIcon, CheckCircle2Icon, Loader2Icon, SendIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "cn";
import {
  budgetOptions,
  contactFormSchema,
  serviceOptions,
  type ContactFormValues,
} from "@/lib/validation";

const fieldClass =
  "h-10 aria-invalid:border-destructive aria-invalid:ring-destructive/20";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [formError, setFormError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: undefined,
      budget: "",
      message: "",
      website: "",
    },
  });

  const service = useWatch({ control, name: "service" });
  const budget = useWatch({ control, name: "budget" });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as {
        ok: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      setSent(true);
      reset();
      toast.success(result.message ?? "Message sent successfully.");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      setFormError(message);
      toast.error(message);
    }
  });

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2Icon className="size-6" aria-hidden="true" />
        </span>
        <h2 className="font-heading text-xl font-semibold">
          Thanks — your message is on its way
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          I have received your enquiry and will reply within one business day.
          If it is urgent, call me directly and I will pick up.
        </p>
        <Button variant="outline" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">
            Full name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Jane Cooper"
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p
              id="name-error"
              className="flex items-center gap-1.5 text-xs text-destructive"
            >
              <AlertCircleIcon className="size-3.5" aria-hidden="true" />
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p
              id="email-error"
              className="flex items-center gap-1.5 text-xs text-destructive"
            >
              <AlertCircleIcon className="size-3.5" aria-hidden="true" />
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Company name"
            className={fieldClass}
            {...register("company")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+880 1XXX-XXXXXX"
            className={fieldClass}
            {...register("phone")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="service">
            Service needed <span className="text-destructive">*</span>
          </Label>
          <Select
            value={service}
            onValueChange={(value) =>
              setValue("service", value as ContactFormValues["service"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger
              id="service"
              className={cn("h-10 w-full", errors.service && "border-destructive")}
              aria-invalid={Boolean(errors.service)}
            >
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service ? (
            <p className="flex items-center gap-1.5 text-xs text-destructive">
              <AlertCircleIcon className="size-3.5" aria-hidden="true" />
              {errors.service.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="budget">Budget range</Label>
          <Select
            value={budget || undefined}
            onValueChange={(value) => setValue("budget", value)}
          >
            <SelectTrigger id="budget" className="h-10 w-full">
              <SelectValue placeholder="Optional" />
            </SelectTrigger>
            <SelectContent>
              {budgetOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">
          How can I help? <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell me about your business, your goals and what is not working right now."
          className="min-h-32"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p
            id="message-error"
            className="flex items-center gap-1.5 text-xs text-destructive"
          >
            <AlertCircleIcon className="size-3.5" aria-hidden="true" />
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {formError ? (
        <p className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-3.5 py-2.5 text-sm text-destructive">
          <AlertCircleIcon className="size-4 shrink-0" aria-hidden="true" />
          {formError}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          I reply within one business day. Your details stay private.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="h-11 px-6"
        >
          {isSubmitting ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <SendIcon className="size-4" />
              Send message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
