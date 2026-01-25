"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FancyButtonProps {
    icon?: LucideIcon;
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    variant?: "solid" | "outline" | "ghost";
}

export function FancyButton({
    icon: Icon,
    children,
    href,
    onClick,
    className,
    variant = "solid"
}: FancyButtonProps) {

    const baseStyles = "relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 group overflow-hidden";

    const variants = {
        solid: "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border border-transparent hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
        outline: "bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900",
        ghost: "bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 px-2",
    };

    const Content = () => (
        <>
            {Icon && (
                <motion.span
                    initial={{ x: 0, rotate: 0 }}
                    whileHover={{ x: -2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Icon size={16} />
                </motion.span>
            )}
            <span className="relative z-10">{children}</span>
            {variant === "solid" && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            )}
        </>
    );

    const wrapperProps = {
        className: cn(baseStyles, variants[variant], className),
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
    };

    if (href) {
        return (
            <Link href={href} passHref legacyBehavior={false}>
                <motion.span {...wrapperProps} style={{ display: 'inline-flex', cursor: 'pointer' }}>
                    <Content />
                </motion.span>
            </Link>
        );
    }

    return (
        <motion.button onClick={onClick} {...wrapperProps}>
            <Content />
        </motion.button>
    );
}
