import { getAllEmployees } from "@/models/employeeModel";
import { siteContent } from "@/models/siteModel";

const pickFeaturedEmployees = () => getAllEmployees().slice(0, 6);

export const getLayoutViewModel = () => ({
  brand: siteContent.brand,
});

export const getHomePageViewModel = () => ({
  ...getLayoutViewModel(),
  hero: siteContent.hero,
  employees: pickFeaturedEmployees(),
  workflows: siteContent.workflows,
  globalSection: siteContent.globalSection,
  companyBrain: siteContent.companyBrain,
  integrations: siteContent.integrations,
  workspaceFeatures: siteContent.workspaceFeatures,
  testimonials: siteContent.testimonials,
  finalCta: siteContent.finalCta,
});

export const getPricingPageViewModel = () => ({
  ...getLayoutViewModel(),
  hero: {
    eyebrow: "Pricing",
    title: "Pricing that grows from one AI employee to a full digital team",
    description:
      "Start with focused execution, then expand workspaces, actions, and employee roles as operations mature.",
  },
  plans: siteContent.pricingPlans,
  included: [
    "All employee roles",
    "Company Brain memory layer",
    "Integrations and workflows",
    "Multi-workspace collaboration",
    "Reporting and audit history",
    "Privacy and review controls",
  ],
  useCases: siteContent.workflows.slice(0, 6),
  reassurance: [
    "Cancel anytime",
    "Secure billing and onboarding support",
    "Pilot rollout assistance",
    "Privacy-first architecture",
  ],
  faqs: siteContent.sharedFaqs,
  finalCta: siteContent.finalCta,
});

export const getIntegrationsPageViewModel = () => ({
  ...getLayoutViewModel(),
  hero: {
    eyebrow: "Integrations",
    title: "All your AI employee integrations in one place",
    description:
      "Your AI employees work inside the tools your team already uses, not in a disconnected prompt window.",
  },
  integrations: siteContent.integrations,
  employees: getAllEmployees(),
  testimonials: siteContent.testimonials.slice(0, 2),
  finalCta: siteContent.finalCta,
});

export const getCompanyBrainPageViewModel = () => ({
  ...getLayoutViewModel(),
  hero: {
    eyebrow: "Company Brain",
    title: "One shared memory layer for every AI employee",
    description:
      "Train the workforce once on your docs, site, policies, tone, and process rules so every employee starts with context.",
  },
  companyBrain: siteContent.companyBrain,
  controls: [
    "Workspace isolation",
    "Role-based permissions",
    "Review-required automation",
    "File export and deletion",
  ],
  finalCta: siteContent.finalCta,
});

export const getWorkflowsPageViewModel = () => ({
  ...getLayoutViewModel(),
  hero: {
    eyebrow: "Use cases",
    title: "Real workflows your AI employees can run every day",
    description:
      "See how the platform handles support, content, sales, analytics, operations, and leadership prep with role-based execution.",
  },
  workflows: siteContent.workflows,
  employees: getAllEmployees(),
  finalCta: siteContent.finalCta,
});

export const getAboutPageViewModel = () => ({
  ...getLayoutViewModel(),
  hero: {
    eyebrow: "About ai-employees",
    title: "A workforce operating system for modern businesses",
    description:
      "ai-employees is designed around delegation, shared company context, and specialized digital workers instead of isolated AI tools.",
  },
  principles: [
    "Role-based AI employees, not generic assistants",
    "One memory layer that compounds over time",
    "Execution inside your tools with human control",
  ],
  operatingModel: [
    "Hire the right role",
    "Connect your stack",
    "Train Company Brain",
    "Review output",
    "Scale with confidence",
  ],
  finalCta: siteContent.finalCta,
});

export const getDemoPageViewModel = () => ({
  ...getLayoutViewModel(),
  hero: {
    eyebrow: "Book a demo",
    title: "See your first AI employee deployed around your actual workflows",
    description:
      "Walk through role selection, Company Brain setup, integrations, approvals, and rollout plans in one session.",
  },
  checklist: [
    "Choose initial employee roles",
    "Map the first workflow to automate",
    "Identify the docs and tools to connect",
    "Define review and approval rules",
  ],
  faqs: siteContent.sharedFaqs.slice(0, 4),
});

export const getResourcesPageViewModel = () => ({
  ...getLayoutViewModel(),
  hero: {
    eyebrow: "Resources",
    title: "Rollout guides, playbooks, and operating notes for AI teams",
    description:
      "Everything you need to launch, train, govern, and scale role-based AI employees inside the business.",
  },
  resources: siteContent.resources,
  finalCta: siteContent.finalCta,
});

export const getFaqPageViewModel = () => ({
  ...getLayoutViewModel(),
  hero: {
    eyebrow: "FAQ",
    title: "Questions teams ask before they hire AI employees",
    description:
      "Coverage, controls, workspaces, privacy, onboarding, and how role-based AI fits real operations.",
  },
  faqs: siteContent.sharedFaqs,
  finalCta: siteContent.finalCta,
});

export const getPrivacyPageViewModel = () => ({
  ...getLayoutViewModel(),
  hero: {
    eyebrow: "Privacy & Security",
    title: "Control what your AI employees can access, draft, and automate",
    description:
      "Built for teams that need review controls, workspace isolation, encryption, and a clear audit trail.",
  },
  controls: [
    "Encrypted data at rest and in transit",
    "Workspace isolation by brand or client",
    "Approval controls for sensitive actions",
    "Audit logs for drafts, actions, and reviewers",
    "Export and deletion paths for customer data",
    "Role-based access for teams and operators",
  ],
  faqs: siteContent.sharedFaqs.slice(0, 4),
  finalCta: siteContent.finalCta,
});
