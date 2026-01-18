import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { InternshipManager, EventItem } from "@/components/events/InternshipManager";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";

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
                id: "ai-ml-long",
                name: "AI/ML Developer Internship (Long Term)",
                description: "Master the core of Artificial Intelligence and Machine Learning in this comprehensive 6-month program. Work on real-world projects involving Neural Networks, Deep Learning, and Computer Vision.",
                thumbnailUrl: "/images/ai_oyxa8p.jpg",
                bannerUrl: "/images/ai_oyxa8p.jpg",
                mode: "Hybrid",
                date: "Enroll Anytime",
                duration: "6 Months",
                tagline: "ADVANCED AI TRAINING",
                whatYouWillLearn: ["TensorFlow & PyTorch", "Neural Architectures", "Natural Language Processing", "Deployment Strategies"],
                level: "Advanced"
            },
            {
                id: "ai-ml-short",
                name: "AI/ML Fast-Track Internship (Short Term)",
                description: "A high-intensity program covering the essentials of Machine Learning. Perfect for students looking for quick industrial exposure during breaks.",
                thumbnailUrl: "/images/ai_oyxa8p.jpg",
                bannerUrl: "/images/ai_oyxa8p.jpg",
                mode: "Online",
                date: "Continuous Intake",
                duration: "1 to 45 Days",
                tagline: "RAPID AI EXPOSURE",
                whatYouWillLearn: ["Data Preprocessing", "Supervised Learning", "Regression Models", "Model Selection"],
                level: "Beginner to Intermediate"
            },
            {
                id: "cyber-long",
                name: "Cyber Security Analyst Internship (Long Term)",
                description: "Become an expert in protecting digital assets. This 6-month internship covers Ethical Hacking, Network Security, and SOC operations in depth.",
                thumbnailUrl: "/images/cyber-security.jpg",
                bannerUrl: "/images/cyber-security.jpg",
                mode: "Hybrid",
                date: "Enroll Anytime",
                duration: "6 Months",
                tagline: "DEFENSIVE & OFFENSIVE SECURITY",
                whatYouWillLearn: ["Ethical Hacking", "Network Intrusion Detection", "Cloud Security", "Incident Response"],
                level: "Intermediate"
            },
            {
                id: "cyber-short",
                name: "Cyber Forensic Internship (Short Term)",
                description: "Intense short-term program focusing on the foundations of digital forensics and cybersecurity protocols. Get industry certificates in under 45 days.",
                thumbnailUrl: "/images/cyber-security.jpg",
                bannerUrl: "/images/cyber-security.jpg",
                mode: "Online",
                date: "Monthly Batch",
                duration: "1 to 45 Days",
                tagline: "SECURITY FOUNDATIONS",
                whatYouWillLearn: ["Basic Cryptography", "Security Auditing", "Password Security", "Vulnerability Scanning"],
                level: "Beginner"
            },
            {
                id: "python-long",
                name: "Python Full Stack Engineer (Long Term)",
                description: "Master Django, Flask, and React. Build scalable enterprises applications from scratch in this 6-month industrial internship.",
                thumbnailUrl: "/images/python_urv1ku.jpg",
                bannerUrl: "/images/python_urv1ku.jpg",
                mode: "In-Office",
                date: "Enroll Anytime",
                duration: "6 Months",
                tagline: "FULL STACK MASTERY",
                whatYouWillLearn: ["Django/Flask Backend", "React Frontend", "RESTful APIs", "Database Optimization"],
                level: "Advanced"
            },
            {
                id: "python-short",
                name: "Python Application Builder (Short Term)",
                description: "A quick dive into Python automation and script building. Learn to automate tasks and build basic tools in less than 45 days.",
                thumbnailUrl: "/images/python_urv1ku.jpg",
                bannerUrl: "/images/python_urv1ku.jpg",
                mode: "Online",
                date: "Weekly Batch",
                duration: "1 to 45 Days",
                tagline: "PYTHON AUTOMATION",
                whatYouWillLearn: ["Basic Syntax", "File Handling", "Web Scraping", "GUI with Tkinter"],
                level: "Beginner"
            },
            {
                id: "java-long",
                name: "Java Enterprise Developer (Long Term)",
                description: "Deep dive into Spring Boot and Microservices. This 6-month program prepares you for big-tech enterprise development roles.",
                thumbnailUrl: "/images/java-full-stack_x5y7x8.jpg",
                bannerUrl: "/images/java-full-stack_x5y7x8.jpg",
                mode: "In-Office",
                date: "Enroll Anytime",
                duration: "6 Months",
                tagline: "ENTERPRISE SCALING",
                whatYouWillLearn: ["Spring Boot Framework", "Hibernate & JPA", "Microservices Design", "Docker & Kubernetes"],
                level: "Advanced"
            },
            {
                id: "java-short",
                name: "Java Basics & Logic (Short Term)",
                description: "Strengthen your core Java and DSA skills. Focused on logic building and basic program structure for interviews.",
                thumbnailUrl: "/images/java-full-stack_x5y7x8.jpg",
                bannerUrl: "/images/java-full-stack_x5y7x8.jpg",
                mode: "Online",
                date: "Flexible Start",
                duration: "1 to 45 Days",
                tagline: "CORE JAVA FAST-TRACK",
                whatYouWillLearn: ["Oops Concepts", "Collections Framework", "Exception Handling", "Basic DSA"],
                level: "Beginner"
            },
            {
                id: "data-long",
                name: "Data Analyst Specialist (Long Term)",
                description: "Extract insights from complex datasets. 6-month program focusing on PowerBI, SQL, Advanced Excel, and Python for Data Analysis.",
                thumbnailUrl: "/images/data-analytics-v2_glp5sc.jpg",
                bannerUrl: "/images/data-analytics-v2_glp5sc.jpg",
                mode: "Hybrid",
                date: "Monthly Batch",
                duration: "6 Months",
                tagline: "DATA-DRIVEN DECISIONS",
                whatYouWillLearn: ["Advanced SQL Queries", "PowerBI Dashboards", "Statistical Analysis", "Tableau Visualization"],
                level: "Advanced"
            },
            {
                id: "data-short",
                name: "Data Visualization Intern (Short Term)",
                description: "Learn to represent data visually and meaningfully. Short-term exposure to Excel and basic PowerBI for quick career boosts.",
                thumbnailUrl: "/images/data-analytics-v2_glp5sc.jpg",
                bannerUrl: "/images/data-analytics-v2_glp5sc.jpg",
                mode: "Online",
                date: "Weekly Batch",
                duration: "1 to 45 Days",
                tagline: "VISUAL INSIGHTS",
                whatYouWillLearn: ["Excel Charting", "Pivot Tables", "Data Cleaning Basics", "Visual Storytelling"],
                level: "Beginner"
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
