"use client";

import { use } from "react";
import { PROJECTS } from "@/lib/projects";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles, FileText, Globe, Quote } from "lucide-react";
import Link from "next/link";
import { FancyButton } from "@/components/ui/FancyButton";
import { TopNav } from "@/components/ui/TopNav";
import { AppCard } from "@/components/AppGrid";

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const projectIndex = PROJECTS.findIndex(p => p.slug === slug);
    const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

    return (
        <div className="min-h-screen pb-32 selection:bg-zinc-200 selection:text-zinc-900 dark:selection:bg-zinc-700 dark:selection:text-white bg-white dark:bg-black">
            {/* Header Mirroring Home */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link
                        href="/"
                        className="p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 backdrop-blur-md hover:scale-105 transition-all pointer-events-auto group"
                    >
                        <ArrowLeft className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                    </Link>
                    <div className="pointer-events-auto">
                        <TopNav />
                    </div>
                </div>
            </header>

            {/* Syncing Hero Layout */}
            <section className="pt-32 md:pt-40 pb-12 px-6 md:px-12 max-w-4xl mx-auto flex flex-col gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    {/* Identity Row Mirroring Home */}
                    <div className="flex items-center gap-4">
                        <div className="relative p-[2px] rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                            <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 overflow-hidden border border-white/20 flex items-center justify-center">
                                <span className="text-[14px] font-bold text-zinc-400">{project.id}</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[15px] font-medium text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">{project.category}</h3>
                            <p className="text-[14px] text-zinc-500 dark:text-zinc-400 font-normal leading-tight">Featured Case Study</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-[28px] md:text-[42px] leading-[1.2] font-medium text-zinc-900 dark:text-zinc-100 tracking-tight font-sans">
                            {project.title}
                        </h1>
                        <p className="text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-2xl">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                        <FancyButton icon={ExternalLink} href="#">
                            Live Preview
                        </FancyButton>
                        <FancyButton variant="outline" icon={FileText} href="#technical">
                            Technical Scope
                        </FancyButton>
                    </div>
                </motion.div>
            </section>

            {/* Main Content using Home-style Cards */}
            <main className="px-6 md:px-12 max-w-4xl mx-auto flex flex-col gap-6">

                {/* Visual Reveal (Mirroring Testimonial/Video container) */}
                <div className="rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm p-3">
                    <div className="relative rounded-[18px] bg-zinc-50 dark:bg-[#222222] border border-zinc-200 dark:border-white/5 overflow-hidden aspect-video shadow-inner">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 pointer-events-none rounded-[18px]" />
                    </div>
                </div>

                {/* Narrative Grid: Challenge */}
                <div className="flex flex-col gap-6">
                    <div className="p-6 md:p-10 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
                                <h2 className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">The Challenge</h2>
                            </div>
                            <p className="text-[16px] md:text-[18px] text-zinc-900 dark:text-zinc-100 leading-relaxed font-medium">
                                {project.challenge.summary}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-zinc-100 dark:border-white/5">
                            {project.challenge.points.map((point, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0" />
                                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Role Card */}
                <div className="p-6 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <h2 className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Our Role</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.roles.map(role => (
                            <span key={role} className="px-4 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-white/5 text-[12px] font-medium text-zinc-600 dark:text-zinc-400">
                                {role}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Technical Showcase */}
                {project.mockups && project.mockups.length > 0 && (
                    <div className="flex flex-col gap-6 mt-6">
                        <div className="flex flex-col gap-2 px-2">
                            <h2 className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Design Showcase</h2>
                            <p className="text-[14px] text-zinc-500 dark:text-zinc-400">{project.showcaseDescription}</p>
                        </div>

                        <div className="flex flex-col gap-8">
                            {project.mockups.map((mockup, idx) => (
                                <div key={idx} className="flex flex-col gap-3">
                                    <div className="rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm p-3">
                                        <div className="relative rounded-[18px] bg-zinc-50 dark:bg-[#222222] border border-zinc-200 dark:border-white/5 overflow-hidden aspect-[4/3] shadow-inner">
                                            <img
                                                src={mockup.url}
                                                alt={mockup.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 pointer-events-none rounded-[18px]" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 opacity-40">
                                        <div className="w-1 h-1 rounded-full bg-zinc-400" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest font-mono">{mockup.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* The Process Section */}
                <div className="p-6 md:p-10 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm flex flex-col gap-6 mt-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <h2 className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">{project.process.title}</h2>
                    </div>
                    <p className="text-[15px] md:text-[16px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {project.process.content}
                    </p>
                </div>

                {/* The Result Section */}
                <div className="p-6 md:p-10 rounded-[24px] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex flex-col gap-8 mt-6">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
                            <h2 className="text-[13px] font-medium uppercase tracking-wider opacity-60">{project.result.title}</h2>
                        </div>
                        <p className="text-[18px] md:text-[21px] font-medium leading-relaxed">
                            {project.result.content}
                        </p>
                    </div>

                    {project.result.testimonial && (
                        <div className="pt-8 border-t border-white/10 dark:border-black/10 flex flex-col gap-6">
                            <Quote className="text-orange-400 w-8 h-8 opacity-40" />
                            <p className="text-[20px] md:text-[24px] italic font-medium leading-tight tracking-tight">
                                "{project.result.testimonial.text}"
                            </p>
                            <div className="flex flex-col">
                                <span className="text-[15px] font-bold">{project.result.testimonial.author}</span>
                                <span className="text-[13px] opacity-60 uppercase tracking-widest font-mono">{project.result.testimonial.role}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Next Project (Styled as AppCard) */}
                <div className="mt-12 pt-12 border-t border-zinc-100 dark:border-white/5">
                    <div className="flex flex-col gap-2 px-2 mb-6 text-center">
                        <h2 className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Next Expedition</h2>
                        <p className="text-[14px] text-zinc-500 dark:text-zinc-400">Continue exploring my portfolio.</p>
                    </div>
                    <AppCard
                        title={nextProject.title}
                        description={nextProject.description}
                        image={nextProject.image}
                        href={`/work/${nextProject.slug}`}
                        className="max-w-2xl mx-auto"
                    />
                </div>
            </main>

            {/* Simple Footer Parity */}
            <footer className="mt-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
                <div className="flex flex-col items-center gap-6">
                    <FancyButton href="/#contact" icon={Globe}>
                        Start a Project
                    </FancyButton>
                    <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {['Twitter', 'Dribbble', 'LinkedIn'].map(link => (
                            <span key={link} className="text-[12px] font-bold uppercase tracking-widest">{link}</span>
                        ))}
                    </div>
                    <p className="text-[12px] text-zinc-400 dark:text-zinc-600 mt-8">
                        © {new Date().getFullYear()} Tife Olayinka. Built with Antigravity.
                    </p>
                </div>
            </footer>
        </div>
    );
}
