import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface RatingBadgeProps {
    rating: number;
    title: string;
    subtitle: string;
    className?: string;
}

export const RatingBadge = ({ rating, title, subtitle, className = "" }: RatingBadgeProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-4 bg-white border border-gray-100 p-2 pr-6 rounded-2xl shadow-xl shadow-gray-200/40 ${className}`}
        >
            <div className="flex items-center justify-center w-12 h-12 bg-[#008bf8]/5 rounded-xl">
                <Star className="w-6 h-6 fill-[#ff6b00] text-[#ff6b00]" />
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-black leading-tight">{rating}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{title}</span>
                </div>
                <span className="text-xs font-bold text-[#008bf8] tracking-tight">{subtitle}</span>
            </div>
        </motion.div>
    );
};
