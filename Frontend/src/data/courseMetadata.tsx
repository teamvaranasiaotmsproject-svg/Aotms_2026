import React from "react";
import {
    SiPython, SiReact, SiNodedotjs, SiAmazonwebservices, SiDocker,
    SiGithub, SiVite, SiPandas, SiNumpy, SiScikitlearn, SiJupyter,
    SiSqlite, SiTableau, SiGooglecloud, SiTerraform,
    SiLinux, SiArduino, SiRaspberrypi,
    SiKalilinux, SiWireshark, SiMetasploit, SiSelenium, SiSpringboot,
    SiHibernate, SiMysql, SiJavascript, SiHtml5, SiCss3, SiDjango,
    SiKubernetes, SiAnsible, SiJenkins, SiPostgresql, SiTensorflow,
    SiPytorch, SiKeras, SiOpencv, SiC, SiIntel,
    SiFigma, SiSketch, SiAdobe, SiInvision, SiMiro,
    SiApachespark, SiApachekafka, SiApacheairflow, SiSnowflake, SiStreamlit,
    SiRedux, SiMui, SiTypescript, SiAngular, SiApachemaven, SiSplunk,
    SiBurpsuite, SiPlotly, SiGraphql, SiMongodb, SiExpress, SiFlask,
    SiBootstrap, SiTailwindcss, SiNotion, SiCanva, SiBehance, SiHotjar
} from "react-icons/si";
import { FaJava, FaDatabase, FaBrain, FaRobot, FaLock, FaChartLine, FaEye, FaTable, FaMicrochip, FaAtom, FaNetworkWired, FaMicrosoft } from "react-icons/fa";
import { Logo } from "../components/ui/logo-carousel";

// Define the structure for tool metadata
export interface ToolMeta {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
}

export const ToolIcons: Record<string, ToolMeta> = {
    // Programming Languages
    "Python": { icon: SiPython, color: "#3776AB" },
    "Java": { icon: FaJava, color: "#007396" },
    "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
    "TypeScript": { icon: SiTypescript, color: "#3178C6" },
    "C": { icon: SiC, color: "#A8B9CC" },
    "C++": { icon: SiC, color: "#00599C" },
    "HTML5": { icon: SiHtml5, color: "#E34F26" },
    "CSS3": { icon: SiCss3, color: "#1572B6" },
    "SQL": { icon: SiSqlite, color: "#003B57" },

    // Web Frameworks & Libraries
    "React": { icon: SiReact, color: "#61DAFB" },
    "Angular": { icon: SiAngular, color: "#DD0031" },
    "Node.js": { icon: SiNodedotjs, color: "#339933" },
    "Express": { icon: SiExpress, color: "#000000" },
    "Django": { icon: SiDjango, color: "#092E20" },
    "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
    "Redux": { icon: SiRedux, color: "#764ABC" },
    "Material UI": { icon: SiMui, color: "#007FFF" },
    "RxJS": { icon: SiJavascript, color: "#B7178C" }, // Fallback to JS icon
    "GraphQL": { icon: SiGraphql, color: "#E10098" },

    // Data Science & AI
    "Pandas": { icon: SiPandas, color: "#150458" },
    "NumPy": { icon: SiNumpy, color: "#013243" },
    "Scikit-Learn": { icon: SiScikitlearn, color: "#F7931E" },
    "Scikit": { icon: SiScikitlearn, color: "#F7931E" }, // Alias
    "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },
    "PyTorch": { icon: SiPytorch, color: "#EE4C2C" },
    "Keras": { icon: SiKeras, color: "#D00000" },
    "OpenCV": { icon: SiOpencv, color: "#5C3EE8" },
    "Jupyter": { icon: SiJupyter, color: "#F37626" },
    "NLTK": { icon: FaBrain, color: "#3776AB" }, // Fallback
    "Spacy": { icon: FaRobot, color: "#09A3D5" }, // Fallback
    "YOLO": { icon: FaEye, color: "#00FFFF" }, // Fallback
    "Matplotlib": { icon: FaChartLine, color: "#11557c" }, // Fallback
    "Seaborn": { icon: FaChartLine, color: "#11557c" }, // Fallback
    "Plotly": { icon: SiPlotly, color: "#3F4F75" },

    // Cloud & DevOps
    "AWS": { icon: SiAmazonwebservices, color: "#FF9900" },
    "Azure": { icon: FaMicrosoft, color: "#007FFF" }, // Using Microsoft icon
    "GCP": { icon: SiGooglecloud, color: "#4285F4" },
    "Docker": { icon: SiDocker, color: "#2496ED" },
    "Kubernetes": { icon: SiKubernetes, color: "#326CE5" },
    "Ansible": { icon: SiAnsible, color: "#EE0000" },
    "Terraform": { icon: SiTerraform, color: "#623CE4" },
    "Jenkins": { icon: SiJenkins, color: "#D24939" },
    "Linux": { icon: SiLinux, color: "#FCC624" },
    "Git": { icon: SiGithub, color: "#F05032" },
    "GitHub": { icon: SiGithub, color: "#181717" },
    "Maven": { icon: SiApachemaven, color: "#C71A36" },

    // Big Data
    "Spark": { icon: SiApachespark, color: "#E25A1C" },
    "Kafka": { icon: SiApachekafka, color: "#231F20" },
    "Airflow": { icon: SiApacheairflow, color: "#017CEE" },
    "Snowflake": { icon: SiSnowflake, color: "#29B5E8" },

    // Databases
    "MongoDB": { icon: SiMongodb, color: "#47A248" },
    "PostgreSQL": { icon: SiPostgresql, color: "#336791" },
    "MySQL": { icon: SiMysql, color: "#4479A1" },
    "Hibernate": { icon: SiHibernate, color: "#59666C" },

    // Tools
    "Excel": { icon: FaTable, color: "#217346" }, // Fallback
    "Tableau": { icon: SiTableau, color: "#E97627" },
    "Power BI": { icon: FaMicrosoft, color: "#F2C811" }, // Microsoft icon
    "Streamlit": { icon: SiStreamlit, color: "#FF4B4B" },
    "Splunk": { icon: SiSplunk, color: "#000000" },
    "Figma": { icon: SiFigma, color: "#F24E1E" },
    "Adobe XD": { icon: SiAdobe, color: "#FF26BE" },
    "Sketch": { icon: SiSketch, color: "#F7B500" },
    "Miro": { icon: SiMiro, color: "#050038" },
    "InVision": { icon: SiInvision, color: "#FF3366" },

    // Security & Embedded
    "Kali Linux": { icon: SiKalilinux, color: "#557C94" },
    "Wireshark": { icon: SiWireshark, color: "#1679A7" },
    "Metasploit": { icon: SiMetasploit, color: "#111111" },
    "Nmap": { icon: FaNetworkWired, color: "#111111" },
    "Burp Suite": { icon: SiBurpsuite, color: "#FF6633" },
    "Nessus": { icon: FaLock, color: "#0076D6" },
    "Arduino": { icon: SiArduino, color: "#00979D" },
    "Raspberry Pi": { icon: SiRaspberrypi, color: "#C51A4A" },
    "ARM": { icon: SiIntel, color: "#0091BD" },
    "RTOS": { icon: FaMicrochip, color: "#000000" },

    // Quantum
    "Qiskit": { icon: FaAtom, color: "#6929C4" },
    "IBM Quantum": { icon: FaAtom, color: "#052FAD" }, // Fallback to Atom

    // UI/UX & Design Tools
    "Bootstrap": { icon: SiBootstrap, color: "#7952B3" },
    "Tailwind": { icon: SiTailwindcss, color: "#06B6D4" },
    "Notion": { icon: SiNotion, color: "#000000" },
    "Canva": { icon: SiCanva, color: "#00C4CC" },
    "Behance": { icon: SiBehance, color: "#1769FF" },
    "Hotjar": { icon: SiHotjar, color: "#FD3A5C" },
    "Maze": { icon: FaEye, color: "#000000" }, // Fallback
    "Lookback": { icon: FaEye, color: "#2E5BFF" }, // Fallback
    "Flask": { icon: SiFlask, color: "#000000" },
    "Hugging Face": { icon: FaRobot, color: "#FFD21E" }, // Fallback to Robot
    "LangChain": { icon: FaNetworkWired, color: "#1C3C3C" }, // Fallback to Network
    "OpenAI": { icon: FaBrain, color: "#412991" }, // Fallback to Brain

    // Fallbacks
    "Vite": { icon: SiVite, color: "#646CFF" },
};

