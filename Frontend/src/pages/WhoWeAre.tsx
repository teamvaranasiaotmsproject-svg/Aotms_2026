import { Header } from "@/components/navbar/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Building2, TrendingUp, CheckCircle, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useState, useEffect } from "react";
import { PerformanceBreakdown } from "@/components/PerformanceBreakdown";
import { SEO } from "@/components/SEO";
import ameenImg from "@/assets/ameen.jpeg";

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
  },
  {
    name: "Arjun Reddy",
    role: "Full Stack Developer at Infosys",
    course: "Full Stack Development",
    text: "The curriculum is perfectly aligned with industry needs. The career guidance sessions and mock interviews were invaluable in preparing me for the job market.",
  },
  {
    name: "Neha Patel",
    role: "DevOps Engineer at Wipro",
    course: "Cloud & DevOps",
    text: "The practical labs and real-world scenarios helped me understand complex cloud concepts easily. I cracked multiple interviews and got placed as a DevOps Engineer.",
  },
  {
    name: "Rajesh Kumar",
    role: "Cyber Security Analyst at HCL",
    course: "Cyber Security",
    text: "AOTMS gave me the competitive edge I needed. The training on latest tools and live vulnerability assessment projects were game changers for my career.",
  },
  {
    name: "Sneha Gupta",
    role: "UI/UX Designer at Zomato",
    course: "UI/UX Design",
    text: "From wireframing to prototyping, the course covered everything. The design critiques and portfolio building sessions helped me land a job at a top product company.",
  },
  {
    name: "Karthik Rao",
    role: "Python Developer at Tech Mahindra",
    course: "Python Full Stack",
    text: "I was from a non-IT background, but the step-by-step teaching methodology made coding easy for me. Today I am a confident developer working on enterprise applications.",
  },
  {
    name: "Ananya Desai",
    role: "Cloud Engineer at Capgemini",
    course: "Multi Cloud Engineering",
    text: "Learning AWS and Azure together gave me a huge advantage. The real-time projects on cloud migration were exactly what companies are looking for.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
  },
  {
    name: "Vikram Singh",
    role: "QA Automation Engineer at Accenture",
    course: "QA Automation",
    text: "The transition from manual to automation testing was seamless thanks to the expert trainers. Selenium and Java modules were taught in great depth.",
  },
  {
    name: "Meera Nair",
    role: "React Developer at Mindtree",
    course: "MERN Stack",
    text: "Building a full-fledged e-commerce app during the course was the highlight. It helped me understand the entire development lifecycle and clear the technical rounds easily.",
  },
  {
    name: "Rohan Mehta",
    role: "AI Engineer at IBM",
    course: "Artificial Intelligence & ML",
    text: "The depth of the AI/ML curriculum is unmatched. From basic statistics to deep learning models, everything was covered with practical examples.",
  },
  {
    name: "Sanya Kaplan",
    role: "Business Analyst at Deloitte",
    course: "Data Analytics",
    text: "Mastering Power BI and SQL through AOTMS changed my career trajectory. I can now tell compelling stories with data, which is a crucial skill in my role.", image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f1e?w=100&h=100&fit=crop"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 backdrop-blur-sm border border-blue-200 text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] text-sm font-black uppercase tracking-widest mb-6">
            <Quote className="w-4 h-4 text-[#0075CF]" />
            Student Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">Alumni</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
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

export const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Who We Are - About Us"
        description="Learn about Academy of Tech Masters (AOTMS), India's premier EdTech institution in Vijayawada. Explore our mission, leadership, and success in tech training."
        keywords="AOTMS Vijayawada, about Academy of Tech Masters, Mr. Sayyed Ameenuddin, tech education Vijayawada"
        canonical="https://aotms.in/about-us"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-slate-50">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 backdrop-blur-sm border border-blue-200 text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] text-xs md:text-sm font-black uppercase tracking-widest shadow-sm mb-6 hover:shadow-md transition-shadow">
                <span className="w-2 h-2 rounded-full bg-[#FD5A1A] animate-pulse" />
                Empowering the Next Gen of Innovators
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.15] tracking-tight">
                Building Careers in <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">
                  Data & Technology
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                AOTMS is India's premier EdTech institution bridging the gap between academia and industry. We don't just teach coding; we engineer careers through hands-on mentorship, real-world application, and 100% Career & Placement Support for Qualified Candidates.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Link to="/events" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 w-full sm:w-auto">
                  Our Journey
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 hover:text-orange-500 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 w-full sm:w-auto">
                  Contact Us
                </Link>
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

      {/* Performance Breakdown Chart */}
      <PerformanceBreakdown />

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">Foundation</span>
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
                  src={ameenImg}
                  alt="Mr. Ameen Sayyed - Founder & CEO"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-1">Mr.Sayyed Ameenuddin</h3>
                  <p className="text-blue-200 font-medium mb-4">Founder & CEO</p>

                  {/* Social Media Icons */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.instagram.com/mr_ameen_sayyed?igsh=MWc4emNrMjNtdnNkeg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/ameen-sayyed-1567b6156?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.youtube.com/channel/UC5n8RN-p7ez3i39CCy85OWA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                      aria-label="YouTube"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
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
            <Link
              to="/courses"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:scale-105"
            >
              Explore Courses
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-xl hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
