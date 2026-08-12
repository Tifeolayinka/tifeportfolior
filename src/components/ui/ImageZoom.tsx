"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageZoomProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

export function ImageZoom({ src, alt, className, priority = false }: ImageZoomProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div
                className={cn("relative group cursor-zoom-in overflow-hidden", className)}
                onClick={() => setIsOpen(true)}
                layoutId={`image-${src}`}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    loading={priority ? "eager" : "lazy"}
                    fetchPriority={priority ? "high" : "low"}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay Hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-black/50 backdrop-blur-md p-2 rounded-full text-white">
                        <ZoomIn size={20} />
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
                        >
                            <X size={24} />
                        </button>

                        <motion.div
                            layoutId={`image-${src}`}
                            className="relative w-full h-full max-w-7xl max-h-screen flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image wrapper (optional, but standard behavior usually allows closing on background)
                        >
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                sizes="100vw"
                                className="object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
