import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Clock,
    BarChart3,
    Users,
    BookOpen,
    ArrowRight,
    Star,
    ChevronLeft,
    CheckCircle2,
    ChevronDown,
    Layout,
    Award,
    Globe,
    Monitor,
    Briefcase,
    TrendingUp,
    FileText,
    Video,
    PlayCircle,
    Target,
    Wifi,
    Zap,
    PieChart,
    MessageSquare,
    Lock,
    ArrowRightLeft,
    ArrowUpRight
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

import { useCourseBySlug, useCourses, Course } from "@/hooks/useCourses";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { LogoCarousel, Logo } from "../components/ui/logo-carousel";
import { CourseCard } from "@/components/courses/CourseCard";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CourseDetailHero } from "./CourseDetailsHero";
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/authStore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    getCourseSpecificLogos,
    getProgramDetails,
    getCourseOutcomes,
    getCourseTheme
} from "../data/courseMetadata";


interface ShowMoreProps {
    children: React.ReactNode;
    initialHeight?: string;
    showLabel?: string;
    hideLabel?: string;
}

const ShowMore = ({ children, initialHeight = "300px", showLabel = "Show More", hideLabel = "Show Less" }: ShowMoreProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative">
            <div
                className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    !isExpanded && "mask-linear-fade"
                )}
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
                    {isExpanded ? hideLabel : showLabel}
                    <ChevronDown className={cn("ml-2 w-4 h-4 transition-transform duration-300", isExpanded && "rotate-180")} />
                </Button>
            </div>
        </div>
    );
};

