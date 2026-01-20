import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, User, Mail, Smartphone, BookOpen } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

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

        if (!formData.name.trim() || formData.name.trim().length < 3) newErrors.name = "Min 3 chars";
        if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = "Invalid email";
        if (!formData.phone || formData.phone.length !== 10) newErrors.phone = "10 digits req";
        if (!formData.course.trim() || formData.course.trim().length < 3) newErrors.course = "Required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        setIsSubmitting(true);
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/leads`, { ...formData, description: `Source: ${source}` });
            setIsSubmitted(true);
            toast.success("Demo booked successfully!");
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
            <DialogContent className="w-[95vw] md:w-full max-w-[480px] p-0 overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl z-[99999]">

                {/* Modern Header with Gradient & Pattern */}
                <div className="relative bg-gradient-to-r from-[#0066CC] to-[#0052a3] px-6 py-6 md:py-8 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                        <div className="inline-flex p-3 bg-white/10 rounded-2xl mb-2 backdrop-blur-md shadow-inner ring-1 ring-white/20">
                            <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-yellow-300" strokeWidth={2.5} />
                        </div>
                        <DialogTitle className="text-xl md:text-2xl font-black tracking-tight">
                            Book Your Free Demo
                        </DialogTitle>
                        <DialogDescription className="text-blue-100 font-medium max-w-xs mx-auto text-sm leading-relaxed">
                            Experience our expert-led training firsthand. Reserve your exclusive slot today.
                        </DialogDescription>
                    </div>
                </div>

                <div className="px-6 py-6 md:px-8 md:py-8">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-4">
                                {/* Name Input */}
                                <div className="space-y-1.5 group">
                                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</Label>
                                    <div className="relative transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0066CC]/20 rounded-xl">
                                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0066CC] transition-colors">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <Input
                                            id="name" name="name"
                                            placeholder="e.g. Rahul Kumar"
                                            value={formData.name} onChange={handleChange}
                                            className={`pl-11 h-11 md:h-12 bg-slate-50 border-slate-200 rounded-xl focus:border-[#0066CC] focus:bg-white transition-all font-medium ${errors.name ? 'border-red-500 bg-red-50' : ''}`}
                                        />
                                    </div>
                                    {errors.name && <p className="text-[11px] text-red-500 font-bold ml-1 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-red-500" />{errors.name}</p>}
                                </div>

                                {/* Contact Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5 group">
                                        <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Mobile</Label>
                                        <div className="relative transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0066CC]/20 rounded-xl">
                                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0066CC] transition-colors">
                                                <Smartphone className="w-5 h-5" />
                                            </div>
                                            <Input
                                                id="phone" name="phone" type="tel"
                                                placeholder="98765..."
                                                value={formData.phone} onChange={handleChange}
                                                className={`pl-11 h-11 md:h-12 bg-slate-50 border-slate-200 rounded-xl focus:border-[#0066CC] focus:bg-white transition-all font-medium ${errors.phone ? 'border-red-500 bg-red-50' : ''}`}
                                            />
                                        </div>
                                        {errors.phone && <p className="text-[11px] text-red-500 font-bold ml-1 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-red-500" />{errors.phone}</p>}
                                    </div>

                                    <div className="space-y-1.5 group">
                                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email</Label>
                                        <div className="relative transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0066CC]/20 rounded-xl">
                                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0066CC] transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <Input
                                                id="email" name="email" type="email"
                                                placeholder="rahul@..."
                                                value={formData.email} onChange={handleChange}
                                                className={`pl-11 h-11 md:h-12 bg-slate-50 border-slate-200 rounded-xl focus:border-[#0066CC] focus:bg-white transition-all font-medium ${errors.email ? 'border-red-500 bg-red-50' : ''}`}
                                            />
                                        </div>
                                        {errors.email && <p className="text-[11px] text-red-500 font-bold ml-1 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-red-500" />{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Course Input */}
                                <div className="space-y-1.5 group">
                                    <Label htmlFor="course" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Course of Interest</Label>
                                    <div className="relative transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0066CC]/20 rounded-xl">
                                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0066CC] transition-colors">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <Input
                                            id="course" name="course"
                                            placeholder="e.g. Data Science, AWS, Python..."
                                            value={formData.course} onChange={handleChange}
                                            className={`pl-11 h-11 md:h-12 bg-slate-50 border-slate-200 rounded-xl focus:border-[#0066CC] focus:bg-white transition-all font-medium ${errors.course ? 'border-red-500 bg-red-50' : ''}`}
                                        />
                                    </div>
                                    {errors.course && <p className="text-[11px] text-red-500 font-bold ml-1 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-red-500" />{errors.course}</p>}
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 md:h-14 bg-gradient-to-r from-[#FD5A1A] to-[#E04F16] hover:from-[#E04F16] hover:to-[#C03E10] text-white font-bold text-base md:text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Confirming Slot...
                                    </>
                                ) : (
                                    "Confirm My Free Demo"
                                )}
                            </Button>
                        </form>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center py-8 space-y-6 animate-in fade-in zoom-in duration-500">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
                                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl relative z-10 ring-4 ring-white">
                                    <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={3} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Booking Confirmed!</h3>
                                <p className="text-slate-500 max-w-[280px] mx-auto text-base font-medium leading-relaxed">
                                    Success! Our team will contact you shortly to schedule your free demo session.
                                </p>
                            </div>
                            <Button
                                onClick={handleClose}
                                className="h-11 px-8 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all"
                            >
                                Close
                            </Button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};
