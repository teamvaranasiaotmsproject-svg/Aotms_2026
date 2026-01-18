export const getProgramDetails = (category: string) => {
    const defaultProgram = {
        duration: "90",
        unit: "Days",
        learning: "75 Days Learning",
        project: "15 Days Project",
        learningText: "Comprehensive module-based learning",
        projectText: "Real-world capstone project implementation",
        gradient: "bg-[conic-gradient(#3B82F6_0%_75%,#10B981_75%_100%)]",
        legend: [
            { label: "75 Days Learning", color: "bg-blue-500" },
            { label: "15 Days Project", color: "bg-emerald-500" }
        ],
        roles: ["Software Developer", "Full Stack Engineer", "Backend Developer", "Frontend Developer"],
        activity: "Practical Labs, Live Projects, Mock Tests",
        mode: "Online + Offline (Hybrid)",
        eligibility: "Open to Undergraduates, Graduates & Working Professionals"
    };

    const programs: Record<string, typeof defaultProgram> = {
        "Data Science": {
            duration: "90", unit: "Days",
            learning: "75 Days Learning", project: "15 Days Project",
            learningText: "Statistics, Python, ML Algorithms", projectText: "End-to-end Data Science Lifecycle",
            gradient: "bg-[conic-gradient(#8B5CF6_0%_83%,#F59E0B_83%_100%)]",
            legend: [{ label: "75 Days Learning", color: "bg-violet-500" }, { label: "15 Days Project", color: "bg-amber-500" }],
            roles: ["Data Scientist", "ML Engineer", "Data Analyst", "AI Researcher"],
            activity: "Hackathons, Research Paper Reading, Model Optimization",
            mode: "Hybrid (Online Lectures + Offline Lab Access)",
            eligibility: "STEM Background preferred, Statistics knowledge helpful"
        },
        "AI/Machine Learning": {
            duration: "90", unit: "Days",
            learning: "75 Days Learning", project: "15 Days Project",
            learningText: "Deep Learning, NLP, Computer Vision", projectText: "AI Model Deployment",
            gradient: "bg-[conic-gradient(#EC4899_0%_83%,#3B82F6_83%_100%)]",
            legend: [{ label: "75 Days Learning", color: "bg-pink-500" }, { label: "15 Days Project", color: "bg-blue-500" }],
            roles: ["AI Engineer", "ML Ops Engineer", "NLP Specialist", "Computer Vision Engineer"],
            activity: "Hackathons, Research Paper Reading, Model Optimization.",
            mode: "Hybrid (Online Lectures + Offline Lab Access).",
            eligibility: "STEM Background preferred, Python knowledge helpful."
        },
        "UI/UX Design": {
            duration: "90", unit: "Days",
            learning: "75 Days Learning", project: "15 Days Project",
            learningText: "Daily 90 mins \u2013 60 mins Class + 30 mins Practice", projectText: "Hands-On Project with Certification",
            gradient: "bg-[conic-gradient(#10B981_0%_83%,#3B82F6_83%_100%)]",
            legend: [{ label: "75 Days Learning", color: "bg-emerald-500" }, { label: "15 Days Project", color: "bg-blue-500" }],
            roles: ["UI/UX Designer", "Product Designer", "UX Researcher", "Interaction Designer"],
            activity: "Every Saturday Free Aptitude classes, Mock Interviews, Technical Tests and onboarding development skills.",
            mode: "Classroom + Lab Practice + Simulations + Projects + Mock Interviews",
            eligibility: "B.Tech, B.Sc, BCA, M.Tech, MCA Students as well as Job seekers, Job Switchers."
        },
        "UI/UX Design Masterclass": {
            duration: "90", unit: "Days",
            learning: "75 Days Learning", project: "15 Days Project",
            learningText: "Design Systems, Wireframing, Prototyping", projectText: "Complete Product Design Portfolio",
            gradient: "bg-[conic-gradient(#10B981_0%_83%,#3B82F6_83%_100%)]",
            legend: [{ label: "75 Days Learning", color: "bg-emerald-500" }, { label: "15 Days Project", color: "bg-blue-500" }],
            roles: ["UI/UX Designer", "Product Designer", "UX Researcher", "Interaction Designer"],
            activity: "Every Saturday Free Aptitude classes, Mock Interviews, Technical Tests.",
            mode: "Classroom + Lab Practice + Simulations + Projects + Mock Interviews.",
            eligibility: "B.Tech, B.Sc, BCA, M.Tech, MCA Students, Job seekers, Switchers."
        },
        "Full Stack": { // Generic for MERN/MEAN/Java/Python if not specific
            duration: "90", unit: "Days",
            learning: "75 Days Learning", project: "15 Days Project",
            learningText: "Frontend, Backend, Database, Cloud", projectText: "Full Stack Application Development",
            gradient: "bg-[conic-gradient(#EF4444_0%_80%,#3B82F6_80%_100%)]",
            legend: [{ label: "75 Days Learning", color: "bg-red-500" }, { label: "15 Days Project", color: "bg-blue-500" }],
            roles: ["Full Stack Developer", "Backend Developer", "Frontend Architect", "API Specialist"],
            activity: "Live Coding Sessions, Hackathons, Project Reviews",
            mode: "Online Live Classes + Recorded Sessions + Support",
            eligibility: "Any Graduate / Under-graduate with passion for coding"
        },
        "Cyber Security": {
            duration: "90", unit: "Days",
            learning: "75 Days Learning", project: "15 Days Project",
            learningText: "Network Security, Ethical Hacking", projectText: "Vulnerability Assessment & Penetration Testing",
            gradient: "bg-[conic-gradient(#10B981_0%_75%,#EF4444_75%_100%)]",
            legend: [{ label: "75 Days Learning", color: "bg-emerald-500" }, { label: "15 Days Project", color: "bg-red-500" }],
            roles: ["Ethical Hacker", "Security Analyst", "Penetration Tester", "SOC Analyst"],
            activity: "CTF Challenges, Lab Simulations, Hackathons",
            mode: "Hybrid (Online + Labs)",
            eligibility: "Networking Basics, Linux Interest"
        }
    };

    // Mapping specific courses to generic types if needed
    if (category.includes("Full Stack") || category.includes("MERN") || category.includes("MEAN")) {
        return { ...programs["Full Stack"], roles: category.includes("Java") ? ["Java Developer", "Spring Boot Engineer", "Full Stack Dev"] : category.includes("Python") ? ["Python Developer", "Django Engineer", "Full Stack Dev"] : ["MERN/MEAN Stack Dev", "Frontend Lead", "Backend Engineer"] };
    }

    return programs[category] || defaultProgram;
};

