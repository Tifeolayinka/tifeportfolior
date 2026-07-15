"use client";

import { BottomNav } from "@/components/ui/BottomNav";
import { TopNav } from "@/components/ui/TopNav";
import { SocialsMenu } from "@/components/ui/SocialsMenu";
import { FancyButton } from "@/components/ui/FancyButton";
import { AppGrid, AppCard } from "@/components/AppGrid";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Github, Linkedin, Twitter, Dribbble, Calendar, FileText, Layers, BookOpen, Layout, Box, Smartphone, Globe, Volume2, VolumeX, Plus, Search, PenTool, Code, LineChart, CheckCircle2, Check, Clock, ArrowRight, HelpCircle } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/lib/projects";
import { fadeInUp, fadeIn, scaleIn, viewportOptions, textReveal } from "@/lib/animations";
import { FallingWords } from "@/components/FallingWords";

const SERVICE_CARDS = [
    {
        title: <>Product Consulting <br />& Build</>,
        popular: true,
        features: [
            "End-to-end product design (user research, flows, wireframes, high-fidelity UI)",
            "Production-ready Bubble development (scalable, responsive, properly architected)",
            "One person who owns both design and implementation — no handoff gaps"
        ],
        bestFor: [
            "Founders launching MVPs in Bubble",
            "Startups building v1 web applications",
            "Businesses automating internal operations",
            "Projects that need speed without sacrificing quality"
        ],
        quote: "End-to-end engagement — from understanding the problem to shipping the product. I assess your needs, recommend the right approach, and execute it. Could be Bubble, could be Next.js and Supabase, could be a hybrid. You get one person who thinks and builds.",
        timeline: "4-8 weeks for most MVPs",
        bgClass: "bg-[#91a08d]",
        darkBgClass: "dark:bg-[#2d3a2d]"
    },
    {
        title: "UI/UX Design Only",
        features: [
            "Conversion-focused product design (user flows, wireframes, high-fidelity mockups, prototypes)",
            "Design systems and component libraries",
            "Developer-ready handoff files (Figma with specs, annotations, style guide)"
        ],
        bestFor: [
            "Teams with in-house or contracted developers (any tech stack)",
            "Products being built in custom code, React, Flutter, etc.",
            "Companies that need expert UI/UX without development",
            "Agencies white-labeling design work"
        ],
        quote: "Even when I'm not building it, I design with implementation in mind. My development background means I design interfaces that are technically feasible, performance-optimized, and developer-friendly.",
        timeline: "2-4 weeks depending on scope",
        bgClass: "bg-[#d9774d]",
        darkBgClass: "dark:bg-[#4d2d2d]"
    },
    {
        title: "Development Only",
        features: [
            "Clean, scalable Bubble implementation of existing designs",
            "Proper database architecture, workflows, and API integrations",
            "Responsive layouts that match your mockups pixel-perfect",
            "Performance optimization and Bubble best practices"
        ],
        bestFor: [
            "Projects with finalized designs that need expert Bubble execution",
            "Teams whose Bubble developer left mid-project",
            "Agencies outsourcing Bubble builds",
            "Startups wanting to rebuild/optimize existing Bubble apps"
        ],
        quote: "You have designs, I'll build them. Bubble, custom code, or both. Clean architecture, proper workflows, no shortcuts.",
        timeline: "3-6 weeks depending on complexity",
        bgClass: "bg-[#4a6fa5]",
        darkBgClass: "dark:bg-[#1d2d44]"
    }
];

const TESTIMONIALS = [
    {
        name: "Shehriar",
        role: "Founder",
        company: "Bibaflow",
        text: "Tife supported us in the development of our task management software by analyzing gaps in the existing system and proposing technically sound solutions to address missing features. He helped translate our real-life workflows into functional system logic. His input improved both usability and system completeness. Overall, working with him was fast and efficient, with clear progress made in each phase of development. Constant communication—through regular check-ins, technical discussions, and feedback loops—was a key factor in delivering a well-implemented and fully functional project.",
        avatar: "SH"
    },
    {
        name: "Gursimran T.",
        role: "Founder",
        company: "Recrewer",
        text: "Tife brings clarity before code. He focuses on user flow, priorities, and build-ready design before opening Bubble, which saves time and avoids rework. His blend of UI/UX judgment, product thinking, and Bubble execution makes him especially valuable for founders building real products. I’d confidently recommend Tife to anyone who values clear thinking and disciplined delivery.",
        avatar: "GT"
    },
    {
        name: "Ho T.",
        role: "Founder",
        company: "Westres",
        text: "Tife was a responsible and efficient developer. It was our first Bubble project and he patiently helped us through the whole process from development to deployment to ensure we rolled out our application successfully. He was knowledgeable and skillful in Bubble development and OpenAI integration. His communication skills were good and was always able to come back with useful information and help with our understanding of how everything works. We have no hesitation in recommending him.",
        avatar: "HT"
    },
    {
        name: "Nick Apps",
        role: "Product Manager",
        company: "",
        text: "Tife has a great eye for design, works quickly and easy to work alongside. He built a marketplace and custom CMS for us in Bubble. I look forward to working with him again.",
        avatar: "NA"
    },
];

