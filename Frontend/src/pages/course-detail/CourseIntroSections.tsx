import React from "react";
import { motion } from "framer-motion";
import { Bot, Coffee, CheckCircle2, Monitor, Layers } from "lucide-react";

interface KeyPoint {
    title: string;
    sub: string;
    bgGradient: string;
    borderColor: string;
    iconColor: string;
}

interface Section {
    type: string;
    content: {
        heading?: string;
        text?: string;
        description?: string | React.ReactNode;
        image?: string;
        badge?: string;
        keyPoints?: KeyPoint[];
    };
    title?: string;
}

interface CourseIntroSectionsProps {
    customSections: Section[];
}

export const CourseIntroSections = ({ customSections }: CourseIntroSectionsProps) => {
    return (
        <>
            {/* 0. ABOUT US Section */}
            {customSections.filter((s) => s.type === "about_us").map((section, idx) => (
                <section key={`about-us-${idx}`} id="overview" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-8">
                    <div className="flex items-center gap-2 mb-6">
                        <h2 className="text-2xl font-bold text-slate-900 uppercase">ABOUT US - Best Training in Vijayawada</h2>
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6 sm:p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">{section.content.heading}</h3>
                        <p className="text-slate-700 leading-relaxed">
                            {section.content.text}
                        </p>
                    </div>
                </section>
            ))}

            {/* Introduction Sections with SVGs */}
            {customSections.map((section, idx) => {
                switch (section.type) {
                    case "data_science_introduction":
                        return <DataScienceIntro key={idx} section={section} />;
                    case "data_analytics_introduction":
                        return <DataAnalyticsIntro key={idx} section={section} />;
                    case "cyber_security_introduction":
                        return <CyberSecurityIntro key={idx} section={section} />;
                    case "python_fullstack_introduction":
                        return <PythonFullStackIntro key={idx} section={section} />;
                    case "devops_multicloud_introduction":
                        return <DevOpsIntro key={idx} section={section} />;
                    case "embedded_introduction":
                        return <EmbeddedIntro key={idx} section={section} />;
                    case "multicloud_engineering_introduction":
                        return <MultiCloudEngIntro key={idx} section={section} />;
                    case "quantum_introduction":
                        return <QuantumIntro key={idx} section={section} />;
                    case "multicloud_introduction":
                        return <MultiCloudConsultantIntro key={idx} section={section} />;
                    case "mern_introduction":
                        return <MernIntro key={idx} section={section} />;
                    case "mean_stack_introduction":
                        return <MeanIntro key={idx} section={section} />;
                    case "ai_ml_introduction":
                        return <AiMlIntro key={idx} section={section} />;
                    case "java_fullstack_introduction":
                        return <JavaIntro key={idx} section={section} />;
                    case "qa_automation_introduction":
                        return <QaIntro key={idx} section={section} />;
                    case "ui_ux_highlight":
                        return <UiUxIntro key={idx} section={section} />;
                    default:
                        return null;
                }
            })}
        </>
    );
};

