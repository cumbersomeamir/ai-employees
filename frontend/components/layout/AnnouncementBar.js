import Link from "next/link";

export default function AnnouncementBar({ announcement }) {
  return (
    <Link
      href={announcement.href}
      className="block border-b border-white/6 bg-black/30 px-4 py-3 text-center text-xs font-medium tracking-[0.18em] text-white/70 uppercase backdrop-blur-md"
    >
      <span className="mr-3 rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[10px] text-[color:var(--color-highlight)]">
        {announcement.label}
      </span>
      {announcement.message}
    </Link>
  );
}
