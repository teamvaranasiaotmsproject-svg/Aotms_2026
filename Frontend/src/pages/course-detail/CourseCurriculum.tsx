import React from "react";
import { BookOpen, ChevronDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Module {
    title: string;
    lessons: string[];
}

interface CourseCurriculumProps {
    curriculum: Module[];
    activeModule: number | null;
    setActiveModule: (idx: number | null) => void;
}

export const CourseCurriculum = ({ curriculum, activeModule, setActiveModule }: CourseCurriculumProps) => {
    if (!curriculum || curriculum.length === 0) return null;

    return (
        <section id="curriculum" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Curriculum</h2>
            </div>

            <div className="space-y-3">
                {curriculum.map((module, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "border rounded-xl transition-all overflow-hidden",
                            activeModule === idx ? "border-blue-300 bg-blue-50/50" : "border-slate-200"
                        )}
                    >
                        <button
                            onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex items-center gap-3 flex-1">
                                <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                                    {idx + 1}
                                </span>
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">{module.title}</h3>
                            </div>
                            <ChevronDown className={cn(
                                "w-5 h-5 text-slate-400 transition-transform shrink-0",
                                activeModule === idx && "rotate-180"
                            )} />
                        </button>

                        <div className={cn(
                            "grid transition-all duration-300",
                            activeModule === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        )}>
                            <div className="overflow-hidden">
                                <ul className="space-y-2 px-4 sm:px-5 pb-4 sm:pb-5 pt-2">
                                    {module.lessons.map((lesson, lIdx) => (
                                        <li key={lIdx} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-slate-600 text-sm sm:text-base">{lesson}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
