import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UpcomingEvents } from "@/components/Event/UpcomingEvents";
import { Calendar, Clock, Trophy, Target, CheckCircle2, Zap } from "lucide-react";

// Define locally to match backend shape
interface EventItem {
    id: string;
    name: string;
    description: string;
    thumbnailUrl: string;
    mode: "Online" | "Offline";
    date: string;
    duration: string;
    whatYouWillLearn: string[];
    buttonText?: string;
    registrationLink?: string;
}

const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
    const detailRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to detail view on mobile when selection changes
    useEffect(() => {
        if (selectedEvent && window.innerWidth < 1024 && detailRef.current) {
            detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [selectedEvent]);

    const handleRegister = () => {
        if (selectedEvent?.registrationLink) {
            window.open(selectedEvent.registrationLink, '_blank');
        } else {
            console.warn("No registration link found for this activity.");
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen relative text-slate-800 selection:bg-[#FF6B35]/20">
            {/* Cyber Grid Background - Light Mode */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 pointer-events-none" />

            <Header />
            <main className="pt-32 md:pt-40 pb-20 container mx-auto px-6 max-w-7xl relative z-10">

                {/* Tech Header */}
                <div className="mb-10 flex items-end justify-between border-b border-slate-200 pb-6">
                    <div>
                        <div className="flex items-center gap-2 text-[#FF6B35] mb-2">
                            <span className="w-2 h-2 bg-[#FF6B35] animate-pulse rounded-full" />
                            <span className="font-mono text-xs tracking-[0.2em] opacity-90">AOTMS.ACTIVITY_HUB</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase glitch-text">
                            Activities <span className="text-[#FF6B35]">.LOG</span>
                        </h1>
                    </div>
                </div>

                {/* Main Grid - Increased height for laptop view */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[700px] h-auto">
                    {/* Left Column: List */}
                    <div className="lg:col-span-3 h-[500px] lg:h-full border-r-0 lg:border-r border-slate-200 lg:pr-4 mb-8 lg:mb-0">
                        <UpcomingEvents
                            onSelect={setSelectedEvent}
                            selectedId={selectedEvent?.id}
                        />
                    </div>

                    {/* Right Column: Console/Detail View */}
                    <div ref={detailRef} className="lg:col-span-9 h-full pl-0 lg:pl-4 overflow-y-auto custom-scrollbar">
                        {selectedEvent ? (
                            <div className="h-full flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                {/* Main Data Card - Light Mode */}
                                <div className="bg-white shadow-xl shadow-slate-200/50 border border-slate-100 rounded-2xl p-6 md:p-10 relative overflow-hidden group min-h-min">
                                    {/* Decoration Lines */}
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF6B35]" />
                                    <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#0066CC]/20 rounded-tr-3xl" />

                                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                                        <div className="w-full md:w-[350px] shrink-0 aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 shadow-lg group-hover:border-[#FF6B35]/30 transition-colors bg-slate-50">
                                            <img
                                                src={selectedEvent.thumbnailUrl}
                                                alt={selectedEvent.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div className="flex flex-wrap items-center gap-4">
                                                <span className="px-3 py-1 bg-[#0066CC]/10 border border-[#0066CC]/20 text-[#0066CC] text-xs font-mono font-bold uppercase tracking-wider rounded">
                                                    {selectedEvent.mode}
                                                </span>
                                                <span className="text-slate-500 font-mono text-xs">
                                                    ID: <span className="text-slate-900 font-bold">{selectedEvent.id}</span>
                                                </span>
                                            </div>

                                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
                                                {selectedEvent.name}
                                            </h2>

                                            <div className="flex flex-wrap gap-6 py-4 border-y border-dashed border-slate-200">
                                                <div className="flex items-center gap-2 text-[#FF6B35] font-mono text-sm font-bold">
                                                    <Calendar className="w-4 h-4" />
                                                    {selectedEvent.date}
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-600 font-mono text-sm">
                                                    <Clock className="w-4 h-4 text-[#0066CC]" />
                                                    {selectedEvent.duration}
                                                </div>
                                            </div>

                                            <p className="text-slate-600 leading-relaxed text-sm md:text-base border-l-2 border-slate-200 pl-4 py-2 max-h-[200px] overflow-y-auto custom-scrollbar pr-2">
                                                {selectedEvent.description}
                                            </p>

                                            <div className="pt-4">
                                                <button
                                                    onClick={handleRegister}
                                                    className="w-full md:w-auto group/btn relative overflow-hidden bg-[#FF6B35] hover:bg-[#e05a2b] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 duration-300"
                                                >
                                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                                        {selectedEvent.buttonText || "Join Activity"}
                                                        <Target className="w-5 h-5 group-hover/btn:scale-125 transition-transform" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Terminal/Stats Block - Light Mode */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                        <h3 className="text-[#0066CC] font-mono text-xs uppercase mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" />
                                            Session_Agenda
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedEvent.whatYouWillLearn?.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2 font-mono text-xs text-slate-600">
                                                    <span className="text-[#FF6B35] mt-0.5">{">"}</span>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#0066CC]/5 to-slate-50 border border-[#0066CC]/10 p-6 rounded-xl flex items-center justify-center text-center">
                                        <div>
                                            <Zap className="w-8 h-8 text-[#FF6B35] mx-auto mb-2" />
                                            <div className="text-xs font-mono text-[#0066CC]">COMMUNITY_GROWTH</div>
                                            <div className="text-xl font-bold text-slate-800 mt-1">Skill Building</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-slate-400 font-mono border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50 min-h-[300px]">
                                <div className="w-16 h-16 border-4 border-slate-200 rounded-full flex items-center justify-center mb-4 animate-[spin_10s_linear_infinite]">
                                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full" />
                                </div>
                                <span>INITIALIZING_ACTIVITY_STREAM...</span>
                                <span className="text-xs mt-2 opacity-50 text-slate-500">SELECT_ACTIVITY_FROM_LIST</span>
                            </div>
                        )}
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};
export default EventsPage;
