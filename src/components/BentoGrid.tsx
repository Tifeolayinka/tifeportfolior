import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface BentoCardProps {
    title: string;
    description: string;
    className?: string;
    graphic?: ReactNode;
    href?: string;
    width?: "full" | "half" | "third";
}

export function BentoCard({ title, description, className, graphic, href = "#", width = "half" }: BentoCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group relative overflow-hidden rounded-3xl p-6 glass flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-xl",
                width === "full" ? "col-span-1 md:col-span-2 lg:col-span-3" :
                    width === "third" ? "col-span-1" : "col-span-1 md:col-span-1",
                className
            )}
        >
            <div className="absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="text-zinc-500 dark:text-zinc-400" />
            </div>

            <div className="h-48 w-full mb-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 overflow-hidden flex items-center justify-center text-zinc-300">
                {graphic ? graphic : <span className="text-sm">Project Preview</span>}
            </div>

            <div>
                <h3 className="text-xl font-medium tracking-tight mb-1">{title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
            </div>
        </Link>
    );
}

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
            {children}
        </div>
    );
}
