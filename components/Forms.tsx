"use client";

import { useState, type FormEvent } from "react";
import { HOME } from "@/data/data";
import { ChevronDownIcon, SendIcon } from "@/lib/icons";

const { form } = HOME.contact;

const fieldClass = "h-[44px] w-full rounded-lg border border-[#dccfc6] bg-white px-4 text-[14.5px] text-[#1d2330] outline-none transition placeholder:text-[#6b7280] focus:border-[#6b1b35] focus:shadow-[0_0_0_3px_rgba(107,27,53,0.12)]";

const Field = ({ name, placeholder, type = "text", required = false, autoComplete }: { name: string; placeholder: string; type?: string; required?: boolean; autoComplete?: string }) => (
  <input name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} aria-label={placeholder} className={fieldClass} />
);

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col justify-between rounded-3xl bg-[linear-gradient(180deg,#f8f0ea_0%,#fbf6f2_100%)] p-4 sm:p-5 xl:p-6">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field name="name" placeholder={form.fields.namePlaceholder} required autoComplete="name" />
        <Field name="email" placeholder={form.fields.emailPlaceholder} type="email" required autoComplete="email" />
        <Field name="phone" placeholder={form.fields.phonePlaceholder} type="tel" autoComplete="tel" />
        <div className="relative">
          <select name="enquiry" aria-label={form.enquiryLabel} defaultValue="" className={`${fieldClass} appearance-none pr-10 ${"invalid:text-[#6b7280]"}`} required>
            <option value="" disabled>
              {form.enquiryLabel}
            </option>
            {form.enquiryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDownIcon size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1d2330]" />
        </div>
        <textarea name="message" required rows={3} placeholder={form.fields.messagePlaceholder} aria-label={form.fields.messagePlaceholder} className={`${fieldClass} h-[108px] resize-y py-2.5 sm:col-span-2`} />
      </div>
      <button type="submit" className="mt-4 inline-flex h-[46px] w-full items-center justify-center gap-3 rounded-lg bg-[#6b1b35] px-8 text-[16px] font-semibold text-white shadow-[0_14px_26px_-14px_rgba(107,27,53,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#561529]">
        {form.submit}
        <SendIcon size={19} />
      </button>
      {sent && (
        <p role="status" className="mt-4 rounded-md bg-[#f8ece8] px-4 py-2.5 text-sm text-[#6b1b35]">
          {form.success}
        </p>
      )}
    </form>
  );
}