export const getCourseTheme = (category: string) => {
    if (!category) {
        return {
            color: "#FF6B35",
            image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2706&auto=format&fit=crop",
        };
    }
    if (category.includes("Data") || category.includes("AI") || category.includes("Machine")) {
        return {
            color: "#3b82f6", // Blue-500
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", // Data Visualization
        };
    }
    if (category.includes("Cloud") || category.includes("DevOps")) {
        return {
            color: "#0ea5e9", // Sky-500
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop", // Global Network
        };
    }
    if (category.includes("Security") || category.includes("Cyber")) {
        return {
            color: "#10b981", // Emerald-500
            image: "https://images.unsplash.com/photo-1563206767-5b1d97289374?q=80&w=2541&auto=format&fit=crop", // Matrix/Code
        };
    }
    if (category.includes("Design") || category.includes("UI/UX")) {
        return {
            color: "#EC4899", // Pink-500
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop", // Design/Abstract
        };
    }
    // Default Web/Full Stack (AOTMS Blue)
    return {
        color: "#FF6B35",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2706&auto=format&fit=crop", // Clean Coding Workspace
    };
};

export const getCourseFeatures = (category: string) => {
    return [
        {
            icon: "Award",
            title: "Courses & Certifications",
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            icon: "Linkedin",
            title: "LINKEDIN & NAUKRI & GIT Profile Support",
            color: "text-sky-700",
            bgColor: "bg-sky-50"
        },
        {
            icon: "Briefcase",
            title: "Corp.. level tasks handling",
            color: "text-slate-700",
            bgColor: "bg-slate-50"
        },
        {
            icon: "Megaphone",
            title: "Profile Marketing, Till you get the JOB",
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            icon: "FileText",
            title: "CV creation thru ATS portal",
            color: "text-emerald-600",
            bgColor: "bg-emerald-50"
        },
        {
            icon: "MessageSquare",
            title: "Interview Guidance & Support",
            color: "text-orange-600",
            bgColor: "bg-orange-50"
        },
        {
            icon: "MessageCircle",
            title: "Free Soft SKILLS Training",
            color: "text-pink-600",
            bgColor: "bg-pink-50"
        },
        {
            icon: "Unlock",
            title: "Life Time AOTMS Portal Access",
            color: "text-indigo-600",
            bgColor: "bg-indigo-50"
        },
        {
            icon: "Video",
            title: "Free Recorded Sessions Access",
            color: "text-red-600",
            bgColor: "bg-red-50"
        },
        {
            icon: "Handshake",
            title: "100% Job Guidance",
            color: "text-cyan-600",
            bgColor: "bg-cyan-50"
        },
        {
            icon: "TrendingUp",
            title: "Beginner to PRO",
            color: "text-yellow-600",
            bgColor: "bg-yellow-50"
        },
        {
            icon: "Globe",
            title: "Offline / Online",
            color: "text-teal-600",
            bgColor: "bg-teal-50"
        }
    ];
};

export const getCourseHiringCompanies = (title: string, category: string = "") => {
    return [
        { name: "Tech Mahindra", logo: "/images/tech-mahindra-1.webp" },
        { name: "IBM", logo: "/images/IBM.png" },
        { name: "Infosys", logo: "/images/Infosys.png" },
        { name: "Accenture", logo: "/images/Accenture.svg-1-1536x405-1-595xh.webp" },
        { name: "Wipro", logo: "/images/Wipro.png" },
        { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
        { name: "Mindtree", logo: "/images/mindtree.png" },
        { name: "Caterpillar", logo: "/images/caterpiller.png" },
        { name: "Microsoft", logo: "/images/Microsoft.webp" },
        { name: "Amazon", logo: "/images/amazon-logo.webp" },
        { name: "Myntra", logo: "/images/myntra.png" },
        { name: "Flipkart", logo: "/images/Flipkart.png" }
    ];
};
