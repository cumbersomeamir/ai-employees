"use client";

import { useState } from "react";

import ButtonLink from "@/components/shared/ButtonLink";

export default function PricingToggle({ plans }) {
  const [annual, setAnnual] = useState(true);

  return (
    <div>
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
        <button
          type="button"
          onClick={() => setAnnual(false)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            annual ? "text-white/65" : "bg-white text-slate-950"
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setAnnual(true)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            annual ? "bg-white text-slate-950" : "text-white/65"
          }`}
        >
          Annual
        </button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = annual ? plan.annual : plan.monthly;

          return (
            <div
              key={plan.name}
              className={`rounded-[32px] border p-7 ${
                plan.featured
                  ? "border-[color:var(--color-primary)] bg-[linear-gradient(180deg,rgba(124,92,255,0.2),rgba(17,28,51,0.76))] shadow-[0_30px_90px_rgba(124,92,255,0.22)]"
                  : "panel-soft border-white/10"
              }`}
            >
              <div className="text-sm uppercase tracking-[0.24em] text-white/55">{plan.badge}</div>
              <h3 className="mt-4 text-3xl font-semibold text-white">{plan.name}</h3>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-semibold tracking-[-0.06em] text-white">${price}</span>
                <span className="pb-2 text-sm text-[color:var(--color-text-secondary)]">/mo</span>
              </div>
              {annual ? (
                <div className="mt-2 text-sm text-[color:var(--color-secondary)]">
                  Save up to 25% with annual billing
                </div>
              ) : null}
              <div className="mt-8 space-y-4 text-sm text-[color:var(--color-text-secondary)]">
                <div>{plan.employees}</div>
                <div>{plan.workspaces}</div>
                <div>{plan.actions}</div>
                <div>{plan.integrations}</div>
                <div>{plan.support}</div>
              </div>
              <ButtonLink href="/demo" className="mt-8 w-full">
                {plan.cta}
              </ButtonLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
