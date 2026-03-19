import FAQAccordion from "@/components/client/FAQAccordion";
import ButtonLink from "@/components/shared/ButtonLink";
import AvatarOrb from "@/components/shared/AvatarOrb";
import EmployeeMiniCard from "@/components/shared/EmployeeMiniCard";
import SectionHeading from "@/components/shared/SectionHeading";
import StatusPill from "@/components/shared/StatusPill";
import SiteShell from "@/views/pages/SiteShell";

export default function EmployeeDetailPageView({
  brand,
  employee,
  onboardingSteps,
  relatedEmployees,
  privacyItems,
  companyBrainItems,
}) {
  return (
    <SiteShell brand={brand}>
      <main>
        <section className="section-space">
          <div className="section-wrap">
            <div className="panel bg-mesh glow-border overflow-hidden rounded-[34px] px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:px-14 lg:py-16">
              <div>
                <StatusPill label={employee.status} accent={employee.accent} />
                <h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
                  Meet {employee.name} — your AI {employee.role.replace(" Employee", "")}
                </h1>
                <p className="mt-6 max-w-2xl subcopy">{employee.tagline}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink href="/demo">Book Demo</ButtonLink>
                  <ButtonLink href="/pricing" variant="secondary">
                    See Pricing
                  </ButtonLink>
                </div>
              </div>

              <div className="mt-12 flex items-center justify-center lg:mt-0">
                <AvatarOrb
                  name={employee.name}
                  role={employee.role}
                  accent={employee.accent}
                  secondary={employee.secondary}
                  size="lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap grid gap-6 lg:grid-cols-3">
            {employee.painPoints.map((point) => (
              <div key={point} className="panel-soft rounded-[28px] p-6">
                <h2 className="text-xl font-semibold text-white">Operational pain</h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-secondary)]">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Fast onboarding"
              title="From setup to useful output in a few clear steps"
              description="Start with the right tools and context, then decide exactly how much human review you want."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {onboardingSteps.map((step, index) => (
                <div key={step} className="panel-soft rounded-[28px] p-6">
                  <div className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-highlight)]">
                    Step {index + 1}
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Capabilities"
              title={`${employee.name} can own the repetitive work around ${employee.role.toLowerCase()}`}
              description="Concrete tasks, not vague promises. This is the day-to-day execution layer."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {employee.capabilities.map((capability) => (
                <div key={capability} className="panel-soft rounded-[24px] px-5 py-5 text-sm leading-7 text-white/82">
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="panel-soft rounded-[32px] p-8">
              <SectionHeading
                eyebrow="Easy mode"
                title="Operational benefits that show up fast"
                description="The goal is less chaos, faster output, and cleaner control."
              />
              <div className="mt-8 grid gap-4">
                {employee.benefits.map((benefit) => (
                  <div key={benefit} className="rounded-[22px] border border-white/10 bg-black/24 px-4 py-4 text-sm text-white/82">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-soft rounded-[32px] p-8">
              <SectionHeading
                eyebrow="Operating stats"
                title="Built for speed, consistency, and control"
                description="Role-based metrics give teams a sense of how the employee behaves before rollout expands."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {employee.stats.map((stat) => (
                  <div key={stat.label} className="rounded-[24px] border border-white/10 bg-black/24 px-5 py-5">
                    <div className="text-3xl font-semibold tracking-[-0.05em] text-white">{stat.value}</div>
                    <div className="mt-2 text-sm text-[color:var(--color-text-secondary)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="panel glow-border rounded-[34px] p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
                <div>
                  <SectionHeading
                    eyebrow="Company Brain"
                    title={`${employee.name} gets better once your company context is loaded`}
                    description="Docs, SOPs, website copy, policy rules, pricing, and tone guidance become reusable operating context."
                  />
                  <div className="mt-8 grid gap-4">
                    {companyBrainItems.map((item) => (
                      <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/82">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[32px] border border-white/10 bg-black/24 p-8">
                  <div className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-highlight)]">
                    Memory principles
                  </div>
                  <div className="mt-5 grid gap-4 text-sm text-[color:var(--color-text-secondary)]">
                    <div>Always up to date when docs or source files change</div>
                    <div>Context compounds through approved work and examples</div>
                    <div>One source of truth across every employee in the workspace</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <div className="panel-soft rounded-[34px] p-8 sm:p-10">
              <SectionHeading
                eyebrow="Privacy"
                title="With useful automation comes strict control"
                description="Sensitive workflows still need approvals, auditability, and clean workspace boundaries."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {privacyItems.map((item) => (
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
              eyebrow="FAQ"
              title={`Questions about working with ${employee.name}`}
              description="Review rules, integrations, setup, and how this employee fits a real team."
            />
            <FAQAccordion items={employee.faqs} />
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Related employees"
              title="Recommended next hires"
              description="Most teams start with one role, prove the workflow, then expand into adjacent functions."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {relatedEmployees.map((relatedEmployee) => (
                <EmployeeMiniCard key={relatedEmployee.slug} employee={relatedEmployee} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
