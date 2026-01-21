import { Hackathon } from "../../data/events";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Users, Globe, Calendar, Award, Trophy, Info, X } from "lucide-react";
import { useState } from "react";

// Certificate sample image
const certificateSampleImg = "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970861/certificate_sample_1_ifdee6?_a=BAMAOGGo0";
const certificateSample = certificateSampleImg;

interface HackathonDetailProps {
    hackathon: Hackathon;
    onRegisterClick: () => void;
}

export const HackathonDetail = ({ hackathon, onRegisterClick }: HackathonDetailProps) => {
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);

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
        <>
            {/* Certificate Modal */}
            <AnimatePresence>
                {isCertModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setIsCertModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative w-full max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsCertModalOpen(false)}
                                className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors group"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={certificateSample}
                                    alt="Certificate Preview"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-white text-center mt-4 text-sm font-medium">Click outside or press ESC to close</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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

                {/* Certificate Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600" />
                        Certification
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 rounded-2xl border border-blue-100">
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-gray-900">Official Recognition</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Showcase your achievement with our verifiable certificates. Perfect for your LinkedIn profile, resume, and academic portfolio.
                            </p>
                            <div className="space-y-3 pt-2">
                                <div className="flex items-start gap-3">
                                    <div className="p-1.5 rounded-full bg-blue-100 text-blue-600 mt-0.5">
                                        <Award className="w-3 h-3" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-semibold text-gray-900">Certificate of Participation</span>
                                        <span className="block text-xs text-gray-500">Awarded to all eligible participants who submit a project</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-1.5 rounded-full bg-amber-100 text-amber-600 mt-0.5">
                                        <Trophy className="w-3 h-3" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-semibold text-gray-900">Excellence Awards</span>
                                        <span className="block text-xs text-gray-500">Special distinction for top 3 teams and category winners</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => setIsCertModalOpen(true)}
                            className="relative group perspective-1000 cursor-pointer"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src={certificateSample}
                                alt="Hackathon Certificate Sample"
                                className="relative w-full rounded-lg shadow-xl shadow-blue-900/5 ring-1 ring-gray-900/5 transform transition-all duration-300 group-hover:scale-[1.02] bg-white object-cover"
                            />
                            <p className="text-center text-xs text-gray-500 font-medium mt-2">Click to view certificate</p>
                        </div>
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
                        Register Now
                    </Button>
                </div>
            </div>
        </>
    );
};
