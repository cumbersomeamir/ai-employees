export default function StatusPill({ label, accent = "#34D399" }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/75"
      style={{
        borderColor: `${accent}55`,
        background: `${accent}14`,
      }}
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: accent }}
      />
      {label}
    </span>
  );
}