const FAQ_DATA = [
    {
        question: "Do you have a preferred technology stack?",
        answer: "No — and that's intentional. Bubble is the right call for fast MVPs, internal tools, and marketplaces. Custom code (Next.js, Supabase, React) is right when you need AI integrations, complex logic, or a specific infrastructure. I make that recommendation during Discovery, based on your budget, timeline, and product requirements. You're never getting a solution shaped around my preferences."
    },
    {
        question: "Do I need to choose between design-only or design+development?",
        answer: "No. We start with discovery and I'll recommend the best approach based on your needs, timeline, and budget. Many clients start with design-only and move to development once we've validated the direction."
    },
    {
        question: "How long does a typical project take?",
        answer: "Design-only: 2-4 weeks | Design + Development (MVP): 4-8 weeks | Complex platforms: 8-12+ weeks. We'll scope this during discovery."
    },
    {
        question: "What if I already have designs?",
        answer: "I can build from existing designs, but I'll review them first to flag anything difficult or expensive to implement in Bubble. This saves headaches later."
    },
    {
        question: "Do you only work on Bubble projects?",
        answer: "No. I offer:\n- Design + Development → Bubble-only (full-stack delivery)\n- Design-Only → Any platform (web, mobile, custom code)\n- Development-Only → Bubble-only (implementing existing designs)"
    },
    {
        question: "Can you help with existing projects?",
        answer: "Absolutely. Whether you need a UI overhaul, new features in Bubble, or scaling your digital strategy, I can jump in and add value to your current ecosystem."
    },
    {
        question: "How do you handle project communication?",
        answer: "I use Slack for daily async updates and Loom for walkthroughs. We'll also have weekly milestone syncs to ensure we're perfectly aligned on the vision."
    },
    {
        question: "What happens after launch?",
        answer: "I offer post-launch support packages (bug fixes, updates, optimization) and ongoing retainer work for feature additions and iterations."
    }
];

const HERO_VISUALS = [
    {
        title: "Dojohub CRM",
        category: "Management App UI & Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Dojohub/543shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "dojohub-crm"
    },
    {
        title: "DemmyPay",
        category: "Mobile Payments Design",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/417shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "demmypay"
    },
    {
        title: "KudoPage",
        category: "Reviews Platform UI & Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/242_2x_shots_so.png",
        slug: "kudopage"
    },
    {
        title: "Oqool Core HR",
        category: "Enterprise HR Portal Design",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/405shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "oqool-core-hr"
    },
    {
        title: "TrailHead App",
        category: "Retirement Planner UX & Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/742shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "trailhead"
    },
    {
        title: "Recrewer",
        category: "Hiring Platform UX & Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/115shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "recrewer"
    },
    {
        title: "BibaFlow",
        category: "Operational Workspace Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Bibaflow/957shots_so.png",
        slug: "bibaflow"
    },
    {
        title: "No-Code Alliance",
        category: "Community Platform UI",
        image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/xezhxyablz4heeqckth5.webp",
        slug: "no-code-alliance"
    }
];

const HERO_VISUALS_ROW2 = [
    {
        title: "Recrewer",
        category: "Hiring Platform UX & Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/762shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "recrewer"
    },
    {
        title: "Dojohub CRM",
        category: "Management App UI & Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Dojohub/714shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "dojohub-crm"
    },
    {
        title: "KudoPage",
        category: "Reviews Platform UI & Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/kudopage/587_2x_shots_so.png",
        slug: "kudopage"
    },
    {
        title: "TrailHead App",
        category: "Retirement Planner UX & Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/231shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "trailhead"
    },
    {
        title: "DemmyPay",
        category: "Mobile Payments Design",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/645shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "demmypay"
    },
    {
        title: "Oqool Core HR",
        category: "Enterprise HR Portal Design",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Hr/591shots_so.png?q=80&w=1600&auto=format&fit=crop",
        slug: "oqool-core-hr"
    },
    {
        title: "BibaFlow",
        category: "Operational Workspace Dev",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Bibaflow/562shots_so.png",
        slug: "bibaflow"
    },
    {
        title: "No-Code Alliance",
        category: "Community Platform UI",
        image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/n0raauxxi1ekjfi7mgyr.webp",
        slug: "no-code-alliance"
    }
];

