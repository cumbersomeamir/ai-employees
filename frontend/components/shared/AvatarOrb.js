export default function AvatarOrb({
  name,
  role,
  accent = "#7C5CFF",
  secondary = "#22D3EE",
  className = "",
  size = "md",
}) {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24 sm:h-28 sm:w-28",
    lg: "h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52",
  };

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-[32%] border border-white/12 ${sizeClasses[size]} ${className}`}
      style={{
        background: `radial-gradient(circle at 30% 24%, ${secondary}55, transparent 25%), linear-gradient(140deg, ${accent}, ${secondary})`,
        boxShadow: `0 30px 70px ${accent}30`,
      }}
    >
      <div className="absolute inset-[11%] rounded-[28%] border border-white/18 bg-black/22 backdrop-blur-sm" />
      <div className="absolute left-1/2 top-[23%] h-[34%] w-[54%] -translate-x-1/2 rounded-[45%] border border-white/15 bg-[#050816]/80">
        <div className="absolute left-[22%] top-[42%] h-2.5 w-2.5 rounded-full bg-white/85 shadow-[0_0_16px_rgba(255,255,255,0.4)] sm:h-3 sm:w-3" />
        <div className="absolute right-[22%] top-[42%] h-2.5 w-2.5 rounded-full bg-white/85 shadow-[0_0_16px_rgba(255,255,255,0.4)] sm:h-3 sm:w-3" />
      </div>
      <div className="absolute bottom-[20%] left-1/2 h-[18%] w-[45%] -translate-x-1/2 rounded-full border border-white/10 bg-white/8" />
      <div className="relative z-10 mt-[48%] rounded-full border border-white/18 bg-black/30 px-2.5 py-1 text-[10px] font-bold tracking-[0.24em] text-white/90 sm:text-xs">
        {initials}
      </div>
      <div className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 text-center sm:block">
        <div className="text-sm font-semibold text-white">{name}</div>
        {role ? <div className="mt-1 text-xs text-white/55">{role}</div> : null}
      </div>
    </div>
  );
}
