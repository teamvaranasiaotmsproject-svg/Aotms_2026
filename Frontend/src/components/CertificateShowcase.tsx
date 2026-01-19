import { useState, useEffect } from "react";
import { Award, Trophy, Users, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import workshopCert1 from "@/assets/workshop_certificate_1.png";
import workshopCert2 from "@/assets/workshop_certificate_2.png";
import workshopCert3 from "@/assets/workshop_certificate_3.png";

interface CertificateShowcaseProps {
    certImage1?: string;
    certImage2?: string;
    certImage3?: string;
}

export const CertificateShowcase = ({
    certImage1 = workshopCert1,
    certImage2 = workshopCert2,
    certImage3 = workshopCert3
}: CertificateShowcaseProps) => {
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);
    const [selectedCertImage, setSelectedCertImage] = useState<string>("");

    // Handle ESC key to close certificate modal
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isCertModalOpen) {
                setIsCertModalOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isCertModalOpen]);

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
                                    src={selectedCertImage}
                                    alt="Certificate Preview"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-white text-center mt-4 text-sm font-medium">Click outside or press ESC to close</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Certificate Showcase Section */}
            <div className="w-full bg-gradient-to-br from-orange-50 via-amber-50/30 to-orange-50 py-16 md:py-24">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-orange-200 rounded-full text-xs font-black uppercase tracking-widest mb-6 text-[#FD5A1A]">
                            <Award className="w-4 h-4" />
                            Official Certifications
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] tracking-tight mb-4">
                            Earn Recognized Certificates
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                            Participate in our events and earn industry-recognized certificates that validate your skills and boost your professional profile.
                        </p>
                    </div>

                    {/* Certificate Grid */}
                    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-orange-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
                            {/* Left: Certificate Preview */}
                            <div className="space-y-6">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                                    <div className="relative bg-white rounded-2xl p-4 shadow-lg">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div
                                                onClick={() => {
                                                    setSelectedCertImage(certImage1);
                                                    setIsCertModalOpen(true);
                                                }}
                                                className="relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-orange-400 transition-all cursor-pointer group/cert aspect-[3/4] active:scale-95"
                                            >
                                                <img
                                                    src={certImage1}
                                                    alt="Participation Certificate"
                                                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover/cert:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-end p-3">
                                                    <span className="text-white text-xs font-bold">Participation</span>
                                                </div>
                                            </div>
                                            <div
                                                onClick={() => {
                                                    setSelectedCertImage(certImage2);
                                                    setIsCertModalOpen(true);
                                                }}
                                                className="relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-orange-400 transition-all cursor-pointer group/cert aspect-[3/4] active:scale-95"
                                            >
                                                <img
                                                    src={certImage2}
                                                    alt="Completion Certificate"
                                                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover/cert:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-end p-3">
                                                    <span className="text-white text-xs font-bold">Completion</span>
                                                </div>
                                            </div>
                                            <div
                                                onClick={() => {
                                                    setSelectedCertImage(certImage3);
                                                    setIsCertModalOpen(true);
                                                }}
                                                className="relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-orange-400 transition-all cursor-pointer group/cert aspect-[3/4] active:scale-95"
                                            >
                                                <img
                                                    src={certImage3}
                                                    alt="Excellence Certificate"
                                                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover/cert:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-end p-3">
                                                    <span className="text-white text-xs font-bold">Excellence</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-center text-xs text-black-900 font-bold mt-10 text-lg">Click any certificate to view in detail</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Certificate Types */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Certificate Types</h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100">
                                        <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-gray-900 mb-1">Participation Certificate</h4>
                                            <p className="text-sm text-gray-600">Awarded to all attendees who actively participate in our events and workshops.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-2xl border border-green-100">
                                        <div className="p-3 rounded-xl bg-green-100 text-green-600">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-gray-900 mb-1">Completion Certificate</h4>
                                            <p className="text-sm text-gray-600">Granted upon successful completion of projects and meeting all event requirements.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-2xl border border-amber-100">
                                        <div className="p-3 rounded-xl bg-amber-100 text-amber-600">
                                            <Trophy className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-gray-900 mb-1">Excellence Certificate</h4>
                                            <p className="text-sm text-gray-600">Special recognition for top performers and outstanding achievements in events.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Motivational Quotes Section */}
                        <div className="mt-12 pt-10 border-t border-orange-200">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-5xl text-orange-500 leading-none">"</div>
                                    <div className="flex-1 pt-2">
                                        <p className="text-base md:text-lg text-gray-800 font-medium italic leading-relaxed mb-3">
                                            Join us in our mission to empower the next generation of tech innovators. Participate in our events, expand your knowledge, and earn certificates that validate your skills and open doors to new opportunities.
                                        </p>
                                        <p className="text-sm font-bold text-[#0075CF] uppercase tracking-wider">
                                            — Academy of Tech Masters
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                    <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                        <div className="text-3xl text-blue-500">"</div>
                                        <p className="text-sm text-gray-700 italic flex-1 pt-1">
                                            <span className="font-bold text-gray-900">Innovation</span> distinguishes between a leader and a follower.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-amber-100 shadow-sm">
                                        <div className="text-3xl text-amber-500">"</div>
                                        <p className="text-sm text-gray-700 italic flex-1 pt-1">
                                            <span className="font-bold text-gray-900">Learning</span> is the only thing the mind never exhausts, never fears, and never regrets.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
