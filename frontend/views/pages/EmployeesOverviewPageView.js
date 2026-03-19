import EmployeeMiniCard from "@/components/shared/EmployeeMiniCard";
import SectionHeading from "@/components/shared/SectionHeading";
import SiteShell from "@/views/pages/SiteShell";

export default function EmployeesOverviewPageView({ brand, hero, employees }) {
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
            <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {employees.map((employee) => (
                <EmployeeMiniCard key={employee.slug} employee={employee} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
