"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialsMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const socialLinks = [
    {
        icon: <X size={18} />, // Using Lucide X icon or Twitter if preferred, user said "X"
        title: "X",
        handle: "@tife_olayinka",
        href: "https://x.com/tifeo_layinka",
    },
    {
        icon: <Instagram size={18} />,
        title: "Instagram",
        handle: "@tife_olayinka",
        href: "https://instagram.com/tife_olayinka",
    },
    {
        icon: <Linkedin size={18} />,
        title: "Linkedin",
        handle: "@tife_olayinka",
        href: "https://linkedin.com/in/tife-olayinka",
    },
    {
        icon: <Mail size={18} />,
        title: "Email",
        handle: "hello@tifeolayinka.com",
        href: "mailto:boluolayinka1212@gmail.com",
    },
];

export function SocialsMenu({ isOpen, onClose }: SocialsMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-12 left-0 z-50 w-[300px]"
                >
                    {/* Card Container */}
                    <div className="p-3 pb-4 rounded-[24px] bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 shadow-sm backdrop-blur-sm">

                        {/* Header */}
                        <div className="flex items-center gap-2 mb-3 px-2 pt-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
                            <span className="text-[13px] font-medium text-zinc-600 dark:text-zinc-300">Social</span>
                        </div>

                        {/* List Container */}
                        <div className="flex flex-col rounded-[18px] bg-zinc-50 dark:bg-[#222222] border border-zinc-200 dark:border-white/5 overflow-hidden">
                            {socialLinks.map((link, index) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    target="_blank"
                                    className={cn(
                                        "flex items-center gap-3 p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-white/5 group relative",
                                        index !== socialLinks.length - 1 && "border-b border-zinc-200 dark:border-white/5"
                                    )}
                                >
                                    {/* Icon Box */}
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-transparent text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:bg-white dark:group-hover:bg-zinc-700 transition-colors shadow-sm dark:shadow-none">
                                        {link.icon}
                                    </div>

                                    {/* Text Info */}
                                    <div className="flex flex-col">
                                        <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-200 leading-none mb-1 group-hover:text-black dark:group-hover:text-white transition-colors">
                                            {link.title}
                                        </span>
                                        <span className="text-[11px] text-zinc-500 font-normal leading-none group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                                            {link.handle}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
