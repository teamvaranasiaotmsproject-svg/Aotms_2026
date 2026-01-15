import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Course } from "@/hooks/useCourses";
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/authStore";
import { useState } from 'react';
import { toast } from "sonner";
import {
    FaReact, FaAws, FaBrain, FaChartBar, FaShieldAlt,
    FaJava, FaPython, FaDatabase, FaCloud, FaCode, FaBug, FaPencilAlt
} from "react-icons/fa";
import { SiMui } from "react-icons/si";

interface CourseCardProps {
    course: Course;
}

const getCourseIcon = (title: string) => {
    if (!title) return FaCode;
    if (title.includes("Data Science")) return FaDatabase;
    if (title.includes("Cyber")) return FaShieldAlt;
    if (title.includes("Data Analytics")) return FaChartBar;
    if (title.includes("DevOps") || title.includes("Cloud")) return FaCloud;
    if (title.includes("Embedded")) return FaCode;
    if (title.includes("Java")) return FaJava;
    if (title.includes("MERN") || title.includes("React")) return FaReact;
    if (title.includes("Python")) return FaPython;
    if (title.includes("Quantum") || title.includes("Intelligence") || title.includes("AI")) return FaBrain;
    if (title.includes("UI/UX")) return SiMui;
    if (title.includes("QA") || title.includes("Testing")) return FaBug;
    return FaCode; // Default
};

export const CourseCard = ({ course }: CourseCardProps) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const [isClicked, setIsClicked] = useState(false);
    const Icon = getCourseIcon(course.title);

    const handleAddToCart = () => {
        const isLoggedIn = !!useAuthStore.getState().token;
        if (!isLoggedIn) {
            toast.error("Please log in to start learning.");
            return;
        }

        addToCart({
            id: String(course.id),
            name: course.title,
            price: parseInt(course.price.replace(/[^\d]/g, '')),
            image: course.image
        });
        toast.success("Added to cart!");
    };

    return (
        <div
            className={cn(
                "group relative flex flex-col bg-white overflow-hidden transition-all duration-300",
                "w-full max-w-[340px] mx-auto min-h-[400px] md:min-h-[440px]", // Compacted Height
                "rounded-[18px] md:rounded-[22px]",
                "hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50",
                isClicked && "scale-[0.98]"
            )}
            onMouseDown={() => setIsClicked(true)}
            onMouseUp={() => setIsClicked(false)}
            onMouseLeave={() => setIsClicked(false)}
        >
            {/* 1️⃣ TOP BANNER (IMAGE ZONE) */}
            <div className="relative h-[140px] md:h-[160px] w-full overflow-hidden shrink-0"> {/* Reduced Height */}
                <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            {/* 2️⃣ COURSE LOGO / ICON */}
            <div className="absolute top-[115px] md:top-[135px] left-6 z-20"> {/* Adjusted Position */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-50">
                    <div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[var(--course-color)]"
                        /* webhint-disable-next-line no-inline-styles */
                        style={{ '--course-color': course.themeColor } as React.CSSProperties}
                    >
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                </div>
            </div>

            {/* 3️⃣ MAIN CONTENT AREA */}
            <div className="flex-1 p-4 md:p-6 pt-10 md:pt-12 flex flex-col justify-between">
                <div className="mb-3">
                    <Link to={`/course/${course.slug}`}>
                        <h3 className="text-lg md:text-xl font-bold text-black leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                            {course.title}
                        </h3>
                    </Link>
                    <p className="text-slate-500 text-sm line-clamp-1 mb-2 font-medium">
                        Expertly crafted career path in {course.category}
                    </p>
                    <p className="text-blue-600 text-[11px] md:text-xs font-bold uppercase tracking-wider">
                        Instructor: {course.trainer} • {course.level}
                    </p>
                </div>

                {/* 4️⃣ META INFO ROW & CTA */}
                <div className="flex flex-col gap-4 mt-auto">
                    <div className="flex items-center gap-3 text-[11px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1.5">{course.duration}</span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                        <span>Online / Live</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-baseline justify-between mb-1">
                            <span className="text-xl md:text-2xl font-black text-black">
                                {course.price}
                            </span>
                            {course.originalPrice && (
                                <span className="text-xs md:text-sm text-slate-400 line-through font-bold">
                                    {course.originalPrice}
                                </span>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                to={`/course/${course.slug}`}
                                className={cn(
                                    "flex items-center justify-center h-10 md:h-11 rounded-xl font-bold text-xs md:text-sm transition-all duration-200", // Compact Button
                                    "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 active:scale-[0.97]"
                                )}
                            >
                                Explore
                            </Link>
                            <button
                                onClick={handleAddToCart}
                                className={cn(
                                    "flex items-center justify-center h-10 md:h-11 rounded-xl font-bold text-xs md:text-sm transition-all duration-200", // Compact Button
                                    "bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 active:scale-[0.97]"
                                )}
                            >
                                Start Learning
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
