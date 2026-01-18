import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import {
    Search,
    Download,
    ExternalLink,
    FileText,
    Video,
    Code,
    BookOpen,
    Zap,
    LayoutGrid,
    List,
    Filter,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// --- Mock Data ---
const categories = ["All", "Cheatsheets", "E-Books", "Roadmaps", "Video Tutorials", "Interview Prep"];

const resources = [
    {
        id: 1,
        title: "React.js Ultimate Cheatsheet",
        description: "A comprehensive guide to React hooks, components, and best practices for modern web development.",
        category: "Cheatsheets",
        type: "PDF",
        size: "2.4 MB",
        downloads: "12.5k",
        icon: FileText,
        isNew: true,
    },
    {
        id: 2,
        title: "Full Stack Developer Roadmap 2025",
        description: "Step-by-step path to becoming a full stack developer, covering frontend, backend, and DevOps.",
        category: "Roadmaps",
        type: "Image",
        size: "4.1 MB",
        downloads: "8.2k",
        icon: BookOpen,
        isNew: false,
    },
    {
        id: 3,
        title: "Mastering Python for Data Science",
        description: "In-depth video series covering Pandas, NumPy, and Matplotlib with real-world examples.",
        category: "Video Tutorials",
        type: "Video",
        size: "1.2 GB",
        downloads: "5.6k",
        icon: Video,
        isNew: true,
    },
    {
        id: 4,
        title: "Top 50 Java Interview Questions",
        description: "Curated list of most asked Java interview questions with detailed answers and code snippets.",
        category: "Interview Prep",
        type: "PDF",
        size: "1.5 MB",
        downloads: "25k+",
        icon: CheckCircle2,
        isNew: false,
    },
    {
        id: 5,
        title: "VS Code Power User Guide",
        description: "Boost your productivity with essential VS Code extensions, shortcuts, and settings.",
        category: "E-Books",
        type: "PDF",
        size: "3.2 MB",
        downloads: "4.1k",
        icon: Code,
        isNew: false,
    },
    {
        id: 6,
        title: "AWS Cloud Practitioner Notes",
        description: "Concise study notes for the AWS Cloud Practitioner certification exam.",
        category: "Cheatsheets",
        type: "PDF",
        size: "5.6 MB",
        downloads: "9.3k",
        icon: FileText,
        isNew: true,
    },
    {
        id: 7,
        title: "System Design Primer",
        description: "Learn how to design scalable systems for large-scale applications. Essential for senior roles.",
        category: "E-Books",
        type: "PDF",
        size: "12 MB",
        downloads: "15k",
        icon: BookOpen,
        isNew: false,
    },
    {
        id: 8,
        title: "MERN Stack Crash Course",
        description: "Build a full-stack social media app from scratch using MongoDB, Express, React, and Node.js.",
        category: "Video Tutorials",
        type: "Video",
        size: "850 MB",
        downloads: "3.2k",
        icon: Video,
        isNew: false,
    },
];

export const ResourcesPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const filteredResources = resources.filter((resource) => {
        const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // --- Logic ---
    const handleDownload = (resource: typeof resources[0]) => {
        // In a real app, this would be a real file URL
        // For demo, we generate a dummy text file on the fly
        const element = document.createElement("a");
        const file = new Blob([`Thank you for downloading ${resource.title}!\n\nDescription: ${resource.description}\n\nCategory: ${resource.category}`], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${resource.title.replace(/\s+/g, "_")}.txt`;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        document.body.removeChild(element);

        // Optional: Show toast if available, or just rely on browser download behavior
        // alert(`Downloading ${resource.title}...`); 
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Header />

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0066CC]">
                {/* Tech Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FD5A1A]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs md:text-sm font-bold tracking-wider uppercase mb-4 backdrop-blur-sm">
                            Knowledge Hub
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                            Curated <span className="text-[#FD5A1A]">Leaning Resources</span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                            Access our collection of hand-picked guides, cheatsheets, and tutorials to accelerate your tech journey.
                        </p>

                        {/* Search Bar - Hero Config */}
                        <div className="max-w-xl mx-auto relative group">
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative flex items-center bg-white rounded-full shadow-2xl p-2 pl-6">
                                <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Search for 'React', 'Python', 'Interview'..."
                                    className="flex-1 bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400 font-medium h-10 md:h-12 w-full text-sm md:text-base"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="bg-[#FD5A1A] hover:bg-[#e0480e] text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 text-sm md:text-base hidden sm:block">
                                    Search
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Main Content --- */}
            <section className="py-12 md:py-20 px-4 md:px-6 container mx-auto">

                {/* Filters & Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
                    {/* Category Pills */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-[#0066CC] text-white border-[#0066CC] shadow-lg shadow-blue-500/20"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-[#0066CC] hover:text-[#0066CC]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* View Toggle */}
                    <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-slate-200 shadow-sm shrink-0">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-slate-100 text-[#0066CC]" : "text-slate-400 hover:text-slate-600"}`}
                        >
                            <LayoutGrid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-slate-100 text-[#0066CC]" : "text-slate-400 hover:text-slate-600"}`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Resources Grid */}
                <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" : "grid-cols-1 gap-4"}`}>
                    <AnimatePresence>
                        {filteredResources.map((resource) => (
                            <motion.div
                                key={resource.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={`bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:border-[#0066CC]/30 transition-all duration-300 ${viewMode === "list" ? "flex flex-col sm:flex-row items-center p-4 md:p-6 gap-6" : "p-6 flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
                                    }`}
                            >
                                {/* Icon/Thumbnail */}
                                <div className={`shrink-0 ${viewMode === "list" ? "" : "mb-6 flex justify-between items-start"}`}>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 flex items-center justify-center text-[#0066CC] group-hover:scale-110 transition-transform duration-300">
                                        <resource.icon className="w-6 h-6" />
                                    </div>

                                    {/* Badges (Grid View Only) */}
                                    {viewMode === "grid" && (
                                        <div className="flex gap-2">
                                            {resource.isNew && (
                                                <span className="px-2 py-1 bg-[#FD5A1A]/10 text-[#FD5A1A] text-[10px] font-black uppercase tracking-wider rounded-md border border-[#FD5A1A]/20">
                                                    New
                                                </span>
                                            )}
                                            <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-md">
                                                {resource.type}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className={`${viewMode === "list" ? "flex-1 text-center sm:text-left" : "flex-1"}`}>
                                    {viewMode === "list" && resource.isNew && (
                                        <span className="inline-block md:hidden px-2 py-1 bg-[#FD5A1A]/10 text-[#FD5A1A] text-[10px] font-black uppercase tracking-wider rounded-md border border-[#FD5A1A]/20 mb-2">
                                            New
                                        </span>
                                    )}
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0066CC] transition-colors line-clamp-2">
                                        {resource.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                                        {resource.description}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-xs font-medium text-slate-400 justify-center sm:justify-start">
                                        <span className="flex items-center gap-1">
                                            <Download className="w-3 h-3" /> {resource.downloads}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                                        <span>{resource.size}</span>
                                        {viewMode === "list" && (
                                            <>
                                                <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
                                                <span className="hidden sm:inline-block px-2 py-0.5 bg-slate-100 rounded text-slate-600">{resource.category}</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className={`mt-auto pt-6 ${viewMode === "list" ? "w-full sm:w-auto shrink-0 border-t sm:border-t-0 p-0" : "border-t border-slate-50"}`}>
                                    <Button
                                        onClick={() => handleDownload(resource)}
                                        className="w-full bg-white border-2 border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white font-bold rounded-xl transition-all h-11 shadow-none hover:shadow-lg hover:shadow-blue-500/20"
                                    >
                                        <Download className="w-4 h-4 mr-2" /> Download Resource
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredResources.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="w-8 h-8 text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No resources found</h3>
                        <p className="text-slate-500">Try adjusting your search or filters.</p>
                        <button
                            onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                            className="mt-6 text-[#0066CC] font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </section>

            {/* --- Newsletter CTA --- */}
            <section className="container mx-auto px-4 mb-20">
                <div className="bg-[#0066CC] rounded-3xl p-8 md:p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="relative z-10 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                            <Zap className="w-3 h-3 text-[#FD5A1A]" /> Weekly Updates
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Never miss a new resource.</h2>
                        <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                            Join 10,000+ developers getting the latest cheatsheets, tutorials, and tech trends delivered to their inbox.
                        </p>
                    </div>

                    <div className="relative z-10 w-full md:w-auto min-w-[300px]">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Input
                                placeholder="Enter your email"
                                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/70 h-12 rounded-xl focus:bg-white/20"
                            />
                            <Button className="h-12 px-8 bg-[#FD5A1A] hover:bg-[#e0480e] text-white font-bold rounded-xl shadow-lg shadow-orange-900/20">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-blue-200/60 text-[10px] mt-3 text-center md:text-left">
                            No spam, unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ResourcesPage;
