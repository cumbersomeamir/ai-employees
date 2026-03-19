"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

import ButtonLink from "@/components/shared/ButtonLink";

export default function MainHeader({ brand, products, featureLinks }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const navLinks = brand.navLinks.filter(
    (item) => item.label !== "Products" && item.label !== "Features"
  );

  const dropdownClasses =
    "absolute left-0 top-[calc(100%-2px)] z-30 hidden min-w-[280px] rounded-[24px] border border-white/10 bg-[rgba(10,18,34,0.98)] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl group-hover:block";

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[rgba(7,17,31,0.72)] backdrop-blur-xl">
      <div className="section-wrap flex h-20 items-center justify-between gap-6">
        <Link href="/" className="text-2xl font-semibold tracking-[-0.08em] text-white">
          ai<span className="text-[color:var(--color-highlight)]">-</span>employees
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          <div className="group relative">
            <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/78 transition hover:bg-white/6 hover:text-white">
              Products <ChevronDown size={16} />
            </button>
            <div className="absolute inset-x-0 top-full h-4" aria-hidden="true" />
            <div className={dropdownClasses}>
              <div className="grid gap-3">
                {products.slice(0, 6).map((product) => (
                  <Link
                    key={product.slug}
                    href={`/employees/${product.slug}`}
                    className="rounded-2xl border border-white/6 bg-white/4 px-4 py-3 transition hover:border-white/14 hover:bg-white/7"
                  >
                    <div className="text-sm font-semibold text-white">{product.name}</div>
                    <div className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                      {product.role}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/78 transition hover:bg-white/6 hover:text-white">
              Features <ChevronDown size={16} />
            </button>
            <div className="absolute inset-x-0 top-full h-4" aria-hidden="true" />
            <div className={dropdownClasses}>
              <div className="grid gap-3">
                {featureLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-white/6 bg-white/4 px-4 py-3 transition hover:border-white/14 hover:bg-white/7"
                  >
                    <div className="text-sm font-semibold text-white">{link.label}</div>
                    <div className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                      {link.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/78 transition hover:bg-white/6 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/demo" className="px-2 text-sm font-medium text-white/78 transition hover:text-white">
            Log in
          </Link>
          <ButtonLink href="/pricing">Get Started</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/6 bg-[rgba(7,17,31,0.96)] px-4 py-6 lg:hidden">
          <div className="section-wrap grid gap-3 px-0">
            <button
              type="button"
              onClick={() => setOpenMenu(openMenu === "products" ? null : "products")}
              className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-left text-sm font-medium text-white"
            >
              Products <ChevronDown size={16} />
            </button>
            {openMenu === "products"
              ? products.slice(0, 8).map((product) => (
                  <Link
                    key={product.slug}
                    href={`/employees/${product.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-[color:var(--color-text-secondary)]"
                  >
                    <div className="font-semibold text-white">{product.name}</div>
                    <div className="mt-1">{product.role}</div>
                  </Link>
                ))
              : null}

            <button
              type="button"
              onClick={() => setOpenMenu(openMenu === "features" ? null : "features")}
              className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-left text-sm font-medium text-white"
            >
              Features <ChevronDown size={16} />
            </button>
            {openMenu === "features"
              ? featureLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-[color:var(--color-text-secondary)]"
                  >
                    <div className="font-semibold text-white">{link.label}</div>
                    <div className="mt-1">{link.description}</div>
                  </Link>
                ))
              : null}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm font-medium text-white"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 flex flex-col gap-3">
              <ButtonLink href="/pricing">Get Started</ButtonLink>
              <ButtonLink href="/demo" variant="secondary">
                Log in
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
