import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Factory, Users, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Factory,
    title: "Industry-Focused Training",
    description: "Real-time tools & practical approach"
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Trainers with real industry experience"
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Resume, interviews & placements"
  }
];

export const AboutSection = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [10, -10]), { stiffness: 100, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section id="about" className="pt-6 md:pt-10 pb-6 md:pb-10 bg-background relative overflow-hidden border-t border-border/10">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Right Column - Content */}
          <div className="space-y-6 order-2 lg:order-2 text-center lg:text-left">
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-bold rounded-full uppercase tracking-widest shadow-sm">
                About Our training model
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-[1.15]">
              World-class education,<br className="hidden md:block" /> and the <span className="text-accent">Academy</span> difference.
            </h2>

            <p className="text-sm md:text-base text-muted-foreground mx-auto lg:mx-0 leading-relaxed font-semibold max-w-lg">
              Learn from industry experts, explore our success stories, and step into the future.
              We are a professional IT training institute focused on real-world skills,
              industry-level projects, and career outcomes.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  className="group bg-card p-4 rounded-xl border border-border/50 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-3 transition-colors duration-300 mx-auto lg:mx-0">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-snug">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => window.location.href = '/about-us'}
                className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white transition-colors bg-accent rounded-md hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 shadow-lg shadow-accent/20"
              >
                Know More About Us
              </button>
            </div>
          </div>

          {/* Left Column - Image */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative order-1 lg:order-1 flex items-center justify-center p-4 lg:p-8"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[3/4] preserve-3d"
            >
              {/* Decorative Background Elements - Clean & Geometric */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 rounded-2xl -z-20 transform -translate-x-2 -translate-y-2" />
              <div className="absolute top-4 left-4 w-full h-full bg-primary/5 rounded-2xl -z-10" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img
                  src="/about-director-v2.jpg"
                  alt="Academy Director - Leading Tech Training"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out contrast-110 saturate-110 brightness-105"
                />

                {/* Overlay Gradient for Text readability if needed, reduced opacity slightly */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50" />
              </div>

              {/* Professional Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl border-l-4 border-accent shadow-lg flex items-center justify-between gap-4">
                  <div>
                    <div className="text-2xl font-black text-primary leading-none">10+</div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1">Years of Excellence</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-right">
                    <div className="text-xs font-semibold text-foreground">Our Founder's Vision</div>
                    <div className="text-xs text-accent font-bold">Mr.Sayyed Ameenmuddin</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
