"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

interface AppCardProps {
    title: string;
    description?: string;
    className?: string;
    image: string;
    href?: string;
}

export function AppCard({ title, description, className, image, href = "#" }: AppCardProps) {
    const { ref, position, handleMouseMove, handleMouseLeave } = useMagneticEffect(0.15);

    return (
        <Link
            href={href}
            className="block w-full"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                className={cn(
                    "group flex flex-col items-start text-left gap-2 w-full",
                    "p-[6px] pb-4",
                    "rounded-[28px]",
                    "bg-white dark:bg-[#1a1a1a]",
                    "border border-zinc-200 dark:border-white/5",
                    "transition-all duration-300 ease-out",
                    "hover:shadow-2xl hover:shadow-zinc-900/10 dark:hover:shadow-black/40",
                    className
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Image Container */}
                <div className={cn(
                    "relative w-full aspect-[4/3] rounded-[22px] overflow-hidden mb-1",
                    "bg-zinc-200 dark:bg-zinc-800"
                )}>
                    <motion.div
                        className="h-full w-full"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            loading="lazy"
                            fetchPriority="low"
                            sizes="(max-width: 767px) calc(100vw - 60px), 390px"
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />

                    <motion.div
                        className="absolute top-3 right-3 z-10"
                        initial={{ opacity: 0, y: 8 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
                            <ArrowUpRight size={14} className="text-white" />
                        </div>
                    </motion.div>
                </div>

                {/* Info */}
                <div className="px-3 flex flex-col gap-1">
                    <span className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 transition-colors">
                        {title}
                    </span>
                    {description && (
                        <span className="text-[12px] leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
                            {description}
                        </span>
                    )}
                </div>
            </motion.div>
        </Link>
    );
}

export function AppGrid({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 w-full", className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px", amount: 0.1 }}
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
            {children}
        </motion.div>
    );
}
