import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Building2, TrendingUp, CheckCircle, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useState, useEffect } from "react";

const stats = [
  { number: "2000+", label: "Successful Trainees", icon: Users },
  { number: "15,485+", label: "Classes Completed", icon: TrendingUp },
  { number: "300+", label: "Placements In US(2022-2025)", icon: Building2 },
  { number: "10+", label: "Years of Experience in Industry-Focused Training", icon: Award },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower learners with real-world skills through hands-on training and expert mentorship, creating the next generation of tech leaders.",
    color: "blue"
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be a global leader in tech education by transforming passionate individuals into tomorrow's top professionals through innovation and excellence.",
    color: "purple"
  },
  {
    icon: Award,
    title: "Our Values",
    description: "Excellence in education, integrity in practice, innovation in teaching, and commitment to student success drive everything we do.",
    color: "orange"
  }
];

const features = [
  "Industry-aligned curriculum designed by experts",
  "Hands-on training with real-world projects",
  "Dedicated placement assistance and career support",
  "Flexible learning schedules for working professionals",
  "State-of-the-art learning infrastructure",
  "Lifetime access to course materials and updates"
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Data Analyst at TCS",
    course: "Data Science & AI",
    text: "The Academy of Tech Masters completely transformed my career. The hands-on projects and expert mentorship gave me the confidence to land my dream job within 3 months of course completion.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Arjun Reddy",
    role: "Full Stack Developer at Infosys",
    course: "Full Stack Development",
    text: "The curriculum is perfectly aligned with industry needs. The career guidance sessions and mock interviews were invaluable in preparing me for the job market.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Neha Patel",
    role: "DevOps Engineer at Wipro",
    course: "Cloud & DevOps",
    text: "The practical labs and real-world scenarios helped me understand complex cloud concepts easily. I cracked multiple interviews and got placed as a DevOps Engineer.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "Rajesh Kumar",
    role: "Cyber Security Analyst at HCL",
    course: "Cyber Security",
    text: "AOTMS gave me the competitive edge I needed. The training on latest tools and live vulnerability assessment projects were game changers for my career.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    name: "Sneha Gupta",
    role: "UI/UX Designer at Zomato",
    course: "UI/UX Design",
    text: "From wireframing to prototyping, the course covered everything. The design critiques and portfolio building sessions helped me land a job at a top product company.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
  {
    name: "Karthik Rao",
    role: "Python Developer at Tech Mahindra",
    course: "Python Full Stack",
    text: "I was from a non-IT background, but the step-by-step teaching methodology made coding easy for me. Today I am a confident developer working on enterprise applications.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "Ananya Desai",
    role: "Cloud Engineer at Capgemini",
    course: "Multi Cloud Engineering",
    text: "Learning AWS and Azure together gave me a huge advantage. The real-time projects on cloud migration were exactly what companies are looking for.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
  },
  {
    name: "Vikram Singh",
    role: "QA Automation Engineer at Accenture",
    course: "QA Automation",
    text: "The transition from manual to automation testing was seamless thanks to the expert trainers. Selenium and Java modules were taught in great depth.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"
  },
  {
    name: "Meera Nair",
    role: "React Developer at Mindtree",
    course: "MERN Stack",
    text: "Building a full-fledged e-commerce app during the course was the highlight. It helped me understand the entire development lifecycle and clear the technical rounds easily.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
  },
  {
    name: "Rohan Mehta",
    role: "AI Engineer at IBM",
    course: "Artificial Intelligence & ML",
    text: "The depth of the AI/ML curriculum is unmatched. From basic statistics to deep learning models, everything was covered with practical examples.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
  },
  {
    name: "Sanya Kaplan",
    role: "Business Analyst at Deloitte",
    course: "Data Analytics",
    text: "Mastering Power BI and SQL through AOTMS changed my career trajectory. I can now tell compelling stories with data, which is a crucial skill in my role.",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f1e?w=100&h=100&fit=crop"
  }
];

const TestimonialCarousel = () => {
  const plugins = useState(() => [Autoplay({ delay: 4000, stopOnInteraction: false })])[0];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    plugins
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
            <Quote className="w-4 h-4" />
            Student Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Hear From Our Alumni
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real stories from students who transformed their careers with AOTMS
          </p>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6 pb-12 cursor-grab active:cursor-grabbing">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6 min-w-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col relative group"
                >
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold group-hover:bg-blue-100 transition-colors">
                      {testimonial.course}
                    </span>
                  </div>

                  <p className="text-slate-600 leading-relaxed flex-1 italic">
                    "{testimonial.text}"
                  </p>

                  <Quote className="absolute bottom-6 right-6 w-12 h-12 text-blue-50 group-hover:text-blue-100 transition-colors rotate-180" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? "bg-blue-600 w-8" : "bg-blue-200 hover:bg-blue-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 text-xs md:text-sm font-bold uppercase tracking-widest shadow-sm mb-6 hover:shadow-md transition-shadow">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Empowering the Next Gen of Innovators
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.15] tracking-tight">
                Building Careers in <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                  Data & Technology
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                AOTMS is India's premier EdTech institution bridging the gap between academia and industry. We don't just teach coding; we engineer careers through hands-on mentorship, real-world application, and 100% Career & Placement Support for Qualified Candidates.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <a href="#values" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 w-full sm:w-auto">
                  Our Journey
                </a>
                <a href="/contact" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 hover:text-orange-500 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 w-full sm:w-auto">
                  Contact Us
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-bold text-slate-500 border-t border-slate-200 pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>ISO Certified Institute</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span>NASSCOM Licensed Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Microsoft Authorized</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative mx-auto w-full max-w-lg lg:max-w-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-white aspect-[4/5] md:aspect-square">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/about-hero-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <stat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built on strong principles that guide our commitment to excellence in tech education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${value.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  value.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/about-director-v3.jpg"
                  alt="Mr. Ameen Sayyed - Founder & CEO"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-1">Mr.Sayyed Ameenmuddin</h3>
                  <p className="text-blue-200 font-medium">Founder & CEO</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-200 rounded-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
                <Building2 className="w-4 h-4" />
                Leadership
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Founded by Industry Veterans with Proven Track Record
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our leadership team brings together decades of experience from top-tier technology companies.
                We understand the industry's pulse and have designed our programs to bridge the gap between
                academic learning and real-world application.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials with Autoplay Carousel */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 2500+ students who have successfully launched their tech careers with AOTMS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/course/ai-ml"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:scale-105"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-xl hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;