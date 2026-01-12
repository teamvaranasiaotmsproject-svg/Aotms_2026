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
    Monitor
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

import { useCourseBySlug, useCourses, Course } from "@/hooks/useCourses";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { LogoCarousel, Logo } from "@/components/ui/logo-carousel";
import { CourseCard } from "@/components/courses/CourseCard";
import { FeatureGrid } from "@/components/FeatureGrid";
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
    SiPython, SiReact, SiNodedotjs, SiAmazonwebservices, SiDocker,
    SiGithub, SiVite, SiPandas, SiNumpy, SiScikitlearn, SiJupyter,
    SiSqlite, SiTableau, SiGooglecloud, SiTerraform,
    SiLinux, SiArduino, SiRaspberrypi,
    SiKalilinux, SiWireshark, SiMetasploit, SiSelenium, SiSpringboot,
    SiHibernate, SiMysql, SiJavascript, SiHtml5, SiCss3, SiDjango,
    SiKubernetes, SiAnsible, SiJenkins, SiPostgresql, SiTensorflow,
    SiPytorch, SiKeras, SiOpencv, SiC, SiIntel
} from "react-icons/si";

const ToolIcons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    "Python": SiPython, "React": SiReact, "Node.js": SiNodedotjs, "AWS": SiAmazonwebservices, "Docker": SiDocker,
    "GitHub": SiGithub, "Vite": SiVite, "Pandas": SiPandas, "NumPy": SiNumpy, "Scikit": SiScikitlearn,
    "Jupyter": SiJupyter, "SQL": SiSqlite, "Tableau": SiTableau, "Azure": SiAmazonwebservices, "GCP": SiGooglecloud,
    "Terraform": SiTerraform, "Linux": SiLinux, "Excel": SiJavascript, "PowerBI": SiTableau, "Arduino": SiArduino,
    "ARM": SiIntel, "Kali Linux": SiKalilinux, "Wireshark": SiWireshark, "Metasploit": SiMetasploit,
    "Selenium": SiSelenium, "Java": SiSpringboot, "Spring Boot": SiSpringboot, "Hibernate": SiHibernate,
    "MySQL": SiMysql, "JavaScript": SiJavascript, "HTML5": SiHtml5, "CSS3": SiCss3, "Django": SiDjango,
    "Kubernetes": SiKubernetes, "Ansible": SiAnsible, "Jenkins": SiJenkins, "PostgreSQL": SiPostgresql,
    "TensorFlow": SiTensorflow, "PyTorch": SiPytorch, "Keras": SiKeras, "OpenCV": SiOpencv, "C": SiC,
    "C++": SiC, "Raspberry Pi": SiRaspberrypi, "STM32": SiIntel, "ESP32": SiIntel, "RTOS": SiLinux,
    "I2C": SiIntel, "SPI": SiIntel, "Qiskit": SiIntel, "IBM Quantum": SiIntel, "Cirq": SiGooglecloud,
    "PennyLane": SiPython, "Quantum Algorithms": SiIntel, "Linear Algebra": SiPython, "Complexity": SiPython
};

const getCourseSpecificLogos = (title: string): Logo[] => {
    const tools = getCourseSpecificTools(title);
    return tools.map((tool, index) => ({
        name: tool,
        id: index,
        img: ToolIcons[tool] || SiJavascript // Fallback icon
    }));
};


const getCourseSpecificTools = (title: string) => {
    const tools: Record<string, string[]> = {
        "Data Science": ["Python", "Pandas", "NumPy", "Scikit", "Jupyter", "SQL", "Tableau", "TensorFlow"],
        "Cloud Computing": ["AWS", "Azure", "GCP", "Docker", "Terraform", "Linux", "Ansible"],
        "Data Analytics": ["Excel", "SQL", "Tableau", "PowerBI", "Python", "Pandas"],
        "DevOps (AWS/Azure)": ["Jenkins", "Docker", "Kubernetes", "Ansible", "Terraform", "GitHub", "Linux"],
        "Cyber Security": ["Kali Linux", "Wireshark", "Metasploit", "Linux", "Python"],
        "Python Full Stack": ["Python", "Django", "React", "PostgreSQL", "HTML5", "CSS3", "JavaScript"],
        "Java Full Stack": ["Java", "Spring Boot", "React", "MySQL", "Hibernate", "JavaScript", "HTML5"],
        "QA Automation": ["Selenium", "Java", "Jenkins", "GitHub", "Maven"],
        "Embedded Systems": ["C", "C++", "ARM", "Arduino", "Raspberry Pi", "STM32", "ESP32", "RTOS", "Linux", "I2C", "SPI"],
        "Quantum Computing": ["Qiskit", "IBM Quantum", "Python", "Cirq", "PennyLane", "Quantum Algorithms", "Jupyter", "Linear Algebra"],
        "AI": ["Python", "TensorFlow", "PyTorch", "Keras", "OpenCV", "Jupyter"],
        "Machine Learning": ["Python", "Pandas", "NumPy", "Scikit", "TensorFlow", "PyTorch"]
    };
    return tools[title] || ["Python", "React", "JavaScript"];
};

