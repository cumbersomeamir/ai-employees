import FAQAccordion from "@/components/client/FAQAccordion";
import ButtonLink from "@/components/shared/ButtonLink";
import SectionHeading from "@/components/shared/SectionHeading";
import SiteShell from "@/views/pages/SiteShell";

export default function PrivacySecurityPageView({
  brand,
  hero,
  controls,
  faqs,
  finalCta,
}) {
  return (
    <SiteShell brand={brand}>
      <main>
        <section className="section-space">
          <div className="section-wrap">
            <SectionHeading
              eyebrow={hero.eyebrow}
              title={hero.title}
              description={hero.description}
              align="center"
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {controls.map((control) => (
                <div key={control} className="panel-soft rounded-[30px] p-7">
                  <div className="text-xl font-semibold text-white">{control}</div>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-secondary)]">
                    Governance is built into workspace setup so sensitive workflows stay visible and reviewable.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Security FAQ"
              title="Controls that matter before automation expands"
              description="Review rules, isolation boundaries, and how actions stay traceable."
            />
            <FAQAccordion items={faqs} />
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="panel rounded-[32px] px-6 py-10 text-center sm:px-10">
              <SectionHeading
                eyebrow="CTA"
                title={finalCta.title}
                description={finalCta.description}
                align="center"
              />
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ButtonLink href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</ButtonLink>
                <ButtonLink href={finalCta.secondaryCta.href} variant="secondary">
                  {finalCta.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
