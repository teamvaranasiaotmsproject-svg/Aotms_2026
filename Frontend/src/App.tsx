import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { motion, useMotionValue, MotionConfig } from "framer-motion";
import { useEffect, Suspense, lazy } from "react";

// Lazy Load Pages
const Index = lazy(() => import("./pages/Index"));
const CourseDetail = lazy(() => import("./pages/CourseDetailPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const Placements = lazy(() => import("./pages/Placements"));
const Hackathon = lazy(() => import("./pages/HackathonsPage"));
const Workshop = lazy(() => import("./pages/WorkshopsPage"));
const Cart = lazy(() => import("./pages/Cart"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage"));
const Events = lazy(() => import("./pages/EventsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const InternshipsPage = lazy(() => import("./pages/InternshipsPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

const Chatbot = lazy(() => import("./components/Chatbot"));
const LimitedTimeOffer = lazy(() => import("./components/LimitedTimeOffer"));

const queryClient = new QueryClient();

import { BrandLoader } from "@/components/ui/BrandLoader";

export const LoadingFallback = () => <BrandLoader />;

import ScrollToTop from "./components/ScrollToTop";
import { ScrollButtons } from "./components/ScrollButtons";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  // Don't render on small screens
  // We use CSS hidden md:block, but we can also return null if we want to be stricter.
  return (
    <motion.div
      className="fixed top-0 left-0 w-3.5 h-3.5 bg-orange-500 rounded-full pointer-events-none z-[99999] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      transition={{
        duration: 0,
      }}
    />
  );
};

const App = () => {
  useEffect(() => {
    // Backend Warm-up / Anti-Cold-Start ping
    const warmUpBackend = async () => {
      try {
        await fetch(`${import.meta.env.VITE_API_URL}/api/health`).catch(
          () => { },
        );
      } catch (e) {
        // Silent fail
      }
    };
    warmUpBackend();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CustomCursor />
          <HashRouter
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
          >
            <Suspense fallback={null}>
              <Chatbot />
              <LimitedTimeOffer />
            </Suspense>
            <ScrollButtons />
            <ScrollToTop />
            <Toaster />
            <Sonner />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/course/:slug" element={<CourseDetail />} />
                <Route path="/what-we-do" element={<WhatWeDo />} />
                <Route path="/about-us" element={<WhoWeAre />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetailPage />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/hackathon" element={<Hackathon />} />
                <Route path="/workshop" element={<Workshop />} />
                <Route path="/events" element={<Events />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/careers" element={<CareersPage />} />

                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/internships" element={<InternshipsPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </HashRouter>
        </TooltipProvider>
      </QueryClientProvider>
      <SpeedInsights />
    </MotionConfig>
  );
};

export default App;
