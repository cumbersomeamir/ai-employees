import ButtonLink from "@/components/shared/ButtonLink";
import SectionHeading from "@/components/shared/SectionHeading";
import AvatarOrb from "@/components/shared/AvatarOrb";
import EmployeeMiniCard from "@/components/shared/EmployeeMiniCard";
import StatusPill from "@/components/shared/StatusPill";
import TestimonialCarousel from "@/components/client/TestimonialCarousel";
import SiteShell from "@/views/pages/SiteShell";

function IntegrationBadge({ integration }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-2xl text-xs font-bold text-slate-950"
        style={{ backgroundColor: integration.accent }}
      >
        {integration.short}
      </div>
      <div className="mt-3 text-sm font-semibold text-white">{integration.name}</div>
      <div className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
        {integration.actions[0]}
      </div>
    </div>
  );
}

export default function HomePageView({
  brand,
  hero,
  employees,
  workflows,
  globalSection,
  companyBrain,
  integrations,
  workspaceFeatures,
  testimonials,
  finalCta,
}) {
  return (
    <SiteShell brand={brand}>
      <main className="overflow-hidden">
        <section className="section-wrap pt-8 sm:pt-10 lg:pt-14">
          <div className="panel bg-mesh glow-border relative overflow-hidden rounded-[34px] px-6 py-8 sm:px-10 sm:py-12 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-14 lg:py-16">
            <div className="relative z-10">
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1 className="headline max-w-4xl">{hero.title}</h1>
              <p className="mt-6 max-w-2xl subcopy">{hero.description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
                <ButtonLink href={hero.secondaryCta.href} variant="secondary">
                  {hero.secondaryCta.label}
                </ButtonLink>
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                {hero.stats.map((stat) => (
                  <div key={stat.label} className="rounded-[24px] border border-white/10 bg-black/24 px-4 py-4">
                    <div className="text-3xl font-semibold tracking-[-0.06em] text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-[color:var(--color-text-secondary)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-16 min-h-[520px] lg:mt-0">
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.24),transparent_55%)]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[56%]">
                <AvatarOrb
                  name="AI Team"
                  role="Workforce online"
                  accent="#7C5CFF"
                  secondary="#22D3EE"
                  size="lg"
                />
              </div>

              {employees.slice(0, 4).map((employee, index) => {
                const positions = [
                  "left-0 top-8",
                  "right-0 top-[4.5rem] sm:top-12",
                  "left-4 bottom-16",
                  "right-6 bottom-6",
                ];

                return (
                  <div
                    key={employee.slug}
                    className={`floating-card panel-soft absolute w-[220px] rounded-[28px] p-4 sm:w-[240px] ${positions[index]}`}
                    style={{ animationDelay: `${index * 0.45}s` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <StatusPill label={employee.status} accent={employee.accent} />
                        <div className="mt-3 text-lg font-semibold text-white">{employee.name}</div>
                        <div className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                          {employee.role}
                        </div>
                      </div>
                      <AvatarOrb
                        name={employee.name}
                        accent={employee.accent}
                        secondary={employee.secondary}
                        size="sm"
                        className="shrink-0"
                      />
                    </div>
                    <div className="mt-4 rounded-2xl border border-white/8 bg-black/24 px-3 py-3 text-sm text-white/82">
                      {employee.preview}
                    </div>
                  </div>
                );
              })}

              <div className="panel-soft absolute bottom-0 left-1/2 w-full max-w-[420px] -translate-x-1/2 rounded-[26px] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-highlight)]">
                      Workforce status
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">6 employees active</div>
                  </div>
                  <div className="rounded-full border border-emerald-400/18 bg-emerald-400/12 px-3 py-2 text-sm text-emerald-200">
                    14 tasks in progress
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="section-wrap">
            <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-black px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
              <div className="absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_56%)]" />
              <div className="relative">
                <SectionHeading
                  eyebrow="Employee directory"
                  title="Find the right AI employee for any business"
                  description="Every business is different. Your team should be too. Hire role-based AI employees built to own specific functions so you can stop juggling and start delegating."
                  align="center"
                />

                <div className="mt-12 flex justify-center">
                  <AvatarOrb
                    name="Ari"
                    role="Support"
                    accent="#F97316"
                    secondary="#FBBF24"
                    size="lg"
                  />
                </div>

                <div className="mt-16 flex gap-5 overflow-x-auto pb-4">
                  {employees.map((employee) => (
                    <EmployeeMiniCard
                      key={employee.slug}
                      employee={employee}
                      compact
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="What they do while you sleep"
              title="Prompt-free workflows with clear operational output"
              description="Use natural language requests to trigger role-specific execution. The output looks like work getting done, not more prompting."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {workflows.map((workflow) => (
                <div
                  key={workflow.prompt}
                  className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br ${workflow.accent} p-6 shadow-[0_30px_90px_rgba(0,0,0,0.24)] sm:p-8`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%)]" />
                  <div className="relative grid gap-6 lg:grid-cols-[1fr_220px]">
                    <div>
                      <div className="text-sm uppercase tracking-[0.22em] text-white/72">
                        {workflow.employee} • {workflow.role}
                      </div>
                      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
                        {workflow.prompt}
                      </h3>
                      <p className="mt-4 max-w-xl text-base leading-7 text-white/80">
                        {workflow.description}
                      </p>
                    </div>

                    <div className="relative mx-auto w-full max-w-[220px] rounded-[32px] border border-white/12 bg-black/22 p-4 backdrop-blur-md">
                      <div className="absolute inset-x-4 top-4 h-7 rounded-full bg-white/14" />
                      <div className="pt-12">
                        <div className="rounded-[26px] border border-white/10 bg-white/94 p-4 text-slate-950 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Result preview
                          </div>
                          <div className="mt-3 text-sm leading-6">{workflow.output}</div>
                        </div>
                        <div className="mt-4 rounded-[22px] border border-white/10 bg-black/26 px-4 py-3 text-sm text-white/75">
                          Review ready in under 2 minutes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="grid gap-8 overflow-hidden rounded-[34px] border border-white/10 bg-black px-6 py-10 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-16">
              <div className="relative flex min-h-[420px] items-center justify-center rounded-[32px] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.16),transparent_52%),linear-gradient(180deg,rgba(17,28,51,0.5),rgba(7,17,31,0.96))]">
                <div className="absolute left-1/2 top-1/2 h-[300px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.4))] shadow-[0_40px_100px_rgba(0,0,0,0.4)]" />
                <div className="relative z-10 -translate-y-6">
                  <AvatarOrb
                    name="Nova"
                    role="Global"
                    accent="#A78BFA"
                    secondary="#22D3EE"
                    size="lg"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <SectionHeading
                  eyebrow="Works globally"
                  title={globalSection.title}
                  description={globalSection.description}
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {globalSection.chips.map((chip) => (
                    <div key={chip} className="rounded-[22px] border border-white/10 bg-white/4 px-4 py-4 text-sm text-white/82">
                      {chip}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="panel glow-border relative overflow-hidden rounded-[34px] px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
                <div>
                  <SectionHeading
                    eyebrow="Company Brain"
                    title={companyBrain.title}
                    description={companyBrain.description}
                  />
                  <div className="mt-8 grid gap-4">
                    {companyBrain.inputs.map((item) => (
                      <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/82">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[460px] rounded-[32px] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.14),transparent_56%),linear-gradient(180deg,rgba(17,28,51,0.5),rgba(7,17,31,0.92))]">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <AvatarOrb
                      name="Brain"
                      role="Shared context"
                      accent="#7C5CFF"
                      secondary="#A78BFA"
                      size="lg"
                    />
                  </div>

                  {companyBrain.principles.map((item, index) => {
                    const positions = [
                      "left-8 top-10",
                      "right-8 top-20",
                      "left-1/2 bottom-8 -translate-x-1/2",
                    ];

                    return (
                      <div
                        key={item}
                        className={`absolute rounded-[24px] border border-white/10 bg-black/36 px-5 py-4 text-sm text-white/82 ${positions[index]}`}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="grid gap-10 overflow-hidden rounded-[34px] border border-white/10 bg-black px-6 py-10 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:py-16">
              <div className="flex flex-col justify-center">
                <SectionHeading
                  eyebrow="Integrations preview"
                  title="Your AI employees work inside the stack you already run"
                  description="They do not live in a silo. Connect inboxes, calendars, docs, CRM, finance, and analytics so the workforce can act with the right context."
                />
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {integrations.map((integration) => (
                    <IntegrationBadge key={integration.name} integration={integration} />
                  ))}
                </div>
              </div>

              <div className="panel-soft rounded-[32px] p-6 sm:p-8">
                <div className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-highlight)]">
                  Connected workforce
                </div>
                <div className="mt-5 grid gap-4">
                  {integrations.slice(0, 4).map((integration) => (
                    <div
                      key={integration.name}
                      className="rounded-[24px] border border-white/8 bg-white/4 px-4 py-4"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-2xl text-xs font-bold text-slate-950"
                          style={{ backgroundColor: integration.accent }}
                        >
                          {integration.short}
                        </div>
                        <div>
                          <div className="text-base font-semibold text-white">{integration.name}</div>
                          <div className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                            {integration.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <ButtonLink href="/integrations" variant="secondary" className="mt-8">
                  View all integrations
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="panel-soft overflow-hidden rounded-[34px] px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-14 lg:py-16">
              <div>
                <SectionHeading
                  eyebrow="Team collaboration"
                  title="One workforce, multiple workspaces"
                  description="Keep brands, clients, and business units separate while your team shares one AI workforce operating system."
                />
                <div className="mt-8 grid gap-4">
                  {workspaceFeatures.map((feature) => (
                    <div key={feature} className="rounded-[24px] border border-white/10 bg-black/24 px-5 py-4 text-sm text-white/82">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-4 lg:mt-0">
                {[
                  "Workspace 01 • Brightline Retail",
                  "Workspace 02 • Delta Studio",
                  "Workspace 03 • Founder Office",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[26px] border border-white/10 bg-white/5 px-5 py-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-base font-semibold text-white">{item}</div>
                        <div className="mt-2 text-sm text-[color:var(--color-text-secondary)]">
                          {index === 0
                            ? "Ari, Nova, and Vector sharing one retail memory profile"
                            : index === 1
                              ? "Echo, Quill, and Pulse working across client delivery"
                              : "Luma and Atlas coordinating executive operations"}
                        </div>
                      </div>
                      <div className="rounded-full border border-white/10 bg-black/28 px-3 py-2 text-sm text-white/72">
                        {index === 0 ? "12 active actions" : index === 1 ? "7 active actions" : "5 active actions"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Social proof"
              title="Built for operators, founders, agencies, and modern teams"
              description="Use cases change by business. The promise stays the same: less manual coordination and more work getting done."
              align="center"
            />
            <div className="mt-10">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="panel glow-border rounded-[34px] px-6 py-10 text-center sm:px-10 lg:px-14 lg:py-16">
              <SectionHeading
                eyebrow="Final CTA"
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
