import { lazy, Suspense } from "react";
import { Header } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CompanyLogos } from "@/components/CompanyLogos";
import { Helmet } from "react-helmet-async";

// Lazy load below-the-fold components for better performance
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const LearningProcess = lazy(() => import("@/components/LearningProcess").then(m => ({ default: m.LearningProcess })));
const ProfessionalPrograms = lazy(() => import("@/components/courses/ProfessionalPrograms").then(m => ({ default: m.ProfessionalPrograms })));
const PerformanceBreakdown = lazy(() => import("@/components/PerformanceBreakdown").then(m => ({ default: m.PerformanceBreakdown })));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const CourseRequestSection = lazy(() => import("@/components/CourseRequestSection").then(m => ({ default: m.CourseRequestSection })));
const MentorsSection = lazy(() => import("@/components/MentorsSection").then(m => ({ default: m.MentorsSection })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

// Simple loading skeleton
const SectionLoader = () => (
  <div className="w-full py-12 flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Academy of Tech Masters | #1 IT Training Institute in Vijayawada</title>
        <meta name="description" content="Join Academy of Tech Masters for the best IT training in Vijayawada. Master Full Stack, DevOps, AI, and more with 100% placement support." />
        <meta name="keywords" content="IT Training Vijayawada, Coding Bootcamp, Software Courses, Placement Guarantee, AOTMS" />
        <link rel="canonical" href="https://aotms.com/" />
      </Helmet>

      {/* Above-the-fold: Load immediately */}
      <Header />
      <HeroSection />
      <CompanyLogos />

      {/* Below-the-fold: Lazy load for performance */}
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LearningProcess />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ProfessionalPrograms />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <PerformanceBreakdown />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CourseRequestSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <MentorsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
