import { Hackathon } from "../../data/events";

interface HackathonListProps {
    hackathons: Hackathon[];
    selectedHackathonId: string;
    onSelectHackathon: (hackathon: Hackathon) => void;
}

export const HackathonList = ({ hackathons, selectedHackathonId, onSelectHackathon }: HackathonListProps) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Upcoming Events</h2>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                {hackathons.map((hackathon) => (
                    <button
                        key={hackathon.id}
                        onClick={() => onSelectHackathon(hackathon)}
                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${selectedHackathonId === hackathon.id
                                ? "bg-blue-50 border-blue-500 shadow-md"
                                : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={hackathon.logoUrl || hackathon.thumbnailUrl}
                                alt={`${hackathon.name} logo`}
                                className="w-10 h-10 rounded-md bg-gray-100 object-cover"
                            />
                            <div>
                                <h3 className="font-bold text-gray-900 line-clamp-1">{hackathon.name}</h3>
                                <p className="text-sm text-gray-600">{hackathon.date}</p>
                                <p className="text-xs text-gray-500 mt-1">{hackathon.mode}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};
