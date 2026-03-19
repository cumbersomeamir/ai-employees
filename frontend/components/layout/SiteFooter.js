import Link from "next/link";

export default function SiteFooter({ brand }) {
  return (
    <footer className="border-t border-white/6 bg-black/24">
      <div className="section-wrap grid gap-12 py-14 lg:grid-cols-[1.2fr_1.8fr]">
        <div>
          <div className="text-2xl font-semibold tracking-[-0.08em] text-white">
            ai<span className="text-[color:var(--color-highlight)]">-</span>employees
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-[color:var(--color-text-secondary)]">
            Hire AI employees for real business roles, train them on your company,
            and let them work across your existing tools.
          </p>
          <div className="mt-6 text-sm text-white/60">{brand.supportEmail}</div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {brand.footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                {group.title}
              </h3>
              <div className="mt-4 grid gap-3">
                {group.links.map((link) => (
                  <Link
                    key={`${group.title}-${link.label}`}
                    href={link.href}
                    className="text-sm text-[color:var(--color-text-secondary)] transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
