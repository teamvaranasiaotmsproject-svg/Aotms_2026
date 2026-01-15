import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface CourseDetailHeroProps {
    course: {
        title: string;
        category: string;
        image?: string;
        duration: string;
    };
    handleEnroll: () => void;
}

export const CourseDetailHero: React.FC<CourseDetailHeroProps> = ({ course, handleEnroll }) => {
    return (
        <section className="hero course-hero relative pt-28 pb-16 md:pt-32 md:pb-20 bg-[#0066CC] overflow-hidden w-full">
            {/* Background Base with Rich Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#002855] to-[#00509d]" />

            {/* Optional: Course Specific Background Image Overlay */}
            {course.image && (
                <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay bg-no-repeat bg-cover bg-center transition-opacity duration-700"
                    style={{ backgroundImage: `url(${course.image})` }}
                />
            )}

            {/* Dynamic Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.1]"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            {/* Vibrant Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Right Orange Blast */}
                <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-[#FD5A1A] opacity-40 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse" />

                {/* Bottom Left Blue Depth */}
                <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-[#60a5fa] opacity-20 rounded-full blur-[60px] md:blur-[100px] mix-blend-overlay" />

                {/* Floating Shapes for Visual Interest */}
                <div className="absolute top-20 left-[10%] w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-2xl border border-white/10" />
                <div className="absolute bottom-40 right-[20%] w-48 h-48 md:w-64 md:h-64 bg-blue-400/10 rounded-full blur-3xl border border-white/5" />
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center">

                    {/* LEFT SIDE: Content */}
                    <div className="text-white space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FD5A1A]/10 border border-[#FD5A1A]/30 text-[#FD5A1A] text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-[#FD5A1A] animate-pulse" />
                            Enrolling Now
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight drop-shadow-lg px-2">
                            <span className="text-white">Become A</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#FD5A1A] drop-shadow-2xl">{course.title} PRO</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl drop-shadow-md mx-auto lg:mx-0 px-4">
                            Dominate the digital world with our comprehensive <span className="text-[#FD5A1A] font-bold">{course.category}</span> training program. Get placed in <span className="text-[#FD5A1A] font-bold">top MNCs</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 sm:gap-6 pt-6 sm:pt-4 w-full px-4">
                            {/* Duration Badge - Professional Look */}
                            <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-4 bg-white/5 border border-white/10 px-6 py-4 sm:px-5 sm:py-2.5 rounded-2xl backdrop-blur-sm shadow-lg hover:bg-white/10 transition-colors">
                                <div className="p-2.5 sm:p-2 bg-[#FD5A1A]/20 rounded-xl">
                                    <Clock className="w-6 h-6 sm:w-5 sm:h-5 text-[#FD5A1A]" />
                                </div>
                                <div className="text-left">
                                    <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1 whitespace-nowrap">Course Duration</div>
                                    <div className="text-white text-xl sm:text-xl font-bold">{course.duration}</div>
                                </div>
                            </div>

                            {/* Enrolled Stats - Text Only (Letters) */}
                            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start sm:pl-4 sm:border-l border-white/10 text-center sm:text-left py-2">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl sm:text-3xl font-black text-white">2k+</span>
                                    <span className="text-blue-200 font-medium text-lg sm:text-lg">Students</span>
                                </div>
                                <div className="text-sm sm:text-sm text-white/60 font-bold">Currently Enrolled</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Form */}
                    <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-5 md:p-8 xl:p-12 shadow-2xl max-w-xl mx-auto lg:ml-auto lg:mr-0 text-center lg:text-left">
                        <div className="mb-4 sm:mb-8">
                            <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-3">Book a Free Demo</h3>
                            <p className="text-blue-100/90 text-sm sm:text-base xl:text-lg font-medium">Fill the form below to get instant access to course curriculum.</p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleEnroll(); }}>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full h-12 sm:h-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-blue-200/50 px-5 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all font-medium text-base sm:text-lg"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full h-12 sm:h-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-blue-200/50 px-5 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all font-medium text-base sm:text-lg"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full h-12 sm:h-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-blue-200/50 px-5 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all font-medium text-base sm:text-lg"
                                />
                            </div>

                            <Button className="w-full h-12 sm:h-14 bg-[#FD5A1A] hover:bg-[#e04f16] text-white rounded-xl font-bold text-lg sm:text-xl shadow-lg shadow-[#FD5A1A]/20 transition-all mt-3 sm:mt-4">
                                Get Started Now
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};