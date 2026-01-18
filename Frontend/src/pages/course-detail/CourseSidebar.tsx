import React from "react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/courses/CourseCard";
import { Course } from "@/hooks/useCourses";

interface CourseSidebarProps {
    course: any;
    programDetails: {
        duration: string;
        unit?: string;
    };
    theme: {
        color: string;
    };
}

export const CourseSidebar = ({ course, programDetails, theme }: CourseSidebarProps) => {
    return (
        <div className="sticky top-24 space-y-6">
            <CourseCard
                course={{
                    ...course,
                    id: course._id,
                    category: course.category || "Professional Course",
                    price: course.price || "₹0",
                    duration: `${programDetails.duration} ${programDetails.unit || 'Days'}`,
                    themeColor: theme.color
                } as Course}
            />

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Request Callback</h3>
                <p className="text-sm text-slate-600 mb-4">
                    Have questions? Our counselor will help you choose the right path.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book Free Counseling
                </Button>
            </div>
        </div>
    );
};
