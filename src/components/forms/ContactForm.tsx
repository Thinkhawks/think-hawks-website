"use client";

import { useState, useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, AlertCircle, RotateCcw } from "lucide-react";
import { services } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().max(5000).optional(),
  botcheck: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const budgetRanges = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
];

const inputClass =
  "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#222222] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";
const labelClass =
  "block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const uid = useId();
  const fid = (name: string) => `${uid}-${name}`;
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onError = () => {
    const firstErrorKey = Object.keys(errors)[0];
    const el = document.getElementById(fid(firstErrorKey));
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    el?.focus();
  };

  const onSubmit = async (data: FormData) => {
    if (data.botcheck) return;

    const serviceTitle =
      services.find((s) => s.id === data.service)?.title ?? data.service;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service: serviceTitle }),
      });

      const result = await res.json();
      if (!res.ok || result.error) {
        throw new Error(result.error || "Submission failed");
      }
      setSent(true);
      reset();
    } catch (err) {
      setError("root", {
        message:
          err instanceof Error && err.message !== "Internal server error"
            ? err.message
            : "Something went wrong. Please try again or email thinkhawks@gmail.com.",
      });
    }
  };

  if (sent) {
    return (
      <div className="text-center py-14" role="status" aria-live="polite">
        <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
          <Send className="w-9 h-9 text-white" aria-hidden="true" />
        </div>
        <h3 className="font-heading font-bold text-[#222222] text-xl mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-[#555353] text-sm max-w-sm mx-auto mb-6">
          Thank you for reaching out. Our team will get back to you within 24 hours —
          and you&apos;ll receive a confirmation email shortly.
        </p>
        <button
          onClick={() => setSent(false)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-2 border-primary rounded-xl px-6 py-3 hover:bg-primary hover:text-white transition-colors"
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4" noValidate>
      {/* Honeypot — visually hidden, off the tab order */}
      <input
        type="checkbox"
        {...register("botcheck")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={fid("name")} className={labelClass}>
            Full Name *
          </label>
          <input
            id={fid("name")}
            {...register("name")}
            placeholder="e.g. Ayesha Khan"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? fid("name-error") : undefined}
            className={inputClass}
          />
          {errors.name && (
            <p id={fid("name-error")} className="text-red-600 text-xs mt-1">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={fid("email")} className={labelClass}>
            Email Address *
          </label>
          <input
            id={fid("email")}
            type="email"
            {...register("email")}
            placeholder="you@company.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? fid("email-error") : undefined}
            className={inputClass}
          />
          {errors.email && (
            <p id={fid("email-error")} className="text-red-600 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={fid("phone")} className={labelClass}>
            Phone Number
          </label>
          <input
            id={fid("phone")}
            type="tel"
            {...register("phone")}
            placeholder="+92 3XX XXXXXXX"
            autoComplete="tel"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={fid("company")} className={labelClass}>
            Company Name
          </label>
          <input
            id={fid("company")}
            {...register("company")}
            placeholder="Your company"
            autoComplete="organization"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={fid("service")} className={labelClass}>
            Service Needed *
          </label>
          <select
            id={fid("service")}
            {...register("service")}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? fid("service-error") : undefined}
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id={fid("service-error")} className="text-red-600 text-xs mt-1">
              {errors.service.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={fid("budget")} className={labelClass}>
            Monthly Budget
          </label>
          <select
            id={fid("budget")}
            {...register("budget")}
            className={inputClass}
            defaultValue=""
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={fid("message")} className={labelClass}>
          Your Message
        </label>
        <textarea
          id={fid("message")}
          {...register("message")}
          rows={compact ? 4 : 5}
          placeholder="Tell us about your business, your goals, and the challenges you're facing — anything that helps us understand how we can help you grow."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? fid("message-error") : undefined}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p id={fid("message-error")} className="text-red-600 text-xs mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {errors.root && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <span>{errors.root.message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full gradient-bg text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 transition-[box-shadow,opacity] duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
      >
        {isSubmitting ? (
          <>
            <span
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
              aria-hidden="true"
            />
            Sending your message…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" />
            Send Message — It&apos;s Free
          </>
        )}
      </button>

      <p className="text-center text-xs text-[#6B6B6B]">
        By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </a>
        . We never share your data.
      </p>
    </form>
  );
}
