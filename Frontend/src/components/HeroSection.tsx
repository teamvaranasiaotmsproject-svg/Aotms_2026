import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { CountUpNumber } from "./CountUpNumber";

import axios from "axios";

// Import Carousel Images (Fallback)


const fallbackImages: string[] = [];

interface HeroImage {
  imageUrl: string;
}

const trustStats = [
  { icon: Users, value: 2000, suffix: "+", label: "Students Trained" },
  { icon: Award, value: 50, suffix: "+", label: "Workshops" },
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
];

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroImages, setHeroImages] = useState<string[]>(fallbackImages);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const res = await axios.get('https://aotms-2026.onrender.com/api/hero');
        if (res.data && res.data.length > 0) {
          // Map backend objects to just image URLs
          const urls = res.data.map((item: HeroImage) => item.imageUrl);
          setHeroImages(urls);
        }
      } catch (error) {
        console.error("Failed to fetch hero images", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[100dvh] pt-28 md:pt-32 lg:pt-36 pb-12 lg:pb-16 flex items-center overflow-hidden bg-background">
      {/* Modern Background Elements - Subtle & Professional */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top Right Gradient Orb - Softened */}
        <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-primary/15 to-blue-500/10 blur-[100px]" />

        {/* Bottom Left Gradient Orb - Softened */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-accent/15 to-orange-500/10 blur-[90px]" />

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">

          {/* Left Column: Content */}
          <div className="flex flex-col gap-6 max-w-2xl lg:max-w-3xl">
            {/* Main Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-4xl xl:text-5xl tracking-tight text-foreground leading-[1.1] mb-4 lg:mb-6">
              Become <span className="text-primary whitespace-nowrap">Job-Ready</span> in 90 Days with Expert-Led IT Training In
              <span className="text-accent relative inline-block mt-1 ml-2">
                Vijayawada
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-accent opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-sans">
              Master AI, Cloud, DevOps & Full Stack development with real-world projects and industry-recognized certification.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  const element = document.getElementById('courses');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white transition-colors bg-accent rounded-md hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 shadow-lg shadow-accent/20 w-full sm:w-auto"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button
                className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-primary transition-colors bg-primary/5 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 border border-primary/20 w-full sm:w-auto"
              >
                <PlayCircle className="mr-2 w-5 h-5 text-accent" />
                Book a Free Demo Class
              </button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-12 pt-8 border-t border-border mt-4 w-full text-center sm:text-left">
              {trustStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 text-left">
                  <div className="p-2 rounded-full bg-slate-100 text-black transform transition-transform hover:scale-110 duration-300">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl md:text-4xl font-bold text-primary font-display flex items-baseline tracking-tight leading-none">
                      <CountUpNumber end={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mt-0.5 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual (Slider) */}
          <div className="relative flex items-center justify-center lg:justify-end">

            {/* Professional Background Design - Enhanced but lighter */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 rounded-full blur-[60px] -z-20 pointer-events-none" />

            {/* Wrapper for Image and tight decorations */}
            <div className="relative w-full max-w-sm md:max-w-[400px] lg:max-w-md xl:max-w-lg aspect-square">
              {/* Decorative Layers - Now scoped to image size */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-6 scale-95 -z-15 transition-transform duration-500 hover:rotate-3" />
              <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-3xl transform rotate-6 scale-105 -z-10" />
              <div className="absolute inset-0 border-2 border-dashed border-accent/30 rounded-3xl transform -rotate-3 scale-110 -z-10" />

              {/* Floating Orbs - Scoped to image area */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse -z-10" />
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-primary/20 rounded-full blur-xl -z-10" />

              {/* Slider Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white/50 bg-slate-100">
                <AnimatePresence mode="wait">
                  {heroImages && heroImages.length > 0 ? (
                    <motion.img
                      key={currentImageIndex}
                      src={heroImages[currentImageIndex] || ""}
                      alt="Institute Gallery"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                      <span className="text-xs font-mono">NO_IMAGE_DATA</span>
                    </div>
                  )}
                </AnimatePresence>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating "Excellence" Card - Reduced Size */}
              <div className="absolute -bottom-4 -left-4 bg-card p-2.5 rounded-lg shadow-xl border border-border max-w-[160px] hidden md:block z-20">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold font-display text-foreground leading-none">100%</div>
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground font-medium leading-[1.1]">
                  Career & Placement Support for Qualified Candidates
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
