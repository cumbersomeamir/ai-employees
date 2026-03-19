const announcement = {
  label: "Launch offer",
  message: "Start your first AI employee today with guided onboarding.",
  href: "/demo",
};

const heroStats = [
  { value: "24/7", label: "digital coverage" },
  { value: "12", label: "specialized employee roles" },
  { value: "100+", label: "languages and markets" },
];

const workflows = [
  {
    employee: "Nova",
    role: "Social Media Employee",
    prompt: "Nova, create this week’s LinkedIn content plan",
    output: "5-post calendar, founder angle, CTA mapping, and launch support copy",
    description:
      "Turn product notes, recent wins, and target personas into a structured weekly content plan.",
    accent: "from-[#7C5CFF] to-[#A78BFA]",
  },
  {
    employee: "Ari",
    role: "Customer Support Employee",
    prompt: "Ari, draft replies to unread support tickets",
    output: "Priority inbox sorted by tone, urgency, and refund policy fit",
    description:
      "Queue triage, macros, and policy-aware draft responses ready for human approval or auto-send rules.",
    accent: "from-[#2563EB] to-[#22D3EE]",
  },
  {
    employee: "Pulse",
    role: "Sales Employee",
    prompt: "Pulse, prepare a follow-up sequence for these leads",
    output: "Account context, next-step email, objection notes, and CRM-ready summary",
    description:
      "Use pipeline history and meeting notes to keep deals moving between conversations.",
    accent: "from-[#F59E0B] to-[#FB7185]",
  },
  {
    employee: "Atlas",
    role: "Operations Employee",
    prompt: "Atlas, summarize today’s operations issues",
    output: "Blockers, owners, dependencies, and a clean action queue",
    description:
      "Create a daily operating brief from task systems, chat, docs, and recurring checklists.",
    accent: "from-[#10B981] to-[#22D3EE]",
  },
  {
    employee: "Vector",
    role: "Data Analyst Employee",
    prompt: "Vector, explain why conversion dropped this week",
    output: "Funnel shift analysis, likely causes, and recommended next checks",
    description:
      "Turn dashboard movement into plain-language diagnosis for leadership and growth teams.",
    accent: "from-[#38BDF8] to-[#818CF8]",
  },
  {
    employee: "Luma",
    role: "Executive Assistant Employee",
    prompt: "Luma, prepare me for today’s meetings",
    output: "Agenda, attendee context, open actions, and inbox priority summary",
    description:
      "Calendar-driven daily prep from notes, email, docs, and previous decisions.",
    accent: "from-[#FBBF24] to-[#FB7185]",
  },
];

