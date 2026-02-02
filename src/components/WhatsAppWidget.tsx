"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    // State to track if the user has manually interacted with the widget (opened/closed)
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        // Only auto-open if the user hasn't interacted with it yet
        if (!hasInteracted) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 7000); // 7 seconds delay

            return () => clearTimeout(timer);
        }
    }, [hasInteracted]);

    const handleClose = () => {
        setIsOpen(false);
        setHasInteracted(true);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
        setHasInteracted(true);
    };

    // Replace with your actual WhatsApp number
    const WHATSAPP_NUMBER = "+2348068159010";
    const WHATSAPP_MESSAGE = "Hi Tife! I'd like to chat about a project.";
    const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <div className="fixed bottom-44 md:bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="pointer-events-auto bg-white dark:bg-[#1a1a1a] rounded-[24px] shadow-2xl border border-zinc-200 dark:border-white/10 w-[320px] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#0f5c4c] dark:bg-[#0f4c3e] p-5 flex items-start justify-between relative overflow-hidden">
                            {/* Abstract Pattern Overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden">
                                        <img
                                            src="https://piton-digital.s3.eu-north-1.amazonaws.com/Portfolio+Image.JPG"
                                            alt="Tife Olayinka"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#0f5c4c] rounded-full" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-white font-medium text-[16px]">Tife Olayinka</h3>
                                    <p className="text-white/80 text-[12px]">Typically replies in minutes</p>
                                </div>
                            </div>
                            <button
                                onClick={handleClose}
                                className="text-white/70 hover:text-white transition-colors relative z-10 p-1"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-5 bg-zinc-50 dark:bg-[#111] relative min-h-[140px]">
                            {/* Chat Bubble */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="bg-white dark:bg-[#222] p-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-zinc-200 dark:border-white/5 max-w-[85%]"
                            >
                                <p className="text-[14px] text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    Hey there! 👋 How can I help you today?
                                </p>
                                <span className="text-[10px] text-zinc-400 mt-1.5 block text-right">05:57 AM</span>
                            </motion.div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-white dark:bg-[#1a1a1a] border-t border-zinc-100 dark:border-white/5">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#1fd963] active:scale-[0.98] transition-all rounded-full shadow-lg shadow-green-500/20 group"
                            >
                                <Send size={18} className="text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                <span className="text-white font-medium text-[14px]">Start Chat</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button (Always Visible) */}
            <motion.button
                onClick={handleToggle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 flex items-center justify-center relative overlow-hidden border-2 border-white dark:border-[#1a1a1a]"
            >
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20" />
                {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
            </motion.button>
        </div>
    );
}
