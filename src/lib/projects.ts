export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    slug: string;
    description: string;
    challenge: {
        summary: string;
        points: string[];
    };
    roles: string[];
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
        description: "HELPING MARTIAL ARTS SCHOOLS GROW & STREAMLINE OPERATIONS USING A CUSTOM MANAGEMENT APP",
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
        title: "Oqool Core HR",
        category: "Design",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/405shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "oqool-core-hr",
        description: "BUILDING A MODERN HR & PAYROLL SYSTEM FOR GROWING COMPANIES",
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
        id: "03",
        title: "Recrewer",
        category: "Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/762shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "recrewer",
        description: "DESIGNING A STRUCTURED, TRUST-DRIVEN HIRING PLATFORM FOR MODERN TEAMS",
        challenge: {
            summary: "Hiring is often chaotic. We built Recrewer to bring structure to the madness.",
            points: ["Chaos", "Trust Signals", "Evaluation Pipelines"]
        },
        roles: ["UX Strategy", "Bubble Development", "System Architecture"],
        showcaseDescription: "High-level overview of the hiring pipeline and candidate scoring systems.",
        process: { title: "Process", content: "Developing the evaluation logic." },
        result: { title: "Result", content: "How Recrewer changed hiring." }
    },
    {
        id: "04",
        title: "DemmyPay",
        category: "Design",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/417shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "demmypay",
        description: "POWERING AIRTIME & DATA PAYMENTS FOR BUSINESSES AND EVERYDAY NIGERIANS",
        challenge: {
            summary: "In the competitive fintech landscape, speed and reliability are everything.",
            points: ["Fintech competition", "Speed", "Frictionless utility payments"]
        },
        roles: ["Mobile App Design", "Visual Identity", "UX Research"],
        showcaseDescription: "Mobile-first interface designs focused on quick-action payment flows.",
        process: { title: "Process", content: "Designing for the Nigerian market." },
        result: { title: "Result", content: "DemmyPay success metrics." }
    },
    {
        id: "05",
        title: "TrailHead",
        category: "Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/Main+image.png",
        slug: "trailhead",
        description: "HELPING PEOPLE VISUALIZE AND STAY ON TRACK WITH THEIR RETIREMENT JOURNEY",
        challenge: {
            summary: "Retirement planning is often intimidating.",
            points: ["Complexity", "Intimidation", "Visualization"]
        },
        roles: ["Product Design", "Data Visualization", "Bubble Development"],
        showcaseDescription: "Interactive charts and retirement projection tools tailored for clarity.",
        process: { title: "Process", content: "Simplifying retirement math." },
        result: { title: "Result", content: "User engagement with TrailHead." }
    }
];