const integrations = [
  {
    name: "Gmail",
    short: "GM",
    accent: "#EA4335",
    description: "Draft replies, group urgent threads, and create follow-up queues.",
    actions: ["Send drafts", "Summarize threads", "Tag owners"],
  },
  {
    name: "Outlook",
    short: "OL",
    accent: "#2563EB",
    description: "Support inboxes, leadership recaps, and shared team follow-ups.",
    actions: ["Draft emails", "Flag risks", "Build digests"],
  },
  {
    name: "Slack",
    short: "SL",
    accent: "#7C3AED",
    description: "Summarize channels, spot blockers, and route decisions.",
    actions: ["Daily briefs", "Blocker alerts", "Meeting follow-ups"],
  },
  {
    name: "Notion",
    short: "NO",
    accent: "#F8FAFC",
    description: "Read SOPs, update docs, and ground every employee in current context.",
    actions: ["Read docs", "Create pages", "Update playbooks"],
  },
  {
    name: "Google Calendar",
    short: "GC",
    accent: "#4285F4",
    description: "Prep daily briefs, meeting packs, and scheduling context.",
    actions: ["Create events", "Prepare agendas", "Track actions"],
  },
  {
    name: "Google Drive",
    short: "GD",
    accent: "#34A853",
    description: "Pull decks, proposals, policies, and files into Company Brain.",
    actions: ["Ingest files", "Search docs", "Summarize folders"],
  },
  {
    name: "HubSpot",
    short: "HS",
    accent: "#F97316",
    description: "Keep sales follow-ups, account prep, and pipeline reporting aligned.",
    actions: ["Sync deals", "Draft outreach", "Summarize pipeline"],
  },
  {
    name: "LinkedIn",
    short: "LI",
    accent: "#0A66C2",
    description: "Support social publishing, founder voice, and account research.",
    actions: ["Draft posts", "Research accounts", "Summarize engagement"],
  },
  {
    name: "Instagram",
    short: "IG",
    accent: "#E1306C",
    description: "Create campaign variants, captions, and community support workflows.",
    actions: ["Plan reels", "Draft captions", "Reply suggestions"],
  },
  {
    name: "Shopify",
    short: "SH",
    accent: "#95BF47",
    description: "Power support, operations, and revenue monitoring for ecommerce teams.",
    actions: ["Monitor orders", "Summarize returns", "Track trends"],
  },
  {
    name: "QuickBooks",
    short: "QB",
    accent: "#2CA01C",
    description: "Support finance-aware summaries and recurring operational reporting.",
    actions: ["Review expenses", "Summarize cashflow", "Prepare recaps"],
  },
  {
    name: "GA4",
    short: "GA",
    accent: "#F59E0B",
    description: "Give Vector real traffic, conversion, and campaign context.",
    actions: ["Explain shifts", "Build KPI digests", "Spot anomalies"],
  },
];

const pricingPlans = [
  {
    name: "Starter",
    monthly: 79,
    annual: 59,
    badge: "For focused teams",
    employees: "2 AI employees",
    workspaces: "1 workspace",
    actions: "5,000 monthly actions",
    integrations: "6 integrations",
    support: "Email onboarding support",
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Team",
    monthly: 219,
    annual: 169,
    badge: "Most popular",
    employees: "6 AI employees",
    workspaces: "3 workspaces",
    actions: "25,000 monthly actions",
    integrations: "12 integrations",
    support: "Priority onboarding and reviews",
    cta: "Hire Your Team",
    featured: true,
  },
  {
    name: "Scale",
    monthly: 499,
    annual: 399,
    badge: "For operators",
    employees: "12 AI employees",
    workspaces: "Unlimited workspaces",
    actions: "100,000 monthly actions",
    integrations: "Advanced integrations",
    support: "White-glove rollout support",
    cta: "Book Demo",
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "We stopped treating AI like a prompt box. ai-employees gave us role-based execution we could actually operationalize.",
    author: "Maya Chen",
    title: "Founder, Brightline Commerce",
  },
  {
    quote:
      "Our support queue went from reactive to structured in a week. Ari and Atlas gave our team breathing room without lowering quality.",
    author: "Jordan Price",
    title: "Operations Lead, Northstar Retail",
  },
  {
    quote:
      "The biggest shift was context. The employees understood our tone, our playbooks, and our sales motion instead of starting from scratch every time.",
    author: "Leila Rahman",
    title: "Head of Growth, Delta Studio",
  },
  {
    quote:
      "We use separate workspaces for every client and still run one platform. That alone replaced a mess of disconnected AI tools.",
    author: "Owen Park",
    title: "Agency Director, Signal Foundry",
  },
];

const resources = [
  {
    category: "Playbook",
    title: "How to onboard your first AI employee in 30 minutes",
    summary:
      "A practical rollout sequence for docs, tools, review modes, and first workflows.",
  },
  {
    category: "Guide",
    title: "Designing Company Brain for consistent AI output",
    summary:
      "What to upload, how to structure memory, and how to separate workspaces cleanly.",
  },
  {
    category: "Brief",
    title: "Choosing the right AI employee for each business function",
    summary:
      "A role-by-role breakdown for support, sales, content, analytics, operations, and leadership.",
  },
  {
    category: "Checklist",
    title: "AI workforce launch checklist for operators",
    summary:
      "Review controls, workspace setup, permissions, and reporting expectations before deployment.",
  },
];

