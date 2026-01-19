import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, PlayCircle, Users, Award, Clock, ThumbsUp } from "lucide-react";
import axios from "axios";
import { CountUpNumber } from "./CountUpNumber";
import { CourseEnrollmentModal } from "@/components/ui/CourseEnrollmentModal";

const trustStats = [
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    label: "Students Trained",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Workshops",
  },
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
];

export const HeroSection = () => {
  const [heroImages, setHeroImages] = useState<string[]>(["/Andra-hackathon-2025_Data_AI_d2uquj.jpg"]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [enrollmentSource, setEnrollmentSource] = useState("");

  const handleOpenEnrollment = (source: string) => {
    setEnrollmentSource(source);
    setIsEnrollmentOpen(true);
  };

  const shouldReduceMotion = useReducedMotion();
  const isMobile = useMemo(() => typeof window !== 'undefined' && window.innerWidth < 768, []);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/hero`
        );
        if (Array.isArray(res.data)) {
          const apiImages = res.data.map((i: { imageUrl: string }) => i.imageUrl);
          setHeroImages(["/Andra-hackathon-2025_Data_AI_d2uquj.jpg", ...apiImages]);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchHeroImages();
  }, []);

  useEffect(() => {
    const autoTriggerTimer = setTimeout(() => {
      // Trigger immediately (500ms buffer for smooth UX)
      handleOpenEnrollment("Auto Popup - 50% Off");
    }, 500);

    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((p) => (p + 1) % heroImages.length);
    }, 4000);
    return () => {
      clearInterval(timer);
      clearTimeout(autoTriggerTimer);
    };
  }, [heroImages]);

  return (
    <section className="relative pt-28 md:pt-36 pb-12 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-primary/15 to-blue-500/10 blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-accent/15 to-orange-500/10 blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-8">

            {/* MOBILE HEADLINE */}
            <h1
              className="sm:hidden font-display font-bold tracking-tight text-foreground leading-[1.1] mt-8 text-[clamp(2.3rem,6vw,3rem)]"
            >
              Become <span className="text-[#0075CF]">Job-Ready</span> in 90 Days with
              Expert-Led IT Training in{" "}
              <span className="text-[#FD5A1A]">Vijayawada</span>
            </h1>


            {/* DESKTOP HEADLINE */}
            <h1 className="hidden sm:block font-display font-bold tracking-tight text-foreground leading-[1.1] text-4xl md:text-5xl lg:text-[3.5rem]">
              <span className="block">
                Become <span className="text-[#0075CF]">Job-Ready</span> in
              </span>

              <span className="block">
                90 Days with Expert-Led IT Training in{" "}
                <span className="text-[#FD5A1A] relative inline-block">
                  Vijayawada
                  <svg
                    className="absolute w-full h-3 -bottom-2 left-0 opacity-30"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
            </h1>



            {/* SUBTEXT */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
              Master AI, Cloud, DevOps & Full Stack development with real-world
              projects and industry-recognized certification in Vijayawada.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleOpenEnrollment("Start Journey - Hero Section")}
                className="inline-flex items-center justify-center h-11 px-8 text-sm font-medium text-white bg-[#FD5A1A] rounded-md hover:bg-[#0066b3] active:scale-95 transition-all"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>

              <button
                onClick={() => handleOpenEnrollment("Free Demo - Hero Section")}
                className="inline-flex items-center justify-center h-11 px-8 text-sm font-medium text-[#0075CF] bg-[#0075CF]/5 border border-[#0075CF]/20 rounded-md hover:bg-[#0075CF]/10 active:scale-95 transition-all"
              >
                <PlayCircle className="mr-2 w-4 h-4 text-orange-500" />
                Book a Free Demo Class
              </button>
            </div>

            <CourseEnrollmentModal
              isOpen={isEnrollmentOpen}
              onClose={() => setIsEnrollmentOpen(false)}
              source={enrollmentSource}
            />

            {/* STATS */}
            <div className="flex flex-wrap gap-6 pt-6 border-t">
              {trustStats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-black/5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">
                        <CountUpNumber end={s.value} suffix={s.suffix} />
                      </div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-[80px]" />
              <div className="relative w-full h-full p-2 rounded-[2rem] bg-gradient-to-br from-[#0075CF] via-white/20 to-[#FD5A1A] shadow-2xl">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#0075CF] via-transparent to-[#FD5A1A] blur-sm opacity-50" />
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-white/95 backdrop-blur-sm border border-white/20">
                  <AnimatePresence mode="wait">
                    {heroImages.length > 0 && (
                      <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt="Hero"
                        loading="eager"
                        initial={shouldReduceMotion || isMobile ? { opacity: 1 } : { opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={shouldReduceMotion || isMobile ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: shouldReduceMotion || isMobile ? 0.3 : 0.8 }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Refreshed Hero Section
