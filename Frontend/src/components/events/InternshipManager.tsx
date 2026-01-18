import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    Clock,
    ArrowRight,
    Tag,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface EventItem {
    id: string;
    name: string;
    description: string;
    thumbnailUrl: string;
    bannerUrl: string;
    mode: string;
    date: string;
    duration: string;
    tagline?: string;
    whatYouWillLearn: string[];
    level?: string;
    isRegistrationOpen?: boolean;
    showRegisterButton?: boolean;
}

interface InternshipManagerProps {
    events: EventItem[];
    title: string;
    subtitle?: string;
}

export const InternshipManager = ({ events, title, subtitle }: InternshipManagerProps) => {

    const [selectedEvent, setSelectedEvent] = useState<EventItem>(events[0]);
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (events.length > 0) {
            setSelectedEvent(events[0]);
        }
    }, [events]);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el || isPaused) return;

        if (window.innerWidth < 640) return;

        let animationFrameId: number;

        const scroll = () => {
            if (isMobile) {
                if (el.scrollLeft >= el.scrollWidth / 2) {
                    el.scrollLeft = 0;
                } else {
                    el.scrollLeft += 0.3;
                }
            } else {
                if (el.scrollTop >= el.scrollHeight / 2) {
                    el.scrollTop = 0;
                } else {
                    el.scrollTop += 1;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, events, isMobile]);

    const handleApplyClick = () => {
        if (selectedEvent) {
            window.location.href = `/contact?internship=${selectedEvent.id}`;
        }
    };

    const hasMultiple = events.length > 1;
    const displayEvents = hasMultiple ? [...events, ...events, ...events, ...events] : events;

    return (
        <div className="w-full relative bg-[#FFFFFF] font-sans">
            <div className="w-full max-w-7xl mx-auto py-12 md:py-24 px-6 md:px-12 relative z-10">
                {(title || subtitle) && (
                    <div className="mb-12 md:mb-20 text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] tracking-tight mb-8">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-gray-500 text-base md:text-xl max-w-4xl font-medium mx-auto lg:mx-0 leading-relaxed opacity-80">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[500px]">
                    {events.length === 0 ? (
                        <div className="w-full flex flex-col items-center justify-center p-20 bg-gray-50 rounded-[32px] border border-dashed border-gray-200">
                            <Tag className="w-12 h-12 text-gray-300 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900">No Internships Found</h3>
                            <p className="text-gray-500 mt-2 font-medium">Check back later for openings.</p>
                        </div>
                    ) : (
                        <>
                            {events.length > 0 && (
                                <div className="w-full lg:w-1/3 xl:w-1/4">
                                    <div className={cn(
                                        "lg:sticky lg:top-32 flex flex-col",
                                        isMobile ? "h-auto" : "h-[600px] lg:max-h-[80vh]"
                                    )}>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0075CF] mb-4 hidden lg:block">
                                            Browse Internships
                                        </p>
                                        <div
                                            ref={scrollRef}
                                            onMouseEnter={() => setIsPaused(true)}
                                            onMouseLeave={() => setIsPaused(false)}
                                            className={cn(
                                                "flex custom-scrollbar pointer-events-auto transition-all",
                                                isMobile
                                                    ? "flex-row overflow-x-auto overflow-y-hidden space-x-4 pb-6 px-1 scroll-smooth"
                                                    : "flex-col overflow-y-auto pr-2 space-y-4 h-[600px] lg:max-h-[80vh]"
                                            )}
                                        >
                                            {displayEvents.map((event, index) => {
                                                const isSelected = selectedEvent?.id === event.id && index < events.length;

                                                return (
                                                    <button
                                                        key={`event-${event.id}-${index}`}
                                                        onClick={() => setSelectedEvent(event)}
                                                        className={cn(
                                                            "group text-left transition-all duration-300 rounded-xl overflow-hidden mb-1 relative flex flex-col items-start shrink-0",
                                                            isMobile ? "w-48" : "w-full",
                                                            isSelected
                                                                ? "ring-2 ring-[#0075CF] bg-white shadow-xl scale-[1.02] z-10"
                                                                : "border border-gray-100 bg-[#F9FAFB] hover:border-gray-200"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "w-full overflow-hidden transition-all duration-500",
                                                            isMobile ? "aspect-[4/3]" : "aspect-video"
                                                        )}>
                                                            <img
                                                                src={event.thumbnailUrl}
                                                                alt={event.name}
                                                                loading="lazy"
                                                                className={cn(
                                                                    "w-full h-full object-cover transition-transform duration-700",
                                                                    !isMobile && "group-hover:scale-110"
                                                                )}
                                                            />
                                                        </div>
                                                        <span className={cn(
                                                            "absolute top-2 right-2 px-1.5 py-0.5 border backdrop-blur-md rounded text-[7px] font-black uppercase tracking-wider shadow-sm",
                                                            isSelected ? "bg-[#0075CF] text-white border-[#0075CF]" : "bg-white/90 text-[#111111] border-gray-200"
                                                        )}>
                                                            {event.mode}
                                                        </span>
                                                        <div className="p-3 w-full">
                                                            <h3 className={cn(
                                                                "font-bold text-xs sm:text-sm leading-tight transition-colors line-clamp-1",
                                                                isSelected ? "text-[#0075CF]" : "text-[#111111]"
                                                            )}>
                                                                {event.name}
                                                            </h3>
                                                            <div className="flex items-center gap-2 mt-2 overflow-hidden">
                                                                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold uppercase tracking-wider whitespace-nowrap">
                                                                    <Calendar className="w-3 h-3 text-[#0075CF]" />
                                                                    {event.date}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className={cn(
                                "flex-1 transition-all duration-500 relative rounded-[40px] p-1 overflow-hidden",
                                !hasMultiple && "max-w-4xl mx-auto w-full",
                                isMobile && "mt-0"
                            )}>
                                {/* Animated Background for Preview - Desktop Only */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 md:bg-slate-50 md:opacity-50" />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 90, 0],
                                        opacity: [0.1, 0.2, 0.1]
                                    }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="hidden md:block absolute -top-[20%] -right-[20%] w-[60%] h-[60%] bg-blue-400 blur-[100px] rounded-full pointer-events-none"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        rotate: [0, -90, 0],
                                        opacity: [0.1, 0.3, 0.1]
                                    }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="hidden md:block absolute -bottom-[20%] -left-[20%] w-[70%] h-[70%] bg-indigo-400 blur-[120px] rounded-full pointer-events-none"
                                />
                                <div className="hidden md:block absolute inset-0 backdrop-blur-[2px] pointer-events-none" />
                                <AnimatePresence mode="wait">
                                    {selectedEvent && (
                                        <motion.div
                                            key={selectedEvent.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10 p-4 md:p-8"
                                        >
                                            <div className="md:col-span-12 lg:col-span-5 w-full">
                                                <div className="bg-white rounded-2xl sm:rounded-[32px] border border-gray-100 shadow-xl overflow-hidden relative group max-w-full mx-auto">
                                                    <img
                                                        src={selectedEvent.bannerUrl}
                                                        alt={selectedEvent.name}
                                                        loading="lazy"
                                                        className={cn(
                                                            "w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] object-cover transition-transform duration-1000",
                                                            !isMobile && "group-hover:scale-105"
                                                        )}
                                                    />
                                                </div>
                                                <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                                                    <div className="px-2 py-1 bg-gray-50 rounded-md border border-gray-100 flex items-center gap-1">
                                                        <Calendar className="w-3 h-3 text-[#0075CF]" />
                                                        <span className="text-[9px] sm:text-[11px] font-bold text-[#111111]">{selectedEvent.date}</span>
                                                    </div>
                                                    <div className="px-2 py-1 bg-gray-50 rounded-md border border-gray-100 flex items-center gap-1">
                                                        <Clock className="w-3 h-3 text-[#FD5A1A]" />
                                                        <span className="text-[9px] sm:text-[11px] font-bold text-[#111111]">{selectedEvent.duration}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="md:col-span-12 lg:col-span-7 space-y-5">
                                                <div className="space-y-4">
                                                    <span className="text-[#FD5A1A] font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase block">
                                                        {selectedEvent.tagline}
                                                    </span>
                                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] leading-tight">
                                                        {selectedEvent.name}
                                                    </h2>
                                                    <p className="text-gray-500 text-[12px] sm:text-[13px] leading-relaxed max-w-full">
                                                        {selectedEvent.description}
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm">
                                                    <div>
                                                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Date</p>
                                                        <p className="text-xs font-bold text-[#111111]">{selectedEvent.date}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Mode</p>
                                                        <p className="text-xs font-bold text-[#111111]">{selectedEvent.mode}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Level</p>
                                                        <p className="text-xs font-bold text-[#111111]">{selectedEvent.level || "All Levels"}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Duration</p>
                                                        <p className="text-xs font-bold text-[#111111]">{selectedEvent.duration}</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <h3 className="text-[10px] font-black text-[#111111] uppercase tracking-[0.2em]">What You Will Learn:</h3>
                                                    <ul className="grid gap-2.5 sm:grid-cols-2">
                                                        {selectedEvent.whatYouWillLearn.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-3">
                                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FD5A1A] shrink-0" />
                                                                <span className="text-[11px] sm:text-xs text-gray-600 font-medium leading-relaxed">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                                                    <button
                                                        onClick={handleApplyClick}
                                                        className="group relative px-8 py-4 bg-[#111111] hover:bg-[#0A3D91] rounded-xl transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-[#0A3D91]/20 hover:-translate-y-1 w-full md:w-auto"
                                                    >
                                                        <div className="relative z-10 flex items-center justify-center gap-3">
                                                            <span className="text-white font-black tracking-widest uppercase text-xs">
                                                                Apply Now
                                                            </span>
                                                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </>
                    )}
                </div>

                <style>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 3px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #DAE1E7;
                        border-radius: 10px;
                    }
                `}</style>
            </div>
        </div>
    );
};
