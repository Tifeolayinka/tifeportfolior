"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageProps = {
    src: string;
    alt: string;
    priority?: boolean;
};

export function ProjectImage({ src, alt, priority = false }: ProjectImageProps) {
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);
    const [attempt, setAttempt] = useState(0);
    const retrySrc = attempt === 0
        ? src
        : `${src}${src.includes("?") ? "&" : "?"}_retry=${attempt}`;

    const retry = () => {
        setLoaded(false);
        setFailed(false);
        setAttempt((current) => current + 1);
    };

    return (
        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-zinc-100 dark:bg-[#171717]">
            {!loaded && !failed ? (
                <div className="absolute inset-0 animate-pulse bg-zinc-200/60 dark:bg-white/[0.03]" aria-hidden="true" />
            ) : null}

            <Image
                key={retrySrc}
                src={retrySrc}
                alt={alt}
                fill
                priority={priority}
                fetchPriority={priority ? "high" : "low"}
                sizes="(max-width: 768px) 100vw, 720px"
                onLoad={() => setLoaded(true)}
                onError={() => setFailed(true)}
                className={`object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            />

            {failed ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                    <p className="text-[13px] text-zinc-500 dark:text-zinc-400">This image could not be loaded.</p>
                    <button
                        type="button"
                        onClick={retry}
                        className="rounded-full border border-zinc-300 px-4 py-2 text-[12px] font-medium text-zinc-700 transition-colors hover:border-zinc-500 dark:border-white/15 dark:text-zinc-300 dark:hover:border-white/30"
                    >
                        Try again
                    </button>
                </div>
            ) : null}
        </div>
    );
}
