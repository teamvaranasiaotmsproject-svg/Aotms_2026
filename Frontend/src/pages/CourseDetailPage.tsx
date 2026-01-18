import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { CourseDetailHero } from "./CourseDetailsHero";
import { useCourseBySlug, useCourses } from "@/hooks/useCourses";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";

// Extracted Sub-components
import { CourseHighlightsBar } from "./course-detail/CourseHighlightsBar";
import { CourseStickyNav } from "./course-detail/CourseStickyNav";
import { CourseIntroSections } from "./course-detail/CourseIntroSections";
import { CourseToolsTable } from "./course-detail/CourseToolsTable";
import { CourseObjectives, CourseLearningOutcomes } from "./course-detail/CourseOutcomes";
import { CourseCapstoneProjects } from "./course-detail/CourseCapstoneProjects";
import { CourseCurriculum } from "./course-detail/CourseCurriculum";
import { CourseFeatures } from "./course-detail/CourseFeatures";
import { CourseCertifications } from "./course-detail/CourseCertifications";
import { CourseCareerOpportunities } from "./course-detail/CourseCareerOpportunities";
import { CourseHiringCompanies } from "./course-detail/CourseHiringCompanies";
import { CourseSidebar } from "./course-detail/CourseSidebar";

import {
    getProgramDetails,
    getCourseCustomContent,
    getCourseFeatures,
    getCourseTheme,
    getCourseToolsAndTechnologies,
    getCourseObjectives,
    getCourseCapstoneProjects,
    getCourseLearningOutcomes,
    getCourseCertifications,
    getCourseCareerRoles,
    getCourseHiringCompanies,
    getCourseCurriculum,
} from "../data/courseMetadata";

export default function CourseDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart);
    const { data: course, isLoading } = useCourseBySlug(slug || "");
    const [activeModule, setActiveModule] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -50% 0px", threshold: 0.1 }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const handleEnroll = async () => {
        if (course) {
            addToCart({
                id: course._id,
                name: course.title,
                price: parseFloat(course.price.replace(/[^0-9.-]+/g, "")),
                image: course.image
            });
            toast.success("Course added to cart!");
            navigate("/cart");
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Course not found</h2>
                    <Link to="/courses">
                        <Button>Browse All Courses</Button>
                    </Link>
                </div>
            </div>
        );
    }

    // Load metadata
    const programDetails = getProgramDetails(course.category || course.title);
    const customSections = getCourseCustomContent(course.title, course.category || "");
    const features = getCourseFeatures(course.category || course.title);
    const theme = getCourseTheme(course.category || course.title);
    const toolsData = getCourseToolsAndTechnologies(course.title, course.category || "");
    const objectives = getCourseObjectives(course.title, course.category || "");
    const capstoneProjects = getCourseCapstoneProjects(course.title, course.category || "");
    const learningOutcomes = getCourseLearningOutcomes(course.title, course.category || "");
    const certifications = getCourseCertifications(course.title, course.category || "");
    const careerRoles = getCourseCareerRoles(course.title, course.category || "");
    const hiringCompanies = getCourseHiringCompanies(course.title, course.category || "");
    const curriculumData = getCourseCurriculum(course.title, course.category || "");

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            {/* SEO Meta Tags */}
            <Helmet>
                <title>{course.title} Course | Academy of Tech Masters</title>
                <meta name="description" content={`Learn ${course.title} with expert training. ${course.duration} course with placement assistance and certification.`} />
                <meta property="og:title" content={`${course.title} | AOTMS`} />
                <meta property="og:image" content={course.image} />
                <link rel="canonical" href={`https://aotms.in/course/${slug}`} />
            </Helmet>

            {/* Hero */}
            <CourseDetailHero
                course={{
                    title: course.title,
                    category: course.category || "Professional Training",
                    image: course.image,
                    duration: `${programDetails.duration} Days`
                }}
                handleEnroll={handleEnroll}
            />

            {/* Highlights Bar */}
            <CourseHighlightsBar />

            {/* Main Content Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

                {/* Sticky Section Navigation */}
                <CourseStickyNav activeSection={activeSection} setActiveSection={setActiveSection} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        <CourseIntroSections customSections={customSections} />

                        <CourseToolsTable toolsData={toolsData} />

                        <CourseObjectives objectives={objectives as React.ReactNode[]} />

                        <CourseCapstoneProjects projects={capstoneProjects} />

                        <CourseLearningOutcomes outcomes={learningOutcomes as React.ReactNode[]} />

                        <CourseCurriculum
                            curriculum={curriculumData}
                            activeModule={activeModule}
                            setActiveModule={setActiveModule}
                        />

                        <CourseFeatures features={features} programDetails={programDetails} />

                        <CourseCertifications certifications={certifications} />

                        <CourseCareerOpportunities careerRoles={careerRoles} />

                        <CourseHiringCompanies hiringCompanies={hiringCompanies} />
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        <CourseSidebar
                            course={course}
                            programDetails={programDetails}
                            theme={theme}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
