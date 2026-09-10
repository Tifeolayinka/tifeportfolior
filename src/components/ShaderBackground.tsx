"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ShaderBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
            {/* Animated Shader Image */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.55, 0.7, 0.55],
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
                    className="object-cover object-center opacity-85 mix-blend-screen dark:mix-blend-lighten filter brightness-110 contrast-125 saturate-125"
                />
            </motion.div>

            {/* Glowing Accent Orbs */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
            <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-cyan-500/15 blur-[130px]" />

            {/* Subtle Noise / Grid Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.05]" />

            {/* Dark & Lighting Vignette Mask */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/75 to-zinc-950 dark:from-black/60 dark:via-black/80 dark:to-black" />
        </div>
    );
}
