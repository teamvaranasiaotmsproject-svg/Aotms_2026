import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"; // Updated imports
import { toast } from "sonner";
import axios from "axios";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, CheckCircle2, XCircle } from "lucide-react";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ResetPassword = () => {
    const [searchParams] = useSearchParams(); // Hook for query params
    const token = searchParams.get("token"); // Get token from URL
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleResetSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        setIsLoading(true);

        try {
            // Use env in production
            const API_URL = "http://localhost:5000/api/auth";

            await axios.put(`${API_URL}/reset-password/${token}`, { password });

            toast.success("Password updated successfully! Please login.");
            navigate("/"); // Redirect to home/login

        } catch (error: any) {
            console.error(error);
            const msg = error.response?.data?.msg || "Failed to reset password. Link might be expired.";
            toast.error(msg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-inter">
            <Header />

            <div className="flex-grow flex items-center justify-center px-4 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-10 border border-slate-100"
                >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 mb-2">Set New Password</h1>
                        <p className="text-slate-500">Your new password must be different from previously used passwords.</p>
                    </div>

                    <form onSubmit={handleResetSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">New Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input
                                    required
                                    type={showPassword ? "text" : "password"}
                                    className="pl-11 pr-11 bg-slate-50 border-none h-12 rounded-xl"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Confirm Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input
                                    required
                                    type={showPassword ? "text" : "password"}
                                    className="pl-11 pr-11 bg-slate-50 border-none h-12 rounded-xl"
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {password && confirmPassword && (
                            <div className={`flex items-center gap-2 text-xs font-bold ${password === confirmPassword ? "text-green-600" : "text-red-500"}`}>
                                {password === confirmPassword ? (
                                    <>
                                        <CheckCircle2 className="w-4 h-4" /> Passwords match
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="w-4 h-4" /> Passwords do not match
                                    </>
                                )}
                            </div>
                        )}

                        <Button
                            disabled={isLoading}
                            className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                        >
                            {isLoading ? 'Updating Password...' : 'Update Password'}
                        </Button>
                    </form>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default ResetPassword;
