import ButtonLink from "@/components/shared/ButtonLink";
import SectionHeading from "@/components/shared/SectionHeading";
import SiteShell from "@/views/pages/SiteShell";

export default function WorkflowsPageView({ brand, hero, workflows, employees, finalCta }) {
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
              {workflows.map((workflow) => (
                <div key={workflow.prompt} className="panel-soft rounded-[32px] p-7">
                  <div className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-highlight)]">
                    {workflow.employee}
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold text-white">{workflow.prompt}</h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-secondary)]">
                    {workflow.description}
                  </p>
                  <div className="mt-6 rounded-[22px] border border-white/10 bg-black/24 px-5 py-4 text-sm text-white/82">
                    {workflow.output}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="panel-soft rounded-[32px] p-8">
              <SectionHeading
                eyebrow="Role coverage"
                title="Map each workflow to the employee who should own it"
                description="The platform works best when ownership is explicit and each role has a clear execution lane."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {employees.map((employee) => (
                  <div key={employee.slug} className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/82">
                    {employee.name} • {employee.role}
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
