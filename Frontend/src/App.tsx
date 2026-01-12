import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, Suspense, lazy } from "react";

// Lazy Load Pages
const Index = lazy(() => import("./pages/Index"));
const CourseDetail = lazy(() => import("./pages/CourseDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
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

import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="w-16 h-16 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
  </div>
);

const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-orange-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Chatbot />
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/course/:slug" element={<CourseDetail />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/events" element={<Events />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/internships" element={<ComingSoon />} />
            <Route path="/resources" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
