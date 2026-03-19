import ButtonLink from "@/components/shared/ButtonLink";
import EmployeeMiniCard from "@/components/shared/EmployeeMiniCard";
import SectionHeading from "@/components/shared/SectionHeading";
import SiteShell from "@/views/pages/SiteShell";

export default function IntegrationsPageView({
  brand,
  hero,
  integrations,
  employees,
  testimonials,
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
            <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="panel-soft rounded-[28px] p-5 text-center"
                >
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-bold text-slate-950"
                    style={{ backgroundColor: integration.accent }}
                  >
                    {integration.short}
                  </div>
                  <div className="mt-4 text-sm font-semibold text-white">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap grid gap-6 lg:grid-cols-3">
            {integrations.map((integration) => (
              <div key={integration.name} className="panel-soft rounded-[30px] p-6">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-bold text-slate-950"
                  style={{ backgroundColor: integration.accent }}
                >
                  {integration.short}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{integration.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-text-secondary)]">
                  {integration.description}
                </p>
                <div className="mt-5 grid gap-3 text-sm text-white/82">
                  {integration.actions.map((action) => (
                    <div key={action} className="rounded-[18px] border border-white/10 bg-black/24 px-4 py-3">
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Connected workforce"
              title="12 employees. One connected workforce."
              description="Every role uses the same context layer and tool access, then executes in its own lane."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {employees.map((employee) => (
                <EmployeeMiniCard key={employee.slug} employee={employee} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="panel-soft rounded-[30px] p-8">
                <div className="text-xl font-medium leading-8 text-white">“{testimonial.quote}”</div>
                <div className="mt-6 text-base font-semibold text-white">{testimonial.author}</div>
                <div className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                  {testimonial.title}
                </div>
              </div>
            ))}
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
