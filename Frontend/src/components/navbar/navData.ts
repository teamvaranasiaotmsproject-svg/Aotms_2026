import { GraduationCap, Calendar, Laptop, Mail, HelpCircle, MessageSquare, BookOpen } from "lucide-react";
import {
    FaReact, FaBrain, FaChartBar, FaShieldAlt,
    FaJava, FaPython, FaDatabase, FaCloud, FaCode,
    FaUserTie, FaNetworkWired, FaAngular
} from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaBookOpen } from "react-icons/fa6";

export const courses = [
    { name: "AI & Machine Learning", href: "/course/ai-machine-learning", icon: FaBrain },
    { name: "Cyber Security", href: "/course/cyber-security", icon: FaShieldAlt },
    { name: "Data Analytics", href: "/course/data-analytics", icon: FaChartBar },
    { name: "Data Science", href: "/course/data-science", icon: FaDatabase },
    { name: "DevOps", href: "/course/devops", icon: FaCloud },
    { name: "Embedded Systems", href: "/course/embedded-systems", icon: FaCode },
    { name: "Java Full Stack", href: "/course/java-full-stack", icon: FaJava },
    { name: "MEAN Stack", href: "/course/mean-stack", icon: FaAngular },
    { name: "MERN Stack", href: "/course/mern-stack", icon: FaReact },
    { name: "Multi-Cloud Consultant", href: "/course/multi-cloud-consultant", icon: FaUserTie },
    { name: "Multi-Cloud Engineering", href: "/course/multi-cloud-engineering", icon: FaNetworkWired },
    { name: "Python Full Stack", href: "/course/python-full-stack", icon: FaPython },
    { name: "Quantum Computing", href: "/course/quantum-computing", icon: FaBrain },
    { name: "UI/UX Design", href: "/course/ui-ux-design", icon: SiMui },
    { name: "QA Automation", href: "/course/qa-automation", icon: FaCode },
];

export const navLinks = [
    {
        name: "What We Do",
        href: "/#what-we-do",
        hasDropdown: true,
        dropdownItems: [
            { name: "Placement", href: "/placements", icon: FaChartBar, desc: "Success records" },
            { name: "Internships", href: "/internships", icon: GraduationCap, desc: "Industrial training" },
            { name: "Career Resources", href: "/resources", icon: FaUserTie, desc: "Learning materials" },
        ]
    },
    {
        name: "Courses",
        href: "/courses",
        hasDropdown: true,
        dropdownItems: courses.map(c => ({ ...c, desc: "Professional Program" })),
        isMegaMenu: true
    },
    {
        name: "Initiatives",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { name: "Workshops", href: "/workshop", icon: Laptop, desc: "Hands-on sessions" },
            { name: "Hackathons", href: "/hackathon", icon: FaCode, desc: "Build & Compete" },
            { name: "Weekly Activities", href: "/events", icon: Calendar, desc: "Academic Initiatives" },
        ]
    },
    {
        name: "Who We Are",
        href: "/about-us",
        hasDropdown: false,
    },
    {
        name: "Insights",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { name: "Blog", href: "/blog", icon: FaBookOpen, desc: "Tech insights" },
            { name: "FAQ", href: "/faq", icon: HelpCircle, desc: "Common questions" },
            { name: "Feedback", href: "/feedback", icon: MessageSquare, desc: "Share your thoughts" },
            { name: "Contact", href: "/contact", icon: Mail, desc: "Get in touch" },
        ]
    },
    {
        name: "Careers",
        href: "/careers",
        hasDropdown: false,
    },
];

export const degrees = ["B.Tech", "M.Tech", "MCA", "MBA", "Others"];
export const departments = ["CSE", "IT", "ECE", "EEE", "MECH", "CIVIL", "AI & DS", "AIML", "CYBER SECURITY", "DATA SCIENCE"];
export const countryCodes = [
    { code: "+91", label: "India", iso: "in" },
    { code: "+1", label: "USA", iso: "us" },
    { code: "+44", label: "UK", iso: "gb" },
    { code: "+1", label: "Canada", iso: "ca" },
    { code: "+61", label: "Australia", iso: "au" },
    { code: "+49", label: "Germany", iso: "de" },
    { code: "+33", label: "France", iso: "fr" },
    { code: "+971", label: "UAE", iso: "ae" },
    { code: "+65", label: "Singapore", iso: "sg" },
    { code: "+81", label: "Japan", iso: "jp" },
    { code: "+82", label: "South Korea", iso: "kr" },
    { code: "+60", label: "Malaysia", iso: "my" },
    { code: "+966", label: "Saudi Arabia", iso: "sa" },
    { code: "+974", label: "Qatar", iso: "qa" },
    { code: "+27", label: "South Africa", iso: "za" },
    { code: "+64", label: "New Zealand", iso: "nz" }
];

export const passoutYears = Array.from({ length: 15 }, (_, i) => String(new Date().getFullYear() + 5 - i));
export const courseOptions = [
    { name: "MERN Stack", icon: FaReact },
    { name: "Python Full Stack", icon: FaPython },
    { name: "Java Full Stack", icon: FaJava },
    { name: "Cyber Security", icon: FaShieldAlt },
    { name: "AI & Machine Learning", icon: FaBrain },
    { name: "Data Science", icon: FaDatabase },
    { name: "Cloud Computing", icon: FaCloud },
    { name: "UI/UX Design", icon: Laptop },
    { name: "Other", icon: BookOpen }
];
