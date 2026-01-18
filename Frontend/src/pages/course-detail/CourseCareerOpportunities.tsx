import React from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CareerRole {
    role: string;
    description: string;
}

interface CourseCareerOpportunitiesProps {
    careerRoles: (string | CareerRole)[];
}

export const CourseCareerOpportunities = ({ careerRoles }: CourseCareerOpportunitiesProps) => {
    if (!careerRoles || careerRoles.length === 0) return null;

    return (
        <section id="careers" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-8 underline decoration-[#0075CF] underline-offset-8">
                Career Opportunities / Job Roles
            </h2>

            {typeof careerRoles[0] === 'object' && 'role' in (careerRoles[0] as CareerRole) ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-green-600">
                                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-white font-bold text-sm sm:text-base border border-green-700">
                                    Role
                                </th>
                                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-white font-bold text-sm sm:text-base border border-green-700">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {(careerRoles as CareerRole[]).map((item, idx) => (
                                <tr
                                    key={idx}
                                    className={cn(
                                        "border border-slate-200 hover:bg-slate-50 transition-colors",
                                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                                    )}
                                >
                                    <td className="py-3 sm:py-4 px-3 sm:px-6 text-slate-900 font-bold text-xs sm:text-sm border border-slate-200">
                                        {item.role}
                                    </td>
                                    <td className="py-3 sm:py-4 px-3 sm:px-6 text-slate-700 text-xs sm:text-sm border border-slate-200">
                                        {item.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                    {(careerRoles as string[]).map((role, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100">
                            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-slate-900 font-semibold text-sm sm:text-base">
                                {role}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};
