"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface AppCardProps {
    title: string;
    description?: string;
    className?: string;
    image: string;
    href?: string;
}

export function AppCard({ title, description, className, image, href = "#" }: AppCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group flex flex-col items-start text-left gap-2 w-full",
                "p-[6px] pb-4",
                "rounded-[28px]",
                "bg-white dark:bg-[#1a1a1a]",
                "border border-zinc-200 dark:border-white/5",
                "transition-all duration-[120ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                "hover:scale-[1.01] hover:shadow-lg active:scale-[0.99]",
                className
            )}
        >
            {/* Image Container */}
            <div className={cn(
                "relative w-full aspect-[4/3] rounded-[22px] overflow-hidden mb-1",
                "bg-zinc-200 dark:bg-zinc-800"
            )}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="absolute top-3 right-3 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-10">
                    <div className="bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
                        <ArrowUpRight size={14} className="text-white" />
                    </div>
                </div>
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
        </Link>
    );
}

export function AppGrid({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 w-full", className)}>
            {children}
        </div>
    );
}
