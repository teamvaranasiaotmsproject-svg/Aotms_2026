import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    Clock,
    Users,
    ArrowRight,
    MapPin,
    Tag
} from "lucide-react";
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
}
import { cn } from "@/lib/utils";

interface EventManagerProps {
    events: EventItem[];
    onRegister: (eventName: string) => void;
    title: string;
    subtitle?: string;
}

export const EventManager = ({ events, onRegister, title, subtitle }: EventManagerProps) => {
    const [selectedEvent, setSelectedEvent] = useState<EventItem>(events[0]);
    const [isMobile, setIsMobile] = useState(false);

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

    const hasMultiple = events.length > 1;

    return (
        <div className="w-full relative bg-[#FFFFFF] font-sans">
            <div className="w-full max-w-7xl mx-auto py-12 px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tight mb-4">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-gray-500 text-lg max-w-2xl font-medium">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="flex flex-col lg:flex-row gap-12 min-h-[500px]">
                    {events.length === 0 ? (
                        <div className="w-full flex flex-col items-center justify-center p-20 bg-gray-50 rounded-[32px] border border-dashed border-gray-200">
                            <Tag className="w-12 h-12 text-gray-300 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900">No Events Found</h3>
                            <p className="text-gray-500 mt-2 font-medium">Check back later for upcoming technical conducts.</p>
                        </div>
                    ) : (
                        <>
                            {/* LEFT PANEL: Vertical list of thumbnails */}
                            {hasMultiple && (
                                <div className="w-full lg:w-1/3 xl:w-1/4">
                                    <div className="sticky top-32 space-y-4 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0A3D91] mb-6">
                                            Browse {title}
                                        </p>
                                        {events.map((event) => (
                                            <button
                                                key={event.id}
                                                onClick={() => setSelectedEvent(event)}
                                                className={cn(
                                                    "w-full group text-left transition-all duration-300 rounded-xl overflow-hidden mb-4 relative flex flex-col items-start",
                                                    selectedEvent?.id === event.id
                                                        ? "border-2 border-[#0A3D91] bg-white shadow-xl"
                                                        : "border border-gray-100 bg-[#F9FAFB] hover:border-gray-200"
                                                )}
                                            >
                                                <div className="aspect-[21/9] w-full overflow-hidden">
                                                    <img
                                                        src={event.thumbnailUrl}
                                                        alt={event.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                                <span className={cn(
                                                    "absolute top-2 right-2 px-3 py-1.5 border backdrop-blur-xl rounded-xl text-[8px] font-black uppercase tracking-[0.2em] shadow-xl",
                                                    event.name.includes("UI/UX")
                                                        ? "bg-[#0A3D91] text-white border-[#0A3D91]/50"
                                                        : "bg-[#FF8A00] text-white border-[#FF8A00]/50"
                                                )}>
                                                    {event.name.includes("UI/UX") ? "UI/UX Conduct" : "Workshop Conduct"}
                                                </span>
                                                <div className="p-4 pt-1 w-full">
                                                    <h3 className={cn(
                                                        "font-bold text-[13px] leading-tight transition-colors line-clamp-1",
                                                        selectedEvent?.id === event.id ? "text-[#0A3D91]" : "text-[#111111]"
                                                    )}>
                                                        {event.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2 mt-1.5 overflow-hidden">
                                                        <div className="flex items-center gap-1 text-[9px] text-gray-400 font-bold uppercase tracking-wider whitespace-nowrap">
                                                            <Calendar className="w-2.5 h-2.5 text-[#0A3D91]" />
                                                            {event.date}
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* RIGHT PANEL: Selected Details */}
                            <div className={cn(
                                "flex-1",
                                !hasMultiple && "max-w-5xl mx-auto w-full"
                            )}>
                                <AnimatePresence mode="wait">
                                    {selectedEvent && (
                                        <motion.div
                                            key={selectedEvent.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start"
                                        >
                                            {/* WORKSHOP BANNER */}
                                            <div className="md:col-span-12 lg:col-span-5 w-full">
                                                <div className="bg-white rounded-[24px] border border-gray-100 shadow-xl overflow-hidden relative">
                                                    <img
                                                        src={selectedEvent.bannerUrl}
                                                        alt={selectedEvent.name}
                                                        className="w-full aspect-[4/5] object-cover"
                                                    />
                                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                                        <span className="px-3 py-1.5 bg-[#111111] rounded-lg text-[9px] font-black uppercase tracking-[0.1em] text-white shadow-lg border border-white/10">
                                                            {selectedEvent.mode}
                                                        </span>
                                                        <span className={cn(
                                                            "px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.1em] text-white shadow-lg border border-white/10",
                                                            selectedEvent.name.includes("UI/UX") ? "bg-[#0A3D91]" : "bg-[#FF8A00]"
                                                        )}>
                                                            {selectedEvent.name.includes("UI/UX") ? "UI/UX Conduct" : "Workshop Conduct"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mt-6 flex flex-wrap gap-4">
                                                    <div className="px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2">
                                                        <Calendar className="w-4 h-4 text-[#0A3D91]" />
                                                        <span className="text-xs font-bold text-[#111111]">{selectedEvent.date}</span>
                                                    </div>
                                                    <div className="px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2">
                                                        <Clock className="w-4 h-4 text-[#0A3D91]" />
                                                        <span className="text-xs font-bold text-[#111111]">{selectedEvent.duration}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* WORKSHOP DETAILS */}
                                            <div className="md:col-span-12 lg:col-span-7 space-y-8">
                                                <div className="space-y-4">
                                                    <span className="text-[#0A3D91] font-black text-[11px] tracking-[0.3em] uppercase block">
                                                        {selectedEvent.tagline}
                                                    </span>
                                                    <h2 className="text-3xl md:text-5xl font-black text-[#111111] leading-tight">
                                                        {selectedEvent.name}
                                                    </h2>
                                                    <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
                                                        {selectedEvent.description}
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                    <div>
                                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Date</p>
                                                        <p className="text-sm font-bold text-[#111111]">{selectedEvent.date}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Mode</p>
                                                        <p className="text-sm font-bold text-[#111111]">{selectedEvent.mode}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Level</p>
                                                        <p className="text-sm font-bold text-[#111111]">{selectedEvent.level || "All Levels"}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Duration</p>
                                                        <p className="text-sm font-bold text-[#111111]">{selectedEvent.duration}</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <h3 className="text-sm font-black text-[#111111] uppercase tracking-[0.1em]">What You Will Learn:</h3>
                                                    <ul className="grid gap-3">
                                                        {selectedEvent.whatYouWillLearn.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-3">
                                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0A3D91] shrink-0" />
                                                                <span className="text-sm text-gray-600 font-medium">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Registration button removed */}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </>
                    )}
                </div>

                {/* MOBILE STICKY CTA REMOVED */}

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
