import FAQAccordion from "@/components/client/FAQAccordion";
import DemoForm from "@/components/client/DemoForm";
import SectionHeading from "@/components/shared/SectionHeading";
import SiteShell from "@/views/pages/SiteShell";

export default function DemoPageView({ brand, hero, checklist, faqs }) {
  return (
    <SiteShell brand={brand}>
      <main>
        <section className="section-space">
          <div className="section-wrap grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <SectionHeading
                eyebrow={hero.eyebrow}
                title={hero.title}
                description={hero.description}
              />
              <div className="mt-8 grid gap-4">
                {checklist.map((item) => (
                  <div key={item} className="panel-soft rounded-[24px] px-5 py-4 text-sm text-white/82">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <DemoForm />
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="section-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Demo FAQ"
              title="What happens in the first walkthrough"
              description="The goal is to leave with a role, a workflow, and a rollout plan."
            />
            <FAQAccordion items={faqs} />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
