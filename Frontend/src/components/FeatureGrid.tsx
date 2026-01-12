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
    { title: "Live Projects", icon: Cpu, color: "text-blue-600" },
    { title: "Aotms Portal", icon: Globe, color: "text-blue-600" },
    { title: "GitHub Projects & LinkedIn", icon: Github, color: "text-blue-600" },
    { title: "Job Alerts", icon: Bell, color: "text-blue-600" },
    { title: "Skills Development", icon: Zap, color: "text-blue-600" },
    { title: "Free Aptitude Classes", icon: BookOpen, color: "text-blue-600" },
    { title: "Corporate Level Interactions", icon: Users, color: "text-blue-600" },
    { title: "80% Practical Lab, Theory 20%", icon: Terminal, color: "text-blue-600" },
];

export const FeatureGrid = () => {
    return (
        <div className="w-full">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-7xl mx-auto">
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
                                "flex items-center gap-4 py-3 px-6 rounded-full shadow-lg transition-all duration-300 cursor-default group",
                                isLast
                                    ? "bg-[#ff7a2d] text-white shadow-orange-500/20"
                                    : "bg-white text-slate-800 shadow-black/5 border border-white/20 hover:bg-[#ff7a2d] hover:text-white"
                            )}
                        >
                            <div className={cn(
                                "w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                                isLast ? "bg-white/20" : "bg-blue-50 group-hover:bg-white/20"
                            )}>
                                <feature.icon className={cn(
                                    "w-5 h-5 transition-colors duration-300",
                                    isLast ? "text-white" : "text-blue-600 group-hover:text-white"
                                )} />
                            </div>
                            <span className="text-sm md:text-base font-bold whitespace-nowrap">
                                {feature.title}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};


