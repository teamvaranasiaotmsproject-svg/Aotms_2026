import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

interface FeedbackData {
    _id: string;
    name: string;
    role: string;
    message: string;
    rating: number;
}

export const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<(Testimonial & { rating: number })[]>([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/feedback`);
                const mappedData = res.data.map((item: FeedbackData) => ({
                    text: item.message,
                    image: `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random&color=fff`,
                    name: item.name,
                    role: item.role || "Student",
                    rating: item.rating
                }));
                // If no data, fall back to some static or keep empty. The user asked for "original data showing".
                setTestimonials(mappedData);
            } catch (error) {
                console.error("Failed to fetch testimonials:", error);
            }
        };

        fetchFeedback();
    }, []);

    const firstColumn = testimonials.slice(0, Math.ceil(testimonials.length / 3));
    const secondColumn = testimonials.slice(Math.ceil(testimonials.length / 3), Math.ceil(2 * testimonials.length / 3));
    const thirdColumn = testimonials.slice(Math.ceil(2 * testimonials.length / 3));

    if (testimonials.length === 0) return null; // Or return a loading state/placeholder

    return (
        <section className="bg-background pt-4 md:pt-8 pb-8 md:pb-12 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-8 text-center"
                >
                    <div className="mb-4">
                        <span className="text-xs font-bold tracking-widest uppercase text-primary border border-primary/20 py-1.5 px-4 rounded-full bg-primary/5">
                            Alumni Reviews
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                        Student <span className="text-primary">Honest</span> <span className="text-orange-500">Reviews</span>
                    </h2>
                    <p className="section-subheading mt-4">
                        Read honest reviews from our Verified Students.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 md:gap-8 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[800px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block mt-20" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
};
