import React from "react";
import { SiJavascript } from "react-icons/si";
import { Logo } from "../../components/ui/logo-carousel";
import { ToolIcons } from "./icons";

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
            img: (props: React.ComponentProps<'svg'>) => <Icon { ...props } style={{ ...props.style, color: toolData.color }} />
        };
    });
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

    // Java Full Stack Tools
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

    // Full Stack (General)
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
    if (search.includes("python") && search.includes("stack")) {
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
