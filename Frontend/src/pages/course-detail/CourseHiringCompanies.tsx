import React from "react";

interface HiringCompany {
    name: string;
    logo: string;
}

interface CourseHiringCompaniesProps {
    hiringCompanies: HiringCompany[];
}

export const CourseHiringCompanies = ({ hiringCompanies }: CourseHiringCompaniesProps) => {
    if (!hiringCompanies || hiringCompanies.length === 0) return null;

    return (
        <section id="hiring" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0075CF] mb-8 underline decoration-[#0075CF] underline-offset-8">
                WHO WILL HIRE YOU
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {hiringCompanies.map((company, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-center p-6 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-200 bg-white group"
                    >
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="w-full h-auto max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent && !parent.querySelector('.fallback-text')) {
                                    const textDiv = document.createElement('div');
                                    textDiv.className = 'fallback-text text-center';
                                    textDiv.innerHTML = `<p class="text-slate-700 font-bold text-xs sm:text-sm">${company.name}</p>`;
                                    parent.appendChild(textDiv);
                                }
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <p className="text-slate-600 text-sm sm:text-base italic">
                    ...and many more leading companies across industries
                </p>
            </div>
        </section>
    );
};
