"use client";

import { useState } from "react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="panel glow-border rounded-[32px] p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-white">Request a guided rollout demo</h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--color-text-secondary)]">
        Share the first role you want to deploy and the workflows you want to automate.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        <input
          required
          type="text"
          placeholder="Your name"
          className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
        />
        <input
          required
          type="email"
          placeholder="Work email"
          className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
        />
        <input
          type="text"
          placeholder="Company"
          className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
        />
        <textarea
          required
          placeholder="Which AI employee do you want first, and what should it own?"
          rows={5}
          className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
        />
        <button
          type="submit"
          className="rounded-full bg-[color:var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8D73FF]"
        >
          Request Demo
        </button>
      </form>

      {submitted ? (
        <div className="mt-4 rounded-2xl border border-emerald-400/18 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
          Demo request captured locally in the UI. No external API keys are needed for this build.
        </div>
      ) : null}
    </div>
  );
}
