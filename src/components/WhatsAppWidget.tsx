"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function WhatsAppWidget() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    // State to track if the user has manually interacted with the widget (opened/closed)
    const [hasInteracted, setHasInteracted] = useState(false);

    const SERVICES = [
        "Full-Stack + Bubble",
        "UI/UX Design",
        "Bubble Dev",
        "Other"
    ];

    const BUDGETS = [
        "< $1k",
        "$1k - $3k",
        "$3k - $5k",
        "$5k+"
    ];

    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
    const [description, setDescription] = useState("");

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

    // Construct dynamic message based on selections
    const isReady = selectedService && selectedBudget;

    // Build the message parts
    const baseMessage = `Hi Tife! I'd like to chat with you about ${selectedService} for my idea, my budget is ${selectedBudget}.`;
    const descriptionText = description.trim() ? `\n\nContext: ${description.trim()}` : "";

    const WHATSAPP_MESSAGE = isReady
        ? `${baseMessage}${descriptionText}`
        : "Hi Tife! I'd like to chat about a project.";

    const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    if (pathname.startsWith("/work/")) return null;

    return (
        <div className="fixed bottom-24 md:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="pointer-events-auto bg-white dark:bg-[#1a1a1a] rounded-[24px] shadow-2xl border border-zinc-200 dark:border-white/10 w-[calc(100vw-2rem)] sm:w-[340px] max-w-[340px] overflow-hidden"
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

                        {/* Body - Lead Form */}
                        <div className="p-5 bg-zinc-50 dark:bg-[#111] relative min-h-[140px] flex flex-col gap-5">
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <p className="text-[14px] text-zinc-600 dark:text-zinc-400 font-medium mb-3">
                                    What service are you looking for?
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {SERVICES.map((service) => (
                                        <button
                                            key={service}
                                            onClick={() => setSelectedService(service)}
                                            className={cn(
                                                "px-3 py-1.5 rounded-full text-[13px] font-medium border transition-all duration-200",
                                                selectedService === service
                                                    ? "bg-[#0f5c4c] dark:bg-[#0f4c3e] border-[#0f5c4c] dark:border-[#0f4c3e] text-white shadow-md scale-105"
                                                    : "bg-white dark:bg-[#222] border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:border-[#0f5c4c]/50 hover:text-[#0f5c4c] dark:hover:text-[#4ade80]"
                                            )}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>

                            <AnimatePresence>
                                {selectedService && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, y: -10 }}
                                        animate={{ opacity: 1, height: "auto", y: 0 }}
                                        exit={{ opacity: 0, height: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-[14px] text-zinc-600 dark:text-zinc-400 font-medium mb-3 mt-1">
                                            What is your estimated budget?
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {BUDGETS.map((budget) => (
                                                <button
                                                    key={budget}
                                                    onClick={() => setSelectedBudget(budget)}
                                                    className={cn(
                                                        "px-3 py-1.5 rounded-full text-[13px] font-medium border transition-all duration-200",
                                                        selectedBudget === budget
                                                            ? "bg-[#0f5c4c] dark:bg-[#0f4c3e] border-[#0f5c4c] dark:border-[#0f4c3e] text-white shadow-md scale-105"
                                                            : "bg-white dark:bg-[#222] border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:border-[#0f5c4c]/50 hover:text-[#0f5c4c] dark:hover:text-[#4ade80]"
                                                    )}
                                                >
                                                    {budget}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {selectedService && selectedBudget && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, y: -10 }}
                                        animate={{ opacity: 1, height: "auto", y: 0 }}
                                        exit={{ opacity: 0, height: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-[14px] text-zinc-600 dark:text-zinc-400 font-medium mb-2 mt-1 flex items-center justify-between">
                                            <span>Tell me about your idea</span>
                                            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-normal">Optional</span>
                                        </p>
                                        <textarea
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="A brief overview..."
                                            className="w-full h-[60px] resize-none rounded-xl bg-white dark:bg-[#222] border border-zinc-200 dark:border-white/10 p-3 text-[13px] text-zinc-700 dark:text-zinc-300 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-[#0f5c4c] dark:focus:border-[#0f4c3e] transition-colors shadow-sm"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-white dark:bg-[#1a1a1a] border-t border-zinc-100 dark:border-white/5">
                            <a
                                href={isReady ? WHATSAPP_URL : "#"}
                                onClick={(e) => {
                                    if (!isReady) e.preventDefault();
                                }}
                                target={isReady ? "_blank" : undefined}
                                rel={isReady ? "noopener noreferrer" : undefined}
                                className={cn(
                                    "flex items-center justify-center gap-2 w-full py-3 rounded-full transition-all group",
                                    isReady
                                        ? "bg-[#25D366] hover:bg-[#1fd963] active:scale-[0.98] shadow-lg shadow-green-500/20"
                                        : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 cursor-not-allowed"
                                )}
                            >
                                <Send size={18} className={cn(
                                    isReady ? "text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" : "opacity-50"
                                )} />
                                <span className={cn(
                                    "font-medium text-[14px]",
                                    isReady ? "text-white" : "opacity-50"
                                )}>
                                    {isReady ? "Start Chat" : "Select options to continue"}
                                </span>
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
