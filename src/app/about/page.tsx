"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { TopNav } from "@/components/ui/TopNav";
import { FancyButton } from "@/components/ui/FancyButton";
import { fadeInUp, fadeIn, scaleIn, viewportOptions } from "@/lib/animations";

export default function AboutPage() {
    return (
        <div className="min-h-screen pb-32 selection:bg-zinc-200 selection:text-zinc-900 dark:selection:bg-zinc-700 dark:selection:text-white bg-white dark:bg-black">
            {/* Header */}
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

            {/* Hero Section */}
            <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex flex-col gap-6"
                >
                    {/* Profile Image Card */}
                    <div className="rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm p-3 overflow-hidden">
                        <div className="relative rounded-[18px] overflow-hidden aspect-square bg-zinc-100 dark:bg-zinc-800">
                            <img
                                src="https://piton-digital.s3.eu-north-1.amazonaws.com/Portfolio+Image.JPG"
                                alt="Tife Olayinka"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h1 className="text-[32px] md:text-[42px] font-medium text-white tracking-tight leading-tight mb-2">
                                    Tife Olayinka
                                </h1>
                                <p className="text-[16px] text-white/90 mb-4">
                                    Product Designer & Bubble Developer
                                </p>
                                <div className="flex items-center gap-4 text-[14px] text-white/80">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} />
                                        <span>Lagos, Nigeria</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <span>Available for projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Intro Card */}
                    <div className="p-6 md:p-8 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm space-y-6">
                        <p className="text-[16px] md:text-[18px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                            I'm Tife, a UI/UX designer and Bubble developer who helps founders and businesses ship faster without compromising quality.
                        </p>

                        <div className="text-[16px] md:text-[18px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                            <p className="font-medium text-zinc-900 dark:text-zinc-200 mb-3">I offer three ways to work together:</p>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-400 mt-1">•</span>
                                    <span><span className="font-medium text-zinc-900 dark:text-zinc-200">Full-stack (Design + Bubble Development)</span> — for projects that need both, delivered by one person with no handoff friction</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-400 mt-1">•</span>
                                    <span><span className="font-medium text-zinc-900 dark:text-zinc-200">Design-only</span> — for teams with their own developers or non-Bubble platforms</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-400 mt-1">•</span>
                                    <span><span className="font-medium text-zinc-900 dark:text-zinc-200">Development-only</span> — for projects with existing designs that need expert Bubble implementation</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-[16px] md:text-[18px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                            My development background makes me a better designer (I design what's actually feasible). My design background makes me a better developer (I build with UX integrity). Whether you need one or both, you get someone who understands the full picture.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Main Content */}
            <main className="px-6 md:px-12 max-w-4xl mx-auto flex flex-col gap-16">

                {/* What I Do Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeIn}
                >
                    <motion.div className="mb-8" variants={fadeInUp}>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                            <h2 className="text-[17px] font-semibold text-zinc-900 dark:text-zinc-100">What I Do</h2>
                        </div>
                        <p className="text-[14px] text-zinc-500 dark:text-zinc-400">Services I offer to help bring your vision to life.</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.1
                                }
                            }
                        }}
                    >
                        {/* Service 1: Design */}
                        <motion.div
                            className="p-6 rounded-[24px] bg-[#91a08d]/10 dark:bg-[#2d3a2d]/20 border border-[#91a08d]/20 dark:border-[#2d3a2d]/40"
                            variants={scaleIn}
                        >
                            <h3 className="text-[18px] font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                                Mobile and Web Application Designs
                            </h3>
                            <p className="text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                I design end-to-end product experiences for web and mobile applications, with a focus on clarity, structure, and real-world usability.
                            </p>
                        </motion.div>

                        {/* Service 2: Development */}
                        <motion.div
                            className="p-6 rounded-[24px] bg-[#d9774d]/10 dark:bg-[#4d2d2d]/20 border border-[#d9774d]/20 dark:border-[#4d2d2d]/40"
                            variants={scaleIn}
                        >
                            <h3 className="text-[18px] font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                                Scalable Nocode Development
                            </h3>
                            <p className="text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Building complex, production-ready MVPs and internal tools using Bubble.io. Fast to market, without technical debt.
                            </p>
                        </motion.div>

                        {/* Service 3: Strategy */}
                        <motion.div
                            className="p-6 rounded-[24px] bg-[#4a6fa5]/10 dark:bg-[#1d2d44]/20 border border-[#4a6fa5]/20 dark:border-[#1d2d44]/40"
                            variants={scaleIn}
                        >
                            <h3 className="text-[18px] font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                                Operational Digital Strategy
                            </h3>
                            <p className="text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Applying MBA-level Procurement & Supply Chain principles to create optimized digital ecosystems that drive business efficiency.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Experience Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeIn}
                >
                    <motion.div className="mb-8" variants={fadeInUp}>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                            <h2 className="text-[17px] font-semibold text-zinc-900 dark:text-zinc-100">Experience</h2>
                        </div>
                        <p className="text-[14px] text-zinc-500 dark:text-zinc-400">Professional journey and key achievements.</p>
                    </motion.div>

                    <motion.div
                        className="relative flex flex-col gap-4"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.1
                                }
                            }
                        }}
                    >
                        {/* Timeline Line */}
                        <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-orange-500 via-orange-300 to-orange-100 dark:from-orange-500 dark:via-orange-700 dark:to-orange-900 hidden md:block" />

                        {/* Shipfast.agency */}
                        <motion.div
                            className="p-6 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm relative"
                            variants={scaleIn}
                        >
                            <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-orange-500 border-4 border-white dark:border-[#1a1a1a] hidden md:block" />
                            <div className="md:pl-8">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h3 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                                            Senior Product Engineer
                                        </h3>
                                        <p className="text-[14px] text-zinc-600 dark:text-zinc-400 mb-2">Shipfast.agency • Contract • Remote (Australia)</p>
                                        <div className="flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-500">
                                            <Calendar size={14} />
                                            <span>Dec 2024 - Present</span>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50">
                                        <span className="text-[11px] font-medium text-green-700 dark:text-green-400 uppercase tracking-wider">Current</span>
                                    </div>
                                </div>
                                <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    Converting briefs to beautiful and functional designs in Figma, and developing with Bubble.io using my design and nocode development skills.
                                </p>
                            </div>
                        </motion.div>

                        {/* Concise Software Solutions */}
                        <motion.div
                            className="p-6 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm relative"
                            variants={scaleIn}
                        >
                            <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-orange-400 border-4 border-white dark:border-[#1a1a1a] hidden md:block" />
                            <div className="md:pl-8">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h3 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                                            Senior UI/UX Designer
                                        </h3>
                                        <p className="text-[14px] text-zinc-600 dark:text-zinc-400 mb-2">Concise Software Solutions • Full-time • Remote (Charlotte, NC)</p>
                                        <div className="flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-500">
                                            <Calendar size={14} />
                                            <span>Oct 2022 - Jan 2024 • 1 yr 4 mos</span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Provided leadership to mid-level, junior designers, and interns, overseeing their work and ensuring successful project outcomes</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Served as primary point of contact with clients, managing relationships and facilitating communication throughout project lifecycle</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Collaborated with CEO to develop company vision and roadmap, using design and product management expertise</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Executed end-to-end design processes for diverse projects, from user research to prototyping and visual design</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Momentumgroup.tech */}
                        <motion.div
                            className="p-6 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm relative"
                            variants={scaleIn}
                        >
                            <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-orange-300 border-4 border-white dark:border-[#1a1a1a] hidden md:block" />
                            <div className="md:pl-8">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h3 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                                            UX/UI Designer
                                        </h3>
                                        <p className="text-[14px] text-zinc-600 dark:text-zinc-400 mb-2">Momentumgroup.tech</p>
                                        <div className="flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-500">
                                            <Calendar size={14} />
                                            <span>Oct 2021 - Sep 2022 • 1 yr</span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Developed wireframes and prototypes addressing customer needs across health, accounting, B2B, and SaaS products</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Employed creativity and problem-solving to overcome UX challenges related to usability</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Collaborated with designers to develop user-centered solutions using design thinking process</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Worked with developers and project managers to ensure successful implementation of accessible designs</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Studiare */}
                        <motion.div
                            className="p-6 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm relative"
                            variants={scaleIn}
                        >
                            <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-orange-200 border-4 border-white dark:border-[#1a1a1a] hidden md:block" />
                            <div className="md:pl-8">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h3 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                                            User Experience Designer
                                        </h3>
                                        <p className="text-[14px] text-zinc-600 dark:text-zinc-400 mb-2">Studiare • Contract • Lagos, Nigeria</p>
                                        <div className="flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-500">
                                            <Calendar size={14} />
                                            <span>Jul 2021 - Oct 2021 • 4 mos</span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Demonstrated proficiency in understanding product specifications and user psychology to inform design decisions</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Conducted concept and usability testing, leveraging user feedback for iterative design</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Employed user research and data analysis to create personas and inform user-centered interfaces</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-500 mt-1.5">•</span>
                                        <span>Defined interaction models and evaluated effectiveness using data and user feedback</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Education Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeIn}
                >
                    <motion.div className="mb-8" variants={fadeInUp}>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                            <h2 className="text-[17px] font-semibold text-zinc-900 dark:text-zinc-100">Education</h2>
                        </div>
                        <p className="text-[14px] text-zinc-500 dark:text-zinc-400">Academic background and continuous learning.</p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-4"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.1
                                }
                            }
                        }}
                    >
                        {/* MBA */}
                        <motion.div
                            className="p-6 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm"
                            variants={scaleIn}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                                        MBA in Procurement & Supply Chain Management
                                    </h3>
                                    <p className="text-[14px] text-zinc-600 dark:text-zinc-400 mb-2">Lead City University</p>
                                    <div className="flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-500">
                                        <Calendar size={14} />
                                        <span>2024 - Present</span>
                                    </div>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50">
                                    <span className="text-[11px] font-medium text-green-700 dark:text-green-400 uppercase tracking-wider">Current</span>
                                </div>
                            </div>
                            <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                Applying business strategy and operational principles to digital product development, focusing on optimizing workflows and creating efficient digital ecosystems.
                            </p>
                        </motion.div>

                        {/* Bachelor's */}
                        <motion.div
                            className="p-6 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm"
                            variants={scaleIn}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                                        B.Tech in Industrial & Production Engineering
                                    </h3>
                                    <p className="text-[14px] text-zinc-600 dark:text-zinc-400 mb-2">Federal University of Technology, Akure (FUTA)</p>
                                    <div className="flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-500">
                                        <Calendar size={14} />
                                        <span>2017 - 2022</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                Second Class Upper • 4.04 GPA
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={scaleIn}
                    className="p-8 md:p-12 rounded-[24px] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-center"
                >
                    <h2 className="text-[24px] md:text-[32px] font-semibold mb-4">Let's work together</h2>
                    <p className="text-[15px] opacity-80 mb-6 max-w-lg mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <FancyButton href="/#contact" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
                        Get in Touch
                    </FancyButton>
                </motion.section>
            </main>
        </div>
    );
}