const getCourseOutcomes = (category: string) => {
    const outcomes: Record<string, string[]> = {
        "Data Science": [
            "Predictive Modeling: Build robust ML models from scratch.",
            "Visual Storytelling: Master Tableau and Seaborn for insights.",
            "Big Data Handling: Process millions of records with ease.",
            "Deployment: Deploy models to production environments."
        ],
        "DevOps": [
            "CI/CD Mastery: Build fully automated pipelines.",
            "Infrastructure as Code: Manage servers with Terraform.",
            "Containerization: Scale apps using Docker & Kubernetes.",
            "Security: Implement DevSecOps best practices."
        ],
        "AI/Machine Learning": [
            "Neural Networks: Design deep learning architectures.",
            "Computer Vision: Build systems that process visual data.",
            "Real-world AI: Implement NLP models for chatbots.",
            "Scalable ML: Train models on cloud infrastructure."
        ]
    };
    const defaultOutcomes = [
        "Practical Mastery: Gain hands-on experience through 20+ live projects.",
        "Industry Standards: Learn best practices used by tech leaders.",
        "Problem Solving: Develop a mindset to tackle complex challenges.",
        "Job Readiness: Clear interviews with our expert training."
    ];
    return outcomes[category] || defaultOutcomes;
};

const getCourseTheme = (category: string) => {
    if (category.includes("Data") || category.includes("AI") || category.includes("Machine")) {
        return {
            color: "#3b82f6", // Blue-500
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", // Data Visualization
        };
    }
    if (category.includes("Cloud") || category.includes("DevOps")) {
        return {
            color: "#0ea5e9", // Sky-500
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop", // Global Network
        };
    }
    if (category.includes("Security") || category.includes("Cyber")) {
        return {
            color: "#10b981", // Emerald-500
            image: "https://images.unsplash.com/photo-1563206767-5b1d97289374?q=80&w=2541&auto=format&fit=crop", // Matrix/Code
        };
    }
    // Default Web/Full Stack (AOTMS Blue)
    return {
        color: "#FF6B35",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2706&auto=format&fit=crop", // Clean Coding Workspace
    };
};