export const getCourseSpecificTools = (title: string, category: string = "") => {
    const tools: Record<string, string[]> = {
        "Data Science": ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Keras", "Tableau", "Power BI", "SQL", "Jupyter", "Streamlit"],
        "Data Engineering": ["Python", "SQL", "AWS", "Azure", "GCP", "Spark", "Kafka", "Airflow", "Snowflake", "Docker", "Terraform"],
        "Cloud Consulting": ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Ansible", "Jenkins"],
        "Cloud Computing": ["AWS", "Azure", "GCP", "Docker", "Terraform", "Linux", "Ansible"],
        "Data Analytics": ["Excel", "SQL", "Tableau", "Power BI", "Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
        "DevOps (AWS/Azure)": ["Jenkins", "Docker", "Kubernetes", "Ansible", "Terraform", "GitHub", "Linux"],
        "Cyber Security": ["Kali Linux", "Wireshark", "Metasploit", "Nmap", "Burp Suite", "Splunk", "Nessus", "Python", "Linux"],
        "Python Full Stack": ["Python", "Django", "React", "PostgreSQL", "HTML5", "CSS3", "JavaScript"],
        "Java Full Stack": ["Java", "Spring Boot", "React", "MySQL", "Hibernate", "JavaScript", "HTML5"],
        "MERN Stack": ["MongoDB", "Express", "React", "Node.js", "Redux", "Material UI", "JavaScript"],
        "MEAN Stack": ["MongoDB", "Express", "Angular", "Node.js", "TypeScript", "RxJS", "Angular Material"],
        "QA Automation": ["Selenium", "Java", "Jenkins", "GitHub", "Maven"],
        "Embedded Systems": ["C", "C++", "ARM", "Arduino", "Raspberry Pi", "STM32", "ESP32", "RTOS", "Linux", "I2C", "SPI"],
        "Quantum Computing": ["Qiskit", "IBM Quantum", "Python", "Cirq", "PennyLane", "Quantum Algorithms", "Jupyter", "Linear Algebra"],
        "AI/Machine Learning": [
            "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn",
            "Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "OpenCV",
            "NLTK", "Spacy", "Hugging Face", "LangChain", "OpenAI", "YOLO",
            "Jupyter", "Streamlit", "Docker", "AWS", "Azure", "Git", "GitHub"
        ],
        "UI/UX Design": ["Figma", "Adobe XD", "Sketch", "Miro", "InVision", "Zeplin", "HTML5", "CSS3", "Bootstrap", "Tailwind", "JavaScript", "Maze", "Lookback", "Hotjar", "Git", "GitHub", "Notion", "Canva", "Behance"],
        "UI/UX Design Masterclass": ["Figma", "Adobe XD", "Sketch", "Miro", "InVision", "Zeplin", "HTML5", "CSS3", "Bootstrap", "Tailwind", "JavaScript", "Maze", "Lookback", "Hotjar", "Git", "GitHub", "Notion", "Canva", "Behance"]
    };

    // 1. Direct Lookup
    if (tools[title]) return tools[title];
    if (tools[category]) return tools[category];

    // 2. Smart Partial Matching
    const search = (title + " " + category).toLowerCase();

    if (search.includes("data science")) return tools["Data Science"];
    if (search.includes("data eng")) return tools["Data Engineering"];
    if (search.includes("data analy")) return tools["Data Analytics"];
    if (search.includes("ai") || search.includes("machine") || search.includes("intelligence")) return tools["AI/Machine Learning"];
    if (search.includes("design") || search.includes("ui") || search.includes("ux")) return tools["UI/UX Design"];
    if (search.includes("cyber") || search.includes("security")) return tools["Cyber Security"];
    if (search.includes("cloud")) return tools["Cloud Computing"];
    if (search.includes("devops")) return tools["DevOps (AWS/Azure)"];
    if (search.includes("java")) return tools["Java Full Stack"];
    if (search.includes("python") && (search.includes("stack") || search.includes("web"))) return tools["Python Full Stack"];
    if (search.includes("mern")) return tools["MERN Stack"];
    if (search.includes("mean")) return tools["MEAN Stack"];
    if (search.includes("embedded") || search.includes("iot")) return tools["Embedded Systems"];
    if (search.includes("qa") || search.includes("testing") || search.includes("automation")) return tools["QA Automation"];
    if (search.includes("quantum")) return tools["Quantum Computing"];

    // Generic Full Stack Fallback
    if (search.includes("full stack")) return tools["MERN Stack"];

    // 3. Ultimate Fallback (Basic Web)
    return ["HTML5", "CSS3", "JavaScript", "React", "Git"];
};

export const getCourseSpecificLogos = (title: string, category: string = ""): Logo[] => {
    const tools = getCourseSpecificTools(title, category);
    return tools.map((tool, index) => {
        const toolData = ToolIcons[tool] || { icon: SiJavascript, color: "#666" }; // Fallback
        const Icon = toolData.icon;
        return {
            name: tool,
            id: index,
            // Create a wrapper component that applies the color using style
            img: (props: React.ComponentProps<'svg'>) => <Icon {...props} style={{ ...props.style, color: toolData.color }} />
        };
    });
};

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
            learningText: "Daily 90 mins â€“ 60 mins Class + 30 mins Practice", projectText: "Hands-On Project with Certification",
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

export const getCourseOutcomes = (category: string) => {
    const outcomes: Record<string, string[]> = {
        "Data Science": [
            "Customer Churn Prediction - Logistic Regression / Random Forest",
            "Stock Market Price Prediction - Time Series + LSTM",
            "Sentiment Analysis on Twitter Data - NLP + Python",
            "Sales Forecasting Dashboard - Power BI + Regression",
            "Movie Recommendation System - Collaborative Filtering + ML",
            "Disease Prediction System - Classification + Streamlit Deployment",
            "E-Commerce Product Analytics Dashboard - Pandas + Plotly + Tableau"
        ],
        "Data Analytics": [
            "Sales Performance Dashboard: Power BI / Tableau + Excel + SQL.",
            "Customer Churn Analysis: Python + ML + Visualization.",
            "Financial Data Analytics: Budget vs actual comparison & forecasting.",
            "HR Analytics: Employee attrition & performance analysis.",
            "Marketing Campaign Effectiveness: ROI impact using Power BI."
        ],
        "DevOps": [
            "Multi-Cloud CI/CD Pipeline: Jenkins + Docker + Terraform + AWS + Azure.",
            "Kubernetes Microservices: Deploy Node.js/Flask apps on EKS/GKE.",
            "Infrastructure Automation: Terraform + Ansible for EC2 clusters.",
            "E-Commerce Pipeline: GitHub â†’ Jenkins â†’ Docker â†’ AWS â†’ K8s.",
            "Cloud-Native Monitoring Dashboard: Multi-cloud metrics with Grafana."
        ],
        "AI/Machine Learning": [
            "AI Chatbot for Customer Support: NLP + Flask + OpenAI API.",
            "Real-Time Object Detection: OpenCV + YOLO.",
            "Credit Card Fraud Detection: Logistic Regression + Random Forest.",
            "AI-based Resume Screener: NLP + Machine Learning.",
            "Stock Price Prediction: LSTM + Time Series.",
            "Emotion Detection: CNN + Transfer Learning.",
            "Medical Image Classification: TensorFlow + Streamlit."
        ],
        "UI/UX Design": [
            "E-Learning Platform Redesign: Focus on user flow optimization, course browsing, and accessibility.",
            "Food Delivery App Interface: Build wireframes to prototypes with user onboarding and cart design.",
            "Hospital Management Portal UX: Improve appointment booking and patient navigation.",
            "E-Commerce Store UI/UX: End-to-end responsive web store with checkout experience.",
            "Travel Planning Mobile App: Focus on visual hierarchy, usability, and journey design."
        ],
        "UI/UX Design Masterclass": [
            "E-Learning Platform Redesign: Focus on user flow optimization, course browsing, and accessibility.",
            "Food Delivery App Interface: Build wireframes to prototypes with user onboarding and cart design.",
            "Hospital Management Portal UX: Improve appointment booking and patient navigation.",
            "E-Commerce Store UI/UX: End-to-end responsive web store with checkout experience.",
            "Travel Planning Mobile App: Focus on visual hierarchy, usability, and journey design."
        ],
        "Quantum Computing": [
            "Quantum Cryptography Simulation: BB84 Protocol implementation.",
            "Quantum Machine Learning: Handwritten Digit Recognition.",
            "Groverâ€™s Algorithm: Search Engine Demo.",
            "Quantum Chemistry Simulation: Using Qiskit Nature.",
            "Quantum Finance: Portfolio Optimization Model.",
            "Quantum Cloud Integration: Using AWS Braket."
        ],
        "Python Full Stack": [
            "Online Course Management System: Django + React + MySQL (Admin/Student Dashboards).",
            "E-Commerce Platform: Flask + React + REST API (Cart, Payment).",
            "Hospital Appointment App: Django REST + React (Scheduling, Role-based Access).",
            "Expense Tracker App: Flask + SQLite (Analytics with Chart.js).",
            "Job Portal System: Django + MySQL (Recruiter/Candidate Dashboards)."
        ],
        "Data Engineering": [
            "End-to-End Data Pipeline: AWS S3, Glue, Redshift, Power BI.",
            "Real-Time Data Streaming: Kafka + Spark (Twitter/IoT data).",
            "Data Warehouse: Build on Snowflake / BigQuery.",
            "Multi-Cloud Data Lake: AWS S3 + Azure Data Lake + GCP BigQuery.",
            "Sales Analytics Dashboard: Python ETL + Airflow + PostgreSQL + Tableau."
        ],
        "Cloud Consulting": [
            "Multi-Cloud Disaster Recovery Solution: Strategies for high availability.",
            "Cloud Cost Optimization Dashboard: Monitoring and reporting tools.",
            "Hybrid E-Commerce Platform: Integrated AWS + Azure + GCP architecture.",
            "AI-Powered Multi-Cloud Monitoring System: Unified observability."
        ],
        "Cyber Security": [
            "Vulnerability Assessment & Penetration Test Report: Simulated enterprise network.",
            "Web Application Security Audit: OWASP framework.",
            "Intrusion Detection System (IDS): Python + open-source tools.",
            "Incident Response Plan: Ransomware attack scenario.",
            "Phishing Simulation & Awareness Dashboard.",
            "Log Analysis & Threat Intelligence Dashboard: ELK Stack."
        ],
        "MERN Stack": [
            "E-Learning Platform: MERN + JWT + MongoDB + Admin Dashboard.",
            "E-Commerce Website: Product Catalog + Cart + Payment Gateway.",
            "Job Portal System: Recruiter & Candidate Modules.",
            "Chat Application: Real-time Messaging using Socket.io.",
            "Expense Tracker: Graph Analytics using Chart.js.",
            "College Event Management System: Role-based Access & Notifications."
        ],
        "MEAN Stack": [
            "E-Commerce Web App: Angular + Express + MongoDB (Cart, Orders, Payment).",
            "Job Portal Application: Admin & User Roles, Resume Upload, Filters.",
            "Hospital Management System: Patient & Doctor modules, Appointments.",
            "Learning Management System (LMS): Courses, Enrollments, Tracking.",
            "Chat Application: Real-time Communication using Socket.io."
        ],
        "Java Full Stack": [
            "Online Learning Management System: Spring Boot + React + MySQL.",
            "E-Commerce Web Application: Spring Boot + React + REST API.",
            "Hospital Appointment Booking System: Role-based auth + Email Notifications.",
            "Expense Tracker Web App: Java + Spring Boot + MongoDB + Analytics.",
            "Job Portal System: Recruiter & Candidate Dashboards with Spring Boot."
        ],
        "Embedded Systems": [
            "Smart Home Automation System: Arduino + IoT + Cloud Dashboard.",
            "IoT-Based Weather Monitoring Station: ESP32 + DHT11 + Firebase Integration.",
            "Obstacle Avoidance Robot: Ultrasonic Sensors + Motor Control + Arduino.",
            "Smart Energy Meter: Raspberry Pi + Current Sensor + Cloud Logging.",
            "Industrial Safety Monitoring System: Embedded C + Sensor Network + Buzzer Alerts.",
            "Health Monitoring Wearable: Biosensors + Bluetooth LE."
        ]
    };
    const defaultOutcomes = [
        "Practical Mastery: Gain hands-on experience through 20+ live projects.",
        "Industry Standards: Learn best practices used by tech leaders.",
        "Problem Solving: Develop a mindset to tackle complex challenges.",
        "Job Readiness: Clear interviews with our expert training."
    ];
    return outcomes[category] || defaultOutcomes;
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

export const getCourseCustomContent = (title: string, category: string = "") => {
    const search = (title + " " + category).toLowerCase().trim();

    // Data Analytics specific introduction
    if (search.includes("data analytics") || search.includes("data analy")) {
        return [
            {
                type: "about_us",
                title: "ABOUT",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "data_analytics_introduction",
                title: "DATA ANALYTICS",
                content: {
                    heading: "Data Analytics",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Data Analytics</span> is the process of collecting, analyzing, Visualizing and interpreting data to discover useful insights, patterns, and trends. It helps organizations make smart, data-driven decisions instead of relying on guesswork.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                In today's digital world, every business generates a large amount of data. By using data analytics, companies can improve efficiency, predict future trends, understand customer behavior, and increase profitability.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Cyber Security specific introduction
    if (search.includes("cyber") || search.includes("security")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },

            {
                type: "cyber_security_introduction",
                title: "CYBER SECURITY",
                content: {
                    heading: "Cyber Security",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Cyber Security</span> is the practice of protecting computers, networks, servers, and data from unauthorized access, attacks, or damage. In today's digital world, almost everything – from banking and shopping to communication – happens online. This makes our personal and professional information more vulnerable to hackers and cyber threats.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                Cyber Security helps prevent data breaches, identity theft, and financial loss by using advanced tools, encryption, and monitoring systems. It ensures that information remains private, systems stay secure, and digital operations run smoothly and safely.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Python Full Stack specific introduction
    if (search.includes("python") && search.includes("full stack")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "python_fullstack_introduction",
                title: "PYTHON FULL STACK",
                content: {
                    heading: "Python Full Stack",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Python Full Stack</span> Development refers to building complete web applications using Python for both frontend and backend development. It covers everything — from designing user interfaces to managing databases and server-side logic.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                Python is widely used because it’s easy to learn, powerful, and supports many frameworks like Django and Flask that make web development faster and more efficient.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need Python Full Stack to create dynamic, user-friendly, and scalable web applications — all using one language from start to finish.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Data Science specific introduction
    if (search.includes("data science")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "data_science_introduction",
                title: "DATA SCIENCE",
                content: {
                    heading: "Data Science",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Data Science</span> is the field of analyzing large amounts of data to uncover patterns, insights, and trends that help in decision-making. A Data Science Professional uses tools like Python, R, SQL, and Machine Learning to process and interpret data effectively.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need Data Science because it helps businesses and organizations make smarter, data-driven decisions, predict future outcomes, and solve complex real-world problems.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // DevOps Multi-Cloud Engineering specific introduction
    if (search.includes("devops")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "devops_multicloud_introduction",
                title: "DEVOPS MULTI-CLOUD ENGINEERING",
                content: {
                    heading: "DevOps & Multi-Cloud Engineering",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">DevOps</span> is a combination of Development and Operations practices that help teams build, test, and deploy software faster and more efficiently. It focuses on automation, continuous integration, and collaboration between developers and IT teams to deliver high-quality applications quickly.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                <span className="font-bold text-blue-900">Multi-Cloud Engineering</span> involves using multiple cloud platforms (like <span className="font-bold">AWS, Azure, and Google Cloud</span>) together to run applications. It provides flexibility, reduces dependency on one provider, and improves performance and reliability.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // QA Automation specific introduction
    if (search.includes("qa") || search.includes("testing") || search.includes("automation")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "qa_automation_introduction",
                title: "QA AUTOMATION",
                content: {
                    heading: "QA Automation & SDET",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">QA Automation</span> involves using specialized tools and scripts to control the execution of tests and compare actual outcomes with predicted outcomes. It is essential for modern software development to ensure speed, accuracy, and reliability.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                As an <span className="font-bold text-blue-900">SDET (Software Development Engineer in Test)</span>, you don't just find bugs—you write code to prevent them. You will master tools like <span className="font-bold">Selenium, Java, and Jenkins</span> to build robust testing frameworks that integrate seamlessly with DevOps pipelines.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Embedded Systems specific introduction
    if (search.includes("embedded")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "embedded_introduction",
                title: "EMBEDDED SYSTEMS",
                content: {
                    heading: "Embedded Systems",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Embedded Systems</span> are specialized computer systems designed to perform dedicated functions within a larger system. They combine hardware and software to control devices such as washing machines, cars, medical equipment, mobile phones, and many industrial machines. These systems are fast, reliable, and efficient because they are built for specific tasks rather than general computing.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need <span className="font-bold text-blue-900">Embedded Systems</span> to automate processes, improve performance, reduce human effort, and make devices smarter and more efficient.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Multi-Cloud Engineering specific introduction
    if (search.includes("multi") && search.includes("cloud") && search.includes("engineering")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "multicloud_engineering_introduction",
                title: "MULTI-CLOUD ENGINEERING",
                content: {
                    heading: "Data Engineering & Multi-Cloud Development",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Data Engineering</span> is the process of designing, building, and managing systems that collect, store, and analyze large amounts of data efficiently. It focuses on creating data pipelines and architectures that make data easily accessible for analysis and decision-making.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                <span className="font-bold text-blue-900">Multi-Cloud Development</span> involves using multiple cloud platforms – such as <span className="font-bold">AWS, Azure, and Google Cloud</span> – to deploy and manage applications. This approach offers flexibility, reduces downtime, and prevents dependency on a single cloud provider.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Quantum Computing specific introduction
    if (search.includes("quantum")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "quantum_introduction",
                title: "QUANTUM COMPUTING",
                content: {
                    heading: "Quantum Computing",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Quantum Computing</span> is an advanced technology that uses the principles of quantum physics to process information. Unlike traditional computers that use bits (0s and 1s), quantum computers use <span className="font-bold">qubits</span>, which can represent both 0 and 1 at the same time — allowing them to perform complex calculations much faster.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need <span className="font-bold text-blue-900">Quantum Computing</span> to solve problems that are too difficult for classical computers, such as drug discovery, climate modeling, cryptography, and artificial intelligence optimization.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Multi-Cloud Consultant specific introduction
    if (search.includes("multi") && search.includes("cloud") && search.includes("consultant")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "multicloud_introduction",
                title: "MULTI-CLOUD CONSULTANT",
                content: {
                    heading: "Multi-Cloud Consultant Professional",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                A <span className="font-bold text-blue-900">Multi-Cloud Consultant Professional</span> is an expert who helps organizations design, manage, and optimize their systems across multiple cloud platforms like <span className="font-bold">AWS, Microsoft Azure, and Google Cloud</span>. They ensure that applications run efficiently, securely, and cost-effectively across all cloud environments.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need <span className="font-bold text-blue-900">Multi-Cloud Consultants</span> because most businesses today use more than one cloud service. Managing multiple platforms requires specialized knowledge to improve performance, security, and scalability.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // MERN Stack specific introduction
    if (search.includes("mern")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "mern_introduction",
                title: "MERN STACK",
                content: {
                    heading: "MERN Full Stack",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">MERN Full Stack</span> is a popular web development technology stack used to build modern, dynamic web applications. It stands for <span className="font-bold">MongoDB, Express.js, React.js, and Node.js</span>, where each technology handles a key part of development — database, server, frontend, and backend.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need MERN Stack because it uses a single language, JavaScript, for the entire development process, making it faster, efficient, and easier to maintain. It allows developers to create powerful, scalable, and high-performance web applications.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // MEAN Stack specific introduction
    if (search.includes("mean")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "mean_stack_introduction",
                title: "MEAN STACK",
                content: {
                    title: "MEAN STACK",
                    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop", // Tech/Code image
                    description: (
                        <>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                <strong className="text-slate-900 font-bold">MEAN STACK</strong> is a collection of JavaScript-based technologies used to build dynamic and full-featured web applications. It stands for <strong className="text-slate-900 font-bold">MongoDB, Express.js, Angular, and Node.js</strong> – where each technology handles a part of the development process (database, server, frontend, and backend).
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We need MEAN Stack because it allows developers to use one language <strong className="text-slate-900 font-bold">JavaScript</strong> for the entire development process, making it faster, more efficient, and easier to maintain.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // AI & ML Introduction
    if (search.includes("artificial") || (search.includes("machine") && search.includes("learning"))) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "ai_ml_introduction",
                title: "Artificial Intelligence (AI) & Machine Learning",
                content: {
                    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80", // AI Robot placeholder
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed mb-4 text-base sm:text-lg">
                                <strong className="text-[#0075CF] font-black">Artificial Intelligence (AI)</strong> is the technology that enables machines to think, learn, and make decisions like humans. <strong className="text-[#0075CF] font-black">Machine Learning (ML)</strong> is a branch of AI that allows computers to learn from data and improve their performance automatically without being explicitly programmed.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need <strong className="text-[#0075CF] font-black">AI</strong> and <strong className="text-[#0075CF] font-black">ML</strong> to make systems smarter, automate repetitive tasks, predict outcomes, and help in areas like healthcare, finance, education, and robotics.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Java Full Stack Introduction (Added)
    if (search.includes("java")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "java_fullstack_introduction",
                title: "Java Full Stack",
                content: {
                    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80", // Coding laptop placeholder
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed mb-4 text-base sm:text-lg">
                                <strong className="text-[#E76F00] font-black">Java Full Stack</strong> Development refers to building complete web applications using Java for backend development and technologies like HTML, CSS, JavaScript, and React/Angular for the frontend. It covers every layer of development from user interface to server and database management.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need Java Full Stack because it allows developers to work on both frontend and backend using a single programming language, ensuring better integration, faster development, and easier maintenance.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    if (search.includes("ui") && search.includes("ux")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "ui_ux_highlight",
                title: "UI/UX DESIGN",
                content: {
                    badge: "UI",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">UI (User Interface)</span> and{' '}
                                <span className="font-bold text-blue-900">UX (User Experience)</span>{' '}
                                Design focus on creating digital products that are both visually appealing and easy to use. UI deals with the look and layout of a website or app, while UX focuses on the overall experience a user has while interacting with it.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need UI/UX Design & Development to make applications more user-friendly, engaging, and efficient, ensuring that users enjoy a smooth and satisfying digital experience.
                            </p>
                        </>
                    ),
                    keyPoints: [
                        {
                            title: "Visual Appeal",
                            sub: "Creating aesthetically pleasing interfaces",
                            iconColor: "bg-blue-600",
                            bgGradient: "from-blue-50 to-blue-100",
                            borderColor: "border-blue-200"
                        },
                        {
                            title: "User Experience",
                            sub: "Ensuring smooth and intuitive interactions",
                            iconColor: "bg-purple-600",
                            bgGradient: "from-purple-50 to-purple-100",
                            borderColor: "border-purple-200"
                        },
                        {
                            title: "Engagement",
                            sub: "Keeping users interested and satisfied",
                            iconColor: "bg-green-600",
                            bgGradient: "from-green-50 to-green-100",
                            borderColor: "border-green-200"
                        },
                        {
                            title: "Efficiency",
                            sub: "Streamlining user workflows and tasks",
                            iconColor: "bg-orange-600",
                            bgGradient: "from-orange-50 to-orange-100",
                            borderColor: "border-orange-200"
                        }
                    ]
                }
            }
        ];
    }

    // Default "About" section for all other courses (COMMON SECTION)
    return [
        {
            type: "about_us",
            title: "ABOUT US",
            content: {
                heading: "Learn from Industry Professionals with 10+ Years of Experience",
                text: "At Academy of Tech Masters, we believe that the right skills can transform careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship."
            }
        }
    ];
};

export const getCourseToolsAndTechnologies = (title: string, category: string = "") => {
    const search = (title + " " + category).toLowerCase().trim();

    // UI/UX Design specific tools table
    if (search.includes("ui") && search.includes("ux")) {
        return [
            { category: "Design & Prototyping", tools: "Figma, Adobe XD, Sketch" },
            { category: "Collaboration", tools: "Miro, Figma, InVision, Zeplin" },
            { category: "Frontend Basics", tools: "HTML5, CSS3, Bootstrap, Tailwind, JS" },
            { category: "Testing & Research", tools: "Maze, Lookback, Hotjar" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "Asset Management", tools: "Notion, Canva, Behance" }
        ];
    }

    // Data Analytics
    if (search.includes("data analytics") || search.includes("data analy")) {
        return [
            { category: "Programming", tools: "Python (NumPy, Pandas, Matplotlib, Seaborn)" },
            { category: "Databases", tools: "MSSQL, PostgreSQL" },
            { category: "BI & Visualization", tools: "Power BI, Tableau" },
            { category: "Office Tools", tools: "MS Excel, Google Sheets" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "Reporting", tools: "Jupyter, Power BI Service, Streamlit" },
            { category: "Machine Learning", tools: "Scikit-learn, Stats Models" },
            { category: "APIs & Integration", tools: "JSON, REST API" },
            { category: "Deployment", tools: "Heroku, Render, Streamlit Cloud" }
        ];
    }

    // Data Science
    if (search.includes("data science")) {
        return [
            { category: "Programming", tools: "Python 3.x" },
            { category: "Libraries", tools: "NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn" },
            { category: "Databases", tools: "MySQL, MongoDB, PostgreSQL" },
            { category: "Visualization", tools: "Tableau, Power BI, Plotly" },
            { category: "ML/DL Frameworks", tools: "TensorFlow, Keras, PyTorch" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "Deployment", tools: "Streamlit, Flask, AWS, Docker" },
            { category: "Others", tools: "Jupyter Notebook, Google Colab, Excel, REST APIs" }
        ];
    }

    // AI/Machine Learning
    if (search.includes("ai") || search.includes("machine learning")) {
        return [
            { category: "Programming", tools: "Python, TensorFlow, PyTorch" },
            { category: "Deep Learning", tools: "Keras, OpenCV, YOLO" },
            { category: "NLP", tools: "NLTK, Spacy, Hugging Face, LangChain" },
            { category: "Data Processing", tools: "Pandas, NumPy, Matplotlib" },
            { category: "Cloud & MLOps", tools: "AWS, Azure, Docker, Git" },
            { category: "Deployment", tools: "Flask, Streamlit, FastAPI" }
        ];
    }

    // DevOps Multi-Cloud Engineering specific tools
    if (search.includes("devops") && (search.includes("multi") || search.includes("cloud"))) {
        return [
            { category: "DevOps Tools", tools: "Jenkins, Ansible, Terraform, Docker, Kubernetes" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "Cloud Platforms", tools: "AWS, Azure, GCP" },
            { category: "Monitoring", tools: "Prometheus, Grafana, ELK Stack" },
            { category: "Languages", tools: "Python, YAML, Bash" },
            { category: "CI/CD", tools: "GitHub Actions, Jenkins Pipelines" },
            { category: "IaC & Automation", tools: "Terraform, Ansible" },
            { category: "Containers", tools: "Docker, Docker Compose, Kubernetes" },
            { category: "Security", tools: "IAM, SSL, Secrets Management" }
        ];
    }

    // Embedded Systems specific tools
    if (search.includes("embedded")) {
        return [
            { category: "Programming Languages", tools: "C, C++, Python" },
            { category: "Microcontrollers", tools: "8051, PIC, AVR, ARM Cortex, STM32, ESP32" },
            { category: "Boards", tools: "Arduino, Raspberry Pi, NodeMCU" },
            { category: "IDEs", tools: "Keil µVision, MPLAB X, Arduino IDE, STM32CubeIDE" },
            { category: "Communication", tools: "UART, SPI, I2C, Bluetooth, Wi-Fi" },
            { category: "IoT Platforms", tools: "Blynk, Thing speak, Firebase, MQTT" },
            { category: "Operating Systems", tools: "FreeRTOS, Embedded Linux" },
            { category: "Design Tools", tools: "Proteus, KiCad, Eagle, Fritzing" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "Debugging Tools", tools: "JTAG, Serial Monitor, Logic Analyzer" }
        ];
    }

    // DevOps Tools (Added)
    if (search.includes("devops")) {
        return [
            { category: "DevOps Tools", tools: "Jenkins, Ansible, Terraform, Docker, Kubernetes" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "Cloud Platforms", tools: "AWS, Azure, GCP" },
            { category: "Monitoring", tools: "Prometheus, Grafana, ELK Stack" },
            { category: "Languages", tools: "Python, YAML, Bash" },
            { category: "CI/CD", tools: "GitHub Actions, Jenkins Pipelines" },
            { category: "IaC & Automation", tools: "Terraform, Ansible" },
            { category: "Containers", tools: "Docker, Docker Compose, Kubernetes" },
            { category: "Security", tools: "IAM, SSL, Secrets Management" }
        ];
    }

    // Multi-Cloud Engineering specific tools
    if (search.includes("multi") && search.includes("cloud") && search.includes("engineering")) {
        return [
            { category: "Programming", tools: "Python 3.x, SQL" },
            { category: "ETL & Orchestration", tools: "Apache Airflow, Luigi" },
            { category: "Big Data", tools: "Hadoop, Spark, Hive, Kafka" },
            { category: "Databases", tools: "MySQL, PostgreSQL, MongoDB, Cassandra" },
            { category: "Cloud Platforms", tools: "AWS, Azure, GCP" },
            { category: "Data Warehousing", tools: "Snowflake, Redshift, BigQuery" },
            { category: "DevOps", tools: "Git, Docker, Terraform, Kubernetes" },
            { category: "Visualization", tools: "Tableau, Power BI, Streamlit" },
            { category: "Version Control", tools: "GitHub" }
        ];
    }

    // QA Automation specific tools
    if (search.includes("qa") || search.includes("testing") || search.includes("automation")) {
        return [
            { category: "Automation Tools", tools: "Selenium WebDriver, Cypress, Playwright" },
            { category: "Programming", tools: "Java, Python" },
            { category: "API Testing", tools: "Postman, REST Assured, SOAP UI" },
            { category: "Frameworks", tools: "TestNG, JUnit, Cucumber (BDD)" },
            { category: "CI/CD & DevOps", tools: "Jenkins, Docker, Git, GitHub" },
            { category: "Build Tools", tools: "Maven, Gradle" },
            { category: "Test Management", tools: "JIRA, Zephyr, TestRail" }
        ];
    }

    // Quantum Computing specific tools
    if (search.includes("quantum")) {
        return [
            { category: "Programming Language", tools: "Python (NumPy, Qiskit, Cirq, PennyLane)" },
            { category: "Quantum SDKs", tools: "IBM Qiskit, Google Cirq, Xanadu PennyLane" },
            { category: "Cloud Platforms", tools: "IBM Quantum Experience, AWS Braket, Azure Quantum" },
            { category: "Visualization", tools: "Qiskit Visualization, Matplotlib, Bloch Sphere Tools" },
            { category: "Simulation", tools: "Aer Simulator, QASM Simulator" },
            { category: "DevOps & Version Control", tools: "Git, GitHub, Docker" },
            { category: "Others", tools: "Jupyter Notebook, VS Code" }
        ];
    }

    // Multi-Cloud Consultant specific tools
    if (search.includes("multi") && search.includes("cloud") && search.includes("consultant")) {
        return [
            { category: "Cloud Platforms", tools: "AWS, Azure, GCP" },
            { category: "Automation & IaC", tools: "Terraform, CloudFormation, Ansible" },
            { category: "Containers", tools: "Docker, Kubernetes" },
            { category: "Databases", tools: "RDS, Azure SQL, Cloud SQL" },
            { category: "DevOps", tools: "Jenkins, GitHub Actions, Azure DevOps" },
            { category: "Monitoring", tools: "Grafana, Prometheus, CloudWatch, Stackdriver" },
            { category: "Security", tools: "IAM, Key Vault, KMS, Cloud Defender" },
            { category: "Networking", tools: "VPC, Subnets, Load Balancer, VPN" },
            { category: "Analytics", tools: "BigQuery, Power BI, AWS QuickSight" }
        ];
    }

    // MERN Stack specific tools
    if (search.includes("mern")) {
        return [
            { category: "Frontend", tools: "HTML5, CSS3, Bootstrap, React.js, JavaScript (ES6+)" },
            { category: "Backend", tools: "Node.js, Express.js" },
            { category: "Database", tools: "MongoDB, Mongoose" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "Deployment", tools: "Vercel, Render, Heroku, AWS, MongoDB Atlas" },
            { category: "Others", tools: "JWT, REST APIs, Postman, Redux, Material UI" }
        ];
    }

    // MEAN Stack specific tools
    if (search.includes("mean")) {
        return [
            { category: "Frontend", tools: "HTML5, CSS3, Bootstrap, Angular, TypeScript" },
            { category: "Backend", tools: "Node.js, Express.js" },
            { category: "Database", tools: "MongoDB, Mongoose" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "Deployment", tools: "Docker, AWS, Render, Heroku, Netlify, MongoDB Atlas" },
            { category: "Testing", tools: "Jasmine, Karma, Jest, Mocha" },
            { category: "Others", tools: "REST APIs, JWT, Swagger, Postman, Socket.io" }
        ];
    }

    // AI & ML Tools
    if (search.includes("artificial") || (search.includes("machine") && search.includes("learning"))) {
        return [
            { category: "Programming", tools: "Python 3.x" },
            { category: "Data Analysis", tools: "Pandas, NumPy" },
            { category: "Visualization", tools: "Matplotlib, Seaborn, Plotly" },
            { category: "Machine Learning", tools: "Scikit-Learn" },
            { category: "NLP", tools: "NLTK, spaCy, Hugging Face" },
            { category: "Computer Vision", tools: "OpenCV, YOLO" },
            { category: "Deployment", tools: "Flask, Django, Docker, Streamlit" },
            { category: "Databases", tools: "MySQL, MongoDB" },
            { category: "Cloud", tools: "AWS, Azure, GCP" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "Certifications", tools: "Azure AI Engineer, TensorFlow Developer, AWS ML Specialist" }
        ];
    }

    // Java Full Stack Tools (Added)
    if (search.includes("java")) {
        return [
            { category: "Programming Language", tools: "Java SE 8+, Core & Advanced Java" },
            { category: "Frontend", tools: "HTML5, CSS3, Bootstrap, JavaScript (ES6+), React.js" },
            { category: "Backend", tools: "Spring Boot, Spring MVC, Hibernate, Servlets, JSP" },
            { category: "Databases", tools: "MySQL, PostgreSQL, MongoDB" },
            { category: "Build Tools", tools: "Maven, Gradle" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "Deployment", tools: "Docker, AWS, Render, Heroku" },
            { category: "Testing", tools: "JUnit 5, Mockito" },
            { category: "Others", tools: "REST APIs, JWT, Swagger/OpenAPI" }
        ];
    }

    // Full Stack (MEAN/Java/Python)
    if (search.includes("full stack")) {
        return [
            { category: "Frontend", tools: "React, Redux, Material UI, HTML5, CSS3" },
            { category: "Backend", tools: "Node.js, Express, REST APIs" },
            { category: "Database", tools: "MongoDB, PostgreSQL, MySQL" },
            { category: "DevOps", tools: "Docker, Git, GitHub, CI/CD" },
            { category: "Testing", tools: "Jest, Mocha, Postman" },
            { category: "Cloud", tools: "AWS, Heroku, Vercel" }
        ];
    }

    // Cyber Security
    if (search.includes("cyber") || search.includes("security")) {
        return [
            { category: "Networking", tools: "Wireshark, Nmap, Angry IP Scanner" },
            { category: "Penetration Testing", tools: "Metasploit, Burp Suite, ZAP Proxy, Hydra" },
            { category: "Forensics", tools: "Autopsy, Volatility, FTK Imager" },
            { category: "Cryptography", tools: "OpenSSL, Hashcat" },
            { category: "Cloud & SIEM", tools: "Splunk, ELK Stack, Wazuh, AWS Security" },
            { category: "Automation", tools: "Python, Bash Scripting" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "OS Platforms", tools: "Kali Linux, Parrot OS, Ubuntu Server, Windows 10/11" },
            { category: "Compliance Tools", tools: "NIST CSF, ISO 27001 templates, GDPR toolkit" }
        ];
    }

    // Python Full Stack
    if (search.includes("python") && search.includes("full stack")) {
        return [
            { category: "Programming", tools: "Python 3.x" },
            { category: "Frontend", tools: "HTML5, CSS3, Bootstrap, JavaScript (ES6+), React.js" },
            { category: "Backend", tools: "Flask, Django, Django REST Framework" },
            { category: "Database", tools: "MySQL, PostgreSQL, SQLite, MongoDB" },
            { category: "Version Control", tools: "Git, GitHub" },
            { category: "Deployment", tools: "Docker, AWS, Render, Heroku, PythonAnywhere" },
            { category: "Testing", tools: "PyTest, Unittest, Postman" },
            { category: "DevOps", tools: "GitHub Actions, Jenkins, Docker Compose" },
            { category: "Others", tools: "JWT, REST APIs, Swagger/OpenAPI, JSON" }
        ];
    }

    // Default fallback
    return [
        { category: "Programming", tools: "Python, JavaScript, Java" },
        { category: "Web Development", tools: "HTML5, CSS3, React, Node.js" },
        { category: "Database", tools: "MySQL, MongoDB, PostgreSQL" },
        { category: "Version Control", tools: "Git, GitHub" },
        { category: "Cloud & DevOps", tools: "AWS, Docker, Jenkins" },
        { category: "Tools", tools: "VS Code, Postman, Jira" }
    ];
};

export const getCourseObjectives = (title: string, category: string = "") => {
    const search = (title + " " + category).toLowerCase().trim();

    // UI/UX Design objectives
    if (search.includes("ui") && search.includes("ux")) {
        return [
            "Master user interface (UI) and user experience (UX) design fundamentals.",
            "Design wireframes, mockups, and prototypes using industry-standard tools.",
            "Understand user research, persona creation, usability testing, and accessibility.",
            "Develop interactive front-end designs using HTML, CSS, and JavaScript.",
            "Build responsive and user-friendly web & mobile interfaces.",
            "Become industry-ready for roles in UI/UX Design, Product Design, and Front-End Development."
        ];
    }

    // Data Analytics objectives
    if (search.includes("data analytics") || search.includes("data analy")) {
        return [
            "Gain a deep understanding of data analytics fundamentals – from data collection to visualization.",
            "Master tools like Excel, SQL, Python, Power BI, and Tableau.",
            "Develop analytical, problem-solving, and business intelligence skills.",
            "Perform statistical analysis, create dashboards, and build predictive models.",
            "Be industry-ready for data-centric roles in analytics, business intelligence, and data science."
        ];
    }

    // Data Science objectives
    if (search.includes("data science")) {
        return [
            "Gain a solid foundation in Python programming for data science and analytics.",
            "Learn how to collect, clean, visualize, and analyze real-world data using modern tools.",
            "Build machine learning and deep learning models for predictive and intelligent systems.",
            "Work with data visualization tools, cloud-based analytics, and AI frameworks.",
            "Become job-ready for roles in data analysis, data science, and AI development."
        ];
    }

    // AI/Machine Learning objectives
    if (search.includes("ai") || search.includes("machine learning")) {
        return [
            "Understand deep learning architectures and neural networks.",
            "Build NLP applications for text analysis and chatbots.",
            "Implement computer vision projects using OpenCV and YOLO.",
            "Deploy AI models using Flask, Streamlit, and cloud platforms.",
            "Work with cutting-edge frameworks: TensorFlow, PyTorch, Keras.",
            "Prepare for roles in AI Engineering, ML Ops, and Research."
        ];
    }

    // DevOps Multi-Cloud Engineering specific objectives
    if (search.includes("devops")) {
        return [
            "Understand the complete DevOps lifecycle – from development to deployment and monitoring.",
            "Learn automation tools like Jenkins, Ansible, Terraform, and Docker for continuous integration and delivery.",
            "Gain hands-on expertise in cloud platforms – AWS, Azure, and Google Cloud (Multi-Cloud).",
            "Implement Infrastructure as Code (IaC), container orchestration, and scalable deployment pipelines.",
            "Be ready for roles in DevOps, Cloud Engineering, Site Reliability Engineering (SRE), and Automation."
        ];
    }

    // QA Automation objectives
    if (search.includes("qa") || search.includes("testing") || search.includes("automation")) {
        return [
            "Master the fundamentals of Manual and Automation Testing.",
            "Design and implement robust test automation frameworks (Data-Driven, Keyword-Driven, Hybrid).",
            "Perform comprehensive API testing using Postman and REST Assured.",
            "Integrate automated tests into CI/CD pipelines using Jenkins.",
            "Gain proficiency in Java/Python programming for test scripting.",
            "Become job-ready for QA Automation Engineer and SDET roles."
        ];
    }

    // Embedded Systems specific objectives
    if (search.includes("embedded")) {
        return [
            "Understand the architecture and working principles of embedded systems.",
            "Learn microcontroller programming (Arduino, ARM, PIC, Raspberry Pi).",
            "Interface sensors, actuators, and communication modules.",
            "Develop real-time embedded applications using C/C++ and Python.",
            "Gain exposure to IoT, real-time operating systems (RTOS), and hardware debugging.",
            "Be industry-ready for embedded hardware, IoT, and firmware development roles"
        ];
    }

    // Multi-Cloud Engineering specific objectives
    if (search.includes("multi") && search.includes("cloud") && search.includes("engineering")) {
        return [
            "Master the fundamentals of data engineering, data pipelines, and big data systems.",
            "Learn to design, build, and optimize data workflows using Python, SQL, and Apache tools.",
            "Gain hands-on experience with data lakes, warehouses, and ETL/ELT pipelines.",
            "Work with cloud platforms (AWS, Azure, GCP) for scalable data solutions.",
            "Learn containerization, CI/CD, orchestration, and automation for modern data engineering workflows.",
            "Prepare for real-world roles in data engineering, cloud data management, and analytics."
        ];
    }

    // Quantum Computing specific objectives
    if (search.includes("quantum")) {
        return [
            "Understand the fundamental principles of Quantum Mechanics as applied to computing.",
            "Develop quantum algorithms using leading quantum SDKs (Qiskit, Cirq, and PennyLane).",
            "Build, simulate, and visualize quantum circuits and gates.",
            "Work on real quantum processors via IBM Quantum Experience and other cloud simulators.",
            "Apply quantum computing to cryptography, optimization, AI, and data science.",
            "Gain a recognized Quantum Computing Certification validating real-world skill and readiness."
        ];
    }

    // Multi-Cloud Consultant specific objectives
    if (search.includes("multi") && search.includes("cloud") && search.includes("consultant")) {
        return [
            "Understand the fundamentals of cloud computing and its major service models (IaaS, PaaS, SaaS).",
            "Gain hands-on experience with AWS, Microsoft Azure, and Google Cloud Platform (GCP).",
            "Design, deploy, and manage cloud-native architectures and hybrid/multi-cloud solutions.",
            "Implement automation, security, and DevOps workflows across multiple clouds.",
            "Prepare for industry-recognized certifications from AWS, Azure, and Google Cloud.",
            "Become job-ready as a Multi-Cloud Engineer, Cloud Architect, or Consultant"
        ];
    }

    // MERN Stack specific objectives
    if (search.includes("mern")) {
        return [
            "Build modern, scalable, and responsive full-stack web applications.",
            "Master JavaScript (ES6+) for both frontend and backend.",
            "Develop dynamic APIs and integrate them with front-end interfaces.",
            "Use MongoDB for real-time NoSQL database operations.",
            "Deploy and maintain web apps on cloud platforms.",
            "Gain hands-on experience through projects and real-world scenarios."
        ];
    }

    // Python Full Stack objectives
    if (search.includes("python") && search.includes("full stack")) {
        return [
            "Master Python programming concepts from fundamentals to advanced object-oriented principles.",
            "Design, develop, and deploy end-to-end web applications using Python frameworks (Flask, Django).",
            <>Build modern, responsive front-end interfaces with <strong className="font-black text-slate-900">HTML5, CSS3</strong>, JavaScript, and React.js.</>,
            <>Connect web apps to databases (<strong className="font-black text-slate-900">MySQL, PostgreSQL, MongoDB</strong>) with ORM integration.</>,
            "Understand API development, authentication, DevOps, and cloud"
        ];
    }

    // MEAN Stack objectives
    if (search.includes("mean")) {
        return [
            "Understand end-to-end web development using MongoDB, Express.js, Angular, and Node.js.",
            "Design and develop dynamic, scalable, and high-performance applications.",
            "Learn RESTful API creation, authentication, and full-stack deployment.",
            "Build and manage databases, handle server-side logic, and integrate frontend frameworks.",
            "Become industry-ready for software, web, and application development roles"
        ];
    }

    // AI & ML Objectives
    if (search.includes("artificial") || (search.includes("machine") && search.includes("learning"))) {
        return [
            "Understand the complete AI & Machine Learning development lifecycle.",
            "Build intelligent systems using Python, data preprocessing, and ML algorithms.",
            "Apply AI techniques in computer vision, NLP, and predictive analytics.",
            "Gain real-world exposure through end-to-end AI projects and cloud deployment.",
            "Become job-ready for AI Engineer, ML Developer, and Data Science roles."
        ];
    }

    // Java Full Stack Objectives (Added)
    if (search.includes("java")) {
        return [
            "Master Core & Advanced Java concepts, from OOPs to frameworks (Spring Boot, Hibernate).",
            "Develop responsive front-end web applications using HTML5, CSS3, JavaScript, and React.js.",
            "Build, integrate, and deploy full-stack applications with Java backends and databases.",
            "Gain real-world experience with REST APIs, authentication, cloud deployment, and Git version control.",
            "Be industry-ready for Java and full-stack developer roles in modern tech environments"
        ];
    }

    // Full Stack objectives (MEAN/Java/General)
    if (search.includes("full stack") || search.includes("mean")) {
        return [
            "Master both frontend and backend web development.",
            "Build dynamic, responsive web applications from scratch.",
            "Work with modern frameworks: React, Node.js, Express, MongoDB.",
            "Implement RESTful APIs and database integration.",
            "Deploy applications to cloud platforms like AWS and Heroku.",
            "Become job-ready for Full Stack Developer and Software Engineer roles."
        ];
    }

    // Cyber Security objectives
    if (search.includes("cyber") || search.includes("security")) {
        return [
            "Understand the principles of cybersecurity, ethical hacking, and risk management.",
            "Learn to identify, prevent, and mitigate cyber threats, vulnerabilities, and attacks.",
            "Gain hands-on experience with tools for network analysis, penetration testing, and digital forensics.",
            "Develop secure systems using cybersecurity frameworks, encryption, and access control.",
            "Be prepared for cybersecurity certifications and industry roles in ethical hacking, network defense, and cyber analysis"
        ];
    }

    // Default objectives
    return [
        "Gain comprehensive knowledge of core concepts and technologies.",
        "Build real-world projects to strengthen your portfolio.",
        "Master industry-standard tools and best practices.",
        "Develop problem-solving skills for technical challenges.",
        "Receive placement support and interview preparation.",
        "Become job-ready for professional roles in the tech industry."
    ];
};

export const getCourseFeatures = (category: string) => {
    // Default features for most courses (based on the UI/UX screenshot as a template)
    // Specific overrides can be added based on category if needed within this function.

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

// Capstone Project Ideas (specific project examples with descriptions)
export const getCourseCapstoneProjects = (title: string, category: string = "") => {
    const search = (title + " " + category).toLowerCase().trim();

    // Data Analytics capstone projects
    if (search.includes("data analytics") || search.includes("data analy")) {
        return [
            {
                title: "Sales Performance Dashboard (Power BI / Tableau + Excel + SQL)",
                description: "Analyze sales trends, regional performance, and KPIs for a retail business."
            },
            {
                title: "Customer Churn Analysis (Python + ML + Visualization)",
                description: "Predict churn and suggest retention strategies for a telecom company."
            },
            {
                title: "Financial Data Analytics (Excel + SQL + Power BI)",
                description: "Budget vs actual comparison, forecasting, and financial health dashboards."
            },
            {
                title: "HR Analytics (Python + Tableau)",
                description: "Employee attrition, attendance, and performance analysis."
            },
            {
                title: "Marketing Campaign Effectiveness (Python + Power BI)",
                description: "Measure ROI and impact using historical campaign data"
            }
        ];
    }

    // Data Science capstone projects
    if (search.includes("data science")) {
        return [
            { title: "Customer Churn Prediction", description: "Logistic Regression / Random Forest" },
            { title: "Stock Market Price Prediction", description: "Time Series + LSTM" },
            { title: "Sentiment Analysis on Twitter Data", description: "NLP + Python" },
            { title: "Sales Forecasting Dashboard", description: "Power BI + Regression" },
            { title: "Movie Recommendation System", description: "Collaborative Filtering + ML" },
            { title: "Disease Prediction System", description: "Classification + Streamlit Deployment" },
            { title: "E-Commerce Product Analytics Dashboard", description: "Pandas + Plotly + Tableau" }
        ];
    }

    // DevOps Multi-Cloud Engineering capstone projects
    if (search.includes("devops")) {
        return [
            {
                title: "Multi-Cloud CI/CD Pipeline",
                description: "Jenkins + Docker + Terraform + AWS + Azure\nAutomated build, test, and deployment across multiple environments"
            },
            {
                title: "Kubernetes-based Microservices Application",
                description: "Flask or Node.js App on EKS/GKE\nMonitored via Prometheus and Grafana"
            },
            {
                title: "Infrastructure Automation Project",
                description: "Terraform + Ansible to create and manage EC2 clusters\nAutomated configuration and monitoring setup"
            },
            {
                title: "E-Commerce Deployment Pipeline",
                description: "Complete CI/CD with GitHub → Jenkins → Docker → AWS → Kubernetes"
            },
            {
                title: "Cloud-Native Monitoring Dashboard",
                description: "Multi-cloud metrics dashboard using Grafana"
            }
        ];
    }

    // Python Full Stack capstone projects
    if (search.includes("python") && search.includes("full stack")) {
        return [
            {
                title: "Online Course Management System",
                description: "Django + React + MySQL\nAdmin, Faculty, and Student dashboards, course enrollment & progress tracking"
            },
            {
                title: "E-Commerce Platform",
                description: "Flask + React + REST API\nProduct management, cart, payment integration"
            },
            {
                title: "Hospital Appointment App",
                description: "Django REST + React\nDoctor scheduling, notifications, role-based access"
            },
            {
                title: "Expense Tracker App",
                description: "Flask + SQLite\nGraphs & analytics using Chart.js / Plotly"
            },
            {
                title: "Job Portal System",
                description: "Django + MySQL\nRecruiter & candidate dashboards, resume uploads"
            }
        ];
    }

    // Cyber Security capstone projects
    if (search.includes("cyber") || search.includes("security")) {
        return [
            {
                title: "Vulnerability Assessment & Penetration Test Report",
                description: "Simulated enterprise network security auditing and reporting"
            },
            {
                title: "Web Application Security Audit",
                description: "Using OWASP framework to identify and fix vulnerabilities"
            },
            {
                title: "Intrusion Detection System (IDS) Building",
                description: "Using Python and open-source tools to detect network attacks"
            },
            {
                title: "Incident Response Plan Simulation",
                description: "Handling a ransomware attack scenario from detection to recovery"
            },
            {
                title: "Phishing Simulation & Awareness Dashboard",
                description: "Creating a tool to test and educate users on phishing attacks"
            },
            {
                title: "Log Analysis & Threat Intelligence Dashboard",
                description: "Real-time monitoring using ELK Stack (Elasticsearch, Logstash, Kibana)"
            }
        ];
    }

    // QA Automation capstone projects
    if (search.includes("qa") || search.includes("testing") || search.includes("automation")) {
        return [
            { title: "E-Commerce Hybrid Framework", description: "Selenium + Java + TestNG\nEnd-to-end shopping cart automation with reporting" },
            { title: "Rest API Automation Suite", description: "REST Assured + Cucumber\nAutomating CRUD operations for a banking API" },
            { title: "Travel Booking BDD Framework", description: "Selenium + Cucumber\nBehavior-Driven testing for flight booking scenarios" },
            { title: "Continuous Testing Pipeline", description: "Jenkins + GitHub + Selenium\nAutomated test execution on code commit" },
            { title: "Data-Driven Login Test Suite", description: "Selenium + Apache POI\nTesting with large datasets from Excel" }
        ];
    }

    // Embedded Systems capstone projects
    if (search.includes("embedded")) {
        return [
            { title: "Smart Home Automation System", description: "Arduino + IoT + Cloud Dashboard" },
            { title: "IoT-Based Weather Monitoring Station", description: "ESP32 + DHT11 + Firebase Integration" },
            { title: "Obstacle Avoidance Robot", description: "Ultrasonic Sensors + Motor Control + Arduino" },
            { title: "Smart Energy Meter", description: "Raspberry Pi + Current Sensor + Cloud Logging" },
            { title: "Industrial Safety Monitoring System", description: "Embedded C + Sensor Network + Buzzer Alerts" },
            { title: "Health Monitoring Wearable", description: "Wearable sensors + real-time data transmission" }
        ];
    }

    // Multi-Cloud Engineering capstone projects
    if (search.includes("multi") && search.includes("cloud") && search.includes("engineering")) {
        return [
            { title: "End-to-End Data Pipeline with AWS", description: "Ingest → Process → Store → Visualize using S3, Glue, Redshift, Power BI" },
            { title: "Real-Time Data Streaming using Kafka + Spark", description: "Process live Twitter or IoT sensor data and visualize trends" },
            { title: "Data Warehouse on Snowflake / BigQuery", description: "ETL from multiple sources into a unified analytics warehouse" },
            { title: "Multi-Cloud Data Lake System", description: "Data flow between AWS (S3), Azure (Data Lake), and GCP (Big Query)" },
            { title: "Sales Analytics Dashboard", description: "Using Python ETL + Airflow + PostgreSQL + Tableau" }
        ];
    }

    // Quantum Computing capstone projects
    if (search.includes("quantum")) {
        return [
            { title: "Quantum Cryptography Simulation (BB84 Protocol)", description: "Secure communication using quantum key distribution" },
            { title: "Quantum Machine Learning for Handwritten Digit Recognition", description: "QSVM and quantum neural networks" },
            { title: "Grover's Algorithm Search Engine Demo", description: "Quantum search optimization" },
            { title: "Quantum Chemistry Simulation using Qiskit Nature", description: "Molecular simulation and analysis" },
            { title: "Quantum Finance: Portfolio Optimization Model", description: "Quantum algorithms for financial optimization" },
            { title: "Quantum Cloud Integration using AWS Braket", description: "Hybrid quantum-classical workflows" }
        ];
    }

    // Multi-Cloud Consultant capstone projects
    if (search.includes("multi") && search.includes("cloud") && search.includes("consultant")) {
        return [
            { title: "Multi-Cloud Disaster Recovery Solution", description: "High availability across AWS, Azure, and GCP" },
            { title: "Cloud Cost Optimization Dashboard", description: "Monitoring and cost analysis tools" },
            { title: "Hybrid E-Commerce Platform with AWS + Azure + GCP", description: "Integrated multi-cloud architecture" },
            { title: "AI-Powered Multi-Cloud Monitoring System", description: "Unified observability platform" }
        ];
    }

    // MERN Stack capstone projects
    if (search.includes("mern")) {
        return [
            { title: "E-Learning Platform", description: "MERN + JWT + MongoDB + Admin Dashboard" },
            { title: "E-Commerce Website", description: "Product Catalog + Cart + Payment Gateway" },
            { title: "Job Portal System", description: "Recruiter & Candidate Modules" },
            { title: "Chat Application", description: "Real-time Messaging using Socket.io" },
            { title: "Expense Tracker", description: "Graph Analytics using Chart.js" },
            { title: "College Event Management System", description: "Role-based Access & Notifications" }
        ];
    }

    // MEAN Stack capstone projects
    if (search.includes("mean")) {
        return [
            { title: "E-Commerce Web App", description: "Angular Frontend + Express API + MongoDB\nCart, Orders, Payment Integration (Razorpay / Stripe)" },
            { title: "Job Portal Application", description: "Admin & User Roles\nResume Upload, Search Filters, Dashboard" },
            { title: "Hospital Management System", description: "Patient & Doctor modules\nAppointments, Notifications, Reports" },
            { title: "Learning Management System (LMS)", description: "Courses, Enrollments, Progress Tracking" },
            { title: "Chat Application", description: "Real-time Communication using Socket.io" }
        ];
    }

    // AI & ML Capstone Projects
    if (search.includes("artificial") || (search.includes("machine") && search.includes("learning"))) {
        return [
            { title: "AI Chatbot for Customer Support", description: "NLP + Flask + OpenAI API" },
            { title: "Real-Time Object Detection System", description: "OpenCV + YOLO" },
            { title: "Credit Card Fraud Detection", description: "Logistic Regression + Random Forest" },
            { title: "AI-based Resume Screener", description: "NLP + Machine Learning" },
            { title: "Stock Price Prediction System", description: "LSTM + Time Series" },
            { title: "Emotion Detection from Images", description: "CNN + Transfer Learning" },
            { title: "Medical Image Classification", description: "TensorFlow + Streamlit App" }
        ];
    }

    // Java Full Stack Capstone Projects (Added)
    if (search.includes("java")) {
        return [
            { title: "Online Learning Management System", description: "Spring Boot + React + MySQL\nAdmin panel, student tracking, course analytics" },
            { title: "E-Commerce Web Application", description: "Spring Boot + React + REST API\nProduct management, cart, and payment integration" },
            { title: "Hospital Appointment Booking System", description: "Spring Boot + React + PostgreSQL\nRole-based authentication, scheduling, email notifications" },
            { title: "Expense Tracker Web App", description: "Java + Spring Boot + MongoDB\nGraphical data analytics using Chart.js" },
            { title: "Job Portal System", description: "Spring Boot + React\nResume uploads, recruiter-candidate dashboards" }
        ];
    }

    // UI/UX Design capstone projects
    if (search.includes("ui") && search.includes("ux")) {
        return [
            { title: "E-Learning Platform Redesign", description: "Focus on user flow optimization, course browsing, and accessibility." },
            { title: "Food Delivery App Interface", description: "Build wireframes to prototypes with user onboarding and cart design." },
            { title: "Hospital Management Portal UX", description: "Improve appointment booking and patient navigation." },
            { title: "E-Commerce Store UI/UX", description: "End-to-end responsive web store with checkout experience." },
            { title: "Travel Planning Mobile App", description: "Focus on visual hierarchy, usability, and journey design." }
        ];
    }

    // Default capstone projects
    return [
        { title: "Full-Stack Web Application", description: "End-to-end project with frontend and backend." },
        { title: "Data Analysis Dashboard", description: "Interactive visualization of real-world data." },
        { title: "Mobile App Prototype", description: "Responsive mobile application design." },
        { title: "API Development Project", description: "RESTful API with authentication and database." },
        { title: "Portfolio Website", description: "Professional portfolio showcasing your skills." }
    ];
};

// Learning Outcomes (what students will be able to do after the course)
export const getCourseLearningOutcomes = (title: string, category: string = "") => {
    const search = (title + " " + category).toLowerCase().trim();

    // Data Analytics learning outcomes
    if (search.includes("data analytics") || search.includes("data analy")) {
        return [
            "Collect, clean, and analyze structured and unstructured data.",
            "Use Python, SQL, and Excel to extract and manipulate datasets.",
            "Visualize insights effectively using Power BI and Tableau.",
            "Interpret statistical outcomes to support business decisions.",
            "Apply machine learning techniques for predictive analysis.",
            "Prepare professional dashboards and analytical reports."
        ];
    }

    // Data Science learning outcomes
    if (search.includes("data science")) {
        return [
            "Collect, clean, and analyze real-world datasets using Python.",
            "Visualize and interpret data insights using modern tools.",
            "Build predictive models and deploy them using ML/DL frameworks.",
            "Apply AI and NLP for intelligent automation tasks.",
            "Work confidently with cloud, version control, and MLOps concepts.",
            "Become ready for analytics, AI, and data-driven software roles."
        ];
    }

    // Python Full Stack learning outcomes
    if (search.includes("python") && search.includes("full stack")) {
        return [
            "Develop frontend & backend web applications using modern frameworks.",
            "Build, test, and deploy scalable full-stack projects.",
            "Use Git, Docker, and cloud platforms for professional-grade deployment.",
            "Implement secure authentication and RESTful APIs.",
            "Work confidently as junior full-stack developers or Python backend engineers."
        ];
    }

    // Cyber Security learning outcomes
    if (search.includes("cyber") || search.includes("security")) {
        return [
            "Understand and implement cybersecurity principles in real-world systems.",
            "Detect, analyze, and mitigate cyberattacks across network and web layers.",
            "Use professional tools for ethical hacking, forensics, and network defense.",
            "Apply secure coding, encryption, and authentication techniques.",
            "Prepare for top cybersecurity certifications and industry-level interviews."
        ];
    }

    // DevOps Multi-Cloud Engineering learning outcomes
    if (search.includes("devops")) {
        return [
            "Build and deploy CI/CD pipelines using Jenkins, GitHub Actions, and Docker.",
            "Automate infrastructure provisioning with Terraform and Ansible.",
            "Deploy and manage containerized applications on Kubernetes.",
            "Monitor and troubleshoot applications using Prometheus, Grafana, and ELK Stack.",
            "Work confidently with AWS, Azure, and GCP for multi-cloud deployments.",
            "Become job-ready for DevOps Engineer, Cloud Engineer, and SRE roles."
        ];
    }

    // QA Automation learning outcomes
    if (search.includes("qa") || search.includes("testing") || search.includes("automation")) {
        return [
            "Write efficient, maintainable, and reusable test automation scripts.",
            "Build scalable test frameworks from scratch.",
            "Execute API and Web automated tests confidently.",
            "Detect, report, and track bugs using JIRA.",
            "Collaborate with developers to ensure high code quality in Agile environments."
        ];
    }

    // Embedded Systems learning outcomes
    if (search.includes("embedded")) {
        return [
            "Design, program, and debug embedded systems.",
            "Interface hardware modules and sensors with microcontrollers.",
            "Build IoT-enabled devices and applications",
            "Deploy real-time embedded applications using C/C++ and Python.",
            "Understand embedded Linux and RTOS concepts.",
            "Work confidently on hardware prototypes and production-ready systems"
        ];
    }

    // Multi-Cloud Engineering learning outcomes
    if (search.includes("multi") && search.includes("cloud") && search.includes("engineering")) {
        return [
            "Design and build data pipelines and ETL workflows.",
            "Manage and optimize relational & non-relational databases.",
            "Process and analyze large-scale data using Spark.",
            "Work with AWS, Azure, and GCP for cloud-native data solutions.",
            "Containerize and automate data systems with Docker, Terraform, and CI/CD.",
            "Implement real-time data streaming and analytics pipelines.",
            "Become job-ready for Data Engineering & Cloud Data roles."
        ];
    }

    // Quantum Computing learning outcomes
    if (search.includes("quantum")) {
        return [
            "Understand the core principles of quantum computing and mechanics.",
            "Design and simulate quantum circuits and algorithms.",
            "Use Qiskit and Cirq to develop and test quantum programs.",
            "Apply quantum computing to real-world problems in AI, cryptography, and optimization.",
            "Earn a recognized Quantum Computing Certification accredited by Academy of Tech Masters and partner institutions."
        ];
    }

    // Multi-Cloud Consultant learning outcomes
    if (search.includes("multi") && search.includes("cloud") && search.includes("consultant")) {
        return [
            "Design, deploy, and manage multi-cloud infrastructure across AWS, Azure, and GCP.",
            "Implement DevOps automation and CI/CD pipelines.",
            "Ensure data security, compliance, and performance optimization.",
            "Deploy scalable, fault-tolerant applications using containers and microservices.",
            "Clear top-tier cloud certifications and build a professional portfolio."
        ];
    }

    // MERN Stack learning outcomes
    if (search.includes("mern")) {
        return [
            "Write professional JavaScript code for both client and server.",
            "Design responsive web applications using React and Bootstrap.",
            "Build RESTful APIs and integrate them with frontend frameworks.",
            "Manage databases with MongoDB and Mongoose.",
            "Use Git/GitHub for version control and Heroku/Render for deployment."
        ];
    }

    // MEAN Stack learning outcomes
    if (search.includes("mean")) {
        return [
            "Develop and deploy complete web applications using the MEAN Stack",
            "Build scalable backend APIs and connect them to dynamic Angular frontends.",
            "Use MongoDB effectively for data modeling and operations.",
            "Manage version control and deploy full-stack applications to the cloud.",
            "Understand Agile workflows, DevOps basics, and CI/CD pipelines.",
            "Be job-ready for web and software development roles."
        ];
    }

    // AI & ML Learning Outcomes
    if (search.includes("artificial") || (search.includes("machine") && search.includes("learning"))) {
        return [
            "Understand end-to-end AI model development and deployment.",
            "Build intelligent, data-driven applications using Python, TensorFlow, and Scikit-Learn.",
            "Apply deep learning to CV, NLP, and time series data.",
            "Deploy AI models on cloud platforms and integrate APIs.",
            "Confidently appear for technical interviews and AI certifications."
        ];
    }

    // Java Full Stack Learning Outcomes (Added)
    if (search.includes("java")) {
        return [
            "Write optimized and modular Java programs.",
            "Build full-stack web applications using Java, Spring Boot, and React.",
            "Implement database management using JDBC, Hibernate, and JPA",
            "Create, test, and deploy REST APIs with authentication."
        ];
    }

    // UI/UX Design learning outcomes
    if (search.includes("ui") && search.includes("ux")) {
        return [
            "Conduct user research and usability testing independently.",
            "Design wireframes, prototypes, and interactive user interfaces.",
            "Implement modern, accessible, and responsive UI designs.",
            "Create design systems for scalable product design.",
            "Collaborate effectively with developers and stakeholders.",
            "Build a professional portfolio to showcase UI/UX projects."
        ];
    }

    // Default learning outcomes
    return [
        "Apply theoretical knowledge to practical projects.",
        "Work independently and in team environments.",
        "Debug and troubleshoot technical issues effectively.",
        "Follow industry best practices and standards.",
        "Communicate technical concepts clearly.",
        "Build a professional portfolio of projects."
    ];
};

// Certifications & Career Preparation
export const getCourseCertifications = (title: string, category: string = "") => {
    const search = (title + " " + category).toLowerCase().trim();

    // Data Analytics certifications
    if (search.includes("data analytics") || search.includes("data analy")) {
        return [
            "Microsoft Power BI Data Analyst",
            "Google Data Analytics Certificate",
            "Tableau Desktop Specialist",
            "Python for Data Science (Coursera / IBM)"
        ];
    }

    // Data Science certifications
    if (search.includes("data science")) {
        return [
            "Python for Data Science - Coursera / IBM / Google",
            "Machine Learning Specialization - Andrew Ng / DeepLearning.AI",
            "Tableau Desktop Specialist - Tableau",
            "Microsoft Power BI Data Analyst - PL-300",
            "AWS Certified Data Practitioner - AWS Academy",
            "Google Data Analytics Professional Certificate - Google"
        ];
    }

    // DevOps Multi-Cloud Engineering certifications
    if (search.includes("devops")) {
        return {
            providers: [
                {
                    name: "AWS",
                    certs: [
                        "AWS Certified Cloud Practitioner",
                        "AWS Certified DevOps Engineer - Professional"
                    ]
                },
                {
                    name: "Microsoft Azure",
                    certs: [
                        "Microsoft Certified: Azure Fundamentals (AZ-900)",
                        "Microsoft Certified: DevOps Engineer Expert (AZ-400)"
                    ]
                },
                {
                    name: "Google Cloud",
                    certs: [
                        "Google Associate Cloud Engineer",
                        "Google Professional Cloud DevOps Engineer"
                    ]
                },
                {
                    name: "General DevOps Certifications",
                    certs: [
                        "Docker Certified Associate",
                        "Certified Kubernetes Administrator (CKA)",
                        "HashiCorp Certified: Terraform Associate",
                        "Linux Foundation Certified DevOps Engineer (LFCE)"
                    ]
                }
            ]
        };
    }

    // Quantum Computing certifications
    if (search.includes("quantum")) {
        return {
            main: "Certified Quantum Computing Developer (CQCD)",
            optional: [
                "IBM Quantum Developer Certification",
                "Microsoft Azure Quantum Developer",
                "AWS Braket Practitioner Badge",
                "Qiskit Developer Certificate"
            ]
        };
    }

    // QA Automation certifications
    if (search.includes("qa") || search.includes("testing") || search.includes("automation")) {
        return [
            "ISTQB Foundation Level (CTFL)",
            "Certified Selenium Professional",
            "Tricentis Tosca Automation Specialist (Optional)",
            "Appium Mobile Testing Certification"
        ];
    }

    // Multi-Cloud Consultant certifications
    if (search.includes("multi") && search.includes("cloud") && search.includes("consultant")) {
        return [
            "AWS Certified Cloud Practitioner / AWS Solutions Architect - Associate",
            "Microsoft Certified: Azure Fundamentals (AZ-900) / Azure Administrator (AZ-104)",
            "Google Associate Cloud Engineer (ACE)",
            "HashiCorp Certified: Terraform Associate",
            "Kubernetes Certified Administrator (CKA)",
            "DevOps Foundation / AWS DevOps Engineer - Professional"
        ];
    }

    // Python Full Stack certifications
    if (search.includes("python") && search.includes("full stack")) {
        return [
            "Python Programming Certification – Python Institute / HackerRank / Coursera",
            "Full Stack Web Development Certification – Meta / freeCodeCamp / Simplilearn",
            "Django Developer Certificate – Udemy / Coursera",
            "AWS Cloud Practitioner – AWS Academy (for deployment exposure)",
            "Git & Version Control Certificate – GitHub or LinkedIn Learning",
            "Internship Completion Certificate – Issued by Academy of Tech Masters"
        ];
    }

    // MERN Stack certifications
    if (search.includes("mern")) {
        return [
            "Certified MERN Full Stack Developer (CMFSD)",
            "MongoDB University – Developer Certification",
            "Meta Front-End Developer Certificate (Coursera)",
            "AWS Cloud Practitioner or Render Deployment Badge"
        ];
    }

    // UI/UX Design certifications
    if (search.includes("ui") && search.includes("ux")) {
        return [
            "Academy of Tech Masters – Certified UI/UX Designer",
            "Figma Mastery Certificate (Advanced)",
            "Google UX Design (Recommended External Certification)",
            "Adobe XD Prototyping Certificate (Optional)"
        ];
    }

    // Data Science certifications
    if (search.includes("data science")) {
        return [
            "Academy of Tech Masters – Certified Data Scientist",
            "Python for Data Science Certificate",
            "Machine Learning Specialization",
            "AWS Certified Machine Learning (Recommended)"
        ];
    }

    // Default certifications
    // Default certifications
    if (search.includes("artificial") || (search.includes("machine") && search.includes("learning"))) {
        return [
            "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
            "Google TensorFlow Developer Certificate",
            "AWS Certified Machine Learning – Specialty",
            "IBM AI Engineering Professional Certificate (Coursera)"
        ];
    }

    return [
        "Academy of Tech Masters – Course Completion Certificate",
        "Industry-Recognized Skill Certification",
        "Project Portfolio Certificate"
    ];
};

// Career Opportunities / Job Roles
export const getCourseCareerRoles = (title: string, category: string = "") => {
    const search = (title + " " + category).toLowerCase().trim();

    // Data Analytics career roles
    if (search.includes("data analytics") || search.includes("data analy")) {
        return [
            "Data Analyst",
            "Business Analyst",
            "Data Visualization Specialist",
            "BI Developer (Power BI / Tableau)",
            "SQL Analyst / Database Analyst",
            "Junior Data Scientist",
            "Operations / Financial Analyst"
        ];
    }

    // Data Science career roles
    if (search.includes("data science")) {
        return [
            "Data Analyst",
            "Data Scientist",
            "Machine Learning Engineer",
            "AI Engineer",
            "Business Intelligence (BI) Analyst",
            "Data Engineer (Junior)",
            "NLP Specialist",
            "Cloud Data Associate"
        ];
    }

    // Cyber Security career roles
    if (search.includes("cyber") || search.includes("security")) {
        return [
            "Ethical Hacker / Penetration Tester",
            "Cybersecurity Analyst / SOC Analyst",
            "Network Security Engineer",
            "Information Security Specialist",
            "Incident Response Engineer",
            "Cloud Security Consultant",
            "Forensic Analyst",
            "Security Automation Engineer"
        ];
    }

    // DevOps Career Roles
    if (search.includes("devops")) {
        return [
            "DevOps Engineer",
            "Cloud Engineer (AWS/Azure/GCP)",
            "Site Reliability Engineer (SRE)",
            "Infrastructure Automation Engineer",
            "CI/CD Pipeline Engineer",
            "Cloud Administrator",
            "Release Engineer"
        ];
    }

    // Python Full Stack career roles
    if (search.includes("python") && search.includes("full stack")) {
        return [
            "Python Developer",
            "Full Stack Developer (Python + React/Django)",
            "Backend Developer",
            "Web Application Developer",
            "API Integration Engineer",
            "Junior DevOps Engineer",
            "Cloud & Deployment Support Engineer"
        ];
    }

    // QA Automation career roles
    if (search.includes("qa") || search.includes("testing") || search.includes("automation")) {
        return [
            "QA Automation Engineer",
            "Software Development Engineer in Test (SDET)",
            "Manual Tester / QA Analyst",
            "Test Lead / Manager",
            "Performance Tester",
            "API Tester"
        ];
    }

    // Embedded Systems career roles
    if (search.includes("embedded")) {
        return [
            "Embedded Systems Engineer",
            "IoT Developer",
            "Firmware Developer",
            "Hardware Design Engineer",
            "Robotics Programmer",
            "Embedded Software Tester",
            "Automation Engineer",
            "R&D Engineer (Electronics)",
            "Embedded AI Developer"
        ];
    }

    // Multi-Cloud Engineering career roles
    if (search.includes("multi") && search.includes("cloud") && search.includes("engineering")) {
        return [
            "Data Engineer",
            "Cloud Data Engineer (AWS/Azure/GCP)",
            "ETL Developer / Pipeline Engineer",
            "Big Data Engineer",
            "Database Engineer / SQL Developer",
            "DataOps / DevOps Engineer",
            "Data Analyst (with Engineering focus)",
            "BI & Cloud Integration Engineer"
        ];
    }

    // Quantum Computing career roles
    if (search.includes("quantum")) {
        return [
            "Quantum Software Developer",
            "Quantum Research Associate",
            "Quantum Algorithm Engineer",
            "Quantum Machine Learning Engineer",
            "Quantum Cryptography Specialist",
            "Quantum Cloud Developer",
            "Research Intern / Assistant (Quantum Labs)"
        ];
    }

    // Multi-Cloud Consultant career roles
    if (search.includes("multi") && search.includes("cloud") && search.includes("consultant")) {
        return [
            "Multi-Cloud Consultant",
            "Cloud Solutions Architect",
            "Cloud DevOps Engineer",
            "Cloud Automation Engineer",
            "Infrastructure Engineer (Cloud)",
            "Cloud Security Analyst",
            "Cloud Migration Specialist",
            "Site Reliability Engineer (SRE)"
        ];
    }

    // MERN Stack career roles with descriptions
    if (search.includes("mern")) {
        return [
            { role: "MERN Stack Developer", description: "Full-stack developer skilled in JS-based frameworks." },
            { role: "Frontend Developer (React.js)", description: "UI & UX focused developer." },
            { role: "Backend Developer (Node.js)", description: "API and data handling for web apps." },
            { role: "Web Application Developer", description: "End-to-end app development and deployment." },
            { role: "Software Engineer (Full Stack)", description: "Works across frontend, backend, and databases." }
        ];
    }

    // MEAN Stack career roles
    if (search.includes("mean")) {
        return [
            "MEAN Stack Developer",
            "Full Stack Web Developer",
            "Angular Developer",
            "Node.js Developer",
            "Backend Engineer (Node + Express)",
            "API Developer / Integration Engineer",
            "JavaScript Developer",
            "Junior DevOps / Cloud Engineer"
        ];
    }

    // AI & ML Career Roles
    if (search.includes("artificial") || (search.includes("machine") && search.includes("learning"))) {
        return [
            "AI Engineer",
            "Machine Learning Engineer",
            "Data Scientist / Analyst",
            "Computer Vision Developer",
            "NLP Engineer / Chatbot Developer",
            "AI Research Assistant",
            "MLOps Engineer"
        ];
    }

    // Java Full Stack Career Roles (Added)
    if (search.includes("java")) {
        return [
            "Java Developer",
            "Full Stack Developer (Java + React/Spring Boot)",
            "Backend Developer (Spring Boot / Hibernate)",
            "API Developer / Integration Engineer",
            "Web Application Developer",
            "Junior DevOps Engineer",
            "Cloud Application Developer"
        ];
    }

    // UI/UX Design career roles
    if (search.includes("ui") && search.includes("ux")) {
        return [
            "UI/UX Designer",
            "Product Designer",
            "UX Researcher",
            "Interaction Designer",
            "Frontend Designer / Developer",
            "Visual Designer",
            "Web & App Interface Specialist"
        ];
    }

    // Data Science career roles
    if (search.includes("data science")) {
        return [
            "Data Scientist",
            "Machine Learning Engineer",
            "Data Analyst",
            "AI Researcher",
            "Business Intelligence Analyst",
            "Data Engineer"
        ];
    }

    // Default career roles
    return [
        "Software Developer",
        "Full Stack Engineer",
        "Backend Developer",
        "Frontend Developer",
        "Technical Consultant"
    ];
};

// Hiring Companies (logos and names)
export const getCourseHiringCompanies = (title: string, category: string = "") => {
    // Common top tech companies that hire across all domains with local images
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




