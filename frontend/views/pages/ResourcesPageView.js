import ButtonLink from "@/components/shared/ButtonLink";
import SectionHeading from "@/components/shared/SectionHeading";
import SiteShell from "@/views/pages/SiteShell";

export default function ResourcesPageView({ brand, hero, resources, finalCta }) {
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
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {resources.map((resource) => (
                <div key={resource.title} className="panel-soft rounded-[30px] p-8">
                  <div className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-highlight)]">
                    {resource.category}
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
                    {resource.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-secondary)]">
                    {resource.summary}
                  </p>
                </div>
              ))}
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
