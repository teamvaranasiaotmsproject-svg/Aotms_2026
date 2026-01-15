import { motion } from "framer-motion";
import {
    Cpu,
    Globe,
    Github,
    Bell,
    Zap,
    BookOpen,
    Users,
    Terminal
} from "lucide-react";
import { cn } from "@/lib/utils";

import { LucideIcon } from "lucide-react";

interface Feature {
    title: string;
    icon: LucideIcon;
    color: string;
}

const features: Feature[] = [
    { title: "Hands-On Industry Projects", icon: Cpu, color: "text-blue-600" },
    { title: "AOTMS Learning Portal", icon: Globe, color: "text-blue-600" },
    { title: "GitHub & LinkedIn Projects", icon: Github, color: "text-blue-600" },
    { title: "Career & Job Alerts", icon: Bell, color: "text-blue-600" },
    { title: "In-Demand Skill Development", icon: Zap, color: "text-blue-600" },
    { title: "Free Aptitude Training", icon: BookOpen, color: "text-blue-600" },
    { title: "Corporate-Level Industry Interactions", icon: Users, color: "text-blue-600" },
    { title: "80% Practical Training · 20% Theory", icon: Terminal, color: "text-blue-600" },
];

export const FeatureGrid = () => {
    return (
        <div className="w-full">
            <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-3 md:gap-6 px-4 md:px-0 pb-1 md:pb-0 scrollbar-hide">
                {features.map((feature, index) => {
                    const isLast = index === features.length - 1;
                    return (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className={cn(
                                "flex items-center gap-2 md:gap-4 py-2.5 md:py-3 px-4 md:px-6 rounded-full shadow-lg transition-all duration-300 cursor-default group shrink-0",
                                isLast
                                    ? "bg-[#FD5A1A] text-white shadow-orange-500/20"
                                    : "bg-white text-slate-800 shadow-black/5 border border-slate-100 hover:bg-[#FD5A1A] hover:text-white"
                            )}
                        >
                            <div className={cn(
                                "w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                                isLast ? "bg-white/20" : "bg-blue-50 group-hover:bg-white/20"
                            )}>
                                {(() => {
                                    const Icon = feature.icon;
                                    return (
                                        <Icon className={cn(
                                            "w-3.5 h-3.5 md:w-5 md:h-5 transition-colors duration-300",
                                            isLast ? "text-white" : "text-blue-600 group-hover:text-white"
                                        )} />
                                    );
                                })()}
                            </div>
                            <span className="text-xs md:text-base font-bold leading-tight whitespace-nowrap">
                                {feature.title}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};


