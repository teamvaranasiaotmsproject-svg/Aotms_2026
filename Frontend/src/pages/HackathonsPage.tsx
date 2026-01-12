import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UpcomingHackathons } from "@/components/Hackathon/UpcomingHackathons";
import { Calendar, Clock, Trophy, Target, CheckCircle2, Medal, Users } from "lucide-react";
import axios from "axios";

// Define locally to match backend shape
interface EventItem {
    id: string;
    name: string;
    description: string;
    thumbnailUrl: string;
    mode: "Online" | "Offline";
    date: string;
    duration: string;
    registrationLink?: string;
    buttonText?: string;
    actionButtonText?: string;
    whatYouWillLearn?: string[];
}

interface WinnerTeam {
    rank: number;
    teamName: string;
    collegeName: string;
    members: string[];
    prize: string;
    imageUrl?: string;
}

interface HackathonWinnerData {
    eventId: string;
    eventName: string;
    winners: WinnerTeam[];
}

const HackathonsPage = () => {
    const [selectedHackathon, setSelectedHackathon] = useState<EventItem | null>(null);
    const [viewMode, setViewMode] = useState<'details' | 'winners'>('details');
    const [allWinners, setAllWinners] = useState<HackathonWinnerData[]>([]);
    const detailRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to detail view on mobile when selection changes
    useEffect(() => {
        if (selectedHackathon && window.innerWidth < 1024 && detailRef.current) {
            setViewMode('details'); // Reset to details on mobile scroll
            detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (selectedHackathon) {
            setViewMode('details'); // Reset to details on selection change
        }
    }, [selectedHackathon]);

    // Fetch winners on mount
    useEffect(() => {
        const fetchWinners = async () => {
            try {
                const res = await axios.get('https://aotms-2026.onrender.com/api/winners');
                setAllWinners(res.data);
            } catch (error) {
                console.error("Failed to fetch winners:", error);
            }
        };
        fetchWinners();
    }, []);

    const handleRegister = () => {
        if (selectedHackathon?.registrationLink) {
            window.open(selectedHackathon.registrationLink, '_blank');
        } else {
            console.warn("No registration link found for this hackathon.");
        }
    };

    const currentWinners = selectedHackathon
        ? allWinners.find(w => w.eventId === selectedHackathon.id)?.winners
        : null;

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
                            <span className="font-mono text-xs tracking-[0.2em] opacity-90">AOTMS.HACK_ZONE</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase glitch-text">
                            Hackathons <span className="text-[#FF6B35]">.EXE</span>
                        </h1>
                    </div>
                </div>

                {/* Main Grid - Flexible height for laptop view */}
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:h-[calc(100vh-240px)] min-h-[500px] lg:min-h-[500px] h-auto">
                    {/* Left Column: List */}
                    <div className="h-[500px] lg:h-fit lg:max-h-full lg:overflow-y-auto border-r-0 lg:border-r border-slate-200 lg:pr-4 mb-8 lg:mb-0">
                        <UpcomingHackathons
                            onSelect={setSelectedHackathon}
                            selectedId={selectedHackathon?.id}
                        />
                    </div>

                    {/* Right Column: Console/Detail View */}
                    <div ref={detailRef} className="h-full pl-0 lg:pl-4 overflow-y-auto custom-scrollbar">
                        {selectedHackathon ? (
                            <div className="h-full flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                {/* Main Data Card - Light Mode */}
                                <div className="bg-white shadow-xl shadow-slate-200/50 border border-slate-100 rounded-2xl p-6 md:p-8 relative overflow-hidden group min-h-min">
                                    {/* Decoration Lines */}
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF6B35]" />
                                    <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#0066CC]/20 rounded-tr-3xl" />

                                    {viewMode === 'details' ? (
                                        <div className="flex flex-col md:flex-row gap-6 relative z-10 h-full">
                                            <div className="w-full md:w-[400px] shrink-0 aspect-[966/1050] rounded-xl overflow-hidden border border-slate-200 shadow-lg group-hover:border-[#FF6B35]/30 transition-colors bg-slate-50">
                                                <img
                                                    src={selectedHackathon.thumbnailUrl}
                                                    alt={selectedHackathon.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 space-y-3">
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="px-2.5 py-1 bg-[#0066CC]/10 border border-[#0066CC]/20 text-[#0066CC] text-[11px] font-mono font-bold uppercase tracking-wider rounded">
                                                        {selectedHackathon.mode}
                                                    </span>
                                                    <span className="text-slate-500 font-mono text-[11px]">
                                                        ID: <span className="text-slate-900 font-bold">{selectedHackathon.id}</span>
                                                    </span>
                                                </div>

                                                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight leading-none">
                                                    {selectedHackathon.name}
                                                </h2>

                                                <div className="flex flex-wrap gap-4 py-3 border-y border-dashed border-slate-200">
                                                    <div className="flex items-center gap-2 text-[#FF6B35] font-mono text-xs font-bold">
                                                        <Calendar className="w-4 h-4" />
                                                        {selectedHackathon.date}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-slate-600 font-mono text-xs">
                                                        <Clock className="w-4 h-4 text-[#0066CC]" />
                                                        {selectedHackathon.duration}
                                                    </div>
                                                </div>

                                                <p className="text-slate-600 leading-relaxed text-sm border-l-2 border-slate-200 pl-4 py-1 max-h-[140px] overflow-y-auto custom-scrollbar pr-2">
                                                    {selectedHackathon.description}
                                                </p>

                                                <div className="pt-2 flex flex-nowrap gap-3">
                                                    <button
                                                        onClick={handleRegister}
                                                        className="flex-1 group/btn relative overflow-hidden bg-[#FF6B35] hover:bg-[#e05a2b] text-white py-3 rounded-lg font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 duration-300"
                                                    >
                                                        <span className="relative z-10 flex items-center justify-center gap-2 text-xs">
                                                            <span>{selectedHackathon.buttonText}</span>
                                                            <Target className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
                                                        </span>
                                                    </button>
                                                    <button
                                                        onClick={() => setViewMode('winners')}
                                                        className="flex-1 group/btn relative overflow-hidden bg-white border-2 border-[#0066CC]/20 hover:border-[#0066CC] text-[#0066CC] py-3 rounded-lg font-bold uppercase tracking-wider transition-all hover:bg-[#0066CC]/5 active:scale-95 duration-300"
                                                    >
                                                        <span className="relative z-10 flex items-center justify-center gap-2 text-xs">
                                                            <span>{selectedHackathon.actionButtonText}</span>
                                                            <Trophy className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative z-10 h-full flex flex-col">
                                            {/* Header */}
                                            <div className="flex items-center justify-end mb-4 border-b border-dashed border-slate-200 pb-2">
                                                <button
                                                    onClick={() => setViewMode('details')}
                                                    className="text-xs font-mono font-bold text-slate-400 hover:text-[#0066CC] uppercase"
                                                >
                                                    [ Return_To_Brief ]
                                                </button>
                                            </div>

                                            {/* Winners Grid */}
                                            {currentWinners ? (
                                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto custom-scrollbar pr-2 h-full min-h-[500px]">
                                                    {currentWinners.map((winner, idx) => (
                                                        <div key={idx} className="relative bg-white border border-slate-200 rounded-xl overflow-hidden transition-all hover:border-[#FF6B35]/50 hover:shadow-lg group/card flex flex-col h-full">
                                                            {/* Rank Badge */}
                                                            <div className={`absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center font-black text-white shadow-lg z-10 
                                                                ${winner.rank === 1 ? 'bg-[#FF6B35]' : winner.rank === 2 ? 'bg-[#0066CC]' : 'bg-slate-700'}`}>
                                                                {winner.rank}
                                                            </div>

                                                            {/* Image - Instagram Poster Size (4:5) */}
                                                            <div className="w-full aspect-[4/5] bg-slate-100 border-b border-slate-100 relative group-hover/card:brightness-110 transition-all">
                                                                <img
                                                                    src={winner.imageUrl || selectedHackathon.thumbnailUrl}
                                                                    alt={winner.teamName}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
                                                            </div>

                                                            {/* Info */}
                                                            <div className="p-4 flex-1 flex flex-col">
                                                                <div className="flex justify-between items-start mb-3">
                                                                    <div>
                                                                        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 line-clamp-1" title={winner.teamName}>{winner.teamName}</h3>
                                                                        <p className="text-xs font-medium text-slate-500 flex items-center gap-1 line-clamp-1" title={winner.collegeName}>
                                                                            <Users className="w-3 h-3 text-[#FF6B35]" />
                                                                            {winner.collegeName}
                                                                        </p>
                                                                    </div>
                                                                    <span className="font-mono text-[#0066CC] font-bold bg-[#0066CC]/5 px-2 py-1 rounded border border-[#0066CC]/20 text-[10px] whitespace-nowrap">
                                                                        {winner.prize}
                                                                    </span>
                                                                </div>

                                                                <div className="mt-auto flex flex-wrap gap-1.5">
                                                                    {winner.members.map((member, i) => (
                                                                        <span key={i} className="text-[10px] bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-slate-600 font-medium">
                                                                            {member}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex-1 flex flex-col items-center justify-center text-slate-400 font-mono border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                                                    <Medal className="w-12 h-12 text-slate-300 mb-4" />
                                                    <span>RESULTS_ENCRYPTED</span>
                                                    <span className="text-xs mt-2 opacity-50 text-slate-500">WINNERS_NOT_YET_ANNOUNCED</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Terminal/Stats Block - Light Mode - Only Show on Details View */}
                                {viewMode === 'details' && (
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl md:col-span-2">
                                            <h3 className="text-[#0066CC] font-mono text-xs uppercase mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4" />
                                                Mission_Parameters
                                            </h3>
                                            <p className="text-sm text-slate-600 leading-relaxed font-mono">
                                                // OBJECTIVE: <br />
                                                Participants are tasked to architect scalable solutions. <br />
                                                // TIMEFRAME: <br />
                                                {selectedHackathon.duration} intense coding sprint.
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-br from-[#0066CC]/5 to-slate-50 border border-[#0066CC]/10 p-6 rounded-xl flex items-center justify-center text-center">
                                            <div>
                                                <Trophy className="w-8 h-8 text-[#FF6B35] mx-auto mb-2" />
                                                <div className="text-xs font-mono text-[#0066CC]">REWARDS_POOL</div>
                                                <div className="text-xl font-bold text-slate-800 mt-1">Unlock Perks</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-slate-400 font-mono border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50 min-h-[300px]">
                                <div className="w-16 h-16 border-4 border-slate-200 rounded-full flex items-center justify-center mb-4 animate-[spin_10s_linear_infinite]">
                                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full" />
                                </div>
                                <span>INITIALIZING_DATA_STREAM...</span>
                                <span className="text-xs mt-2 opacity-50 text-slate-500">SELECT_EVENT_FROM_LIST</span>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <div className="relative z-20">
                <Footer />
            </div>
        </div>
    );
};
export default HackathonsPage;
