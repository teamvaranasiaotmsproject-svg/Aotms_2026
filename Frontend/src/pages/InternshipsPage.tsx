import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { InternshipManager, EventItem } from "@/components/events/InternshipManager";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";
import { SEO } from "@/components/SEO";

const InternshipsPage = () => {
    const [internships, setInternships] = useState<EventItem[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { token } = useAuthStore();

    useEffect(() => {
        if (!token) {
            toast.error("Please sign in to access this page");
            navigate("/");
            return;
        }

        // Defining internal static data for internships as requested
        const internshipData: EventItem[] = [
            {
                id: "ai-ml-internship",
                name: "AI/ML Developer Internship",
                description: "Master Artificial Intelligence and Machine Learning in our comprehensive program. Choose between a fast-track course or a deep-dive long-term internship.",
                thumbnailUrl: "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970595/ai_oyxa8p_psbaxs?_a=BAMAOGGo0",
                bannerUrl: "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970595/ai_oyxa8p_psbaxs?_a=BAMAOGGo0",
                mode: "Hybrid",
                date: "Continuous Intake",
                duration: "Flexible Duration",
                shortTermDuration: "1 to 45 Days",
                longTermDuration: "6 Months",
                tagline: "ADVANCED AI TRAINING",
                whatYouWillLearn: ["TensorFlow & PyTorch", "Neural Architectures", "Natural Language Processing", "Deployment Strategies", "Data Preprocessing", "Supervised Learning"],
                level: "Advanced"
            },
            {
                id: "cyber-security-internship",
                name: "Cyber Security Analyst Internship",
                description: "Become an expert in protecting digital assets. Available as a short-term intensive or a comprehensive 6-month career program.",
                thumbnailUrl: "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970596/cyber-security_offgii?_a=BAMAOGGo0",
                bannerUrl: "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970596/cyber-security_offgii?_a=BAMAOGGo0",
                mode: "Hybrid",
                date: "Enroll Anytime",
                duration: "Flexible Duration",
                shortTermDuration: "1 to 45 Days",
                longTermDuration: "6 Months",
                tagline: "DEFENSIVE & OFFENSIVE SECURITY",
                whatYouWillLearn: ["Ethical Hacking", "Network Intrusion Detection", "Cloud Security", "Incident Response", "Vulnerability Scanning", "Security Auditing"],
                level: "Intermediate"
            },
            {
                id: "python-fullstack-internship",
                name: "Python Full Stack Engineer",
                description: "Master Django, Flask, and React. Build scalable applications from automation scripts to enterprise-level systems depending on your duration choice.",
                thumbnailUrl: "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970602/python_urv1ku_ivieer?_a=BAMAOGGo0",
                bannerUrl: "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970602/python_urv1ku_ivieer?_a=BAMAOGGo0",
                mode: "In-Office",
                date: "Enroll Anytime",
                duration: "Flexible Duration",
                shortTermDuration: "1 to 45 Days",
                longTermDuration: "6 Months",
                tagline: "FULL STACK MASTERY",
                whatYouWillLearn: ["Django/Flask Backend", "React Frontend", "RESTful APIs", "Database Optimization", "Web Scraping", "Automation Scripts"],
                level: "Advanced"
            },
            {
                id: "java-enterprise-internship",
                name: "Java Enterprise Developer",
                description: "From core logic building to microservices architecture. A flexible program designed for both interview prep and enterprise development mastery.",
                thumbnailUrl: "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970599/java-full-stack_x5y7x8_brwwi5?_a=BAMAOGGo0",
                bannerUrl: "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970599/java-full-stack_x5y7x8_brwwi5?_a=BAMAOGGo0",
                mode: "In-Office",
                date: "Flexible Start",
                duration: "Flexible Duration",
                shortTermDuration: "1 to 45 Days",
                longTermDuration: "6 Months",
                tagline: "ENTERPRISE SCALING",
                whatYouWillLearn: ["Spring Boot Framework", "Hibernate & JPA", "Microservices Design", "Docker & Kubernetes", "DSA Concepts", "Exception Handling"],
                level: "Advanced"
            },
            {
                id: "data-analyst-internship",
                name: "Data Analyst Specialist",
                description: "Learn to visualize and analyze data. Choose short-term for quick skills or long-term for complete mastery of PowerBI, SQL, and Python analysis.",
                thumbnailUrl: "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970596/data-analytics-v2_glp5sc_gvgrzb?_a=BAMAOGGo0",
                bannerUrl: "https://res.cloudinary.com/dhrommrn4/image/upload/f_auto,q_auto,w_600/v1768970596/data-analytics-v2_glp5sc_gvgrzb?_a=BAMAOGGo0",
                mode: "Hybrid",
                date: "Monthly Batch",
                duration: "Flexible Duration",
                shortTermDuration: "1 to 45 Days",
                longTermDuration: "6 Months",
                tagline: "DATA-DRIVEN DECISIONS",
                whatYouWillLearn: ["Advanced SQL Queries", "PowerBI Dashboards", "Statistical Analysis", "Tableau Visualization", "Excel Charting", "Data Cleaning"],
                level: "Advanced"
            }
        ];

        setInternships(internshipData);
        setLoading(false);
    }, [token, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="pt-32 container mx-auto text-center">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="h-8 w-64 bg-slate-200 rounded mb-4"></div>
                        <div className="h-64 w-full max-w-4xl bg-slate-100 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO
                title="Industrial Internships"
                description="Apply for industrial internships at Academy of Tech Masters, Vijayawada. Work on real-world projects in AI, Cyber Security, Full Stack, and Data Analytics."
                keywords="IT internships Vijayawada, industrial training AOTMS, tech internships for students"
                canonical="https://aotms.in/internships"
            />
            <Header />
            <main className="pt-28 md:pt-32 flex-1 relative">
                <InternshipManager
                    events={internships}
                    title="Internships"
                    subtitle="Join our industrial internships to work on real-world projects and gain professional exposure."
                />
            </main>
            <Footer />
        </div>
    );
};

export default InternshipsPage;
