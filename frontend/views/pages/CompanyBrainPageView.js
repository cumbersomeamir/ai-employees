import ButtonLink from "@/components/shared/ButtonLink";
import AvatarOrb from "@/components/shared/AvatarOrb";
import SectionHeading from "@/components/shared/SectionHeading";
import SiteShell from "@/views/pages/SiteShell";

export default function CompanyBrainPageView({ brand, hero, companyBrain, controls, finalCta }) {
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
            <div className="mt-14 panel glow-border rounded-[34px] p-6 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <h2 className="text-3xl font-semibold text-white">Everything your employees should know</h2>
                  <div className="mt-6 grid gap-4">
                    {companyBrain.inputs.map((item) => (
                      <div key={item} className="rounded-[24px] border border-white/10 bg-black/24 px-5 py-4 text-sm text-white/82">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[420px] rounded-[32px] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.15),transparent_52%),linear-gradient(180deg,rgba(17,28,51,0.48),rgba(7,17,31,0.9))]">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <AvatarOrb name="Brain" role="Source of truth" size="lg" />
                  </div>
                  {companyBrain.principles.map((principle, index) => {
                    const positions = [
                      "left-8 top-10",
                      "right-8 top-16",
                      "left-1/2 bottom-10 -translate-x-1/2",
                    ];
                    return (
                      <div
                        key={principle}
                        className={`absolute rounded-[22px] border border-white/10 bg-black/34 px-5 py-4 text-sm text-white/82 ${positions[index]}`}
                      >
                        {principle}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {controls.map((control) => (
              <div key={control} className="panel-soft rounded-[28px] p-6">
                <div className="text-lg font-semibold text-white">{control}</div>
                <div className="mt-3 text-sm leading-7 text-[color:var(--color-text-secondary)]">
                  Configurable governance so AI employees act with business context and human control.
                </div>
              </div>
            ))}
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
