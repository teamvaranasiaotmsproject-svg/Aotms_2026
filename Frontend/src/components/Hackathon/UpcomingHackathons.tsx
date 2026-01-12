import { useState, useEffect } from "react";
import { Calendar, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventItem {
    id: string;
    name: string;
    mode: "Online" | "Offline";
    date: string;
    thumbnailUrl: string;
}

interface UpcomingHackathonsProps {
    onSelect?: (hackathon: any) => void;
    selectedId?: string;
}

export const UpcomingHackathons = ({ onSelect, selectedId }: UpcomingHackathonsProps) => {
    const [fetchedHackathons, setFetchedHackathons] = useState<EventItem[]>([]);

    useEffect(() => {
        const fetchHackathons = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/events?type=hackathon');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setFetchedHackathons(data);
                if (data.length > 0 && !selectedId && onSelect) {
                    onSelect(data[0]);
                }
            } catch (error) {
                console.error("Error fetching hackathons:", error);
            }
        };
        fetchHackathons();
    }, []);

    const displayHackathons = fetchedHackathons;

    return (
        <div className="h-full min-h-[400px] bg-white/80 backdrop-blur border border-[#0066CC]/20 rounded-xl relative overflow-hidden font-sans shadow-lg shadow-slate-200/50">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2 px-6 pt-6 border-b border-[#0066CC]/20 pb-4 bg-slate-50/80">
                <Cpu className="w-4 h-4 text-[#FF6B35] animate-pulse" />
                <h2 className="text-xs font-mono font-bold text-[#0066CC] tracking-[0.2em] uppercase">
                    Available_Nodes
                </h2>
                <div className="ml-auto text-[10px] text-slate-500 font-mono">
                    {displayHackathons.length} FOUND
                </div>
            </div>

            <div className="relative h-[calc(100%-70px)] overflow-y-auto px-4 pb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                <div className="flex flex-col gap-3 pt-4">
                    {displayHackathons.map((hackathon, idx) => (
                        <div key={`${hackathon.id}-${idx}`} className="w-full">
                            <div
                                onClick={() => onSelect?.(hackathon)}
                                className={cn(
                                    "cursor-pointer transition-all duration-300 group",
                                    "bg-slate-50 border text-left rounded-lg overflow-hidden flex flex-col h-auto relative",
                                    selectedId === hackathon.id
                                        ? "border-[#FF6B35] shadow-[0_0_15px_rgba(255,107,53,0.3)] scale-[1.02] bg-white"
                                        : "border-slate-200 hover:border-[#0066CC]/50 hover:shadow-md hover:bg-white"
                                )}
                            >
                                {/* Active Indicator Line */}
                                {selectedId === hackathon.id && (
                                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#FF6B35] z-10" />
                                )}

                                {/* Card Content */}
                                <div className="p-3 flex gap-4">
                                    {/* Tiny Thumbnail */}
                                    <div className="w-20 h-20 shrink-0 bg-slate-200 rounded border border-slate-200 overflow-hidden relative group-hover:border-[#0066CC]/30 transition-colors">
                                        <img
                                            src={hackathon.thumbnailUrl}
                                            alt={hackathon.name}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 mix-blend-multiply"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={cn(
                                                "text-[8px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider",
                                                hackathon.mode === 'Offline'
                                                    ? "bg-[#0066CC]/10 border-[#0066CC]/20 text-[#0066CC]"
                                                    : "bg-[#FF6B35]/10 border-[#FF6B35]/20 text-[#FF6B35]"
                                            )}>
                                                {hackathon.mode}
                                            </span>
                                            <span className="text-[9px] text-slate-400 font-mono">#{hackathon.id.substring(0, 4)}</span>
                                        </div>

                                        <h3 className={cn(
                                            "text-sm font-bold leading-tight line-clamp-2 mb-2 transition-colors",
                                            selectedId === hackathon.id ? "text-[#FF6B35]" : "text-slate-700 group-hover:text-[#0066CC]"
                                        )}>
                                            {hackathon.name}
                                        </h3>

                                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                                            <Calendar className="w-3 h-3 text-slate-400" />
                                            {hackathon.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
