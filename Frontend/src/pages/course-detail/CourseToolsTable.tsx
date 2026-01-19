import React from "react";

interface ToolsData {
    category: string;
    tools: string;
}

interface CourseToolsTableProps {
    toolsData: ToolsData[];
}

export const CourseToolsTable = ({ toolsData }: CourseToolsTableProps) => {
    if (!toolsData || toolsData.length === 0) return null;

    return (
        <section id="technologies" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] underline decoration-2 underline-offset-8 mb-8">
                Tools & Technologies Learned in Vijayawada
            </h2>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[5px] border-white">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80')]"
                ></div>
                <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-[1px]"></div>

                <div className="relative p-2 sm:p-4 md:p-8">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-white/40">
                            <thead>
                                <tr>
                                    <th className="text-left font-black text-white text-base sm:text-xl p-3 sm:p-4 border border-white/40 uppercase tracking-wide w-1/4">
                                        Category
                                    </th>
                                    <th className="text-left font-black text-white text-base sm:text-xl p-3 sm:p-4 border border-white/40 uppercase tracking-wide">
                                        Tools & Technologies
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {toolsData.map((row: ToolsData, idx: number) => (
                                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                                        <td className="p-3 sm:p-4 text-white font-bold text-sm sm:text-base border border-white/40 align-top">
                                            {row.category}
                                        </td>
                                        <td className="p-3 sm:p-4 text-white font-bold text-sm sm:text-base border border-white/40">
                                            {row.tools}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};
