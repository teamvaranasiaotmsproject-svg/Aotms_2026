import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Clock, Users, BookOpen, ArrowRight, Star, CheckCircle2, ChevronDown,
    Award, Monitor, Briefcase, TrendingUp, MessageSquare, ChevronLeft,
    Linkedin, Megaphone, FileText, MessageCircle, Unlock, Video, Handshake, Globe, Layers, Bot, Coffee, Github, Cpu,
    LayoutDashboard,
    Bell,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

import { useCourseBySlug, useCourses } from "@/hooks/useCourses";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseDetailHero } from "./CourseDetailsHero";
import { useCartStore } from "@/store/cartStore";
import {
    getCourseSpecificLogos,
    getProgramDetails,
    getCourseOutcomes,
    getCourseCustomContent,
    getCourseFeatures,
    getCourseTheme,
    getCourseToolsAndTechnologies,
    getCourseObjectives,
    getCourseCapstoneProjects,
    getCourseLearningOutcomes,
    getCourseCertifications,
    getCourseCareerRoles,
    getCourseHiringCompanies,
} from "../data/courseMetadata";

// Simple ShowMore Component
interface ShowMoreProps {
    children: React.ReactNode;
    initialHeight?: string;
}

const ShowMore = ({ children, initialHeight = "300px" }: ShowMoreProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative">
            <div
                className={cn("overflow-hidden transition-all duration-500")}
                style={{ maxHeight: isExpanded ? "2000px" : initialHeight }}
            >
                {children}
            </div>
            {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
            <div className="mt-4 text-center">
                <Button
                    variant="ghost"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-bold"
                >
                    {isExpanded ? "Show Less" : "Show More"}
                    <ChevronDown className={cn("ml-2 w-4 h-4 transition-transform", isExpanded && "rotate-180")} />
                </Button>
            </div>
        </div>
    );
};

