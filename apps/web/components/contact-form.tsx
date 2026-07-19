'use client';

import { useState } from 'react';

/**
 * Front-end-only contact form. Wire `onSubmit` to your own endpoint, a form
 * service (Formspree, Resend, etc.), or an Ever Works action to actually deliver
 * messages. Out of the box it just shows a success state.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <h3 className="text-lg font-semibold">Thanks — we’ll be in touch!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your message has been received. We usually reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      data-component="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4 rounded-2xl border border-border bg-card p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
      >
        Send message
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Prefer email? Reach us any time and we’ll get back to you.
      </p>
      <noscript>
        <p className="text-center text-xs text-muted-foreground">
          Enable JavaScript, or configure a form action, to submit this form.
        </p>
      </noscript>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
  required
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
      />
    </div>
  );
}
