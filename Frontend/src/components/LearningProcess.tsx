import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Terminal, Laptop, Briefcase, LucideIcon, Rocket } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Strong Fundamentals",
    description: "Industry-aligned concepts explained clearly from basics",
    icon: BookOpen
  },
  {
    number: "02",
    title: "Hands-On Practice",
    description: "Daily labs, tasks, and mentor-guided practice",
    icon: Terminal
  },
  {
    number: "03",
    title: "Real-Time Projects",
    description: "Build resume-ready projects based on real scenarios",
    icon: Laptop
  },
  {
    number: "04",
    title: "Career & Placement",
    description: "Mock interviews, resume help, and job assistance",
    icon: Briefcase
  }
];

export const LearningProcess = () => {
  return (
    <section className="py-8 md:py-12 lg:py-19 bg-background relative overflow-hidden">
      {/* Background Rocket Animation */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 lg:right-40 text-primary/20 pointer-events-none -z-0"
      >
        <Rocket size={400} strokeWidth={0.5} />
      </motion.div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            Our Learning Model
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-foreground font-display tracking-tight leading-[1.15]">
            How Your Training <span className="text-primary">Unfolds</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed font-medium">
            A structured path designed to take you from a beginner to a <span className="text-primary font-bold">Job-Ready Professional</span>.
          </p>
        </div>

        {/* Process Steps with Connecting Line */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Connected Blue Arrow Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 pointer-events-none -z-10">
            {/* The Line */}
            <div className="w-full h-full border-t-2 border-dashed border-primary relative">
              {/* Arrow Heads between steps */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[33%] text-primary bg-background px-1">
                <ArrowRight className="w-6 h-6" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[66%] text-primary bg-background px-1">
                <ArrowRight className="w-6 h-6" />
              </div>
              {/* End Arrow */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 text-primary bg-background px-1">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>

          {steps.map((step, index) => (
            <div key={step.number} className="group relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-card/60 backdrop-blur-sm border border-border/60 rounded-3xl p-6 lg:p-8 text-center hover:bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col items-center overflow-hidden"
              >
                {/* Background Watermark Icon */}
                <div className="absolute -bottom-6 -right-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-500 transform rotate-[-10deg] scale-100 group-hover:scale-110 pointer-events-none">
                  <step.icon strokeWidth={1} className="w-32 h-32" />
                </div>

                {/* Step Number Circle */}
                <div className="mb-6 relative">
                  <div className="w-20 h-20 rounded-full bg-background border-4 border-card shadow-lg flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/20">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary group-hover:to-primary text-primary group-hover:text-white transition-all duration-300">
                      <span className="text-2xl font-black font-display">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 font-display group-hover:text-primary transition-colors duration-300 relative z-10">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed font-medium relative z-10">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => window.location.href = '/course/ai-ml'}
            className="inline-flex items-center justify-center h-14 px-10 text-lg font-bold text-white transition-all bg-accent rounded-full hover:bg-accent/90 hover:scale-105 active:scale-95 shadow-lg shadow-accent/25 ring-offset-2 focus:ring-2 focus:ring-accent"
          >
            Start Your Journey
            <ArrowRight className="w-6 h-6 ml-2" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};