// Sub-components for each intro type
const DataScienceIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-900 leading-tight text-center sm:text-left">
                    DATA<br />SCIENCE
                </h2>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="12" fill="#8B5CF6" />
                        <ellipse cx="100" cy="100" rx="60" ry="30" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                        <ellipse cx="100" cy="100" rx="30" ry="60" fill="none" stroke="#EC4899" strokeWidth="2" opacity="0.6" />
                        <ellipse cx="100" cy="100" rx="50" ry="50" fill="none" stroke="#10B981" strokeWidth="2" opacity="0.6" />
                        <circle cx="160" cy="100" r="6" fill="#3B82F6">
                            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="100" cy="40" r="6" fill="#EC4899">
                            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="135" cy="135" r="6" fill="#10B981">
                            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="5s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-600 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop"
                            alt="Data Science Analytics"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const DataAnalyticsIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-600 leading-tight text-center sm:text-left">
                    DATA<br />ANALYTICS
                </h2>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <rect x="30" y="120" width="30" height="60" fill="#FF6B35" rx="4">
                            <animate attributeName="height" values="60;80;60" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="y" values="120;100;120" dur="2s" repeatCount="indefinite" />
                        </rect>
                        <rect x="70" y="80" width="30" height="100" fill="#FF8C42" rx="4">
                            <animate attributeName="height" values="100;120;100" dur="2.5s" repeatCount="indefinite" />
                            <animate attributeName="y" values="80;60;80" dur="2.5s" repeatCount="indefinite" />
                        </rect>
                        <rect x="110" y="60" width="30" height="120" fill="#FFA552" rx="4">
                            <animate attributeName="height" values="120;140;120" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="y" values="60;40;60" dur="3s" repeatCount="indefinite" />
                        </rect>
                        <rect x="150" y="90" width="30" height="90" fill="#FFB562" rx="4">
                            <animate attributeName="height" values="90;110;90" dur="2.2s" repeatCount="indefinite" />
                            <animate attributeName="y" values="90;70;90" dur="2.2s" repeatCount="indefinite" />
                        </rect>
                        <line x1="20" y1="180" x2="190" y2="180" stroke="#334155" strokeWidth="2" />
                        <line x1="20" y1="30" x2="20" y2="180" stroke="#334155" strokeWidth="2" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-cyan-600 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop"
                            alt="Data Analytics Dashboard"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const CyberSecurityIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-red-600 leading-tight text-center sm:text-left">
                    CYBER<br />SECURITY
                </h2>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path d="M100,20 C70,20 50,50 50,90 L50,130 C50,150 70,170 100,170 C130,170 150,150 150,130 L150,90 C150,50 130,20 100,20 Z" fill="#DC2626" opacity="0.1" />
                        <path d="M60,130 L60,180 L140,180 L140,130" fill="#EF4444" stroke="#B91C1C" strokeWidth="4" />
                        <circle cx="100" cy="90" r="30" fill="#FEF2F2" stroke="#B91C1C" strokeWidth="4" />
                        <rect x="80" y="80" width="40" height="15" rx="5" fill="#1F2937" />
                        <rect x="85" y="83" width="12" height="8" rx="2" fill="#3B82F6" opacity="0.8" />
                        <rect x="103" y="83" width="12" height="8" rx="2" fill="#3B82F6" opacity="0.8" />
                        <path d="M100,10 C60,10 40,50 40,100 L40,130 L60,130 L60,100 C60,60 75,30 100,30 C125,30 140,60 140,100 L140,130 L160,130 L160,100 C160,50 140,10 100,10 Z" fill="#B91C1C" />
                        <text x="100" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="bold">&lt;/&gt;</text>
                    </svg>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-red-600 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=500&fit=crop"
                            alt="Cyber Security Lock"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const PythonFullStackIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-blue-600 leading-tight text-center sm:text-left">
                    <span className="flex items-center justify-center sm:justify-start gap-3">
                        PYTHON
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-10 h-10 sm:w-14 sm:h-14 animate-bounce-slow" />
                    </span>
                    FULL STACK
                </h2>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56"></div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                        <img
                            src="/images/python-course-card.jpg"
                            alt="Python Full Stack Development"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const DevOpsIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 leading-tight text-center sm:text-left">
                    DEVOPS<br />MULTI-CLOUD<br />ENGINEERING
                </h2>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path d="M 50 100 Q 75 70, 100 100 Q 125 130, 150 100 Q 125 70, 100 100 Q 75 130, 50 100 Z" fill="none" stroke="#2563EB" strokeWidth="8" opacity="0.6" />
                        <circle cx="70" cy="100" r="25" fill="#22D3EE" opacity="0.7" />
                        <text x="70" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Dev</text>
                        <circle cx="130" cy="100" r="25" fill="#3B82F6" opacity="0.7" />
                        <text x="130" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Ops</text>
                        <path d="M 95 90 L 105 90" stroke="#10B981" strokeWidth="3" markerEnd="url(#arrowhead)" />
                        <path d="M 105 110 L 95 110" stroke="#10B981" strokeWidth="3" markerEnd="url(#arrowhead)" />
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#10B981" />
                            </marker>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 p-4">
                            <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xs">AWS</span>
                            </div>
                            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xs">Azure</span>
                            </div>
                            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xs">GCP</span>
                            </div>
                            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">✓</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const EmbeddedIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-center sm:text-left text-[#8B4513]">
                    EMBEDDED<br />SYSTEMS
                </h2>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <rect x="50" y="50" width="100" height="100" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="3" rx="5" />
                        <rect x="30" y="65" width="20" height="6" fill="#60A5FA" />
                        <rect x="30" y="80" width="20" height="6" fill="#60A5FA" />
                        <rect x="30" y="95" width="20" height="6" fill="#60A5FA" />
                        <rect x="30" y="110" width="20" height="6" fill="#60A5FA" />
                        <rect x="30" y="125" width="20" height="6" fill="#60A5FA" />
                        <rect x="150" y="65" width="20" height="6" fill="#60A5FA" />
                        <rect x="150" y="80" width="20" height="6" fill="#60A5FA" />
                        <rect x="150" y="95" width="20" height="6" fill="#60A5FA" />
                        <rect x="150" y="110" width="20" height="6" fill="#60A5FA" />
                        <rect x="150" y="125" width="20" height="6" fill="#60A5FA" />
                        <rect x="65" y="30" width="6" height="20" fill="#60A5FA" />
                        <rect x="80" y="30" width="6" height="20" fill="#60A5FA" />
                        <rect x="95" y="30" width="6" height="20" fill="#60A5FA" />
                        <rect x="110" y="30" width="6" height="20" fill="#60A5FA" />
                        <rect x="125" y="30" width="6" height="20" fill="#60A5FA" />
                        <rect x="65" y="150" width="6" height="20" fill="#60A5FA" />
                        <rect x="80" y="150" width="6" height="20" fill="#60A5FA" />
                        <rect x="95" y="150" width="6" height="20" fill="#60A5FA" />
                        <rect x="110" y="150" width="6" height="20" fill="#60A5FA" />
                        <rect x="125" y="150" width="6" height="20" fill="#60A5FA" />
                        <circle cx="100" cy="100" r="20" fill="none" stroke="#60A5FA" strokeWidth="2" />
                        <rect x="90" y="90" width="20" height="20" fill="#60A5FA" opacity="0.3" />
                        <line x1="70" y1="100" x2="130" y2="100" stroke="#60A5FA" strokeWidth="1.5" />
                        <line x1="100" y1="70" x2="100" y2="130" stroke="#60A5FA" strokeWidth="1.5" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop"
                            alt="Embedded Systems Hardware"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const MultiCloudEngIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cyan-500 leading-tight text-center sm:text-left">
                    MULTI-<br />CLOUD<br />ENGINEERING
                </h2>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <ellipse cx="100" cy="80" rx="45" ry="30" fill="#22D3EE" opacity="0.8" />
                        <ellipse cx="80" cy="85" rx="30" ry="22" fill="#22D3EE" opacity="0.8" />
                        <ellipse cx="120" cy="85" rx="30" ry="22" fill="#22D3EE" opacity="0.8" />
                        <circle cx="60" cy="120" r="8" fill="#EF4444" />
                        <circle cx="100" cy="140" r="8" fill="#10B981" />
                        <circle cx="140" cy="120" r="8" fill="#F59E0B" />
                        <line x1="100" y1="95" x2="60" y2="120" stroke="#64748B" strokeWidth="2" />
                        <line x1="100" y1="95" x2="100" y2="140" stroke="#64748B" strokeWidth="2" />
                        <line x1="100" y1="95" x2="140" y2="120" stroke="#64748B" strokeWidth="2" />
                        <circle cx="80" cy="108" r="3" fill="#22D3EE">
                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="100" cy="118" r="3" fill="#22D3EE">
                            <animate attributeName="r" values="3;5;3" dur="2s" begin="0.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="120" cy="108" r="3" fill="#22D3EE">
                            <animate attributeName="r" values="3;5;3" dur="2s" begin="1s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop"
                            alt="Multi-Cloud Data Engineering"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const QuantumIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 leading-tight text-center sm:text-left">
                    QUANTUM<br />COMPUTING
                </h2>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <rect x="40" y="40" width="120" height="120" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="3" rx="8" />
                        <rect x="20" y="60" width="20" height="8" fill="#60A5FA" />
                        <rect x="20" y="80" width="20" height="8" fill="#60A5FA" />
                        <rect x="20" y="100" width="20" height="8" fill="#60A5FA" />
                        <rect x="20" y="120" width="20" height="8" fill="#60A5FA" />
                        <rect x="160" y="60" width="20" height="8" fill="#60A5FA" />
                        <rect x="160" y="80" width="20" height="8" fill="#60A5FA" />
                        <rect x="160" y="100" width="20" height="8" fill="#60A5FA" />
                        <rect x="160" y="120" width="20" height="8" fill="#60A5FA" />
                        <rect x="60" y="20" width="8" height="20" fill="#60A5FA" />
                        <rect x="80" y="20" width="8" height="20" fill="#60A5FA" />
                        <rect x="100" y="20" width="8" height="20" fill="#60A5FA" />
                        <rect x="120" y="20" width="8" height="20" fill="#60A5FA" />
                        <rect x="60" y="160" width="8" height="20" fill="#60A5FA" />
                        <rect x="80" y="160" width="8" height="20" fill="#60A5FA" />
                        <rect x="100" y="160" width="8" height="20" fill="#60A5FA" />
                        <rect x="120" y="160" width="8" height="20" fill="#60A5FA" />
                        <circle cx="100" cy="100" r="25" fill="none" stroke="#60A5FA" strokeWidth="2" />
                        <circle cx="100" cy="100" r="5" fill="#60A5FA" />
                        <ellipse cx="100" cy="100" rx="25" ry="10" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" />
                        <ellipse cx="100" cy="100" rx="10" ry="25" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" />
                        <circle cx="125" cy="100" r="3" fill="#60A5FA" />
                        <circle cx="100" cy="75" r="3" fill="#60A5FA" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-600 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-6xl sm:text-7xl font-black text-cyan-400">Q</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const MultiCloudConsultantIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 leading-tight text-center sm:text-left">
                    MULTI-<br />CLOUD<br />CONSULTANT
                </h2>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2" />
                        <ellipse cx="70" cy="70" rx="25" ry="18" fill="#FF9900" opacity="0.8" />
                        <ellipse cx="60" cy="75" rx="15" ry="12" fill="#FF9900" opacity="0.8" />
                        <ellipse cx="80" cy="75" rx="15" ry="12" fill="#FF9900" opacity="0.8" />
                        <ellipse cx="130" cy="70" rx="25" ry="18" fill="#0078D4" opacity="0.8" />
                        <ellipse cx="120" cy="75" rx="15" ry="12" fill="#0078D4" opacity="0.8" />
                        <ellipse cx="140" cy="75" rx="15" ry="12" fill="#0078D4" opacity="0.8" />
                        <ellipse cx="100" cy="120" rx="30" ry="20" fill="#4285F4" opacity="0.8" />
                        <ellipse cx="85" cy="125" rx="18" ry="14" fill="#4285F4" opacity="0.8" />
                        <ellipse cx="115" cy="125" rx="18" ry="14" fill="#4285F4" opacity="0.8" />
                        <line x1="70" y1="85" x2="90" y2="110" stroke="#64748B" strokeWidth="2" strokeDasharray="4,4" />
                        <line x1="130" y1="85" x2="110" y2="110" stroke="#64748B" strokeWidth="2" strokeDasharray="4,4" />
                        <circle cx="100" cy="100" r="15" fill="#fff" stroke="#0EA5E9" strokeWidth="2" />
                        <circle cx="100" cy="100" r="3" fill="#0EA5E9" />
                        <line x1="100" y1="85" x2="100" y2="115" stroke="#0EA5E9" strokeWidth="1.5" />
                        <ellipse cx="100" cy="100" rx="15" ry="8" fill="none" stroke="#0EA5E9" strokeWidth="1.5" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop"
                            alt="Multi-Cloud Infrastructure"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const MernIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-green-600 leading-tight">
                    MERN<br />STACK
                </h2>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path d="M100 10 L160 40 L160 100 L100 160 L40 100 L40 40 Z" fill="#fff" stroke="#ddd" strokeWidth="2" />
                        <path d="M100 10 L160 40 L100 100 Z" fill="#68A063" />
                        <path d="M160 40 L160 100 L100 100 Z" fill="#E23237" />
                        <path d="M100 100 L40 100 L40 40 Z" fill="#61DAFB" />
                        <path d="M100 100 L100 160 L40 100 Z" fill="#8CC84B" />
                        <circle cx="100" cy="100" r="25" fill="#fff" stroke="#333" strokeWidth="2" />
                        <text x="100" y="75" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333">M</text>
                        <text x="125" y="100" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333">ex</text>
                        <text x="75" y="100" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333">R</text>
                        <text x="100" y="125" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333">N</text>
                    </svg>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop"
                            alt="MERN Development"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const MeanIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#FF5722] leading-tight text-center sm:text-left">
                    MEAN<br />STACK
                </h2>
                <div className="relative">
                    <Layers className="w-32 h-32 sm:w-40 sm:h-40 text-[#FF5722] animate-bounce-slow" />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                    <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#FF5722] animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src={section.content.image}
                            alt="MEAN Stack Development"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const AiMlIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#00BADB] leading-tight text-center sm:text-left">
                    Artificial<br />Intelligence (AI) &<br />Machine Learning
                </h2>
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20 rounded-full animate-pulse"></div>
                    <Bot className="relative w-32 h-32 sm:w-40 sm:h-40 text-[#00BADB] animate-bounce-slow" />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                    <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#00BADB] animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src={section.content.image}
                            alt="AI & Machine Learning"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const JavaIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#E76F00] leading-tight text-center sm:text-left">
                    JAVA<br />FULL STACK
                </h2>
                <div className="relative">
                    <div className="absolute inset-0 bg-orange-200 blur-xl opacity-20 rounded-full animate-pulse"></div>
                    <Coffee className="relative w-32 h-32 sm:w-40 sm:h-40 text-[#E76F00] animate-bounce-slow" />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                    <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#E76F00] animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src={section.content.image}
                            alt="Java Full Stack"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const QaIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center sm:items-start gap-6">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#10B981] leading-tight text-center sm:text-left">
                    QA<br />AUTOMATION
                </h2>
                <div className="relative">
                    <div className="absolute inset-0 bg-green-200 blur-xl opacity-20 rounded-full animate-pulse"></div>
                    <CheckCircle2 className="relative w-32 h-32 sm:w-40 sm:h-40 text-[#10B981] animate-bounce-slow" />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                    <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#10B981] animate-spin-slow"></div>
                    <div className="absolute inset-4 rounded-full bg-slate-50 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=600&fit=crop"
                            alt="QA Testing"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-bold text-slate-700 text-sm">100% Bug Free</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            {section.content.description}
        </div>
    </section>
);

const UiUxIntro = ({ section }: { section: Section }) => (
    <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="relative">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#8B3A3A] leading-tight whitespace-pre-line">
                        {section.title}
                    </h2>
                </div>
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                        <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-600 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-800 to-slate-600 overflow-hidden shadow-2xl">
                        <div className="w-full h-full flex items-center justify-center text-white text-6xl sm:text-7xl font-black">
                            {section.content.badge}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                {section.content.description}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                {section.content.keyPoints?.map((point, kIdx: number) => (
                    <div key={kIdx} className={`bg-gradient-to-br ${point.bgGradient} rounded-xl p-5 border ${point.borderColor}`}>
                        <div className="flex items-start gap-3">
                            <div className={`w-8 h-8 rounded-full ${point.iconColor} flex items-center justify-center flex-shrink-0`}>
                                <CheckCircle2 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">{point.title}</h4>
                                <p className="text-sm text-slate-600">{point.sub}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
