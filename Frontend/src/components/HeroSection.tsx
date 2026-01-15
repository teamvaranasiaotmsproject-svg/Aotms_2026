import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CountUpNumber } from "./CountUpNumber";

const trustStats = [
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    label: "Students Trained",
    color: "text-black-500",
    bgColor: "bg-black-500/10",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Workshops",
    color: "text-black-500",
    bgColor: "bg-black-500/10",
  },
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    color: "text-black-500",
    bgColor: "bg-black-500/10",
  },
];

export const HeroSection = () => {
  const [heroImages, setHeroImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/hero`);
        if (response.data && Array.isArray(response.data)) {
          const urls = response.data.map((item: { imageUrl: string }) => item.imageUrl);
          setHeroImages(urls);
        }
      } catch (error) {
        console.error("Error fetching hero images:", error);
      }
    };
    fetchHeroImages();
  }, []);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages]);

  return (
    <section className="relative pt-28 md:pt-40 pb-12 flex items-center overflow-hidden bg-background">
      {/* Modern Background Elements - Subtle & Professional */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top Right Gradient Orb - Softened */}
        <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-primary/15 to-blue-500/10 blur-[100px]" />

        {/* Bottom Left Gradient Orb - Softened */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-accent/15 to-orange-500/10 blur-[90px]" />

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center w-full">

          {/* Left Column: Content */}
          <div className="flex flex-col gap-9 w-full lg:min-w-[500px] xl:min-w-[500px] z-20">
            {/* Main Headline */}
            <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.2] mb-6">
              <span className="block">Become <span className="text-[#0075CF]">Job-Ready</span> in</span>
              <span className="block">90 Days with Expert-Led</span>
              <span className="block">IT Training In</span>
              <span className="block"><span className="text-[#FD5A1A] relative inline-block">
                Vijayawada
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-accent opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span></span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-sans">
              Master AI, Cloud, DevOps & Full Stack development with real-world projects and industry-recognized certification.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#courses"
                className="inline-flex items-center justify-center h-11 px-8 text-sm font-medium text-white transition-colors bg-[#FD5A1A] rounded-md hover:bg-[#0066b3] focus:outline-none focus:ring-2 focus:ring-[#0075CF]/50 focus:ring-offset-2 shadow-lg shadow-[#0075CF]/20 w-full sm:w-auto"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <button
                className="inline-flex items-center justify-center h-11 px-8 text-sm font-medium text-[#0075CF] transition-colors bg-[#0075CF]/5 rounded-md hover:bg-[#0075CF]/10 focus:outline-none focus:ring-2 focus:ring-[#0075CF]/50 focus:ring-offset-2 border border-[#0075CF]/20 w-full sm:w-auto"
              >
                <PlayCircle className="mr-2 w-4 h-4 text-orange-500" />
                Book a Free Demo Class
              </button>
            </div>

            {/* Trust Stats - Redesigned & Compact */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 pt-6 border-t border-border mt-2 w-full">
              {trustStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${stat.bgColor} ${stat.color} ring-1 ring-inset ring-black/5`}>
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-xl sm:text-2xl font-bold font-display flex items-baseline tracking-tight leading-none ${stat.color}`}>
                        <CountUpNumber end={stat.value} suffix={stat.suffix} />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual (Slider) */}
          <div className="relative flex items-center justify-center lg:justify-end z-10 pl-0 lg:pl-10">
            {/* Slider Container Wrapper */}
            <div className="relative w-full max-w-md lg:max-w-xl aspect-square flex items-center justify-center">

              {/* Background Animations */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 rounded-full blur-[80px] -z-20" />

              {/* Decorative Animated Layers - 2nd Image Style (Dashed/Rotated) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-[3px] border-dashed border-primary/20 rounded-full -z-15 animate-[spin_20s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full -z-20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-accent/5 rounded-[2.5rem] -z-10 rotate-6" />

              {/* Actual Image Slider */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-slate-100 ring-1 ring-slate-900/5 z-10">
                <AnimatePresence mode="wait">
                  {heroImages.length > 0 && (
                    <motion.img
                      key={currentImageIndex}
                      src={heroImages[currentImageIndex]}
                      alt="Institute Gallery"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </AnimatePresence>
                {/* Light Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating "Excellence" Card */}
              <div className="absolute -bottom-4 -left-2 bg-white p-3 rounded-xl shadow-xl border border-slate-100 hidden md:block z-30 animate-[bounce_3s_infinite]">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-full bg-[#FD5A1A]/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#FD5A1A]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold font-display text-slate-900">100%</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-bold whitespace-nowrap leading-tight">
                  Career Support & Placement Assistance
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
