"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ShaderBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
            {/* Animated Shader Image */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    src="/shader-bg.png"
                    alt="Shader background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center mix-blend-multiply dark:mix-blend-screen filter brightness-105 contrast-110"
                />
            </motion.div>

            {/* Glowing Accent Orbs */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/20 blur-[140px]" />
            <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[130px]" />

            {/* Subtle Grid Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] dark:opacity-[0.04]" />

            {/* Theme-adapted Vignette Mask for Maximum Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/80 via-zinc-50/90 to-zinc-50 dark:from-black/75 dark:via-zinc-950/85 dark:to-black" />
        </div>
    );
}
