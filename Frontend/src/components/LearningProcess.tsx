import { BookOpen, Terminal, Laptop, Briefcase, LucideIcon, ArrowRight, Sparkles } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bgImage: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Strong Fundamentals",
    description: "Industry-aligned concepts explained clearly from basics in Vijayawada",
    icon: BookOpen,
    bgImage: "/images/fundamentals.jpg"
  },
  {
    number: "02",
    title: "Hands-On Practice",
    description: "Daily labs, tasks, and mentor-guided practice in Vijayawada",
    icon: Terminal,
    bgImage: "/images/hands-on.png"
  },
  {
    number: "03",
    title: "Real-Time Projects",
    description: "Build resume-ready projects based on real scenarios in Vijayawada",
    icon: Laptop,
    bgImage: "/images/real-time-projects.png"
  },
  {
    number: "04",
    title: "Career & Placement",
    description: "Mock interviews, resume help, and job assistance in Vijayawada",
    icon: Briefcase,
    bgImage: "/images/career-placement.jpg"
  }
];

export const LearningProcess = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0075CF] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-2 fill-current" />
            Our Learning Model in Vijayawada
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 font-display tracking-tight leading-[1.15]">
            How Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">Training Unfolds in Vijayawada</span>
          </h2>

          <p className="text-base md:text-lg text-slate-500 mt-4 leading-relaxed font-medium">
            A structured path designed to take you from a beginner to a <span className="text-[#0075CF] font-bold">Job-Ready Professional in Vijayawada</span>.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative group overflow-hidden rounded-2xl h-[320px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* 1. Top Image Banner */}
              <div className="h-[140px] w-full overflow-hidden shrink-0 relative">
                <img
                  src={step.bgImage}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* 2. Floating Number Circle */}
              <div className="absolute top-[110px] left-6 z-20">
                <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-50 p-1">
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-[#0075CF] text-white font-bold text-lg shadow-inner">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* 3. Content Area */}
              <div className="px-6 pt-12 pb-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0075CF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Subtle Icon Decor */}
                <step.icon className="absolute bottom-4 right-4 w-12 h-12 text-slate-100 group-hover:text-blue-50 transition-colors -rotate-12" strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => window.location.href = '/courses'}
            className="inline-flex items-center justify-center h-14 px-10 text-lg font-bold text-white transition-all bg-[#0075CF] rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25 ring-offset-2 focus:ring-2 focus:ring-blue-500"
          >
            <span className="ml-2">Start Your Journey in Vijayawada</span>
            <ArrowRight className="w-6 h-6 ml-2" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};
