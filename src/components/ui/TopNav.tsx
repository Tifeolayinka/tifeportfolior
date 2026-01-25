"use client";

import { useTheme } from "next-themes";
import { Globe, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function TopNav() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6"
        >
            {/* Location Badge */}
            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-medium text-sm">
                <Globe size={16} />
                <span>Global</span>
            </div>

            {/* Theme Toggle */}
            <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors relative overflow-hidden"
                aria-label="Toggle theme"
            >
                <div className="relative w-5 h-5">
                    <span className={`absolute inset-0 transform transition-transform duration-500 ${mounted && resolvedTheme === 'dark' ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                        <Sun size={20} />
                    </span>
                    <span className={`absolute inset-0 transform transition-transform duration-500 ${mounted && resolvedTheme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                        <Moon size={20} />
                    </span>
                </div>
            </button>
        </motion.div>
    );
}
