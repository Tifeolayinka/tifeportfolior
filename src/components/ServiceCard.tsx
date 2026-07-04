import { motion, MotionValue } from "framer-motion";
import { ArrowRight, ListChecks, Clock, Star, Target } from "lucide-react";
import { FancyButton } from "@/components/ui/FancyButton";
import { forwardRef } from "react";

interface ServiceCardProps {
    title: React.ReactNode;
    popular?: boolean;
    features: string[];
    bestFor: string[];
    quote: string;
    timeline: string;
    bgClass: string; // e.g., "bg-[#91a08d]"
    darkBgClass: string; // e.g., "dark:bg-[#2d3a2d]"
    index: number;
    scale?: MotionValue<number>;
    style?: React.CSSProperties
}

export const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(({
    title,
    popular,
    features,
    bestFor,
    quote,
    timeline,
    bgClass,
    darkBgClass,
    index,
    scale,
    style
}, ref) => {
    return (
        <motion.div
            ref={ref}
            style={{ scale, zIndex: (index + 1) * 10, ...style }}
            className={`relative md:sticky h-auto md:h-auto overflow-visible md:overflow-hidden rounded-[32px] ${bgClass} ${darkBgClass} p-8 md:p-10 min-h-[500px] shadow-2xl border border-white/10 flex flex-col justify-between group origin-top`}
        >
            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                    {popular && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium text-[12px] mb-4">
                            <Star size={14} />
                            MOST POPULAR
                        </div>
                    )}
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">{title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h4 className="text-[14px] font-bold text-white/90 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <ListChecks size={16} /> What you get
                        </h4>
                        <ul className="space-y-2">
                            {features.map((item, i) => (
                                <li key={i} className="text-[15px] text-white/80 leading-snug flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[14px] font-bold text-white/90 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Target size={16} /> Best For
                        </h4>
                        <ul className="space-y-2">
                            {bestFor.map((item, i) => (
                                <li key={i} className="text-[15px] text-white/80 leading-snug flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-black/20 backdrop-blur-md rounded-2xl p-5 border border-white/10 mb-8">
                    <p className="text-[15px] text-white/90 italic leading-relaxed">
                        "{quote}"
                    </p>
                </div>

                <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/90">
                        <Clock size={16} />
                        <span className="text-[14px] font-medium">Timeline: {timeline}</span>
                    </div>
                    <FancyButton href="#contact" variant="ghost" className="text-white hover:bg-white/10 border-white/20 w-fit">
                        Let's Talk <ArrowRight size={16} className="ml-2" />
                    </FancyButton>
                </div>
            </div>

            {/* Background Elements */}
            <div className={`absolute -bottom-24 ${index % 2 === 0 ? '-right-24' : '-left-24'} w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none`} />
            {index === 0 && (
                <div className="absolute top-1/2 -right-32 flex flex-col gap-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none rotate-[-12deg]">
                    <div className="w-64 h-32 bg-white rounded-xl" />
                    <div className="w-64 h-32 bg-white rounded-xl ml-12" />
                </div>
            )}
        </motion.div>
    );
});

ServiceCard.displayName = "ServiceCard";
