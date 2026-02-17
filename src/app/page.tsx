"use client";

import { BottomNav } from "@/components/ui/BottomNav";
import { TopNav } from "@/components/ui/TopNav";
import { SocialsMenu } from "@/components/ui/SocialsMenu";
import { FancyButton } from "@/components/ui/FancyButton";
import { AppGrid, AppCard } from "@/components/AppGrid";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble, Sparkles, FileText, Layers, BookOpen, Layout, Box, Smartphone, Globe, Volume2, VolumeX, Plus, Search, PenTool, Code, LineChart, CheckCircle2, Check, Clock, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/lib/projects";
import { fadeInUp, fadeIn, scaleIn, viewportOptions, textReveal } from "@/lib/animations";


const TESTIMONIALS = [
    {
        name: "Chad D.",
        role: "FOUNDER",
        company: "ChiaDigital",
        text: "Working with Tife has been an excellent experience. He contributed to a few projects that demanded quick turnarounds and creative problem-solving. His strong design sense and attention to user experience made him an indispensable asset to our team.",
        avatar: "CD"
    },
    {
        name: "Alex Rivera",
        role: "CEO",
        company: "TechFlow",
        text: "Tife is a rare talent who understands both the aesthetic and functional sides of a product. Our MVP was delivered in record time with zero friction.",
        avatar: "AR"
    },
    {
        name: "Sarah Chen",
        role: "DESIGN LEAD",
        company: "Orbit",
        text: "The attention to detail in Tife's work is exceptional. The Bubble.io implementation was clean, scalable, and beautifully designed beyond expectations.",
        avatar: "SC"
    }
];

