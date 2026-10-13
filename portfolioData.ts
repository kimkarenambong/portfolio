/**
 * PORTFOLIO DATA - KIM KAREN AMBONG
 * 
 * Centralized portfolio data for Kim Karen Ambong:
 * GoHighLevel Funnel Builder, General Virtual Assistant & Social Media Manager (SMM)
 */

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  benefit: string;
  description: string;
  deliverables: string[];
  tag: string;
}

export interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  clientType: string;
  timeline: string;
  problem: string;
  whatIDid: string[];
  toolsUsed: string[];
  results: string[];
  highlightMetric: string;
  highlightLabel: string;
  liveUrl?: string;
  liveUrlLabel?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location?: string;
  isPlaceholderNotice?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ResumeExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  summary: string;
  achievements: string[];
  liveUrl?: string;
  liveUrlLabel?: string;
}

export interface ResumeSkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface ResumeData {
  title: string;
  lastUpdated: string;
  headline: string;
  subheadline: string;
  summary: string;
  experience: ResumeExperience[];
  skills: ResumeSkillCategory[];
  education: {
    degree: string;
    institution: string;
    location: string;
    note: string;
  };
  remoteSetup: {
    internet: string;
    hardware: string;
    audioVideo: string;
    availability: string;
    languages: string;
  };
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Kim Karen Ambong",
    shortName: "Kim",
    title: "GHL Funnel Builder | General VA | SMM",
    subtitle: "Automation, Systems & Marketing Operations Specialist",
    email: "ambongkimkarenp@gmail.com",
    phone: "+63 926 653 5055",
    whatsappNumber: "+639266535055",
    whatsappDisplay: "+63 926 653 5055",
    whatsappUrl: "https://wa.me/639266535055?text=Hi%20Kim,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
    location: "Taguig, Philippines",
    linkedinUrl: "https://www.linkedin.com/in/kim-karen-ambong-80462b2b7",
    bookingUrl: "mailto:ambongkimkarenp@gmail.com?subject=Discovery%20Call%20Inquiry%20-%20Kim%20Karen%20Ambong",
    availabilityStatus: "Available for New Projects",
    timezones: "Flexible for US (EST/PST), AU (AEST), & UK Hours",
    education: "Bachelor of Science in Psychology: San Beda University, Manila",
    summary:
      "Versatile GoHighLevel Funnel Builder, General Virtual Assistant, and Social Media Manager (SMM) with nearly 4 years of remote experience. When hired, once I spot repetitive tasks that can be automated, I proactively think of a way to automate them so you and your team save valuable hours.",
    languages: "English (Fluent) | Filipino (Native)",
    remoteReadiness: {
      internet: "Converge Fiber (400 Mbps) + Backup Globe 5G Mobile Hotspot",
      hardware: "AMD Ryzen Setup, Dual 24-inch Monitors, 1080p Webcam, Noise-Cancelling Headset",
      availability: "Available for full-time remote work and flexible across AEST and US (EST/PST) hours",
    },
  },

  hero: {
    badge: "Available for 1-2 New Clients",
    headline: "Helping busy founders reclaim their time with high-converting funnels & automated systems.",
    subheadline:
      "GoHighLevel Funnel Builder, General VA, and Social Media Manager (SMM) based in the Philippines. When hired, the moment I spot repetitive tasks that can be automated, I proactively find a way to automate them. Whether you need a high-converting sales funnel, reliable general VA support, or active social media management, I eliminate bottlenecks so your business runs effortlessly.",
    primaryCta: "Book a Free Call",
    secondaryCta: "See Sample Works",
    stats: [
      {
        value: "Nearly 4 Yrs",
        label: "Remote Experience",
        subtext: "Coaches, founders & high-volume ops",
      },
      {
        value: "100-500+",
        label: "Outreach Emails / Day",
        subtext: "Automated via Google Apps Script & CRM",
      },
      {
        value: "GHL Funnels",
        label: "Funnels & Workflows",
        subtext: "GoHighLevel, ManyChat, Mailchimp",
      },
    ],
  },

  about: {
    badge: "About Me",
    heading: "Systems that work hard, so you do not have to.",
    bioParagraphs: [
      "Hi, I'm Kim! Over the past nearly 4 years, I have worked remotely with founders, coaches, and growing businesses across the US, Australia, and the UK to remove operational bottlenecks.",
      "When you bring me onto your team, I do not just handle the daily checklist. The moment I see repetitive tasks that can be automated, I proactively think of a way to automate them so you save valuable hours every single week. At the same time, I am versatile: you can hire me as your dedicated GoHighLevel funnel builder creating high-converting sales and opt-in pages, your dependable General VA managing inboxes and calendars, or your hands-on Social Media Manager (SMM) driving community engagement and ManyChat DM pipelines.",
      "With a background in psychology and customer-centric remote operations, I combine proactive automation with thoughtful, clear communication. When we work together, you get fast turnarounds, reliable systems, and hours of focus returned to your week.",
    ],
    tools: [
      { name: "GoHighLevel", category: "Funnels & CRM" },
      { name: "Google Workspace", category: "Productivity" },
      { name: "Google Apps Script", category: "Custom Automation" },
      { name: "ManyChat", category: "Lead Nurture" },
      { name: "Mailchimp", category: "Email Marketing" },
      { name: "Canva", category: "Content & Design" },
      { name: "Notion", category: "Knowledge & SOPs" },
      { name: "Systeme.io", category: "Funnels" },
      { name: "Slack", category: "Communication" },
      { name: "Excel / Sheets", category: "Data & Tracking" },
      { name: "CapCut", category: "Short-Form Video" },
      { name: "Calendly", category: "Scheduling" },
    ],
    howIWork: [
      {
        step: "01",
        title: "Spot Repetitive Tasks & Automate",
        description: "When hired, once I identify repetitive steps in your daily workflow, I proactively suggest and build automations to save your team time.",
      },
      {
        step: "02",
        title: "Versatile Support (GHL, VA, SMM)",
        description: "Seamlessly adapting as a GoHighLevel funnel builder, a proactive General VA, or a Social Media Manager (SMM) based on your priorities.",
      },
      {
        step: "03",
        title: "Proactive, Clear Communication",
        description: "No radio silence or guesswork. Daily updates, proactive questions before blockers arise, and prompt responses across Slack or email.",
      },
    ],
  },

  services: [
    {
      id: "funnels",
      iconName: "Layers",
      title: "GoHighLevel Funnel & Landing Page Builds",
      benefit: "Launch clean, high-converting sales & opt-in pages without tech headaches.",
      description: "End-to-end funnel builds inside GoHighLevel. From mobile-optimized sales and opt-in pages to custom thank-you sequences, calendar bookings, and student onboarding.",
      deliverables: [
        "High-converting opt-in, sales, and checkout pages",
        "Mobile-first responsive styling and brand cohesion",
        "Lead capture forms & automated calendar integration",
        "Post-optin email countdown & confirmation workflows",
      ],
      tag: "Conversion & Funnels",
    },
    {
      id: "lead-gen",
      iconName: "TrendingUp",
      title: "Lead Generation & Outbound Outreach",
      benefit: "Scale outbound email outreach with customized automation.",
      description: "Proven experience sending 100-500+ personalized outbound emails daily. I qualify prospect lists, deploy Google Apps Script senders, and triage positive replies directly to your calendar.",
      deliverables: [
        "100-500+ personalized outbound emails sent daily",
        "Custom Google Apps Script setup for scalable bulk outreach",
        "Pre-qualified prospect list building and verification",
        "Shared CRM response logging and lead status updates",
      ],
      tag: "Pipeline Growth",
    },
    {
      id: "social-media",
      iconName: "Share2",
      title: "Social Media Manager (SMM) & Community DMs",
      benefit: "Turn your social channels into an active, relationship-driven lead pipeline.",
      description: "Consistent brand presence across Instagram, Facebook, and TikTok. I manage your DMs, warm up inbound prospects, engage community members, and flag high-intent buyers directly to you.",
      deliverables: [
        "Daily DM triage and warm relationship nurturing",
        "ManyChat comment-trigger CTAs & automated lead routing",
        "30-day content calendar creation & Canva visuals",
        "Lead qualification & escalation tracking in Excel/Sheets",
      ],
      tag: "SMM & Community",
    },
    {
      id: "automations",
      iconName: "Cpu",
      title: "Workflow Automation (Apps Script & Webhooks)",
      benefit: "Connect your tech stack seamlessly without expensive third-party fees.",
      description: "Custom automations that eliminate repetitive manual work. I connect ManyChat triggers to GoHighLevel pipelines and Mailchimp sequences, backed by custom Google Apps Script code.",
      deliverables: [
        "Custom Google Apps Script for bulk outreach & data sync",
        "ManyChat-to-CRM automated lead routing",
        "Automated notification triggers into Slack/Email",
        "Multi-platform database syncing in Google Sheets",
      ],
      tag: "Automation Mindset",
    },
    {
      id: "admin-support",
      iconName: "ShieldCheck",
      title: "General Virtual Assistant & Executive Support",
      benefit: "Protect your focus by offloading operational and administrative tasks.",
      description: "High-level administrative execution backed by nearly 4 years of remote experience. From calendar management to documentation, I keep your day running smoothly.",
      deliverables: [
        "Executive inbox triage and zero-inbox maintenance",
        "Calendar scheduling & meeting coordination",
        "Standard Operating Procedure (SOP) documentation",
        "Data entry, customer support & spreadsheet organization",
      ],
      tag: "General VA Support",
    },
  ] as ServiceItem[],

  caseStudies: [
    {
      id: "ghl-funnel-launch",
      category: "GoHighLevel Funnel Build",
      title: "Beyond Breath Mastery Funnel Launch: Gabriella Borges",
      clientType: "Gabriella Borges, Founder of &flowyoga (New Jersey, USA)",
      timeline: "Contract Launch Project (July 2026)",
      problem: "Gabriella was launching her flagship Beyond Breath Mastery program but was overwhelmed by the technical setup in GoHighLevel, had incomplete sales page copy, and risked missing her public launch deadline.",
      whatIDid: [
        "Built complete opt-in, sales, and thank-you pages inside GoHighLevel with mobile-first styling.",
        "Stepped in to write and refine sales copy for sections the founder could not finish, keeping the messaging authentic and high-converting.",
        "Configured post-optin confirmation emails, lead tags, and automated calendar booking links in GoHighLevel.",
        "Spotted repetitive manual onboarding tasks and automated them into seamless workflows, providing on-call launch support.",
      ],
      toolsUsed: ["GoHighLevel", "Custom CSS", "Canva", "Google Docs"],
      results: [
        "Delivered a launch-ready funnel ahead of the deadline with zero launch delays.",
        "Captured almost 275 qualified opt-in sign-ups (275+ leads) on the opt-in funnel prior to cart open.",
        "Achieved a 34.8% landing page opt-in conversion rate on targeted traffic.",
        "Enabled a smooth, glitch-free cart open resulting in a sold-out launch cohort.",
      ],
      highlightMetric: "275+",
      highlightLabel: "Opt-In Sign-Ups (34.8% CVR)",
      liveUrl: "https://breathworkbeyondthesequence.com/beyondbreath/mastery",
      liveUrlLabel: "View Live Sales Page on GoHighLevel",
    },
    {
      id: "content-dm-system",
      category: "SMM & Community Automation",
      title: "Multi-Platform Content Calendar & Proactive DM Engine: Keelie Louise",
      clientType: "Keelie Louise, Founder of The Limen Method (Melbourne, Australia)",
      timeline: "Ongoing Daily Management (April 2026 to Present)",
      problem: "The Limen Method struggled with sporadic posting, unanswered DMs across Instagram, Facebook, and TikTok, and repetitive manual messaging that took hours out of Keelie's day.",
      whatIDid: [
        "Built a 30-day content calendar (3 posts/week) around targeted identity-focused pillars and designed visual assets in Canva.",
        "Stepped in as both an agile General VA and dedicated Social Media Manager (SMM), managing daily proactive DM outreach during peak audience hours.",
        "Noticed repetitive chat responses and lead tracking, then implemented ManyChat comment-trigger CTAs and automated spreadsheet tracking.",
        "Maintained organized multi-tab logs with lead statuses, DM scripts, and weekly performance reports.",
      ],
      toolsUsed: ["Instagram", "TikTok", "Facebook", "ManyChat", "Canva", "Excel"],
      results: [
        "Re-engaged 140+ dormant leads and routed 22 qualified prospects directly to booked discovery calls.",
        "Saved Keelie 15+ hours every single week in manual messaging and content planning.",
        "Maintained consistent 100% response coverage during peak hours with structured lead logging.",
      ],
      highlightMetric: "15+ hrs/wk",
      highlightLabel: "Founder Hours Reclaimed",
    },
    {
      id: "lead-gen-automation",
      category: "Lead Generation & Automation",
      title: "High-Volume Cold Outreach Engine & Automated CRM Pipeline",
      clientType: "FinTech Founder: Affiliate Course Business",
      timeline: "Full-Time Systems Engagement (Nov 2025 to April 2026)",
      problem: "The business needed to scale cold outreach to hundreds of verified leads every day, but manual sending was too slow, prone to errors, and capped growth.",
      whatIDid: [
        "Architected and deployed a custom Google Apps Script automation to dispatch 100 to 500+ personalized emails daily.",
        "Set up GoHighLevel pipeline workflows to automatically tag, route, and assign leads based on their responses.",
        "Integrated ManyChat comment flows for immediate inbound lead engagement and qualification.",
        "Created structured follow-up sequences in Mailchimp and maintained clean lead databases in Google Workspace.",
      ],
      toolsUsed: ["Google Apps Script", "GoHighLevel", "ManyChat", "Mailchimp", "Google Sheets"],
      results: [
        "Scaled outreach to 100-500+ personalized emails sent daily with a 99.2% inbox deliverability rate.",
        "Achieved a sustained 42.6% open rate and 18.4% positive response rate on cold campaigns.",
        "Generated 35+ booked discovery calls and consistent new student enrollments each month.",
      ],
      highlightMetric: "100-500+",
      highlightLabel: "Outreach Emails / Day",
    },
  ] as CaseStudyItem[],

  pricing: [
    {
      id: "starter",
      name: "Starter Support",
      price: "$600 - $900",
      period: "/ month",
      description: "Ideal for solo founders needing dedicated daily inbox management, content scheduling, and routine administrative support.",
      features: [
        "10 - 15 hours per week of dedicated support",
        "Daily inbox triage & customer DM management",
        "Social media content scheduling (up to 3 posts/week)",
        "Basic calendar & appointment management",
        "Google Workspace / Drive file organization",
        "Daily communication via Slack or email",
        "Weekly progress summary & task tracking",
      ],
      isPopular: false,
      ctaText: "Choose Starter",
    },
    {
      id: "growth",
      name: "Growth & Systems",
      badge: "Most Popular",
      price: "$1,200 - $1,600",
      period: "/ month",
      description: "For scaling businesses that need proactive lead generation, GoHighLevel funnels, and connected marketing automations.",
      features: [
        "20 - 25 hours per week of high-impact support",
        "GoHighLevel funnel builds, edits & pipeline management",
        "100-500+ daily outreach emails via automated scripts",
        "ManyChat comment triggers & DM lead qualification",
        "Full 30-day content calendar creation & Canva visuals",
        "Custom Google Apps Script workflow automations",
        "US / AU / UK timezone overlap coverage",
        "Priority Slack support & weekly strategy calls",
      ],
      isPopular: true,
      ctaText: "Start with Growth",
    },
    {
      id: "custom",
      name: "Full-Scale Partner",
      price: "Custom",
      period: "/ project or retainer",
      description: "Tailored for established coaches and founders seeking a dedicated systems partner or comprehensive project launch.",
      features: [
        "30 - 40 hours per week or fixed-scope project launch",
        "Complete end-to-end GoHighLevel funnel & email ecosystem",
        "Custom workflow engineering (Apps Script, CRM, Mailchimp)",
        "Multi-platform community management (IG, FB, TikTok)",
        "Executive administrative support & full SOP library creation",
        "High-priority turnaround with daily video updates (Loom)",
        "Flexible trial period available to test fit",
      ],
      isPopular: false,
      ctaText: "Discuss Custom Scope",
    },
  ] as PricingPlan[],

  testimonials: [
    {
      id: "testimonial-1",
      quote: "Kim completely took the stress out of our Beyond Breath Mastery launch. She built our full GoHighLevel sales page and opt-in funnel, stepped in to polish copy when I got stuck, and ensured every workflow was automated. When she saw our repetitive intake tasks, she immediately automated them into smooth workflows. We hit 275+ opt-ins and sold out our cohort on opening day!",
      author: "Gabriella Borges",
      role: "Founder",
      company: "&flowyoga",
      location: "New Jersey, USA",
      isPlaceholderNotice: false,
    },
    {
      id: "testimonial-2",
      quote: "Kim is that rare find who can jump in as an agile General VA, handle Social Media Management (SMM), and automate backend lead routing with ManyChat. The moment she saw how much time we spent on repetitive manual messaging, she automated our lead capture and tracking. She saved me over 15 hours every single week.",
      author: "Keelie Louise",
      role: "Founder",
      company: "The Limen Method",
      location: "Melbourne, Australia",
      isPlaceholderNotice: false,
    },
    {
      id: "testimonial-3",
      quote: "Kim is an exceptional systems partner and virtual assistant. The moment she joined and saw our repetitive lead follow-ups and pipeline management tasks, she proactively automated the entire workflow between our CRM and outreach channels. Whether tackling GoHighLevel funnels, general operations, or administrative support, she operates with precision across our Malta and Dubai hubs.",
      author: "Owen Morton",
      role: "Founder",
      company: "Grow More",
      location: "Malta & Dubai",
      isPlaceholderNotice: false,
    },
  ] as TestimonialItem[],

  faqs: [
    {
      question: "What roles can you handle for my business?",
      answer: "I am a multi-skilled systems specialist: you can hire me as your GoHighLevel Funnel Builder, your General Virtual Assistant (inbox, calendar, executive support), or your Social Media Manager (SMM: content scheduling, DM outreach, community nurture). Most importantly, when hired, the moment I spot repetitive tasks that can be automated, I proactively find a way to automate them to save you and your team valuable time.",
    },
    {
      question: "What are your working hours and timezone availability?",
      answer: "I am based in Taguig, Philippines (GMT+8), but I have nearly 4 years of experience working with US, Australian (AEST), and UK clients. I regularly work in scheduled blocks that overlap directly with your active business hours so we collaborate smoothly without delays.",
    },
    {
      question: "How do we communicate day-to-day?",
      answer: "I adapt to your team's preferred stack: typically Slack, Microsoft Teams, or WhatsApp for daily quick messaging, and Google Meet or Zoom for calls. For task updates and asynchronous walk-throughs, I use Loom videos so you can review work on your own schedule.",
    },
    {
      question: "What tools and software do you specialize in?",
      answer: "My core systems stack includes GoHighLevel (funnels, pipelines, CRM, workflows), Google Workspace, Google Apps Script, ManyChat, Mailchimp, Canva, Notion, and Systeme.io. If you use a tool outside of this list (like Asana, ClickUp, or Trello), I pick up new software quickly.",
    },
    {
      question: "What is your typical turnaround time for tasks?",
      answer: "Daily administrative and outreach tasks are executed every single business day with end-of-day reports. Standard funnel revisions and content calendar sprints are turned around in 24-48 hours, while full end-to-end funnel launches typically take 5-7 business days depending on scope.",
    },
    {
      question: "How do we get started working together?",
      answer: "It's simple: 1) Click 'Book a Free Call' or send me an email to schedule a 15-minute chat. 2) We discuss your current bottlenecks and pick the right package. 3) I send over an agreement, gather credentials, and we kick off within 48 hours!",
    },
  ] as FAQItem[],

  resume: {
    title: "Master Professional Resume",
    lastUpdated: "Updated for 2026",
    headline: "GoHighLevel Funnel Builder | General Virtual Assistant | Social Media Manager (SMM)",
    subheadline: "Automation, Systems & Remote Operations Specialist",
    summary:
      "Versatile GoHighLevel Funnel Builder, General Virtual Assistant, and Social Media Manager (SMM) with nearly 4 years of hands-on remote experience supporting founders, coaches, and growing businesses across the United States, Australia, and the United Kingdom. When hired, once I spot repetitive tasks that can be automated, I proactively think of a way to automate them to save you and your team valuable hours. Proven track record launching high-converting funnels, architecting outbound email engines, managing multi-platform community DMs, and delivering proactive executive support.",
    experience: [
      {
        role: "GoHighLevel Funnel Builder & Launch VA",
        company: "Gabriella Borges (&flowyoga)",
        location: "New Jersey, USA (Remote)",
        period: "Contract Launch Project (July 2026)",
        badge: "Live GHL Launch",
        summary:
          "Engineered the full GoHighLevel funnel infrastructure and sales pages for the flagship Beyond Breath Mastery coaching launch.",
        achievements: [
          "Built complete opt-in, sales, and thank-you pages inside GoHighLevel with mobile-first styling and custom responsive formatting.",
          "Stepped in to write and refine sales copy for sections the founder could not finish, keeping the messaging authentic and high-converting.",
          "Configured post-opt-in confirmation email automations, lead tagging, and automated calendar scheduling workflows inside GoHighLevel.",
          "Spotted repetitive manual student onboarding tasks and automated them into seamless backend workflows, providing on-call launch support.",
          "Delivered 275+ qualified opt-in leads prior to cart open, a 34.8% opt-in conversion rate, and a sold-out launch cohort.",
        ],
        liveUrl: "https://breathworkbeyondthesequence.com/beyondbreath/mastery",
        liveUrlLabel: "View Live Sales Page on GoHighLevel",
      },
      {
        role: "General Virtual Assistant & Social Media Manager (SMM)",
        company: "Keelie Louise (The Limen Method)",
        location: "Melbourne, Australia (Remote)",
        period: "April 2026 - Present (Ongoing Management)",
        badge: "Active Retainer",
        summary:
          "Spearheading 30-day multi-platform content scheduling, proactive community DM outreach, and lead capture automations.",
        achievements: [
          "Developed 30-day content calendars (3 posts/week) across Instagram, Facebook, and TikTok, designing high-engagement visual carousels in Canva.",
          "Stepped in as both an agile General VA and dedicated Social Media Manager (SMM), handling daily proactive DM outreach during peak audience hours.",
          "Noticed repetitive chat responses and manual lead tracking, then implemented ManyChat comment-trigger CTAs and automated spreadsheet tracking.",
          "Re-engaged 140+ dormant leads and routed 22 qualified prospective clients directly to booked discovery calls.",
          "Saved founder Keelie Louise over 15 hours every single week in manual messaging and operational follow-ups.",
        ],
      },
      {
        role: "High-Volume Cold Outreach & Systems Automation Specialist",
        company: "Affiliate Course Business / FinTech Founder",
        location: "United States (Remote)",
        period: "November 2025 - April 2026",
        badge: "Systems & Outreach",
        summary:
          "Engineered high-volume outbound email automation engine and integrated CRM lead pipelines.",
        achievements: [
          "Architected and deployed a custom Google Apps Script automation to dispatch 100 to 500+ personalized emails daily.",
          "Maintained a 99.2% inbox deliverability rate, 42.6% open rate, and 18.4% positive response rate across cold campaigns.",
          "Built GoHighLevel pipeline workflows to automatically tag, route, and assign leads based on their responses.",
          "Created structured follow-up sequences in Mailchimp and maintained clean lead databases in Google Workspace.",
          "Generated 35+ booked discovery calls and consistent new student enrollments each month.",
        ],
      },
      {
        role: "Remote Virtual Assistant & Executive Administrative Specialist",
        company: "Multi-Client Remote Engagements",
        location: "United States, Australia & UK Clients (Remote)",
        period: "2022 - 2025 (Nearly 4 Years Remote Experience)",
        badge: "General VA Support",
        summary:
          "High-level administrative execution, calendar management, and standard operating procedures (SOP) documentation.",
        achievements: [
          "Managed executive inbox triage to maintain inbox zero across busy client email accounts.",
          "Coordinated complex international meeting calendars across US (EST/PST), Australian (AEST), and UK timezones.",
          "Authored clear Standard Operating Procedures (SOPs) in Notion and recorded asynchronous Loom video walkthroughs.",
          "Performed accurate data entry, financial spreadsheet tracking, and routine customer email support.",
        ],
      },
    ] as ResumeExperience[],
    skills: [
      {
        category: "GoHighLevel & Funnel Architecture",
        iconName: "Layers",
        skills: [
          "GoHighLevel Funnel Building",
          "Sales & Opt-in Pages",
          "Mobile-First Responsive Design",
          "Conversion Copywriting Support",
          "Lead Capture Forms",
          "Calendar & Checkout Integrations",
          "Systeme.io",
        ],
      },
      {
        category: "Workflow Automation & Scripting",
        iconName: "Cpu",
        skills: [
          "Repetitive Task Automation",
          "Custom Google Apps Script",
          "ManyChat DM & Comment Triggers",
          "GoHighLevel Pipeline Workflows",
          "Mailchimp Sequences",
          "Webhooks & Data Syncing",
        ],
      },
      {
        category: "Social Media Management (SMM)",
        iconName: "Share2",
        skills: [
          "30-Day Content Calendars",
          "Canva Graphic & Carousel Design",
          "CapCut Video Editing",
          "Instagram, TikTok & Facebook",
          "Community DM Triage",
          "Lead Nurturing & Warm Outreach",
        ],
      },
      {
        category: "General VA & Operational Support",
        iconName: "CheckCircle2",
        skills: [
          "Executive Calendar Scheduling",
          "Inbox Zero Maintenance",
          "SOP Documentation (Notion)",
          "Google Workspace (Docs, Sheets, Drive)",
          "Excel / Sheets Lead Tracking",
          "Loom Video SOP Recording",
        ],
      },
    ] as ResumeSkillCategory[],
    education: {
      degree: "Bachelor of Science in Psychology",
      institution: "San Beda University",
      location: "Manila, Philippines",
      note: "Applied insights into consumer psychology, buyer behavior, persuasive communication, and client empathy.",
    },
    remoteSetup: {
      internet: "Converge Fiber (400 Mbps) + Backup Globe 5G Mobile Hotspot",
      hardware: "AMD Ryzen Multi-Core PC, Dual 24-inch Monitors, External SSD",
      audioVideo: "1080p Webcam, Noise-Cancelling Headset for clear client meetings",
      availability: "Full-Time Remote (Flexible for US EST/PST, AU AEST, and UK hours)",
      languages: "English (Fluent / Professional) and Filipino (Native)",
    },
  } as ResumeData,

  footer: {
    tagline: "GHL Funnel Builder | General VA | SMM",
    location: "Taguig, Philippines 🇵🇭",
    copyrightYear: 2026,
    notice: "Ready for remote collaboration across US, AU, and UK time zones.",
  },
};
