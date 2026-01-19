import React, { useState, useEffect } from "react";
import { CheckCircle2, X, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import workshopCert1 from "@/assets/workshop_certificate_1.png";

interface CertificationProvider {
    name: string;
    certs: string[];
}

interface CertificationData {
    main?: string;
    optional?: string[];
    providers?: CertificationProvider[];
}

interface CourseCertificationsProps {
    certifications: CertificationData | string[];
}

export const CourseCertifications = ({ certifications }: CourseCertificationsProps) => {
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);

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

    if (!certifications || (Array.isArray(certifications) ? certifications.length === 0 : false)) return null;

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
                                    src={workshopCert1}
                                    alt="Course Certificate Sample"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-white text-center mt-4 text-sm font-medium">Click outside or press ESC to close</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section id="certifications" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-8 underline decoration-[#0075CF] underline-offset-8">
                    {typeof certifications === 'object' && ('main' in certifications || 'providers' in certifications)
                        ? 'Certifications & Career Preparation'
                        : 'Certification'}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left: Certification Content */}
                    <div>
                        {typeof certifications === 'object' && 'providers' in certifications && Array.isArray(certifications.providers) ? (
                            <div className="space-y-6">
                                {(certifications as CertificationData).providers?.map((provider, idx: number) => (
                                    <div key={idx} className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                                <CheckCircle2 className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="font-bold text-slate-900 text-base sm:text-lg">{provider.name}:</h3>
                                        </div>
                                        <ul className="ml-11 space-y-2">
                                            {provider.certs.map((cert: string, certIdx: number) => (
                                                <li key={certIdx} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                                                    <span className="text-orange-500 font-bold mt-1">✦</span>
                                                    <span>{cert}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : typeof certifications === 'object' && 'main' in certifications ? (
                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-base sm:text-lg">Certification Name:</p>
                                        <p className="text-slate-700 text-sm sm:text-base mt-1">{certifications.main}</p>
                                    </div>
                                </div>

                                {certifications.optional && certifications.optional.length > 0 && (
                                    <div className="ml-11">
                                        <p className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                            <span className="text-blue-600">✦</span>
                                            Additional Certifications (Optional):
                                        </p>
                                        <ul className="space-y-2">
                                            {certifications.optional.map((cert: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                                                    <span className="text-orange-500 font-bold mt-1">✦</span>
                                                    <span>{cert}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <ul className="space-y-3">
                                {Array.isArray(certifications) && certifications.map((cert: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                                        <span className="text-orange-500 font-bold mt-1 text-lg">✦</span>
                                        <span>{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Right: Demo Certificate */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-gradient-to-br from-orange-50 via-amber-50/30 to-orange-50 rounded-2xl p-6 border border-orange-100">
                            <div className="flex items-center gap-2 mb-4">
                                <Award className="w-5 h-5 text-[#FD5A1A]" />
                                <h3 className="text-lg font-bold text-slate-900">Sample Certificate</h3>
                            </div>

                            <div
                                onClick={() => setIsCertModalOpen(true)}
                                className="relative group cursor-pointer"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                                <div className="relative bg-white rounded-xl p-3 shadow-lg overflow-hidden border-2 border-gray-200 hover:border-orange-400 transition-all active:scale-95">
                                    <img
                                        src={workshopCert1}
                                        alt="Course Certificate Sample"
                                        className="w-full h-auto object-contain transform transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                                        <span className="text-white text-sm font-bold">Click to view full certificate</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-center text-xs text-slate-600 font-medium mt-4">
                                Click the certificate to view in detail
                            </p>

                            {/* Certificate Benefits */}
                            <div className="mt-6 space-y-3">
                                <div className="flex items-start gap-2 text-sm text-slate-700">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Industry-recognized certification</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-slate-700">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Boost your professional profile</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-slate-700">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Validate your skills & knowledge</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