const FAQ_DATA = [
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

export default function Home() {
    const [isConnectOpen, setIsConnectOpen] = useState(false);
    const [activeFilter, setFilter] = useState<'All' | 'Design' | 'Dev'>('All');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [videoError, setVideoError] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    const filteredProjects = PROJECTS.filter(p => activeFilter === 'All' || p.category === activeFilter);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Set initial muted state
        video.muted = isMuted;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch((err) => {
                        console.error("Video play failed:", err);
                    });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(video);

        const handleLoadedData = () => {
            setVideoLoading(false);
        };

        const handleError = () => {
            setVideoError(true);
            setVideoLoading(false);
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('error', handleError);

        return () => {
            observer.disconnect();
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('error', handleError);
        };
    }, []);

    // Advanced Cal.com Embed Initialization
    useEffect(() => {
        (function (C: any, A: string, L: string) {
            let p = function (a: any, ar: any) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api: any = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                } p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        const cal = (window as any).Cal;
        if (cal) {
            cal("init", "project-consultation-1", { origin: "https://app.cal.com" });

            cal.ns["project-consultation-1"]("inline", {
                elementOrSelector: "#my-cal-inline-project-consultation-1",
                config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
                calLink: "tifeolayinka/project-consultation-1",
            });

            cal.ns["project-consultation-1"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        }
    }, []);

    // Sync muted state with video element
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

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
                            <p className="text-[14px] text-zinc-500 dark:text-zinc-400 font-normal leading-tight">UI/UX Designer & Bubble Developer</p>
                        </div>
                    </div>

                    {/* Text Group */}
                    <motion.div
                        className="flex flex-col gap-3"
                        variants={textReveal}
                    >
                        <div className="text-[21px] leading-[1.6] font-medium text-zinc-400 dark:text-zinc-500 tracking-tight font-sans">
                            I design and build web applications that work — combining <span className="text-zinc-900 dark:text-zinc-100">clean, conversion-focused UI</span> with <span className="text-zinc-900 dark:text-zinc-100">full-stack Bubble development</span>. From concept to live product, faster than traditional dev.
                        </div>

                        <p className="text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-[500px]">
                            Most designers hand off mockups and hope for the best. I design and build in Bubble — which means I create interfaces that look polished, feel intuitive, and actually work at scale. No handoff gaps. No "can we build this?" conversations. Just shipped products.
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
                    <div className="flex items-center gap-4 mt-6">
                        <div
                            className="relative"
                            onMouseEnter={() => setIsConnectOpen(true)}
                            onMouseLeave={() => setIsConnectOpen(false)}
                        >
                            <FancyButton icon={Sparkles}>
                                Start Your Project
                            </FancyButton>
                            <SocialsMenu isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
                        </div>

                        <FancyButton href="#work" variant="ghost" icon={Layers}>
                            View Work
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

            {/* Testimonial Section */}
            <motion.section
                className="px-6 md:px-12 max-w-4xl mx-auto py-8"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={fadeInUp}
            >
                <div className="p-3 pb-4 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4 px-2 pt-1">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
                            <div className="flex flex-col">
                                <h2 className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100 leading-none">Testimonial</h2>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">Ho T. • Founder</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 tracking-wider">LIVE</span>
                        </div>
                    </div>

                    <div className="relative rounded-[18px] bg-zinc-50 dark:bg-[#222222] border border-zinc-200 dark:border-white/5 overflow-hidden aspect-video group shadow-inner">
                        {videoError ? (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 p-8">
                                <div className="text-center">
                                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400 mb-2">Video unavailable</p>
                                    <p className="text-[12px] text-zinc-400 dark:text-zinc-500">The testimonial video could not be loaded.</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                {videoLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 z-10">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-8 h-8 border-2 border-zinc-300 dark:border-zinc-600 border-t-zinc-900 dark:border-t-zinc-100 rounded-full animate-spin" />
                                            <span className="text-[12px] text-zinc-500 dark:text-zinc-400">Loading video...</span>
                                        </div>
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
                                    onError={() => setVideoError(true)}
                                    onLoadedData={() => setVideoLoading(false)}
                                />
                            </>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 pointer-events-none rounded-[18px]" />
                        {!videoError && (
                            <>
                                <button
                                    onClick={() => {
                                        setIsMuted(!isMuted);
                                        if (videoRef.current) {
                                            videoRef.current.muted = !isMuted;
                                        }
                                    }}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-all duration-200 group/btn z-20"
                                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                                >
                                    {isMuted ? (
                                        <VolumeX className="w-4 h-4 text-white/90 group-hover/btn:text-white" />
                                    ) : (
                                        <Volume2 className="w-4 h-4 text-white/90 group-hover/btn:text-white" />
                                    )}
                                </button>
                                <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/10">
                                        <div className="w-1 h-1 rounded-full bg-white animate-ping" />
                                    </div>
                                    <span className="text-[10px] font-medium text-white/80 tracking-tight">Watching testimonial</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </motion.section>

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

                    <div className={cn(
                        "group relative flex flex-col items-center justify-center text-center gap-4 w-full",
                        "p-8",
                        "rounded-[28px]",
                        "bg-white dark:bg-[#1a1a1a]",
                        "border border-zinc-200 dark:border-white/5",
                        "transition-all duration-500 overflow-hidden shadow-sm",
                        "hover:shadow-xl hover:scale-[1.01]"
                    )}>
                        {/* Dynamic Border Glow (Fancy) */}
                        <div className="absolute inset-[-2px] rounded-[28px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#ff8800,#ff0000,#ff8800)] opacity-20" />
                        </div>

                        {/* Moving Gradient Mesh */}
                        <motion.div
                            animate={{
                                x: [0, 20, 0],
                                y: [0, -20, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-1/2 -left-1/2 w-full h-full bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"
                        />

                        <div className="relative z-10 flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-white/5 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-orange-500/50 transition-all duration-500">
                                <Plus className="text-zinc-400 dark:text-zinc-500 group-hover:text-orange-500 transition-colors" size={24} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100">Your Project Here</span>
                                <span className="text-[12px] text-zinc-500 dark:text-zinc-400 max-w-[180px]">
                                    Reserve this spot for our next big collaboration.
                                </span>
                            </div>
                            <FancyButton href="#contact" className="mt-2 h-10 px-8 rounded-full text-[12px] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-lg group-hover:scale-105 transition-transform">
                                Reserve Spot
                            </FancyButton>
                        </div>

                        {/* Decorative Dash Border (Always visible but subtle) */}
                        <div className="absolute inset-2 rounded-[22px] border border-dashed border-zinc-200 dark:border-white/5 pointer-events-none" />
                    </div>
                </AppGrid>
            </section>

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
                    className="flex flex-col gap-16"
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
                    {/* Service 1: Full-Stack Design + Bubble */}
                    <motion.div
                        className="relative md:sticky md:top-24 rounded-[32px] bg-[#91a08d] dark:bg-[#2d3a2d] p-8 md:p-10 h-auto md:min-h-[500px] shadow-2xl border border-white/10 flex flex-col justify-between overflow-hidden group z-10"
                        variants={scaleIn}
                    >
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium text-[12px] mb-4">
                                    <Sparkles size={14} />
                                    MOST POPULAR
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">Full-Stack Design <br />+ Bubble Development</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h4 className="text-[14px] font-bold text-white/90 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <CheckCircle2 size={16} /> What you get
                                    </h4>
                                    <ul className="space-y-2">
                                        {[
                                            "End-to-end product design (user research, flows, wireframes, high-fidelity UI)",
                                            "Production-ready Bubble development (scalable, responsive, properly architected)",
                                            "One person who owns both design and implementation — no handoff gaps"
                                        ].map((item, i) => (
                                            <li key={i} className="text-[15px] text-white/80 leading-snug flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[14px] font-bold text-white/90 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Sparkles size={16} /> Best For
                                    </h4>
                                    <ul className="space-y-2">
                                        {[
                                            "Founders launching MVPs in Bubble",
                                            "Startups building v1 web applications",
                                            "Businesses automating internal operations",
                                            "Projects that need speed without sacrificing quality"
                                        ].map((item, i) => (
                                            <li key={i} className="text-[15px] text-white/80 leading-snug flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-5 border border-white/10 mb-8">
                                <p className="text-[15px] text-white/90 italic leading-relaxed">
                                    "I design what I can build, and I build what's been designed for real users. No 'can we actually build this?' conversations. No designer-developer miscommunication. Just shipped products."
                                </p>
                            </div>

                            <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2 text-white/90">
                                    <Clock size={16} />
                                    <span className="text-[14px] font-medium">Timeline: 4-8 weeks for most MVPs</span>
                                </div>
                                <FancyButton href="#contact" variant="ghost" className="text-white hover:bg-white/10 border-white/20 w-fit">
                                    Let's Talk <ArrowRight size={16} className="ml-2" />
                                </FancyButton>
                            </div>
                        </div>

                        {/* Background Elements */}
                        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute top-1/2 -right-32 flex flex-col gap-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none rotate-[-12deg]">
                            {/* Decorative blurred blocks */}
                            <div className="w-64 h-32 bg-white rounded-xl" />
                            <div className="w-64 h-32 bg-white rounded-xl ml-12" />
                        </div>
                    </motion.div>

                    {/* Service 2: UI/UX Only */}
                    <motion.div
                        className="relative md:sticky md:top-28 rounded-[32px] bg-[#d9774d] dark:bg-[#4d2d2d] p-8 md:p-10 h-auto md:min-h-[500px] shadow-2xl border border-white/10 flex flex-col justify-between overflow-hidden group z-20"
                        variants={scaleIn}
                    >
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-8">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">UI/UX Design Only</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h4 className="text-[14px] font-bold text-white/90 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <CheckCircle2 size={16} /> What you get
                                    </h4>
                                    <ul className="space-y-2">
                                        {[
                                            "Conversion-focused product design (user flows, wireframes, high-fidelity mockups, prototypes)",
                                            "Design systems and component libraries",
                                            "Developer-ready handoff files (Figma with specs, annotations, style guide)"
                                        ].map((item, i) => (
                                            <li key={i} className="text-[15px] text-white/80 leading-snug flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[14px] font-bold text-white/90 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Sparkles size={16} /> Best For
                                    </h4>
                                    <ul className="space-y-2">
                                        {[
                                            "Teams with in-house or contracted developers (any tech stack)",
                                            "Products being built in custom code, React, Flutter, etc.",
                                            "Companies that need expert UI/UX without development",
                                            "Agencies white-labeling design work"
                                        ].map((item, i) => (
                                            <li key={i} className="text-[15px] text-white/80 leading-snug flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-5 border border-white/10 mb-8">
                                <p className="text-[15px] text-white/90 italic leading-relaxed">
                                    "Even when I'm not building it, I design with implementation in mind. My development background means I design interfaces that are technically feasible, performance-optimized, and developer-friendly."
                                </p>
                            </div>

                            <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2 text-white/90">
                                    <Clock size={16} />
                                    <span className="text-[14px] font-medium">Timeline: 2-4 weeks depending on scope</span>
                                </div>
                                <FancyButton href="#contact" variant="ghost" className="text-white hover:bg-white/10 border-white/20 w-fit">
                                    Let's Talk <ArrowRight size={16} className="ml-2" />
                                </FancyButton>
                            </div>
                        </div>
                        {/* Background Elements */}
                        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
                    </motion.div>

                    {/* Service 3: Bubble Dev Only */}
                    <motion.div
                        className="relative md:sticky md:top-32 rounded-[32px] bg-[#4a6fa5] dark:bg-[#1d2d44] p-8 md:p-10 h-auto md:min-h-[500px] shadow-2xl border border-white/10 flex flex-col justify-between overflow-hidden group z-30"
                        variants={scaleIn}
                    >
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-8">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">Bubble Development Only</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h4 className="text-[14px] font-bold text-white/90 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <CheckCircle2 size={16} /> What you get
                                    </h4>
                                    <ul className="space-y-2">
                                        {[
                                            "Clean, scalable Bubble implementation of existing designs",
                                            "Proper database architecture, workflows, and API integrations",
                                            "Responsive layouts that match your mockups pixel-perfect",
                                            "Performance optimization and Bubble best practices"
                                        ].map((item, i) => (
                                            <li key={i} className="text-[15px] text-white/80 leading-snug flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[14px] font-bold text-white/90 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Sparkles size={16} /> Best For
                                    </h4>
                                    <ul className="space-y-2">
                                        {[
                                            "Projects with finalized designs that need expert Bubble execution",
                                            "Teams whose Bubble developer left mid-project",
                                            "Agencies outsourcing Bubble builds",
                                            "Startups wanting to rebuild/optimize existing Bubble apps"
                                        ].map((item, i) => (
                                            <li key={i} className="text-[15px] text-white/80 leading-snug flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-5 border border-white/10 mb-8">
                                <p className="text-[15px] text-white/90 italic leading-relaxed">
                                    "I build with design integrity in mind. Your final product will match the mockups — no shortcuts, no 'close enough,' no compromises that ruin the UX. I also know when designs need adjustment for Bubble's constraints."
                                </p>
                            </div>

                            <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2 text-white/90">
                                    <Clock size={16} />
                                    <span className="text-[14px] font-medium">Timeline: 3-6 weeks depending on complexity</span>
                                </div>
                                <FancyButton href="#contact" variant="ghost" className="text-white hover:bg-white/10 border-white/20 w-fit">
                                    Let's Talk <ArrowRight size={16} className="ml-2" />
                                </FancyButton>
                            </div>
                        </div>
                        {/* Background Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
                    </motion.div>

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
                        <FancyButton href="https://cal.com/tifeolayinka" target="_blank" className="shrink-0 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 md:w-auto w-full justify-center whitespace-nowrap">
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
                                        "Fully functional web application",
                                        "Documentation for future updates",
                                        "Post-launch support (bug fixes, minor tweaks)"
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

            {/* Toolkit Section */}
            <section id="toolkit" className="px-6 md:px-12 max-w-4xl mx-auto py-16">
                <div className="mb-8">
                    <h2 className="text-[17px] font-semibold mb-1 text-zinc-900 dark:text-zinc-100">Toolkit & Ecosystem</h2>
                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400">The tools and side quests that fuel my process.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-3 pb-4 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-4 px-2 pt-1">
                            <Sparkles size={14} className="text-zinc-400" />
                            <span className="text-[13px] font-medium text-zinc-600 dark:text-zinc-300">Fun Projects</span>
                        </div>
                        <div className="flex flex-col rounded-[18px] bg-zinc-50 dark:bg-[#222222] border border-zinc-200 dark:border-white/5 overflow-hidden">
                            {[
                                { title: "Smart Media Renderer", type: "Bubble Plugin", icon: <Layout size={16} className="text-blue-500" />, href: "https://bubble.io/plugin/smart-media-renderer-1688636514755x145344316825403400" },
                                { title: "Password Validator", type: "Bubble Plugin", icon: <Box size={16} className="text-purple-500" />, href: "https://bubble.io/plugin/password-validator-by-tife-1688636514755x145344316825403400" },
                                { title: "Image Comparison", type: "Bubble Plugin", icon: <Layers size={16} className="text-orange-500" />, href: "https://bubble.io/plugin/image-comparison-slider-1688636514755x145344316825403400" },
                                { title: "Satisfaction Slider", type: "Bubble Plugin", icon: <Sparkles size={16} className="text-yellow-500" />, href: "https://bubble.io/plugin/satisfaction-slider-1688636514755x145344316825403400" },
                                { title: "Jobby", type: "Bubble Template", icon: <Globe size={16} className="text-blue-400" />, href: "https://bubble.io/template/jobby---job-board--management-1718023450912x771649232938369000" },
                            ].map((item, i, arr) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    target="_blank"
                                    className={cn("flex items-center gap-3 p-3 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors group", i !== arr.length - 1 && "border-b border-zinc-200 dark:border-white/5")}
                                >
                                    <div className="w-8 h-8 rounded-[4px] bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-white/5 flex items-center justify-center shadow-sm overflow-hidden">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{item.title}</span>
                                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400">{item.type}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="p-3 pb-4 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-4 px-2 pt-1">
                            <Layers size={14} className="text-zinc-400" />
                            <span className="text-[13px] font-medium text-zinc-600 dark:text-zinc-300">Stack</span>
                        </div>
                        <div className="flex flex-col rounded-[18px] bg-zinc-50 dark:bg-[#222222] border border-zinc-200 dark:border-white/5 overflow-hidden">
                            {[
                                { title: "Figma", level: "Design", icon: "https://framerusercontent.com/images/KNDBQgO9SSkq40okizEwxHnaWX0.png?scale-down-to=512&width=924&height=922" },
                                { title: "Bubble.io", level: "Nocode Development", icon: "https://cdn.worldvectorlogo.com/logos/bubble-1.svg" },
                                { title: "Antigravity", level: "AI Agentic Coding", icon: "https://framerusercontent.com/images/1O8iDfBqd2TjluDNoqfCeUsjpk0.png?width=400&height=400" },
                                { title: "Cursor", level: "AI Coding", icon: "https://framerusercontent.com/images/vvLhMVjzhvu2UZjYsSxFTAfLfI.jpg?width=225&height=225" },
                                { title: "After Effects", level: "Animation", icon: "https://framerusercontent.com/images/mdQQ9G6bOn4VoU4G9T2Zm601p24.png?width=400&height=400" },
                            ].map((item, i, arr) => (
                                <div key={item.title} className={cn("flex items-center gap-3 p-3 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors group cursor-default", i !== arr.length - 1 && "border-b border-zinc-200 dark:border-white/5")}>
                                    <div className="w-8 h-8 rounded-[4px] bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-white/5 flex items-center justify-center shadow-sm overflow-hidden p-1.5">
                                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-200">{item.title}</span>
                                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400">{item.level}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

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
                                    <Sparkles size={18} />
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
            <section id="testimonials" className="px-6 md:px-12 max-w-4xl mx-auto py-16">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <h2 className="text-[17px] font-semibold mb-1 text-zinc-900 dark:text-zinc-100">Founders Who Scaled</h2>
                        <p className="text-[14px] text-zinc-500 dark:text-zinc-400">Kind words from partners and clients I've built with.</p>
                    </div>
                    {/* Navigation Arrows (Minimal) */}
                    <div className="flex gap-2 mb-1">
                        <button
                            onClick={prevTestimonial}
                            className="w-8 h-8 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-8 h-8 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-9-6" /></svg>
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <div className="p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm backdrop-blur-sm relative overflow-hidden group">
                                <blockquote className="relative z-10">
                                    <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal mb-8">
                                        "{TESTIMONIALS[currentTestimonial].text}"
                                    </p>

                                    <div className="flex items-center justify-between pt-8 border-t border-zinc-100 dark:border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-[11px] font-bold text-zinc-400 dark:text-zinc-500 shadow-inner">
                                                {TESTIMONIALS[currentTestimonial].avatar}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[14px] font-medium text-zinc-900 dark:text-zinc-100 leading-tight">{TESTIMONIALS[currentTestimonial].name}</span>
                                                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-normal mt-1">{TESTIMONIALS[currentTestimonial].role} at {TESTIMONIALS[currentTestimonial].company}</span>
                                            </div>
                                        </div>

                                        {/* Progress Indicator (Minimal) */}
                                        <div className="flex gap-1">
                                            {TESTIMONIALS.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={cn(
                                                        "h-1 rounded-full transition-all duration-300",
                                                        currentTestimonial === idx ? "bg-zinc-900 dark:bg-zinc-100 w-4" : "bg-zinc-200 dark:bg-zinc-800 w-1"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-6 md:px-12 max-w-4xl mx-auto pt-16 pb-8">
                <div className="mb-12">
                    <h2 className="text-[24px] md:text-[32px] font-bold mb-2 text-zinc-900 dark:text-zinc-100 tracking-tight">Ready to Build?</h2>
                    <p className="text-[16px] text-zinc-500 dark:text-zinc-400">Whether you need design, development, or both — let's talk about your project.</p>

                    <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[12px] font-medium text-zinc-600 dark:text-zinc-400">Currently available for projects starting March 2026</span>
                    </div>
                </div>

                <div className="mb-0 min-h-[700px]">
                    <div
                        id="my-cal-inline-project-consultation-1"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    />
                </div>
            </section>

            {/* Redesigned Footer Section */}
            <footer className="px-6 md:px-12 max-w-4xl mx-auto pt-12 pb-12">
                {/* Large Serif Heading */}
                <div className="mb-24 text-center md:text-left">
                    <h2 className="text-[42px] md:text-[72px] leading-[1.1] font-playfair tracking-tight text-zinc-900 dark:text-zinc-100">
                        Designing with precision, <br />
                        <span className="italic">building with purpose.</span>
                    </h2>
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
                            <li><a href="mailto:hello@tife.dev" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Email</a></li>
                            <li><a href="https://cal.com/tifeolayinka" target="_blank" className="text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Schedule Call</a></li>
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
