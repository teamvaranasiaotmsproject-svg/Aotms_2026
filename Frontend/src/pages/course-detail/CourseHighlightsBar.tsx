import React from "react";
import { Briefcase, LayoutDashboard, Github, Linkedin, Bell, TrendingUp, BookOpen, Users, Monitor } from "lucide-react";

export const CourseHighlightsBar = () => {
    return (
        <div className="bg-[#0075CF] py-6 sm:py-8 border-y border-white/10">
            <div className="container mx-auto px-2 sm:px-4 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                    <HighlightItem icon={Briefcase} text="Hands-On Industry Projects" />
                    <HighlightItem icon={LayoutDashboard} text="AOTMS Learning Portal" />
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-xl sm:rounded-full p-3 sm:px-6 sm:py-3 shadow-lg hover:scale-105 transition-transform cursor-default w-full justify-center h-full">
                        <div className="flex gap-1 shrink-0">
                            <Github className="w-5 h-5 text-[#0075CF]" />
                            <Linkedin className="w-5 h-5 text-[#0075CF]" />
                        </div>
                        <span className="font-bold text-slate-800 text-xs sm:text-base text-center sm:text-left leading-tight">Project Portfolio</span>
                    </div>
                    <HighlightItem icon={Bell} text="Career & Job Alerts" />
                    <HighlightItem icon={TrendingUp} text="Skill Development" />
                    <HighlightItem icon={BookOpen} text="Free Aptitude Training" />
                    <HighlightItem icon={Users} text="Corporate Interactions" />
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-orange-500 rounded-xl sm:rounded-full p-3 sm:px-6 sm:py-3 shadow-lg hover:scale-105 transition-transform cursor-default w-full justify-center h-full">
                        <Monitor className="w-5 h-5 text-white shrink-0" />
                        <span className="font-bold text-white text-xs sm:text-base text-center sm:text-left leading-tight">80% Practical • 20% Theory</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HighlightItem = ({ icon: Icon, text }: { icon: React.ElementType, text: string }) => (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-xl sm:rounded-full p-3 sm:px-6 sm:py-3 shadow-lg hover:scale-105 transition-transform cursor-default w-full justify-center h-full">
        <Icon className="w-5 h-5 text-[#0075CF] shrink-0" />
        <span className="font-bold text-slate-800 text-xs sm:text-base text-center sm:text-left leading-tight">{text}</span>
    </div>
);
