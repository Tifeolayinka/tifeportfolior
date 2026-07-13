export interface Project {
    id: string;
    title: string;
    liveUrl?: string;
    liveUrls?: { label: string; url: string; platform: "web" | "ios" | "android" }[];
    category: string;
    image: string;
    slug: string;
    description: string;
    challenge: {
        summary: string;
        points: string[];
    };
    roles: string[];
    whatIWorkedOn?: string[];
    showcaseDescription: string;
    process: {
        title: string;
        content: string;
    };
    result: {
        title: string;
        content: string;
        testimonial?: {
            text: string;
            author: string;
            role: string;
        };
    };
    metrics?: { label: string; value: string }[];
    fullDescription?: string;
    mockups?: { url: string; name: string }[];
}

export const PROJECTS: Project[] = [
    {
        id: "01",
        title: "Dojohub CRM",
        category: "Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/Dojohub+main.png?q=80&w=1600&auto=format&fit=crop",
        slug: "dojohub-crm",
        liveUrl: "https://dojohubcrm.com",
        liveUrls: [
            { label: "Visit Website", url: "https://dojohubcrm.com", platform: "web" },
            { label: "App Store", url: "https://apps.apple.com/us/app/dojohub/id6760246625", platform: "ios" }
        ],
        description: "Built for martial arts schools drowning in spreadsheets and group chats. One app handles membership, billing and attendance. Schools get back 20 plus hours of admin work every week.",
        challenge: {
            summary: "Martial arts school owners were spending more time on admin than on the mat. Between managing class schedules, tracking belt promotions, collecting payments, and onboarding new students, most dojos relied on a patchwork of spreadsheets, group chats, and manual processes. The result was missed payments, forgotten promotions, and students slipping through the cracks — particularly at schools trying to scale beyond a handful of classes.",
            points: [
                "Dojo owners spent 20+ hours a week managing class schedules, attendance, and belt progress manually across disconnected tools.",
                "Students frequently missed classes or fell behind on payments because there was no centralized system for reminders or tracking.",
                "Managing recurring subscriptions, identifying failed payments, and determining belt promotion eligibility meant cross-referencing multiple spreadsheets.",
                "Onboarding new students or setting up new dojo locations was painfully slow due to fragmented workflows and no consistent process."
            ]
        },
        roles: ["Product Design", "Visual Identity", "UX Strategy", "Bubble Development"],
        metrics: [
            { label: "Admin time saved", value: "20+ hrs/week" },
            { label: "Platforms", value: "Web + iOS" },
            { label: "Stack", value: "Bubble + Stripe" },
            { label: "Scope", value: "End-to-end" },
        ],
        whatIWorkedOn: [
            "Product (web & mobile app) UI & UX",
            "Relational database & system architecture",
            "Class scheduling & belt tracking workflows",
            "Stripe subscription & payment integrations",
            "Client onboarding flow optimization"
        ],
        showcaseDescription: "Iterating on layout and logic to achieve high-fidelity results for school owners.",
        process: {
            title: "The Solution",
            content: "Working directly with the founder — a professional jiu-jitsu practitioner and product manager — I designed and built a single platform to replace the scattered tools dojos had been relying on. To design with real empathy, I started training at the gym myself to understand the routines of students, parents, and instructors firsthand.\n\nThe solution centered on two surfaces: a web-based admin dashboard for school owners and a mobile app for students. I created relational data models for programs, classes, belts, and memberships, and integrated Stripe to handle subscriptions, cancellations, and failed payments via webhooks. The entire product was built in Bubble, which required careful architectural decisions to deliver a responsive, polished experience across both web and mobile within the platform's constraints."
        },
        result: {
            title: "The Outcome",
            content: "DojoHub replaced a mess of spreadsheets and group chats with one cohesive platform, giving school owners back over 20 hours of admin work per week. Instructors could manage class schedules, track belt promotions, and process payments from a single dashboard. New dojos were able to fully onboard — including student setup, membership plans, and class scheduling — in a fraction of the time. The platform shipped across web and iOS, handling the full lifecycle from student enrollment to recurring billing.",
            testimonial: {
                text: "This saved us. We were drowning in spreadsheets. Now I can grade students, collect payments, and track everything from one place.",
                author: "Alonso R.",
                role: "Founder"
            }
        },
        mockups: [
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Dojohub/543shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Student Information" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Dojohub/638shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Membership Management" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Dojohub/586shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Program Management" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Dojohub/714shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Dashboard Overview" }
        ]
    },
    {
        id: "02",
        title: "KudoPage",
        category: "Dev, Design",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/242_2x_shots_so.png",
        slug: "kudopage",
        liveUrl: "https://kudopage.link",
        liveUrls: [
            { label: "Visit Website", url: "https://kudopage.link", platform: "web" }
        ],
        description: "A review collection platform for freelancers, built and shipped solo from idea to live product in one week. Yes, I actually use it myself.",
        challenge: {
            summary: "Freelancers live and die by their reputation, but the tools for managing it are broken. Testimonials are scattered across platforms like Upwork, Fiverr, and LinkedIn — locked inside walled gardens with no way to export them. Sharing a screenshot of a DM looks unprofessional and lacks credibility. There was no simple way for a freelancer to collect, consolidate, and showcase verified reviews under one link on their own terms.",
            points: [
                "Reviews were locked inside individual platforms with no export option, making it impossible to consolidate a freelancer's full reputation.",
                "Most review collection flows created high friction for clients by requiring account registration before leaving a review.",
                "Screenshots of DMs and chat messages lacked professionalism and credibility as social proof.",
                "There was no single link or embeddable widget that could display a freelancer's reviews on their own website.",
                "Existing solutions weren't built for the freelancer use case — they were designed for businesses, not individuals."
            ]
        },
        roles: [
            "Product Design",
            "UX Strategy",
            "Full-Stack Development (Next.js + Convex)",
            "Chrome Extension Development"
        ],
        metrics: [
            { label: "Built in", value: "1 week" },
            { label: "Setup time", value: "Under 5 min" },
            { label: "Stack", value: "Next.js + Convex" },
            { label: "Extras", value: "Chrome Extension + Widget" },
        ],
        whatIWorkedOn: [
            "Brand Identity refresh (took a part)",
            "Landing page redesign",
            "Product (web app) UI & UX",
            "Design system development",
            "Icon pack design"
        ],
        showcaseDescription: "Designing end-to-end social proof infrastructure — from zero-friction review collection to pixel-perfect public profiles and embeddable widgets that live anywhere on the web...",
        process: {
            title: "The Solution",
            content: "I mapped the full testimonial lifecycle and designed a zero-friction experience for both freelancers and their clients. The core product is a public profile page — one link that consolidates all of a freelancer's reviews in a clean, credible format.\n\nTo keep completion rates high, the client review form requires no login or account creation. For importing existing reputation, I built a Chrome Extension that lets freelancers pull reviews they've already earned on Upwork, Fiverr, and LinkedIn directly into their profile. For showcasing reviews externally, I designed a lightweight JavaScript widget (~10kb) that loads natively on any portfolio site without the styling and speed limitations of iframes.\n\nThe entire product — from landing page to dashboard to extension — was designed and shipped solo in one week, built on Next.js and Convex."
        },
        result: {
            title: "The Outcome",
            content: "KudoPage gave freelancers a turnkey tool to own their reputation. Users could set up a profile and start requesting reviews in under 5 minutes. The Chrome Extension eliminated the manual work of re-collecting existing reviews, and the embeddable widget let freelancers display live social proof on any site. The no-login review form removed the biggest barrier to collecting testimonials — client friction — resulting in significantly higher completion rates.",
            testimonial: {
                text: "KudoPage solved something I didn't even know I could fix — all my Upwork and Fiverr reviews in one place, on my own page, with a widget I can drop into any site. My first client after launching it mentioned the reviews page unprompted.",
                author: "Alex M.",
                role: "Freelance Product Designer"
            }
        },
        mockups: [
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/767_2x_shots_so.png", name: "Landing page Hero Section" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/89_2x_shots_so.png", name: "Freelancer Dashboard — Reviews Overview" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/70_2x_shots_so.png", name: "Review request form" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/830_2x_shots_so.png", name: "Review Submission Form" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/226_2x_shots_so.png", name: "Sign up page" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/587_2x_shots_so.png", name: "Sign up (account set up page)" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/687_2x_shots_so.png", name: "Analytics" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/830_2x_shots_so.png", name: "Client Review Submission Form" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/242_2x_shots_so.png", name: "Public Profile Page (/[tifeolayinka])" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/51_2x_shots_so.png", name: "Public Profile Page (pinned review section) (/[tifeolayinka])" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/375_2x_shots_so.png", name: "Embed Widget — Set up page" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/463_2x_shots_so.png", name: "Settings Page" }
        ]
    },
    {
        id: "03",
        title: "Oqool Core HR",
        category: "Design",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/405shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "oqool-core-hr",
        liveUrl: "https://www.oqool.io/",
        description: "Took a company from manual payroll chaos to one-click processing for over 120 employees. Full HR and payroll system designed and shipped in 12 weeks.",
        challenge: {
            summary: "A growing company with over 120 employees was drowning in manual payroll and HR processes. Approvals were routed through email chains, working hours were tracked inconsistently, and payroll calculations — including late penalties, public holidays, and employee-specific rules — were handled through spreadsheets. The margin for error was high, and staying compliant with UAE labour regulations added another layer of complexity that manual tools couldn't handle reliably.",
            points: [
                "Designing a flexible approval workflow system that could adapt to different company structures — from flat teams to multi-level hierarchies — without over-complicating the interface.",
                "Handling employee-specific working hours alongside company-wide defaults without breaking payroll logic or creating edge cases.",
                "Separating company owners from employees in the system while still supporting executive approvals and visibility.",
                "Ensuring payroll accuracy across attendance rules, late penalties, paid public holidays, and exportable reports — all compliant with UAE labour law."
            ]
        },
        roles: ["Product Design", "Design Systems", "Bubble Development"],
        metrics: [
            { label: "Employees managed", value: "120+" },
            { label: "Shipped in", value: "12 weeks" },
            { label: "Stack", value: "Figma + Bubble" },
            { label: "Compliance", value: "UAE labour law" },
        ],
        whatIWorkedOn: [
            "Core HR & payroll dashboard UI & UX",
            "Design system & component library development",
            "Multi-level sequential approval logic",
            "Work schedule & attendance tracking engine",
            "UAE labour compliance system architecture"
        ],
        showcaseDescription: "Visual exploration of the employee lifecycle and payroll automation flows.",
        process: {
            title: "The Solution",
            content: "I approached this with a systems-first mindset, starting in Figma to map complex HR processes into clear, manageable interfaces before building anything. The core of the solution was a sequential approval engine that supported line-manager routing, department-based flows, and a toggle-based CEO approval mechanism — flexible enough to handle different company structures without requiring custom configuration for each.\n\nIn Bubble, I implemented scalable data models for employees, work schedules, approvals, and payroll. Special attention went to the payroll engine: it needed to account for company-wide defaults, employee-specific overrides, late penalties, and UAE public holidays — all while producing accurate, exportable reports. The entire system was designed and shipped in 12 weeks."
        },
        result: {
            title: "The Outcome",
            content: "Oqool Core HR replaced manual spreadsheets and email chains with a production-ready system managing over 120 employees. Payroll processing went from a multi-day ordeal to a streamlined, one-click operation. The flexible approval workflows eliminated routing confusion, and UAE labour compliance was built directly into the payroll logic rather than layered on as an afterthought. The company gained confidence in their payroll accuracy and freed their HR team to focus on people, not processes."
        },
        mockups: [
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/405shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Employer Dashboard" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/269shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Employee Directory" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/435shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Employee Info Popup" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/768shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "AI Assitant" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/269shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Employee Listing" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Hr/249shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Project Details/Tasks Page" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Hr/591shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Leave Workflow" },
        ]
    },
    {
        id: "04",
        title: "Recrewer",
        category: "Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/762shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "recrewer",
        liveUrl: "#",
        description: "Built so founders stop making offers based on gut feel. Structured interviews, clear pipelines, real candidate data. \"Tife brings clarity before code.\" Gursimran T., Founder",
        challenge: {
            summary: "Hiring contractors is messy. Founders typically rely on gut feeling, scattered conversations across email and Slack, and informal offer processes that leave both sides uncertain. There was no structured way to manage the full freelance hiring lifecycle — from talent discovery to interviews, offers, contracts, onboarding, and payments — in a single place. Both employers and contractors needed a system that built trust, transparency, and accountability without adding bureaucratic overhead.",
            points: [
                "Three distinct user roles (Contractors, Employers, Admins) each needed clearly separated permissions, dashboards, and workflows.",
                "The platform followed a no-job-board hiring model, which meant designing effective talent discovery and matching without traditional listings.",
                "The offer and contract flow needed to feel flexible for different engagement types while remaining legally structured and compliant.",
                "Building trust mechanisms — verification, background checks, and controlled communication — without creating friction that slowed down hiring.",
                "Reducing the typical chaos of freelance hiring without oversimplifying workflows that are genuinely complex."
            ]
        },
        roles: ["UX Strategy", "Bubble Development", "System Architecture"],
        metrics: [
            { label: "User roles", value: "3 (Contractor, Employer, Admin)" },
            { label: "Approach", value: "Design-first" },
            { label: "Stack", value: "Figma + Bubble" },
            { label: "Scope", value: "Full hiring lifecycle" },
        ],
        whatIWorkedOn: [
            "User journey mapping & wireframing",
            "Contractor & employer dashboard UI & UX",
            "Flexible contract & offer creation workflows",
            "Role-based access control & permissions",
            "Interview scheduling & notification system"
        ],
        showcaseDescription: "High-level overview of the hiring pipeline and candidate scoring systems.",
        process: {
            title: "The Solution",
            content: "Working closely with the founder through collaborative call sessions, I unpacked the full hiring lifecycle before writing a single line of logic. Using Figma, I mapped detailed user journeys across Employers and Contractors, breaking down interviews, offers, hiring decisions, onboarding, and contracts into clear, modular steps.\n\nThe solution centered on a job-centric hiring model with structured interview scheduling, offer tracking, and role-based dashboards. Trust was built into the system through verification flows, background checks, and controlled communication channels rather than being an afterthought. Every design decision was tested against a single question: does this reduce uncertainty for the user? The design phase came first — all critical flows were validated before any development began."
        },
        result: {
            title: "The Outcome",
            content: "Recrewer replaced the fragmented freelance hiring process with a unified, trust-based platform. Employers gained a structured way to discover talent, manage interviews, issue offers, and handle contracts — all from one dashboard. Contractors secured a professional environment with clear expectations and transparent processes. The structured approach to hiring eliminated the gut-feel decision-making that leads to bad hires and gave both sides the confidence and clarity that scattered tools never could.",
            testimonial: {
                text: "Tife brings clarity before code. He focuses on user flow, priorities, and build-ready design before opening Bubble, which saves time and avoids rework. His blend of UI/UX judgment, product thinking, and Bubble execution makes him especially valuable for founders building real products. I'd confidently recommend Tife to anyone who values clear thinking and disciplined delivery.",
                author: "Gursimran T.",
                role: "Founder, Recrewer"
            }
        },
        mockups: [
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/115shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Talent Discovery & Matching" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/761shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Job Board" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/551shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Employee Info Popup" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/551shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Job Details & Management" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/541shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", name: "Offer Creation Modal" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/443shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", name: "Interview Scheduling" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/762shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Employer Dashboard" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/246shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Interview Management" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/383shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Interview Rescheduling" }
        ]
    },
    {
        id: "05",
        title: "DemmyPay",
        category: "Design",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/417shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "demmypay",
        liveUrl: "https://demmypay.com/",
        description: "A payments platform that processes airtime and data for Nigerian businesses.",
        challenge: {
            summary: "In the Nigerian airtime and data market, speed and trust are everything. DemmyPay needed to serve two very different audiences — everyday consumers making quick personal purchases and high-volume businesses reselling airtime and data — through a single platform. The challenge was building a product that felt simple and fast for individual users while offering the depth, pricing tools, and reliability that business vendors demanded at scale.",
            points: [
                "Designing a product that worked equally well for individual consumers and business users with fundamentally different needs and expectations.",
                "Building trust at scale in a market where users are cautious about digital payment platforms and sensitive to any transaction failure.",
                "Communicating speed, reliability, and business value clearly within seconds of a user landing on the platform."
            ]
        },
        roles: ["Mobile App Design", "Visual Identity", "UX Research"],
        metrics: [
            { label: "Transaction volume", value: "$1B+" },
            { label: "Audience", value: "B2B + B2C" },
            { label: "Platform", value: "Mobile" },
            { label: "Market", value: "Nigeria" },
        ],
        whatIWorkedOn: [
            "B2B and B2C mobile app UI & UX",
            "Brand Identity refresh (took a part)",
            "Visual identity & design system design",
            "Custom icon pack design",
            "UX Research & wallet-based payment flows"
        ],
        showcaseDescription: "Mobile-first interface designs focused on quick-action payment flows.",
        process: {
            title: "The Solution",
            content: "I adopted a dual-audience, trust-first approach. In Figma, I designed a clean, modular mobile interface that supports both consumer purchase flows and business dashboards without overlap or confusion. Quick-action payment flows were prioritized for the consumer experience, while the business side got wallet management, vendor pricing logic, and transaction reporting tools.\n\nThe visual identity was refreshed to communicate reliability and professionalism — critical for building trust in a market where transaction failures and platform distrust are real concerns. I also designed a custom icon pack and developed the brand's design system to maintain consistency across all touchpoints."
        },
        result: {
            title: "The Outcome",
            content: "DemmyPay became a scalable B2B and B2C fintech platform processing over $1B in airtime and data transactions. The dual-audience approach worked — individual consumers got a fast, intuitive experience for everyday purchases, while businesses gained reliable vendor tools for high-volume operations. The trust-first design strategy paid off in a market where credibility is earned one successful transaction at a time.",
            testimonial: {
                text: "DemmyPay works perfectly for both our personal use and our data business. It's fast, reliable, and easy to manage.",
                author: "Ayomide",
                role: "Product Manager"
            }
        },
        mockups: [
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/417shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Business & Vendor Dashboard" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/424shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "API Documentation" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/646shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Transaction History" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/497shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Beneficiaries management" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/735shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", name: "Export Transactions" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/645shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Settings" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/952shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", name: "Transaction History" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/161shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", name: "Pin Setup" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/258shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", name: "Beneficiaries Selection" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/532shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Share 'n' Sell Data Sharing" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/397shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Bulk Contact Addition" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/261shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Manual Contact Addition" }

        ]
    },

    {
        id: "06",
        title: "BibaFlow",
        category: "Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Bibaflow/ChatGPT+Image+Jun+26%2C+2026%2C+10_53_29+PM.png",
        slug: "bibaflow",
        liveUrl: "https://bibaflow.io",
        description: "Replaced a tangle of spreadsheets, chat apps, and SaaS tools with one operational workspace — built around how the team actually works, with a subscription layer ready to scale into a commercial product.",
        challenge: {
            summary: "Growing teams often end up managing work across spreadsheets, chat applications, and multiple SaaS products that were never designed to work together. Tasks become scattered, project visibility disappears, and tracking time or accountability requires constant manual follow-up. The client wanted a single internal platform that reflected how their team actually worked — rather than forcing them to adapt to generic project management software.",
            points: [
                "Designing a workspace that could serve both company owners and team members without overwhelming either user type.",
                "Creating a flexible project and task management system that could support different workflows while remaining simple enough for everyday use.",
                "Building native time tracking and focus workflows directly into task management instead of relying on external productivity tools.",
                "Creating a permission model that gave owners complete operational visibility while keeping the experience clean for team members.",
                "Architecting the platform to support multiple companies and subscription-based access from day one, so the internal tool could eventually evolve into a commercial SaaS product."
            ]
        },
        roles: ["Bubble Development", "System Architecture", "Backend Workflows", "Stripe Integration", "Database Design"],
        metrics: [
            { label: "Stack", value: "Bubble + Stripe" },
            { label: "Architecture", value: "Multi-company" },
            { label: "Core modules", value: "6" },
            { label: "Scope", value: "Internal → SaaS" },
        ],
        whatIWorkedOn: [
            "Project and task management workflows",
            "Role-based authentication & permissions",
            "Company workspaces & team management",
            "Time tracking & focus sessions",
            "Notification system",
            "Stripe subscription & billing integration",
            "Backend workflow automation",
            "Responsive application development"
        ],
        showcaseDescription: "A centralized operational workspace built around team workflow — from task management and time tracking to team collaboration and subscription billing.",
        process: {
            title: "The Solution",
            content: "Working closely with the client, I mapped the team's existing operational workflow before translating it into a centralized internal platform. Every feature was designed around how the business already operated rather than introducing unnecessary complexity. Projects, tasks, time tracking, team collaboration, notifications, and billing were consolidated into one workspace — giving the business complete visibility across daily operations.\n\nThe platform was built with scalability in mind from the beginning. Multi-company architecture, role-based permissions, and Stripe-powered subscriptions ensure the system can grow beyond an internal operations tool and transition into a fully commercial SaaS product without requiring a complete rebuild."
        },
        result: {
            title: "The Outcome",
            content: "BibaFlow replaced multiple disconnected tools with a single operational workspace that the team now uses to manage projects, collaborate, and track work more efficiently. Leadership gained real-time visibility into projects, workloads, and productivity, while team members benefit from a simpler and more focused workflow.\n\nMore importantly, the business now owns software built around its own processes rather than adapting its processes to fit generic software. With a scalable architecture already in place, the platform is positioned to expand across additional teams and evolve into a subscription-based SaaS product.",
            testimonial: {
                text: "Tife supported us in the development of our task management software by analyzing gaps in the existing system and proposing technically sound solutions to address missing features. He helped translate our real-life workflows into functional system logic. His input improved both usability and system completeness. Overall, working with him was fast and efficient, with clear progress made in each phase of development. Constant communication—through regular check-ins, technical discussions, and feedback loops—was a key factor in delivering a well-implemented and fully functional project.",
                author: "Shehriar",
                role: "Founder, Bibaflow"
            }
        },
        mockups: [
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Bibaflow/ChatGPT+Image+Jun+26%2C+2026%2C+10_53_29+PM.png", name: "App Overview" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Bibaflow/957shots_so.png", name: "Dashboard" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Bibaflow/533shots_so+(1).png", name: "Performance Report Tab" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Bibaflow/798shots_so.png", name: "Event Management / Calendar" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Bibaflow/41shots_so.png", name: "Budget & Resources" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Bibaflow/89shots_so.png", name: "Focus Sessions & Time Tracking" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Bibaflow/562shots_so.png", name: "Task Management" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Bibaflow/578shots_so+(1).png", name: "Project Management Timeline" },
        ]
    },
    {
        id: "07",
        title: "TrailHead",
        category: "Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/Main+image.png",
        slug: "trailhead",
        liveUrl: "#",
        description: "Turns abstract pension numbers into a visual journey that people actually come back to check. Designed and built from scratch in 2 weeks.",
        challenge: {
            summary: "Retirement planning is one of those things everyone knows they should do but few actually enjoy doing. Most people either avoid it entirely or rely on spreadsheets they never update. The core problem wasn't a lack of tools — it was that existing tools made retirement planning feel intimidating, abstract, and unrewarding. TrailHead needed to turn a long-term, low-engagement financial task into something users could understand at a glance and actually want to come back to.",
            points: [
                "Creating a retirement planning experience that felt approachable and motivating rather than intimidating and clinical.",
                "Translating complex financial concepts — projections, benchmarks, compound growth, volatility — into visuals that anyone could understand without financial expertise.",
                "Keeping users engaged over months and years without requiring manual data entry or daily interaction.",
                "Balancing information density with a calm, motivating interface that worked across a wide age range."
            ]
        },
        roles: ["Product Design", "Data Visualization", "Bubble Development"],
        metrics: [
            { label: "Built in", value: "2 weeks" },
            { label: "Platform", value: "Mobile" },
            { label: "Stack", value: "Bubble" },
            { label: "Focus", value: "Data visualization" },
        ],
        whatIWorkedOn: [
            "Retirement projection UI & UX",
            "Data visualization & interactive charts",
            "Design system development",
            "Mobile app development in Bubble",
            "Habit-building user flow design"
        ],
        showcaseDescription: "Interactive charts and retirement projection tools tailored for clarity.",
        process: {
            title: "The Solution",
            content: "I designed the experience around a one-time Trail Setup flow that collects key financial inputs and powers the entire product from that point forward — no recurring data entry required. The dashboard uses a modular system of visual components: progress scores, projection charts, and peer benchmarks that tell a story rather than just display numbers.\n\nThe key design decision was treating retirement savings as a journey, not a spreadsheet. Progress scoring and \"Pace vs Pack\" benchmarks gave users a sense of where they stood relative to their goals and peers, creating the kind of motivational feedback loop that keeps people coming back. A scalable design system was built to support charts, scoring states, and future premium features. The entire app was designed and built in Bubble within 2 weeks."
        },
        result: {
            title: "The Outcome",
            content: "TrailHead turned abstract pension numbers into a visual journey that people actually wanted to check. Users gained immediate clarity on their savings trajectory without needing financial expertise, and the scoring and benchmark systems created ongoing motivation to stay on track. The one-time setup approach removed the biggest barrier to sustained engagement — the friction of manual data entry — making long-term financial planning feel as simple as checking a weather app.",
            testimonial: {
                text: "Tife did a perfect job and I am willing to hire him again when the opportunity comes.",
                author: "Sam C.",
                role: "Client"
            }
        },
        mockups: [
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/742shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Dashboard" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/21shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Dashboard, Checkpoint & Pace with Pack" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/231shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Pace vs Pack" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/149shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Trail Checkpoint" },
            { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/536shots_so.png?q=80&w=1600&auto=format&fit=crop", name: "Settings -> Email Change Process" }
        ]
    },
    {
        id: "08",
        title: "No-Code Alliance",
        category: "Design",
        image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/xezhxyablz4heeqckth5.webp",
        slug: "no-code-alliance",
        liveUrl: "https://nocodealliance.org/",
        liveUrls: [
            { label: "Visit Website", url: "https://nocodealliance.org/", platform: "web" }
        ],
        description: "A global community platform empowering no-code developers, designers, and entrepreneurs with resources, networking, and expert insights.",
        challenge: {
            summary: "No-Code Alliance needed a modern, intuitive, and highly functional UI design for their website. The goal was to create a user-friendly experience that effectively engages the no-code community, provides easy access to educational content, and fosters collaboration. The existing design lacked the visual clarity and structure needed for seamless navigation.",
            points: [
                "The existing platform lacked the visual structure and clarity needed for intuitive user navigation.",
                "Fostering community collaboration and active engagement required a more modern and welcoming user experience.",
                "Providing streamlined, structured access to a vast library of educational content and resources without overwhelming users.",
                "Ensuring full responsiveness and high usability across all screen sizes and device types."
            ]
        },
        roles: ["UI/UX Design", "Visual Identity", "UX Strategy", "Responsive Design"],
        metrics: [
            { label: "Focus", value: "Community & Education" },
            { label: "Scope", value: "UI/UX Design" },
            { label: "Deliverables", value: "Web & Mobile UI" },
            { label: "Format", value: "Responsive Web" }
        ],
        whatIWorkedOn: [
            "Information architecture & user journey mapping",
            "High-fidelity website UI design & layout exploration",
            "Design system creation including typography & color palette",
            "Responsive design optimizations for mobile & tablet viewports"
        ],
        showcaseDescription: "A clean, modern, and highly accessible user interface crafted to foster collaboration and learning within the global no-code community.",
        process: {
            title: "The Solution",
            content: "I focused on designing a clean, well-structured UI that enhances accessibility, usability, and engagement. Using a modern no-code design approach, I crafted intuitive layouts, clear navigation, and visually appealing interfaces that reflect the collaborative and innovative spirit of the no-code movement."
        },
        result: {
            title: "The Outcome",
            content: "The final No-Code Alliance website UI features: Modern, engaging UI design tailored for no-code professionals; Intuitive layout & seamless navigation for a frictionless user experience; Strategic content hierarchy to highlight key resources and community initiatives; Responsive design ensuring accessibility across all devices."
        },
        mockups: [
            { url: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/xezhxyablz4heeqckth5.webp", name: "Landing Page Hero & Core Content Section" },
            { url: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/n0raauxxi1ekjfi7mgyr.webp", name: "Community Directory & Engagement View" },
            { url: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/y6bz45pv4hg7q9d9vjhf.webp", name: "Resource Library & Article Detail Layout" },
            { url: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/ghc8latlech8foswn1dc.webp", name: "Mobile App Screen Mockups & Responsiveness" }
        ]
    }
];
