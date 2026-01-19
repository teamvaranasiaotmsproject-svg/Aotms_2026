import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useCourses } from "@/hooks/useCourses";

export const CourseRequestSection = () => {
    const { data: courses } = useCourses();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: ""
    });
    const [loading, setLoading] = useState(false);

    // Prepare marquee items (duplicate list for seamless loop)
    const marqueeCourses = courses ? [...courses, ...courses, ...courses] : [];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Real-time Input Restrictions
        if (name === 'phone') {
            const numbersOnly = value.replace(/[^0-9]/g, '');
            if (numbersOnly.length <= 10) {
                setFormData({ ...formData, [name]: numbersOnly });
            }
            return;
        }

        if (name === 'name') {
            const alphabetsOnly = value.replace(/[^a-zA-Z\s]/g, '');
            setFormData({ ...formData, [name]: alphabetsOnly });
            return;
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim() || formData.name.trim().length < 3) {
            toast.error("Please enter a valid Name (min 3 characters)");
            setLoading(false);
            return;
        }

        if (!formData.email || !emailRegex.test(formData.email)) {
            toast.error("Please enter a valid Email address");
            setLoading(false);
            return;
        }

        if (!formData.phone || formData.phone.length !== 10) {
            toast.error("Please enter a valid 10-digit Phone Number");
            setLoading(false);
            return;
        }

        if (!formData.course.trim() || formData.course.trim().length < 3) {
            toast.error("Please enter a valid Course Name");
            setLoading(false);
            return;
        }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/leads`, formData);
            toast.success("Request submitted successfully!");
            setFormData({ name: "", email: "", phone: "", course: "" });
        } catch (error) {
            console.error(error);
            toast.error("Failed to submit request.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-8 md:py-16 lg:py-20 bg-[#0066CC] relative overflow-hidden w-full">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between relative gap-10 lg:gap-16">
                    {/* Right Side - Course Image Auto-Scroll Carousel */}
                    <div className="lg:w-[50%] relative h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden flex flex-col justify-center gap-4 sm:gap-6 order-1 lg:order-2">
                        {/* Overlay Gradient for smooth fade on sides */}
                        <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-[#0066CC] to-transparent z-10" />
                        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#0066CC] to-transparent z-10" />

                        {marqueeCourses.length > 0 ? (
                            <>
                                {/* Row 1: Scroll Left */}
                                <div className="w-full overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300">
                                    <motion.div
                                        className="flex gap-4 w-max"
                                        animate={{ x: ["0%", "-33.33%"] }}
                                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                                    >
                                        {marqueeCourses.map((course, index) => (
                                            <div key={`r1-${course._id}-${index}`} className="relative w-40 h-28 sm:w-52 sm:h-36 rounded-lg overflow-hidden shrink-0">
                                                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/20" />
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Row 2: Scroll Right (Center Row - Larger) */}
                                <div className="w-full overflow-hidden py-4">
                                    <motion.div
                                        className="flex gap-4 w-max"
                                        initial={{ x: "-33.33%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                    >
                                        {marqueeCourses.map((course, index) => (
                                            <div key={`r2-${course._id}-${index}`} className="relative w-56 h-40 sm:w-72 sm:h-48 rounded-xl overflow-hidden shrink-0 border-2 border-white/20">
                                                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                                    <p className="text-white text-[10px] sm:text-xs font-bold truncate">{course.title}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Row 3: Scroll Left - Hidden on smallest mobile */}
                                <div className="w-full overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                                    <motion.div
                                        className="flex gap-4 w-max"
                                        animate={{ x: ["0%", "-33.33%"] }}
                                        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                                    >
                                        {marqueeCourses.map((course, index) => (
                                            <div key={`r3-${course._id}-${index}`} className="relative w-40 h-28 sm:w-52 sm:h-36 rounded-lg overflow-hidden shrink-0">
                                                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/20" />
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white/50">
                                Loading Courses...
                            </div>
                        )}
                    </div>

                    {/* Left Side - Content */}
                    <div className="lg:w-[45%] flex flex-col justify-center relative z-10 w-full order-2 lg:order-1 text-center lg:text-left">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-white font-bold text-sm w-fit mb-6 shadow-sm mx-auto lg:mx-0"
                        >
                            <Zap className="w-4 h-4 fill-accent text-accent" />
                            <span>Course Request in Vijayawada</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 font-display tracking-tight leading-[1.1]"
                        >
                            Find Your Best Course With Us in Vijayawada
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/90 text-sm sm:text-base md:text-lg mb-8 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Start Your IT Career Today! Enroll Now for a Free Demo in Vijayawada and get expert guidance from industry masters.
                        </motion.p>

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-4 w-full"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="flex-1 px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
                                />
                                <div className="flex-1 relative group/input">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 font-black text-sm border-r border-slate-200 pr-3 pointer-events-none group-focus-within/input:text-accent transition-colors">
                                        +91
                                    </div>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-16 pr-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <input
                                    type="text"
                                    name="course"
                                    placeholder="Course Name"
                                    value={formData.course}
                                    onChange={handleChange}
                                    required
                                    className="flex-1 px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="flex-1 px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
                                />
                            </div>
                            <button disabled={loading} className="px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-accent/20 whitespace-nowrap w-full sm:w-max self-center lg:self-start disabled:opacity-70 disabled:cursor-not-allowed">
                                {loading ? "Submitting..." : "Submit Request"}
                            </button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};
