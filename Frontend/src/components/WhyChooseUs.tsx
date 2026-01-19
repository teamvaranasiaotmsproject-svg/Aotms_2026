import { motion } from "framer-motion";
import { useMemo } from "react";
import { useAcademyDifference } from "@/hooks/useAcademyDifference";
import { Skeleton } from "./ui/skeleton";
import { Sparkles } from "lucide-react";

const fallbackReasons = [
  {
    _id: "1",
    title: "Our Mission",
    description: "Empowering students with real-world IT skills and expert mentorship to bridge the gap between academics and industry in Vijayawada.",
    image: "/Why Choose us-1.jpg",
  },
  {
    _id: "2",
    title: "Our Vision",
    description: "To become the most trusted IT training institute in Vijayawada by transforming passionate learners into job-ready tech leaders.",
    image: "/Why Choose us-2.jpg",
  },
  {
    _id: "3",
    title: "Why Choose Us",
    description: "Cutting-edge courses, flexible learning, and 100% placement-focused support in Vijayawada—all in one place.",
    image: "/Why Choose us-3.jpg",
  },
];

export const WhyChooseUs = () => {
  const { data: rawReasons, isLoading } = useAcademyDifference();

  const reasons = useMemo(() => {
    if (!rawReasons || rawReasons.length === 0) return fallbackReasons;
    return rawReasons;
  }, [rawReasons]);

  if (isLoading) {
    return (
      <div className="py-20 container mx-auto px-4 text-center">
        <Skeleton className="h-10 w-64 mx-auto mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex flex-col items-center">
              <Skeleton className="w-[230px] h-[230px] rounded-full mb-8" />
              <Skeleton className="h-6 w-32 mb-3" />
              <Skeleton className="h-4 w-48" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="pt-0 md:pt-4 pb-12 md:pb-20 bg-background relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <motion.span
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/50 backdrop-blur-sm border border-blue-200 rounded-full uppercase tracking-widest shadow-sm"
          >

            {/* ICON — SOLID COLOR */}
            <Sparkles className="w-3.5 h-3.5 text-[#FD5A1A]" />

            {/* TEXT — GRADIENT */}
            <span className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">
              Why Choose AOTMS in Vijayawada
            </span>

          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 font-display text-slate-900">
            The Academy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">Difference</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            We're more than just a training center in Vijayawada. We're a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">career launchpad</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 pl-4 pr-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="w-[230px] h-[230px] rounded-full overflow-hidden border-[6px] border-background shadow-2xl shadow-primary/10 relative z-10 ring-1 ring-border"
                >
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </motion.div>
                {/* Decorative Ring */}
                <div className="absolute -inset-4 border-2 border-accent/30 rounded-full scale-90 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-display">
                {reason.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground font-medium leading-relaxed max-w-[240px]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
