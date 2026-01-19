import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useFeedback } from "@/hooks/useFeedback";
import { Skeleton } from "./ui/skeleton";
import { Sparkles } from "lucide-react";

export const Testimonials = () => {
    const { data: rawFeedback, isLoading } = useFeedback();

    const testimonials = useMemo(() => {
        if (!rawFeedback) return [];
        return rawFeedback.map((item) => ({
            text: item.message,
            image: `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random&color=fff`,
            name: item.name,
            role: item.role || "Student",
            rating: item.rating
        }));
    }, [rawFeedback]);

    const firstColumn = testimonials.slice(0, Math.ceil(testimonials.length / 4));
    const secondColumn = testimonials.slice(Math.ceil(testimonials.length / 4), Math.ceil(2 * testimonials.length / 4));
    const thirdColumn = testimonials.slice(Math.ceil(2 * testimonials.length / 4), Math.ceil(3 * testimonials.length / 4));
    const fourthColumn = testimonials.slice(Math.ceil(3 * testimonials.length / 4));

    if (isLoading) {
        return (
            <div className="py-20 container mx-auto px-4 text-center">
                <Skeleton className="h-10 w-64 mx-auto mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Skeleton className="h-64 rounded-2xl" />
                    <Skeleton className="h-64 rounded-2xl hidden md:block" />
                    <Skeleton className="h-64 rounded-2xl hidden lg:block" />
                </div>
            </div>
        );
    }

    if (testimonials.length === 0) return null;

    return (
        <section className="bg-slate-50/50 pt-12 md:pt-20 pb-16 md:pb-24 relative overflow-hidden w-full border-t border-slate-100">
            <div className="w-full px-4 sm:px-8 lg:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center w-full mx-auto mb-8 text-center"
                >
                    <div className="mb-4">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/50 backdrop-blur-sm border border-blue-200 rounded-full uppercase tracking-widest shadow-sm">

                            {/* ICON — SOLID COLOR */}
                            <Sparkles className="w-3.5 h-3.5 text-[#FD5A1A]" />

                            {/* TEXT — GRADIENT */}
                            <span className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">
                                What Our Alumni from Vijayawada Say
                            </span>

                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                        Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">Honest Reviews</span>
                    </h2>
                    <p className="section-subheading mt-4 text-slate-900 max-w-3xl">
                        Read honest reviews from our Verified Students in Vijayawada.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-4 md:gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[850px] overflow-hidden w-full">
                    <TestimonialsColumn testimonials={firstColumn} duration={14} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block mt-12" duration={18} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block mt-24" duration={16} />
                    <TestimonialsColumn testimonials={fourthColumn} className="hidden xl:block md:mt-8" duration={20} />
                </div>
            </div>
        </section>
    );
};
