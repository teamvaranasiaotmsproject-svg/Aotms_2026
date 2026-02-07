import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Eye, EyeOff, BookOpen } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";
import { auth } from "@/lib/firebase";
import {
    degrees, departments, countryCodes,
    passoutYears, courseOptions
} from "./navData";

interface AuthModalProps {
    showAuthModal: boolean;
    setShowAuthModal: (show: boolean) => void;
    authMode: 'login' | 'register' | 'forgot';
    setAuthMode: (mode: 'login' | 'register' | 'forgot') => void;
}

export const AuthModal = ({ showAuthModal, setShowAuthModal, authMode, setAuthMode }: AuthModalProps) => {
    const navigate = useNavigate();
    const { setAuth } = useAuthStore();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Form States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [degree, setDegree] = useState(degrees[0]);
    const [department, setDepartment] = useState(departments[0]);
    const [passoutYear, setPassoutYear] = useState(passoutYears[0]);
    const [selectedCourse, setSelectedCourse] = useState(courseOptions[0].name);
    const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
    const [otherCourse, setOtherCourse] = useState('');
    const [passwordStrength, setPasswordStrength] = useState<'Weak' | 'Medium' | 'Strong' | ''>('');

    const selectedCountry = countryCodes.find(c => c.code === countryCode) || countryCodes[0];
    const selectedCourseData = courseOptions.find(c => c.name === selectedCourse) || courseOptions[0];

    const checkPasswordStrength = (pass: string) => {
        if (!pass) return '';
        let score = 0;
        if (pass.length >= 8) score++;
        if (/[A-Z]/.test(pass)) score++;
        if (/[a-z]/.test(pass)) score++;
        if (/[0-9]/.test(pass)) score++;
        if (/[^A-Za-z0-9]/.test(pass)) score++;
        if (score <= 2) return 'Weak';
        if (score <= 4) return 'Medium';
        return 'Strong';
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setPassword(val);
        setPasswordStrength(checkPasswordStrength(val));
    };

    const handleAuthSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;
        const newErrors: { [key: string]: string } = {};

        if (authMode === 'register') {
            if (!firstName) newErrors.firstName = "Required";
            if (!lastName) newErrors.lastName = "Required";
            if (!email) newErrors.email = "Required";
            if (!phone) newErrors.phone = "Required";
            if (phone.length < 10) newErrors.phone = "Minimum 10 digits";
            if (!password) newErrors.password = "Required";
            if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
            if (selectedCourse === 'Other' && !otherCourse) newErrors.otherCourse = "Please specify";
            if (passwordStrength !== 'Strong') newErrors.password = "Password is not strong enough";
        } else {
            if (!email) newErrors.email = "Required";
            if (!password && authMode === 'login') newErrors.password = "Required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsLoading(false);
            return;
        }
        setErrors({});

        try {
            if (authMode === 'login') {
                const res = await axios.post(`${API_URL}/login`, { email, password });
                setAuth(res.data.user, res.data.token);
                toast.success(`Welcome back!`);
                setShowAuthModal(false);
                navigate('/dashboard');
            } else if (authMode === 'register') {
                const fullPhone = `${countryCode}${phone}`;
                const res = await axios.post(`${API_URL}/register`, {
                    name: `${firstName} ${lastName}`,
                    email,
                    password,
                    phone: fullPhone,
                    degree,
                    department,
                    passoutYear,
                    course: selectedCourse === 'Other' ? otherCourse : selectedCourse
                });
                setAuth(res.data.user, res.data.token);
                toast.success("Account created!");
                setShowAuthModal(false);
                navigate('/dashboard');
            } else {
                await axios.post(`${API_URL}/forgot-password`, { email });
                toast.success("Reset link sent.");
                setAuthMode('login');
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.msg || "Something went wrong");
            } else {
                toast.error("Something went wrong");
            }
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <AnimatePresence>
            {showAuthModal && (
                <div className="fixed inset-0 z-[1002] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setShowAuthModal(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className={cn(
                            "relative w-full max-w-[480px] bg-white rounded-3xl shadow-2xl z-[1003] overflow-hidden flex flex-col",
                            authMode === 'register' ? "h-[85vh]" : "max-h-[85vh]"
                        )}
                    >
                        <button onClick={() => setShowAuthModal(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 z-10 transition-colors" aria-label="Close Modal">
                            <X className="w-5 h-5" />
                        </button>

                        <div className={cn("px-8 pt-8 pb-4 text-center border-b border-slate-50", authMode === 'register' ? "mb-0" : "mb-2")}>
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                                {authMode === 'login' ? 'Welcome Back' : authMode === 'register' ? 'Join Us' : 'Reset Password'}
                            </h2>
                            <p className="text-sm text-slate-500 font-medium mt-1">
                                {authMode === 'login' ? 'Please sign in to continue' : authMode === 'register' ? 'Start your learning journey today' : 'Enter email to recover account'}
                            </p>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 pt-4">
                            <form onSubmit={handleAuthSubmit} className="space-y-5">
                                {authMode === 'register' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase text-slate-400 ml-1">First Name</label>
                                                <Input
                                                    placeholder="John"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    className={cn("h-11 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium", errors.firstName && "border-red-500 bg-red-50/50")}
                                                />
                                                {errors.firstName && <p className="text-[10px] text-red-500 ml-1 font-bold">{errors.firstName}</p>}
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase text-slate-400 ml-1">Last Name</label>
                                                <Input
                                                    placeholder="Doe"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    className={cn("h-11 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium", errors.lastName && "border-red-500 bg-red-50/50")}
                                                />
                                                {errors.lastName && <p className="text-[10px] text-red-500 ml-1 font-bold">{errors.lastName}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold uppercase text-slate-400 ml-1">Mobile Number</label>
                                            <div className="flex gap-2">
                                                <div className="relative">
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                                        className="w-[100px] h-11 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all flex items-center justify-between px-3 focus:outline-none focus:ring-4 focus:ring-primary/10"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <img
                                                                src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                                                                alt={selectedCountry.label}
                                                                className="w-5 h-auto rounded shadow-sm"
                                                            />
                                                            <span className="text-xs font-bold text-slate-700">{selectedCountry.code}</span>
                                                        </div>
                                                        <ChevronDown className={cn("w-3 h-3 text-slate-400 transition-transform", isCountryDropdownOpen ? "rotate-180" : "")} />
                                                    </button>

                                                    <AnimatePresence>
                                                        {isCountryDropdownOpen && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                                                className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-slate-200 z-[1005] overflow-hidden p-1"
                                                            >
                                                                <div className="max-h-56 overflow-y-auto custom-scrollbar">
                                                                    {countryCodes.map((c) => (
                                                                        <button
                                                                            key={c.label}
                                                                            type="button"
                                                                            onClick={() => {
                                                                                setCountryCode(c.code);
                                                                                setIsCountryDropdownOpen(false);
                                                                            }}
                                                                            className={cn(
                                                                                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors",
                                                                                countryCode === c.code ? "bg-blue-50 text-blue-700 font-bold" : "hover:bg-slate-50 text-slate-600"
                                                                            )}
                                                                        >
                                                                            <div className="flex items-center gap-3">
                                                                                <img
                                                                                    src={`https://flagcdn.com/w40/${c.iso}.png`}
                                                                                    alt={c.label}
                                                                                    className="w-5 h-auto rounded-sm"
                                                                                />
                                                                                <span>{c.label}</span>
                                                                            </div>
                                                                            <span className="opacity-60 font-medium">{c.code}</span>
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                    {isCountryDropdownOpen && (
                                                        <div className="fixed inset-0 z-[-1]" onClick={() => setIsCountryDropdownOpen(false)} />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <Input
                                                        placeholder="99999 99999"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                                        className={cn("h-11 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all font-medium text-sm", errors.phone && "border-red-500 bg-red-50/50")}
                                                    />
                                                    {errors.phone && <p className="text-[10px] text-red-500 ml-1 mt-0.5 font-bold">{errors.phone}</p>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase text-slate-400 ml-1">Degree</label>
                                                <div className="relative">
                                                    <select
                                                        aria-label="Degree"
                                                        value={degree}
                                                        onChange={(e) => setDegree(e.target.value)}
                                                        className="w-full h-11 appearance-none rounded-xl bg-slate-50 border border-slate-200 px-3 text-sm focus:outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 font-bold text-slate-700 cursor-pointer transition-all"
                                                    >
                                                        {degrees.map(d => <option key={d} value={d}>{d}</option>)}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase text-slate-400 ml-1">Dept</label>
                                                <div className="relative">
                                                    <select
                                                        aria-label="Department"
                                                        value={department}
                                                        onChange={(e) => setDepartment(e.target.value)}
                                                        className="w-full h-11 appearance-none rounded-xl bg-slate-50 border border-slate-200 px-3 text-sm focus:outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 font-bold text-slate-700 cursor-pointer transition-all"
                                                    >
                                                        {departments.map(d => <option key={d} value={d}>{d}</option>)}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase text-slate-400 ml-1">Year</label>
                                                <div className="relative">
                                                    <select
                                                        aria-label="Passout Year"
                                                        value={passoutYear}
                                                        onChange={(e) => setPassoutYear(e.target.value)}
                                                        className="w-full h-11 appearance-none rounded-xl bg-slate-50 border border-slate-200 px-3 text-sm focus:outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 font-bold text-slate-700 cursor-pointer transition-all"
                                                    >
                                                        {passoutYears.map(y => <option key={y} value={y}>{y}</option>)}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase text-slate-400 ml-1">Course</label>
                                                <div className="relative">
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
                                                        className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all flex items-center justify-between px-3 focus:outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                                                    >
                                                        <div className="flex items-center gap-2 overflow-hidden">
                                                            {selectedCourseData.icon && <selectedCourseData.icon className="w-4 h-4 text-primary shrink-0" />}
                                                            <span className="text-sm font-bold text-slate-700 truncate">{selectedCourse}</span>
                                                        </div>
                                                        <ChevronDown className={cn("w-3.5 h-3.5 text-slate-400 transition-transform", isCourseDropdownOpen ? "rotate-180" : "")} />
                                                    </button>

                                                    <AnimatePresence>
                                                        {isCourseDropdownOpen && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                                                className="absolute bottom-full left-0 mb-1 w-full bg-white rounded-xl shadow-xl border border-slate-200 z-[1005] overflow-hidden p-1"
                                                            >
                                                                <div className="max-h-48 overflow-y-auto custom-scrollbar">
                                                                    {courseOptions.map((c) => (
                                                                        <button
                                                                            key={c.name}
                                                                            type="button"
                                                                            onClick={() => {
                                                                                setSelectedCourse(c.name);
                                                                                setIsCourseDropdownOpen(false);
                                                                            }}
                                                                            className={cn(
                                                                                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs transition-colors",
                                                                                selectedCourse === c.name ? "bg-blue-50 text-blue-700 font-bold" : "hover:bg-slate-50 text-slate-600"
                                                                            )}
                                                                        >
                                                                            {c.icon && <c.icon className="w-4 h-4 opacity-70" />}
                                                                            <span>{c.name}</span>
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                    {isCourseDropdownOpen && (
                                                        <div className="fixed inset-0 z-[-1]" onClick={() => setIsCourseDropdownOpen(false)} />
                                                    )}
                                                </div>
                                                {errors.otherCourse && <p className="text-[10px] text-red-500 ml-1 mt-0.5 font-bold">{errors.otherCourse}</p>}
                                            </div>
                                        </div>

                                        {selectedCourse === 'Other' && (
                                            <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                                                <label className="text-[11px] font-bold uppercase text-slate-400 ml-1 mb-1.5 block">Specify Course</label>
                                                <Input
                                                    placeholder="Specify your course"
                                                    value={otherCourse}
                                                    onChange={(e) => setOtherCourse(e.target.value)}
                                                    className={cn("h-11 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium", errors.otherCourse && "border-red-500 bg-red-50/50")}
                                                />
                                            </div>
                                        )}
                                    </>
                                )}

                                <div>
                                    <div className="space-y-4">
                                        <div className="space-y-1.5">
                                            {authMode === 'register' && <label className="text-[11px] font-bold uppercase text-slate-400 ml-1">Email Address</label>}
                                            <Input
                                                type="email"
                                                placeholder={authMode === 'register' ? "john@example.com" : "Email Address"}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className={cn("h-11 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all font-medium", authMode === 'register' ? "text-sm" : "text-base", errors.email && "border-red-500 bg-red-50/50")}
                                            />
                                            {errors.email && <p className="text-[10px] text-red-500 ml-1 font-bold">{errors.email}</p>}
                                        </div>

                                        {authMode !== 'forgot' && (
                                            <div className="space-y-1.5">
                                                {authMode === 'register' && <label className="text-[11px] font-bold uppercase text-slate-400 ml-1">Password</label>}
                                                <div className="relative">
                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder={authMode === 'register' ? "Create a password" : "Password"}
                                                        value={password}
                                                        onChange={authMode === 'register' ? handlePasswordChange : (e) => setPassword(e.target.value)}
                                                        className={cn("h-11 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all pr-10 font-medium", authMode === 'register' ? "text-sm" : "text-base", errors.password && "border-red-500 bg-red-50/50")}
                                                    />
                                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                    </button>
                                                </div>
                                                {errors.password && <p className="text-[10px] text-red-500 ml-1 font-bold">{errors.password}</p>}
                                                {authMode === 'register' && password && (
                                                    <div className="mt-2 px-1">
                                                        <div className="flex items-center gap-1.5 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                            <div className={`h-full flex-1 transition-all duration-500 rounded-full ${passwordStrength ? (passwordStrength === 'Weak' ? 'bg-red-500' : passwordStrength === 'Medium' ? 'bg-yellow-500' : 'bg-green-500') : 'bg-transparent'}`} />
                                                            <div className={`h-full flex-1 transition-all duration-500 rounded-full ${passwordStrength === 'Medium' || passwordStrength === 'Strong' ? (passwordStrength === 'Medium' ? 'bg-yellow-500' : 'bg-green-500') : 'bg-transparent'}`} />
                                                            <div className={`h-full flex-1 transition-all duration-500 rounded-full ${passwordStrength === 'Strong' ? 'bg-green-500' : 'bg-transparent'}`} />
                                                        </div>
                                                        <div className="flex justify-between items-center mt-1.5">
                                                            <p className="text-[10px] text-slate-400 font-bold tracking-wide">Must include 8+ chars, uppercase & special</p>
                                                            <p className={cn("text-[10px] font-black uppercase tracking-wider",
                                                                passwordStrength === 'Weak' ? 'text-red-500' :
                                                                    passwordStrength === 'Medium' ? 'text-yellow-600' :
                                                                        passwordStrength === 'Strong' ? 'text-green-600' : 'text-slate-300'
                                                            )}>{passwordStrength || 'Unknown'}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {authMode === 'register' && (
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase text-slate-400 ml-1">Confirm Password</label>
                                                <div className="relative">
                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Confirm your password"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        className={cn("h-11 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all pr-10 text-sm font-medium", errors.confirmPassword && "border-red-500 bg-red-50/50")}
                                                    />
                                                </div>
                                                {errors.confirmPassword && <p className="text-[10px] text-red-500 ml-1 font-bold">{errors.confirmPassword}</p>}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {authMode === 'login' && (
                                    <div className="text-right">
                                        <button type="button" onClick={() => setAuthMode('forgot')} className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">
                                            Forgot Password?
                                        </button>
                                    </div>
                                )}

                                <div className="pt-2">
                                    <Button type="submit" className={cn("w-full h-11 md:h-12 rounded-xl font-bold text-sm shadow-xl shadow-primary/20 bg-[#0066CC] hover:bg-[#0052a3] transition-all transform active:scale-[0.98]")} disabled={isLoading}>
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Processing...
                                            </div>
                                        ) : authMode === 'login' ? 'Sign In' : authMode === 'register' ? 'Create Account' : 'Send Reset Link'}
                                    </Button>

                                    <p className="text-center text-xs text-slate-500 font-medium mt-4">
                                        {authMode === 'login' ? "Don't have an account?" : "Already have an account?"}
                                        <button type="button" onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')} className="ml-1 font-bold text-[#0066CC] hover:underline">
                                            {authMode === 'login' ? 'Register' : 'Sign In'}
                                        </button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