export default function HomeClient() {
    const [activeFilter, setFilter] = useState<'All' | 'Design' | 'Dev'>('All');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [videoError, setVideoError] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const filteredProjects = PROJECTS.filter(p => activeFilter === 'All' || p.category.includes(activeFilter));
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    const { scrollYProgress: scroll2 } = useScroll({ target: card2Ref, offset: ['start end', 'start start'] });
    const { scrollYProgress: scroll3 } = useScroll({ target: card3Ref, offset: ['start end', 'start start'] });

    const scale1 = useTransform(scroll2, [0, 1], [1, 0.9]);
    const scale2 = useTransform(scroll3, [0, 1], [1, 0.9]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = isMuted;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) { video.play().catch(() => {}); }
                else { video.pause(); }
            },
            { threshold: 0.5 }
        );
        observer.observe(video);
        video.addEventListener('loadeddata', () => setVideoLoading(false));
        video.addEventListener('error', () => { setVideoError(true); setVideoLoading(false); });
        return () => { observer.disconnect(); };
    }, []);

    useEffect(() => {
        if (videoRef.current) videoRef.current.muted = isMuted;
    }, [isMuted]);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "free-app-consultation-business" });
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        })();
    }, []);


    return (
        <div id="hero" className="min-h-screen pb-32 selection:bg-zinc-200 selection:text-zinc-900 dark:selection:bg-zinc-700 dark:selection:text-white">
            <BottomNav />

            {/* Unified Header & Hero Wrapper */}
            <div className="pt-10 md:pt-20 pb-12 px-6 md:px-12 max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between items-start relative gap-8 md:gap-0">

                {/* Left Side: Hero Group */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6 max-w-[500px]"
                >
                    {/* Identity Row */}
                    <div className="flex items-center gap-4">
                        <div className="relative group p-[2px] rounded-full overflow-hidden">
                            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#ff0000,#ff8800,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)] animate-[spin_4s_linear_infinite] opacity-60 blur-[2px]" />
                            <div className="relative w-12 h-12 rounded-full bg-white dark:bg-zinc-900 overflow-hidden border border-white/20">
                                <img
                                    src="https://piton-digital.s3.eu-north-1.amazonaws.com/Portfolio+Image.JPG"
                                    alt="Tife Olayinka"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[15px] font-medium text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">Tife Olayinka</h3>
                            <p className="text-[14px] text-zinc-500 dark:text-zinc-400 font-normal leading-tight">Product Designer & Engineer</p>
                        </div>
                    </div>

                    {/* Text Group */}
                    <motion.div
                        className="flex flex-col gap-3"
                        variants={textReveal}
                    >
                        <div className="text-[21px] leading-[1.6] font-medium text-zinc-900 dark:text-zinc-100 tracking-tight font-sans font-normal">
                            I help founders <span className="font-semibold font-sans">ship products that work,</span> in weeks, not quarters.
                        </div>

                        <p className="text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-[500px]">
                            Strategy, design, and development from one person who stays through launch. Bubble, custom code, or AI-assisted, chosen for your product, not my convenience. 10+ products shipped for clients across the UK, US, Canada, UAE, Australia, and Nigeria.
                        </p>
                    </motion.div>

                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-2 mt-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[14px] font-medium text-zinc-600 dark:text-zinc-400">Available for projects</span>
                    </div>

                    {/* Actions Row */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-6">
                        <FancyButton href="https://cal.com/tifeolayinka/free-app-consultation-business?layout=mobile" target="_blank" icon={Calendar}>
                            Book a free 30-min discovery call
                        </FancyButton>

                        <FancyButton href="#work" variant="ghost" icon={Layers}>
                            See the work
                        </FancyButton>
                    </div>
                </motion.div>

                {/* Right Side: Top Controls */}
                <div className="hidden md:block">
                    <TopNav />
                </div>

                <div className="md:hidden absolute top-8 right-6">
                    <TopNav />
                </div>
            </div>

            {/* Scrollable Visuals Gallery (Above the fold visual showcase - infinite marquee) */}
            <div className="w-full overflow-hidden py-4 select-none mb-12 relative z-10">
                <style>{`
                    .scrollbar-none::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-none {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    @keyframes marquee-reverse {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }
                    .animate-marquee {
                        display: flex;
                        width: max-content;
                        animation: marquee 35s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                    .animate-marquee-reverse {
                        display: flex;
                        width: max-content;
                        animation: marquee-reverse 40s linear infinite;
                    }
                    .animate-marquee-reverse:hover {
                        animation-play-state: paused;
                    }
                `}</style>
                <div className="max-w-4xl mx-auto px-6 md:px-12 mb-6">
                    <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Selected Works Showcase</span>
                </div>
                
                {/* Infinite scrolling marquee wrapper */}
                <div className="flex overflow-hidden scrollbar-none snap-x snap-mandatory">
                    <div className="flex animate-marquee">
                        {/* First replica */}
                        <div className="flex gap-6 shrink-0 pr-6">
                            {HERO_VISUALS.map((visual, idx) => (
                                <Link 
                                    key={`marquee-1-${idx}`}
                                    href={`/work/${visual.slug}`}
                                    className="snap-start shrink-0 relative group w-[280px] md:w-[420px] aspect-[4/3] rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm p-3 transition-all duration-500 hover:scale-[1.01] hover:shadow-lg"
                                >
                                    <div className="relative w-full h-full rounded-[18px] bg-zinc-50 dark:bg-[#222222] border border-zinc-200 dark:border-white/5 overflow-hidden shadow-inner">
                                        <img
                                            src={visual.image}
                                            alt={visual.title}
                                            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        
                                        {/* Text overlay visible on hover */}
                                        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[13px] font-bold text-white uppercase tracking-wider">{visual.title}</span>
                                                <span className="text-[11px] text-zinc-300">{visual.category}</span>
                                            </div>
                                            <span className="text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                                View Case <ArrowRight size={12} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/* Second replica for seamless infinite loop */}
                        <div className="flex gap-6 shrink-0 pr-6" aria-hidden="true">
                            {HERO_VISUALS.map((visual, idx) => (
                                <Link 
                                    key={`marquee-2-${idx}`}
                                    href={`/work/${visual.slug}`}
                                    className="snap-start shrink-0 relative group w-[280px] md:w-[420px] aspect-[4/3] rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm p-3 transition-all duration-500 hover:scale-[1.01] hover:shadow-lg"
                                >
                                    <div className="relative w-full h-full rounded-[18px] bg-zinc-50 dark:bg-[#222222] border border-zinc-200 dark:border-white/5 overflow-hidden shadow-inner">
                                        <img
                                            src={visual.image}
                                            alt={visual.title}
                                            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        
                                        {/* Text overlay visible on hover */}
                                        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[13px] font-bold text-white uppercase tracking-wider">{visual.title}</span>
                                                <span className="text-[11px] text-zinc-300">{visual.category}</span>
                                            </div>
                                            <span className="text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                                View Case <ArrowRight size={12} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Reverse scrolling marquee row */}
                <div className="flex overflow-hidden scrollbar-none mt-4">
                    <div className="flex animate-marquee-reverse">
                        {/* First replica */}
                        <div className="flex gap-6 shrink-0 pr-6">
                            {HERO_VISUALS_ROW2.map((visual, idx) => (
                                <Link
                                    key={`marquee-r2-1-${idx}`}
                                    href={`/work/${visual.slug}`}
                                    className="snap-start shrink-0 relative group w-[280px] md:w-[420px] aspect-[4/3] rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm p-3 transition-all duration-500 hover:scale-[1.01] hover:shadow-lg"
                                >
                                    <div className="relative w-full h-full rounded-[18px] bg-zinc-50 dark:bg-[#222222] border border-zinc-200 dark:border-white/5 overflow-hidden shadow-inner">
                                        <img
                                            src={visual.image}
                                            alt={visual.title}
                                            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[13px] font-bold text-white uppercase tracking-wider">{visual.title}</span>
                                                <span className="text-[11px] text-zinc-300">{visual.category}</span>
                                            </div>
                                            <span className="text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                                View Case <ArrowRight size={12} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/* Second replica for seamless infinite loop */}
                        <div className="flex gap-6 shrink-0 pr-6" aria-hidden="true">
                            {HERO_VISUALS_ROW2.map((visual, idx) => (
                                <Link
                                    key={`marquee-r2-2-${idx}`}
                                    href={`/work/${visual.slug}`}
                                    className="snap-start shrink-0 relative group w-[280px] md:w-[420px] aspect-[4/3] rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm p-3 transition-all duration-500 hover:scale-[1.01] hover:shadow-lg"
                                >
                                    <div className="relative w-full h-full rounded-[18px] bg-zinc-50 dark:bg-[#222222] border border-zinc-200 dark:border-white/5 overflow-hidden shadow-inner">
                                        <img
                                            src={visual.image}
                                            alt={visual.title}
                                            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[13px] font-bold text-white uppercase tracking-wider">{visual.title}</span>
                                                <span className="text-[11px] text-zinc-300">{visual.category}</span>
                                            </div>
                                            <span className="text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                                View Case <ArrowRight size={12} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Proof Bar */}
            <div className="w-full border-y border-zinc-200 dark:border-white/5 bg-white dark:bg-[#111111] py-3 px-6 md:px-12 overflow-x-auto scrollbar-none">
                <div className="flex items-center justify-center gap-0 max-w-4xl mx-auto flex-wrap md:flex-nowrap">
                    {[
                        "6+ years experience",
                        "10+ web & mobile apps shipped",
                        "Clients in UK, US, Canada, UAE, Australia & Nigeria",
                    ].map((item, i, arr) => (
                        <div key={i} className="flex items-center gap-0 shrink-0">
                            <span className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap px-4 py-0.5">
                                {item}
                            </span>
                            {i < arr.length - 1 && (
                                <span className="text-zinc-300 dark:text-zinc-700 select-none">·</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonial video section — unmounted, re-add when video is properly hosted */}

            {/* Work Section */}
            <section id="work" className="px-6 md:px-12 max-w-4xl mx-auto py-16">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-[17px] font-semibold mb-1 text-zinc-900 dark:text-zinc-100">Projects</h2>
                        <p className="text-[14px] text-zinc-500 dark:text-zinc-400">A selection of recent design & dev work.</p>
                    </div>

                    <div className="flex p-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5">
                        {['All', 'Design', 'Dev'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setFilter(filter as any)}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200",
                                    activeFilter === filter
                                        ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm ring-1 ring-zinc-200 dark:ring-white/10"
                                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <AppGrid className="grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project, idx) => (
                        <AppCard
                            key={idx}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            href={`/work/${project.slug}`}
                        />
                    ))}

                    <div id="teardown" className={cn(
                        "group relative flex flex-col justify-between gap-6 w-full",
                        "p-8",
                        "rounded-[28px]",
                        "bg-white dark:bg-[#1a1a1a]",
                        "border border-zinc-200 dark:border-white/5",
                        "transition-all duration-500 overflow-hidden shadow-sm",
                        "hover:shadow-xl hover:scale-[1.01]"
                    )}>
                        {/* Moving Gradient Mesh */}
                        <motion.div
                            animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-1/2 -right-1/2 w-full h-full bg-zinc-500/5 dark:bg-zinc-500/10 rounded-full blur-[80px] pointer-events-none"
                        />

                        <div className="relative z-10 flex flex-col gap-4">
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/5 flex items-center justify-center">
                                <Search className="text-zinc-500 dark:text-zinc-400" size={18} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                                    Not ready for a project?<br />Get a free teardown.
                                </span>
                                <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    Send me your app or landing page and I'll record a 10-minute video audit — what's costing you users, and what I'd fix first. No call, no pitch.
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <a
                                href="mailto:hello@tifeolayinka.com?subject=Free%20teardown%20request"
                                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors group/link"
                            >
                                Get a free teardown
                                <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                        </div>

                        <div className="absolute inset-2 rounded-[22px] border border-dashed border-zinc-200 dark:border-white/5 pointer-events-none" />
                    </div>
                </AppGrid>
            </section>

            {/* Experience Section — hidden for now */}
            {false && <motion.section
                className="px-6 md:px-12 max-w-4xl mx-auto py-16"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={fadeInUp}
            >
                <div className="mb-10">
                    <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Experience</span>
                </div>
                <div className="flex flex-col">
                    {[
                        { role: "Senior Product Engineer", company: "Shipfast.agency", period: "2024 – Present" },
                        { role: "Freelance Product Engineer", company: "Independent", period: "2024 – Present" },
                        { role: "Senior UI/UX Designer", company: "Concise Software Solutions", period: "2022 – 2024" },
                        { role: "UX/UI Designer", company: "Momentumgroup.tech", period: "2021 – 2022" },
                        { role: "User Experience Designer", company: "Studiare", period: "2021" },
                        { role: "UI/UX Designer", company: "Ajuda Benefits", period: "2021" },
                        { role: "User Interface Designer", company: "Objective Deck", period: "2021" },
                    ].map((item, i) => (
                        <div key={i} className="group">
                            <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_1fr_auto] items-center py-5 gap-x-4">
                                <span className="text-[15px] md:text-[17px] font-normal text-zinc-800 dark:text-zinc-100 leading-snug">
                                    {item.role}
                                </span>
                                <span className="hidden md:block text-[15px] md:text-[17px] font-normal text-zinc-500 dark:text-zinc-400">
                                    {item.company}
                                </span>
                                <span className="text-[13px] md:text-[15px] font-normal text-zinc-400 dark:text-zinc-500 tabular-nums text-right whitespace-nowrap">
                                    {item.period}
                                </span>
                                <span className="md:hidden text-[12px] text-zinc-400 dark:text-zinc-500 mt-0.5 col-span-2">
                                    {item.company}
                                </span>
                            </div>
                            <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
                        </div>
                    ))}
                </div>
            </motion.section>}

            {/* About Section */}
            <motion.section
                id="about"
                className="px-6 md:px-12 max-w-4xl mx-auto py-20"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={fadeInUp}
            >
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_1fr] gap-10 md:gap-12 items-start">
                    {/* Left: display heading */}
                    <h2 className="font-serif text-[32px] md:text-[38px] leading-[1.15] font-normal text-zinc-900 dark:text-zinc-100 tracking-tight">
                        Designer who builds.<br className="hidden md:block" /> Engineer who designs.
                    </h2>

                    {/* Middle column */}
                    <div className="flex flex-col gap-6 font-mono text-[13px] leading-[1.85] text-zinc-600 dark:text-zinc-400">
                        <p>
                            I design and build products end-to-end — from blank canvas to something users actually open. Strategy, wireframes, high-fidelity UI, and the code to bring it to life. In that order, without switching hands.
                        </p>
                        <p>
                            10+ products shipped for founders across the UK, US, Canada, UAE, Australia, and Nigeria. Some were MVPs built in weeks. Some were complex platforms rebuilt from scratch. All of them required someone who could think in product logic and execute in real tools.
                        </p>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-6 font-mono text-[13px] leading-[1.85] text-zinc-600 dark:text-zinc-400">
                        <p>
                            The stack follows the problem — Bubble for speed, Next.js and Supabase when you need to own the infrastructure, AI-assisted builds when timeline is the constraint. The decision is always yours to understand, never mine to hide.
                        </p>
                        <p>
                            One person from brief to launch means no handoff gaps, no lost context, no account manager standing between you and the work.
                        </p>
                        {/* Signature */}
                        <div className="mt-4 flex justify-end">
                            <svg viewBox="0 0 180 48" className="w-36 opacity-40 dark:opacity-30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 36 C20 20, 35 12, 50 24 C65 36, 72 16, 88 18 C104 20, 110 34, 126 28 C142 22, 155 14, 172 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 42 C30 38, 60 44, 90 40 C120 36, 150 42, 168 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5"/>
                                <path d="M4 32 C18 28, 40 30, 55 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Services Section (Stacked) */}
            <motion.section
                id="services"
                className="px-6 md:px-12 max-w-4xl mx-auto py-16 relative"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={fadeIn}
            >
                <motion.div className="mb-12" variants={fadeInUp}>
                    <h2 className="text-[17px] font-semibold mb-1 text-zinc-900 dark:text-zinc-100">Three Ways to Work Together</h2>
                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400">I offer flexible engagement models depending on where you are in your product journey.</p>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-16 relative"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    {SERVICE_CARDS.map((card, i) => {
                        const targetScale = i === 0 ? scale1 : i === 1 ? scale2 : undefined;
                        const ref = i === 0 ? card1Ref : i === 1 ? card2Ref : card3Ref;
                        return (
                            <ServiceCard
                                key={i}
                                {...card}
                                index={i}
                                ref={ref}
                                scale={isDesktop ? targetScale : undefined}
                                style={isDesktop ? { top: `calc(6rem + ${i * 1}rem)` } : undefined}
                            />
                        );
                    })}

                    {/* Not Sure Which Path Fits? */}
                    <motion.div
                        className="rounded-[24px] bg-zinc-50 dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative z-40"
                        variants={fadeInUp}
                    >
                        <div className="flex flex-col gap-2 max-w-lg">
                            <h3 className="text-[18px] font-semibold text-zinc-900 dark:text-zinc-100 flex items-center justify-center md:justify-start gap-2">
                                <HelpCircle className="text-orange-500" size={20} /> Not Sure Which Path Fits?
                            </h3>
                            <p className="text-[15px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                Book a free 30-minute discovery call and I'll help you figure out the best approach based on your budget, timeline, existing assets, technical requirements, and business goals.
                            </p>
                        </div>
                        <FancyButton href="https://cal.com/tifeolayinka/free-app-consultation-business?layout=mobile" target="_blank" className="shrink-0 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 md:w-auto w-full justify-center whitespace-nowrap">
                            Schedule Discovery Call
                        </FancyButton>
                    </motion.div>

                </motion.div>
            </motion.section>

            {/* Process Section: How Does This Work */}
            <motion.section
                id="process"
                className="px-6 md:px-12 max-w-4xl mx-auto py-16"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={fadeIn}
            >
                <motion.div className="mb-12" variants={fadeInUp}>
                    <h2 className="text-[17px] font-semibold mb-1 text-zinc-900 dark:text-zinc-100">How Does This Work</h2>
                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400">Steps required to get started.</p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.1
                            }
                        }
                    }}
                >
                    {/* Step 1 */}
                    <motion.div
                        className="flex flex-col gap-6 p-8 rounded-[24px] bg-zinc-50 dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 group hover:shadow-md transition-all duration-500"
                        variants={fadeInUp}
                    >
                        <div className="flex items-start justify-between">
                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-white/5 flex items-center justify-center shadow-sm">
                                <Search className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />
                            </div>
                            <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-2">STEP 01</span>
                        </div>

                        <div>
                            <h3 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">Discovery & Strategy</h3>
                            <span className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Week 1</span>
                        </div>

                        <div className="flex flex-col gap-6 mt-2">
                            <div className="flex flex-col gap-3">
                                <h4 className="text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">What happens</h4>
                                <ul className="flex flex-col gap-2">
                                    {[
                                        "Technology recommendation — I tell you what to build on and why, before we start",
                                        "Discuss business goals, target users, and technical requirements",
                                        "Audit existing flows, competitors, or internal tools",
                                        "Deliver project brief outlining scope, timeline, and approach"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">What you get</h4>
                                <ul className="flex flex-col gap-2">
                                    {[
                                        "Clear understanding of what we're building and why",
                                        "Transparent pricing and milestones",
                                        "Aligned expectations before work starts"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-400/50 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        className="flex flex-col gap-6 p-8 rounded-[24px] bg-zinc-50 dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 group hover:shadow-md transition-all duration-500"
                        variants={fadeInUp}
                    >
                        <div className="flex items-start justify-between">
                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-white/5 flex items-center justify-center shadow-sm">
                                <PenTool className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />
                            </div>
                            <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-2">STEP 02</span>
                        </div>

                        <div>
                            <h3 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">Design & Validation</h3>
                            <span className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Week 2-3</span>
                        </div>

                        <div className="flex flex-col gap-6 mt-2">
                            <div className="flex flex-col gap-3">
                                <h4 className="text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">What happens</h4>
                                <ul className="flex flex-col gap-2">
                                    {[
                                        "User flows and wireframes first (logic before pixels)",
                                        "High-fidelity UI design focused on usability and conversion",
                                        "Review sessions to iterate and refine before development"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">What you get</h4>
                                <ul className="flex flex-col gap-2">
                                    {[
                                        "Clickable prototypes or annotated mockups",
                                        "Design system / component library",
                                        "Sign-off before I write a single line of code"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-400/50 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        className="flex flex-col gap-6 p-8 rounded-[24px] bg-zinc-50 dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 group hover:shadow-md transition-all duration-500"
                        variants={fadeInUp}
                    >
                        <div className="flex items-start justify-between">
                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-white/5 flex items-center justify-center shadow-sm">
                                <Code className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />
                            </div>
                            <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-2">STEP 03</span>
                        </div>

                        <div>
                            <h3 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">Development & Launch</h3>
                            <span className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Week 3-6+</span>
                        </div>

                        <div className="flex flex-col gap-6 mt-2">
                            <div className="flex flex-col gap-3">
                                <h4 className="text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">What happens</h4>
                                <ul className="flex flex-col gap-2">
                                    {[
                                        "Build in Bubble with clean database structure and workflows",
                                        "Implement responsive design, edge cases, and performance",
                                        "Testing, revisions, and deployment to live environment"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">What you get</h4>
                                <ul className="flex flex-col gap-2">
                                    {[
                                        "A fully functional web or mobile application",
                                        "API integrations and custom workflows configured",
                                        "Handover session and post-launch support details"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-400/50 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 4 */}
                    <motion.div
                        className="flex flex-col gap-6 p-8 rounded-[24px] bg-zinc-50 dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 group hover:shadow-md transition-all duration-500"
                        variants={fadeInUp}
                    >
                        <div className="flex items-start justify-between">
                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-white/5 flex items-center justify-center shadow-sm">
                                <LineChart className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />
                            </div>
                            <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-2">STEP 04</span>
                        </div>

                        <div>
                            <h3 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">Iteration & Growth</h3>
                            <span className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Ongoing</span>
                        </div>

                        <div className="flex flex-col gap-6 mt-2">
                            <div className="flex flex-col gap-3">
                                <h4 className="text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">What happens</h4>
                                <ul className="flex flex-col gap-2">
                                    {[
                                        "Monitor user behavior and gather feedback",
                                        "Identify friction points or feature gaps",
                                        "Prioritize improvements based on business impact"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">What you get</h4>
                                <ul className="flex flex-col gap-2">
                                    {[
                                        "A partner who stays engaged beyond launch",
                                        "Data-informed design decisions",
                                        "Continuous product refinement"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-400/50 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>



            {/* Toolkit Decision Framework */}
            <motion.section
                className="px-6 md:px-12 max-w-4xl mx-auto py-16"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={fadeInUp}
            >
                <div className="mb-8">
                    <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Stack</span>
                    <h2 className="text-[17px] font-semibold mt-2 text-zinc-900 dark:text-zinc-100">How I decide what to build with</h2>
                </div>
                <div className="flex flex-col divide-y divide-zinc-100 dark:divide-white/5 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm overflow-hidden">
                    {[
                        { tool: "Bubble", when: "When speed to market matters more than infrastructure control. Most MVPs." },
                        { tool: "Next.js + Supabase", when: "When you need custom logic, scale, or own your stack from day one." },
                        { tool: "AI-assisted (Cursor, Claude Code)", when: "To compress build timelines on custom work without cutting corners." },
                        { tool: "Hybrid", when: "When the right answer is Bubble for the app and custom code for the heavy lifting." },
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-1 md:gap-6 px-8 py-5">
                            <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100">{row.tool}</span>
                            <span className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">{row.when}</span>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* FAQ Section */}
            <section id="faq" className="px-6 md:px-12 max-w-4xl mx-auto py-16">
                <div className="mb-12">
                    <h2 className="text-[17px] font-semibold mb-1 text-zinc-900 dark:text-zinc-100">Common Questions</h2>
                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400">Everything you need to know about working with me.</p>
                </div>

                <div className="flex flex-col gap-4">
                    {FAQ_DATA.map((faq, idx) => (
                        <div
                            key={idx}
                            className="rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-[15px] font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openFaqIndex === idx ? 45 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="text-zinc-400"
                                >
                                    <Plus size={18} />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openFaqIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 pt-2">
                                            <p className="text-[14px] leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-2xl">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section: Founders Who Scaled */}
            <section id="testimonials" className="py-16 w-full overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 md:px-12 mb-8">
                    <h2 className="text-[17px] font-semibold mb-1 text-zinc-900 dark:text-zinc-100">Founders Who Scaled</h2>
                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400">Kind words from partners and clients I've built with.</p>
                </div>

                {/* Video testimonial */}
                <div className="max-w-4xl mx-auto px-6 md:px-12 mb-10">
                    <div className="p-3 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm">
                        <div className="flex items-center justify-between mb-3 px-2 pt-1">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
                                <div className="flex flex-col">
                                    <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100 leading-none">Video Testimonial</span>
                                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Ho T. · Founder, Westres</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 tracking-wider">LIVE</span>
                            </div>
                        </div>
                        <div className="relative rounded-[18px] bg-zinc-50 dark:bg-[#222222] border border-zinc-200 dark:border-white/5 overflow-hidden aspect-video group shadow-inner">
                            {videoError ? (
                                <div className="w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50">
                                    <p className="text-[13px] text-zinc-400 dark:text-zinc-500">Video unavailable</p>
                                </div>
                            ) : (
                                <>
                                    {videoLoading && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 z-10">
                                            <div className="w-8 h-8 border-2 border-zinc-300 dark:border-zinc-600 border-t-zinc-900 dark:border-t-zinc-100 rounded-full animate-spin" />
                                        </div>
                                    )}
                                    <video
                                        ref={videoRef}
                                        src="https://www.dropbox.com/scl/fi/yw0qecltes8m24g35xlnu/VIDEO-FOR-TIFE.mp4?rlkey=dnxoimcvgvjo93kss7bi69fnj&raw=1"
                                        className="w-full h-full object-cover"
                                        muted={isMuted}
                                        loop
                                        playsInline
                                        preload="metadata"
                                    />
                                    <button
                                        onClick={() => setIsMuted(!isMuted)}
                                        className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-all duration-200 z-20"
                                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                                    >
                                        {isMuted
                                            ? <VolumeX className="w-4 h-4 text-white/90" />
                                            : <Volume2 className="w-4 h-4 text-white/90" />
                                        }
                                    </button>
                                </>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 pointer-events-none rounded-[18px]" />
                        </div>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden py-4">
                    {/* Left and Right Edge Fade Gradients for Premium Transition */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-50 via-zinc-50/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-50 via-zinc-50/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent z-10 pointer-events-none" />

                    <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max select-none">
                        {/* Render first iteration */}
                        {TESTIMONIALS.map((t, idx) => (
                            <div key={`t1-${idx}`} className="w-[320px] md:w-[380px] p-6 md:p-8 rounded-[24px] bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-white/5 shadow-sm backdrop-blur-md flex flex-col justify-between shrink-0 hover:border-zinc-300 dark:hover:border-white/10 hover:bg-white/80 dark:hover:bg-zinc-900/80 transition-all duration-300">
                                <blockquote className="flex flex-col justify-between h-full">
                                    <p className="text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal line-clamp-6 mb-6">
                                        "{t.text}"
                                    </p>
                                    <div className="flex items-center gap-3 pt-6 border-t border-zinc-100 dark:border-white/5">
                                        <div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-[11px] font-bold text-zinc-400 dark:text-zinc-500 shadow-inner shrink-0">
                                            {t.avatar}
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 leading-tight truncate">{t.name}</span>
                                            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-normal mt-0.5 truncate">
                                                {t.role}{t.company ? ` at ${t.company}` : ''}
                                            </span>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        ))}
                        {/* Duplicate for infinite loop */}
                        {TESTIMONIALS.map((t, idx) => (
                            <div key={`t2-${idx}`} className="w-[320px] md:w-[380px] p-6 md:p-8 rounded-[24px] bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-white/5 shadow-sm backdrop-blur-md flex flex-col justify-between shrink-0 hover:border-zinc-300 dark:hover:border-white/10 hover:bg-white/80 dark:hover:bg-zinc-900/80 transition-all duration-300">
                                <blockquote className="flex flex-col justify-between h-full">
                                    <p className="text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal line-clamp-6 mb-6">
                                        "{t.text}"
                                    </p>
                                    <div className="flex items-center gap-3 pt-6 border-t border-zinc-100 dark:border-white/5">
                                        <div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-[11px] font-bold text-zinc-400 dark:text-zinc-500 shadow-inner shrink-0">
                                            {t.avatar}
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 leading-tight truncate">{t.name}</span>
                                            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-normal mt-0.5 truncate">
                                                {t.role}{t.company ? ` at ${t.company}` : ''}
                                            </span>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-6 md:px-12 max-w-4xl mx-auto pt-16 pb-28 md:pb-8">
                <div className="mb-12">
                    <h2 className="text-[24px] md:text-[32px] font-bold mb-2 text-zinc-900 dark:text-zinc-100 tracking-tight">Ready to Build?</h2>
                    <p className="text-[16px] text-zinc-500 dark:text-zinc-400">Whether you need design, development, or both — let's talk about your project.</p>

                    <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[12px] font-medium text-zinc-600 dark:text-zinc-400">Currently available for new consulting engagements</span>
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                        <FancyButton href="https://cal.com/tifeolayinka/free-app-consultation-business?layout=mobile" target="_blank" icon={Calendar}>
                            Book a free 30-min discovery call
                        </FancyButton>
                        <a href="#teardown" className="text-[14px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors underline underline-offset-4">
                            Or get a free teardown first
                        </a>
                    </div>
                </div>

                <div className="mb-0 min-h-[700px]">
                    <Cal
                        namespace="free-app-consultation-business"
                        calLink="tifeolayinka/free-app-consultation-business"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
                    />
                </div>
            </section>

            {/* Redesigned Footer Section */}
            <footer className="px-6 md:px-12 max-w-4xl mx-auto pt-12 pb-36 md:pb-12">
                {/* Interactive Falling Word Blocks */}
                <div className="mb-24 rounded-[24px] bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-white/5 overflow-hidden">
                    <FallingWords />
                </div>

                {/* Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-t border-zinc-200 dark:border-white/5 pt-12">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[12px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Navigation</h4>
                        <ul className="flex flex-col gap-2">
                            <li><a href="#hero" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Home</a></li>
                            <li><a href="#work" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Work</a></li>
                            <li><a href="#services" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Services</a></li>
                            <li><a href="#process" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Process</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[12px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Connect</h4>
                        <ul className="flex flex-col gap-2">
                            <li><a href="mailto:hello@tifeolayinka.com" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Email</a></li>
                            <li><a href="https://cal.com/tifeolayinka/free-app-consultation-business?layout=mobile" target="_blank" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Schedule Call</a></li>
                            <li><a href="#contact" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Book Consultation</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[12px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Socials</h4>
                        <ul className="flex flex-col gap-2">
                            <li><a href="https://twitter.com/tife_olayinka" target="_blank" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="https://github.com/tifeolayinka" target="_blank" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Github</a></li>
                            <li><a href="https://linkedin.com/in/olayinka-boluwatife-" target="_blank" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="https://dribbble.com/tifeolayinka" target="_blank" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Dribbble</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[12px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Legal</h4>
                        <ul className="flex flex-col gap-2">
                            <li><span className="text-[14px] text-zinc-600 dark:text-zinc-400">Privacy Policy</span></li>
                            <li><span className="text-[14px] text-zinc-600 dark:text-zinc-400">Terms of Service</span></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-zinc-200 dark:border-white/5">
                    <p className="text-[13px] text-zinc-500 dark:text-zinc-400">
                        © {new Date().getFullYear()} Tife Olayinka. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-[13px] text-zinc-500 dark:text-zinc-400">Built in Lagos, shipping worldwide</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
