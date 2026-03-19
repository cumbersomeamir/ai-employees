"use client";

import Link from "next/link";

const variantClasses = {
  primary:
    "bg-[color:var(--color-primary)] text-white shadow-[0_20px_60px_rgba(124,92,255,0.36)] hover:-translate-y-0.5 hover:bg-[#8D73FF]",
  secondary:
    "border border-white/12 bg-white/6 text-white hover:-translate-y-0.5 hover:bg-white/10",
  ghost:
    "text-[color:var(--color-text-secondary)] hover:text-white",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
