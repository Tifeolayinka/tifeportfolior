"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, User, Mail, Layers, MessageSquareQuote, LayoutGrid, Zap, Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "#hero", avatar: "https://piton-digital.s3.eu-north-1.amazonaws.com/Portfolio+Image.JPG" },
    { name: "Projects", href: "#work", icon: Briefcase },
    { name: "Services", href: "#services", icon: LayoutGrid },
    { name: "Process", href: "#process", icon: Zap },
    { name: "Toolkit", href: "#toolkit", icon: Layers },
    { name: "What they say", href: "#testimonials", icon: MessageSquareQuote },
];

export function BottomNav() {
    const [activeSection, setActiveSection] = useState("hero");
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));

            // Show indicator while scrolling
            setIsVisible(true);

            // Clear previous timeout and set a new one to hide after 3 seconds
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            let current = "hero";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Detect if section is taking up a significant portion of the viewport
                    if (rect.top <= 300) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);
        };
    }, []);

    const activeItem = navItems.find(item => item.href.substring(1) === activeSection) || navItems[0];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
            {/* Viewing Indicator */}
            <AnimatePresence mode="wait">
                {isVisible && (
                    <motion.div
                        key={activeSection}
                        initial={{ y: 10, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 10, opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 dark:bg-white/10 backdrop-blur-xl border border-zinc-200/20 dark:border-white/10 shadow-2xl"
                    >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-rose-500 via-purple-500 to-blue-500 animate-pulse" />
                        <span className="text-[12px] font-medium text-white/90 whitespace-nowrap">
                            Viewing <span className="text-white font-bold">{activeItem.name}</span>
                        </span>
                        <ArrowUpRight size={10} strokeWidth={3} className="text-white/40" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                className="glass-pill flex items-center gap-1.5 p-1.5 rounded-full"
            >
                {navItems.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(item.href.substring(1));
                                if (element) {
                                    const offset = 80;
                                    const bodyRect = document.body.getBoundingClientRect().top;
                                    const elementRect = element.getBoundingClientRect().top;
                                    const elementPosition = elementRect - bodyRect;
                                    const offsetPosition = elementPosition - offset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: 'smooth'
                                    });
                                }
                                setActiveSection(item.href.substring(1));
                                setIsVisible(true);
                            }}
                            className="relative group p-1"
                        >
                            <div
                                className={cn(
                                    "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300",
                                    isActive ? "text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5"
                                )}
                            >
                                {item.avatar ? (
                                    <div className={cn(
                                        "w-8 h-8 rounded-full overflow-hidden border transition-all duration-300 shadow-sm",
                                        isActive ? "border-zinc-900 dark:border-white scale-110" : "border-zinc-200 dark:border-white/10 opacity-70 grayscale hover:opacity-100 hover:grayscale-0"
                                    )}>
                                        <img src={item.avatar} alt="Me" className="w-full h-full object-cover" />
                                    </div>
                                ) : (
                                    Icon && <Icon size={18} className="relative z-10" />
                                )}

                                {isActive && !item.avatar && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-1 bg-zinc-200/50 dark:bg-white/10 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </div>

                            {/* Tooltip */}
                            <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-black text-white dark:bg-white dark:text-black text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 whitespace-nowrap pointer-events-none shadow-2xl">
                                {item.name}
                            </span>
                        </Link>
                    );
                })}

                {/* Hamburger Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="relative group p-1"
                >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={18} className="relative z-10" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={18} className="relative z-10" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Tooltip */}
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-black text-white dark:bg-white dark:text-black text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 whitespace-nowrap pointer-events-none shadow-2xl">
                        Menu
                    </span>
                </button>
            </motion.div>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed bottom-32 left-1/2 -translate-x-1/2 z-50 w-64 rounded-[24px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-2xl overflow-hidden"
                        >
                            <div className="p-2">
                                <Link
                                    href="/about"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 rounded-[16px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                                        <User size={16} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[14px] font-medium">About</div>
                                        <div className="text-[12px] text-zinc-500 dark:text-zinc-500">Learn more about me</div>
                                    </div>
                                </Link>

                                <Link
                                    href="/#contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 rounded-[16px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                                        <Mail size={16} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[14px] font-medium">Contact</div>
                                        <div className="text-[12px] text-zinc-500 dark:text-zinc-500">Get in touch</div>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
