import { useState } from "react";
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import {
    ArrowRight,
    Heart,
    Users,
    TrendingUp,
    Award,
    Lightbulb,
    Target,
    MapPin,
    Clock,
    Briefcase,
    Send,
    Mail,
    ChevronRight,
    Sparkles,
    BookOpen,
    Zap
} from "lucide-react";
import { motion } from "framer-motion";

interface JobPosition {
    id: number;
    title: string;
    department: string;
    location: string;
    experience: string;
    type: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
}

const jobPositions: JobPosition[] = [
    {
        id: 1,
        title: "Technical Trainer",
        department: "Training & Education",
        location: "Vijayawada / Hybrid",
        experience: "2-5 years",
        type: "Full-time",
        description: "Shape the future of tech education in Vijayawada. Help students master cutting-edge technologies and build successful careers in the IT industry.",
        requirements: [
            "Strong expertise in Full Stack, Data Science, or Cloud technologies",
            "Passion for teaching and mentoring",
            "Excellent communication skills",
            "Industry experience in software development"
        ],
        responsibilities: [
            "Deliver engaging training sessions",
            "Mentor students on real-world projects",
            "Create and update course materials",
            "Support students' career growth"
        ]
    },
    {
        id: 2,
        title: "Full Stack Developer",
        department: "Technology",
        location: "Vijayawada / Hybrid",
        experience: "1-3 years",
        type: "Full-time",
        description: "Build innovative learning platforms at AOTMS Vijayawada. Create tools that empower thousands of students across Andhra Pradesh and beyond.",
        requirements: [
            "Proficiency in React, Node.js, and MongoDB",
            "Experience with modern web development practices",
            "Problem-solving mindset",
            "Team collaboration skills"
        ],
        responsibilities: [
            "Develop and maintain learning management systems",
            "Build interactive student dashboards",
            "Optimize platform performance",
            "Collaborate with trainers and students"
        ]
    },
    {
        id: 3,
        title: "Placement Coordinator",
        department: "Career Services",
        location: "Vijayawada",
        experience: "1-3 years",
        type: "Full-time",
        description: "Bridge the gap between education and employment in Vijayawada. Connect talented students with top companies and help them launch successful tech careers.",
        requirements: [
            "Experience in recruitment or campus placements",
            "Strong networking and relationship-building skills",
            "Understanding of IT industry trends",
            "Excellent interpersonal communication"
        ],
        responsibilities: [
            "Build relationships with hiring companies",
            "Organize placement drives and interviews",
            "Guide students through the job search process",
            "Track and improve placement success rates"
        ]
    },
    {
        id: 4,
        title: "Marketing Executive",
        department: "Marketing & Outreach",
        location: "Vijayawada / Hybrid",
        experience: "1-2 years",
        type: "Full-time",
        description: "Amplify AOTMS's impact across Vijayawada and Andhra Pradesh. Share our story and help more students discover quality, career-focused tech education.",
        requirements: [
            "Experience in digital marketing and social media",
            "Creative content creation skills",
            "Knowledge of SEO and online advertising",
            "Data-driven approach to campaigns"
        ],
        responsibilities: [
            "Plan and execute marketing campaigns",
            "Manage social media presence",
            "Create engaging content for students",
            "Analyze campaign performance"
        ]
    },
    {
        id: 5,
        title: "Student Support Executive",
        department: "Student Success",
        location: "Vijayawada",
        experience: "0-2 years",
        type: "Full-time",
        description: "Be the supportive guide for students at AOTMS Vijayawada. Help them navigate their learning journey with confidence and achieve their career goals.",
        requirements: [
            "Empathy and patience in student interactions",
            "Problem-solving and organizational skills",
            "Good communication abilities",
            "Passion for helping others succeed"
        ],
        responsibilities: [
            "Assist students with course-related queries",
            "Coordinate between students and trainers",
            "Maintain student records and feedback",
            "Ensure positive student experience"
        ]
    }
];

