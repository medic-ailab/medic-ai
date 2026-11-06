"use client";

import { FormEvent, useState } from "react";

// Set NEXT_PUBLIC_WAITLIST_ENDPOINT to a URL that accepts a JSON POST: { email }.
// While it's unset, nothing is collected and the form says so.
const ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? "";

export function JoinForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const value = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setInvalid(true);
      setMessage("Enter an email address like name@example.com.");
      return;
    }
    setInvalid(false);

    if (!ENDPOINT) {
      setMessage("Sign-ups aren't open yet, so your email wasn't saved.");
      return;
    }

    setSending(true);
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setEmail("");
      setMessage("You've joined the early list.");
    } catch {
      setMessage("Your email wasn't saved. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="join-form glass" onSubmit={onSubmit} noValidate>
      <label htmlFor="email">Email address</label>
      <div className="field-row">
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="name@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={invalid || undefined}
          aria-describedby="form-hint form-message"
        />
        <button className="btn btn-loud" type="submit" disabled={sending}>
          Join the early list
        </button>
      </div>
      <p className="hint" id="form-hint">
        We'll only email you the launch date and the official contract address.
      </p>
      <p className="message" id="form-message" role="status">
        {message}
      </p>
    </form>
  );
}
