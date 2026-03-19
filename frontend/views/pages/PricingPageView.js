import FAQAccordion from "@/components/client/FAQAccordion";
import PricingToggle from "@/components/client/PricingToggle";
import ButtonLink from "@/components/shared/ButtonLink";
import SectionHeading from "@/components/shared/SectionHeading";
import SiteShell from "@/views/pages/SiteShell";

export default function PricingPageView({
  brand,
  hero,
  plans,
  included,
  useCases,
  reassurance,
  faqs,
  finalCta,
}) {
  return (
    <SiteShell brand={brand}>
      <main>
        <section className="section-space">
          <div className="section-wrap">
            <div
              className="rounded-full border bg-[rgba(124,92,255,0.12)] px-5 py-3 text-center text-sm text-[color:var(--color-highlight)]"
              style={{ borderColor: "rgba(124, 92, 255, 0.25)" }}
            >
              Launch pricing: guided onboarding included on annual plans
            </div>

            <div className="mt-8">
              <SectionHeading
                eyebrow={hero.eyebrow}
                title={hero.title}
                description={hero.description}
                align="center"
              />
            </div>

            <div className="mt-12 flex justify-center">
              <PricingToggle plans={plans} />
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="panel-soft rounded-[32px] p-8">
              <h2 className="text-2xl font-semibold text-white">What’s included</h2>
              <div className="mt-6 grid gap-3">
                {included.map((item) => (
                  <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/82">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-soft rounded-[32px] p-8">
              <h2 className="text-2xl font-semibold text-white">Workflow examples</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {useCases.map((workflow) => (
                  <div key={workflow.prompt} className="rounded-[24px] border border-white/10 bg-black/24 p-5">
                    <div className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-highlight)]">
                      {workflow.employee}
                    </div>
                    <div className="mt-3 text-xl font-semibold text-white">{workflow.prompt}</div>
                    <div className="mt-3 text-sm leading-7 text-[color:var(--color-text-secondary)]">
                      {workflow.output}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="panel-soft rounded-[32px] p-8">
              <SectionHeading
                eyebrow="Buying reassurance"
                title="Designed to make rollout feel low-risk"
                description="The commercial model is simple: start small, stay in control, and expand when the workflows are clearly working."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {reassurance.map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/10 bg-black/24 px-5 py-5 text-sm text-white/82">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Pricing FAQ"
              title="Questions teams ask before they commit"
              description="Pricing is built around employee count, action volume, workspaces, and rollout support."
            />
            <FAQAccordion items={faqs} />
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="panel rounded-[32px] px-6 py-10 text-center sm:px-10">
              <SectionHeading
                eyebrow="Next step"
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