const whyWorkHere = [
    {
        icon: BookOpen,
        title: "Continuous Learning & Development",
        description: "Access to premium courses, industry workshops, and professional certifications. We invest ₹50,000+ annually per employee in skill development. Learn from industry experts, attend tech conferences, and stay ahead with cutting-edge technologies. Your growth is our priority."
    },
    {
        icon: Users,
        title: "Collaborative & Supportive Team",
        description: "Work alongside passionate educators, experienced developers, and industry professionals in Vijayawada. Our team culture emphasizes mentorship, knowledge sharing, and mutual support. Regular team-building activities, open communication, and a friendly work environment make AOTMS feel like family."
    },
    {
        icon: TrendingUp,
        title: "Clear Career Progression",
        description: "Transparent career paths from intern to leadership roles. Annual performance reviews, skill-based promotions, and merit-based salary increments. We promote 70% of our leadership positions from within. Your dedication and growth are recognized and rewarded at AOTMS Vijayawada."
    },
    {
        icon: Lightbulb,
        title: "Innovation & Ownership",
        description: "Your ideas shape our future. Lead projects, experiment with new teaching methods, and implement innovative solutions. We encourage creative thinking and give you the autonomy to make decisions. See your contributions directly impact 2000+ students annually across Andhra Pradesh."
    },
    {
        icon: Award,
        title: "Industry Exposure & Networking",
        description: "Connect with 50+ hiring partners, attend tech meetups in Vijayawada, and collaborate with industry leaders. Guest lectures from tech professionals, participation in hackathons, and exposure to real-world projects. Build a strong professional network in Andhra Pradesh's growing tech ecosystem."
    },
    {
        icon: Heart,
        title: "Purpose-Driven Impact",
        description: "Make a real difference every day. Help students from diverse backgrounds launch successful tech careers. Witness transformations as students land jobs at top companies. Your work directly contributes to reducing the skill gap in India's IT industry. This is work that truly matters."
    }
];

const cultureHighlights = [
    {
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        caption: "We grow together",
        description: "Team collaboration and knowledge sharing"
    },
    {
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
        caption: "Learning never stops",
        description: "Continuous training and development"
    },
    {
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
        caption: "Real impact, real people",
        description: "Making a difference in students' lives"
    }
];

