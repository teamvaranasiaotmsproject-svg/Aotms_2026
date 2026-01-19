import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, Sparkles, BookOpen, Smartphone, Mail, User } from "lucide-react";
import axios from 'axios';
import { toast } from 'sonner';

interface CourseEnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultCourse?: string;
    source?: string;
}

export const CourseEnrollmentModal = ({ isOpen, onClose, defaultCourse = "", source = "Website Lead" }: CourseEnrollmentModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: defaultCourse
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));

        if (name === 'phone') {
            const numbersOnly = value.replace(/[^0-9]/g, '');
            if (numbersOnly.length <= 10) setFormData({ ...formData, [name]: numbersOnly });
            return;
        }

        if (name === 'name') {
            const alphabetsOnly = value.replace(/[^a-zA-Z\s]/g, '');
            setFormData({ ...formData, [name]: alphabetsOnly });
            return;
        }

        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim() || formData.name.trim().length < 3) newErrors.name = "Name must be at least 3 characters";
        if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address";
        if (!formData.phone || formData.phone.length !== 10) newErrors.phone = "Phone number must be exactly 10 digits";
        if (!formData.course.trim() || formData.course.trim().length < 3) newErrors.course = "Please specify a valid course name";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            toast.error("Please fix the errors in the form");
            return;
        }
        setIsSubmitting(true);
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/leads`, { ...formData, description: `Source: ${source}` });
            setIsSubmitted(true);
            toast.success("Request submitted successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to submit request.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        if (isSubmitted) {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", course: defaultCourse });
            setErrors({});
        }
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="w-[90vw] md:w-full sm:max-w-[400px] max-h-[85vh] overflow-y-auto p-0 bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl z-[200]">

                {/* Decorative Header with Gradient */}
                <div className="relative bg-gradient-to-br from-[#0075CF] to-[#005fa8] p-4 md:p-5 text-white overflow-hidden shrink-0">
                    <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-white/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="inline-flex items-center justify-center p-2 md:p-2.5 bg-white/10 rounded-xl md:rounded-2xl mb-2 backdrop-blur-sm shadow-inner ring-1 ring-white/20">
                            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#FFD700]" strokeWidth={2.5} />
                        </div>
                        <DialogTitle className="text-lg md:text-xl font-black tracking-tight">
                            {source.includes("50% Off") ? (
                                <span className="flex flex-col gap-0.5">
                                    <span className="text-yellow-300 text-xs md:text-sm uppercase tracking-widest">Limited Time Offer</span>
                                    <span>Get 50% OFF Today</span>
                                </span>
                            ) : source === "Free Demo" ? "Book Free Demo" : "Start Your Journey"}
                        </DialogTitle>
                        <DialogDescription className="text-blue-50 mt-1 font-medium text-xs max-w-xs mx-auto">
                            {source.includes("50% Off") ? "Register now to claim your discount on any course!" : "Expert-led training in Vijayawada. Your career starts here."}
                        </DialogDescription>
                    </div>
                </div>

                <div className="p-4 md:p-5">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-3">

                            {/* Name Input */}
                            <div className="space-y-1 group">
                                <Label htmlFor="name" className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</Label>
                                <div className="relative transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0075CF]/20 rounded-xl">
                                    <div className="absolute left-3 md:left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0075CF] transition-colors">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="e.g. Rahul Kumar"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className={`pl-10 h-9 md:h-10 bg-slate-50 border-slate-200 rounded-lg md:rounded-xl focus:border-[#0075CF] transition-all text-xs md:text-sm font-medium ${errors.name ? "border-red-500 focus-visible:ring-red-500 bg-red-50" : ""}`}
                                    />
                                </div>
                                {errors.name && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.name}</p>}
                            </div>

                            {/* Email & Phone Grid */}
                            <div className="grid grid-cols-1 gap-3">
                                <div className="space-y-1 group">
                                    <Label htmlFor="email" className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</Label>
                                    <div className="relative transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0075CF]/20 rounded-xl">
                                        <div className="absolute left-3 md:left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0075CF] transition-colors">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="rahul@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            className={`pl-10 h-9 md:h-10 bg-slate-50 border-slate-200 rounded-lg md:rounded-xl focus:border-[#0075CF] transition-all text-xs md:text-sm font-medium ${errors.email ? "border-red-500 focus-visible:ring-red-500 bg-red-50" : ""}`}
                                        />
                                    </div>
                                    {errors.email && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.email}</p>}
                                </div>

                                <div className="space-y-1 group">
                                    <Label htmlFor="phone" className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Mobile Number</Label>
                                    <div className="relative transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0075CF]/20 rounded-xl">
                                        <div className="absolute left-3 md:left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0075CF] transition-colors flex items-center gap-1 font-bold text-xs md:text-sm">
                                            <Smartphone className="w-3.5 h-3.5 mr-0.5" /> +91
                                        </div>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="98765 43210"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            className={`pl-16 md:pl-20 h-9 md:h-10 bg-slate-50 border-slate-200 rounded-lg md:rounded-xl focus:border-[#0075CF] transition-all text-xs md:text-sm font-medium ${errors.phone ? "border-red-500 focus-visible:ring-red-500 bg-red-50" : ""}`}
                                        />
                                    </div>
                                    {errors.phone && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.phone}</p>}
                                </div>
                            </div>

                            {/* Course Input */}
                            <div className="space-y-1 group">
                                <Label htmlFor="course" className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Course of Interest</Label>
                                <div className="relative transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0075CF]/20 rounded-xl">
                                    <div className="absolute left-3 md:left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0075CF] transition-colors">
                                        <BookOpen className="w-4 h-4" />
                                    </div>
                                    <Input
                                        id="course"
                                        name="course"
                                        placeholder="e.g. Data Science,..."
                                        value={formData.course}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className={`pl-10 h-9 md:h-10 bg-slate-50 border-slate-200 rounded-lg md:rounded-xl focus:border-[#0075CF] transition-all text-xs md:text-sm font-medium ${errors.course ? "border-red-500 focus-visible:ring-red-500 bg-red-50" : ""}`}
                                    />
                                </div>
                                {errors.course && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.course}</p>}
                            </div>

                            <DialogFooter className="pt-2">
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#FD5A1A] to-[#E04F16] hover:from-[#E04F16] hover:to-[#C03E10] text-white font-bold h-10 md:h-11 text-sm md:text-base rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-t border-white/20"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        source.includes("50% Off") ? "Claim My 50% Discount" : source === "Free Demo" ? "Secure My Free Demo Slot" : "Start My Career Journey"
                                    )}
                                </Button>
                            </DialogFooter>
                        </form>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center py-6 md:py-8 space-y-4 animate-in fade-in zoom-in duration-500">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl relative z-10 ring-4 ring-white">
                                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1 tracking-tight">You're All Set!</h3>
                                <p className="text-slate-500 max-w-[260px] mx-auto text-sm md:text-base leading-relaxed font-medium">
                                    Our career experts will contact you shortly to confirm your slot.
                                </p>
                            </div>
                            <Button onClick={handleClose} className="mt-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3 rounded-lg md:rounded-xl transition-all text-sm">
                                Back to Home
                            </Button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};
