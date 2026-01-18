import React from "react";

export const getCourseSpecificOutcomes = (title: string, category: string = "") => {
    // This seems to be a placeholder or combined version
    return [];
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

    // Java Full Stack Objectives
    if (search.includes("java")) {
        return [
            "Master Core & Advanced Java concepts, from OOPs to frameworks (Spring Boot, Hibernate).",
            "Develop responsive front-end web applications using HTML5, CSS3, JavaScript, and React.js.",
            "Build, integrate, and deploy full-stack applications with Java backends and databases.",
            "Gain real-world experience with REST APIs, authentication, cloud deployment, and Git version control.",
            "Be industry-ready for Java and full-stack developer roles in modern tech environments"
        ];
    }

    // Full Stack objectives (General)
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

    // Java Full Stack Capstone Projects
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
            "Prepare for top cybersecurity certifications and industry level interviews."
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

    // Java Full Stack Learning Outcomes
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

    // AI & ML Certifications
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

    // MERN Stack career roles
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

    // Java Full Stack Career Roles
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

    // Default career roles
    return [
        "Software Developer",
        "Full Stack Engineer",
        "Backend Developer",
        "Frontend Developer",
        "Technical Consultant"
    ];
};