const careerPath = [
    { stage: "Intern / Trainee", description: "Learn fundamentals, shadow experienced professionals, contribute to real projects, and build your foundation in tech education" },
    { stage: "Junior Professional", description: "Take ownership of tasks, develop specialized skills, mentor new joiners, and establish yourself as a reliable team member" },
    { stage: "Senior Professional", description: "Lead projects independently, mentor teams, drive innovation, and become a subject matter expert in your domain" },
    { stage: "Team Lead / Manager", description: "Shape strategy, build high-performing teams, influence organizational decisions, and drive AOTMS's growth in Vijayawada" },
    { stage: "Head of Department", description: "Define vision, lead multiple teams, partner with leadership, and create lasting impact on thousands of students across India" }
];

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
    const [showJobDetails, setShowJobDetails] = useState(false);

    const handleViewDetails = (job: JobPosition) => {
        setSelectedJob(job);
        setShowJobDetails(true);
    };

    const handleApply = () => {
        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
        setShowJobDetails(false);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <Helmet>
                <title>Careers in Vijayawada - Join AOTMS Team | IT Training Jobs</title>
                <meta name="description" content="Explore career opportunities at AOTMS Vijayawada. Join Andhra Pradesh's leading IT training institute. Openings for trainers, developers, placement coordinators & more." />
                <meta name="keywords" content="IT jobs Vijayawada, tech careers Vijayawada, training jobs Andhra Pradesh, AOTMS careers, education jobs Vijayawada, placement coordinator jobs, technical trainer jobs" />
                <meta property="og:title" content="Careers at AOTMS Vijayawada | Build Your Future in EdTech" />
                <meta property="og:description" content="Join AOTMS Vijayawada and shape the future of tech education. Explore exciting career opportunities with growth, learning, and impact." />
                <link rel="canonical" href="https://aotms.in/careers" />
            </Helmet>

            {/* Hero Section - People-Focused */}
            <section className="pt-32 md:pt-40 pb-12 md:pb-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
                                <Sparkles className="w-4 h-4 text-[#0075CF]" />
                                <span className="text-[#0075CF] text-sm font-semibold">We're Hiring</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                                Launch Your IT Career with
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">
                                    Vijayawada’s Leading EdTech Institute
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-900 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
                                Build the future of tech education with AOTMS Vijayawada. Join Andhra Pradesh’s premier
                                IT training institute and grow with a team driving innovation across India.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button
                                    onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-[#0075CF] hover:bg-[#0066CC] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 text-lg"
                                >
                                    View Open Roles
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => document.getElementById('life-at-aotms')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-full transition-all border-2 border-slate-200 hover:border-[#0075CF] hover:scale-105 text-lg"
                                >
                                    Life at AOTMS
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Image - Real Team Photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-12 max-w-5xl mx-auto"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop"
                                alt="AOTMS Team"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-2xl font-bold">Our Team, Our Family</p>
                                <p className="text-blue-100">Empowering tech careers in Vijayawada, Andhra Pradesh</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Work at AOTMS */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                            Why Work at AOTMS Vijayawada?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Join Andhra Pradesh's most innovative IT training institute. More than a job—it's a career where you grow,
                            contribute, and create lasting impact in tech education.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {whyWorkHere.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-[#0075CF]/30 hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0075CF] to-[#0066CC] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Life at AOTMS - Culture Section */}
            <section id="life-at-aotms" className="py-16 md:py-24 bg-gradient-to-br from-blue-50/50 via-white to-slate-50 scroll-mt-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                            Life at AOTMS Vijayawada
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Experience our vibrant culture in Vijayawada. Discover the values, people, and environment
                            that make AOTMS a great place to build your career.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                        {cultureHighlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 aspect-[4/3]">
                                    <img
                                        src={item.image}
                                        alt={item.caption}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-sm text-blue-200 mb-1">{item.description}</p>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 text-center">{item.caption}</h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Culture Values */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200 max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">What We Believe In</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <Target className="w-6 h-6 text-[#0075CF]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Student Success First</h4>
                                    <p className="text-slate-600 text-sm">Every decision we make puts our students' growth and success at the center.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                    <Heart className="w-6 h-6 text-[#FD5A1A]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Empathy & Support</h4>
                                    <p className="text-slate-600 text-sm">We care about each other and create a supportive, inclusive environment.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Innovation & Excellence</h4>
                                    <p className="text-slate-600 text-sm">We embrace new ideas and strive for excellence in everything we do.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Collaboration Over Competition</h4>
                                    <p className="text-slate-600 text-sm">We win together by sharing knowledge and supporting each other's growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Growth Path */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                            Your Growth Journey
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            We believe in growing our people. Here's how your career can evolve with us
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0075CF] to-[#FD5A1A]"></div>

                            {careerPath.map((stage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#0075CF] border-4 border-white shadow-lg transform -translate-x-1/2"></div>

                                    {/* Content */}
                                    <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 shadow-md">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{stage.stage}</h3>
                                            <p className="text-slate-600">{stage.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-lg text-slate-600 font-light italic">
                                "Your potential is limitless. We're here to help you unlock it."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="open-positions" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 scroll-mt-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                            Current Openings in Vijayawada
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Explore exciting career opportunities at our Vijayawada campus. Find your perfect role
                            and start your journey with Andhra Pradesh's leading IT training institute.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {jobPositions.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-200 hover:shadow-xl hover:border-[#0075CF]/30 transition-all"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                                        <p className="text-[#0075CF] font-semibold mb-3">{job.department}</p>
                                        <p className="text-slate-600 mb-4">{job.description}</p>

                                        <div className="flex flex-wrap gap-3">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <MapPin className="w-4 h-4 text-[#0075CF]" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <Briefcase className="w-4 h-4 text-[#0075CF]" />
                                                <span>{job.experience}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <Clock className="w-4 h-4 text-[#0075CF]" />
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleViewDetails(job)}
                                        className="lg:self-start px-6 py-3 bg-[#0075CF] hover:bg-[#0066CC] text-white font-bold rounded-full transition-all hover:scale-105 flex items-center gap-2 justify-center whitespace-nowrap"
                                    >
                                        View Details
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Details Modal */}
            {showJobDetails && selectedJob && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowJobDetails(false)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-6">
                            <h2 className="text-3xl font-black text-slate-900 mb-2">{selectedJob.title}</h2>
                            <p className="text-[#0075CF] font-semibold text-lg">{selectedJob.department}</p>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-6">
                            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                                <MapPin className="w-4 h-4 text-[#0075CF]" />
                                <span className="text-sm font-semibold text-slate-700">{selectedJob.location}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                                <Briefcase className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-semibold text-slate-700">{selectedJob.experience}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                                <Clock className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-semibold text-slate-700">{selectedJob.type}</span>
                            </div>
                        </div>

                        <p className="text-slate-600 mb-8 text-lg">{selectedJob.description}</p>

                        <div className="space-y-6 mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">What We're Looking For</h3>
                                <ul className="space-y-2">
                                    {selectedJob.requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <ChevronRight className="w-4 h-4 text-[#0075CF]" />
                                            </div>
                                            <span className="text-slate-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">What You'll Do</h3>
                                <ul className="space-y-2">
                                    {selectedJob.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <ChevronRight className="w-4 h-4 text-[#FD5A1A]" />
                                            </div>
                                            <span className="text-slate-700">{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={handleApply}
                                className="flex-1 px-6 py-4 bg-[#0075CF] hover:bg-[#0066CC] text-white font-bold rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Apply Now
                                <Send className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setShowJobDetails(false)}
                                className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Who Can Apply */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                                Who Can Apply?
                            </h2>
                            <p className="text-xl text-slate-600 font-light">
                                We welcome passionate individuals from all backgrounds
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="w-8 h-8 text-[#0075CF]" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Students</h3>
                                <p className="text-slate-600">Looking for internships and early career opportunities</p>
                            </div>

                            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Fresh Graduates</h3>
                                <p className="text-slate-600">Ready to start your professional journey</p>
                            </div>

                            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
                                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Professionals</h3>
                                <p className="text-slate-600">Seeking meaningful work and growth</p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">What Matters Most to Us</h3>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <Heart className="w-8 h-8 text-[#FD5A1A] mx-auto mb-2" />
                                    <p className="font-semibold text-slate-900">Passion for Education</p>
                                </div>
                                <div>
                                    <Lightbulb className="w-8 h-8 text-[#0075CF] mx-auto mb-2" />
                                    <p className="font-semibold text-slate-900">Learning Mindset</p>
                                </div>
                                <div>
                                    <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-slate-900">Drive to Grow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="application-form" className="py-16 md:py-20 bg-gradient-to-br from-[#0075CF] via-[#0066CC] to-[#0075CF] relative overflow-hidden scroll-mt-24">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                Ready to Build Your Career in Vijayawada?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 font-light">
                                Join AOTMS Vijayawada—a team that believes in you, invests in your professional growth,
                                and celebrates your success. Let's shape the future of tech education in Andhra Pradesh together.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button
                                    onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-white hover:bg-slate-100 text-[#0075CF] font-bold rounded-full transition-all shadow-lg hover:scale-105 flex items-center gap-2 text-lg"
                                >
                                    Apply Now
                                    <Send className="w-5 h-5" />
                                </button>
                                <a
                                    href="mailto:Info@aotms.in"
                                    className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-full transition-all border-2 border-white/20 hover:border-white/40 hover:scale-105 flex items-center gap-2 text-lg"
                                >
                                    <Mail className="w-5 h-5" />
                                    Info@aotms.in
                                </a>
                            </div>

                            <p className="mt-8 text-blue-100 text-sm">
                                Have questions? We'd love to hear from you. Reach out anytime.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
