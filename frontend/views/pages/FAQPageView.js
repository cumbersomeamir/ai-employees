import FAQAccordion from "@/components/client/FAQAccordion";
import ButtonLink from "@/components/shared/ButtonLink";
import SectionHeading from "@/components/shared/SectionHeading";
import SiteShell from "@/views/pages/SiteShell";

export default function FAQPageView({ brand, hero, faqs, finalCta }) {
  return (
    <SiteShell brand={brand}>
      <main>
        <section className="section-space">
          <div className="section-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow={hero.eyebrow}
              title={hero.title}
              description={hero.description}
            />
            <FAQAccordion items={faqs} />
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="panel rounded-[32px] px-6 py-10 text-center sm:px-10">
              <SectionHeading
                eyebrow="Still evaluating?"
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
