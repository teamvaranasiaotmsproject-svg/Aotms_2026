import { Header } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CompanyLogos } from "@/components/CompanyLogos";
import { AboutSection } from "@/components/AboutSection";
import { LearningProcess } from "@/components/LearningProcess";
import { ProfessionalPrograms } from "@/components/courses/ProfessionalPrograms";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CourseRequestSection } from "@/components/CourseRequestSection";
import { MentorsSection } from "@/components/MentorsSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Academy of Tech Masters | #1 IT Training Institute in Vijayawada</title>
        <meta name="description" content="Join Academy of Tech Masters for the best IT training in Vijayawada. Master Full Stack, DevOps, AI, and more with 100% placement support." />
        <meta name="keywords" content="IT Training Vijayawada, Coding Bootcamp, Software Courses, Placement Guarantee, AOTMS" />
        <link rel="canonical" href="https://aotms.com/" />
      </Helmet>
      <Header />
      <HeroSection />
      <CompanyLogos />
      <AboutSection />

      <LearningProcess />
      <ProfessionalPrograms />
      <WhyChooseUs />
      <CourseRequestSection />
      <MentorsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
