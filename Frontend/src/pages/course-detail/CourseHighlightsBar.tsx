import React from "react";
import { Briefcase, LayoutDashboard, Github, Linkedin, Bell, TrendingUp, BookOpen, Users, Monitor } from "lucide-react";

export const CourseHighlightsBar = () => {
    return (
        <div className="bg-[#0075CF] py-8 border-y border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    <HighlightItem icon={Briefcase} text="Hands-On Industry Projects in Vijayawada" />
                    <HighlightItem icon={LayoutDashboard} text="AOTMS Learning Portal" />
                    <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-default min-w-[200px] justify-center sm:justify-start">
                        <div className="flex gap-1">
                            <Github className="w-5 h-5 text-[#0075CF]" />
                            <Linkedin className="w-5 h-5 text-[#0075CF]" />
                        </div>
                        <span className="font-bold text-slate-800 text-sm sm:text-base">GitHub & LinkedIn Project Portfolio</span>
                    </div>
                    <HighlightItem icon={Bell} text="Career & Job Alerts in Vijayawada" />
                    <HighlightItem icon={TrendingUp} text="In-Demand Skill Development" />
                    <HighlightItem icon={BookOpen} text="Free Aptitude Training" />
                    <HighlightItem icon={Users} text="Corporate-Level Industry Interactions" />
                    <div className="flex items-center gap-3 bg-orange-500 rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-default min-w-[200px] justify-center sm:justify-start">
                        <Monitor className="w-5 h-5 text-white" />
                        <span className="font-bold text-white text-sm sm:text-base">80% Practical Lab • Theory 20%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HighlightItem = ({ icon: Icon, text }: { icon: React.ElementType, text: string }) => (
    <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-default min-w-[200px] justify-center sm:justify-start">
        <Icon className="w-5 h-5 text-[#0075CF]" />
        <span className="font-bold text-slate-800 text-sm sm:text-base">{text}</span>
    </div>
);
