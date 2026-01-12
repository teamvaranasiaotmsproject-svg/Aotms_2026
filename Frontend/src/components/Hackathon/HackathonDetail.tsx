import { Hackathon } from "@/data/events";
import { Button } from "@/components/ui/button";
import { Users, Globe, Calendar, Award, Trophy, Info } from "lucide-react";

interface HackathonDetailProps {
    hackathon: Hackathon;
    onRegisterClick: () => void;
}

export const HackathonDetail = ({ hackathon, onRegisterClick }: HackathonDetailProps) => {
    if (!hackathon) {
        return (
            <div className="p-8 rounded-lg bg-white h-full flex items-center justify-center">
                <p className="text-gray-500">Select a hackathon from the list to see the details.</p>
            </div>
        );
    }

    const themes = hackathon.themes || hackathon.whatYouWillLearn || [];
    const rewards = hackathon.rewards || ["Certificate of excellence", "Cash prizes for winners", "Mentorship sessions"];
    const importantDates = hackathon.importantDates || [
        { event: "Registration Deadline", date: hackathon.date },
        { event: "Event Starts", date: hackathon.date }
    ];

    return (
        <div className="p-6 md:p-8 rounded-lg border border-gray-200 bg-white mb-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-6 border-b border-gray-200 pb-6 mb-6">
                <img
                    src={hackathon.logoUrl || hackathon.thumbnailUrl}
                    alt={`${hackathon.name} logo`}
                    className="w-16 h-16 rounded-xl bg-gray-100 object-cover"
                />
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-black">{hackathon.name}</h2>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {hackathon.date}</span>
                        <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> {hackathon.mode}</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"><Info className="w-5 h-5 text-blue-600" />Description</h3>
                <p className="text-gray-600">{hackathon.description}</p>
            </div>

            {/* Themes */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Themes</h3>
                <div className="flex flex-wrap gap-2">
                    {themes.map(theme => (
                        <span key={theme} className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">{theme}</span>
                    ))}
                </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"><Users className="w-5 h-5 text-blue-600" />Eligibility & Team Size</h3>
                    <p className="text-gray-600">{hackathon.eligibility}</p>
                    <p className="text-gray-600 mt-1">Team Size: {hackathon.teamSize || "1-4 Members"}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"><Trophy className="w-5 h-5 text-blue-600" />Rewards</h3>
                    <ul className="space-y-1 list-disc list-inside text-gray-600">
                        {rewards.map(reward => <li key={reward}>{reward}</li>)}
                    </ul>
                </div>
            </div>

            {/* Important Dates */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"><Calendar className="w-5 h-5 text-blue-600" />Important Dates</h3>
                <ul className="space-y-2">
                    {importantDates.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span><strong>{item.event}:</strong> {item.date}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
                <Button onClick={onRegisterClick} className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-6">
                </Button>
            </div>
        </div>
    );
};
