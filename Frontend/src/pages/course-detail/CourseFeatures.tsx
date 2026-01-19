import React from "react";
import { Star, ArrowRight, Award, Linkedin, Briefcase, Megaphone, FileText, MessageSquare, MessageCircle, Unlock, Video, Handshake, TrendingUp, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: Record<string, React.ElementType> = {
    Award, Linkedin, Briefcase, Megaphone, FileText, MessageSquare,
    MessageCircle, Unlock, Video, Handshake, TrendingUp, Globe
};

interface Feature {
    icon: string;
    title: string;
    bgColor: string;
    color: string;
}

interface ProgramDetails {
    duration: string;
    learning?: boolean | string;
    learningText?: string;
    project?: boolean | string;
    projectText?: string;
    activity?: string;
    mode?: string;
    eligibility?: string;
}

interface CourseFeaturesProps {
    features: Feature[];
    programDetails: ProgramDetails;
}

export const CourseFeatures = ({ features, programDetails }: CourseFeaturesProps) => {
    return (
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2 inline-block mb-8 uppercase">
                What You Will Get After Completion of This Course in Vijayawada
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {features.map((feature, idx) => {
                    const IconExp = IconMap[feature.icon] || Star;
                    return (
                        <div key={idx} className="flex flex-col items-center text-center p-2">
                            <div className={cn("w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 border-2", feature.bgColor, feature.color.replace('text', 'border'))}>
                                <IconExp className={cn("w-7 h-7 sm:w-8 sm:h-8", feature.color)} />
                            </div>
                            <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                                {feature.title}
                            </p>
                        </div>
                    )
                })}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 text-center underline decoration-blue-600 underline-offset-4 mb-6">
                    Course Duration: {programDetails.duration || "90"} Days
                </h3>

                <ul className="space-y-4">
                    {programDetails.learning && (
                        <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                            <span className="text-slate-700 font-medium">
                                <span className="font-bold text-slate-900">75 Days</span> ({programDetails.learningText})
                            </span>
                        </li>
                    )}
                    {programDetails.project && (
                        <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                            <span className="text-slate-700 font-medium">
                                <span className="font-bold text-slate-900">15 Days</span> ({programDetails.projectText})
                            </span>
                        </li>
                    )}

                    {programDetails.activity && (
                        <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                            <span className="text-slate-700">
                                <span className="font-bold text-slate-900">Activity:</span> {programDetails.activity}
                            </span>
                        </li>
                    )}

                    <li className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                        <span className="text-slate-700">
                            <span className="font-bold text-slate-900">Benefits:</span> Includes lectures, hands-on coding, mini-projects, and one final capstone project.
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                        <span className="text-slate-700">
                            <span className="font-bold text-slate-900">Difficulty:</span> Beginner → Intermediate → Advanced
                        </span>
                    </li>

                    {programDetails.mode && (
                        <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                            <span className="text-slate-700">
                                <span className="font-bold text-slate-900">Mode:</span> {programDetails.mode}
                            </span>
                        </li>
                    )}

                    {programDetails.eligibility && (
                        <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                            <span className="text-slate-700">
                                <span className="font-bold text-slate-900">Education Eligibility:</span> {programDetails.eligibility}
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};
