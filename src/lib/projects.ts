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
            summary: "DojoHub was built to help martial arts schools streamline operations and scale with ease. From belt tracking to recurring payments, it provides everything a modern dojo needs — with a beautiful admin dashboard for staff and a convenient mobile app for students and parents. Whether it's signing up for a membership, booking a class, or tracking belt progress, DojoHub combines the flexibility of no-code development with a deep understanding of martial arts school workflows.",
            points: [
                "Dojo owners were spending excessive time managing class schedules, attendance, and belt/rank progress manually.",
                "Students missed classes or payments because of lack of reminders or clear dashboards.",
                "It's difficult to manage recurring subscriptions, track failed payments, or see which students are eligible for belt promotions.",
                "Onboarding new students or dojos was slow because of fragmented tools and lack of consistency."
            ]
        },
        roles: ["Product Design", "Visual Identity", "UX Strategy", "Bubble Development"],
        whatIWorkedOn: [
            "Product (web & mobile app) UI & UX",
            "Relational database & system architecture",
            "Class scheduling & belt tracking workflows",
            "Stripe subscription & payment integrations",
            "Client onboarding flow optimization"
        ],
        showcaseDescription: "Iterating on layout and logic to achieve high-fidelity results for school owners.",
        process: {
            title: "The Process",
            content: "I worked directly with the client—a professional jiu-jitsu practitioner & product manager who brought firsthand knowledge of how martial arts schools operate day-to-day. Their insights shaped everything from student enrollment flows to belt grading logic and class scheduling patterns. To build with even more empathy, I also started going to the gym myself to better understand the routines and mindset of students, parents, and instructors. Everything was built in Bubble, both the admin dashboard and the student-facing mobile app. I created relational data models for programs, classes, belts, and memberships, and integrated Stripe to manage subscriptions, cancellations, and failed payments through webhook events."
        },
        result: {
            title: "The Result",
            content: "DojoHub dramatically simplified operations for martial arts schools, replacing scattered tools with one seamless platform. By automating class schedules, belt tracking, and recurring payments, I helped instructors reclaim hours of admin work each week. New dojos were able to fully onboard — including student setup, membership plans, and classes — in a fraction of the time it used to take.",
            /*testimonial: {
                text: "This saved us. We were drowning in spreadsheets. Now I can grade students, collect payments, and track everything from one place.",
                author: "Alonso R.",
                role: "Founder"
            }*/
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
            summary: "Freelancers rely on testimonials to win clients, but existing tools make collecting reviews a chore. Standard platforms lock reviews inside their ecosystems, and raw email or DM screenshots lack credibility. I wanted to build a simple, friction-free home base for freelancers to gather and showcase verified testimonials.",
            points: [
                "Testimonials are locked inside single platforms with no way to export.",
                "High friction for clients—most review flows require account registration.",
                "Screenshots of DMs look unprofessional and lack credibility.",
                "No single link to consolidate reviews from different sources.",
                "No simple widget to show live reviews on a personal website."
            ]
        },
        roles: [
            "Product Design",
            "UX Strategy",
            "Full-Stack Development (Next.js + Convex)",
            "Chrome Extension Development"
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
            title: "The Process",
            content: "I mapped the testimonial lifecycle to design a zero-friction experience for both freelancers and clients. To keep completion rates high, the client review form requires no login or account setup. I also built a Chrome Extension that lets freelancers instantly import reviews they've already earned on Upwork, Fiverr, and LinkedIn. For showcasing, I designed custom public profiles and a lightweight JavaScript widget (~10kb) that loads reviews natively onto any portfolio site without the styling and speed limitations of iframes."
        },
        result: {
            title: "The Result",
            content: "KudoPage is a turnkey review collection tool designed specifically for freelancers. Users can set up their profile and start requesting reviews in under 5 minutes. By eliminating client login walls, the platform achieves high completion rates. The Chrome Extension and embeddable widgets allow freelancers to consolidate their scattered reputation and display it beautifully on their own sites.",
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
            summary: "Oqool Core HR is a comprehensive HR and payroll platform designed to help companies manage employees, attendance, approvals, and payroll with clarity and control. I designed and built a flexible internal system that supports company-wide defaults, employee-specific rules, and multi-level approval workflows — all while staying compliant with UAE labour practices.",
            points: [
                "Designing a flexible approval workflow system that adapts to different company structures without overcomplication.",
                "Handling employee-specific working hours alongside company-wide defaults without breaking payroll logic.",
                "Separating company owners (CEO) from employees while still supporting executive approvals.",
                "Ensuring payroll accuracy with attendance rules, late penalties, paid public holidays, and exportable reports."
            ]
        },
        roles: ["Product Design", "Design Systems", "Bubble Development"],
        whatIWorkedOn: [
            "Core HR & payroll dashboard UI & UX",
            "Design system & component library development",
            "Multi-level sequential approval logic",
            "Work schedule & attendance tracking engine",
            "UAE labour compliance system architecture"
        ],
        showcaseDescription: "Visual exploration of the employee lifecycle and payroll automation flows.",
        process: {
            title: "The Process",
            content: "I approached Oqool Core HR with a systems-first mindset. Starting with Figma, I mapped complex HR processes into simple, understandable interfaces. In Bubble, I implemented scalable data models for employees, work schedules, approvals, and payroll. Special attention was given to approval logic — introducing sequential approval flows, line-manager and department-based routing, and a toggle-based CEO approval mechanism. The result is a stable, predictable system that mirrors real-world HR operations."
        },
        result: {
            title: "The Result",
            content: "A production-ready HR and payroll system that empowers companies to manage employees, approvals, and payroll with confidence. Oqool Core HR delivers flexible approval workflows, accurate payroll calculations, UAE public holiday handling, and export-ready reports — all built as a scalable no-code solution."
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
            summary: "Recrewer is a hiring and talent management platform built to help companies discover, interview, hire, and manage contractors in a structured and compliant way. The platform removes the chaos from freelance hiring by centralising discovery, communication, offers, contracts, onboarding, and payments — all while maintaining trust, transparency, and control for both employers and contractors.",
            points: [
                "Designing multiple user roles (Contractors, Employers, Admins) with clearly separated permissions and responsibilities.",
                "Balancing a no-job-board hiring model while still enabling effective talent discovery and matching.",
                "Creating an offer and contract flow that feels flexible yet legally structured.",
                "Ensuring trust through verification, background checks, and controlled communication.",
                "Reducing hiring friction without oversimplifying complex real-world workflows."
            ]
        },
        roles: ["UX Strategy", "Bubble Development", "System Architecture"],
        whatIWorkedOn: [
            "User journey mapping & wireframing",
            "Contractor & employer dashboard UI & UX",
            "Flexible contract & offer creation workflows",
            "Role-based access control & permissions",
            "Interview scheduling & notification system"
        ],
        showcaseDescription: "High-level overview of the hiring pipeline and candidate scoring systems.",
        process: {
            title: "The Process",
            content: "We approached Recrewer with a design-phase-first mindset. Through collaborative call sessions with the founder, we unpacked the full hiring lifecycle — from talent discovery to post-hire management. Using Figma, we mapped detailed user journeys across Employers and Contractors, breaking down interviews, offers, hiring decisions, onboarding, and contracts into clear, modular steps. Special focus was placed on system clarity: job-centric hiring, offer tracking, role-based dashboards, and trust signals like verification and availability. Every design decision was tested against one question — does this reduce uncertainty for the user?"
        },
        result: {
            title: "The Result",
            content: "Recrewer transformed the fragmented freelance hiring market into a unified, trust-based ecosystem. By replacing scattered tools with a centralized dashboard for discovery, contracts, and payments, the platform significantly reduced hiring friction and legal uncertainty. Employers gained a structured way to manage talent, while contractors secured a transparent, professional environment for their work—turning chaos into a compliant, streamlined workflow."
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
            summary: "DemmyPay is a Nigerian B2B and B2C fintech platform that enables fast, secure, and reliable airtime and data transactions. The product serves everyday consumers as well as businesses and high-volume vendors through wallet-based payments, instant fulfillment, and reseller pricing. To date, DemmyPay has processed over $1B in transaction volume across consumer and business use cases.",
            points: [
                "Designing a product that works equally well for individual consumers and business users with very different needs.",
                "Building trust at scale in a market where users are cautious about digital payment platforms.",
                "Clearly communicating speed, reliability, and business value within seconds of landing on the site."
            ]
        },
        roles: ["Mobile App Design", "Visual Identity", "UX Research"],
        whatIWorkedOn: [
            "B2B and B2C mobile app UI & UX",
            "Brand Identity refresh (took a part)",
            "Visual identity & design system design",
            "Custom icon pack design",
            "UX Research & wallet-based payment flows"
        ],
        showcaseDescription: "Mobile-first interface designs focused on quick-action payment flows.",
        process: {
            title: "The Process",
            content: "I adopted a dual-audience, trust-first approach. In Figma, I designed a clean, modular interface that supports both consumer purchase flows and business dashboards without overlap or confusion. Using Bubble, I implemented wallet systems, transaction flows, vendor pricing logic, and business dashboards while maintaining high performance under large transaction volumes."
        },
        result: {
            title: "The Result",
            content: "A scalable B2B and B2C fintech platform that powers billions in airtime and data transactions, supports businesses with reliable vendor tools, and delivers a fast, trustworthy experience for everyday Nigerian consumers.",
            testimonial: {
                text: "DemmyPay works perfectly for both our personal use and our data business. It’s fast, reliable, and easy to manage.",
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
        title: "TrailHead",
        category: "Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/Main+image.png",
        slug: "trailhead",
        liveUrl: "#",
        description: "Turns abstract pension numbers into a visual journey that people actually come back to check. Designed and built from scratch in 2 weeks.",
        challenge: {
            summary: "TrailHead is a mobile retirement planning app designed to help users understand, visualize, and stay motivated on their long-term savings journey. Instead of relying on spreadsheets or manual tracking, TrailHead uses a one-time onboarding setup to generate personalized projections, progress scoring, and benchmark comparisons. The product focuses on clarity, habit-building, and behavioral motivation for everyday users planning for retirement.",
            points: [
                "Designing a retirement planning experience that feels approachable rather than intimidating.",
                "Translating complex financial concepts like projections, benchmarks, and volatility into simple visuals.",
                "Keeping users engaged over time without requiring manual data entry or daily input.",
                "Balancing data density with a calm, motivating interface suitable for a wide age range."
            ]
        },
        roles: ["Product Design", "Data Visualization", "Bubble Development"],
        whatIWorkedOn: [
            "Retirement projection UI & UX",
            "Data visualization & interactive charts",
            "Design system development",
            "Mobile app development in Bubble",
            "Habit-building user flow design"
        ],
        showcaseDescription: "Interactive charts and retirement projection tools tailored for clarity.",
        process: {
            title: "The Process",
            content: "I started by mapping the full user journey, from first launch to long-term usage. The product was designed around a one-time Trail Setup flow that collects key inputs and powers the entire experience. From there, I designed a modular dashboard system that surfaces projections, progress scores, and peer benchmarks through visual storytelling. A scalable design system was created to support charts, scoring states, and future premium features, ensuring consistency across the app."
        },
        result: {
            title: "The Result",
            content: "TrailHead delivers a clean, scalable retirement planning experience that replaces spreadsheets with intuitive visuals. Users gain immediate clarity on their savings trajectory, ongoing motivation through scoring and benchmarks, and confidence in their long-term financial decisions without needing advanced financial knowledge.",
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
    }
];
