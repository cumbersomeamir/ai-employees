export const commonOnboardingSteps = [
  "Set the foundation",
  "Connect tools",
  "Add company memory",
  "Review AI output",
  "Improve over time",
];

export const employeeDirectory = [
  {
    slug: "ari",
    name: "Ari",
    role: "Customer Support Employee",
    tagline: "Draft replies, triage queues, and protect response quality at scale.",
    shortDescription:
      "Keeps your inbox moving with brand-safe replies, escalation rules, and clearer support reporting.",
    topTasks: [
      "Prioritize unread tickets by urgency",
      "Draft on-brand replies across languages",
      "Turn repeated questions into help-center updates",
    ],
    preview: "19 priority tickets organized and ready for review",
    accent: "#60A5FA",
    secondary: "#22D3EE",
    status: "Queue live",
    painPoints: [
      "Queues build up during nights, launches, and weekends.",
      "Agents lose context switching between channels and docs.",
      "Tone drifts when every reply is written from scratch.",
    ],
    capabilities: [
      "Route tickets by intent, urgency, and account value",
      "Draft responses from policy, refund, and warranty rules",
      "Suggest macros for recurring requests",
      "Escalate bugs, billing issues, and VIP conversations",
      "Create daily backlog summaries for managers",
      "Translate replies while preserving tone of voice",
      "Surface broken links or knowledge gaps",
      "Summarize long threads for faster handoff",
      "Prepare churn-risk watchlists from complaint signals",
      "Draft CSAT follow-ups",
      "Turn support issues into product feedback summaries",
      "Maintain FAQ updates from resolved tickets",
    ],
    benefits: [
      "Faster first responses without hiring extra agents",
      "More consistent tone across every support channel",
      "Clear escalation rules instead of inbox guesswork",
      "Managers get visibility without manual reporting",
    ],
    stats: [
      { label: "First draft ready", value: "22 sec" },
      { label: "Coverage windows", value: "24/7" },
      { label: "Review modes", value: "3" },
      { label: "Languages supported", value: "100+" },
    ],
    faqs: [
      {
        question: "Can Ari send replies automatically?",
        answer:
          "Yes. You can keep Ari in draft-only mode, approval-required mode, or allow safe auto-send rules for specific ticket types.",
      },
      {
        question: "Will Ari learn our support policies?",
        answer:
          "Ari uses your refund rules, warranty notes, macros, SOPs, and previous examples through Company Brain.",
      },
      {
        question: "Can Ari work across email and chat?",
        answer:
          "Yes. Ari is designed to operate across inboxes, live chat, and help-desk workflows from one shared context layer.",
      },
      {
        question: "How are escalations handled?",
        answer:
          "You define escalation triggers for billing, legal, VIP, refund abuse, angry tone, or product-bug signals.",
      },
      {
        question: "Can Ari generate support reports?",
        answer:
          "Ari prepares daily and weekly summaries for ticket volume, recurring issues, CSAT trends, and staffing pressure.",
      },
      {
        question: "Does Ari keep an audit trail?",
        answer:
          "Every recommendation, draft, and approved action can be tracked by workspace and reviewer.",
      },
    ],
    related: ["luma", "atlas", "vector"],
  },
  {
    slug: "nova",
    name: "Nova",
    role: "Social Media Employee",
    tagline: "Plans content, drafts campaigns, and keeps every channel moving.",
    shortDescription:
      "Builds a repeatable publishing engine for LinkedIn, X, Instagram, and launch moments without daily prompting.",
    topTasks: [
      "Create weekly LinkedIn content plans",
      "Repurpose launches into social campaigns",
      "Generate comment-response drafts and recaps",
    ],
    preview: "7 posts drafted, 3 carousels outlined, 1 launch thread queued",
    accent: "#A78BFA",
    secondary: "#22D3EE",
    status: "Campaign live",
    painPoints: [
      "Social is always important and rarely scheduled properly.",
      "Campaigns lose consistency when every post starts from zero.",
      "Teams need fresh ideas but still need brand control.",
    ],
    capabilities: [
      "Build monthly content calendars by channel",
      "Turn product updates into posts, hooks, and visuals",
      "Draft founder voice posts from rough notes",
      "Plan event, webinar, and launch promotion sequences",
      "Write engagement-driven comments and reply suggestions",
      "Recommend content pillars from audience feedback",
      "Generate cross-platform caption variants",
      "Summarize performance by post format and topic",
      "Spot content gaps from competitor activity",
      "Prepare community management drafts",
      "Package UGC requests and creator briefs",
      "Create weekly recap decks for stakeholders",
    ],
    benefits: [
      "Consistent publishing without chasing the team every day",
      "Faster launch support from one reusable campaign brain",
      "Brand-safe content with less copy-paste",
      "Better performance reporting for each content lane",
    ],
    stats: [
      { label: "Weekly plans built", value: "In minutes" },
      { label: "Channel coverage", value: "8+" },
      { label: "Voice profiles", value: "5" },
      { label: "Localization ready", value: "100+" },
    ],
    faqs: [
      {
        question: "Can Nova adapt to different brand voices?",
        answer:
          "Yes. Nova can maintain multiple tone profiles for brand, founder, campaign, or region-specific publishing.",
      },
      {
        question: "Does Nova post directly?",
        answer:
          "Nova can work in planning mode, approval mode, or connected publishing workflows depending on your setup.",
      },
      {
        question: "Can Nova repurpose long-form content?",
        answer:
          "Yes. Blog posts, decks, webinars, podcasts, and launch docs can all become campaign-ready social assets.",
      },
      {
        question: "How does Nova measure results?",
        answer:
          "Nova summarizes engagement, reach, post types, and content themes so the next cycle improves automatically.",
      },
      {
        question: "Can Nova help with comments and DMs?",
        answer:
          "Nova can draft community replies, prioritize unanswered messages, and flag risky or high-value conversations.",
      },
      {
        question: "Will Nova work for agencies?",
        answer:
          "Yes. Multi-workspace support makes it easy to separate clients, brands, approvals, and memory.",
      },
    ],
    related: ["echo", "quill", "pulse"],
  },
  {
    slug: "pulse",
    name: "Pulse",
    role: "Sales Employee",
    tagline: "Prepares follow-ups, lead research, and pipeline momentum without delays.",
    shortDescription:
      "Turns CRM signals and call notes into timely outreach, account summaries, and cleaner pipeline discipline.",
    topTasks: [
      "Build follow-up sequences from call notes",
      "Research target accounts before outreach",
      "Summarize stalled deals with next-step recommendations",
    ],
    preview: "12 leads enriched, 4 sequences drafted, 2 deals flagged",
    accent: "#F59E0B",
    secondary: "#F97316",
    status: "Pipeline active",
    painPoints: [
      "Follow-ups slip when pipeline ownership is fragmented.",
      "Reps lose time on prep instead of conversations.",
      "CRM fields become stale and hide real deal risk.",
    ],
    capabilities: [
      "Draft outbound and post-demo follow-up sequences",
      "Summarize discovery calls into next steps",
      "Research accounts, teams, and market signals",
      "Prepare objection-handling notes for reps",
      "Build deal review snapshots for managers",
      "Update CRM notes from meeting transcripts",
      "Generate reactivation messages for cold leads",
      "Create handoff summaries for onboarding teams",
      "Surface blockers from reply patterns",
      "Write QBR and executive recap drafts",
      "Segment leads by readiness and fit",
      "Prepare pipeline hygiene reminders",
    ],
    benefits: [
      "Better follow-up speed without more admin work",
      "Reps stay focused on conversations, not cleanup",
      "Managers get cleaner visibility into deal health",
      "Pipeline stays active between meetings",
    ],
    stats: [
      { label: "Prep briefs built", value: "Under 3 min" },
      { label: "CRM hygiene loops", value: "Daily" },
      { label: "Sequence variants", value: "12+" },
      { label: "Workspace sharing", value: "Built-in" },
    ],
    faqs: [
      {
        question: "Can Pulse update our CRM?",
        answer:
          "Pulse can prepare updates or write back to connected systems depending on your approval and integration rules.",
      },
      {
        question: "Does Pulse personalize outbound?",
        answer:
          "Yes. Pulse uses account context, industry notes, previous conversations, and your messaging playbooks.",
      },
      {
        question: "Will Pulse replace our reps?",
        answer:
          "No. Pulse handles the repetitive sales operations work so human reps spend more time closing and less time preparing.",
      },
      {
        question: "Can Pulse work with inbound and outbound?",
        answer:
          "Yes. Pulse is useful for lead qualification, demo prep, follow-ups, and stalled-deal recovery.",
      },
      {
        question: "Can managers use Pulse too?",
        answer:
          "Yes. Sales leaders can use Pulse for deal reviews, rep coaching notes, and pipeline summaries.",
      },
      {
        question: "How quickly does Pulse get useful?",
        answer:
          "Once CRM, call notes, and messaging docs are connected, Pulse starts producing usable drafts immediately.",
      },
    ],
    related: ["atlas", "luma", "vector"],
  },
  {
    slug: "atlas",
    name: "Atlas",
    role: "Operations Employee",
    tagline: "Standardizes SOPs, approvals, and recurring workflows across the business.",
    shortDescription:
      "Keeps the company moving by turning scattered process knowledge into usable checklists, summaries, and action queues.",
    topTasks: [
      "Summarize daily ops issues and blockers",
      "Generate onboarding SOPs from rough notes",
      "Coordinate recurring approvals and handoffs",
    ],
    preview: "4 blockers highlighted, 3 SOPs refreshed, 2 approvals routed",
    accent: "#34D399",
    secondary: "#22C55E",
    status: "Ops synced",
    painPoints: [
      "Operational knowledge lives in too many places.",
      "Recurring workflows break when ownership is unclear.",
      "Leaders discover blockers too late to fix them cleanly.",
    ],
    capabilities: [
      "Convert loose notes into usable SOPs",
      "Prepare daily operating briefs",
      "Track blockers across teams and tools",
      "Route approvals by role and urgency",
      "Summarize vendor, finance, and project updates",
      "Create checklists for launches and onboarding",
      "Maintain process documentation by workspace",
      "Draft status recaps for leadership",
      "Surface recurring bottlenecks from activity patterns",
      "Package handoff notes between departments",
      "Create audit-friendly task histories",
      "Generate weekly execution reviews",
    ],
    benefits: [
      "Less operational drift across teams and tools",
      "Processes become reusable instead of tribal knowledge",
      "Leadership gets clearer visibility into execution risk",
      "Work moves faster with fewer manual handoffs",
    ],
    stats: [
      { label: "Briefs generated", value: "Daily" },
      { label: "Workflow visibility", value: "End-to-end" },
      { label: "Teams coordinated", value: "Multi-workspace" },
      { label: "Audit retention", value: "Included" },
    ],
    faqs: [
      {
        question: "What kind of operations work fits Atlas best?",
        answer:
          "Atlas is strongest when workflows are repetitive, cross-functional, document-heavy, or dependent on timely summaries.",
      },
      {
        question: "Can Atlas handle approvals?",
        answer:
          "Yes. Atlas can organize approvals, collect context, and route next actions to the right people.",
      },
      {
        question: "Does Atlas create SOPs from scratch?",
        answer:
          "Atlas can start from rough notes, Loom transcripts, meeting recaps, or existing process docs.",
      },
      {
        question: "Can Atlas support multiple brands or companies?",
        answer:
          "Yes. Separate workspaces keep processes, docs, and reporting isolated while sharing the same platform.",
      },
      {
        question: "Will Atlas work with leadership reporting?",
        answer:
          "Yes. Atlas can assemble recurring updates, action lists, and operational risk summaries for leadership.",
      },
      {
        question: "Is human review required?",
        answer:
          "You control review rules. Atlas can draft only, require sign-off, or automate low-risk process tasks.",
      },
    ],
    related: ["vector", "luma", "pulse"],
  },
  {
    slug: "echo",
    name: "Echo",
    role: "Content Employee",
    tagline: "Turns business context into content systems, briefs, and polished assets.",
    shortDescription:
      "Creates landing page copy, campaign briefs, newsletters, and growth content grounded in your product and market.",
    topTasks: [
      "Draft campaign briefs and launch copy",
      "Turn webinars into newsletter content",
      "Generate case-study outlines and interview prompts",
    ],
    preview: "Launch brief assembled, newsletter drafted, 5 hooks generated",
    accent: "#FB7185",
    secondary: "#A78BFA",
    status: "Content ready",
    painPoints: [
      "Content creation gets stuck between strategy and production.",
      "Writers spend too much time collecting context before drafting.",
      "Brand consistency breaks across campaigns and contributors.",
    ],
    capabilities: [
      "Draft landing pages from product notes",
      "Write email and newsletter campaigns",
      "Create blog outlines and article drafts",
      "Turn calls and interviews into case-study briefs",
      "Generate ad and headline variants",
      "Build messaging frameworks for launches",
      "Maintain editorial calendars",
      "Repurpose webinars and events into campaign assets",
      "Create content briefs for human writers",
      "Summarize customer language from research",
      "Support sales enablement content requests",
      "Draft nurture sequences for different personas",
    ],
    benefits: [
      "Faster content throughput without thinner messaging",
      "Writers get better raw material before they start",
      "Campaigns stay aligned with product and GTM context",
      "Brand tone becomes reusable instead of fragile",
    ],
    stats: [
      { label: "Draft types", value: "20+" },
      { label: "Editorial views", value: "Shared" },
      { label: "Brand profiles", value: "5" },
      { label: "Turnaround", value: "Minutes" },
    ],
    faqs: [
      {
        question: "Can Echo write both short and long-form content?",
        answer:
          "Yes. Echo supports messaging frameworks, headlines, emails, landing pages, blogs, and nurture content.",
      },
      {
        question: "Will Echo stay on brand?",
        answer:
          "Echo uses your tone guidance, examples, banned phrases, positioning docs, and customer language inside Company Brain.",
      },
      {
        question: "Can Echo help agencies?",
        answer:
          "Yes. Separate workspaces make it straightforward to manage different clients, briefs, and review workflows.",
      },
      {
        question: "Can Echo help content managers, not just writers?",
        answer:
          "Yes. Echo is useful for editorial planning, content briefs, repurposing, and stakeholder summaries.",
      },
      {
        question: "Does Echo require perfect prompts?",
        answer:
          "No. The goal is to reduce prompting overhead by grounding drafts in real business context and reusable workflows.",
      },
      {
        question: "Can Echo work with approval flows?",
        answer:
          "Yes. Content can stay in draft, move through reviewers, or be routed into connected workflows.",
      },
    ],
    related: ["nova", "quill", "pulse"],
  },
  {
    slug: "quill",
    name: "Quill",
    role: "SEO Employee",
    tagline: "Finds search gaps, prioritizes page updates, and supports organic growth execution.",
    shortDescription:
      "Connects ranking opportunities to actual content changes so SEO work becomes an operating system, not a spreadsheet.",
    topTasks: [
      "Identify keyword opportunities by page type",
      "Refresh underperforming pages with clear briefs",
      "Summarize ranking changes and next actions",
    ],
    preview: "14 page updates prioritized, 6 keyword gaps found, 1 brief queued",
    accent: "#2DD4BF",
    secondary: "#38BDF8",
    status: "Search mapped",
    painPoints: [
      "SEO priorities drift when analysis is disconnected from writing.",
      "Teams know rankings changed but not what to do next.",
      "Content refreshes rarely happen consistently.",
    ],
    capabilities: [
      "Map keyword opportunities by funnel stage",
      "Generate on-page optimization briefs",
      "Refresh titles, descriptions, and structural copy",
      "Recommend internal linking updates",
      "Track competitor coverage by topic cluster",
      "Prepare weekly SEO performance summaries",
      "Flag declining pages for fast action",
      "Build content expansion ideas from SERP patterns",
      "Summarize technical issues for non-technical teams",
      "Create briefs for location and industry pages",
      "Support content repurposing for search intent",
      "Align SEO work with product launches and campaigns",
    ],
    benefits: [
      "Search work becomes repeatable instead of ad hoc",
      "Teams see what changed and what to do next",
      "Page refreshes happen faster with clear briefs",
      "SEO execution stays connected to broader GTM work",
    ],
    stats: [
      { label: "Page scans", value: "Weekly" },
      { label: "Brief templates", value: "12+" },
      { label: "Intent clusters", value: "Reusable" },
      { label: "Search locales", value: "100+" },
    ],
    faqs: [
      {
        question: "Can Quill replace my SEO team?",
        answer:
          "No. Quill handles research, refreshes, prioritization, and reporting so your team can focus on strategy and decisions.",
      },
      {
        question: "Will Quill work with existing content?",
        answer:
          "Yes. Quill is especially useful for refreshing pages, improving internal links, and finding gaps in existing coverage.",
      },
      {
        question: "Can Quill support international SEO?",
        answer:
          "Yes. Quill can localize recommendations and support multi-language content plans where required.",
      },
      {
        question: "Does Quill generate briefs for writers?",
        answer:
          "Yes. Quill can package search intent, target terms, outline recommendations, and update suggestions into usable briefs.",
      },
      {
        question: "How does Quill track progress?",
        answer:
          "Quill surfaces page movement, refresh cadence, content backlog, and topic cluster coverage in recurring summaries.",
      },
      {
        question: "Can Quill work with product-led sites?",
        answer:
          "Yes. Product pages, comparison pages, help docs, and blog content can all feed the same search workflow.",
      },
    ],
    related: ["echo", "nova", "vector"],
  },
  {
    slug: "vector",
    name: "Vector",
    role: "Data Analyst Employee",
    tagline: "Explains what changed, why it changed, and what needs attention next.",
    shortDescription:
      "Turns dashboards and reports into decision-ready analysis for growth, operations, and leadership teams.",
    topTasks: [
      "Explain why conversion dropped this week",
      "Prepare campaign and funnel summaries",
      "Flag anomalies in revenue and performance metrics",
    ],
    preview: "Conversion dip traced to checkout step, 2 anomalies flagged",
    accent: "#38BDF8",
    secondary: "#818CF8",
    status: "Signal clear",
    painPoints: [
      "Dashboards show movement but not meaning.",
      "Analysts spend time restating the same numbers for different teams.",
      "Leaders need faster context before they can act confidently.",
    ],
    capabilities: [
      "Summarize week-over-week changes by funnel stage",
      "Explain campaign performance shifts",
      "Compare cohorts, channels, or geographies",
      "Generate leadership-ready reporting narratives",
      "Flag anomalies and likely causes",
      "Prepare experiment readouts",
      "Translate metric movement into actions",
      "Draft dashboard commentary for stakeholders",
      "Support executive reviews with annotated summaries",
      "Create recurring KPI digests",
      "Surface data quality or tracking issues",
      "Connect operational events to business outcomes",
    ],
    benefits: [
      "Teams spend less time chasing numbers and more time deciding",
      "Leaders get context, not just charts",
      "Performance issues are surfaced faster",
      "Reporting becomes reusable across the business",
    ],
    stats: [
      { label: "Narrative summaries", value: "Daily" },
      { label: "Anomaly alerts", value: "Real-time ready" },
      { label: "Connected sources", value: "12+" },
      { label: "Review trace", value: "Included" },
    ],
    faqs: [
      {
        question: "Can Vector replace BI tools?",
        answer:
          "No. Vector works on top of your existing data stack to turn dashboards and exports into usable interpretation and next steps.",
      },
      {
        question: "Can Vector explain anomalies?",
        answer:
          "Yes. Vector can compare periods, channels, funnels, and operational signals to produce likely-cause summaries.",
      },
      {
        question: "Who uses Vector most?",
        answer:
          "Growth teams, founders, marketing leaders, and operations managers use Vector when reporting needs to move faster.",
      },
      {
        question: "Can Vector help with recurring reports?",
        answer:
          "Yes. Vector is designed to automate weekly and monthly reporting narratives for different stakeholders.",
      },
      {
        question: "Does Vector work with non-analysts?",
        answer:
          "Yes. The value is in turning metrics into plain-language explanations and action lists.",
      },
      {
        question: "Can Vector connect to campaign tools too?",
        answer:
          "Yes. Marketing, finance, product, and operations sources can feed the same reporting workflows.",
      },
    ],
    related: ["atlas", "pulse", "quill"],
  },
  {
    slug: "luma",
    name: "Luma",
    role: "Executive Assistant Employee",
    tagline: "Preps meetings, organizes priorities, and keeps leadership decisions moving.",
    shortDescription:
      "Builds daily briefs from your inbox, calendar, docs, and open action items so leaders stay focused on the real work.",
    topTasks: [
      "Prepare daily meeting briefs and open actions",
      "Summarize inboxes by urgency and owner",
      "Create post-meeting recap notes and decisions",
    ],
    preview: "3 meetings briefed, 14 emails grouped, 5 decisions summarized",
    accent: "#FBBF24",
    secondary: "#FB7185",
    status: "Schedule aligned",
    painPoints: [
      "Executives lose time gathering context before meetings.",
      "Important follow-ups disappear across email, docs, and chat.",
      "Decision histories are hard to reconstruct later.",
    ],
    capabilities: [
      "Prepare calendar-based meeting briefs",
      "Group inbox items by urgency and owner",
      "Generate follow-up lists after meetings",
      "Draft agendas and executive summaries",
      "Pull context from past notes and documents",
      "Track open loops across projects and teams",
      "Create travel and event prep packs",
      "Compile daily or weekly leadership digests",
      "Summarize key vendor and partner threads",
      "Prepare handoff notes for chiefs of staff",
      "Organize decision logs by workspace",
      "Keep recurring leadership routines on track",
    ],
    benefits: [
      "Less context gathering before every meeting",
      "Fewer dropped follow-ups across teams",
      "Leadership gets one reliable daily brief",
      "Decision history becomes easier to review later",
    ],
    stats: [
      { label: "Meeting prep speed", value: "Under 2 min" },
      { label: "Inbox views", value: "Role-based" },
      { label: "Action tracking", value: "Always on" },
      { label: "Executive workspaces", value: "5" },
    ],
    faqs: [
      {
        question: "Does Luma only work for founders?",
        answer:
          "No. Luma is useful for executives, chiefs of staff, team leads, and anyone who runs a meeting-heavy schedule.",
      },
      {
        question: "Can Luma summarize my email safely?",
        answer:
          "Yes. Luma can group, summarize, and draft action lists while keeping approval and visibility rules in place.",
      },
      {
        question: "Can Luma create meeting briefs automatically?",
        answer:
          "Yes. Calendar-connected workflows can prepare agendas, attendee context, and open action summaries ahead of time.",
      },
      {
        question: "Can Luma help after meetings too?",
        answer:
          "Yes. Luma can capture outcomes, decisions, owners, and follow-ups so momentum is not lost.",
      },
      {
        question: "What data does Luma need?",
        answer:
          "Calendar, inbox, docs, and recurring leadership notes are usually enough to make Luma immediately useful.",
      },
      {
        question: "Can Luma work across multiple ventures or brands?",
        answer:
          "Yes. Separate workspaces keep leadership context clean while preserving one shared operating system.",
      },
    ],
    related: ["ari", "atlas", "pulse"],
  },
];

export const getAllEmployees = () => employeeDirectory;

export const getEmployeeBySlug = (slug) =>
  employeeDirectory.find((employee) => employee.slug === slug) || null;
