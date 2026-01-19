import React from "react";
import { CheckCircle2 } from "lucide-react";

interface CapstoneProject {
    title: string;
    description: string;
}

interface CourseCapstoneProjectsProps {
    projects: CapstoneProject[];
}

export const CourseCapstoneProjects = ({ projects }: CourseCapstoneProjectsProps) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-8 underline decoration-[#0075CF] underline-offset-8">
                Capstone Project Ideas
            </h2>

            <div className="space-y-4">
                {projects.map((project, idx) => (
                    <div key={idx} className="flex items-start gap-3 group hover:bg-slate-50 p-4 rounded-xl transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-800 flex items-center justify-center mt-0.5 group-hover:bg-blue-600 transition-colors">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
