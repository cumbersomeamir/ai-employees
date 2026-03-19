import { getAllEmployees } from "@/models/employeeModel";

import AnnouncementBar from "@/components/layout/AnnouncementBar";
import FloatingDemoButton from "@/components/layout/FloatingDemoButton";
import MainHeader from "@/components/layout/MainHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const featureLinks = [
  {
    label: "Company Brain",
    href: "/company-brain",
    description: "Shared memory, brand rules, docs, and source-of-truth context.",
  },
  {
    label: "Integrations",
    href: "/integrations",
    description: "Work inside the tools your team already uses.",
  },
  {
    label: "Workflows",
    href: "/workflows",
    description: "Prompt-free execution paths for real business work.",
  },
  {
    label: "Privacy & Security",
    href: "/privacy-security",
    description: "Approvals, audit logs, encryption, and workspace isolation.",
  },
];

export default function SiteShell({ brand, children }) {
  return (
    <>
      <AnnouncementBar announcement={brand.announcement} />
      <MainHeader
        brand={brand}
        products={getAllEmployees()}
        featureLinks={featureLinks}
      />
      {children}
      <SiteFooter brand={brand} />
      <FloatingDemoButton />
    </>
  );
}
