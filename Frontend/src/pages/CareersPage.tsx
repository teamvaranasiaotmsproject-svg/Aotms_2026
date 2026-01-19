import { useState } from "react";
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Search, Zap, Users, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const openings = [
    {
        id: 1,
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "Vijayawada (Hybrid)",
        type: "Full-time",
        description: "We are looking for an experienced Full Stack Developer to lead our core product team. You will be responsible for architecting scalable solutions and mentoring junior developers.",
        tags: ["React", "Node.js", "AWS", "MongoDB"]
    },
    {
        id: 2,
        title: "UI/UX Designer",
        department: "Design",
        location: "Remote",
        type: "Contract",
        description: "Join our creative team to design intuitive and beautiful user interfaces. You will work closely with product managers and developers to bring ideas to life.",
        tags: ["Figma", "Prototyping", "User Research"]
    },
    {
        id: 3,
        title: "Technical Content Writer",
        department: "Marketing",
        location: "Vijayawada",
        type: "Part-time",
        description: "Create engaging technical content for our blog, documentation, and social media. You should have a knack for explaining complex concepts simply.",
        tags: ["Technical Writing", "SEO", "Content Strategy"]
    },
    {
        id: 4,
        title: "Business Development Executive",
        department: "Sales",
        location: "Vijayawada",
        type: "Full-time",
        description: "Drive growth by identifying new business opportunities and managing relationships with key clients and partners.",
        tags: ["Sales", "B2B", "Communication"]
    }
];

const perks = [
    { icon: Zap, title: "Fast-Paced Growth", desc: "Accelerate your career with rapid learning and development opportunities." },
    { icon: Users, title: "Collaborative Team", desc: "Work with passionate individuals who support and inspire each other." },
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health benefits and wellness programs for you and your family." },
    { icon: Globe, title: "Remote Options", desc: "Flexible work arrangements including remote and hybrid options." },
];

const CareersPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredOpenings = openings.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-50/50 -z-10" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge className="mb-4 px-4 py-1.5 bg-blue-50 text-[#0075CF] border-blue-100 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-100 transition-colors">
                                We're Hiring
                            </Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                                Build the Future with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">
                                    Tech Masters
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                                Join our mission to transform tech education and empower the next generation of developers. We're looking for passionate problem solvers.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                                <Button className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#111111] hover:bg-[#222] text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                    View Openings
                                </Button>
                                <Button variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-full border-slate-200 hover:border-[#0075CF] hover:bg-blue-50 text-slate-700 font-bold text-base transition-all">
                                    Learn About Us
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Perks Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {perks.map((perk, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <perk.icon className="w-6 h-6 text-[#0075CF]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{perk.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">{perk.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Openings Section */}
                <section className="py-20 bg-slate-50" id="openings">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Current Openings</h2>
                                <p className="text-slate-500 font-medium">Find the role that fits you best.</p>
                            </div>
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <Input
                                    placeholder="Search jobs..."
                                    className="pl-12 h-12 rounded-xl border-slate-200 bg-white shadow-sm focus:ring-[#0075CF] transition-all"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {filteredOpenings.length > 0 ? (
                                filteredOpenings.map((job) => (
                                    <motion.div
                                        key={job.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-[#0075CF]/30 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0075CF] transition-colors">{job.title}</h3>
                                                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">{job.type}</Badge>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-semibold mb-4">
                                                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.department}</span>
                                                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                                                </div>
                                                <p className="text-slate-600 mb-6 leading-relaxed max-w-3xl">{job.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.tags.map((tag, i) => (
                                                        <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-100">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-3 self-start md:self-center shrink-0 w-full md:w-auto mt-4 md:mt-0">
                                                <Button className="h-12 px-8 rounded-xl bg-[#0075CF] hover:bg-[#005fb0] text-white font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all w-full sm:w-auto" onClick={() => window.location.href = `mailto:careers@techmasters.in?subject=Application for ${job.title}`}>
                                                    Apply Now
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                                    <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">No jobs found</h3>
                                    <p className="text-slate-500">Try adjusting your search terms.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CareersPage;
