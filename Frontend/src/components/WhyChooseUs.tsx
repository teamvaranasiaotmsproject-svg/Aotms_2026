import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

interface DifferenceItem {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const fallbackReasons = [
  {
    _id: "1",
    title: "Our Mission",
    description: "Empowering students with real-world IT skills and expert mentorship to bridge the gap between academics and industry.",
    image: "/Why Choose us-1.jpg",
  },
  {
    _id: "2",
    title: "Our Vision",
    description: "To become the most trusted IT training institute by transforming passionate learners into job-ready tech leaders.",
    image: "/Why Choose us-2.jpg",
  },
  {
    _id: "3",
    title: "Why Choose Us",
    description: "Cutting-edge courses, flexible learning, and 100% placement-focused support—all in one place.",
    image: "/Why Choose us-3.jpg",
  },
];

export const WhyChooseUs = () => {
  const [reasons, setReasons] = useState<DifferenceItem[]>(fallbackReasons);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/academy-difference`);
        if (res.data && res.data.length > 0) {
          setReasons(res.data);
        } else {
          // Attempt to seed if empty (optional auto-seed from frontend, or just valid fallback)
          // For now, we utilize fallback if empty to prevent broken UI
        }
      } catch (error) {
        console.error("Failed to fetch Academy Difference data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="pt-4 md:pt-10 pb-12 md:pb-20 bg-background relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase mb-3 border border-accent/20"
          >
            Why Choose AOTMS
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight mb-4 font-display">
            The Academy <span className="text-accent">Difference</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground font-semibold max-w-2xl mx-auto leading-relaxed">
            We're more than just a training center. We're a <span className="text-primary font-bold">career launchpad</span>.
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
