import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight, Sparkles, Lock } from "lucide-react";
import { useCourses } from "@/hooks/useCourses";
import { CourseCard } from "./CourseCard";
import { Badge } from "@/components/ui/badge";
import { useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthStore } from "@/store/authStore";

export const ProfessionalPrograms = () => {
    const { token } = useAuthStore();
    const isLoggedIn = !!token;
    const { data: courses, isLoading } = useCourses();
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", skipSnaps: false, dragFree: true },
        [AutoScroll({ playOnInit: true, stopOnInteraction: true, stopOnMouseEnter: true, speed: 1 })]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            const autoScroll = emblaApi.plugins().autoScroll;
            if (autoScroll) autoScroll.stop();
            emblaApi.scrollPrev();
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            const autoScroll = emblaApi.plugins().autoScroll;
            if (autoScroll) autoScroll.stop();
            emblaApi.scrollNext();
        }
    }, [emblaApi]);

    if (isLoading) {
        return (
            <section id="courses" className="py-8 md:py-12 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center mb-8">
                        <Skeleton className="h-8 w-48 mb-6" />
                        <Skeleton className="h-10 w-96 mb-4" />
                        <Skeleton className="h-4 w-full max-w-2xl" />
                    </div>
                    <div className="flex gap-6 overflow-hidden">
                        {[1, 2, 3].map((i) => (
                            <Skeleton key={i} className="h-[400px] w-full md:w-1/3 rounded-xl" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="courses" className="pt-8 md:pt-12 pb-4 md:pb-6 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header Section - Centered Hero Style */}
                <div className="flex flex-col items-center text-center mb-8">
                    <Badge className="bg-blue-100/50 text-blue-700 hover:bg-blue-100 border-none px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                        <Sparkles className="w-3.5 h-3.5 mr-2 fill-current" />
                        World Class Education
                    </Badge>
                    <h2 className="text-lg sm:text-2xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis text-slate-900">
                        Professional <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">Training Programs in Vijayawada</span> <br /><br />
                    </h2>
                    <p className="text-sm md:text-base text-slate-900 font-medium leading-relaxed max-w-2xl mx-auto">
                        Xcelerate your career with our industry-leading certification programs in Vijayawada.
                        Designed by experts, delivered by professionals.
                    </p>

                    <div className="flex items-center gap-4 mt-6">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 active:scale-95 transition-all duration-300 group"
                            aria-label="Scroll left"
                            disabled={!courses || courses.length === 0}
                        >
                            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 active:scale-95 transition-all duration-300 group"
                            aria-label="Scroll right"
                            disabled={!courses || courses.length === 0}
                        >
                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </div>
                </div>

                {courses && courses.length > 0 ? (
                    <div className="embla overflow-hidden" ref={emblaRef}>
                        <div className="embla__container flex py-6">
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%-22px)] px-4 md:px-0"
                                >
                                    <CourseCard course={course} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12 text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                        <p>No programs available at the moment.</p>
                    </div>
                )}
            </div>
        </section>
    );
};
