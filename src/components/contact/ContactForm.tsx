"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/src/app/contact/actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState,
  );

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} action={formAction} className="grid gap-6">
      <div className="grid gap-2">
        <label htmlFor="name">Name</label>

        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          placeholder="Your name"
          className="rounded-md border p-3"
          aria-describedby={
            state.errors?.name ? "name-error" : undefined
          }
        />

        {state.errors?.name && (
          <p id="name-error" className="text-sm text-red-500">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="rounded-md border p-3"
          aria-describedby={
            state.errors?.email ? "email-error" : undefined
          }
        />

        {state.errors?.email && (
          <p id="email-error" className="text-sm text-red-500">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          placeholder="Tell me about your project..."
          className="resize-none rounded-md border p-3"
          aria-describedby={
            state.errors?.message ? "message-error" : undefined
          }
        />

        {state.errors?.message && (
          <p id="message-error" className="text-sm text-red-500">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-blue-50 hover:text-blue-600 dark:hover:text-blue-400 text-2xl px-6 py-3 text-blue-600 disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {state.message && (
        <FormMessage
          message={state.message}
          success={state.success}
          onSuccess={() => formRef.current?.reset()}
        />
      )}
    </form>
  );
}

function FormMessage({
  message,
  success,
  onSuccess,
}: {
  message: string;
  success: boolean;
  onSuccess: () => void;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (success) {
      onSuccess();
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, [success, onSuccess]);

  if (!visible) {
    return null;
  }

  return (
    <p
      aria-live="polite"
      className={success ? "text-green-600" : "text-red-500"}
    >
      {message}
    </p>
  );
}