import ButtonLink from "@/components/shared/ButtonLink";

export default function FloatingDemoButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden md:block">
      <ButtonLink href="/demo" className="px-5 py-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        Book Demo
      </ButtonLink>
    </div>
  );
}
