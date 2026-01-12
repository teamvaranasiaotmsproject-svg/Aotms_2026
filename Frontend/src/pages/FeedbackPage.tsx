
import { useState } from "react";
import { Header as Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, Send, MessageSquare, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

const FeedbackPage = () => {
    const navigate = useNavigate();
    const token = useAuthStore((state) => state.token);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        category: "Course Content",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!token) {
            toast.error("You must be logged in to submit feedback.");
            return;
        }

        setLoading(true);

        try {
            await axios.post('https://aotms-2026.onrender.com/api/feedback', { ...formData, rating });
            toast.success("Thank you for your feedback!", {
                description: "We appreciate your input and will use it to improve."
            });
            setFormData({ name: "", email: "", role: "", category: "Course Content", message: "" });
            setRating(0);
        } catch (error) {
            console.error(error);
            toast.error("Failed to submit feedback. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#FF6B35]/20">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-36 md:pt-48 pb-16 bg-[#0B1221] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066CC]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 text-[#FF6B35] font-mono text-xs font-bold tracking-widest uppercase mb-4">
                        Share Your Thoughts
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                        We Value Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#00C2CB]">Feedback</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Your feedback helps us improve our courses and training methodology. Let us know how we're doing!
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Context & Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-[#0B1221] mb-4">Why your feedback matters?</h2>
                            <p className="text-slate-600 leading-relaxed">
                                At AOTMS, we are committed to providing the best industry-ready training. Whether you had a great experience or faced some challenges, we want to hear it all. Your insights directly influence our curriculum updates and teaching methods.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#0066CC]/10 rounded-xl flex items-center justify-center text-[#0066CC] mb-4">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0B1221] mb-2">Direct Impact</h3>
                                <p className="text-sm text-slate-500">Your suggestions go directly to our management and curriculum team.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center text-[#FF6B35] mb-4">
                                    <ThumbsUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0B1221] mb-2">Continuous Improvement</h3>
                                <p className="text-sm text-slate-500">We constantly evolve our training based on student feedback.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-[#0B1221] rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/20 rounded-full blur-2xl translate-x-10 -translate-y-10" />
                            <h3 className="text-white font-bold text-lg mb-2 relative z-10">Need immediate help?</h3>
                            <p className="text-slate-400 text-sm mb-4 relative z-10">If you have a query that needs urgent attention, please contact our support team directly.</p>
                            <a href="tel:+918019942233" className="inline-block text-white text-sm font-bold border-b border-[#FF6B35] pb-0.5 hover:text-[#FF6B35] transition-colors relative z-10">
                                Call +91 80199 42233
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Feedback Form */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#0B1221]">How would you rate your experience?</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            className="focus:outline-none transition-transform hover:scale-110"
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            onClick={() => setRating(star)}
                                            aria-label={`Rate ${star} stars`}
                                        >
                                            <Star
                                                className={`w-8 h-8 transition-colors ${star <= (hoverRating || rating)
                                                    ? "fill-[#FF6B35] text-[#FF6B35]"
                                                    : "text-slate-300"
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                                {rating > 0 && (
                                    <p className="text-sm font-medium text-[#FF6B35]">
                                        {rating === 5 ? "Excellent! 😍" : rating === 4 ? "Good! 🙂" : rating === 3 ? "Average 😐" : "We need to improve 😞"}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Name</label>
                                    <Input
                                        required
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0066CC] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                                    <Input
                                        required
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0066CC] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Role / Designation</label>
                                <Input
                                    placeholder="Software Engineer @ Google / CS Student"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0066CC] transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Feedback Category</label>
                                <select
                                    className="w-full h-12 px-3 rounded-md border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all text-sm"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    aria-label="Select Feedback Category"
                                >
                                    <option>Course Content</option>
                                    <option>Instructor Quality</option>
                                    <option>Campus Facilities</option>
                                    <option>Placement Support</option>
                                    <option>Website / Technical Issue</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Message</label>
                                <Textarea
                                    required
                                    placeholder="Tell us what you liked or what we can do better..."
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0066CC] transition-all resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-12 bg-gradient-to-r from-[#0066CC] to-[#00C2CB] hover:opacity-90 transition-opacity text-white font-bold rounded-xl shadow-lg shadow-blue-500/20"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Submitting...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Submit Feedback <Send className="w-4 h-4" />
                                    </span>
                                )}
                            </Button>

                            <p className="text-xs text-center text-slate-400 mt-4">
                                Your feedback is confidential and will be used solely for internal improvements.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FeedbackPage;
