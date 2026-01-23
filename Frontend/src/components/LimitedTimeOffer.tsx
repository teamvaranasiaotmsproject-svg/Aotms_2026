import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const STORAGE_KEY = 'limited_offer_shown';

const LimitedTimeOffer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation(); // Hook to check current path
    const [countdown, setCountdown] = useState(3); // Countdown from 3 seconds

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: ''
    });

    const closeForever = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        // If the route changes to anything other than the home page, close the popup.
        if (location.pathname !== '/') {
            setIsVisible(false);
            return;
        }

        // --- Logic to show the popup on the home page ---

        // 2. Open after 5 seconds
        const openTimer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => {
            clearTimeout(openTimer);
        };
    }, [location.pathname]);

    // Countdown logic
    useEffect(() => {
        if (isVisible && !isSubmitted) {
            if (countdown <= 0) {
                window.dispatchEvent(new Event('aotms-open-chatbot'));
                closeForever(); // Auto-close when countdown finishes
                return;
            }
            const countdownTimer = setTimeout(() => {
                setCountdown(c => c - 1);
            }, 1000);
            return () => clearTimeout(countdownTimer);
        }
    }, [isVisible, isSubmitted, countdown]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const numbers = value.replace(/[^0-9]/g, '');
            if (numbers.length <= 10) {
                setFormData(prev => ({ ...prev, phone: numbers }));
            }
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || formData.phone.length !== 10 || !formData.course) {
            toast.error('Please fill all fields correctly');
            return;
        }

        setLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/leads`, {
                ...formData,
                phone: `+91${formData.phone}`,
                type: 'limited-time-offer',
                source: 'Popup 50% Off'
            });

            setIsSubmitted(true);
            // No need to set localStorage here, it's already set.

            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        } catch {
            toast.error('Something went wrong. Try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-[2px] p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 20, opacity: 0 }}
                        transition={{ type: 'spring', bounce: 0.3 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-[480px] w-full relative"
                    >
                        <div className="bg-[#0066CC] p-6 text-center text-white relative">
                            <div className="absolute top-3 right-4 flex items-center space-x-2">
                                <span className="text-white/80 text-sm font-mono bg-black/20 rounded-full w-6 h-6 flex items-center justify-center">
                                    {countdown > 0 ? countdown : '!'}
                                </span>
                                <button
                                    onClick={closeForever}
                                    className="text-white/70 hover:text-white"
                                    aria-label="Close offer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <Sparkles className="w-10 h-10 mx-auto text-yellow-400 mb-2" />
                            <h2 className="text-3xl font-black">Get 50% OFF Today</h2>
                            <p className="text-blue-100 text-sm mt-1">
                                Register now to claim your discount on any course!
                            </p>
                        </div>

                        <div className="p-8 bg-slate-50">
                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold">Discount Unlocked!</h3>
                                    <p className="text-slate-600">We’ll contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-slate-700 mb-1 block">Full Name</label>
                                        <input
                                            name="name"
                                            placeholder="e.g. Rahul Kumar"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full h-11 px-4 rounded-lg border"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-slate-700 mb-1 block">Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="rahul@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full h-11 px-4 rounded-lg border"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-slate-700 mb-1 block">Mobile Number</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">+91</span>
                                            <input
                                                name="phone"
                                                placeholder="98765 43210"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full h-11 px-4 pl-10 rounded-lg border"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-slate-700 mb-1 block">Course of Interest</label>
                                        <input
                                            name="course"
                                            placeholder="e.g. Data Science,..."
                                            value={formData.course}
                                            onChange={handleChange}
                                            className="w-full h-11 px-4 rounded-lg border"
                                        />
                                    </div>

                                    <Button
                                        disabled={loading}
                                        className="w-full bg-[#FD5A1A] h-12 text-white font-bold rounded-xl !mt-6"
                                    >
                                        {loading ? 'Processing…' : 'Claim My 50% Discount'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LimitedTimeOffer;