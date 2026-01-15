import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    Clock,
    ArrowRight,
    Tag,
    Users,
    Award,
    CheckCircle2,
    X
} from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { toast } from "sonner";

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

interface EventManagerProps {
    events: EventItem[];
    title: string;
    subtitle?: string;
}

interface Winner {
    rank: number;
    teamName: string;
    collegeName: string;
    members: string[];
    imageUrl: string;
}

export const EventManager = ({ events, title, subtitle }: EventManagerProps) => {

    const [selectedEvent, setSelectedEvent] = useState<EventItem>(events[0]);
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isWinnersModalOpen, setIsWinnersModalOpen] = useState(false);
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);
    const [winnersData, setWinnersData] = useState<Winner[]>([]);
    const [loadingWinners, setLoadingWinners] = useState(false);
    const [regFormData, setRegFormData] = useState({
        name: "",
        email: "",
        phone: "",
        event: ""
    });
    const [submittingReg, setSubmittingReg] = useState(false);

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

        // Disable auto-scroll on very small screens to improve performance
        if (window.innerWidth < 640) return;

        let animationFrameId: number;

        const scroll = () => {
            if (isMobile) {
                // Slower horizontal scroll for mobile
                if (el.scrollLeft >= el.scrollWidth / 2) {
                    el.scrollLeft = 0;
                } else {
                    el.scrollLeft += 0.3; // Reduced from 0.5
                }
            } else {
                // Vertical scroll for desktop
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

    const isHackathon = title === "Hackathons";

    const fetchWinners = async (eventId: string) => {
        setLoadingWinners(true);
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/winners/${eventId}`);
            if (response.data && response.data.winners) {
                setWinnersData(response.data.winners);
            } else {
                setWinnersData([]);
            }
        } catch (error) {
            console.error("Failed to fetch winners", error);
            setWinnersData([]);
        } finally {
            setLoadingWinners(false);
        }
    };

    const handleButtonClick = () => {
        if (isHackathon && selectedEvent) {
            // Check if winners might exist (logic can be improved, but for now we keep it simple)
            fetchWinners(selectedEvent.id);
            setIsWinnersModalOpen(true);
        } else if ((title === "Workshops" || title === "Weekly Activities" || title === "Events") && selectedEvent) {
            if (selectedEvent.isRegistrationOpen === false) {
                toast.error("Registration for this event is closed.");
                return;
            }
            setRegFormData(prev => ({ ...prev, event: selectedEvent.name }));
            setIsRegModalOpen(true);
        } else if (title === "Courses" && selectedEvent) {
            window.location.href = `/course/${selectedEvent.id}`;
        } else if (title === "Internships" && selectedEvent) {
            window.location.href = `/contact?internship=${selectedEvent.id}`;
        }
    };

    const handleRegChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const numbers = value.replace(/[^0-9]/g, '');
            if (numbers.length <= 10) setRegFormData({ ...regFormData, [name]: numbers });
            return;
        }
        if (name === 'name') {
            const alphas = value.replace(/[^a-zA-Z\s]/g, '');
            setRegFormData({ ...regFormData, [name]: alphas });
            return;
        }
        setRegFormData({ ...regFormData, [name]: value });
    };

    const handleRegSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittingReg(true);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regFormData.name.trim().length < 3) {
            toast.error("Please enter a valid Name (min 3 chars)");
            setSubmittingReg(false);
            return;
        }
        if (!emailRegex.test(regFormData.email)) {
            toast.error("Please enter a valid Email");
            setSubmittingReg(false);
            return;
        }
        if (regFormData.phone.length !== 10) {
            toast.error("Please enter a 10-digit Phone Number");
            setSubmittingReg(false);
            return;
        }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/leads`, {
                ...regFormData,
                type: 'event-registration'
            });
            toast.success(`Successfully registered for ${selectedEvent?.name}!`);
            setIsRegModalOpen(false);
            setRegFormData({ name: "", email: "", phone: "", event: "" });
        } catch (error) {
            toast.error("Registration failed. Please try again.");
        } finally {
            setSubmittingReg(false);
        }
    };

    const hasMultiple = events.length > 1;
    const displayEvents = hasMultiple ? [...events, ...events, ...events, ...events] : events;

    return (
        <div className="w-full relative bg-[#FFFFFF] font-sans">
            {/* Winners Modal */}
            <AnimatePresence>
                {isWinnersModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setIsWinnersModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                <div>
                                    <h3 className="text-2xl font-black text-[#111111] tracking-tight">
                                        Winners
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium mt-0.5">
                                        {selectedEvent?.name}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsWinnersModalOpen(false)}
                                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    <span className="text-gray-500 font-bold text-2xl">×</span>
                                </button>
                            </div>

                            <div className="p-4 sm:p-6 space-y-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
                                {loadingWinners ? (
                                    <div className="flex justify-center p-12">
                                        <div className="w-8 h-8 border-4 border-gray-200 border-t-[#0075CF] rounded-full animate-spin" />
                                    </div>
                                ) : winnersData.length > 0 ? (
                                    winnersData.map((winner, idx) => (
                                        <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-white p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                            <div className="w-full md:w-56 aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-white shrink-0 relative group self-center md:self-start">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                                <img
                                                    src={winner.imageUrl}
                                                    alt={winner.teamName}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className={cn(
                                                    "absolute top-3 left-3 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider shadow-md backdrop-blur-md border border-white/20 text-white",
                                                    winner.rank === 1 ? "bg-yellow-500/90" :
                                                        winner.rank === 2 ? "bg-slate-400/90" :
                                                            "bg-orange-600/90"
                                                )}>
                                                    {winner.rank === 1 ? "1st Prize" : winner.rank === 2 ? "2nd Prize" : winner.rank === 3 ? "3rd Prize" : `${winner.rank}th`}
                                                </div>
                                            </div>

                                            <div className="flex-1 w-full text-center md:text-left space-y-3 pt-2">
                                                <div>
                                                    <p className="text-[#0075CF] text-[11px] font-black uppercase tracking-[0.2em] mb-2">Team Name</p>
                                                    <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-[#111111] leading-none mb-1">
                                                        {winner.teamName}
                                                    </h4>
                                                </div>

                                                <div>
                                                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">Affiliation</p>
                                                    <p className="text-base sm:text-lg font-bold text-gray-700 leading-tight">
                                                        {winner.collegeName}
                                                    </p>
                                                </div>

                                                {winner.members && winner.members.length > 0 && (
                                                    <div className="pt-2">
                                                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">Team Members</p>
                                                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                                            {winner.members.map((member, mIdx) => (
                                                                <div key={mIdx} className="flex items-center gap-1.5 px-3 py-1 bg-blue-50/50 text-[#0A3D91] rounded-lg border border-blue-100/50 font-bold text-[11px]">
                                                                    <div className="w-1 h-1 rounded-full bg-[#0075CF]" />
                                                                    {member}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 text-gray-500 font-medium">
                                        No winners data found for this hackathon.
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Registration Modal */}
            <AnimatePresence>
                {isRegModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setIsRegModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-[#0075CF] p-8 text-white relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                                <button
                                    onClick={() => setIsRegModalOpen(false)}
                                    className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <X className="w-5 h-5 text-white" />
                                </button>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                                    <Calendar className="w-3 h-3" /> Registration
                                </div>
                                <h3 className="text-3xl font-black tracking-tight leading-tight">
                                    Join the {title === "Workshops" ? "Workshop" : "Event"}
                                </h3>
                                <p className="text-white/70 font-bold mt-2 truncate">{selectedEvent?.name}</p>
                            </div>

                            <form onSubmit={handleRegSubmit} className="p-8 space-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0A3D91] ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={regFormData.name}
                                        onChange={handleRegChange}
                                        placeholder="Enter your name"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-[#111111] font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:bg-white transition-all"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0A3D91] ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={regFormData.email}
                                        onChange={handleRegChange}
                                        placeholder="Enter your email"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-[#111111] font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:bg-white transition-all"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0A3D91] ml-1">Phone Number</label>
                                    <div className="relative group/input">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold border-r border-gray-100 pr-3 pointer-events-none group-focus-within/input:text-[#0A3D91] transition-colors">
                                            +91
                                        </div>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={regFormData.phone}
                                            onChange={handleRegChange}
                                            placeholder="Mobile Number"
                                            className="w-full pl-16 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-[#111111] font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#0075CF] focus:bg-white transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    disabled={submittingReg}
                                    type="submit"
                                    className="w-full py-5 bg-[#0075CF] hover:bg-[#005fb0] text-white font-black rounded-[1.5rem] shadow-xl shadow-[#0075CF]/20 hover:shadow-[#0075CF]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70 mt-4"
                                >
                                    {submittingReg ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span>Register Now</span>
                                            <CheckCircle2 className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                                <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">Secure Registration Process</p>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            <h3 className="text-xl font-bold text-gray-900">No Events Found</h3>
                            <p className="text-gray-500 mt-2 font-medium">Check back later for upcoming technical conducts.</p>
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
                                            Browse {title}
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

                                                {(isHackathon || title === "Courses" || title === "Internships" || title === "Workshops" || title === "Weekly Activities" || title === "Events") && (
                                                    <div className="pt-2 flex flex-col sm:flex-row gap-4">
                                                        <button
                                                            onClick={handleButtonClick}
                                                            className="group relative px-8 py-4 bg-[#111111] hover:bg-[#0A3D91] rounded-xl transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-[#0A3D91]/20 hover:-translate-y-1 w-full md:w-auto"
                                                        >
                                                            <div className="relative z-10 flex items-center justify-center gap-3">
                                                                <span className="text-white font-black tracking-widest uppercase text-xs">
                                                                    {isHackathon ? "Winners" :
                                                                        title === "Courses" ? "Explore Course" :
                                                                            title === "Internships" ? "Apply Now" :
                                                                                "Details"}
                                                                </span>
                                                                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
                                                            </div>
                                                        </button>

                                                        {(isHackathon || title === "Workshops" || title === "Weekly Activities" || title === "Events") && (
                                                            <button
                                                                disabled={selectedEvent.isRegistrationOpen === false}
                                                                onClick={() => {
                                                                    if (selectedEvent.isRegistrationOpen !== false) {
                                                                        setRegFormData(prev => ({ ...prev, event: selectedEvent.name }));
                                                                        setIsRegModalOpen(true);
                                                                    }
                                                                }}
                                                                className={cn(
                                                                    "group relative px-8 py-4 border-2 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full md:w-auto overflow-hidden",
                                                                    selectedEvent.isRegistrationOpen === false
                                                                        ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
                                                                        : isHackathon
                                                                            ? "bg-white border-[#111111] hover:border-[#0A3D91] text-[#111111] hover:text-[#0A3D91]"
                                                                            : "bg-[#111111] border-[#111111] hover:bg-[#0A3D91] hover:border-[#0A3D91] text-white"
                                                                )}
                                                            >
                                                                <div className="relative z-10 flex items-center justify-center gap-3">
                                                                    <span className="font-black tracking-widest uppercase text-xs">
                                                                        {selectedEvent.isRegistrationOpen === false ? "Registration Closed" : isHackathon ? "Register for Live" : "Register Now"}
                                                                    </span>
                                                                    <ArrowRight className={cn(
                                                                        "w-4 h-4 transition-transform group-hover:translate-x-1.5",
                                                                        selectedEvent.isRegistrationOpen === false ? "text-gray-400" : "text-inherit"
                                                                    )} />
                                                                </div>
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
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
