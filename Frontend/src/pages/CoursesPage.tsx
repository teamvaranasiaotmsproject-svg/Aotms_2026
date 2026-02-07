import { useState } from "react";
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { useCourses } from "@/hooks/useCourses";
import { CourseCard } from "@/components/courses/CourseCard";
import {
  Search,
  Users,
  Laptop,
  Trophy,
  GraduationCap,
  Loader2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { CertificateShowcase } from "@/components/CertificateShowcase";

const CoursesPage = () => {
  const { data: courses, isLoading } = useCourses();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses?.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const stats = [
    { icon: Users, label: "Hiring Partners", value: "500+" },
    { icon: GraduationCap, label: "Placement Asst.", value: "100%" },
    { icon: Laptop, label: "Real Projects", value: "20+" },
    { icon: Trophy, label: "Alumni Network", value: "10k+" },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
          <p className="text-slate-500 font-bold animate-pulse">
            Loading Academy Courses...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col font-sans">
      <SEO
        title="Professional IT Courses"
        description="Explore job-ready IT training programs in Vijayawada. Master Full Stack Development, DevOps, AI, and more with AOTMS. 100% Placement Assistance."
        keywords="IT Courses Vijayawada, Full Stack training, DevOps certification, AI coaching, coding classes"
        canonical="https://aotms.in/courses"
      />
      <Header />

      {/* Blue Hero Section */}
      <section className="bg-[#0066CC] pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] opacity-5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent pointer-events-none" />

        {/* Subtle Orange Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] opacity-60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] opacity-40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto max-w-5xl text-center relative z-10 px-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[26px] md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight leading-[1.2] md:leading-[1.1]"
          >
            Advance Your Career with <br className="hidden md:block" />{" "}
            Industry-Standard Certification
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-xs md:text-lg font-medium max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed opacity-90 px-4"
          >
            Explore our comprehensive curriculum designed by industry experts.
            Gain practical skills, real-world project experience, and placement
            assistance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative flex items-center bg-white rounded-2xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] focus-within:ring-4 focus-within:ring-blue-400/30 transition-all group border-2 border-transparent focus-within:border-blue-300">
              <div className="pl-4 pr-2 md:pl-5">
                <Search className="h-5 w-5 text-blue-600 group-focus-within:scale-110 transition-transform" />
              </div>
              <input
                type="text"
                placeholder="Search Java, Python, UI/UX..."
                className="flex-1 h-11 md:h-14 bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none text-slate-900 font-bold text-[13px] md:text-lg placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-2 mr-1 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              )}
              <button className="hidden sm:flex items-center gap-2 bg-[#00388d] text-white px-8 py-0 h-11 md:h-14 rounded-xl font-black text-sm hover:bg-blue-800 transition-all shadow-lg active:scale-95 shrink-0">
                SEARCH
              </button>
            </div>

            {/* Mobile Quick Text */}
            <div className="mt-3 flex gap-2 justify-center sm:hidden overflow-x-auto pb-2 scrollbar-hide px-2">
              {["Java", "Python", "Cloud"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="whitespace-nowrap px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-wider"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10 md:-mt-14 mb-12 md:mb-16 px-4">
        <div className="container mx-auto max-w-5xl bg-white rounded-[32px] md:rounded-[40px] shadow-2xl shadow-blue-900/10 border border-slate-100 grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center p-4 md:p-6 text-center 
                                ${i === 0 ? "border-r border-b lg:border-b-0" : ""}
                                ${i === 1 ? "border-b lg:border-b-0 lg:border-x" : ""}
                                ${i === 2 ? "border-r lg:border-r-0 lg:border-l" : ""}
                                ${i === 3 ? "lg:border-l" : ""}
                                border-slate-50`}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-50 flex items-center justify-center mb-2 transition-transform hover:scale-110">
                <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </div>
              <span className="text-lg md:text-2xl font-black text-slate-900 leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-slate-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Listing */}
      <section className="container mx-auto px-4 pb-16 md:pb-24 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6 border-b border-slate-100 pb-6 md:pb-8">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                <div className="h-6 md:h-8 w-1 bg-blue-600 rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Professional Training Programs in Vijayawada
                </h2>
              </div>
              <p className="text-slate-500 text-xs md:text-sm font-semibold md:ml-4">
                Browse our industry-recognized courses
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-100 shadow-sm self-start">
              <span className="text-blue-600 font-black text-base md:text-lg leading-none">
                {filteredCourses?.length || 0}
              </span>
              <span className="text-slate-400 text-[9px] md:text-[11px] font-black uppercase tracking-wider">
                Courses Available
              </span>
            </div>
          </div>

          {filteredCourses && filteredCourses.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredCourses.map((course) => (
                <motion.div
                  key={course._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  layout
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-24 bg-white rounded-[40px] border border-dashed border-slate-200">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                No courses found matching "{searchQuery}"
              </h3>
              <p className="text-slate-500 font-medium">
                Try checking your spelling or search for broader keywords like
                "Java" or "Stack".
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Certificate Showcase Section */}
      <CertificateShowcase />

      <Footer />
    </div>
  );
};

export default CoursesPage;
