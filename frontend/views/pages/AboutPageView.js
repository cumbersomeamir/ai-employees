import ButtonLink from "@/components/shared/ButtonLink";
import SectionHeading from "@/components/shared/SectionHeading";
import SiteShell from "@/views/pages/SiteShell";

export default function AboutPageView({ brand, hero, principles, operatingModel, finalCta }) {
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
              {principles.map((principle) => (
                <div key={principle} className="panel-soft rounded-[30px] p-7">
                  <div className="text-2xl font-semibold text-white">{principle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="panel-soft rounded-[32px] p-8">
              <SectionHeading
                eyebrow="Operating model"
                title="How rollout is supposed to work"
                description="Keep it structured: pick a role, connect the right stack, train context, then expand only when the workflow is stable."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                {operatingModel.map((step, index) => (
                  <div key={step} className="rounded-[24px] border border-white/10 bg-black/24 px-5 py-5">
                    <div className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-highlight)]">
                      0{index + 1}
                    </div>
                    <div className="mt-3 text-lg font-semibold text-white">{step}</div>
                  </div>
                ))}
              </div>
            </div>
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
