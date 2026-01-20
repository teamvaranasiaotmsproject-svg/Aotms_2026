export const getCourseCurriculum = (title: string, category: string = "") => {
    const search = (title + " " + category).toLowerCase().trim();

    // 1. Data Science Masterclass
    if (search.includes("data science") && !search.includes("artificial") && !search.includes("machine")) {
        return [
            {
                title: "Module 1 : Python for Data Science (Foundations)",
                lessons: [
                    "Introduction to Python and Jupyter Notebook",
                    "Data Types, Variables, Loops, and Functions, File Handling",
                    "Working with Libraries: NumPy, Pandas",
                    "Exploratory Data Analysis (EDA) Basics",
                    "Importing and Cleaning Datasets"
                ]
            },
            {
                title: "Module 2: Data Handling & Manipulation",
                lessons: [
                    "Pandas: Series, Data Frames, Indexing, Group By",
                    "Data Cleaning & Transformation Techniques",
                    "Handling Missing Data and Outliers",
                    "Merging, Joining, Concatenation",
                    "Working with JSON, CSV, and Excel Files, Data Wrangling Projects"
                ]
            },
            {
                title: "Module 3: Data Visualization",
                lessons: [
                    "Introduction to Matplotlib & Seaborn",
                    "Plot Types: Line, Bar, Pie, Heatmaps, Pairplots",
                    "Advanced Visualization: Plotly, Power BI, Tableau",
                    "Storytelling with Data: Dashboards & Reports"
                ]
            },
            {
                title: "Module 4: Statistics & Probability for Data Science",
                lessons: [
                    "Descriptive Statistics: Mean, Median, Mode, Variance",
                    "Probability Concepts and Distributions",
                    "Hypothesis Testing, p-values, z-test, t-test",
                    "Correlation, Regression, and Covariance",
                    "Sampling, Confidence Intervals, and A/B Testing"
                ]
            },
            {
                title: "Module 5: Machine Learning – Fundamentals",
                lessons: [
                    "Machine Learning Workflow & Concepts, Supervised vs Unsupervised",
                    "Regression Algorithms: Linear, Polynomial, Ridge, Lasso",
                    "Classification: Logistic Regression, KNN, SVM, Naive Bayes, Decision Trees, Random Forest",
                    "Clustering: K-Means, Hierarchical, DBSCAN",
                    "Model Evaluation Metrics (Accuracy, Precision, Recall, F1-Score, ROC-AUC)"
                ]
            },
            {
                title: "Module 6: Advanced Machine Learning & Feature Engineering",
                lessons: [
                    "Feature Selection and Dimensionality Reduction (PCA, LDA)",
                    "Cross-Validation & Hyperparameter Tuning",
                    "Ensemble Methods: Bagging, Boosting, Stacking",
                    "Model Deployment using Streamlit/Gradio",
                    "ML Project: Predictive Analytics on Real Dataset"
                ]
            },
            {
                title: "Module 7: Deep Learning & Neural Networks",
                lessons: [
                    "Introduction to Deep Learning & AI, ANN Basics",
                    "TensorFlow & Keras Fundamentals",
                    "Convolutional Neural Networks (CNN) for Image Data",
                    "Recurrent Neural Networks (RNN, LSTM) for Sequential Data",
                    "Deep Learning Project: Image or Text Classification"
                ]
            },
            {
                title: "Module 8: Data Engineering & Big Data Overview",
                lessons: [
                    "Data Pipelines & ETL Concepts",
                    "Introduction to SQL and NoSQL (MySQL, MongoDB)",
                    "Data Warehousing (Snowflake, Redshift Basics)",
                    "Big Data Ecosystem Overview – Hadoop, Spark, PySpark"
                ]
            },
            {
                title: "Module 9: Cloud & MLOps Integration",
                lessons: [
                    "Introduction to Cloud Platforms (AWS, Azure, GCP)",
                    "Cloud-based Data Storage & Analysis",
                    "Containerization using Docker for ML Models",
                    "CI/CD for Data Science Projects",
                    "Model Deployment on AWS, Render, or HuggingFace Spaces"
                ]
            },
            {
                title: "Module 10: Natural Language Processing (NLP)",
                lessons: [
                    "Text Preprocessing: Tokenization, Stopwords, Lemmatization",
                    "Bag of Words, TF-IDF, Word2Vec",
                    "Sentiment Analysis, Topic Modeling (LDA)",
                    "Transformer Models (Intro to BERT/GPT APIs)",
                    "NLP Project: Sentiment Analysis or Chatbot"
                ]
            },
            {
                title: "Module 11: Business Analytics & Visualization",
                lessons: [
                    "Excel for Data Analytics, Power BI Dashboard Development",
                    "Data Storytelling and Presentation",
                    "KPI Measurement and Business Case Studies"
                ]
            },
            {
                title: "Module 12: Capstone & Career Readiness",
                lessons: [
                    "Resume Building and LinkedIn Optimization",
                    "Mock Technical & HR Interviews",
                    "Final Project Development & Presentation",
                    "Portfolio Preparation on GitHub / Kaggle"
                ]
            }
        ];
    }

    // 2. Cyber Security Masterclass
    if (search.includes("cyber") || search.includes("security")) {
        return [
            {
                title: "Module 1: Introduction to Cybersecurity",
                lessons: [
                    "Cybersecurity Overview & Importance, CIA Triad",
                    "Cyber Threat Landscape & Attack Vectors, Types of Hackers",
                    "Cyber Laws & Ethics (Indian IT Act & Global Standards)"
                ]
            },
            {
                title: "Module 2: Networking & Security Fundamentals",
                lessons: [
                    "Networking Basics (OSI, TCP/IP, Subnets, Routing)",
                    "Firewalls, VPNs, Proxies, Network Devices & Topologies",
                    "Packet Analysis (Wireshark), Common Network Vulnerabilities",
                    "Secure Network Design & Best Practices"
                ]
            },
            {
                title: "Module 3: Operating Systems & System Security",
                lessons: [
                    "Windows & Linux Security Fundamentals, User Management",
                    "System Hardening, Malware, Viruses, Rootkits",
                    "Security Patches & Updates, Command Line Security Tools"
                ]
            },
            {
                title: "Module 4: Ethical Hacking & Penetration Testing",
                lessons: [
                    "Ethical Hacking Methodology, Footprinting and Scanning (Nmap, Shodan)",
                    "Vulnerability Assessment (Nessus, OpenVAS)",
                    "Exploitation Tools (Metasploit), Privilege Escalation",
                    "Reporting and Documentation of Findings"
                ]
            },
            {
                title: "Module 5: Web Application Security",
                lessons: [
                    "Web App Architecture & Threats, OWASP Top 10 Vulnerabilities",
                    "SQL Injection, XSS, CSRF, Clickjacking",
                    "Secure Coding Practices, Burp Suite, ZAP Proxy",
                    "Web Application Firewall (WAF) Concepts"
                ]
            },
            {
                title: "Module 6: Cryptography & Secure Communication",
                lessons: [
                    "Symmetric & Asymmetric Encryption, Hashing (SHA, MD5)",
                    "Digital Signatures, Certificates, PKI, SSL/TLS, HTTPS",
                    "Email Encryption (PGP, S/MIME), Cryptanalysis Basics"
                ]
            },
            {
                title: "Module 7: Cloud & Network Security",
                lessons: [
                    "Cloud Computing Overview (AWS, Azure, GCP), Cloud Security Architecture",
                    "Network Access Control, Zero Trust Model, IDS/IPS",
                    "SIEM Tools (Splunk, Wazuh, ELK Stack), Secure Cloud Config"
                ]
            },
            {
                title: "Module 8: Incident Response & Digital Forensics",
                lessons: [
                    "Incident Response Lifecycle, Log Analysis & Threat Hunting",
                    "Memory & Disk Forensics (Autopsy, Volatility), Malware Analysis",
                    "Chain of Custody and Legal Considerations"
                ]
            },
            {
                title: "Module 9: Cyber Defence & Security Automation",
                lessons: [
                    "Threat Intelligence & SOC Overview, Blue Team vs Red Team",
                    "SIEM & SOAR Tools, Automating Security with Python & Bash",
                    "Endpoint Protection (EDR/XDR), Anomaly Detection"
                ]
            },
            {
                title: "Module 10: Governance, Risk, and Compliance (GRC)",
                lessons: [
                    "Risk Management Frameworks (NIST, ISO 27001), Security Audits",
                    "Data Protection Regulations (GDPR, HIPAA), BCP/DR Planning",
                    "Vendor Risk and Supply Chain Security"
                ]
            },
            {
                title: "Module 11: Capstone & Career Preparation",
                lessons: [
                    "Resume & LinkedIn Optimization, Mock Interviews",
                    "Group and Individual Projects, Industry Guest Lectures",
                    "Certification Guidance (CompTIA, CEH, CISSP, OSCP)"
                ]
            }
        ];
    }

    // 3. Data Analytics Masterclass
    if (search.includes("data analytics") || search.includes("data analy")) {
        return [
            {
                title: "Module 1: Introduction to Data Analytics",
                lessons: [
                    "What is Data Analytics? Analytics vs Data Science",
                    "Data Lifecycle & Ecosystem",
                    "Roles and Responsibilities of a Data Analyst",
                    "Real-World Case Studies (Finance, Retail, Healthcare)"
                ]
            },
            {
                title: "Module 2: Excel for Data Analytics",
                lessons: [
                    "Data Cleaning & Formatting, Formulas (VLOOKUP, INDEX-MATCH)",
                    "Pivot Tables, Charts, Slicers, Conditional Formatting",
                    "Excel Dashboard Creation, Automation using Excel Macros"
                ]
            },
            {
                title: "Module 3: SQL for Data Analytics",
                lessons: [
                    "Introduction to Databases & SQL, CRUD Operations",
                    "Filtering, Sorting, Aggregations, Joins, Subqueries",
                    "Window Functions, Data Extraction for Reporting",
                    "Connecting SQL with Python (mysql-connector, psycopg2)"
                ]
            },
            {
                title: "Module 4: Python for Data Analytics",
                lessons: [
                    "Python Installation & Jupyter Setup, Basics of Python",
                    "Libraries: NumPy, Pandas, Matplotlib, Seaborn",
                    "Data Cleaning, Manipulation, Handling Missing Values",
                    "Exploratory Data Analysis (EDA)",
                    "Working with CSV, Excel, JSON, API, and Web Scraping"
                ]
            },
            {
                title: "Module 5: Statistics & Data Interpretation",
                lessons: [
                    "Descriptive Statistics (Mean, Median, Mode, SD)",
                    "Probability Basics, Hypothesis Testing (t-test, Chi-Square)",
                    "Correlation, Regression, Sampling Methods",
                    "Practical Case Studies in Business Context"
                ]
            },
            {
                title: "Module 6: Data Visualization & Business Intelligence Tools",
                lessons: [
                    "Power BI: Desktop Overview, Power Query, DAX, Dashboards",
                    "Tableau: Basics, Connecting Data, Calculated Fields, Dashboards",
                    "Real-Time Data Visualization Projects"
                ]
            },
            {
                title: "Module 7: Advanced Excel & Automation",
                lessons: [
                    "Power Query and Power Pivot, Data Models",
                    "Forecasting and Trend Analysis",
                    "Excel + Python Integration, Reports Automation"
                ]
            },
            {
                title: "Module 8: Introduction to Machine Learning for Analytics",
                lessons: [
                    "Understanding ML for Analysts, Supervised vs Unsupervised",
                    "Linear Regression, Decision Trees",
                    "Model Evaluation (MAE, RMSE, Accuracy)",
                    "Predictive Analytics Workflow, Customer Churn Case Study"
                ]
            },
            {
                title: "Module 9: Version Control, Deployment & Reporting",
                lessons: [
                    "Git & GitHub for Analysts",
                    "Sharing Analytical Workbooks & Reports, Documentation",
                    "Project Deployment on Web (Streamlit / Flask)"
                ]
            },
            {
                title: "Module 10: Capstone Projects & Career Readiness",
                lessons: [
                    "Resume Building, LinkedIn Optimization",
                    "Mock Interviews (Technical + HR)",
                    "Project Showcase & Presentation"
                ]
            }
        ];
    }

    // 4. DevOps Masterclass
    if (search.includes("devops") && !search.includes("engineering")) {
        return [
            {
                title: "Module 1: Introduction to DevOps & Software Development Lifecycle",
                lessons: [
                    "What is DevOps? DevOps Culture, Practices, and Tools",
                    "Traditional SDLC vs. Agile vs. DevOps",
                    "Continuous Integration, Continuous Delivery (CI/CD) Overview",
                    "Key DevOps Metrics and Success Factors"
                ]
            },
            {
                title: "Module 2: Linux, Shell Scripting & Networking Fundamentals",
                lessons: [
                    "Linux Commands, File Systems, Permissions, Process Management",
                    "Package Management, Shell Scripting (Bash) for Automation",
                    "Networking Basics: IP, DNS, HTTP, Ports, Firewalls",
                    "System Monitoring & Troubleshooting Commands"
                ]
            },
            {
                title: "Module 3: Version Control with Git & GitHub",
                lessons: [
                    "Git Basics: Init, Commit, Branching, Merging",
                    "GitHub Collaboration, Pull Requests, Issues",
                    "Working with Git Workflows (Gitflow, Trunk-based)",
                    "Integrating Git with Jenkins and CI Pipelines"
                ]
            },
            {
                title: "Module 4: Continuous Integration with Jenkins",
                lessons: [
                    "Jenkins Installation & Configuration, Pipelines, Jobs, Plugins",
                    "Automated Build and Testing with Git Integration",
                    "Jenkinsfile & Declarative Pipelines",
                    "Integrating Jenkins with Docker, GitHub, and AWS"
                ]
            },
            {
                title: "Module 5: Containerization & Orchestration",
                lessons: [
                    "Docker: Containers vs VMs, Images, Dockerfile, Docker Compose",
                    "Kubernetes (K8s): Pods, Deployments, ReplicaSets, Services",
                    "Helm Charts, Kubernetes on AWS (EKS), Azure (AKS), GCP (GKE)"
                ]
            },
            {
                title: "Module 6: Infrastructure as Code (IaC)",
                lessons: [
                    "Terraform: Scripts, Multi-Cloud Infrastructure, State Management",
                    "Ansible: Playbooks, Roles, Inventories, Configuration Management",
                    "Integrating Ansible with Jenkins and Cloud"
                ]
            },
            {
                title: "Module 7: Cloud Platforms (Multi-Cloud Approach)",
                lessons: [
                    "AWS: EC2, S3, VPC, IAM, RDS, CloudWatch, Automation",
                    "Microsoft Azure: VMs, Storage, Azure Pipelines, ARM Templates",
                    "GCP: Compute Engine, Cloud Storage, Pub/Sub, GKE, Terraform on GCP"
                ]
            },
            {
                title: "Module 8: Monitoring, Logging & Security",
                lessons: [
                    "Monitoring Tools: Prometheus, Grafana",
                    "Centralized Logging with ELK Stack (Elasticsearch, Logstash, Kibana)",
                    "Alerting & Incident Management (CloudWatch, Azure Monitor)",
                    "Security Best Practices in DevOps (DevSecOps)"
                ]
            },
            {
                title: "Module 9: CI/CD and Deployment Automation",
                lessons: [
                    "Continuous Deployment Pipelines, Blue-Green & Canary Deployments",
                    "Infrastructure Testing & Validation",
                    "Integration with Docker, Terraform, and Kubernetes",
                    "Automated Rollback Strategies"
                ]
            },
            {
                title: "Module 10: Capstone Projects & Career Preparation",
                lessons: [
                    "Resume & LinkedIn Optimization for DevOps Roles",
                    "Mock Interviews (Technical + HR)",
                    "Building a Personal DevOps Portfolio on GitHub",
                    "Final Project Presentation"
                ]
            }
        ];
    }

    // 5. Multi Cloud Engineering
    if (search.includes("multi") && search.includes("cloud") && search.includes("engineering")) {
        return [
            {
                title: "Module 1 : Python for Data Engineering (Foundations)",
                lessons: [
                    "Python Refresher: Syntax, Data Types, Loops, Functions",
                    "Working with Files (CSV, JSON, XML)",
                    "Data Manipulation using Pandas & NumPy",
                    "Working with APIs (Requests, JSON Parsing)",
                    "Exception Handling and Logging",
                    "Writing Modular & Efficient Code"
                ]
            },
            {
                title: "Module 2: Databases & SQL Mastery",
                lessons: [
                    "SQL Fundamentals (DDL, DML, Joins, Subqueries)",
                    "Advanced SQL (CTEs, Window Functions, Optimization)",
                    "Database Design & Normalization",
                    "Relational Databases: MySQL, PostgreSQL",
                    "NoSQL Databases: MongoDB, Cassandra, Redis",
                    "Python Integration using SQLAlchemy / psycopg2 / PyMongo"
                ]
            },
            {
                title: "Module 3: Data Extraction, Transformation & Loading (ETL/ELT)",
                lessons: [
                    "Introduction to ETL Pipelines",
                    "Data Ingestion from APIs, CSV, Excel, and Databases",
                    "Building Pipelines using Airflow / Luigi",
                    "Data Cleaning & Transformation with Pandas & PySpark",
                    "Workflow Orchestration Concepts",
                    "Scheduling, Monitoring, and Logging Pipelines"
                ]
            },
            {
                title: "Module 4: Big Data Ecosystem",
                lessons: [
                    "Introduction to Big Data & Hadoop Architecture",
                    "HDFS, YARN, MapReduce Concepts",
                    "Apache Spark – Core, DataFrames, and SparkSQL",
                    "PySpark Programming (RDDs, Transformations, Actions)",
                    "Spark Streaming & Kafka Integration",
                    "Hive & Impala Basics for Data Querying"
                ]
            },
            {
                title: "Module 5: Multi-Cloud Data Engineering (AWS, Azure, GCP)",
                lessons: [
                    "Cloud Fundamentals: Regions, IAM, Networking",
                    "AWS: S3, Redshift, Lambda, Glue, EMR, Athena",
                    "Azure: Data Factory, Synapse Analytics, Blob Storage",
                    "GCP: BigQuery, Dataflow, Pub/Sub, Dataproc",
                    "Cross-cloud data migration and interoperability",
                    "Cost optimization and data governance across clouds"
                ]
            },
            {
                title: "Module 6: Data Warehousing & Data Lakes",
                lessons: [
                    "Data Warehousing Concepts & Architecture",
                    "Star & Snowflake Schema Design",
                    "Implementing Data Warehouses using Snowflake, Redshift, BigQuery",
                    "Data Lake Concepts (Raw, Processed, Curated Zones)",
                    "Designing a Lakehouse using Delta Lake / Apache Iceberg",
                    "Query Federation and Data Virtualization"
                ]
            },
            {
                title: "Module 7: APIs, Streaming & Real-Time Data Processing",
                lessons: [
                    "Introduction to Event-Driven Architectures",
                    "Working with Kafka Producers and Consumers",
                    "Stream Processing with Apache Spark Streaming / Flink",
                    "Building REST APIs with FastAPI / Flask for Data Services",
                    "Real-time Dashboards using Power BI / Tableau / Streamlit"
                ]
            },
            {
                title: "Module 8: DevOps for Data Engineering",
                lessons: [
                    "Version Control using Git & GitHub",
                    "Containerization with Docker",
                    "Infrastructure as Code (IaC) – Terraform Basics",
                    "Continuous Integration & Deployment (CI/CD)",
                    "Introduction to Kubernetes for Data Pipeline Orchestration",
                    "Monitoring Data Workflows using Prometheus / Grafana"
                ]
            },
            {
                title: "Module 9: Advanced Topics & Data Governance",
                lessons: [
                    "Data Security & Compliance (GDPR, HIPAA, PII Management)",
                    "Data Quality, Validation & Observability",
                    "Metadata Management with Apache Atlas / Amundsen",
                    "Data Catalogs & Lineage Tracking",
                    "ML Pipelines Integration (MLOps Concepts)"
                ]
            },
            {
                title: "Module 10: Capstone & Career Readiness",
                lessons: [
                    "Resume & LinkedIn Branding for Data Engineers",
                    "Mock Technical Interviews (SQL, Python, Cloud, ETL)",
                    "Portfolio Project Presentation",
                    "Networking & Industry Exposure (Guest Sessions / Meetups)"
                ]
            }
        ];
    }

    // 6. Embedded Systems Masterclass
    if (search.includes("embedded")) {
        return [
            {
                title: "Module 1: Introduction to Embedded Systems",
                lessons: [
                    "What is an Embedded System? Components, Hardware vs. Software",
                    "Real-time Applications & Industry Use Cases",
                    "System Design Lifecycle"
                ]
            },
            {
                title: "Module 2: Embedded C & Programming Foundations",
                lessons: [
                    "Introduction to C & C++ for Embedded Systems",
                    "Data Types, Operators, Control Structures",
                    "Functions, Arrays, Pointers, Structures (Bit operations)"
                ]
            },
            {
                title: "Module 3: Microcontroller Architecture & Programming",
                lessons: [
                    "Overview of 8051 / PIC / AVR Microcontrollers",
                    "ARM Cortex-M Architecture",
                    "GPIO, Timers, UART, SPI, I2C Interfaces",
                    "Embedded IDEs: Keil μVision, MPLAB X, STM32CubeIDE",
                    "Writing and Flashing Firmware to Boards"
                ]
            },
            {
                title: "Module 4: Interfacing Sensors & Peripherals",
                lessons: [
                    "Digital and Analog Sensors",
                    "Interfacing LEDs, LCDs, Keypads, Motors (DC, Servo, Stepper)",
                    "ADC/DAC Interfacing, PWM for Motor Control",
                    "UART Communication and Serial Data Transmission"
                ]
            },
            {
                title: "Module 5: Internet of Things (IoT) & Wireless Communication",
                lessons: [
                    "Introduction to IoT and Networked Embedded Systems",
                    "Communication Protocols: Bluetooth, Wi-Fi, Zigbee, LoRa",
                    "ESP32 / NodeMCU Programming with Arduino IDE",
                    "Cloud Connectivity (Thingspeak, Blynk, Firebase)",
                    "Real-time IoT Dashboards and Data Visualization"
                ]
            },
            {
                title: "Module 6: Embedded Linux & Raspberry Pi",
                lessons: [
                    "Introduction to Linux for Embedded Systems, Raspberry Pi OS Setup",
                    "GPIO Programming with Python",
                    "File System, Networking, and Shell Scripting",
                    "Integration of Camera, Sensors, and Displays"
                ]
            },
            {
                title: "Module 7: Real-Time Operating Systems (RTOS)",
                lessons: [
                    "Basics of RTOS and Multitasking, FreeRTOS Architecture",
                    "Task Creation, Queues, Semaphores, Memory Management",
                    "RTOS Project Implementation (FreeRTOS on STM32 or Arduino)"
                ]
            },
            {
                title: "Module 8: Debugging, Testing & Optimization",
                lessons: [
                    "Embedded Debugging Tools (JTAG, SWD, Logic Analyzer)",
                    "Code Optimization Techniques, Memory Footprint Reduction",
                    "Embedded Software Testing (Unit & Integration Tests)",
                    "Version Control with Git for Firmware Projects"
                ]
            },
            {
                title: "Module 9: Embedded AI & Machine Learning (Advanced)",
                lessons: [
                    "Edge AI Concepts and TinyML Overview",
                    "Sensor Data Collection and Preprocessing",
                    "Model Deployment on Microcontrollers (TensorFlow Lite)",
                    "AI-based Predictive Maintenance and Automation"
                ]
            },
            {
                title: "Module 10: Deployment, Prototyping & Career Readiness",
                lessons: [
                    "PCB Design Basics (Proteus, Eagle, KiCad), Schematic Capture",
                    "Project Prototyping and Testing",
                    "Resume Building, LinkedIn Optimization, Mock Interviews",
                    "Industry Case Studies and Internship Guidance"
                ]
            }
        ];
    }

    // 7. Java Full Stack Masterclass
    if (search.includes("java")) {
        return [
            {
                title: "Module 1 : Foundations of Programming (Core Java)",
                lessons: [
                    "Introduction to Java, JVM, JDK, and IDE setup",
                    "Data Types, Variables, Operators, Conditional Statements & Loops",
                    "Methods, Recursion, and Arrays",
                    "Strings and Wrapper Classes",
                    "Exception Handling, File I/O and Serialization"
                ]
            },
            {
                title: "Module 2: Object-Oriented & Advanced Java",
                lessons: [
                    "Classes, Objects, Constructors, Inheritance, Polymorphism",
                    "Interfaces, Inner Classes, Packages",
                    "Collections Framework (List, Set, Map), Generics and Streams API",
                    "Multithreading and Concurrency",
                    "Java 8 Features (Lambdas, Functional Interfaces, Optional)",
                    "Annotations and Reflection API"
                ]
            },
            {
                title: "Module 3: Data Handling & Database Integration",
                lessons: [
                    "SQL Fundamentals (DDL, DML, Joins, Constraints)",
                    "MySQL, PostgreSQL Integration with JDBC",
                    "CRUD Operations, ORM Concepts, Hibernate Framework",
                    "Hibernate Annotations and Mapping, JPA (Java Persistence API)",
                    "Database Connectivity and Connection Pooling"
                ]
            },
            {
                title: "Module 4: Web Development Fundamentals",
                lessons: [
                    "HTML5, CSS3, Bootstrap Basics",
                    "JavaScript (ES6+): DOM Manipulation, JSON, AJAX",
                    "Introduction to React.js – Components, Props, State, Hooks",
                    "Responsive Web Design and UI Best Practices"
                ]
            },
            {
                title: "Module 5: Java Web Frameworks",
                lessons: [
                    "Servlets & JSP: Request-Response Lifecycle, MVC Design",
                    "Spring Framework: Core, Beans, Dependency Injection, Spring MVC",
                    "Spring Boot for RESTful Services",
                    "Spring Data JPA & Hibernate Integration",
                    "Spring Security (JWT Authentication)",
                    "REST API Concepts, Postman Testing, Swagger Documentation"
                ]
            },
            {
                title: "Module 6: Version Control, Deployment & DevOps Basics",
                lessons: [
                    "Git & GitHub: Repository Setup, Branching, Pull Requests",
                    "Maven & Gradle Build Tools",
                    "Docker Fundamentals (Containerizing Java Apps)",
                    "CI/CD Concepts with Jenkins / GitHub Actions",
                    "Cloud Deployment (AWS EC2, Render, Heroku)"
                ]
            },
            {
                title: "Module 7: Advanced Frontend-Backend Integration",
                lessons: [
                    "Connecting React.js with Java REST APIs, CORS Handling",
                    "JWT Authentication & Role-Based Authorization",
                    "Payment Gateway Integration (Razorpay / Stripe)",
                    "File Uploads and Notifications",
                    "Logging & Exception Handling in Full-Stack Apps"
                ]
            },
            {
                title: "Module 8: Testing & Quality Assurance",
                lessons: [
                    "JUnit 5 & Mockito, Integration Testing for REST APIs",
                    "Frontend Testing Overview (Jest / React Testing Library)",
                    "Code Quality Tools (SonarLint, Checkstyle)"
                ]
            },
            {
                title: "Module 9: Real-World Projects & Industry Practices",
                lessons: [
                    "End-to-End Full Stack Development (Frontend + Backend + Database)",
                    "Agile Methodologies (Scrum, Sprints)",
                    "Debugging & Performance Optimization",
                    "Deployment Pipeline Simulation"
                ]
            },
            {
                title: "Module 10: Capstone & Career Readiness",
                lessons: [
                    "Resume and LinkedIn Profile Building",
                    "Mock Technical & HR Interviews",
                    "Portfolio & GitHub Project Showcasing",
                    "Mini & Major Project Evaluation"
                ]
            }
        ];
    }

    // 8. MERN Stack Masterclass
    if (search.includes("mern")) {
        return [
            {
                title: "Module 1 : Web Development Foundations",
                lessons: [
                    "Introduction to Web Development (Frontend, Backend, Full Stack)",
                    "Internet Basics – DNS, HTTP, Client-Server Model",
                    "HTML5: Structure, Tags, Forms, Multimedia",
                    "CSS3: Styling, Flexbox, Grid, Animations, Responsive Design",
                    "Bootstrap 5 & Tailwind CSS basics"
                ]
            },
            {
                title: "Module 2 : JavaScript Programming (Core & Advanced)",
                lessons: [
                    "JavaScript Fundamentals: Variables, Loops, Functions, Arrays, Objects",
                    "DOM Manipulation, Events, and Fetch API",
                    "ES6+ Features: Arrow Functions, Destructuring, Modules",
                    "Asynchronous JavaScript: Callbacks, Promises, Async/Await",
                    "JSON and REST APIs",
                    "Error Handling and Debugging"
                ]
            },
            {
                title: "Module 3: React.js (Frontend Framework)",
                lessons: [
                    "Introduction to React and JSX",
                    "Components, Props, and State",
                    "React Hooks (useState, useEffect, useContext)",
                    "Routing with React Router",
                    "Managing Forms & API Integration",
                    "React UI Libraries (Material UI, Ant Design)",
                    "State Management (Context API, Redux Intro)"
                ]
            },
            {
                title: "Module 4: Node.js & Express.js (Backend Development)",
                lessons: [
                    "Introduction to Node.js & npm",
                    "Creating servers with Express.js",
                    "Middleware, Routing, and Error Handling",
                    "RESTful API Development",
                    "Authentication using JWT (JSON Web Token)",
                    "File Uploads, Sessions, and Cookies",
                    "Integration with MongoDB using Mongoose"
                ]
            },
            {
                title: "Module 5: MongoDB (Database Layer)",
                lessons: [
                    "NoSQL vs SQL – Understanding Data Models",
                    "MongoDB Installation & CRUD Operations",
                    "Data Modeling & Schema Design using Mongoose",
                    "Aggregation Framework and Indexing",
                    "Database Relationships (One-to-Many, Many-to-Many)",
                    "Backup, Restore, and Query Optimization"
                ]
            },
            {
                title: "Module 6: Full Stack Integration (Connecting React + Node + MongoDB)",
                lessons: [
                    "API consumption from React Frontend",
                    "CORS and Proxy Setup",
                    "Error Handling across Frontend & Backend",
                    "Securing API Routes (JWT, Middleware)",
                    "Testing with Postman",
                    "Building and Packaging Full Stack Applications"
                ]
            },
            {
                title: "Module 7: Deployment & DevOps Essentials",
                lessons: [
                    "Git & GitHub for Version Control",
                    "Environment Variables & Config Files",
                    "Deployment using: Render / Vercel (Frontend), Heroku / AWS / Railway (Backend), MongoDB Atlas (Database)",
                    "CI/CD Overview & Troubleshooting Deployment",
                    "Domain & Hosting Integration"
                ]
            },
            {
                title: "Module 8: Capstone Project & Certification",
                lessons: [
                    "Full-Scale MERN Application (End-to-End)",
                    "Examples: Online Course Platform, E-Commerce App, Job Portal System, Expense Tracker",
                    "Features: Authentication, CRUD, Cloud DB, Payment API",
                    "Final Presentation & Evaluation",
                    "Resume & LinkedIn Optimization",
                    "Mock Technical Interviews"
                ]
            }
        ];
    }

    // 9. Python Full Stack Development
    if (search.includes("python") && search.includes("stack")) {
        return [
            {
                title: "Module 1: Programming Foundations (Python Basics)",
                lessons: [
                    "Introduction to Programming and Python Setup (VS Code, PyCharm)",
                    "Python Syntax, Indentation, and Dynamic Typing",
                    "Variables, Data Types, and Operators",
                    "Control Flow: if, for, while, break, continue",
                    "Functions, Arguments, Return Values, and Recursion",
                    "Lists, Tuples, Sets, and Dictionaries",
                    "Input/Output Handling",
                    "Exception Handling (Try, Except, Finally)",
                    "Mini Project: Console -Based Calculator / To -Do List"
                ]
            },
            {
                title: "Module 2: Advanced & Object -Oriented Python",
                lessons: [
                    "Classes, Objects, Inheritance, Polymorphism, Encapsulation",
                    "Modules, Packages, and Virtual Environments ( venv, pipenv)",
                    "Decorators, Iterators, Generators",
                    "File I/O Operations and Context Managers",
                    "Regular Expressions",
                    "Working with JSON, CSV, XML files",
                    "Mini Project: Student Management CLI Tool"
                ]
            },
            {
                title: "Module 3: Data Handling & Database Management",
                lessons: [
                    "SQL Fundamentals (DDL, DML, Joins, Keys, Constraints)",
                    "MySQL / PostgreSQL Setup and Integration",
                    "Python-DB Connectivity using mysql- connector and psycopg2",
                    "CRUD Operations via Python",
                    "Introduction to NoSQL Databases (MongoDB)",
                    "ORM Concepts: SQLAlchemy & Django ORM",
                    "Mini Project: Library Database Management"
                ]
            },
            {
                title: "Module 4: Front-End Web Development",
                lessons: [
                    "HTML5 – Tags, Forms, Semantic Elements",
                    "CSS3 – Styling, Animations, Flexbox, Grid",
                    "Responsive Design using Bootstrap",
                    "JavaScript (ES6+) – Variables, Functions, DOM Manipulation",
                    "Event Handling, Fetch API, Promises, Async/Await",
                    "JSON, AJAX, and REST API consumption",
                    "Introduction to React.js",
                    "Components, Props, and State",
                    "React Hooks and Conditional Rendering",
                    "Routing with React Router",
                    "Mini Project: Portfolio or Landing Page in React"
                ]
            },
            {
                title: "Module 5: Python Web Frameworks – Flask & Django",
                lessons: [
                    "Flask Setup and Routing",
                    "Templates (Jinja2), Forms, and Sessions",
                    "REST API development",
                    "Integrating Flask with MySQL / MongoDB",
                    "Blueprints and Modular App Design",
                    "Authentication with Flask - Login / JWT",
                    "Django Project Structure (MVT)",
                    "Models, Views, Templates",
                    "URL Routing and Static Files",
                    "Django ORM and QuerySets",
                    "Admin Panel Customization",
                    "Authentication, Authorization, and Permissions",
                    "Django REST Framework (DRF) – API Views, Serializers, Routers",
                    "Mini Project: Blog API / Student Portal"
                ]
            },
            {
                title: "Module 6: Version Control & Deployment",
                lessons: [
                    "Git & GitHub Essentials ( init, commit, push, branching)",
                    "Collaborating via Pull Requests",
                    "Docker Basics (Containerizing Apps)",
                    "Environment Variables & Secrets Management",
                    "Deploying to Cloud Platforms (AWS EC2, Render, Heroku, PythonAnywhere)",
                    "Continuous Integration/Deployment Overview (CI/CD Pipelines)",
                    "Mini Project: Deploy Flask App on Render/Heroku"
                ]
            },
            {
                title: "Module 7: Testing, Debugging & Performance Optimization",
                lessons: [
                    "Unit Testing with unit test and pytest",
                    "API Testing with Postman",
                    "Debugging Tools and Loggers",
                    "Exception Tracking with Sentry",
                    "Code Optimization & Profiling Techniques",
                    "Hands-on: Test a Django REST API"
                ]
            },
            {
                title: "Module 8: API Development & Real -World Integration",
                lessons: [
                    "RESTful API Principles",
                    "Building Secure APIs with Django REST Framework",
                    "JWT Authentication & OAuth 2.0",
                    "Third-party API Integration (Google Maps, Razorpay , Twilio)",
                    "Payment Gateway Integration (Stripe/ Razorpay Sandbox)",
                    "Email, SMS, Push Notifications Integration",
                    "Mini Project: API -Driven Dashboard Application"
                ]
            },
            {
                title: "Module 9: Cloud, DevOps & CI/CD Essentials",
                lessons: [
                    "AWS / GCP Overview",
                    "Hosting Databases in the Cloud (RDS, Firebase)",
                    "Docker Compose for Multi -Service Apps",
                    "Basic Linux Commands for Deployment",
                    "Introduction to Jenkins & GitHub Actions",
                    "CI/CD Workflow Setup",
                    "Mini Project: Automated Deployment Pipeline"
                ]
            },
            {
                title: "Module 10: Career Readiness & Capstone Projects",
                lessons: [
                    "Resume Building (Tech -focused)",
                    "LinkedIn & GitHub Portfolio Enhancement",
                    "Mock Technical & HR Interviews",
                    "Final Capstone Project Development & Presentation"
                ]
            }
        ];
    }

    // 10. Quantum Computing Masterclass
    if (search.includes("quantum")) {
        return [
            {
                title: "Module 1 : Introduction to Quantum Computing",
                lessons: [
                    "Classical vs Quantum Computing",
                    "History & Evolution of Quantum Technologies",
                    "Basic Quantum Mechanics Concepts (Superposition, Entanglement, Interference)",
                    "Quantum Bits (Qubits) and Quantum States",
                    "Quantum Gates & Circuits Overview",
                    "Real-World Applications of Quantum Computing"
                ]
            },
            {
                title: "Module 2 : Mathematics for Quantum Computing",
                lessons: [
                    "Linear Algebra Essentials (Vectors, Matrices, Tensor Products)",
                    "Probability & Complex Numbers",
                    "Quantum State Representation (Bra-Ket Notation)",
                    "Quantum Operators and Measurement",
                    "Matrix Multiplication and Unitary Transformations"
                ]
            },
            {
                title: "Module 3 : Quantum Mechanics for Engineers",
                lessons: [
                    "Postulates of Quantum Mechanics",
                    "Schrödinger Equation (Conceptual)",
                    "Quantum State Evolution",
                    "Measurement and Collapse",
                    "Density Matrices and Mixed States"
                ]
            },
            {
                title: "Module 4 : Quantum Circuits & Algorithms",
                lessons: [
                    "Quantum Circuit Model",
                    "Quantum Logic Gates (Hadamard, Pauli, CNOT, Toffoli, etc.)",
                    "Quantum Teleportation",
                    "Superdense Coding",
                    "Quantum Fourier Transform (QFT)",
                    "Quantum Phase Estimation",
                    "Grover’s Search Algorithm",
                    "Shor’s Algorithm for Factorization"
                ]
            },
            {
                title: "Module 5 : Quantum Programming with Qiskit",
                lessons: [
                    "Setting up IBM Quantum Experience",
                    "Installing and Using Qiskit SDK",
                    "Building and Visualizing Quantum Circuits",
                    "Running Simulations and Real Hardware Jobs",
                    "Measurement and Error Handling",
                    "Advanced Qiskit: Aer Simulator, Terra, and Ignis Modules",
                    "Working with Quantum Cloud Services"
                ]
            },
            {
                title: "Module 6 : Quantum Programming with Cirq and PennyLane",
                lessons: [
                    "Introduction to Google’s Cirq Framework",
                    "Creating and Simulating Circuits",
                    "Noise Models and Quantum Error Correction",
                    "Quantum Machine Learning using PennyLane",
                    "Hybrid Classical-Quantum Workflows"
                ]
            },
            {
                title: "Module 7 : Quantum Cryptography & Communication",
                lessons: [
                    "Classical Cryptography Limitations",
                    "Quantum Key Distribution (QKD) – BB84, E91 Protocols",
                    "Quantum Secure Communication Systems",
                    "Post-Quantum Cryptography Concepts",
                    "Building Secure Quantum Protocol Simulations"
                ]
            },
            {
                title: "Module 8 : Quantum Machine Learning & AI",
                lessons: [
                    "Basics of Machine Learning",
                    "Encoding Classical Data into Quantum States",
                    "Quantum Neural Networks (QNN)",
                    "Variational Quantum Circuits (VQC)",
                    "Quantum Support Vector Machines (QSVM)",
                    "Real-World Case Studies in Quantum AI"
                ]
            },
            {
                title: "Module 9 : Quantum Hardware & Ecosystem",
                lessons: [
                    "Quantum Hardware Platforms (IBM, IonQ, Rigetti, D-Wave)",
                    "Superconducting Qubits vs Photonic vs Trapped Ion Systems",
                    "Quantum Annealing Concepts",
                    "Quantum Error Correction & Decoherence",
                    "Cloud-Based Quantum Access"
                ]
            },
            {
                title: "Module 10 : Advanced Topics & Industry Integration",
                lessons: [
                    "Quantum Simulation in Chemistry & Physics",
                    "Quantum Optimization for Logistics and Finance",
                    "Hybrid Quantum-Classical Systems",
                    "Quantum Cloud Deployment on AWS Braket, Azure Quantum",
                    "Introduction to Quantum DevOps (Q-DevOps)"
                ]
            },
            {
                title: "Module 11 : Capstone Projects & Research Applications",
                lessons: [
                    "Mini Project: Build Quantum Circuit Simulations",
                    "Major Project: Quantum Cryptography / Quantum AI Application",
                    "Research-Based Project Paper (Optional for Final Years)",
                    "Presentation, Report, and Evaluation"
                ]
            }
        ];
    }

    // 11. UI/UX Design Masterclass
    if (search.includes("ui") && search.includes("ux")) {
        return [
            {
                title: "Module 1: Introduction to Design Thinking",
                lessons: [
                    "What is UI/UX? Understanding the difference",
                    "The Design Thinking Process (Empathize, Define, Ideate, Prototype, Test)",
                    "Role of UI/UX in Modern Product Development",
                    "Understanding Users & Business Goals",
                    "Design Trends and Case Studies"
                ]
            },
            {
                title: "Module 2: User Research & Analysis",
                lessons: [
                    "Conducting User Interviews & Surveys",
                    "Creating User Personas",
                    "Defining User Journeys and Experience Maps",
                    "Competitor Analysis & Benchmarking",
                    "Understanding Accessibility & Inclusivity"
                ]
            },
            {
                title: "Module 3: UX Design Process",
                lessons: [
                    "Problem Statements and Use Case Mapping",
                    "Information Architecture (IA)",
                    "User Flow & Task Flow Creation",
                    "Wireframing (Low-Fidelity and High-Fidelity)",
                    "Content Strategy for UX"
                ]
            },
            {
                title: "Module 4: UI Design Fundamentals",
                lessons: [
                    "Visual Design Principles (Contrast, Balance, Hierarchy)",
                    "Color Theory and Psychology",
                    "Typography & Iconography",
                    "Grids, Layouts, and Composition",
                    "Design Systems & Component Libraries"
                ]
            },
            {
                title: "Module 5: Tools & Technologies for Design",
                lessons: [
                    "Design Tools: Figma, Adobe XD, Sketch",
                    "Prototyping & Collaboration: Figma / Miro, InVision",
                    "Asset Management: Zeplin, Notion, Canva"
                ]
            },
            {
                title: "Module 6: Frontend Integration for Designers",
                lessons: [
                    "HTML5, CSS3, and Responsive Design Basics",
                    "CSS Frameworks (Bootstrap, Tailwind)",
                    "Intro to JavaScript for UI Designers",
                    "UI Animation and Transitions",
                    "Building Live Prototypes with Code"
                ]
            },
            {
                title: "Module 7: Advanced UX & Usability Testing",
                lessons: [
                    "Conducting Usability Tests",
                    "A/B Testing and Heatmaps",
                    "User Feedback Collection & Analysis",
                    "Accessibility Standards (WCAG Guidelines)",
                    "Iterating and Improving Design Based on Feedback"
                ]
            },
            {
                title: "Module 8: Design Systems & Collaboration",
                lessons: [
                    "Creating and Maintaining Design Systems",
                    "UI Kits and Pattern Libraries",
                    "Collaboration Between Designers & Developers",
                    "Version Control for Design (Figma & Git)"
                ]
            },
            {
                title: "Module 9: Product Design & Mobile UI",
                lessons: [
                    "Designing for Mobile Interfaces (iOS, Android)",
                    "Responsive and Adaptive Design Techniques",
                    "Micro interactions and Motion Design",
                    "Progressive Web App (PWA) Design",
                    "UX for Emerging Tech (AR/VR, Voice UI, AI)"
                ]
            },
            {
                title: "Module 10: Capstone Projects & Portfolio",
                lessons: [
                    "Building a Complete End-to-End UI/UX Case Study",
                    "Creating a Personal Design Portfolio (Behance / Dribbble)",
                    "Resume & LinkedIn Optimization for Designers",
                    "Personal Branding & Presentation Skills",
                    "Mock Interviews and Industry Expert Review"
                ]
            }
        ];
    }

    // 12. QA Automation
    if (search.includes("qa") || search.includes("testing") || search.includes("automation")) {
        return [
            {
                title: "Module 1: Manual Testing & Software Quality Assurance",
                lessons: [
                    "Introduction to SDLC (Waterfall, Agile, Scrum) & STLC",
                    "Requirement Analysis & Test Scenario Identification",
                    "Test Case Design Techniques (Boundary Value Analysis, Equivalence Partitioning)",
                    "Defect Management: Bug Life Cycle, Severity vs Priority",
                    "Types of Testing: Smoke, Sanity, Regression, Functional vs Non-Functional"
                ]
            },
            {
                title: "Module 2: Java Foundations for Automation",
                lessons: [
                    "Java Environment Setup (JDK, IntelliJ/Eclipse)",
                    "Core Java: Data Types, Variables, Operators, Conditionals & Loops",
                    "Arrays, Strings and Wrapper Classes",
                    "OOPs Concepts: Inheritance, Polymorphism, Abstraction, Encapsulation",
                    "Java Collections Framework: List, Set, Map for Test Data Management",
                    "Exception Handling & File I/O (Properties files)"
                ]
            },
            {
                title: "Module 3: Selenium WebDriver Essentials",
                lessons: [
                    "Selenium Architecture & Component Overview",
                    "Advanced Locators: XPath (Relative/Absolute) & CSS Selectors",
                    "Handling Sync Issues: Implicit, Explicit, and Fluent Waits",
                    "Interacting with Web Elements: Dropdowns, Checkboxes, Radio Buttons",
                    "Handling Alerts, Pop-ups, Frames, and Multiple Windows",
                    "Actions Class: Mouse Hover, Double Click, Drag & Drop",
                    "JavaScript Executor & Taking Screenshots"
                ]
            },
            {
                title: "Module 4: TestNG - Testing Framework",
                lessons: [
                    "TestNG Setup & Annotations Lifecycle (@Before, @After, @Test)",
                    "TestNG.xml Configuration: Suites, Tests, and Groups",
                    "Parameterization & DataProvider for Data-Driven Testing",
                    "Assertions: Hard Assert vs Soft Assert",
                    "Parallel Execution & Multi-Browser Testing",
                    "Generating TestNG Reports & Using Listeners"
                ]
            },
            {
                title: "Module 5: Page Object Model (POM) Design Pattern",
                lessons: [
                    "Understanding POM Benefits and Architecture",
                    "Implementing Page Factory and @FindBy Annotation",
                    "Separating Test Logic from Page Objects",
                    "Creating Reusable Utility Classes & Base Test Setup"
                ]
            },
            {
                title: "Module 6: Advanced Data-Driven Automation",
                lessons: [
                    "Apache POI Library for Excel Data Reading/Writing",
                    "Working with JSON and XML Test Data Files",
                    "Connecting to SQL Databases for Backend Testing",
                    "Integration of DataProviders with External Data Sources"
                ]
            },
            {
                title: "Module 7: API Testing with Rest-Assured",
                lessons: [
                    "API Basics: HTTP Methods, Status Codes, JSON/XML Formats",
                    "Manual API Testing using Postman",
                    "Rest-Assured Library: Given-When-Then BDD Style",
                    "Validating JSON Responses & Schema Validation",
                    "Handling Authentication: OAuth, Bearer Tokens, API Keys"
                ]
            },
            {
                title: "Module 8: CI/CD, Git & Build Tools",
                lessons: [
                    "Version Control with Git: Commit, Push, Pull, Branching",
                    "Maven Build Tool: Dependencies, Plugins, and Profiles",
                    "Jenkins Continuous Integration: Creating Jobs & Pipelines",
                    "Running Selenium Tests in Headless Mode on Cloud Engines"
                ]
            },
            {
                title: "Module 9: BDD Framework with Cucumber",
                lessons: [
                    "Introduction to Behavior Driven Development (BDD)",
                    "Writing Scenarios in Gherkin Language (Feature Files)",
                    "Step Definitions & Runner Class Configuration",
                    "Cucumber Hooks, Tagging, and Data Tables",
                    "Generating Advanced Cucumber HTML Reports"
                ]
            },
            {
                title: "Module 10: Mobile Automation using Appium",
                lessons: [
                    "Appium Architecture & Mobile Automation Setup",
                    "Inspecting Mobile App Elements (Appium Inspector)",
                    "Automating Native, Hybrid, and Web Apps on Android/iOS",
                    "Handling Mobile Gestures: Swipe, Scroll, Long Press"
                ]
            },
            {
                title: "Module 11: End-to-End Hybrid Framework Build",
                lessons: [
                    "Designing a scalable Hybrid Automation Framework",
                    "Integrating Extent Reports or Allure for Rich Visuals",
                    "Log4j for Log Management and Debugging",
                    "Live Industry Project: E-commerce or Banking Application",
                    "Interview Preparation: Resume Workshop & Mock QA Interviews"
                ]
            }
        ];
    }

    // 13. Artificial Intelligence and Machine Learning
    // Updated search logic to catch both full name and shorter 'AI' variations
    if (search.includes("artificial intelligence") || search.includes("machine learning") || (search.includes("ai") && !search.includes("masterclass"))) {
        return [
            {
                title: "Module 1: Python Foundations for AI",
                lessons: [
                    "Introduction to Python (Anaconda, Jupyter, VS Code setup)",
                    "Data Structures: Lists, Tuples, Dictionaries, Sets",
                    "Functions, Modules, and Libraries",
                    "NumPy: Array operations, Broadcasting, Linear Algebra",
                    "Pandas: Data Cleaning, Merging, Grouping, Aggregations",
                    "Matplotlib & Seaborn: Data Visualization"
                ]
            },
            {
                title: "Module 2: Statistics & Mathematics for Machine Learning",
                lessons: [
                    "Descriptive & Inferential Statistics",
                    "Probability, Distributions, and Hypothesis Testing",
                    "Linear Algebra: Vectors, Matrices, Eigenvalues",
                    "Calculus for Optimization (Gradients, Derivatives)",
                    "Correlation, Covariance, and Feature Relationships"
                ]
            },
            {
                title: "Module 3: Machine Learning Fundamentals",
                lessons: [
                    "Supervised Learning",
                    "Linear & Logistic Regression",
                    "Decision Trees, Random Forests",
                    "KNN, Naive Bayes, SVM",
                    "Unsupervised Learning",
                    "K-Means, DBSCAN, Hierarchical Clustering",
                    "PCA, Dimensionality Reduction",
                    "Model Evaluation: Accuracy, Precision, Recall, F1 -Score",
                    "Hyperparameter Tuning, Cross -Validation"
                ]
            },
            {
                title: "Module 4: Deep Learning with TensorFlow & Keras",
                lessons: [
                    "Neural Networks: Perceptron, MLP, Activation Functions",
                    "Backpropagation & Optimization",
                    "TensorFlow Basics (Tensors, Graphs, Sessions)",
                    "Building ANN, CNN, and RNN Models",
                    "Dropout, Batch Normalization, Regularization",
                    "Model Saving, Loading, and Deployment"
                ]
            },
            {
                title: "Module 5: Computer Vision (CV)",
                lessons: [
                    "Object Detection (YOLO, SSD basics)",
                    "Face Detection and Recognition",
                    "Real-Time CV Projects using Webcam"
                ]
            },
            {
                title: "Module 6: Natural Language Processing (NLP)",
                lessons: [
                    "Text Cleaning, Tokenization, Stopword Removal",
                    "Word Embeddings (TF -IDF, Word2Vec, GloVe )",
                    "Sentiment Analysis",
                    "Named Entity Recognition (NER)",
                    "Chatbot Development using NLTK / spaCy",
                    "Transformer Models (Intro to BERT, GPT Concepts)"
                ]
            },
            {
                title: "Module 7: AI Model Deployment & MLOps",
                lessons: [
                    "Introduction to Flask/Django for Model APIs",
                    "Saving Models using Pickle/ Joblib",
                    "Creating REST APIs for ML models",
                    "Dockerizing ML Models",
                    "Cloud Deployment: AWS, Azure, Google Cloud",
                    "Continuous Integration (CI/CD) with GitHub Actions"
                ]
            },
            {
                title: "Module 8: Data Science Integration & Real -World AI",
                lessons: [
                    "End-to-End Data Pipeline (Data Cleaning → ML → Deployment)",
                    "Handling Big Data (Intro to PySpark , Google Colab, Kaggle)",
                    "Building Recommender Systems (Collaborative & Content -Based)",
                    "Time Series Forecasting (ARIMA, Prophet, LSTM)",
                    "AI in Business: Predictive Analytics, Automation, and Chatbots"
                ]
            },
            {
                title: "Module 9: Career Readiness & Industry Certifications",
                lessons: [
                    "Resume Building for AI/ML Roles"
                ]
            }
        ];
    }

    // 14. Multi-Cloud Consultant Masterclass
    if (search.includes("consultant")) {
        return [
            {
                title: "Module 1 : Cloud Computing Foundations",
                lessons: [
                    "Introduction to Cloud Computing – Concepts & Benefits",
                    "Cloud Service Models (IaaS, PaaS, SaaS)",
                    "Cloud Deployment Models – Public, Private, Hybrid, Multi-Cloud",
                    "Understanding Data Centers, Virtualization & Containers",
                    "Overview of Cloud Providers – AWS, Azure, GCP"
                ]
            },
            {
                title: "Module 2: Amazon Web Services (AWS) Essentials",
                lessons: [
                    "AWS Global Infrastructure & Core Services",
                    "Identity and Access Management (IAM)",
                    "Amazon EC2, S3, EBS, VPC",
                    "Load Balancing, Auto Scaling, Route 53",
                    "RDS, DynamoDB, and Lambda",
                    "Monitoring with CloudWatch & Cost Optimization"
                ]
            },
            {
                title: "Module 3: Microsoft Azure Fundamentals",
                lessons: [
                    "Azure Overview and Service Categories",
                    "Azure Resource Manager (ARM), Subscriptions & Billing",
                    "Virtual Machines, Storage Accounts, Azure Networking",
                    "Azure App Service, Azure Functions, and Logic Apps",
                    "Azure SQL, Cosmos DB, and Key Vault",
                    "Azure DevOps and CI/CD Pipelines"
                ]
            },
            {
                title: "Module 4: Google Cloud Platform (GCP) Essentials",
                lessons: [
                    "GCP Overview and Key Services",
                    "Compute Engine, Cloud Storage, and Cloud SQL",
                    "Networking – VPC, Subnets, and Load Balancers",
                    "Identity & Access Management (IAM)",
                    "Kubernetes Engine (GKE) and Cloud Run",
                    "Cloud Monitoring & Logging"
                ]
            },
            {
                title: "Module 5: Multi-Cloud Integration & Architecture",
                lessons: [
                    "Why Multi-Cloud? Benefits and Challenges",
                    "Designing Hybrid and Multi-Cloud Architectures",
                    "Interconnecting AWS, Azure, and GCP",
                    "Multi-Cloud Networking & Security Best Practices",
                    "Cloud Cost Optimization and Governance Tools",
                    "Unified Monitoring and Logging (Grafana, Prometheus, CloudWatch)"
                ]
            },
            {
                title: "Module 6: Cloud Security & Compliance",
                lessons: [
                    "Shared Responsibility Model in Cloud Security",
                    "Identity, Authentication & Authorization (IAM, RBAC)",
                    "Data Encryption and Key Management",
                    "Network Security – Firewalls, Security Groups, VPNs",
                    "Cloud Compliance Standards (ISO, GDPR, HIPAA, SOC2)",
                    "Penetration Testing in Cloud Environments",
                    "Tools: AWS Shield, Azure Defender, GCP Security Command Center",
                    "Project: Secure Multi-Cloud Web App Deployment"
                ]
            },
            {
                title: "Module 7: Cloud Automation & DevOps Integration",
                lessons: [
                    "Infrastructure as Code (IaC) – Terraform & CloudFormation",
                    "CI/CD Pipelines using GitHub Actions, Jenkins, and Azure DevOps",
                    "Configuration Management (Ansible, Chef)",
                    "Container Orchestration – Docker & Kubernetes",
                    "Monitoring & Alerting (CloudWatch, Azure Monitor, Stackdriver)"
                ]
            },
            {
                title: "Module 8: Cloud Migration & Data Management",
                lessons: [
                    "Cloud Migration Strategies (Lift & Shift, Re-Architect, Rebuild)",
                    "Data Migration Tools (AWS DMS, Azure Migrate, GCP Transfer Service)",
                    "Multi-Cloud Storage Solutions",
                    "Disaster Recovery and Backup Planning"
                ]
            },
            {
                title: "Module 9: Cloud Analytics & AI Integration",
                lessons: [
                    "Introduction to Cloud Data Analytics",
                    "AWS Redshift, Azure Synapse, GCP BigQuery",
                    "Cloud Machine Learning Services Overview",
                    "Integrating AI APIs (Vision, NLP, Speech, etc.)"
                ]
            },
            {
                title: "Module 10: Capstone & Career Preparation",
                lessons: [
                    "Building a Multi-Cloud Portfolio",
                    "Resume & LinkedIn Optimization for Cloud Roles",
                    "Mock Interviews (Technical & HR)"
                ]
            }
        ];
    }

    // 15. MEAN Stack Masterclass
    if (search.includes("mean")) {
        return [
            {
                title: "Module 1 : Web & JavaScript Foundations",
                lessons: [
                    "Introduction to Full Stack Development & Client-Server Architecture",
                    "HTML5 & CSS3 Fundamentals, Responsive Design with Bootstrap",
                    "JavaScript (ES6+): Variables, Data Types, Operators",
                    "Conditional Statements, Loops, Functions, Arrays, Objects",
                    "DOM Manipulation, Events, Promises, Async/Await",
                    "Debugging & Browser DevTools"
                ]
            },
            {
                title: "Module 2: Advanced JavaScript & TypeScript",
                lessons: [
                    "JavaScript Advanced Concepts: Closures, Hoisting, Scope",
                    "Modules, Classes, Arrow Functions, Error Handling & Best Practices",
                    "Introduction to TypeScript: Types, Interfaces, Classes, Generics",
                    "TypeScript configuration (tsconfig.json), Type safety and debugging"
                ]
            },
            {
                title: "Module 3: Frontend Development with Angular",
                lessons: [
                    "Introduction to Angular Framework, CLI & Project Setup",
                    "Components, Templates, Modules, Data Binding (One-way & Two-way)",
                    "Directives, Pipes, Services and Dependency Injection",
                    "Routing, Navigation, Forms (Template-driven & Reactive)",
                    "Consuming REST APIs using HttpClient",
                    "State Management Basics (RxJS, Observables, Subjects)",
                    "Authentication, Route Guards, Angular Material & UI Enhancement"
                ]
            },
            {
                title: "Module 4: Backend Development with Node.js",
                lessons: [
                    "Introduction to Node.js & NPM, Node.js Modules (fs, path, events, http)",
                    "Express.js Framework: Routing, Middleware, Requests & Responses",
                    "Template Engines (EJS / Handlebars), Error Handling and Logging",
                    "RESTful API Development with Express, Authentication (JWT / OAuth)",
                    "File Uploads (Multer), Securing APIs with Helmet & CORS"
                ]
            },
            {
                title: "Module 5: Database Management (MongoDB & Mongoose)",
                lessons: [
                    "Introduction to NoSQL Databases, MongoDB Architecture & CRUD",
                    "MongoDB Shell and Compass, Connecting with Node.js using Mongoose",
                    "Schema Design, Data Modeling & Relationships",
                    "Aggregations, Indexing, Validation and Middleware in Mongoose",
                    "Backup, Restore & Cloud Setup (MongoDB Atlas)"
                ]
            },
            {
                title: "Module 6: Full Stack Integration (Connecting Angular + Node + MongoDB)",
                lessons: [
                    "Consuming Node.js APIs in Angular",
                    "Handling Cross-Origin Requests (CORS)",
                    "JWT Authentication Integration",
                    "File Uploads & Data Sync between Angular and Express",
                    "Environment Configurations for Development & Production",
                    "Role-based Authorization"
                ]
            },
            {
                title: "Module 7: Version Control, Testing & Deployment",
                lessons: [
                    "Git & GitHub: Repositories, Branching, Pull Requests",
                    "Testing: Unit Testing (Jasmine & Karma), Backend Testing (Jest/Mocha)",
                    "Docker Basics: Containerizing MEAN Applications",
                    "Cloud Deployment: Hosting Frontend (Netlify/Vercel), Backend (Render/AWS/Heroku)",
                    "MongoDB Atlas Integration, CI/CD Overview"
                ]
            },
            {
                title: "Module 8: DevOps, Agile & API Documentation",
                lessons: [
                    "Agile Methodologies (Scrum, Sprints)",
                    "Deployment Strategies",
                    "API Documentation Fundamentals"
                ]
            }
        ];
    }

    // 16. AI & Machine Learning Masterclass
    if (search.includes("ai") && search.includes("machine learning") && search.includes("masterclass")) {
        return [
            {
                title: "Module 1: Python Foundations for AI",
                lessons: [
                    "Introduction to Python (Anaconda, Jupyter, VS Code)",
                    "Data Structures: Lists, Tuples, Dictionaries, Sets",
                    "Functions, Modules, Libraries",
                    "NumPy, Pandas, Matplotlib & Seaborn"
                ]
            },
            {
                title: "Module 2: Statistics & Mathematics for Machine Learning",
                lessons: [
                    "Descriptive & Inferential Statistics, Probability, Distributions",
                    "Linear Algebra: Vectors, Matrices, Eigenvalues",
                    "Calculus for Optimization, Correlation, Covariance"
                ]
            },
            {
                title: "Module 3: Machine Learning Fundamentals",
                lessons: [
                    "Supervised Learning: Regression, Decision Trees, Random Forests, KNN, SVM",
                    "Unsupervised Learning: K-Means, DBSCAN, PCA",
                    "Model Evaluation, Hyperparameter Tuning, Cross-Validation"
                ]
            },
            {
                title: "Module 4: Deep Learning with TensorFlow & Keras",
                lessons: [
                    "Neural Networks: Perceptron, MLP, Activation Functions",
                    "Backpropagation & Optimization",
                    "TensorFlow Basics, Building ANN, CNN, RNN Models",
                    "Dropout, Batch Normalization, regularization, Model Deployment"
                ]
            },
            {
                title: "Module 5: Computer Vision (CV)",
                lessons: [
                    "Object Detection (YOLO, SSD basics)",
                    "Face Detection and Recognition",
                    "Real-Time CV Projects using Webcam"
                ]
            },
            {
                title: "Module 6: Natural Language Processing (NLP)",
                lessons: [
                    "Text Cleaning, Tokenization, Stopwords, Word Embeddings (Word2Vec, GloVe)",
                    "Sentiment Analysis, Named Entity Recognition (NER), Chatbots",
                    "Transformer Models (Intro to BERT, GPT)"
                ]
            },
            {
                title: "Module 7: AI Model Deployment & MLOps",
                lessons: [
                    "Flask/Django for Model APIs, Saving Models (Pickle/Joblib)",
                    "Dockerizing ML Models, Cloud Deployment (AWS, Azure, GCP)",
                    "CI/CD with GitHub Actions"
                ]
            },
            {
                title: "Module 8: Data Science Integration & Real-World AI",
                lessons: [
                    "End-to-End Data Pipeline, Handling Big Data (PySpark)",
                    "Recommender Systems, Time Series Forecasting",
                    "AI in Business: Predictive Analytics, Automation"
                ]
            },
            {
                title: "Module 9: Career Readiness & Industry Certifications",
                lessons: [
                    "Resume Building for AI/ML Roles, Mock Interviews",
                    "GitHub Portfolio Setup, Freelancing & Research Opportunities"
                ]
            }
        ];
    }

    // 17. Data Engineering Masterclass
    if (search.includes("data") && search.includes("engineering")) {
        return [
            {
                title: "Module 1: Python for Data Engineering (Foundations)",
                lessons: [
                    "Python Refresher: Syntax, Data Types, Loops, Functions",
                    "Working with Files (CSV, JSON, XML)",
                    "Data Manipulation using Pandas & NumPy",
                    "Working with APIs (Requests, JSON Parsing)",
                    "Exception Handling and Logging",
                    "Writing Modular & Efficient Code"
                ]
            },
            {
                title: "Module 2: Databases & SQL Mastery",
                lessons: [
                    "SQL Fundamentals (DDL, DML, Joins, Subqueries)",
                    "Advanced SQL (CTEs, Window Functions, Optimization)",
                    "Database Design & Normalization",
                    "Relational Databases: MySQL, PostgreSQL",
                    "NoSQL Databases: MongoDB, Cassandra, Redis",
                    "Python Integration using SQLAlchemy / psycopg2 / PyMongo"
                ]
            },
            {
                title: "Module 3: Data Extraction, Transformation & Loading (ETL/ELT)",
                lessons: [
                    "Introduction to ETL Pipelines",
                    "Data Ingestion from APIs, CSV, Excel, and Databases",
                    "Building Pipelines using Airflow / Luigi",
                    "Data Cleaning & Transformation with Pandas & PySpark",
                    "Workflow Orchestration Concepts",
                    "Scheduling, Monitoring, and Logging Pipelines"
                ]
            },
            {
                title: "Module 4: Big Data Ecosystem",
                lessons: [
                    "Introduction to Big Data & Hadoop Architecture",
                    "HDFS, YARN, MapReduce Concepts",
                    "Apache Spark – Core, DataFrames, and SparkSQL",
                    "PySpark Programming (RDDs, Transformations, Actions)",
                    "Spark Streaming & Kafka Integration",
                    "Hive & Impala Basics for Data Querying"
                ]
            },
            {
                title: "Module 5: Multi-Cloud Data Engineering (AWS, Azure, GCP)",
                lessons: [
                    "Cloud Fundamentals: Regions, IAM, Networking",
                    "AWS: S3, Redshift, Lambda, Glue, EMR, Athena",
                    "Azure: Data Factory, Synapse Analytics, Blob Storage",
                    "GCP: BigQuery, Dataflow, Pub/Sub, Dataproc",
                    "Cross-cloud data migration and interoperability",
                    "Cost optimization and data governance across clouds"
                ]
            },
            {
                title: "Module 6: Data Warehousing & Data Lakes",
                lessons: [
                    "Data Warehousing Concepts & Architecture",
                    "Star & Snowflake Schema Design",
                    "Implementing Data Warehouses using Snowflake, Redshift, BigQuery",
                    "Data Lake Concepts (Raw, Processed, Curated Zones)",
                    "Designing a Lakehouse using Delta Lake / Apache Iceberg",
                    "Query Federation and Data Virtualization"
                ]
            },
            {
                title: "Module 7: APIs, Streaming & Real-Time Data Processing",
                lessons: [
                    "Introduction to Event-Driven Architectures",
                    "Working with Kafka Producers and Consumers",
                    "Stream Processing with Apache Spark Streaming / Flink",
                    "Building REST APIs with FastAPI / Flask for Data Services",
                    "Real-time Dashboards using Power BI / Tableau / Streamlit"
                ]
            },
            {
                title: "Module 8: DevOps for Data Engineering",
                lessons: [
                    "Version Control using Git & GitHub",
                    "Containerization with Docker",
                    "Infrastructure as Code (IaC) – Terraform Basics",
                    "Continuous Integration & Deployment (CI/CD)",
                    "Introduction to Kubernetes for Data Pipeline Orchestration",
                    "Monitoring Data Workflows using Prometheus / Grafana"
                ]
            },
            {
                title: "Module 9: Advanced Topics & Data Governance",
                lessons: [
                    "Data Security & Compliance (GDPR, HIPAA, PII Management)",
                    "Data Quality, Validation & Observability",
                    "Metadata Management with Apache Atlas / Amundsen",
                    "Data Catalogs & Lineage Tracking",
                    "ML Pipelines Integration (MLOps Concepts)"
                ]
            },
            {
                title: "Module 10: Capstone & Career Readiness",
                lessons: [
                    "Resume & LinkedIn Branding for Data Engineers",
                    "Mock Technical Interviews (SQL, Python, Cloud, ETL)",
                    "Portfolio Project Presentation",
                    "Networking & Industry Exposure (Guest Sessions / Meetups)"
                ]
            }
        ];
    }

    // Default Fallback Curriculum
    return [
        {
            title: "Module 1: Foundations",
            lessons: ["Basic concepts", "Environment setup", "Introductory projects"]
        },
        {
            title: "Module 2: Advanced Topics",
            lessons: ["Advanced techniques", "Framework deep-dive", "Best practices"]
        },
        {
            title: "Module 3: Capstone Project",
            lessons: ["Real-world application", "Final implementation", "Presentation"]
        }
    ];
};
