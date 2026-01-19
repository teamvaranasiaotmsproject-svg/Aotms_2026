import { ArrowRight } from "lucide-react";
import { TestimonialCarousel } from "./profile-card-testimonial-carousel";

import { Link } from "react-router-dom";

export const MentorsSection = () => {
  return (
    <section className="pt-12 md:pt-20 pb-16 md:pb-24 bg-background relative overflow-hidden w-full">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
            Learn from Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">Professional Industry Experts in Vijayawada</span>
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Our instructors are not just teachers; they are <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">seasoned professionals</span> from leading tech companies in Vijayawada and across the globe.
          </p>
        </div>

        <TestimonialCarousel />

        <div className="hidden"></div>
      </div>
    </section>
  );
};