const sharedFaqs = [
  {
    question: "What is an AI employee in this product?",
    answer:
      "An AI employee is a role-based worker trained for a specific business function like support, sales, content, or analytics instead of a generic chat interface.",
  },
  {
    question: "Do the employees share context?",
    answer:
      "Yes. Company Brain acts as the shared memory layer so every employee can use the same brand, process, and document context.",
  },
  {
    question: "Can I keep humans in the loop?",
    answer:
      "Yes. Draft-only, approval-required, and controlled automation modes are supported across workflows.",
  },
  {
    question: "Can this work across multiple brands or companies?",
    answer:
      "Yes. Workspaces keep each brand or client isolated while still using one platform and one team account.",
  },
  {
    question: "Do I need API keys to use the site right now?",
    answer:
      "No. This build is a complete marketing frontend and API scaffold. No third-party API keys are required to run it locally.",
  },
  {
    question: "Is this only for enterprise teams?",
    answer:
      "No. The structure works for solo founders, agencies, startups, and larger operators that need role-based AI execution.",
  },
];

export const siteContent = {
  brand: {
    name: "ai-employees",
    announcement,
    navLinks: [
      { label: "Products", href: "/employees" },
      { label: "Features", href: "/company-brain" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Resources", href: "/resources" },
      { label: "Demo", href: "/demo" },
    ],
    footerGroups: [
      {
        title: "Products",
        links: [
          { label: "Employees", href: "/employees" },
          { label: "Company Brain", href: "/company-brain" },
          { label: "Workflows", href: "/workflows" },
        ],
      },
      {
        title: "Features",
        links: [
          { label: "Integrations", href: "/integrations" },
          { label: "Pricing", href: "/pricing" },
          { label: "Demo", href: "/demo" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Resources", href: "/resources" },
          { label: "FAQ", href: "/faq" },
          { label: "About", href: "/about" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Privacy & Security", href: "/privacy-security" },
          { label: "Book Demo", href: "/demo" },
          { label: "Login", href: "/demo" },
        ],
      },
    ],
    supportEmail: "team@ai-employees.local",
  },
  hero: {
    eyebrow: "Digital workforce platform",
    title: "Hire AI Employees That Actually Do the Work",
    description:
      "Build a 24/7 digital team for support, content, sales, operations, analytics, and growth trained on your company and connected to your tools.",
    primaryCta: { label: "Hire Your First AI Employee", href: "/demo" },
    secondaryCta: { label: "See How It Works", href: "/employees" },
    stats: heroStats,
  },
  workflows,
  integrations,
  pricingPlans,
  testimonials,
  resources,
  sharedFaqs,
  companyBrain: {
    title: "They learn your company before they start doing your work",
    description:
      "Upload docs, website copy, pitch decks, policies, FAQs, CRM notes, and brand rules once. Every employee works from the same source of truth.",
    inputs: [
      "Docs, SOPs, and team handbooks",
      "Pricing pages, website copy, and product facts",
      "Email threads, meeting notes, and support macros",
      "Tone rules, brand language, and escalation policies",
    ],
    principles: [
      "One memory layer for every employee",
      "Separate workspaces for different brands or clients",
      "Context compounds with every approved action",
    ],
  },
  workspaceFeatures: [
    "Multiple companies or brands",
    "Team sharing and role-based access",
    "Separate memory and reporting by workspace",
    "Admin oversight with review controls",
  ],
  globalSection: {
    title: "Work globally without extra hiring layers",
    description:
      "Deploy AI employees across regions, languages, and distributed teams without buying disconnected tools for every market.",
    chips: ["100+ languages", "Localized outputs", "Regional workspaces", "Always-on coverage"],
  },
  finalCta: {
    title: "Start with one AI employee. Scale to a full digital team.",
    description:
      "Roll out a single role first, connect your tools, then expand into support, sales, content, operations, and leadership workflows.",
    primaryCta: { label: "Start Free", href: "/pricing" },
    secondaryCta: { label: "Book Demo", href: "/demo" },
  },
};
