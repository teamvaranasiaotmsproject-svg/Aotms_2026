import React from "react";
import { cn } from "@/lib/utils";

interface CourseStickyNavProps {
    activeSection: string;
    setActiveSection: (id: string) => void;
}

export const CourseStickyNav = ({ activeSection, setActiveSection }: CourseStickyNavProps) => {
    const navItems = [
        { id: "overview", label: "Overview" },
        { id: "curriculum", label: "Curriculum" },
        { id: "technologies", label: "Tools" },
        { id: "projects", label: "Projects" },

        { id: "careers", label: "Careers" },
        { id: "hiring", label: "Hiring" },
    ];

    return (
        <div className="sticky top-[4.5rem] md:top-20 z-40 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm mb-8 overflow-hidden">
            <div className="flex overflow-x-auto p-2 gap-2 pb-4 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveSection(item.id);
                        }}
                        className={cn(
                            "whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all border",
                            activeSection === item.id
                                ? "bg-[#0075CF] text-white border-[#0075CF] shadow-md"
                                : "bg-white text-slate-600 border-transparent hover:bg-slate-50 hover:border-slate-200"
                        )}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
