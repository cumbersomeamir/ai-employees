import {
  commonOnboardingSteps,
  getAllEmployees,
  getEmployeeBySlug,
} from "@/models/employeeModel";

const buildRelatedEmployees = (employee, allEmployees) =>
  employee.related
    .map((slug) => allEmployees.find((candidate) => candidate.slug === slug))
    .filter(Boolean);

export const getEmployeesOverviewViewModel = () => {
  const employees = getAllEmployees();

  return {
    hero: {
      eyebrow: "Employee directory",
      title: "Find the right AI employee for every business function",
      description:
        "Choose role-based digital workers for support, content, sales, analytics, operations, and leadership.",
    },
    employees,
  };
};

export const getEmployeePageViewModel = (slug) => {
  const employees = getAllEmployees();
  const employee = getEmployeeBySlug(slug);

  if (!employee) {
    return null;
  }

  return {
    employee,
    onboardingSteps: commonOnboardingSteps,
    relatedEmployees: buildRelatedEmployees(employee, employees),
    privacyItems: [
      "Encrypted workspace data",
      "Granular review and approval controls",
      "Audit logs for drafts and actions",
      "Export and deletion controls",
    ],
    companyBrainItems: [
      "Policies, pricing, and process docs",
      "Brand tone and escalation rules",
      "Workspace-specific files and live context",
    ],
  };
};

export const getEmployeeStaticParams = () =>
  getAllEmployees().map((employee) => ({
    slug: employee.slug,
  }));