export default function CourseDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart);
    const { data: course, isLoading: isCourseLoading } = useCourseBySlug(slug || "");
    const { data: allCourses } = useCourses();
    const [activeModule, setActiveModule] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState("curriculum");
    const [isNavStuck, setIsNavStuck] = useState(false);

    // Scroll Spy & Sticky Trigger Logic
    useEffect(() => {
        const sections = ["curriculum", "outcomes", "tools", "instructor", "hiring-partners", "certifications", "faq"];

        const handleScroll = () => {
            // Trigger appearance specifically after the hero section (around 600px+)
            setIsNavStuck(window.scrollY > 600);

            // Manual scroll spy for active section
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "curriculum",
                "outcomes",
                "tools",
                "instructor",
                "hiring-partners",
                "certifications",
                "faq"
            ];

            // Find the current section
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If element top is within the viewing area (considering sticky header offset ~120px)
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    } else if (rect.top < 0 && rect.bottom > 120) {
                        // If we're inside the section
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
    const [leadLoading, setLeadLoading] = useState(false);

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLeadLoading(true);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!leadForm.name.trim() || leadForm.name.trim().length < 3) {
            toast.error("Please enter a valid Name (min 3 characters)");
            setLeadLoading(false);
            return;
        }

        if (!leadForm.email || !emailRegex.test(leadForm.email)) {
            toast.error("Please enter a valid Email address");
            setLeadLoading(false);
            return;
        }

        if (!leadForm.phone || leadForm.phone.length !== 10) {
            toast.error("Please enter a valid 10-digit Phone Number");
            setLeadLoading(false);
            return;
        }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/leads`, {
                ...leadForm,
                course: course?.title || "Unknown Course"
            });
            toast.success("Request submitted successfully!");
            setLeadForm({ name: "", email: "", phone: "" });
        } catch (error) {
            console.error(error);
            toast.error("Failed to submit request.");
        } finally {
            setLeadLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const handleEnroll = () => {
        const isLoggedIn = !!useAuthStore.getState().token;
        if (!isLoggedIn) {
            toast.error("Please log in to enroll in this course.");
            return;
        }

        if (!course) return;
        const priceNumber = parseInt(course.price.replace(/[^0-9]/g, ''), 10);

        addToCart({
            id: course.id.toString(),
            name: course.title,
            price: priceNumber,
            image: course.image
        });
        navigate('/cart');
    };

    if (isCourseLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
            </div>
        );
    }

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Course not found</h2>
                    <Link to="/">
                        <Button>Return to Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white w-full max-w-full overflow-x-hidden">
            <Header />

            {/* Premium Hero Section */}
            <CourseDetailHero
                course={{
                    title: course.title,
                    category: course.category || "Professional Training",
                    image: course.image,
                    duration: `${getProgramDetails(course.category || course.title).duration} Days`
                }}
                handleEnroll={handleEnroll}
            />

            {/* Clean Feature Grid Footer - Integrated below Hero */}
            <div className="relative z-20 bg-white py-6 md:py-12 border-b border-slate-100 w-full">
                <div className="container mx-auto px-4 md:px-6">
                    <FeatureGrid />
                </div>
            </div>

            {/* Smart Sticky Navigation Bar - Attached to Main Navbar */}
            <div
                className={cn(
                    "sticky top-[64px] md:top-[80px] z-50 bg-white border-b border-slate-200 py-3 md:py-4 w-full overflow-hidden transition-all duration-300",
                    isNavStuck ? "shadow-lg bg-white/95 backdrop-blur-md" : "shadow-sm"
                )}
                style={{ position: '-webkit-sticky' } as any}
            >
                <div className="container mx-auto px-2 sm:px-4 md:px-6">
                    <div className="overflow-x-auto pb-1 -mx-2 px-2 scrollbar-hide">
                        <div className="flex items-center gap-1.5 md:gap-3 md:justify-center min-w-max">
                            {[
                                { id: "curriculum", label: "Curriculum", icon: BookOpen },
                                { id: "outcomes", label: "Outcomes", icon: CheckCircle2 },
                                { id: "tools", label: "Tools", icon: Monitor },
                                { id: "instructor", label: "Instructor", icon: Users },
                                { id: "hiring-partners", label: "Partners", icon: Briefcase },
                                { id: "certifications", label: "Certifications", icon: Award },
                                { id: "faq", label: "FAQ", icon: MessageSquare },
                            ].map((item) => {
                                const Icon = item.icon;
                                const isActive = activeSection === item.id;

                                return (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById(item.id);
                                            if (el) {
                                                const offset = window.innerWidth < 768 ? 130 : 160;
                                                const y = el.getBoundingClientRect().top + window.scrollY - offset;
                                                window.scrollTo({ top: y, behavior: 'smooth' });
                                                setActiveSection(item.id);
                                            }
                                        }}
                                        className={cn(
                                            "flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-[11px] md:text-sm font-bold border shrink-0 whitespace-nowrap transition-all duration-300",
                                            isActive
                                                ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                                                : "text-slate-600 hover:text-blue-600 hover:bg-blue-50 border-slate-200 bg-white"
                                        )}
                                    >
                                        <Icon className={cn("w-3 h-3 md:w-3.5 md:h-3.5", isActive ? "text-white" : "")} />
                                        <span className="hidden sm:inline">{item.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Content */}
            <section className="py-6 md:py-16 lg:py-24 bg-white w-full overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

                        {/* Main Content */}
                        <div className="col-span-12 lg:col-span-8">
                            <div id="curriculum" className="curriculum detailed-curriculum mb-8 md:mb-12 lg:mb-20 scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-40">
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#FD5A1A] mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                        <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600" />
                                    </div>
                                    Detailed Curriculum
                                </h2>
                                <p className="text-slate-600 mb-6 md:mb-8 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                                    Learn from Industry Professionals with 10+ Years of Experience <br className="hidden md:inline" />
                                    At Academy Of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship.
                                </p>

                                <div className="modules space-y-3 md:space-y-4">
                                    {course.curriculum.map((module, mIdx) => (
                                        <div
                                            key={mIdx}
                                            className={cn(
                                                "modules-grid border rounded-xl md:rounded-2xl transition-all duration-300 overflow-hidden",
                                                activeModule === mIdx ? "shadow-md border-blue-600/40 bg-blue-50/50" : "border-slate-100"
                                            )}
                                        >
                                            <button
                                                onClick={() => setActiveModule(activeModule === mIdx ? null : mIdx)}
                                                className="w-full flex items-center justify-between p-3 sm:p-4 md:p-6 text-left"
                                            >
                                                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 pr-2 md:pr-3">
                                                    <span
                                                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full text-white text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0 bg-blue-600 shadow-lg shadow-blue-500/20 mt-0.5"
                                                    >
                                                        {mIdx + 1}
                                                    </span>
                                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">{module.title}</h3>
                                                </div>
                                                <ChevronDown className={cn("w-4 h-4 md:w-5 md:h-5 text-slate-400 transition-transform shrink-0", activeModule === mIdx && "rotate-180")} />
                                            </button>

                                            <div className={cn(
                                                "grid transition-all duration-300 ease-in-out",
                                                activeModule === mIdx ? "grid-rows-[1fr] opacity-100 px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6" : "grid-rows-[0fr] opacity-0"
                                            )}>
                                                <div className="overflow-hidden">
                                                    <ul className="space-y-2 md:space-y-3 pt-2">
                                                        {module.lessons.map((lesson, lIdx) => (
                                                            <li key={lIdx} className="flex items-start gap-2 md:gap-3 text-slate-600">
                                                                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5 md:mt-1" />
                                                                <span className="text-xs sm:text-sm md:text-base font-medium">{lesson}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Program Structure & Duration (UI/UX Specific) */}
                            {/* Dynamic Program Structure */}
                            {/* Dynamic Program Structure */}
                            {(() => {
                                const program = getProgramDetails(course.category);
                                return (
                                    <div className="program-structure program-details mb-8 md:mb-12 lg:mb-20 scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-40">
                                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#FD5A1A] mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                                                <PieChart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-600" />
                                            </div>
                                            Program Structure & Duration
                                        </h2>
                                        <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                                            {/* Pie Chart Representation */}
                                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 shrink-0">
                                                <div className={`w-full h-full rounded-full ${program.gradient} p-5 sm:p-6 md:p-8 shadow-inner`}>
                                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center flex-col shadow-sm">
                                                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">{program.duration}</span>
                                                        <span className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wide">{program.unit}</span>
                                                    </div>
                                                </div>
                                                {/* Legend overlay - Repositioned for mobile */}
                                                <div className="flex flex-wrap justify-center gap-3 mt-6 lg:mt-0 lg:absolute lg:-bottom-4 lg:-right-4 bg-white p-3 rounded-xl shadow-md border border-slate-100 text-[10px] md:text-xs text-slate-600">
                                                    {program.legend.map((item, idx) => (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                                                            <span>{item.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Structure Details */}
                                            <div className="flex-1 space-y-4 md:space-y-6">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                                                    <div className="bg-slate-50 p-2.5 sm:p-3 md:p-4 rounded-lg md:rounded-xl border border-slate-100">
                                                        <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm md:text-base">
                                                            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-emerald-500" /> {program.learning}
                                                        </h4>
                                                        <p className="text-[10px] sm:text-xs md:text-sm text-slate-600">{program.learningText}</p>
                                                    </div>
                                                    <div className="bg-slate-50 p-2.5 sm:p-3 md:p-4 rounded-lg md:rounded-xl border border-slate-100">
                                                        <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm md:text-base">
                                                            <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-blue-500" /> {program.project}
                                                        </h4>
                                                        <p className="text-[10px] sm:text-xs md:text-sm text-slate-600">{program.projectText}</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-2 md:space-y-3">
                                                    <div className="flex items-start gap-2 md:gap-3">
                                                        <Zap className="w-4 h-4 md:w-5 md:h-5 text-amber-500 shrink-0 mt-0.5" />
                                                        <div className="text-xs sm:text-sm md:text-base text-slate-600">
                                                            <strong className="text-slate-900">Activity:</strong> {program.activity}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-2 md:gap-3">
                                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-purple-500 shrink-0 mt-0.5" />
                                                        <div className="text-xs sm:text-sm md:text-base text-slate-600">
                                                            <strong className="text-slate-900">Mode:</strong> {program.mode}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-2 md:gap-3">
                                                        <Award className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0 mt-0.5" />
                                                        <div className="text-xs sm:text-sm md:text-base text-slate-600">
                                                            <strong className="text-slate-900">Eligibility:</strong> {program.eligibility}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}



                            <div id="outcomes" className="mb-8 md:mb-12 lg:mb-20 scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-40">
                                <div className="bg-slate-50/50 border border-slate-100 rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-8">
                                    <div className="text-center mb-6 md:mb-8">
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#FD5A1A] mb-2">Capstone Project Ideas</h2>
                                        <p className="text-xs sm:text-sm md:text-base text-slate-500">Real-world projects you will build during this course</p>
                                    </div>
                                    <div className="flex flex-col gap-3 md:gap-4">
                                        {getCourseOutcomes(course.category).map((outcome, i) => {
                                            const [title, desc] = outcome.split(": ");
                                            return (
                                                <div key={i} className="flex items-start gap-2 md:gap-3 p-2.5 sm:p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5 md:mt-1">
                                                        <span className="font-bold text-blue-600 text-xs sm:text-sm">{i + 1}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm md:text-base mb-0.5 md:mb-1">{title}</h4>
                                                        <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 leading-relaxed">{desc}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Career Opportunities Dynamic */}
                            <div className="mb-8 md:mb-12 lg:mb-20 scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-40">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#FD5A1A] mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                                        <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-indigo-600" />
                                    </div>
                                    Career Opportunities
                                </h2>
                                <ShowMore initialHeight="160px" showLabel="View All Careers">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                                        {getProgramDetails(course.category).roles.map((role, idx) => (
                                            <div key={idx} className="bg-white p-2.5 sm:p-3 md:p-4 rounded-lg md:rounded-xl border border-slate-100 shadow-sm flex items-center gap-2 md:gap-3 hover:shadow-md transition-all hover:border-indigo-100 group">
                                                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors shrink-0">
                                                    <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-slate-400 group-hover:text-indigo-500" />
                                                </div>
                                                <span className="font-bold text-slate-700 text-[10px] sm:text-xs md:text-sm leading-tight">{role}</span>
                                            </div>
                                        ))}
                                    </div>
                                </ShowMore>
                            </div>

                            {/* What You Will Get (Program Benefits) */}
                            <div className="mb-8 md:mb-12 lg:mb-20 scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-40">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#FD5A1A] mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                                        <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-orange-600" />
                                    </div>
                                    What You Will Get
                                </h2>
                                <ShowMore initialHeight="380px" showLabel="View All Benefits">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.1 }}
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
                                        }}
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                                    >
                                        {[
                                            { title: "Courses & Certifications", icon: Award, color: "text-blue-500", bg: "bg-blue-50", text: "Industry-recognized credentials" },
                                            { title: "LinkedIn & Naukri Support", icon: Users, color: "text-indigo-500", bg: "bg-indigo-50", text: "Profile optimization included" },
                                            { title: "Corporate Task Handling", icon: Briefcase, color: "text-emerald-500", bg: "bg-emerald-50", text: "Real-world workflow simulation" },
                                            { title: "Profile Marketing", icon: TrendingUp, color: "text-pink-500", bg: "bg-pink-50", text: "Stand out to recruiters" },
                                            { title: "ATS CV Creation", icon: FileText, color: "text-purple-500", bg: "bg-purple-50", text: "Beat the automated filters" },
                                            { title: "Interview Guidance", icon: Video, color: "text-orange-500", bg: "bg-orange-50", text: "Mock interviews & tips" },
                                            { title: "Soft Skills Training", icon: MessageSquare, color: "text-cyan-500", bg: "bg-cyan-50", text: "Communication & leadership" },
                                            { title: "Lifetime Portal Access", icon: Lock, color: "text-slate-500", bg: "bg-slate-50", text: "Learn at your own pace" },
                                            { title: "Recorded Sessions", icon: PlayCircle, color: "text-red-500", bg: "bg-red-50", text: "Revisit anytime" },
                                            { title: "100% Job Guidance", icon: Target, color: "text-amber-500", bg: "bg-amber-50", text: "Dedicated placement support" },
                                            { title: "Beginner to PRO", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-50", text: "Zero to Hero journey" },
                                            { title: "Offline / Online", icon: Wifi, color: "text-green-500", bg: "bg-green-50", text: "Flexible learning modes" },
                                        ].map((item, idx) => {
                                            const Icon = item.icon;
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                                                    whileHover={{ scale: 1.02, y: -2, boxShadow: "0 4px 12px -2px rgba(0,0,0,0.08)" }}
                                                    className="flex flex-col items-center text-center p-3 rounded-lg border border-slate-100 hover:border-blue-100 transition-all bg-white group cursor-default"
                                                >
                                                    <div className={cn("w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors mb-2 md:mb-3", item.bg)}>
                                                        <Icon className={cn("w-4 h-4 md:w-5 md:h-5", item.color)} />
                                                    </div>
                                                    <h4 className="font-bold text-slate-800 text-xs md:text-sm mb-1 flex items-center justify-center flex-wrap gap-1 leading-tight">
                                                        {item.title === "Beginner to PRO" ? (
                                                            <>
                                                                Beginner
                                                                <motion.span
                                                                    animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
                                                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                                                >
                                                                    <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-yellow-500" />
                                                                </motion.span>
                                                                PRO
                                                            </>
                                                        ) : item.title === "Offline / Online" ? (
                                                            <>
                                                                Offline
                                                                <motion.span
                                                                    animate={{ x: [-2, 2, -2] }}
                                                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                                                >
                                                                    <ArrowRightLeft className="w-3 h-3 text-slate-400 group-hover:text-green-500" />
                                                                </motion.span>
                                                                Online
                                                            </>
                                                        ) : (
                                                            item.title
                                                        )}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 font-medium leading-tight">{item.text}</p>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                </ShowMore>
                            </div>


                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                id="tools" className="mb-12 md:mb-20 scroll-mt-32 md:scroll-mt-40"
                            >
                                <div className="text-center mb-10">
                                    <h2 className="text-xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] mb-4 tracking-tight">Tools & Technologies</h2>
                                    <p className="text-sm md:text-base text-slate-500 font-medium">Master the essential software used in the industry</p>
                                </div>
                                <div className="flex flex-col gap-6 w-full relative overflow-hidden">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

                                    {(() => {
                                        const allLogos = getCourseSpecificLogos(course.title, course.category);
                                        // Split logos for two rows unless very few
                                        const shouldSplit = allLogos.length > 6;
                                        const row1 = shouldSplit ? allLogos.slice(0, Math.ceil(allLogos.length / 2)) : allLogos;
                                        const row2 = shouldSplit ? allLogos.slice(Math.ceil(allLogos.length / 2)) : allLogos;

                                        const MarqueeRow = ({ items, reverse = false }: { items: typeof allLogos, reverse?: boolean }) => (
                                            <div className="flex overflow-hidden w-full">
                                                <motion.div
                                                    className="flex gap-8 md:gap-16 py-2 px-4 whitespace-nowrap"
                                                    animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                                                    transition={{ repeat: Infinity, ease: "linear", duration: Math.max(20, items.length * 5) }}
                                                    style={{ width: "fit-content" }}
                                                >
                                                    {/* Quadruple items to ensure smooth infinite loop without gaps */}
                                                    {[...items, ...items, ...items, ...items].map((logo, idx) => {
                                                        const LogoImg = logo.img;
                                                        return (
                                                            <div key={idx} className="inline-flex flex-col items-center gap-3 shrink-0 group cursor-default min-w-[80px]">
                                                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center p-4 shadow-sm group-hover:scale-110 group-hover:shadow-lg group-hover:border-blue-200 transition-all duration-300">
                                                                    <LogoImg className="w-full h-full" />
                                                                </div>
                                                                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-800 transition-colors uppercase tracking-wider">{logo.name}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </motion.div>
                                            </div>
                                        );

                                        return (
                                            <>
                                                <MarqueeRow items={row1} />
                                                {shouldSplit && <MarqueeRow items={row2} reverse />}
                                            </>
                                        );
                                    })()}
                                </div>
                            </motion.div>

                            <div id="instructor" className="mb-12 md:mb-20 scroll-mt-32 md:scroll-mt-40">
                                <h2 className="text-xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] mb-8 flex items-center gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <Users className="w-4 h-4 md:w-5 md:h-5 text-[#0075CF]" />
                                    </div>
                                    Meet Your Instructor
                                </h2>
                                <div className="bg-white border border-slate-100 rounded-3xl p-5 md:p-8 hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                                    <div className="w-32 h-32 rounded-2xl bg-slate-100 overflow-hidden shrink-0 border-4 border-slate-50">
                                        <div className="w-full h-full flex items-center justify-center bg-blue-900 text-white text-3xl font-bold">
                                            {course.trainer.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">{course.trainer}</h3>
                                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-2 md:px-3 py-1 font-bold uppercase tracking-wider text-xs">Lead Instructor</Badge>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                                            With over 10+ years of industry experience, {course.trainer} has mentored thousands of students to successful careers in tech. Expert in {course.category} and real-world project delivery.
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            {["10+ Years Exp", "Corporate Trainer", "Tech Lead"].map((tag, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-400">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="hiring-partners" className="mb-12 md:mb-20 scroll-mt-32 md:scroll-mt-40 text-center">
                                <h2 className="text-xl md:text-3xl lg:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] mb-4 md:mb-8">
                                    Companies where Our students got placed
                                </h2>
                                <p className="text-slate-600 mb-8 text-sm md:text-lg">
                                    Our graduates are hired by top MNCs and product-based companies.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-10 items-center">
                                    {[
                                        { name: "Tech Mahindra", src: "/images/tech-mahindra-1.webp" },
                                        { name: "IBM", src: "/images/IBM.png" },
                                        { name: "Infosys", src: "/images/Infosys.png" },
                                        { name: "Accenture", src: "/images/Accenture.svg-1-1536x405-1-595xh.webp" },
                                        { name: "Wipro", src: "/images/Wipro.png" },
                                        { name: "Mindtree", src: "/images/mindtree.png" },
                                        { name: "Caterpillar", src: "/images/caterpiller.png" },
                                        { name: "Microsoft", src: "/images/Microsoft.webp" },
                                        { name: "Amazon", src: "/images/amazon-logo.webp" },
                                        { name: "Myntra", src: "/images/myntra.png" },
                                        { name: "Flipkart", src: "/images/Flipkart.png" }
                                    ].map((partner, i) => (
                                        <div key={i} className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-110">
                                            <img
                                                src={partner.src}
                                                alt={partner.name}
                                                className="w-full h-10 md:h-14 object-contain transition-all"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div id="certifications" className="mb-12 md:mb-20 scroll-mt-32 md:scroll-mt-40">
                                <h2 className="text-xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] mb-8 flex items-center gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <Award className="w-4 h-4 md:w-5 md:h-5 text-[#0075CF]" />
                                    </div>
                                    Certifications & Career Preparation
                                </h2>
                                <ShowMore initialHeight="240px">
                                    <div className="bg-slate-50 rounded-3xl p-5 md:p-8 border border-slate-100 text-left">
                                        <h4 className="text-sm md:text-lg font-bold text-slate-900 mb-6">Certifications Covered / Recommended:</h4>
                                        <ul className="space-y-4">
                                            {(course.category === "AI/Machine Learning" ? [
                                                "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
                                                "Google TensorFlow Developer Certificate",
                                                "AWS Certified Machine Learning – Specialty",
                                                "IBM AI Engineering Professional Certificate"
                                            ] : course.category === "Data Analytics" ? [
                                                "Microsoft Power BI Data Analyst (PL-300)",
                                                "Google Data Analytics Professional Certificate",
                                                "Tableau Desktop Specialist",
                                                "Python for Data Science (Coursera / IBM)"
                                            ] : course.category === "Cyber Security" ? [
                                                "Certified Ethical Hacker (CEH)",
                                                "CompTIA Security+",
                                                "CISSP (Associate Level Knowledge)",
                                                "OSCP (Foundation)"
                                            ] : course.category === "Data Science" ? [
                                                "Python for Data Science (Coursera / IBM / Google)",
                                                "Machine Learning Specialization (DeepLearning.AI)",
                                                "Tableau Desktop Specialist / Microsoft Power BI Data Analyst (PL-300)",
                                                "AWS Certified Data Practitioner / Google Data Analytics"
                                            ] : course.category === "Data Analytics" ? [
                                                "Microsoft Power BI Data Analyst (PL-300)",
                                                "Google Data Analytics Professional Certificate",
                                                "Tableau Desktop Specialist",
                                                "Python for Data Science (Coursera / IBM)"
                                            ] : course.category === "Quantum Computing" ? [
                                                "Certified Quantum Computing Developer (CQCD)",
                                                "IBM Quantum Developer Certification (Optional)",
                                                "Microsoft Azure Quantum Developer (Optional)",
                                                "AWS Braket Practitioner Badge (Optional)",
                                                "Qiskit Developer Certificate (Optional)"
                                            ] : course.category === "Java Full Stack" ? [
                                                "Oracle Certified Professional: Java SE Programmer",
                                                "Spring Professional Certification (VMware)",
                                                "Full Stack Java Developer Certificate (AOTMS)",
                                                "AWS Certified Developer - Associate (Optional)"
                                            ] : course.category === "Embedded Systems" ? [
                                                "Certified Embedded Systems Engineer (CESE)",
                                                "ARM Accredited Engineer (AAE)",
                                                "Certified IoT Professional (CIoTP)",
                                                "Linux Foundation Certified Engineer (Optional)"
                                            ] : course.category === "DevOps" ? [
                                                "AWS Certified DevOps Engineer – Professional",
                                                "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
                                                "Google Professional Cloud DevOps Engineer",
                                                "Certified Kubernetes Administrator (CKA)",
                                                "HashiCorp Certified: Terraform Associate"
                                            ] : course.category === "Python Full Stack" ? [
                                                "Python Programming Certification (Python Institute / HackerRank)",
                                                "Full Stack Web Development Certification (Meta / freeCodeCamp)",
                                                "Django Developer Certificate (Udemy / Coursera)",
                                                "AWS Cloud Practitioner (AWS Academy)",
                                                "Git & Version Control Certificate",
                                                "Internship Completion Certificate (Academy of Tech Masters)"
                                            ] : course.category === "Data Engineering" ? [
                                                "AWS Certified Data Engineer – Associate",
                                                "Azure Data Engineer Associate (DP-203)",
                                                "Google Professional Data Engineer",
                                                "Databricks Certified Data Engineer Associate",
                                                "Snowflake SnowPro Core Certification"
                                            ] : course.category === "Cloud Consulting" ? [
                                                "AWS Certified Cloud Practitioner / Solutions Architect – Associate",
                                                "Microsoft Certified: Azure Fundamentals (AZ-900) / Administrator (AZ-104)",
                                                "Google Associate Cloud Engineer (ACE)",
                                                "HashiCorp Certified: Terraform Associate",
                                                "Kubernetes Certified Administrator (CKA)",
                                                "DevOps Foundation / AWS DevOps Engineer – Professional"
                                            ] : course.category === "MERN Stack" ? [
                                                "Certified MERN Full Stack Developer (CMFSD)",
                                                "MongoDB University – Developer Certification",
                                                "Meta Front-End Developer Certificate (Coursera)",
                                                "AWS Cloud Practitioner or Render Deployment Badge"
                                            ] : course.category === "MEAN Stack" ? [
                                                "Certified MEAN Stack Developer",
                                                "Google Angular Developer Certification",
                                                "MongoDB Professional Developer",
                                                "OpenJS Node.js Application Developer (JSNAD)"
                                            ] : [
                                                "Academy of Tech Masters – Certified UI/UX Designer",
                                                "Figma Mastery Certificate (Advanced)",
                                                "Google UX Design (Recommended External Certification)",
                                                "Adobe XD Prototyping Certificate (Optional)"
                                            ]).map((cert, i) => (
                                                <li key={i} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
                                                        <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                                    </div>
                                                    <span className="font-bold text-slate-700 mt-0.5 text-sm md:text-base text-left leading-relaxed">{cert}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ShowMore>
                            </div>
                            {/* FAQ Section */}
                            <div id="faq" className="mb-12 md:mb-20 scroll-mt-32 md:scroll-mt-40">
                                <h2 className="text-xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] mb-8 flex items-center gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                                        <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-[#FD5A1A]" />
                                    </div>
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Is this course suitable for beginners?", a: "Yes, our programs are designed to take you from fundamentals to advanced industry-level expertise." },
                                        { q: "Will I get placement assistance?", a: "Absolutely! We provide dedicated placement support, including resume building, mock interviews, and job alerts." },
                                        { q: "Are the classes live or recorded?", a: "All classes are live interactive sessions with expert mentors, and recordings are provided for future reference." },
                                        { q: "What is the certification process?", a: "You will receive an industry-recognized certificate upon successful completion of the course and final project." }
                                    ].map((faq, i) => (
                                        <motion.div
                                            key={i}
                                            initial={false}
                                            className="border border-slate-100 rounded-2xl bg-white overflow-hidden shadow-sm"
                                        >
                                            <button
                                                className="w-full text-left p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                                                onClick={() => {
                                                    const faqIdx = (activeModule === i ? null : i);
                                                    setActiveModule(faqIdx as any);
                                                }}
                                            >
                                                <span className="font-bold text-slate-900 pr-3 text-sm md:text-base">{faq.q}</span>
                                                <ChevronDown className={cn("w-4 h-4 md:w-5 md:h-5 text-slate-400 transition-transform duration-300", activeModule === i && "rotate-180")} />
                                            </button>
                                            <div className={cn(
                                                "transition-all duration-300 ease-in-out",
                                                activeModule === i ? "max-h-96 px-4 pb-4 opacity-100" : "max-h-0 px-4 pb-0 opacity-0 overflow-hidden"
                                            )}>
                                                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">{faq.a}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Sticky */}
                        <div className="col-span-12 lg:col-span-4 mt-12 lg:mt-0">
                            <div className="lg:sticky lg:top-[120px] space-y-8">
                                {/* Course Image Box - Static */}


                                <div className="bg-white rounded-2xl sm:rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-blue-900/5 overflow-hidden group">
                                    {/* Unified Course Header Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#003366] to-transparent opacity-90" />
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <span className="inline-block px-3 py-1 rounded-lg bg-orange-500 text-white text-xs font-bold uppercase tracking-widest shadow-lg mb-2">
                                                {course.category}
                                            </span>
                                            <h3 className="text-white font-bold text-xl leading-tight">{course.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-end gap-3 mb-8">
                                            <span className="text-3xl font-black text-slate-900">{course.price}</span>
                                            <span className="text-lg text-slate-400 line-through font-bold mb-1">{course.originalPrice}</span>
                                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full mb-1 ml-auto">20% OFF</span>
                                        </div>
                                        <div className="space-y-6 mb-8">
                                            {[
                                                { icon: Clock, label: "Duration", value: course.duration, color: "blue" },
                                                { icon: Users, label: "Batch Type", value: "Weekday / Weekend", color: "indigo" },
                                                { icon: Monitor, label: "Mode", value: "Live Interactive", color: "blue", highlight: true },
                                                { icon: Award, label: "Certificate", value: "Globally Recognized", color: "indigo" },
                                            ].map((item, i) => {
                                                const Icon = item.icon;
                                                return (
                                                    <div key={i} className="flex items-start justify-between group/item gap-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className={cn(
                                                                "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
                                                                item.color === "blue" ? "bg-blue-50 group-hover/item:bg-blue-100" : "bg-blue-50 group-hover/item:bg-blue-100"
                                                            )}>
                                                                <Icon className={cn(
                                                                    "w-4.5 h-4.5",
                                                                    item.color === "blue" ? "text-[#0066CC]" : "text-[#0066CC]"
                                                                )} />
                                                            </div>
                                                            <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">{item.label}</span>
                                                        </div>
                                                        <div className="text-right pt-1.5">
                                                            <span className={cn(
                                                                "font-bold text-sm tracking-tight block leading-tight",
                                                                item.highlight ? "text-blue-600" : "text-slate-900"
                                                            )}>
                                                                {item.value}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="space-y-4">
                                            <Button
                                                onClick={handleEnroll}
                                                className="w-full h-14 bg-[#FF6B35] hover:bg-[#ff8559] text-white rounded-[1.25rem] font-bold text-lg shadow-xl shadow-orange-500/20 active:scale-95 transition-all duration-300"
                                            >
                                                Enroll Now
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="w-full h-12 bg-white border-blue-100 text-[#0066CC] hover:bg-blue-50 rounded-[1.25rem] font-bold text-base transition-all"
                                            >
                                                Download Syllabus
                                            </Button>


                                        </div>
                                    </div>

                                    <div className="bg-slate-50/50 p-8 border-t border-slate-100/80">
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="w-1 h-4 bg-blue-600 rounded-full" />
                                            <h4 className="text-xs font-black text-slate-800 uppercase tracking-[0.15em]">Course Includes:</h4>
                                        </div>
                                        <ul className="grid grid-cols-1 gap-4">
                                            {[
                                                "80% Practical Learning",
                                                "Industry Case Studies",
                                                "Git Hub Projects Support",
                                                "Job Alerts & Interview prep"
                                            ].map((inc, k) => (
                                                <li key={k} className="flex items-center gap-3 text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                                    {inc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Sidebar Related Courses */}
                                <div className="mt-12 bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl shadow-black/5">
                                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-8 ml-2">Related Programs</h4>
                                    <div className="space-y-8">
                                        {allCourses
                                            ?.filter(c => c.id !== course.id && c.category === course.category)
                                            .slice(0, 2)
                                            .map(related => (
                                                <Link key={related.id} to={`/course/${related.slug}`} className="block group/item">
                                                    <div className="flex gap-4 items-center">
                                                        <div
                                                            className="w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center p-3 transition-transform group-hover/item:scale-110 bg-blue-50"
                                                        >
                                                            <img src={related.image} alt={related.title} className="w-full h-full object-contain drop-shadow-lg" />
                                                        </div>
                                                        <div>
                                                            <h5 className="text-sm font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors line-clamp-1">{related.title}</h5>
                                                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mt-1">{related.duration}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                </div>

                                {/* Professional Certificate Guarantee Section */}
                                <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 cursor-default">
                                    {/* Shimmer/Spotlight Effect */}
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />

                                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10" />



                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-lg font-bold">Earn Your Certificate</h4>
                                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
                                        </div>
                                        <p className="text-sm text-slate-300 mb-6">Receive a globally recognized certificate upon completion.</p>
                                    </div>

                                    <div className="relative aspect-[1.4/1] bg-white rounded-xl overflow-hidden shadow-2xl transform group-hover:rotate-1 transition-transform duration-500 border-4 border-slate-800">
                                        {/* Certificate Mockup Content */}
                                        <div className="absolute inset-0">
                                            <img
                                                src="/images/Certificate.jpeg"
                                                alt="Course Certificate"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Overlay Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    </div>

                                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-blue-200">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        Verified & Shareable
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

            {/* Related Courses */}
            <section className="py-16 md:py-24 bg-slate-50 w-full overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Explore Related Courses</h2>
                            <p className="text-slate-500">Other programs you might be interested in</p>
                        </div>
                        <Link to="/#courses">
                            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-2">
                                View All Courses
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allCourses
                            ?.filter(c => c.id !== course.id)
                            .slice(0, 3)
                            .map(relatedCourse => (
                                <CourseCard key={relatedCourse.id} course={relatedCourse} />
                            ))}
                    </div>
                </div>
            </section >


            <Footer />


        </div >
    );
}
