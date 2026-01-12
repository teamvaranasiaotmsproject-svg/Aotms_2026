import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";

const placementFeatures = [
  { id: "01", title: "Resume Building & Review", content: "Our experts work with you to craft a professional, ATS-friendly resume that highlights your skills, projects, and achievements. We provide multiple rounds of feedback until your profile stands out." },
  { id: "02", title: "Mock Interviews", content: "Receive comprehensive interview preparation through simulated technical and HR rounds. Our mentors provide detailed feedback on your problem-solving, communication, and technical depth." },
  { id: "03", title: "Company Tie-ups", content: "Benefit from our exclusive network of 50+ hiring partners, from innovative startups to global MNCs. We facilitate direct placement drives and priority screening for our students." },
  { id: "04", title: "Profile Building", content: "Go beyond the resume by optimizing your LinkedIn and GitHub profiles. We help you build a professional brand that attracts opportunities organically from industry leaders." },
];

const stats = [
  { number: "300+", label: "Students Placed" },
  { number: "50+", label: "Hiring Partners" },
  { number: "8.5 LPA", label: "Average Package" },
  { number: "18 LPA", label: "Highest Package" },
];

export const PlacementsSection = () => {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section id="placements" className="py-12 md:py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">

          <div className="relative space-y-8">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative group">
              <img
                src="/Placement.png"
                alt="Career Support & Placements"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl p-4 text-center border border-border/50"
                >
                  <p className="text-xl md:text-2xl font-bold text-primary mb-1">{stat.number}</p>
                  <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="section-heading">
                Dedicated Placement Support
              </h2>
              <p className="section-subheading mt-4">
                From resume building to salary negotiation, we provide end-to-end career assistance to ensure you land your dream job.
              </p>
            </div>

            <div className="space-y-2 pt-4">
              {placementFeatures.map((item) => (
                <div
                  key={item.id}
                  className="bg-card border border-border/50 rounded-xl px-5 last:border-b-0 transition-shadow hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openId === item.id ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                      {openId === item.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openId === item.id ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground text-sm pb-5">
                      {item.content}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
