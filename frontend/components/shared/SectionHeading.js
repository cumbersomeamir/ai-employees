export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 subcopy">{description}</p> : null}
    </div>
  );
}