export default function CourseDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart);
    const { data: course, isLoading: isCourseLoading } = useCourseBySlug(slug || "");
    const { data: allCourses } = useCourses();
    const [activeModule, setActiveModule] = useState<number | null>(0);
    const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
    const [leadLoading, setLeadLoading] = useState(false);

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLeadLoading(true);
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
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-24 pb-8 md:pt-28 md:pb-12 bg-[#0B1221] overflow-hidden flex items-center min-h-[calc(100vh-80px)]">
                {/* Background Textures */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[#0B1221]" />
                    <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
                </div>

                <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
                    {/* REFERENCE IMAGE STYLE - SPLIT HERO CARD - COMPACT FIT */}
                    <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/40 flex flex-col md:flex-row min-h-[500px] lg:min-h-[560px]">

                        {/* LEFT SIDE: Visual Content */}
                        <div className="relative w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center overflow-hidden">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={getCourseTheme(course.category).image}
                                    alt="Course BG"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#003366]/90 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500 text-white text-[11px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-orange-500/30">
                                    Kickstart Your Developer Journey
                                </div>
                                <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-[1.1] uppercase">
                                    Become A <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">{course.title} PRO</span>
                                </h1>
                                <p className="text-blue-100 text-lg font-medium max-w-md leading-relaxed mb-8">
                                    Dominate the digital world with our comprehensive {course.category} training program.
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#003366] bg-slate-200 relative overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-white text-xs font-bold">
                                        <span className="text-orange-400 block text-sm">4.9/5.0</span>
                                        Student Rating
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Skewed Form */}
                        <div className="relative w-full md:w-1/2 bg-[#0066CC] flex flex-col justify-center p-8 md:p-12">

                            {/* The Skewed Divider Effect */}
                            <div className="hidden md:block absolute top-0 bottom-0 -left-20 w-40 bg-[#0066CC] transform -skew-x-[12deg] z-0 shadow-[-20px_0_40px_rgba(0,0,0,0.2)]" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <span className="text-blue-100 font-bold uppercase tracking-wider text-sm">Course Request</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                                    Find Your Best <br /> Course With Us
                                </h2>
                                <p className="text-blue-100 text-lg mb-10 opacity-90 leading-relaxed max-w-md">
                                    Start your IT Career Today! Enroll Now for a free demo and get expert guidance.
                                </p>

                                <form className="space-y-4" onSubmit={handleLeadSubmit}>
                                    <div className="space-y-6">
                                        <div>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your Name"
                                                value={leadForm.name}
                                                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                                                className="w-full h-14 rounded-xl bg-blue-800/50 border border-blue-400/30 text-white placeholder:text-blue-300/50 px-6 focus:outline-none focus:bg-blue-800 focus:border-blue-300 transition-all font-medium text-lg"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Email Address"
                                                value={leadForm.email}
                                                onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                                                className="w-full h-14 rounded-xl bg-blue-800/50 border border-blue-400/30 text-white placeholder:text-blue-300/50 px-6 focus:outline-none focus:bg-blue-800 focus:border-blue-300 transition-all font-medium text-lg"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Phone Number"
                                                value={leadForm.phone}
                                                onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                                                className="w-full h-14 rounded-xl bg-blue-800/50 border border-blue-400/30 text-white placeholder:text-blue-300/50 px-6 focus:outline-none focus:bg-blue-800 focus:border-blue-300 transition-all font-medium text-lg"
                                            />
                                        </div>
                                    </div>

                                    <Button disabled={leadLoading} className="w-full h-16 bg-[#FF6B35] hover:bg-orange-600 text-white rounded-xl font-bold text-xl mt-8 shadow-xl shadow-orange-900/30 transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed">
                                        {leadLoading ? "Submitting..." : "Submit Request"}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div
                className="relative py-20 overflow-hidden bg-[#0066CC]"
            >
                {/* Subtle overlay to soften the theme color if needed */}
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <FeatureGrid />
                </div>
            </div>

            {/* Smart Sticky Navigation Bar */}
            <div className="sticky top-[72px] md:top-[112px] z-30 bg-white/90 backdrop-blur-lg border-b border-slate-200/60 py-4 mb-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                <div className="container mx-auto px-6 overflow-x-auto">
                    <div className="flex items-center gap-1 md:gap-4 md:justify-center min-w-max">
                        {[
                            { id: "curriculum", label: "Curriculum", icon: BookOpen },
                            { id: "outcomes", label: "Outcomes", icon: CheckCircle2 },
                            { id: "tools", label: "Tools", icon: Monitor },
                            { id: "instructor", label: "Instructor", icon: Users },
                            { id: "faq", label: "FAQ", icon: Globe },
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-slate-500 hover:text-[#0066CC] hover:bg-blue-50/50 transition-all border border-transparent hover:border-blue-100"
                            >
                                <item.icon className="w-4 h-4" />
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Course Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div id="curriculum" className="mb-12 scroll-mt-40">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-blue-600" />
                                    </div>
                                    Detailed Curriculum
                                </h2>
                                <p className="text-slate-600 mb-10 max-w-2xl text-lg leading-relaxed">
                                    Master the skills through our comprehensive, industry-aligned roadmap. Each module is crafted by experts to ensure practical mastery.
                                </p>

                                <div className="space-y-4">
                                    {course.curriculum.map((module, mIdx) => (
                                        <div
                                            key={mIdx}
                                            className={cn(
                                                "border rounded-2xl transition-all duration-300 overflow-hidden",
                                                activeModule === mIdx ? "shadow-md border-[#0066CC]/40 bg-blue-50/50" : "border-slate-100"
                                            )}
                                        >
                                            <button
                                                onClick={() => setActiveModule(activeModule === mIdx ? null : mIdx)}
                                                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span
                                                        className="w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0 bg-[#0066CC] shadow-lg shadow-blue-500/20"
                                                    >
                                                        {mIdx + 1}
                                                    </span>
                                                    <h3 className="text-lg font-bold text-slate-900">{module.title}</h3>
                                                </div>
                                                <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform", activeModule === mIdx && "rotate-180")} />
                                            </button>

                                            <div className={cn(
                                                "grid transition-all duration-300 ease-in-out",
                                                activeModule === mIdx ? "grid-rows-[1fr] opacity-100 px-6 pb-6" : "grid-rows-[0fr] opacity-0"
                                            )}>
                                                <div className="overflow-hidden">
                                                    <ul className="space-y-3 pt-2">
                                                        {module.lessons.map((lesson, lIdx) => (
                                                            <li key={lIdx} className="flex items-start gap-3 text-slate-600">
                                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                                <span className="text-sm md:text-base">{lesson}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div id="outcomes" className="mb-20 scroll-mt-40">
                                <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 md:p-12">
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">What You'll Learn</h2>
                                        <p className="text-slate-500">Core outcomes and key takeaways of this program</p>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        {getCourseOutcomes(course.category).map((outcome, i) => {
                                            const [title, desc] = outcome.split(": ");
                                            return (
                                                <div key={i} className="flex gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                                                        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>


                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                id="tools" className="mb-20 scroll-mt-40"
                            >
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 tracking-tight">Tools & Technologies</h2>
                                    <p className="text-slate-500 font-medium">Master the essential software used in the industry</p>
                                </div>
                                <div className="flex flex-col items-center gap-10">
                                    <LogoCarousel
                                        columnCount={Math.min(getCourseSpecificTools(course.title).length, 3)}
                                        logos={getCourseSpecificLogos(course.title)}
                                    />
                                </div>
                            </motion.div>

                            <div id="instructor" className="mb-20 scroll-mt-40">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-blue-600" />
                                    </div>
                                    Meet Your Instructor
                                </h2>
                                <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-8 items-center md:items-start">
                                    <div className="w-32 h-32 rounded-2xl bg-slate-100 overflow-hidden shrink-0 border-4 border-slate-50">
                                        <div className="w-full h-full flex items-center justify-center bg-blue-900 text-white text-3xl font-bold">
                                            {course.trainer.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <h3 className="text-2xl font-bold text-slate-900">{course.trainer}</h3>
                                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Lead Instructor</Badge>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed mb-6">
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

                            <div id="faq" className="mb-12 scroll-mt-40">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <Globe className="w-5 h-5 text-blue-600" />
                                    </div>
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Who can enroll in this course?", a: "Anyone from a technical or non-technical background looking to start or transition into a career in tech. We cover everything from the absolute basics." },
                                        { q: "Is job assistance provided?", a: "Yes! We offer 100% placement support, including resume building, mock interviews, and access to our network of 200+ hiring partners." },
                                        { q: "Can I access the recordings later?", a: "Absolutely. All our live sessions are recorded and you get lifetime access to our LMS where you can review them anytime." }
                                    ].map((faq, i) => (
                                        <div key={i} className="border border-slate-100 rounded-2xl p-6 hover:border-blue-100 transition-colors">
                                            <h4 className="text-base font-bold text-slate-900 mb-3">{faq.q}</h4>
                                            <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Sticky */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-8">
                                {/* Course Image Box - Static */}


                                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-blue-900/5 overflow-hidden group">
                                    {/* Unified Course Header Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#003366] to-transparent opacity-90" />
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <span className="inline-block px-3 py-1 rounded-lg bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg mb-2">
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
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start justify-between group/item gap-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className={cn(
                                                            "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
                                                            item.color === "blue" ? "bg-blue-50 group-hover/item:bg-blue-100" : "bg-blue-50 group-hover/item:bg-blue-100"
                                                        )}>
                                                            <item.icon className={cn(
                                                                "w-4.5 h-4.5",
                                                                item.color === "blue" ? "text-[#0066CC]" : "text-[#0066CC]"
                                                            )} />
                                                        </div>
                                                        <span className="text-slate-500 font-bold text-[11px] uppercase tracking-wider">{item.label}</span>
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
                                            ))}
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
                                            <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.15em]">Course Includes:</h4>
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
                                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{related.duration}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                </div>

                                {/* Certificate Preview with Highlight Animation */}
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
                </div>
            </section>

            {/* Related Courses */}
            <section className="py-16 md:py-24 bg-slate-50">
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allCourses
                            ?.filter(c => c.id !== course.id)
                            .slice(0, 3)
                            .map(relatedCourse => (
                                <CourseCard key={relatedCourse.id} course={relatedCourse} />
                            ))}
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}
