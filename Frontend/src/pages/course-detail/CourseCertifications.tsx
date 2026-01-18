import React from "react";
import { CheckCircle2 } from "lucide-react";

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
    if (!certifications || (Array.isArray(certifications) ? certifications.length === 0 : false)) return null;

    return (
        <section id="certifications" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-8 underline decoration-[#0075CF] underline-offset-8">
                {typeof certifications === 'object' && ('main' in certifications || 'providers' in certifications)
                    ? 'Certifications & Career Prep'
                    : 'Certification'}
            </h2>

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
        </section>
    );
};
