import React from "react";
import { CheckCircle2 } from "lucide-react";

interface CourseObjectivesProps {
    objectives: React.ReactNode[];
}

export const CourseObjectives = ({ objectives }: CourseObjectivesProps) => {
    if (!objectives || objectives.length === 0) return null;

    return (
        <section id="objectives" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-6">
                Course Objective
            </h2>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-xl p-6 sm:p-8 border border-slate-100">
                <p className="text-slate-700 text-base sm:text-lg font-medium mb-6">
                    By the end of this course, students will:
                </p>

                <ul className="space-y-4">
                    {objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <span className="text-slate-700 text-sm sm:text-base leading-relaxed flex-1">
                                {objective}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

interface CourseLearningOutcomesProps {
    outcomes: React.ReactNode[];
}

export const CourseLearningOutcomes = ({ outcomes }: CourseLearningOutcomesProps) => {
    if (!outcomes || outcomes.length === 0) return null;

    return (
        <section id="outcomes" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-6">
                Learning Outcomes
            </h2>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-xl p-6 sm:p-8 border border-slate-100">
                <p className="text-slate-700 text-base sm:text-lg font-medium mb-6">
                    After completing the course, students will be able to:
                </p>

                <ul className="space-y-4">
                    {outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-800 flex items-center justify-center mt-0.5 group-hover:scale-110 group-hover:bg-blue-600 transition-all">
                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <span className="text-slate-700 text-sm sm:text-base leading-relaxed flex-1">
                                {outcome}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
