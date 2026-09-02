"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FancyButton } from "@/components/ui/FancyButton";
import { 
    Calendar, AlertTriangle, Users, EyeOff, Box, Briefcase, 
    CheckCircle2, FileText, CreditCard, LayoutDashboard, Image as ImageIcon, 
    GitMerge, Wrench, Truck, Stethoscope, Building, ShoppingCart, 
    Plus, Minus, ShieldCheck, ArrowRight, FileSpreadsheet, Link2Off, UserPlus, Activity
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fadeInUp, viewportOptions } from "@/lib/animations";
import { LazyBookingCalendar } from "@/components/LazyBookingCalendar";

export default function AppsClient() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-orange-500/30 selection:text-white pb-24 relative overflow-hidden">
            
            {/* Global Ambient Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-600/20 blur-[120px]" />
                <div className="absolute top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-emerald-600/20 blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            {/* Sticky Header */}
            <header className="sticky top-0 z-50 w-full bg-zinc-950/60 backdrop-blur-xl border-b border-white/5 transition-all">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="font-bold text-white text-lg tracking-tight flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-orange-500 to-orange-300 flex items-center justify-center shadow-lg shadow-orange-500/20">
                            <span className="text-white text-[10px] font-black leading-none">T</span>
                        </div>
                        Tife Olayinka
                    </Link>
                    <FancyButton href="https://cal.com/tifeolayinka/free-app-consultation-business" target="_blank" className="text-[13px] px-5 py-2 h-auto hidden md:flex" icon={Calendar}>
                        Book a Call
                    </FancyButton>
                    <FancyButton href="https://cal.com/tifeolayinka/free-app-consultation-business" target="_blank" className="text-[13px] px-4 py-1.5 h-auto md:hidden">
                        Book a Call
                    </FancyButton>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 flex flex-col gap-32 pt-20 md:pt-32">
                
                {/* 1. HERO - Split Layout */}
                <motion.section 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <div className="flex flex-col items-start text-left gap-6 z-10">
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[12px] font-medium text-zinc-300">Available for new projects</span>
                        </motion.div>
                        
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 leading-tight">
                            Your business has outgrown its systems.
                        </motion.h1>
                        
                        <motion.p variants={fadeInUp} className="text-[16px] md:text-[18px] leading-relaxed text-zinc-400 max-w-lg">
                            I build custom internal apps that replace chaotic spreadsheets and duct-taped tools — so your team can finally work the way your business actually runs.
                        </motion.p>
                        
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
                            <FancyButton href="https://cal.com/tifeolayinka/free-app-consultation-business" target="_blank" className="w-full sm:w-auto text-[15px] px-8 py-4 shadow-orange-500/20" icon={Calendar}>
                                Book a Free 30-Min Call
                            </FancyButton>
                            <span className="text-[13px] text-zinc-500 flex items-center gap-1.5">
                                <ShieldCheck size={14} className="text-emerald-500" /> No pitch, just clarity.
                            </span>
                        </motion.div>
                    </div>

                    <motion.div 
                        variants={fadeInUp}
                        className="relative w-full aspect-[4/3] rounded-2xl overflow-visible perspective-[1000px] z-10"
                    >
                        {/* 3D Floating Dashboard Graphic */}
                        <motion.div 
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-md transform-gpu rotate-y-[-5deg] rotate-x-[5deg]"
                        >
                            <Image 
                                src="/dashboard_mockup.png" 
                                alt="Custom Internal Dashboard UI Mockup" 
                                fill 
                                className="object-cover opacity-90 scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-white/5 pointer-events-none" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 pointer-events-none rounded-2xl" />
                        </motion.div>

                        {/* Floating elements for graphic depth */}
                        <motion.div 
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-orange-400" />
                            </div>
                            <div>
                                <p className="text-[12px] text-zinc-400 font-medium">System Efficiency</p>
                                <p className="text-[16px] font-bold text-white">+84%</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* 2. PAIN POINTS - Glassmorphic Grid */}
                <motion.section 
                    className="flex flex-col gap-12 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeInUp}
                >
                    {/* Background glow for section */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-red-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sound familiar?</h2>
                        <p className="text-zinc-400">The signs that off-the-shelf software and manual processes are holding you back.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: FileSpreadsheet, title: "Spreadsheet Chaos", text: "Your team is still tracking critical operations on easily-broken spreadsheets." },
                            { icon: AlertTriangle, title: "Lost Information", text: "Jobs, orders or client requests are falling through the cracks." },
                            { icon: Link2Off, title: "Disconnected Tools", text: "You're juggling 4+ subscriptions that don't talk to each other." },
                            { icon: Users, title: "Slow Onboarding", text: "New staff take weeks to figure out your convoluted systems." },
                            { icon: EyeOff, title: "Blind Spots", text: "You can't see what's happening in your business in real time." },
                            { icon: Box, title: "Generic Software", text: "You've tried off-the-shelf tools — they almost fit, but force you to change how you work." }
                        ].map((item, i) => (
                            <div key={i} className="group relative p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-red-500/30 transition-all duration-300 overflow-hidden">
                                {/* Hover Gradient */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                                
                                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 relative z-10 border border-red-500/20 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-5 h-5 text-red-400" />
                                </div>
                                <h3 className="text-[18px] font-semibold text-zinc-100 mb-2">{item.title}</h3>
                                <p className="text-[14px] text-zinc-400 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 3. SOLUTION - Bento Box Layout */}
                <motion.section 
                    className="flex flex-col gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeInUp}
                >
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
                            One app. Built around your reality.
                        </h2>
                        <p className="text-[16px] text-zinc-400 leading-relaxed">
                            I design and build a custom internal app for your business — not a generic tool you have to work around. <strong className="text-white font-semibold">Most apps are ready in 2–4 weeks.</strong>
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                        {/* Bento Grid Items */}
                        <div className="md:col-span-2 lg:col-span-2 row-span-2 relative p-8 rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                                    <LayoutDashboard className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Real-time Dashboards</h3>
                                    <p className="text-zinc-400">Total visibility over your operations, jobs, and revenue in one unified view.</p>
                                </div>
                            </div>
                            {/* Decorative graphical element */}
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 border border-white/5 rounded-full flex items-center justify-center pointer-events-none opacity-20">
                                <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center">
                                    <div className="w-32 h-32 border border-white/20 rounded-full bg-emerald-500/10 blur-xl" />
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-1 lg:col-span-2 relative p-6 rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden group flex flex-col justify-between">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-50" />
                            <Briefcase className="w-8 h-8 text-orange-400" />
                            <div>
                                <h3 className="text-lg font-bold text-white">Job & Task Management</h3>
                                <p className="text-[13px] text-zinc-400 mt-1">Track every job from quote to completion.</p>
                            </div>
                        </div>

                        <div className="md:col-span-1 lg:col-span-1 relative p-6 rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden group flex flex-col justify-between">
                            <Calendar className="w-8 h-8 text-purple-400" />
                            <div>
                                <h3 className="text-lg font-bold text-white">Staff Scheduling</h3>
                            </div>
                        </div>

                        <div className="md:col-span-1 lg:col-span-1 relative p-6 rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden group flex flex-col justify-between">
                            <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                            <div>
                                <h3 className="text-lg font-bold text-white">Client Tracking</h3>
                            </div>
                        </div>

                        <div className="md:col-span-2 lg:col-span-2 relative p-6 rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden group flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <GitMerge className="w-8 h-8 text-pink-400" />
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900" />
                                    <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-900" />
                                    <div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-zinc-900 flex items-center justify-center"><Plus className="w-3 h-3 text-white" /></div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Custom Workflows</h3>
                                <p className="text-[13px] text-zinc-400 mt-1">Built entirely around your industry's specific steps.</p>
                            </div>
                        </div>

                        <div className="md:col-span-1 lg:col-span-2 relative p-6 rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden group flex flex-col justify-between">
                            <div className="flex items-center gap-4">
                                <CreditCard className="w-8 h-8 text-yellow-400" />
                                <ImageIcon className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Invoices & Documents</h3>
                                <p className="text-[13px] text-zinc-400 mt-1">Quotes, payments, and photo uploads in one place.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 4. WHO THIS IS FOR - Interactive Grid */}
                <motion.section 
                    className="flex flex-col gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeInUp}
                >
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Built for businesses like yours</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Construction & Trades", desc: "Job tracking, crew scheduling, quoting and site management", icon: Wrench },
                            { title: "Logistics & Delivery", desc: "Route management, driver tracking and dispatch", icon: Truck },
                            { title: "Field Services", desc: "Job assignment, invoicing and team coordination", icon: Briefcase },
                            { title: "Healthcare & Allied", desc: "Patient flow, staff scheduling and compliance tracking", icon: Stethoscope },
                            { title: "Real Estate", desc: "Listings, client follow-ups and deal pipeline", icon: Building },
                            { title: "Wholesale", desc: "Order management, inventory and client portals", icon: ShoppingCart },
                        ].map((item, i) => (
                            <div key={i} className="group flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/30 hover:bg-zinc-800/80 border border-white/5 hover:border-orange-500/50 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                                    <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-orange-400 transition-colors" />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h3 className="text-[16px] font-bold text-white group-hover:text-orange-100 transition-colors">{item.title}</h3>
                                    <p className="text-[13px] text-zinc-400 mt-1 leading-snug">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-500/10 via-zinc-900/50 to-emerald-500/10 p-6 rounded-2xl text-center border border-white/10 backdrop-blur-sm">
                        <p className="text-[15px] text-zinc-300">
                            <strong className="text-white">Don't see your industry?</strong> Book a call — if your business runs on people, jobs or orders, I can build for it.
                        </p>
                    </div>
                </motion.section>

                {/* 5. HOW IT WORKS - Visual Pipeline */}
                <motion.section 
                    className="flex flex-col gap-16 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeInUp}
                >
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">How it works</h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 relative max-w-4xl mx-auto w-full">
                        {/* Animated connecting line */}
                        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0">
                            <motion.div 
                                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                                animate={{ left: ["-30%", "100%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        {[
                            { step: "01", title: "Book a free call", desc: "We talk about how your business runs, what's breaking down, and what an app could fix." },
                            { step: "02", title: "I design and build it", desc: "I design and build your custom app in 2–4 weeks, built around your exact workflows." },
                            { step: "03", title: "Your team gets to work", desc: "Simple onboarding, your team is up and running fast. I stay on hand for support." }
                        ].map((item, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center text-center gap-6 relative z-10 group">
                                <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 shadow-xl flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300">
                                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
                                        {item.step}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-[18px] font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-[14px] text-zinc-400 leading-relaxed max-w-[250px] mx-auto">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 6. SOCIAL PROOF */}
                <motion.section 
                    className="flex flex-col gap-10 max-w-4xl mx-auto w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeInUp}
                >
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">What people say</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Active Testimonial */}
                        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 flex flex-col gap-6 backdrop-blur-md relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
                            <div className="flex text-orange-400 gap-1 text-sm">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="text-[16px] text-zinc-300 leading-relaxed italic relative z-10 font-light">
                                "Working with Tife was fast and efficient, with clear progress made in each phase of development. Constant communication was a key factor in delivering a well-implemented and fully functional project."
                            </p>
                            <div className="flex items-center gap-4 mt-auto relative z-10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center font-bold text-white shadow-inner border border-white/10">
                                    S
                                </div>
                                <div>
                                    <h4 className="text-[16px] font-bold text-white leading-none mb-1.5">Shehriar</h4>
                                    <span className="text-[13px] text-zinc-500">Founder at Bibaflow</span>
                                </div>
                            </div>
                        </div>

                        {/* Reserved Testimonial */}
                        <div className="p-8 rounded-3xl bg-zinc-950/40 border border-dashed border-white/10 flex flex-col gap-6 relative group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <UserPlus className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-[16px] text-zinc-500 leading-relaxed italic">
                                "This spot is reserved. Book a call and let's build something worth talking about."
                            </p>
                            <div className="mt-auto pt-4 border-t border-white/5">
                                <h4 className="text-[16px] font-bold text-zinc-600 leading-none mb-1.5">Business Owner</h4>
                                <span className="text-[13px] text-zinc-700">[Industry], [Country]</span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 7. PRICING - Premium Card */}
                <motion.section 
                    className="flex flex-col gap-10 items-center w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeInUp}
                >
                    <div className="text-center max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Simple, transparent pricing</h2>
                        <p className="text-[16px] text-zinc-400">One-off investment. No monthly SaaS fees. Yours to keep.</p>
                    </div>

                    <div className="w-full max-w-3xl relative">
                        {/* Glow behind pricing */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl -z-10 rounded-full opacity-50" />
                        
                        <div className="bg-zinc-900/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl text-center flex flex-col items-center gap-6">
                            <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400 tracking-tight">
                                Projects start from $2,000
                            </h3>
                            <p className="text-[16px] text-zinc-400 leading-relaxed max-w-lg">
                                Every business is different — final pricing depends on the scope, complexity and number of users. Book a free call and I'll give you an exact quote within 24 hours.
                            </p>
                            <FancyButton href="https://cal.com/tifeolayinka/free-app-consultation-business" target="_blank" className="mt-4 text-[16px] px-10 py-5 bg-white text-black hover:bg-zinc-200" icon={Calendar}>
                                Get a Free Quote
                            </FancyButton>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 pt-8 border-t border-white/5 w-full text-left">
                                {[
                                    "No hourly billing surprises — fixed project price agreed upfront",
                                    "50% to start, 50% on delivery",
                                    "Ongoing support available after launch"
                                ].map((trust, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                                        </div>
                                        <p className="text-[13px] text-zinc-300 leading-snug">{trust}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 8. FAQ */}
                <motion.section 
                    className="flex flex-col gap-10 max-w-3xl mx-auto w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeInUp}
                >
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Common questions</h2>
                    </div>

                    <div className="flex flex-col gap-3">
                        {[
                            { q: "How long does it take?", a: "Most apps are ready in 2–4 weeks from our first call. You'll always know the exact timeline before we start." },
                            { q: "Do I need to be technical?", a: "Not at all. It's built for people who run businesses, not engineers. If your team can use a smartphone, they can use the app." },
                            { q: "Is this a website or a proper app?", a: "It's a proper web app — works on any device, any browser. No app store downloads needed. Your team accesses it from their phone or computer." },
                            { q: "What if I want changes after launch?", a: "A revision round is included in every project. After launch, ongoing support retainers are available." },
                            { q: "How is this different from off-the-shelf software?", a: "Tools like monday.com or Notion are built for everyone, which means they almost fit your business but never quite do. This is built specifically for how your business runs — your workflows, your terminology, your team." }
                        ].map((faq, i) => (
                            <div key={i} className="rounded-2xl bg-white/[0.03] border border-white/5 overflow-hidden transition-all duration-300">
                                <button 
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-white/[0.05]"
                                >
                                    <span className="text-[16px] font-semibold text-zinc-200">{faq.q}</span>
                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ml-4 transition-colors ${openFaq === i ? 'bg-white text-black border-transparent' : 'border-white/10 text-white'}`}>
                                        {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-[15px] text-zinc-400 leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 8b. EMBEDDED BOOKING CALENDAR */}
                <motion.section
                    className="flex flex-col gap-10 max-w-4xl mx-auto w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeInUp}
                >
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            Book your free call
                        </h2>
                        <p className="text-[16px] text-zinc-400 max-w-xl mx-auto">
                            Pick a time that works for you — 30 minutes, no pitch, just clarity on what a custom app would look like for your business.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-4 md:p-8">
                        {/* Subtle glow behind the calendar */}
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-orange-500/15 blur-[80px] rounded-full pointer-events-none" />
                        <LazyBookingCalendar />
                    </div>
                </motion.section>

                {/* 9. FINAL CTA */}
                <motion.section 
                    className="relative flex flex-col items-center text-center gap-8 py-20 px-6 rounded-[3rem] mt-10 mb-20 overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={fadeInUp}
                >
                    {/* Background layers for final CTA */}
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black z-0 border border-white/10 rounded-[3rem]" />
                    <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-full h-[150%] bg-[conic-gradient(from_90deg_at_50%_0%,#000000_0%,#18181b_50%,#f97316_100%)] opacity-20 z-0 blur-[100px]" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
                            Ready to replace <br className="hidden md:block"/> the spreadsheets?
                        </h2>
                        <p className="text-[18px] text-zinc-400 max-w-2xl leading-relaxed mb-8">
                            Book a free 30-minute call. I'll show you exactly what a custom app would look like for your business — no pitch, no obligation, just clarity.
                        </p>
                        <FancyButton href="https://cal.com/tifeolayinka/free-app-consultation-business" target="_blank" className="bg-orange-500 hover:bg-orange-600 text-white border-none shadow-xl shadow-orange-500/20 text-[16px] px-10 py-5" icon={Calendar}>
                            Book My Free Call
                        </FancyButton>
                        <div className="mt-8 flex items-center justify-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <p className="text-[13px] text-zinc-500">
                                Tife Olayinka · tifeolayinka.com · Built in Lagos, shipping worldwide
                            </p>
                        </div>
                    </div>
                </motion.section>
            </main>
        </div>
    );
}
