"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Github,
    Twitter,
    Youtube,
    Linkedin,
    ChevronLeft,
    ChevronRight,
    Briefcase,
    ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
    name: string;
    title: string;
    description: string;
    imageUrl: string;
    specialty: string;
    experience: string;
    linkedinUrl?: string;
    githubUrl?: string;
    twitterUrl?: string;
}

const testimonials: Testimonial[] = [
    {
        name: "V. Adilakshmi",
        title: "Data Analytics Expert",
        specialty: "Data Analytics",
        experience: "8+ Years",
        description:
            "Passionate about uncovering hidden patterns in data to drive business growth. Expert in statistical analysis, data visualization, and predictive modeling for real-world impact.",
        imageUrl:
            "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970599/mentos-1_ch1jur?_a=BAMAOGGo0",
        linkedinUrl: "https://www.linkedin.com/in/adilakshmi-vemaala-6490bb342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        name: "Intiaz Shaik",
        title: "Cyber Security Specialist",
        specialty: "Cyber Security",
        experience: "6+ Years",
        description:
            "Dedicated to protecting digital frontiers and fortifying enterprise defenses. Specialist in ethical hacking, network security, and incident response with a focus on zero-trust architectures.",
        imageUrl:
            "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970599/mentos-2_hod2iu?_a=BAMAOGGo0",
        linkedinUrl: "https://www.linkedin.com/in/intiaz-shaik-ba45891b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        name: "P.Lakshmi Chaitanya",
        title: "CRT Training Expert",
        specialty: "CRT",
        experience: "10+ Years",
        description:
            "Empowering students with essential Campus Recruitment Training (CRT) skills. Focused on aptitude, soft skills, and interview preparation to ensure career success in the tech industry.",
        imageUrl:
            "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970600/mentos-3_dxrrty?_a=BAMAOGGo0",
        linkedinUrl: "#",
    },
    {
        name: "Kiran Kumar",
        title: "Senior Instructor",
        specialty: "Software Development",
        experience: "7+ Years",
        description:
            "Experienced educator and developer with a passion for teaching complex coding concepts in a simplified manner. dedicated to student success.",
        imageUrl:
            "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768979471/Mentor_dvgns5.jpg",
        linkedinUrl: "#",
    },
    {
        name: "Divya Rani",
        title: "QA Automation Lead",
        specialty: "QA Automation",
        experience: "6+ Years",
        description:
            "Expert in manual and automated testing, ensuring robust software quality through comprehensive test strategies and automation frameworks.",
        imageUrl:
            "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970600/mentor-5_a4t9yq?_a=BAMAOGGo0",
        linkedinUrl: "#",
    }
];

export interface TestimonialCarouselProps {
    className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const activeMentor = testimonials[currentIndex];

    const socialIcons = [
        { icon: Linkedin, url: activeMentor.linkedinUrl, label: "LinkedIn" },
        { icon: Github, url: activeMentor.githubUrl, label: "GitHub" },
    ].filter(social => social.url);

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [isPaused]);

    return (
        <div
            className={cn("w-full max-w-7xl mx-auto px-4", className)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* 1. Selection Row - 5 Mentors */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                {testimonials.map((mentor, index) => (
                    <button
                        key={mentor.name}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "group relative flex flex-col items-center transition-all duration-300 transform active:scale-95",
                            currentIndex === index ? "scale-105 -translate-y-1" : "hover:-translate-y-0.5 opacity-60 hover:opacity-100"
                        )}
                    >
                        <div className={cn(
                            "w-14 h-14 md:w-16 md:h-16 rounded-full transition-all duration-300",
                            currentIndex === index
                                ? "ring-2 ring-blue-600 ring-offset-2 scale-110"
                                : "opacity-70 hover:opacity-100 filter grayscale hover:grayscale-0"
                        )}>
                            <img
                                src={mentor.imageUrl}
                                alt={mentor.name}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </button>
                ))}
            </div>

            {/* 2. Detail View - Image Left | Content Right */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={activeMentor.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-100 dark:border-slate-800 overflow-hidden max-w-5xl mx-auto"
                >
                    <div className="flex flex-col md:row min-h-[350px] md:flex-row">
                        {/* Image Side (Left) */}
                        <div className="w-full md:w-[35%] relative group h-[250px] md:h-auto">
                            <img
                                src={activeMentor.imageUrl}
                                alt={activeMentor.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white dark:to-slate-900 hidden md:block" />

                            {/* Specialty Badge */}
                            <div className="absolute top-4 left-4 px-3 py-1.5 bg-blue-600/90 backdrop-blur-md rounded-lg text-white text-[9px] font-black uppercase tracking-[0.15em] shadow-lg">
                                {activeMentor.specialty}
                            </div>
                        </div>

                        {/* Content Side (Right) */}
                        <div className="w-full md:w-[65%] p-6 md:p-8 flex flex-col justify-center">
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                                        {activeMentor.name}
                                    </h2>
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                                </div>
                                <div className="flex flex-wrap items-center gap-3 text-blue-600 font-bold uppercase tracking-wider text-[11px]">
                                    <span>{activeMentor.title}</span>
                                    <span className="h-3 w-px bg-slate-200 hidden sm:block" />
                                    <div className="flex items-center gap-1.5 text-slate-500 font-semibold tracking-normal text-xs capitalize">
                                        <Briefcase className="w-4 h-4 text-blue-500" />
                                        {activeMentor.experience} Exp
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6 italic font-medium">
                                "{activeMentor.description}"
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mt-auto">
                                <div className="flex gap-3">
                                    {socialIcons.map(({ icon: Icon, label, url }) => (
                                        <a
                                            key={label}
                                            href={url || '#'}
                                            className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                                            aria-label={label}
                                        >
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                                <button className="btn-secondary px-6 py-2 rounded-xl flex items-center gap-2 group text-xs font-bold active:scale-95 transition-transform">
                                    View Profile
                                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
