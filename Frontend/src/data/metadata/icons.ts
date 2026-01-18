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
