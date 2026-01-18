import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, LogIn, UserPlus, User } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaBook, FaWhatsapp, FaTelegram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";

interface TopNavbarProps {
    isScrolled: boolean;
    setAuthMode: (mode: 'login' | 'register' | 'forgot') => void;
    setShowAuthModal: (show: boolean) => void;
}

export const TopNavbar = ({ isScrolled, setAuthMode, setShowAuthModal }: TopNavbarProps) => {
    const { user, token } = useAuthStore();
    const isLoggedIn = !!token;
    const { items } = useCartStore();
    const cartItemCount = items.length;

    return (
        <AnimatePresence>
            {!isScrolled && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-[#0066CC] text-white text-xs font-semibold border-b border-primary-foreground/10 relative z-50 py-1 md:py-0"
                >
                    <div className="container mx-auto px-4 h-8 md:h-9 flex items-center justify-between">
                        <div className="flex items-center gap-3 md:gap-6">
                            <a href="tel:+918019952233" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                                <Phone className="w-3 h-3" />
                                <span className="text-[10px] md:text-sm font-bold">8019952233</span>
                            </a>
                            <a href="mailto:Info@aotms.com" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors">
                                <Mail className="w-3 h-3" />
                                <span>Info@aotms.com</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-2 md:gap-4">
                            {/* Social Links */}
                            <div className="relative flex items-center">
                                {/* Trigger */}
                                <div className="group relative flex items-center gap-0.5 md:gap-1 cursor-pointer py-1">
                                    <span className="hidden md:inline uppercase tracking-wider font-bold text-xs text-white group-hover:text-blue-100 transition-colors">
                                        Follow Us
                                    </span>
                                    <span className="md:hidden uppercase tracking-wider font-bold text-[10px] text-white group-hover:text-blue-100 transition-colors">
                                        Follow Us
                                    </span>

                                    <svg
                                        className="w-3 h-3 text-white group-hover:text-blue-100 group-hover:rotate-180 transition-all duration-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    {/* Invisible bridge to prevent closing when moving mouse to dropdown */}
                                    <div className="absolute top-full left-0 w-full h-2"></div>

                                    {/* Dropdown */}
                                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top md:origin-top-right group-hover:translate-y-0 translate-y-2 z-50 overflow-hidden p-4">
                                        {/* Pointing Arrow */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 w-3 h-3 -mt-1.5 bg-white rotate-45 border-l border-t border-slate-100"></div>

                                        <div className="relative bg-white z-10 grid grid-cols-4 gap-3">
                                            <a href="https://youtube.com/@aotms?si=mj3-j_JH4lHC3zeF" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#FF0000] hover:bg-[#CC0000] hover:scale-110 transition-all shadow-sm" aria-label="YouTube" title="YouTube">
                                                <FaYoutube className="w-5 h-5" />
                                            </a>
                                            <a href="https://www.instagram.com/academyoftechmasters?igsh=enZ5YjYwOXg1cW80&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:brightness-110 hover:scale-110 transition-all shadow-sm" aria-label="Instagram" title="Instagram">
                                                <FaInstagram className="w-5 h-5" />
                                            </a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#0077B5] hover:bg-[#005582] hover:scale-110 transition-all shadow-sm" aria-label="LinkedIn" title="LinkedIn">
                                                <FaLinkedin className="w-5 h-5" />
                                            </a>
                                            <a href="https://twitter.com/aotms" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-black hover:bg-[#222222] hover:scale-110 transition-all shadow-sm" aria-label="X (Twitter)" title="X (Twitter)">
                                                <FaXTwitter className="w-5 h-5" />
                                            </a>
                                            <a href="https://www.facebook.com/aotms" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#1877F2] hover:bg-[#155ab0] hover:scale-110 transition-all shadow-sm" aria-label="Facebook" title="Facebook">
                                                <FaFacebook className="w-5 h-5" />
                                            </a>
                                            <a href="https://wa.me/918019952233" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#25D366] hover:bg-[#20C055] hover:scale-110 transition-all shadow-sm" aria-label="WhatsApp" title="WhatsApp">
                                                <FaWhatsapp className="w-5 h-5" />
                                            </a>
                                            <a href="https://t.me/aotms" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#0088CC] hover:bg-[#0077B5] hover:scale-110 transition-all shadow-sm" aria-label="Telegram" title="Telegram">
                                                <FaTelegram className="w-5 h-5" />
                                            </a>
                                            <a href="mailto:Info@aotms.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#D44638] hover:bg-[#C33D2E] hover:scale-110 transition-all shadow-sm" aria-label="Email Us" title="Email Us">
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-px h-3 bg-white/60"></div>

                            {!isLoggedIn ? (
                                <div className="flex items-center gap-3">
                                    <button type="button" onClick={() => { setAuthMode('login'); setShowAuthModal(true); }} className="flex items-center gap-1.5 hover:text-accent uppercase tracking-wider font-bold text-[9px] md:text-[10px] transition-colors">
                                        <LogIn className="w-3 h-3" />
                                        Sign In
                                    </button>
                                    <span className="text-white/30">|</span>
                                    <button type="button" onClick={() => { setAuthMode('register'); setShowAuthModal(true); }} className="flex items-center gap-1.5 hover:text-accent uppercase tracking-wider font-bold text-[9px] md:text-[10px] transition-colors">
                                        <UserPlus className="w-3 h-3" />
                                        Register
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <Link to="/cart" className="hidden md:flex items-center gap-1.5 hover:text-accent uppercase tracking-wider font-bold text-xs transition-colors">
                                        <FaBook className="w-3 h-3" />
                                        <span><span className="lg:hidden">Enroll Cart</span><span className="hidden lg:inline">Enroll Cart</span> ({cartItemCount})</span>
                                    </Link>
                                    <div className="hidden md:block w-px h-3 bg-white/60"></div>
                                    <Link to="/dashboard" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                                        <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20 flex items-center justify-center bg-white/10 shrink-0">
                                            {user?.avatar ? (
                                                <img src={user.avatar} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                            ) : (
                                                <User className="w-3 h-3 text-white" strokeWidth={3} />
                                            )}
                                        </div>
                                        <span className="uppercase tracking-wider font-bold text-xs"><span className="lg:hidden">Profile</span><span className="hidden lg:inline">My Profile</span></span>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