export default function CourseDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart);
    const { data: course, isLoading } = useCourseBySlug(slug || "");
    const { data: allCourses } = useCourses();
    const [activeModule, setActiveModule] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -50% 0px", threshold: 0.1 }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const handleEnroll = async () => {
        if (course) {
            // Transform Course to CartItem
            addToCart({
                id: course._id,
                name: course.title,
                price: parseFloat(course.price.replace(/[^0-9.-]+/g, "")),
                image: course.image
            });
            toast.success("Course added to cart!");
            navigate("/cart");
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Course not found</h2>
                    <Link to="/courses">
                        <Button>Browse All Courses</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const programDetails = getProgramDetails(course.category || course.title);
    const outcomes = getCourseOutcomes(course.category || course.title);
    const logos = getCourseSpecificLogos(course.category || course.title);
    const customSections = getCourseCustomContent(course.title, course.category || "");
    const features = getCourseFeatures(course.category || course.title);
    const theme = getCourseTheme(course.category || course.title);
    const toolsData = getCourseToolsAndTechnologies(course.title, course.category || "");
    const objectives = getCourseObjectives(course.title, course.category || "");
    const capstoneProjects = getCourseCapstoneProjects(course.title, course.category || "");
    const learningOutcomes = getCourseLearningOutcomes(course.title, course.category || "");
    const certifications = getCourseCertifications(course.title, course.category || "");
    const careerRoles = getCourseCareerRoles(course.title, course.category || "");
    const hiringCompanies = getCourseHiringCompanies(course.title, course.category || "");

    // Icon mapping matching metadata feature icon strings
    const IconMap: any = {
        Award, Linkedin, Briefcase, Megaphone, FileText, MessageSquare,
        MessageCircle, Unlock, Video, Handshake, TrendingUp, Globe
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            {/* SEO Meta Tags */}
            <Helmet>
                <title>{course.title} Course | Academy of Tech Masters</title>
                <meta name="description" content={`Learn ${course.title} with expert training. ${course.duration} course with placement assistance and certification.`} />
                <meta property="og:title" content={`${course.title} | AOTMS`} />
                <meta property="og:image" content={course.image} />
                <link rel="canonical" href={`https://aotms.in/course/${slug}`} />
            </Helmet>

            {/* Hero */}
            <CourseDetailHero
                course={{
                    title: course.title,
                    category: course.category || "Professional Training",
                    image: course.image,
                    duration: `${programDetails.duration} Days`
                }}
                handleEnroll={handleEnroll}
            />

            {/* Highlights Bar */}
            <div className="bg-[#0075CF] py-8 border-y border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {/* Internship Projects */}
                        <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-default min-w-[200px] justify-center sm:justify-start">
                            <Briefcase className="w-5 h-5 text-[#0075CF]" />
                            <span className="font-bold text-slate-800 text-sm sm:text-base">Hands-On Industry Projects</span>
                        </div>

                        {/* Recorded Videos */}
                        <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-default min-w-[200px] justify-center sm:justify-start">
                            <LayoutDashboard className="w-5 h-5 text-[#0075CF]" />
                            <span className="font-bold text-slate-800 text-sm sm:text-base">AOTMS Learning Portal</span>
                        </div>

                        {/* GitHub Projects Linked In */}
                        <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-default min-w-[200px] justify-center sm:justify-start">
                            <div className="flex gap-1">
                                <Github className="w-5 h-5 text-[#0075CF]" />
                                <Linkedin className="w-5 h-5 text-[#0075CF]" />
                            </div>
                            <span className="font-bold text-slate-800 text-sm sm:text-base">GitHub & LinkedIn Project Portfolio</span>
                        </div>

                        {/* Job Alerts */}
                        <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-default min-w-[200px] justify-center sm:justify-start">
                            <Bell className="w-5 h-5 text-[#0075CF]" />
                            <span className="font-bold text-slate-800 text-sm sm:text-base">Career & Job Alerts</span>
                        </div>

                        {/* Skills Development */}
                        <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-default min-w-[200px] justify-center sm:justify-start">
                            <TrendingUp className="w-5 h-5 text-[#0075CF]" />
                            <span className="font-bold text-slate-800 text-sm sm:text-base">In-Demand Skill Developmentt</span>
                        </div>

                        {/* Free Aptitude Classes */}
                        <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-default min-w-[200px] justify-center sm:justify-start">
                            <BookOpen className="w-5 h-5 text-[#0075CF]" />
                            <span className="font-bold text-slate-800 text-sm sm:text-base">Free Aptitude Training</span>
                        </div>

                        {/* Corporate Level Interactions */}
                        <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-default min-w-[200px] justify-center sm:justify-start">
                            <Users className="w-5 h-5 text-[#0075CF]" />
                            <span className="font-bold text-slate-800 text-sm sm:text-base">Corporate-Level Industry Interactions</span>
                        </div>

                        {/* Practical Lab */}
                        <div className="flex items-center gap-3 bg-orange-500 rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-default min-w-[200px] justify-center sm:justify-start">
                            <Monitor className="w-5 h-5 text-white" />
                            <span className="font-bold text-white text-sm sm:text-base">80% Practical Lab • Theory 20%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

                {/* Sticky Section Navigation */}
                <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm mb-8 overflow-hidden">
                    <div className="flex overflow-x-auto p-2 gap-2 pb-4 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
                        {[
                            { id: "overview", label: "Overview" },
                            { id: "curriculum", label: "Curriculum" },
                            { id: "technologies", label: "Tools" },
                            { id: "projects", label: "Projects" },
                            { id: "certifications", label: "Certifications" },
                            { id: "careers", label: "Careers" },
                            { id: "hiring", label: "Hiring" },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                    setActiveSection(item.id);
                                }}
                                className={cn(
                                    "whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all border",
                                    activeSection === item.id
                                        ? "bg-[#0075CF] text-white border-[#0075CF] shadow-md"
                                        : "bg-white text-slate-600 border-transparent hover:bg-slate-50 hover:border-slate-200"
                                )}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* 0. ABOUT US Section */}
                        {customSections.filter((s: any) => s.type === "about_us").map((section: any, idx: number) => (
                            <section key={`about-us-${idx}`} id="overview" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <h2 className="text-2xl font-bold text-slate-900 uppercase">ABOUT US</h2>
                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                </div>
                                <div className="bg-blue-50 rounded-xl p-6 sm:p-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{section.content.heading}</h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        {section.content.text}
                                    </p>
                                </div>
                            </section>
                        ))}

                        {/* 1b. DATA SCIENCE Introduction Section */}
                        {customSections.filter((s: any) => s.type === "data_science_introduction").map((section: any, idx: number) => (
                            <section key={`data-science-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-900 leading-tight text-center sm:text-left">
                                            DATA<br />SCIENCE
                                        </h2>
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                <circle cx="100" cy="100" r="12" fill="#8B5CF6" />
                                                <ellipse cx="100" cy="100" rx="60" ry="30" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                                                <ellipse cx="100" cy="100" rx="30" ry="60" fill="none" stroke="#EC4899" strokeWidth="2" opacity="0.6" />
                                                <ellipse cx="100" cy="100" rx="50" ry="50" fill="none" stroke="#10B981" strokeWidth="2" opacity="0.6" />
                                                <circle cx="160" cy="100" r="6" fill="#3B82F6">
                                                    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="3s" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="100" cy="40" r="6" fill="#EC4899">
                                                    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="135" cy="135" r="6" fill="#10B981">
                                                    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="5s" repeatCount="indefinite" />
                                                </circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-600 animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                                <img
                                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop"
                                                    alt="Data Science Analytics"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 1c. DATA ANALYTICS Introduction Section */}
                        {customSections.filter((s: any) => s.type === "data_analytics_introduction").map((section: any, idx: number) => (
                            <section key={`data-analytics-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-600 leading-tight text-center sm:text-left">
                                            DATA<br />ANALYTICS
                                        </h2>
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                <rect x="30" y="120" width="30" height="60" fill="#FF6B35" rx="4">
                                                    <animate attributeName="height" values="60;80;60" dur="2s" repeatCount="indefinite" />
                                                    <animate attributeName="y" values="120;100;120" dur="2s" repeatCount="indefinite" />
                                                </rect>
                                                <rect x="70" y="80" width="30" height="100" fill="#FF8C42" rx="4">
                                                    <animate attributeName="height" values="100;120;100" dur="2.5s" repeatCount="indefinite" />
                                                    <animate attributeName="y" values="80;60;80" dur="2.5s" repeatCount="indefinite" />
                                                </rect>
                                                <rect x="110" y="60" width="30" height="120" fill="#FFA552" rx="4">
                                                    <animate attributeName="height" values="120;140;120" dur="3s" repeatCount="indefinite" />
                                                    <animate attributeName="y" values="60;40;60" dur="3s" repeatCount="indefinite" />
                                                </rect>
                                                <rect x="150" y="90" width="30" height="90" fill="#FFB562" rx="4">
                                                    <animate attributeName="height" values="90;110;90" dur="2.2s" repeatCount="indefinite" />
                                                    <animate attributeName="y" values="90;70;90" dur="2.2s" repeatCount="indefinite" />
                                                </rect>
                                                <line x1="20" y1="180" x2="190" y2="180" stroke="#334155" strokeWidth="2" />
                                                <line x1="20" y1="30" x2="20" y2="180" stroke="#334155" strokeWidth="2" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-cyan-600 animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                                <img
                                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop"
                                                    alt="Data Analytics Dashboard"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}





                        {/* 1d. CYBER SECURITY Introduction Section */}
                        {customSections.filter((s: any) => s.type === "cyber_security_introduction").map((section: any, idx: number) => (
                            <section key={`cyber-security-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-red-600 leading-tight text-center sm:text-left">
                                            CYBER<br />SECURITY
                                        </h2>
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                <path d="M100,20 C70,20 50,50 50,90 L50,130 C50,150 70,170 100,170 C130,170 150,150 150,130 L150,90 C150,50 130,20 100,20 Z" fill="#DC2626" opacity="0.1" />
                                                <path d="M60,130 L60,180 L140,180 L140,130" fill="#EF4444" stroke="#B91C1C" strokeWidth="4" />
                                                <circle cx="100" cy="90" r="30" fill="#FEF2F2" stroke="#B91C1C" strokeWidth="4" />
                                                <rect x="80" y="80" width="40" height="15" rx="5" fill="#1F2937" />
                                                <rect x="85" y="83" width="12" height="8" rx="2" fill="#3B82F6" opacity="0.8" />
                                                <rect x="103" y="83" width="12" height="8" rx="2" fill="#3B82F6" opacity="0.8" />
                                                <path d="M100,10 C60,10 40,50 40,100 L40,130 L60,130 L60,100 C60,60 75,30 100,30 C125,30 140,60 140,100 L140,130 L160,130 L160,100 C160,50 140,10 100,10 Z" fill="#B91C1C" />
                                                <text x="100" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="bold">&lt;/&gt;</text>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-red-600 animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                                <img
                                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=500&fit=crop"
                                                    alt="Cyber Security Lock"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}



                        {/* 1e. PYTHON FULL STACK Introduction Section */}
                        {customSections.filter((s: any) => s.type === "python_fullstack_introduction").map((section: any, idx: number) => (
                            <section key={`python-fullstack-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-blue-600 leading-tight text-center sm:text-left">
                                            <span className="flex items-center justify-center sm:justify-start gap-3">
                                                PYTHON
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-10 h-10 sm:w-14 sm:h-14 animate-bounce-slow" />
                                            </span>
                                            FULL STACK
                                        </h2>
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                <defs>
                                                    <linearGradient id="pyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#3776AB" />
                                                        <stop offset="100%" stopColor="#28567E" />
                                                    </linearGradient>
                                                    <linearGradient id="pyYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#FFD343" />
                                                        <stop offset="100%" stopColor="#FFC107" />
                                                    </linearGradient>
                                                </defs>
                                                <path d="M100,40 C120,40 135,45 135,65 L135,85 L75,85 L75,80 C75,60 80,40 100,40 Z M115,55 C120,55 122,58 122,62 C122,66 118,68 115,68 C111,68 108,65 108,62 C108,58 112,55 115,55 Z" fill="url(#pyBlue)" />
                                                <path d="M135,85 L135,125 C135,145 125,160 100,160 L60,160 L60,135 L115,135 C125,135 130,130 130,120 L130,85 L135,85 Z" fill="url(#pyBlue)" />
                                                <path d="M100,160 C80,160 65,155 65,135 L65,115 L125,115 L125,120 C125,140 120,160 100,160 Z M85,145 C80,145 78,142 78,138 C78,134 82,132 85,132 C89,132 92,135 92,138 C92,142 88,145 85,145 Z" fill="url(#pyYellow)" />
                                                <path d="M65,115 L65,75 C65,55 75,40 100,40 L140,40 L140,65 L85,65 C75,65 70,70 70,80 L70,115 L65,115 Z" fill="url(#pyYellow)" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                                <img
                                                    src="/images/python-course-card.jpg"
                                                    alt="Python Full Stack Development"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 1f. DEVOPS MULTI-CLOUD ENGINEERING Introduction Section */}
                        {customSections.filter((s: any) => s.type === "devops_multicloud_introduction").map((section: any, idx: number) => (
                            <section key={`devops-multicloud-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 leading-tight text-center sm:text-left">
                                            DEVOPS<br />MULTI-CLOUD<br />ENGINEERING
                                        </h2>
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                <path d="M 50 100 Q 75 70, 100 100 Q 125 130, 150 100 Q 125 70, 100 100 Q 75 130, 50 100 Z" fill="none" stroke="#2563EB" strokeWidth="8" opacity="0.6" />
                                                <circle cx="70" cy="100" r="25" fill="#22D3EE" opacity="0.7" />
                                                <text x="70" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Dev</text>
                                                <circle cx="130" cy="100" r="25" fill="#3B82F6" opacity="0.7" />
                                                <text x="130" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Ops</text>
                                                <path d="M 95 90 L 105 90" stroke="#10B981" strokeWidth="3" markerEnd="url(#arrowhead)" />
                                                <path d="M 105 110 L 95 110" stroke="#10B981" strokeWidth="3" markerEnd="url(#arrowhead)" />
                                                <defs>
                                                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                                                        <polygon points="0 0, 10 3, 0 6" fill="#10B981" />
                                                    </marker>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 flex items-center justify-center">
                                                <div className="grid grid-cols-2 gap-4 p-4">
                                                    <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                                                        <span className="text-white font-bold text-xs">AWS</span>
                                                    </div>
                                                    <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                                                        <span className="text-white font-bold text-xs">Azure</span>
                                                    </div>
                                                    <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
                                                        <span className="text-white font-bold text-xs">GCP</span>
                                                    </div>
                                                    <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                                                        <span className="text-white font-bold text-2xl">✓</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 1c. EMBEDDED SYSTEMS Introduction Section */}
                        {customSections.filter((s: any) => s.type === "embedded_introduction").map((section: any, idx: number) => (
                            <section key={`embedded-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-center sm:text-left" style={{ color: '#8B4513' }}>
                                            EMBEDDED<br />SYSTEMS
                                        </h2>
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                <rect x="50" y="50" width="100" height="100" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="3" rx="5" />
                                                <rect x="30" y="65" width="20" height="6" fill="#60A5FA" />
                                                <rect x="30" y="80" width="20" height="6" fill="#60A5FA" />
                                                <rect x="30" y="95" width="20" height="6" fill="#60A5FA" />
                                                <rect x="30" y="110" width="20" height="6" fill="#60A5FA" />
                                                <rect x="30" y="125" width="20" height="6" fill="#60A5FA" />
                                                <rect x="150" y="65" width="20" height="6" fill="#60A5FA" />
                                                <rect x="150" y="80" width="20" height="6" fill="#60A5FA" />
                                                <rect x="150" y="95" width="20" height="6" fill="#60A5FA" />
                                                <rect x="150" y="110" width="20" height="6" fill="#60A5FA" />
                                                <rect x="150" y="125" width="20" height="6" fill="#60A5FA" />
                                                <rect x="65" y="30" width="6" height="20" fill="#60A5FA" />
                                                <rect x="80" y="30" width="6" height="20" fill="#60A5FA" />
                                                <rect x="95" y="30" width="6" height="20" fill="#60A5FA" />
                                                <rect x="110" y="30" width="6" height="20" fill="#60A5FA" />
                                                <rect x="125" y="30" width="6" height="20" fill="#60A5FA" />
                                                <rect x="65" y="150" width="6" height="20" fill="#60A5FA" />
                                                <rect x="80" y="150" width="6" height="20" fill="#60A5FA" />
                                                <rect x="95" y="150" width="6" height="20" fill="#60A5FA" />
                                                <rect x="110" y="150" width="6" height="20" fill="#60A5FA" />
                                                <rect x="125" y="150" width="6" height="20" fill="#60A5FA" />
                                                <circle cx="100" cy="100" r="20" fill="none" stroke="#60A5FA" strokeWidth="2" />
                                                <rect x="90" y="90" width="20" height="20" fill="#60A5FA" opacity="0.3" />
                                                <line x1="70" y1="100" x2="130" y2="100" stroke="#60A5FA" strokeWidth="1.5" />
                                                <line x1="100" y1="70" x2="100" y2="130" stroke="#60A5FA" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                                <img
                                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop"
                                                    alt="Embedded Systems Hardware"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 1c. MULTI-CLOUD ENGINEERING Introduction Section */}
                        {customSections.filter((s: any) => s.type === "multicloud_engineering_introduction").map((section: any, idx: number) => (
                            <section key={`multicloud-eng-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cyan-500 leading-tight text-center sm:text-left">
                                            MULTI-<br />CLOUD<br />ENGINEERING
                                        </h2>
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                <ellipse cx="100" cy="80" rx="45" ry="30" fill="#22D3EE" opacity="0.8" />
                                                <ellipse cx="80" cy="85" rx="30" ry="22" fill="#22D3EE" opacity="0.8" />
                                                <ellipse cx="120" cy="85" rx="30" ry="22" fill="#22D3EE" opacity="0.8" />
                                                <circle cx="60" cy="120" r="8" fill="#EF4444" />
                                                <circle cx="100" cy="140" r="8" fill="#10B981" />
                                                <circle cx="140" cy="120" r="8" fill="#F59E0B" />
                                                <line x1="100" y1="95" x2="60" y2="120" stroke="#64748B" strokeWidth="2" />
                                                <line x1="100" y1="95" x2="100" y2="140" stroke="#64748B" strokeWidth="2" />
                                                <line x1="100" y1="95" x2="140" y2="120" stroke="#64748B" strokeWidth="2" />
                                                <circle cx="80" cy="108" r="3" fill="#22D3EE">
                                                    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="100" cy="118" r="3" fill="#22D3EE">
                                                    <animate attributeName="r" values="3;5;3" dur="2s" begin="0.5s" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="120" cy="108" r="3" fill="#22D3EE">
                                                    <animate attributeName="r" values="3;5;3" dur="2s" begin="1s" repeatCount="indefinite" />
                                                </circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                                <img
                                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop"
                                                    alt="Multi-Cloud Data Engineering"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 1c. QUANTUM COMPUTING Introduction Section */}
                        {customSections.filter((s: any) => s.type === "quantum_introduction").map((section: any, idx: number) => (
                            <section key={`quantum-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Left Side - Title and Icon */}
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 leading-tight text-center sm:text-left">
                                            QUANTUM<br />COMPUTING
                                        </h2>

                                        {/* Quantum Chip Icon */}
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                {/* Chip Background */}
                                                <rect x="40" y="40" width="120" height="120" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="3" rx="8" />

                                                {/* Chip Pins - Left */}
                                                <rect x="20" y="60" width="20" height="8" fill="#60A5FA" />
                                                <rect x="20" y="80" width="20" height="8" fill="#60A5FA" />
                                                <rect x="20" y="100" width="20" height="8" fill="#60A5FA" />
                                                <rect x="20" y="120" width="20" height="8" fill="#60A5FA" />

                                                {/* Chip Pins - Right */}
                                                <rect x="160" y="60" width="20" height="8" fill="#60A5FA" />
                                                <rect x="160" y="80" width="20" height="8" fill="#60A5FA" />
                                                <rect x="160" y="100" width="20" height="8" fill="#60A5FA" />
                                                <rect x="160" y="120" width="20" height="8" fill="#60A5FA" />

                                                {/* Chip Pins - Top */}
                                                <rect x="60" y="20" width="8" height="20" fill="#60A5FA" />
                                                <rect x="80" y="20" width="8" height="20" fill="#60A5FA" />
                                                <rect x="100" y="20" width="8" height="20" fill="#60A5FA" />
                                                <rect x="120" y="20" width="8" height="20" fill="#60A5FA" />

                                                {/* Chip Pins - Bottom */}
                                                <rect x="60" y="160" width="8" height="20" fill="#60A5FA" />
                                                <rect x="80" y="160" width="8" height="20" fill="#60A5FA" />
                                                <rect x="100" y="160" width="8" height="20" fill="#60A5FA" />
                                                <rect x="120" y="160" width="8" height="20" fill="#60A5FA" />

                                                {/* Atom/Qubit Symbol in Center */}
                                                <circle cx="100" cy="100" r="25" fill="none" stroke="#60A5FA" strokeWidth="2" />
                                                <circle cx="100" cy="100" r="5" fill="#60A5FA" />

                                                {/* Electron Orbits */}
                                                <ellipse cx="100" cy="100" rx="25" ry="10" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" />
                                                <ellipse cx="100" cy="100" rx="10" ry="25" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" />

                                                {/* Electrons */}
                                                <circle cx="125" cy="100" r="3" fill="#60A5FA" />
                                                <circle cx="100" cy="75" r="3" fill="#60A5FA" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Right Side - Circular Image */}
                                    <div className="flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-600 animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <span className="text-6xl sm:text-7xl font-black text-cyan-400">Q</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description Text */}
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 1c. MULTI-CLOUD CONSULTANT Introduction Section */}
                        {customSections.filter((s: any) => s.type === "multicloud_introduction").map((section: any, idx: number) => (
                            <section key={`multicloud-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Left Side - Title and Icon */}
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 leading-tight text-center sm:text-left">
                                            MULTI-<br />CLOUD<br />CONSULTANT
                                        </h2>

                                        {/* Multi-Cloud Icon */}
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                {/* Background Circle */}
                                                <circle cx="100" cy="100" r="90" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2" />

                                                {/* Cloud 1 - AWS Orange */}
                                                <ellipse cx="70" cy="70" rx="25" ry="18" fill="#FF9900" opacity="0.8" />
                                                <ellipse cx="60" cy="75" rx="15" ry="12" fill="#FF9900" opacity="0.8" />
                                                <ellipse cx="80" cy="75" rx="15" ry="12" fill="#FF9900" opacity="0.8" />

                                                {/* Cloud 2 - Azure Blue */}
                                                <ellipse cx="130" cy="70" rx="25" ry="18" fill="#0078D4" opacity="0.8" />
                                                <ellipse cx="120" cy="75" rx="15" ry="12" fill="#0078D4" opacity="0.8" />
                                                <ellipse cx="140" cy="75" rx="15" ry="12" fill="#0078D4" opacity="0.8" />

                                                {/* Cloud 3 - GCP Colors */}
                                                <ellipse cx="100" cy="120" rx="30" ry="20" fill="#4285F4" opacity="0.8" />
                                                <ellipse cx="85" cy="125" rx="18" ry="14" fill="#4285F4" opacity="0.8" />
                                                <ellipse cx="115" cy="125" rx="18" ry="14" fill="#4285F4" opacity="0.8" />

                                                {/* Connection Lines */}
                                                <line x1="70" y1="85" x2="90" y2="110" stroke="#64748B" strokeWidth="2" strokeDasharray="4,4" />
                                                <line x1="130" y1="85" x2="110" y2="110" stroke="#64748B" strokeWidth="2" strokeDasharray="4,4" />

                                                {/* Center Globe/Network Icon */}
                                                <circle cx="100" cy="100" r="15" fill="#fff" stroke="#0EA5E9" strokeWidth="2" />
                                                <circle cx="100" cy="100" r="3" fill="#0EA5E9" />
                                                <line x1="100" y1="85" x2="100" y2="115" stroke="#0EA5E9" strokeWidth="1.5" />
                                                <ellipse cx="100" cy="100" rx="15" ry="8" fill="none" stroke="#0EA5E9" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Right Side - Circular Image */}
                                    <div className="flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                                <img
                                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop"
                                                    alt="Multi-Cloud Infrastructure"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description Text */}
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 1c. MERN STACK Introduction Section */}
                        {customSections.filter((s: any) => s.type === "mern_introduction").map((section: any, idx: number) => (
                            <section key={`mern-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Left Side - Title and Logo */}
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-green-600 leading-tight">
                                            MERN<br />STACK
                                        </h2>

                                        {/* MERN Stack Logo */}
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                {/* Shield Background */}
                                                <path d="M100 10 L160 40 L160 100 L100 160 L40 100 L40 40 Z" fill="#fff" stroke="#ddd" strokeWidth="2" />

                                                {/* Quadrants */}
                                                <path d="M100 10 L160 40 L100 100 Z" fill="#68A063" /> {/* MongoDB - Green */}
                                                <path d="M160 40 L160 100 L100 100 Z" fill="#E23237" /> {/* Express - Red */}
                                                <path d="M100 100 L40 100 L40 40 Z" fill="#61DAFB" /> {/* React - Blue */}
                                                <path d="M100 100 L100 160 L40 100 Z" fill="#8CC84B" /> {/* Node - Light Green */}

                                                {/* Center Circle */}
                                                <circle cx="100" cy="100" r="25" fill="#fff" stroke="#333" strokeWidth="2" />

                                                {/* Letters */}
                                                <text x="100" y="75" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333">M</text>
                                                <text x="125" y="100" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333">ex</text>
                                                <text x="75" y="100" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333">R</text>
                                                <text x="100" y="125" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333">N</text>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Right Side - Circular Image */}
                                    <div className="flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                                <img
                                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop"
                                                    alt="MERN Development"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description Text */}
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 1d. MEAN STACK Introduction Section */}
                        {customSections.filter((s: any) => s.type === "mean_stack_introduction").map((section: any, idx: number) => (
                            <section key={`mean-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Left Side - Title and Logo */}
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#FF5722] leading-tight text-center sm:text-left">
                                            MEAN<br />STACK
                                        </h2>

                                        {/* MEAN Stack Icon (Simple Layers) */}
                                        <div className="relative">
                                            <Layers className="w-32 h-32 sm:w-40 sm:h-40 text-[#FF5722] animate-bounce-slow" />
                                        </div>
                                    </div>

                                    {/* Right Side - Circular Image */}
                                    <div className="flex justify-center">
                                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                                            <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#FF5722] animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                                <img
                                                    src={section.content.image}
                                                    alt="MEAN Stack Development"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description Text */}
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 1e. AI & ML Introduction Section */}
                        {customSections.filter((s: any) => s.type === "ai_ml_introduction").map((section: any, idx: number) => (
                            <section key={`ai-ml-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Left Side - Title and Logo */}
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#00BADB] leading-tight text-center sm:text-left">
                                            Artificial<br />Intelligence (AI) &<br />Machine Learning
                                        </h2>

                                        {/* AI Robot Icon */}
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20 rounded-full animate-pulse"></div>
                                            <Bot className="relative w-32 h-32 sm:w-40 sm:h-40 text-[#00BADB] animate-bounce-slow" />
                                        </div>
                                    </div>

                                    {/* Right Side - Circular Image */}
                                    <div className="flex justify-center">
                                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                                            <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#00BADB] animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                                <img
                                                    src={section.content.image}
                                                    alt="AI & Machine Learning"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description Text */}
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 1f. Java Full Stack Introduction Section */}
                        {customSections.filter((s: any) => s.type === "java_fullstack_introduction").map((section: any, idx: number) => (
                            <section key={`java-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Left Side - Title and Logo */}
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#E76F00] leading-tight text-center sm:text-left">
                                            JAVA<br />FULL STACK
                                        </h2>

                                        {/* Java Coffee Icon */}
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-orange-200 blur-xl opacity-20 rounded-full animate-pulse"></div>
                                            <Coffee className="relative w-32 h-32 sm:w-40 sm:h-40 text-[#E76F00] animate-bounce-slow" />
                                        </div>
                                    </div>

                                    {/* Right Side - Circular Image */}
                                    <div className="flex justify-center">
                                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                                            <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#E76F00] animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                                <img
                                                    src={section.content.image}
                                                    alt="Java Full Stack"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description Text */}
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 1g. QA Automation Introduction Section */}
                        {customSections.filter((s: any) => s.type === "qa_automation_introduction").map((section: any, idx: number) => (
                            <section key={`qa-intro-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Left Side - Title and Check Icon */}
                                    <div className="flex flex-col items-center sm:items-start gap-6">
                                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#10B981] leading-tight text-center sm:text-left">
                                            QA<br />AUTOMATION
                                        </h2>

                                        {/* Check Icon */}
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-green-200 blur-xl opacity-20 rounded-full animate-pulse"></div>
                                            <CheckCircle2 className="relative w-32 h-32 sm:w-40 sm:h-40 text-[#10B981] animate-bounce-slow" />
                                        </div>
                                    </div>

                                    {/* Right Side - Stacked Cards Illustration (Bug vs Clean Code) */}
                                    <div className="flex justify-center">
                                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                                            <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#10B981] animate-spin-slow"></div>
                                            <div className="absolute inset-4 rounded-full bg-slate-50 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                                                <img
                                                    src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=600&fit=crop"
                                                    alt="QA Testing"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Floating Badge */}
                                            <div className="absolute -bottom-2 -right-2 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                                <span className="font-bold text-slate-700 text-sm">100% Bug Free</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description Text */}
                                <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    {section.content.description}
                                </div>
                            </section>
                        ))}

                        {/* 2. UI/UX DESIGN Introduction (UI/UX only) */}
                        {customSections.filter((s: any) => s.type === "ui_ux_highlight").map((section: any, idx: number) => (
                            <section key={`uiux-${idx}`} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                        <div className="relative">
                                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#8B3A3A] leading-tight whitespace-pre-line">
                                                {section.title}
                                            </h2>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                                                <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                                            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-800 to-slate-600 overflow-hidden shadow-2xl">
                                                <div className="w-full h-full flex items-center justify-center text-white text-6xl sm:text-7xl font-black">
                                                    {section.content.badge}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                        {section.content.description}
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {section.content.keyPoints.map((point: any, kIdx: number) => (
                                            <div key={kIdx} className={`bg-gradient-to-br ${point.bgGradient} rounded-xl p-5 border ${point.borderColor}`}>
                                                <div className="flex items-start gap-3">
                                                    <div className={`w-8 h-8 rounded-full ${point.iconColor} flex items-center justify-center flex-shrink-0`}>
                                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-900 mb-1">{point.title}</h4>
                                                        <p className="text-sm text-slate-600">{point.sub}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        ))}

                        {/* 3. TOOLS & TECHNOLOGIES Section */}
                        {toolsData && toolsData.length > 0 && (
                            <section id="technologies" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] underline decoration-2 underline-offset-8 mb-8">
                                    Tools & Technologies
                                </h2>

                                {/* Table with Background Image */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[5px] border-white">
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{
                                            backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80")',
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-[1px]"></div>

                                    {/* Table Content */}
                                    <div className="relative p-2 sm:p-4 md:p-8">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse border border-white/40">
                                                <thead>
                                                    <tr>
                                                        <th className="text-left font-black text-white text-base sm:text-xl p-3 sm:p-4 border border-white/40 uppercase tracking-wide w-1/4">
                                                            Category
                                                        </th>
                                                        <th className="text-left font-black text-white text-base sm:text-xl p-3 sm:p-4 border border-white/40 uppercase tracking-wide">
                                                            Tools & Technologies
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {toolsData.map((row: any, idx: number) => (
                                                        <tr key={idx} className="hover:bg-white/5 transition-colors">
                                                            <td className="p-3 sm:p-4 text-white font-bold text-sm sm:text-base border border-white/40 align-top">
                                                                {row.category}
                                                            </td>
                                                            <td className="p-3 sm:p-4 text-white font-bold text-sm sm:text-base border border-white/40">
                                                                {row.tools}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* 4. COURSE OBJECTIVES Section */}
                        {objectives && objectives.length > 0 && (
                            <section id="objectives" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-6">
                                    Course Objective
                                </h2>

                                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-xl p-6 sm:p-8 border border-slate-100">
                                    <p className="text-slate-700 text-base sm:text-lg font-medium mb-6">
                                        By the end of this course, students will:
                                    </p>

                                    <ul className="space-y-4">
                                        {objectives.map((objective: any, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3 group">
                                                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                </div>
                                                <span className="text-slate-700 text-sm sm:text-base leading-relaxed flex-1">
                                                    {objective}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        )}

                        {/* 4b. CAPSTONE PROJECT IDEAS Section */}
                        {capstoneProjects && capstoneProjects.length > 0 && (
                            <section id="projects" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-8">
                                    Capstone Project Ideas
                                </h2>

                                <div className="space-y-4">
                                    {capstoneProjects.map((project: any, idx: number) => (
                                        <div key={idx} className="flex items-start gap-3 group hover:bg-slate-50 p-4 rounded-xl transition-colors">
                                            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-800 flex items-center justify-center mt-0.5 group-hover:bg-blue-600 transition-colors">
                                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                                                    {project.title}
                                                </h3>
                                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* 4c. LEARNING OUTCOMES Section */}
                        {learningOutcomes && learningOutcomes.length > 0 && (
                            <section id="outcomes" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-6">
                                    Learning Outcomes
                                </h2>

                                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-xl p-6 sm:p-8 border border-slate-100">
                                    <p className="text-slate-700 text-base sm:text-lg font-medium mb-6">
                                        After completing the course, students will be able to:
                                    </p>

                                    <ul className="space-y-4">
                                        {learningOutcomes.map((outcome: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3 group">
                                                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-800 flex items-center justify-center mt-0.5 group-hover:scale-110 group-hover:bg-blue-600 transition-all">
                                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                </div>
                                                <span className="text-slate-700 text-sm sm:text-base leading-relaxed flex-1">
                                                    {outcome}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        )}

                        {/* 5. CURRICULUM Section */}
                        <section id="curriculum" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Curriculum</h2>
                            </div>

                            <div className="space-y-3">
                                {course.curriculum.map((module, idx) => (
                                    <div
                                        key={idx}
                                        className={cn(
                                            "border rounded-xl transition-all overflow-hidden",
                                            activeModule === idx ? "border-blue-300 bg-blue-50/50" : "border-slate-200"
                                        )}
                                    >
                                        <button
                                            onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                                            className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3 flex-1">
                                                <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                                                    {idx + 1}
                                                </span>
                                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">{module.title}</h3>
                                            </div>
                                            <ChevronDown className={cn(
                                                "w-5 h-5 text-slate-400 transition-transform shrink-0",
                                                activeModule === idx && "rotate-180"
                                            )} />
                                        </button>

                                        <div className={cn(
                                            "grid transition-all duration-300",
                                            activeModule === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        )}>
                                            <div className="overflow-hidden">
                                                <ul className="space-y-2 px-4 sm:px-5 pb-4 sm:pb-5 pt-2">
                                                    {module.lessons.map((lesson, lIdx) => (
                                                        <li key={lIdx} className="flex items-start gap-2">
                                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                            <span className="text-slate-600 text-sm sm:text-base">{lesson}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 6. WHAT YOU WILL GET Section (Features) */}
                        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2 inline-block mb-8 uppercase">
                                What You Will Get After Completion of This Course
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                                {features.map((feature: any, idx: number) => {
                                    const IconExp = IconMap[feature.icon] || Star;
                                    return (
                                        <div key={idx} className="flex flex-col items-center text-center p-2">
                                            <div className={cn("w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 border-2", feature.bgColor, feature.color.replace('text', 'border'))}>
                                                <IconExp className={cn("w-7 h-7 sm:w-8 sm:h-8", feature.color)} />
                                            </div>
                                            <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                                                {feature.title}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* 6b. Course Duration & Details (Sub-section) */}
                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 text-center underline decoration-blue-600 underline-offset-4 mb-6">
                                    Course Duration: {programDetails.duration || "90"} Days
                                </h3>

                                <ul className="space-y-4">
                                    {/* Custom formatted list based on screenshot */}
                                    {programDetails.learning && (
                                        <li className="flex items-start gap-3">
                                            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                            <span className="text-slate-700 font-medium">
                                                <span className="font-bold text-slate-900">75 Days</span> ({programDetails.learningText})
                                            </span>
                                        </li>
                                    )}
                                    {programDetails.project && (
                                        <li className="flex items-start gap-3">
                                            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                            <span className="text-slate-700 font-medium">
                                                <span className="font-bold text-slate-900">15 Days</span> ({programDetails.projectText})
                                            </span>
                                        </li>
                                    )}

                                    {programDetails.activity && (
                                        <li className="flex items-start gap-3">
                                            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                            <span className="text-slate-700">
                                                <span className="font-bold text-slate-900">Activity:</span> {programDetails.activity}
                                            </span>
                                        </li>
                                    )}

                                    <li className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                        <span className="text-slate-700">
                                            <span className="font-bold text-slate-900">Benefits:</span> Includes lectures, hands-on coding, mini-projects, and one final capstone project.
                                        </span>
                                    </li>

                                    <li className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                        <span className="text-slate-700">
                                            <span className="font-bold text-slate-900">Difficulty:</span> Beginner → Intermediate → Advanced
                                        </span>
                                    </li>

                                    {programDetails.mode && (
                                        <li className="flex items-start gap-3">
                                            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                            <span className="text-slate-700">
                                                <span className="font-bold text-slate-900">Mode:</span> {programDetails.mode}
                                            </span>
                                        </li>
                                    )}

                                    {programDetails.eligibility && (
                                        <li className="flex items-start gap-3">
                                            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                            <span className="text-slate-700">
                                                <span className="font-bold text-slate-900">Education Eligibility:</span> {programDetails.eligibility}
                                            </span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </section>

                        {/* 7. CERTIFICATIONS Section */}
                        {certifications && (Array.isArray(certifications) ? certifications.length > 0 : true) && (
                            <section id="certifications" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-8 underline decoration-[#0075CF] underline-offset-8">
                                    {typeof certifications === 'object' && ('main' in certifications || 'providers' in certifications)
                                        ? 'Certifications & Career Prep'
                                        : 'Certification'}
                                </h2>

                                {/* Check if certifications has providers structure (DevOps) */}
                                {typeof certifications === 'object' && 'providers' in certifications && Array.isArray(certifications.providers) ? (
                                    <div className="space-y-6">
                                        {certifications.providers.map((provider: any, idx: number) => (
                                            <div key={idx} className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                                    </div>
                                                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">{provider.name}:</h3>
                                                </div>
                                                <ul className="ml-11 space-y-2">
                                                    {provider.certs.map((cert: string, certIdx: number) => (
                                                        <li key={certIdx} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                                                            <span className="text-orange-500 font-bold mt-1">✦</span>
                                                            <span>{cert}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ) : typeof certifications === 'object' && 'main' in certifications ? (
                                    /* Quantum Computing format with main and optional */
                                    <div className="space-y-6">
                                        {/* Main Certification */}
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                                                <CheckCircle2 className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 text-base sm:text-lg">Certification Name:</p>
                                                <p className="text-slate-700 text-sm sm:text-base mt-1">{certifications.main}</p>
                                            </div>
                                        </div>

                                        {/* Optional Certifications */}
                                        {certifications.optional && certifications.optional.length > 0 && (
                                            <div className="ml-11">
                                                <p className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                                    <span className="text-blue-600">✦</span>
                                                    Additional Certifications (Optional):
                                                </p>
                                                <ul className="space-y-2">
                                                    {certifications.optional.map((cert: string, idx: number) => (
                                                        <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                                                            <span className="text-orange-500 font-bold mt-1">✦</span>
                                                            <span>{cert}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    /* Default format for other courses */
                                    <ul className="space-y-3">
                                        {Array.isArray(certifications) && certifications.map((cert: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                                                <span className="text-orange-500 font-bold mt-1 text-lg">✦</span>
                                                <span>{cert}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        )}

                        {/* 8. CAREER OPPORTUNITIES / JOB ROLES Section */}
                        {careerRoles && careerRoles.length > 0 && (
                            <section id="careers" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-8 underline decoration-[#0075CF] underline-offset-8">
                                    Career Opportunities / Job Roles
                                </h2>

                                {/* Check if roles have descriptions (MERN Stack format) */}
                                {typeof careerRoles[0] === 'object' && 'role' in careerRoles[0] ? (
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="bg-green-600">
                                                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-white font-bold text-sm sm:text-base border border-green-700">
                                                        Role
                                                    </th>
                                                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-white font-bold text-sm sm:text-base border border-green-700">
                                                        Description
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {careerRoles.map((item: any, idx: number) => (
                                                    <tr
                                                        key={idx}
                                                        className={cn(
                                                            "border border-slate-200 hover:bg-slate-50 transition-colors",
                                                            idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                                                        )}
                                                    >
                                                        <td className="py-3 sm:py-4 px-3 sm:px-6 text-slate-900 font-bold text-xs sm:text-sm border border-slate-200">
                                                            {item.role}
                                                        </td>
                                                        <td className="py-3 sm:py-4 px-3 sm:px-6 text-slate-700 text-xs sm:text-sm border border-slate-200">
                                                            {item.description}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    /* Default format for other courses */
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {(careerRoles as string[]).map((role: string, idx: number) => (
                                            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100">
                                                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center">
                                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-slate-900 font-semibold text-sm sm:text-base">
                                                    {role}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>
                        )}

                        {/* 9. WHO WILL HIRE YOU Section */}
                        {hiringCompanies && hiringCompanies.length > 0 && (
                            <section id="hiring" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-8 underline decoration-[#0075CF] underline-offset-8">
                                    WHO WILL HIRE YOU
                                </h2>

                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                                    {hiringCompanies.map((company: any, idx: number) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-center p-6 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-200 bg-white group"
                                        >
                                            <img
                                                src={company.logo}
                                                alt={company.name}
                                                className="w-full h-auto max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent && !parent.querySelector('.fallback-text')) {
                                                        const textDiv = document.createElement('div');
                                                        textDiv.className = 'fallback-text text-center';
                                                        textDiv.innerHTML = `<p class="text-slate-700 font-bold text-xs sm:text-sm">${company.name}</p>`;
                                                        parent.appendChild(textDiv);
                                                    }
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 text-center">
                                    <p className="text-slate-600 text-sm sm:text-base italic">
                                        ...and many more leading companies across industries
                                    </p>
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <CourseCard
                                course={{
                                    ...course,
                                    id: course._id,
                                    category: course.category || "Professional Course",
                                    price: course.price || "₹0",
                                    duration: `${programDetails.duration} ${programDetails.unit}`,
                                    themeColor: theme.color
                                }}
                            />

                            {/* Additional Sidebar Widgets */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4">Request Callback</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Have questions? Our counselor will help you choose the right path.
                                </p>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Book Free Counseling
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
