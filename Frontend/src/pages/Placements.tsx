import { useState, useMemo } from 'react';
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { motion } from "framer-motion";
import { useStudentPlacements } from "@/hooks/usePlacements";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { toast } from "sonner";

const Placements = () => {
    const { data: students, isLoading } = useStudentPlacements();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/leads', formData);
            toast.success("Request submitted successfully!");
            setFormData({ name: "", email: "", phone: "", course: "" });
        } catch (error) {
            console.error(error);
            toast.error("Failed to submit request.");
        } finally {
            setLoading(false);
        }
    };

    // Infinite Auto Scroll Carousel
    // Optimized duplication (4x) for performance while ensuring smooth looping
    const infiniteStudents = useMemo(() => {
        if (!students) return [];
        return [...students, ...students, ...students, ...students];
    }, [students]);

    const plugins = useMemo(() => [
        AutoScroll({ speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: true })
    ], []);

    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true },
        plugins
    );

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="pt-40 pb-20 container mx-auto text-center">
                    <div className="flex flex-wrap justify-center gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <Skeleton key={i} className="h-64 w-60 rounded-2xl" />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Compact Page Header with Tech Animations */}
            <section className="relative pt-28 pb-12 md:pt-40 md:pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                            opacity: [0.4, 0.6, 0.4]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            rotate: [0, -90, 0],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px]"
                    />
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-blue-400' : 'bg-orange-400'}`}
                            initial={{ opacity: 0, x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
                            animate={{
                                y: [0, -100, 0],
                                opacity: [0, 0.8, 0],
                                scale: [0, 1.5, 0]
                            }}
                            transition={{
                                duration: Math.random() * 5 + 8,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "easeInOut"
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    Career Impact
                                </div>
                                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                                    Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Placements</span>
                                </h1>
                                <p className="text-slate-600 max-w-xl text-lg leading-relaxed font-medium">
                                    Our alumni are engineering the future at leading technology companies worldwide.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex gap-8 md:gap-12 pb-2 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/50 shadow-sm"
                        >
                            <div className="text-center md:text-left">
                                <div className="text-2xl md:text-3xl font-black text-slate-900">500+</div>
                                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Career Transition Supported</div>
                            </div>
                            <div className="w-px h-auto bg-slate-200" />
                            <div className="text-center md:text-left">
                                <div className="text-2xl md:text-3xl font-black text-slate-900">50+</div>
                                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Industry Connections</div>
                            </div>
                            <div className="w-px h-auto bg-slate-200" />
                            <div className="text-center md:text-left">
                                <div className="text-2xl md:text-3xl font-black text-slate-900">100%</div>
                                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Placement Support For Eligible Students</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Placements Carousel Section - Logo Colors (Blue & Orange) */}
            <section className="py-16 md:py-20 bg-[#005bb5] relative overflow-hidden">
                {/* Brand Blue Background (Logo Match) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC] via-[#0055aa] to-[#003366] opacity-100" />

                <div className="absolute inset-0 pointer-events-none">
                    {/* Hexagonal Grid - Blue */}
                    <div className="absolute inset-0 opacity-[0.08] bg-hex-pattern-blue" />

                    {/* Diagonal Scan Lines - Blue */}
                    <div className="absolute inset-0 opacity-[0.03] bg-scan-lines-blue" />

                    {/* Animated Data Streams - Blue */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`stream-${i}`}
                            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
                            style={{ left: `${15 + i * 15}%`, top: '-10%' }}
                            animate={{
                                y: ['0%', '120%'],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.8,
                                ease: "linear"
                            }}
                        />
                    ))}

                    {/* Professional Tech Icons - Orange */}
                    {[
                        { symbol: "→", top: "15%", left: "8%", delay: 0 },
                        { symbol: "⟨⟩", top: "65%", left: "88%", delay: 2 },
                        { symbol: "01", top: "25%", left: "85%", delay: 4 },
                        { symbol: "▸", top: "75%", left: "12%", delay: 1 },
                        { symbol: "⌘", top: "10%", left: "65%", delay: 3 },
                        { symbol: "◆", top: "55%", left: "45%", delay: 5 },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-orange-400/20 font-mono font-bold text-5xl select-none"
                            style={{ top: item.top, left: item.left }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay: item.delay,
                                ease: "easeInOut"
                            }}
                        >
                            {item.symbol}
                        </motion.div>
                    ))}

                    {/* Glowing Orbs - Blue & Orange */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px]"
                    />
                </div>

                <div className="container mx-auto px-4 mb-8 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-lg backdrop-blur-sm">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 animate-pulse"></span>
                        Hall of Fame-Celebrating outstanding achievements of our learners
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                        Recent Success Stories
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Meet the ambitious individuals who recently started their journey with top tech giants.
                    </p>
                </div>

                <div className="w-full relative">
                    {/* Enhanced Track with Blue & Orange Glow */}
                    <div className="absolute top-1/2 left-0 right-0 h-40 -translate-y-1/2">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
                        <div className="absolute inset-0 border-y border-blue-500/10 backdrop-blur-sm" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />
                    </div>

                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0066CC] to-transparent z-10 pointer-events-none md:w-32" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#003366] to-transparent z-10 pointer-events-none md:w-32" />

                    {infiniteStudents && infiniteStudents.length > 0 ? (
                        <div className="overflow-hidden py-4 px-4" ref={emblaRef}>
                            <div className="flex touch-pan-y items-center will-change-transform">
                                {infiniteStudents.map((student, index) => (
                                    <div key={index} className="flex-[0_0_240px] min-w-0 mx-4 select-none relative z-10">
                                        <div className="flex flex-col items-center text-center p-6 transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-[#003366]/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(255,107,53,0.2)] group">
                                            <div className="relative mb-6">
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-orange-500/20 blur-xl group-hover:blur-2xl transition-all" />
                                                <div className="relative w-[130px] h-[130px] rounded-full overflow-hidden border-4 border-slate-700 ring-2 ring-blue-500/30 group-hover:ring-orange-400/50 transition-all shadow-xl">
                                                    {student.image && <img
                                                        src={student.image}
                                                        alt={student.name}
                                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                    />}
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-orange-400 transition-colors">
                                                {student.name}
                                            </h3>
                                            <p className="text-blue-400 font-semibold text-sm mb-3">
                                                {student.jobTitle}
                                            </p>
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-700/50 backdrop-blur-sm">
                                                {student.companies.join(' / ')}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-white/50 font-medium">No placement data available at the moment.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Placement Assistance Form Section */}
            <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">

                        {/* Left Side: Visual & Context */}
                        <div className="lg:w-1/2 relative bg-slate-900 p-8 md:p-12 flex flex-col justify-center overflow-hidden">
                            {/* Animated Background */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-90" />
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
                            </div>

                            <div className="relative z-10">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                                    Career Acceleration
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Launch</span> Your Tech Career?
                                </h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Get personalized career guidance, resume reviews, and mock interviews from industry experts.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "Exclusive Placement Support",
                                        "1-on-1 Mentorship Sessions",
                                        "Resume & Portfolio Building",
                                        "Mock Interviews with Experts"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Form (The "Blue" Style from reference) */}
                        <div className="lg:w-1/2 bg-[#0066CC] p-8 md:p-12 relative flex flex-col justify-center">
                            {/* Slanted divider effect visual (overlap) -- Simplified for cleaner React implementation */}
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                                <div className="absolute top-[-50%] left-[-10%] w-[200%] h-[200%] bg-gradient-to-br from-white/5 to-transparent rotate-12 blur-3xl opacity-30" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                                    Start Your Application
                                </h3>
                                <p className="text-blue-100 mb-8">
                                    Fill out the form below to schedule your free career counseling session.
                                </p>

                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            required
                                            className="w-full h-12 rounded-xl bg-blue-800/50 border border-blue-400/30 text-white placeholder:text-blue-300/50 px-5 focus:outline-none focus:bg-blue-900/50 focus:border-orange-400/50 transition-all font-medium"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2 ml-1">Phone Number</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 00000 00000"
                                                required
                                                className="w-full h-12 rounded-xl bg-blue-800/50 border border-blue-400/30 text-white placeholder:text-blue-300/50 px-5 focus:outline-none focus:bg-blue-900/50 focus:border-orange-400/50 transition-all font-medium"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                required
                                                className="w-full h-12 rounded-xl bg-blue-800/50 border border-blue-400/30 text-white placeholder:text-blue-300/50 px-5 focus:outline-none focus:bg-blue-900/50 focus:border-orange-400/50 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2 ml-1">Interested Course / Role</label>
                                        <select
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            required
                                            aria-label="Interested Course"
                                            className="w-full h-full rounded-xl bg-blue-800/50 border border-blue-400/30 text-white px-5 focus:outline-none focus:bg-blue-900/50 focus:border-orange-400/50 transition-all font-medium appearance-none cursor-pointer"
                                        >
                                            <option className="bg-slate-900 text-white" value="">Select Course</option>
                                            <option className="bg-slate-900 text-white" value="Full Stack Development">Full Stack Development</option>
                                            <option className="bg-slate-900 text-white" value="Data Science & AI">Data Science & AI</option>
                                            <option className="bg-slate-900 text-white" value="Cyber Security">Cyber Security</option>
                                            <option className="bg-slate-900 text-white" value="Cloud Computing (AWS/Azure)">Cloud Computing (AWS/Azure)</option>
                                            <option className="bg-slate-900 text-white" value="Other">Other</option>
                                        </select>
                                    </div>

                                    <button disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 mt-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed">
                                        {loading ? "Submitting..." : "Get Career Guidance"}
                                    </button>
                                    <p className="text-blue-200/60 text-xs text-center mt-4">
                                        By submitting, you agree to receive career updates from AOTMS.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Placements;
