import Link from "next/link";

import AvatarOrb from "@/components/shared/AvatarOrb";
import StatusPill from "@/components/shared/StatusPill";

export default function EmployeeMiniCard({ employee, compact = false }) {
  return (
    <Link
      href={`/employees/${employee.slug}`}
      className={`panel-soft glow-border group relative overflow-hidden rounded-[28px] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/16 ${
        compact ? "min-w-[260px]" : ""
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_25%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <StatusPill label={employee.status} accent={employee.accent} />
          <h3 className="mt-4 text-xl font-semibold text-white">
            {employee.name}
          </h3>
          <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
            {employee.role}
          </p>
        </div>
        <AvatarOrb
          name={employee.name}
          accent={employee.accent}
          secondary={employee.secondary}
          size="sm"
          className="shrink-0"
        />
      </div>
      <p className="relative mt-5 text-sm leading-7 text-[color:var(--color-text-secondary)]">
        {employee.shortDescription}
      </p>
      <div className="relative mt-5 space-y-2 text-sm text-white/82">
        {employee.topTasks.slice(0, 3).map((task) => (
          <div key={task} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-secondary)]" />
            <span>{task}</span>
          </div>
        ))}
      </div>
      <div className="relative mt-6 text-sm font-semibold text-[color:var(--color-highlight)]">
        View employee
      </div>
    </Link>
  );
}
