"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
    rating?: number;
}

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{ translateY: "-50%" }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[...new Array(2)].map((_, index) => (
                    <React.Fragment key={index}>
                        {props.testimonials.map(({ text, image, name, role, rating = 5 }, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl border-2 border-slate-100 bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-100 transition-all duration-300 w-full max-w-xs group"
                            >
                                <div className="flex gap-0.5 mb-4">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star
                                            key={starIndex}
                                            className={cn(
                                                "w-4 h-4",
                                                starIndex < rating
                                                    ? "fill-orange-400 text-orange-400"
                                                    : "fill-slate-200 text-slate-200"
                                            )}
                                        />
                                    ))}
                                </div>

                                <p className="text-slate-600 font-medium italic text-sm leading-relaxed mb-6">"{text}"</p>

                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            width={44}
                                            height={44}
                                            src={image}
                                            alt={name}
                                            className="h-11 w-11 rounded-full object-cover transition-all duration-300 ring-2 ring-slate-100 group-hover:ring-blue-100"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-slate-900">{name}</h4>
                                        <p className="text-[10px] text-blue-600 font-black uppercase tracking-wider">{role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};
