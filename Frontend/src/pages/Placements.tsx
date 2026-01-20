import { useState, useMemo } from 'react';
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { motion } from "framer-motion";
import { useStudentPlacements } from "@/hooks/usePlacements";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


const Placements = () => {
    const { data: students, isLoading } = useStudentPlacements();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        customCourse: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const numbers = value.replace(/[^0-9]/g, '');
            if (numbers.length <= 10) setFormData({ ...formData, [name]: numbers });
            return;
        }
        if (name === 'name') {
            const alphas = value.replace(/[^a-zA-Z\s]/g, '');
            setFormData({ ...formData, [name]: alphas });
            return;
        }
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        if (!formData.name.trim() || formData.name.length < 3) {
            toast.error("Please enter a valid name (min 3 characters)");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address");
            return false;
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error("Please enter a valid 10-digit phone number");
            return false;
        }
        if (!formData.course) {
            toast.error("Please select an interested course");
            return false;
        }
        if (formData.course === 'Other' && (!formData.customCourse || formData.customCourse.trim().length < 2)) {
            toast.error("Please specify your interested course");
            return false;
        }
        return true;
    };

    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (!executeRecaptcha) {
            toast.error("ReCAPTCHA not ready");
            return;
        }

        setLoading(true);
        try {
            const token = await executeRecaptcha("placement_inquiry");

            const submitData = {
                ...formData,
                course: formData.course === 'Other' ? formData.customCourse : formData.course,
                recaptchaToken: token
            };

            await axios.post(`${import.meta.env.VITE_API_URL}/api/leads`, submitData);
            toast.success("Request submitted successfully!");
            setFormData({ name: "", email: "", phone: "", course: "", customCourse: "" });
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
                <div className="absolute inset-0 pointer-events-none hidden md:block">
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
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50/50 md:backdrop-blur-sm border border-blue-100 text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] text-xs font-black uppercase tracking-wider mb-4">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FD5A1A] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FD5A1A]"></span>
                                    </span>
                                    Career Impact
                                </div>
                                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                                    Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">Placements</span>
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
                            className="flex gap-4 md:gap-12 pb-2 bg-white/50 md:backdrop-blur-sm p-3 md:p-4 rounded-2xl border border-slate-200/50 shadow-sm"
                        >
                            <div className="text-center md:text-left flex-1 md:flex-none">
                                <div className="text-xl md:text-3xl font-black text-slate-900">500+</div>
                                <div className="text-[8px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Career Transition Supported</div>
                            </div>
                            <div className="w-px h-auto bg-slate-200" />
                            <div className="text-center md:text-left flex-1 md:flex-none">
                                <div className="text-xl md:text-3xl font-black text-slate-900">50+</div>
                                <div className="text-[8px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Industry Connections</div>
                            </div>
                            <div className="w-px h-auto bg-slate-200" />
                            <div className="text-center md:text-left flex-1 md:flex-none">
                                <div className="text-xl md:text-3xl font-black text-slate-900">100%</div>
                                <div className="text-[8px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Placement Support</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Placements Carousel Section */}
            <section className="py-16 md:py-20 bg-[#F8FAFC] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 mb-8 relative z-10 text-center">
                    <div className="container mx-auto px-4 mb-12 relative z-10 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50/50 md:backdrop-blur-sm border border-blue-100 text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A] text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FD5A1A] mr-2 animate-pulse"></span>
                            Hall of Fame
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">Candidates</span> Working On <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#FD5A1A]">Top Companies</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Meet the ambitious individuals who recently started their journey with top tech giants.
                        </p>
                    </div>
                </div>

                <div className="w-full relative">
                    {/* Enhanced Track with Blue & Orange Glow */}
                    <div className="absolute top-1/2 left-0 right-0 h-40 -translate-y-1/2 hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
                        <div className="absolute inset-0 border-y border-blue-500/10 backdrop-blur-sm" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />
                    </div>

                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                    {infiniteStudents && infiniteStudents.length > 0 ? (
                        <div className="overflow-hidden py-4 px-4" ref={emblaRef}>
                            <div className="flex touch-pan-y items-center will-change-transform">
                                {infiniteStudents.map((student, index) => (
                                    <div key={index} className="flex-[0_0_260px] min-w-0 mx-4 select-none relative z-10">
                                        <div className="flex flex-col items-center text-center cursor-pointer group h-full transition-all duration-300">
                                            <div className="relative mb-6">
                                                <div className="relative w-[130px] h-[130px] rounded-full overflow-hidden border-4 border-white md:ring-4 md:ring-blue-500/10 group-hover:ring-blue-500 transition-all duration-500 md:shadow-xl shadow-md">
                                                    {student.image ? (
                                                        <img
                                                            src={student.image}
                                                            alt={student.name}
                                                            className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700 contrast-[1.15] brightness-[1.05] saturate-[1.1]"
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                                                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* Status Badge */}
                                                <div className="absolute -bottom-2 right-2 bg-orange-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-sm md:shadow-lg border-2 border-white transform scale-100 md:scale-0 md:group-hover:scale-100 transition-transform duration-300">
                                                    Hired
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-black text-slate-900 mb-1 leading-tight group-hover:text-blue-600 transition-colors">
                                                {student.name}
                                            </h3>
                                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-black text-xs uppercase tracking-widest mb-4">
                                                {student.jobRole}
                                            </p>
                                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm transition-all group-hover:text-slate-900">
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



            {/* Hiring Partners Section (Logos) - Infinity Scroll */}
            <section className="py-20 bg-white border-y border-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(66,133,244,0.05)_0%,transparent_70%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 mb-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#4285F4] text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4285F4] mr-2 animate-pulse"></span>
                                Top Recruiters
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                                Companies Where Our Students <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#0075CF] to-[#00C6FF] animate-gradient-shift">
                                    Got Placed
                                </span>
                            </h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-[#4285F4] to-[#00C6FF] mx-auto rounded-full mb-8"></div>
                        </motion.div>
                    </div>
                </div>

                <div className="relative w-full space-y-12">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                    {/* Row 1: Left Scroll */}
                    <div className="flex overflow-hidden group">
                        <motion.div
                            className="flex gap-8 md:gap-16 items-center min-w-full pl-8 md:pl-16"
                            animate={{ x: "-50%" }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30, // Adjust speed here
                            }}
                        >
                            {[
                                { name: "Google", src: "/images/Google-logo.png" },
                                { name: "Meta", src: "/images/Meta-Logo.png" },
                                { name: "Microsoft", src: "/images/Microsoft.webp" },
                                { name: "Amazon", src: "/images/amazon-logo.webp" },
                                { name: "Nvidia", src: "/images/Nvidia_logo.png" },
                                { name: "Intel", src: "/images/intel.png" },
                                { name: "IBM", src: "/images/IBM.png" },
                                { name: "Flipkart", src: "/images/Flipkart.png" },
                                { name: "TCS", src: "/images/TCS.png" },
                                { name: "Infosys", src: "/images/Infosys.png" },
                                // Duplicate for loop
                                { name: "Google", src: "/images/Google-logo.png" },
                                { name: "Meta", src: "/images/Meta-Logo.png" },
                                { name: "Microsoft", src: "/images/Microsoft.webp" },
                                { name: "Amazon", src: "/images/amazon-logo.webp" },
                                { name: "Nvidia", src: "/images/Nvidia_logo.png" },
                                { name: "Intel", src: "/images/intel.png" },
                                { name: "IBM", src: "/images/IBM.png" },
                                { name: "Flipkart", src: "/images/Flipkart.png" },
                                { name: "TCS", src: "/images/TCS.png" },
                                { name: "Infosys", src: "/images/Infosys.png" },
                            ].map((company, idx) => (
                                <div key={`row1-${idx}`} className="flex-shrink-0 w-32 md:w-48 h-20 md:h-24 bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-center p-4 md:p-6 hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={company.src}
                                        alt={company.name}
                                        className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2: Right Scroll */}
                    <div className="flex overflow-hidden group">
                        <motion.div
                            className="flex gap-8 md:gap-16 items-center min-w-full pl-8 md:pl-16"
                            animate={{ x: "0%" }}
                            initial={{ x: "-50%" }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 35, // Adjust speed differently for visual interest
                            }}
                        >
                            {[
                                { name: "Accenture", src: "/images/Accenture.svg-1-1536x405-1-595xh.webp" },
                                { name: "Capgemini", src: "/images/Capgemini.png" },
                                { name: "Wipro", src: "/images/Wipro.png" },
                                { name: "HCL", src: "/images/HCL.png" },
                                { name: "PwC", src: "/images/pwc.png" },
                                { name: "EY", src: "/images/EY_logo.png" },
                                { name: "Mphasis", src: "/images/mphasis.webp" },
                                { name: "Tech Mahindra", src: "/images/tech-mahindra-1.webp" },
                                { name: "Mindtree", src: "/images/mindtree.png" },
                                { name: "Myntra", src: "/images/myntra.png" },
                                // Duplicate for loop
                                { name: "Accenture", src: "/images/Accenture.svg-1-1536x405-1-595xh.webp" },
                                { name: "Capgemini", src: "/images/Capgemini.png" },
                                { name: "Wipro", src: "/images/Wipro.png" },
                                { name: "HCL", src: "/images/HCL.png" },
                                { name: "PwC", src: "/images/pwc.png" },
                                { name: "EY", src: "/images/EY_logo.png" },
                                { name: "Mphasis", src: "/images/mphasis.webp" },
                                { name: "Tech Mahindra", src: "/images/tech-mahindra-1.webp" },
                                { name: "Mindtree", src: "/images/mindtree.png" },
                                { name: "Myntra", src: "/images/myntra.png" },
                            ].map((company, idx) => (
                                <div key={`row2-${idx}`} className="flex-shrink-0 w-32 md:w-48 h-20 md:h-24 bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-center p-4 md:p-6 hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={company.src}
                                        alt={company.name}
                                        className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Placement Assistance Form Section */}
            <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0066CC]/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col md:flex-row">

                        {/* Interactive Left Side */}
                        <div className="md:w-5/12 bg-[#003366] relative p-8 md:p-12 flex flex-col justify-between overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/images/unlock-your-potential.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/0 via-[#003366]/60 to-[#003366]" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FF6B35]/10 border border-[#FF6B35]/20 text-[#FF6B35] text-xs font-bold uppercase tracking-wider mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
                                    Career Guidance
                                </div>
                                <h2 className="text-3xl font-black text-white mb-4 leading-tight">
                                    Unlock Your <span className="text-[#FF6B35]">Potential</span>
                                </h2>
                                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                    Connect with our placement experts to analyze your profile and find the perfect roadmap for your tech career.
                                </p>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 text-[#FF6B35] font-bold text-sm">
                                        1k+
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold">Students Placed</div>
                                        <div className="text-xs text-slate-400">Across Top MNCs</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 text-[#FF6B35] font-bold text-sm">
                                        95%
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold">Success Rate</div>
                                        <div className="text-xs text-slate-400">Career Transition</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modern Form Right Side */}
                        <div className="md:w-7/12 p-8 md:p-12 bg-white relative">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Get in Touch</h3>
                            <p className="text-slate-500 mb-8 text-sm">Fill in your details and our team will get back to you shortly.</p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-6 font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0066CC] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter 10-digit number"
                                            className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-6 font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0066CC] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="name@example.com"
                                            className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-6 font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0066CC] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Interested Course</label>
                                    <div className="relative">
                                        <select
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-6 font-medium text-slate-900 focus:outline-none focus:border-[#0066CC] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer appearance-none shadow-sm"
                                        >
                                            <option value="" disabled className="text-slate-400">Select your course</option>
                                            <option value="Full Stack Development">Full Stack Development</option>
                                            <option value="Data Science & AI">Data Science & AI</option>
                                            <option value="UI/UX Design">UI/UX Design</option>
                                            <option value="Cyber Security">Cyber Security</option>
                                            <option value="Cloud Computing (AWS/Azure)">Cloud Computing (AWS/Azure)</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Custom Course Input - Only shows when 'Other' is selected */}
                                {formData.course === 'Other' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-2"
                                    >
                                        <label className="text-sm font-bold text-slate-700 ml-1">Specify Course</label>
                                        <input
                                            type="text"
                                            name="customCourse"
                                            value={formData.customCourse}
                                            onChange={handleChange}
                                            placeholder="Type your course name..."
                                            className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-6 font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0066CC] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                                        />
                                    </motion.div>
                                )}

                                <button
                                    disabled={loading}
                                    className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold h-12 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:text-md flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Submitting Request..." : "Schedule Free Counseling"}
                                    {!loading && <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
                                </button>

                                <p className="text-center text-[10px] text-slate-400 mt-4 leading-relaxed px-4">
                                    By clicking submit, you authorize AOTMS to contact you. Your data is secure with us.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    );
};

export default Placements;
