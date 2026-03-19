const employees = [
  {
    slug: "ari",
    name: "Ari",
    role: "Customer Support Employee",
    summary: "Handles queue triage, draft replies, escalations, and help-center upkeep.",
  },
  {
    slug: "nova",
    name: "Nova",
    role: "Social Media Employee",
    summary: "Plans channels, drafts campaigns, and keeps publishing cadence on track.",
  },
  {
    slug: "pulse",
    name: "Pulse",
    role: "Sales Employee",
    summary: "Builds follow-ups, lead research, outreach sequences, and pipeline summaries.",
  },
  {
    slug: "atlas",
    name: "Atlas",
    role: "Operations Employee",
    summary: "Turns recurring tasks, SOPs, approvals, and handoffs into reliable workflows.",
  },
  {
    slug: "echo",
    name: "Echo",
    role: "Content Employee",
    summary: "Creates briefs, landing copy, newsletters, and campaign assets on brand.",
  },
  {
    slug: "quill",
    name: "Quill",
    role: "SEO Employee",
    summary: "Finds ranking gaps, updates pages, and keeps search growth moving.",
  },
  {
    slug: "vector",
    name: "Vector",
    role: "Data Analyst Employee",
    summary: "Explains metric shifts, weekly reports, and experiment performance.",
  },
  {
    slug: "luma",
    name: "Luma",
    role: "Executive Assistant Employee",
    summary: "Prepares meetings, organizes decisions, and keeps leadership focused.",
  },
];

const pricing = [
  {
    name: "Starter",
    monthlyPrice: 79,
    annualPrice: 59,
    employees: 2,
  },
  {
    name: "Team",
    monthlyPrice: 219,
    annualPrice: 169,
    employees: 6,
  },
  {
    name: "Scale",
    monthlyPrice: 499,
    annualPrice: 399,
    employees: 12,
  },
];

const integrations = [
  "Gmail",
  "Outlook",
  "Slack",
  "Notion",
  "Google Calendar",
  "Google Drive",
  "HubSpot",
  "LinkedIn",
  "Instagram",
  "Shopify",
  "QuickBooks",
  "GA4",
];

const siteSnapshot = {
  brand: "ai-employees",
  tagline: "Hire AI employees that actually do the work.",
  employees,
  pricing,
  integrations,
};

module.exports = {
  employees,
  pricing,
  integrations,
  siteSnapshot,
};
