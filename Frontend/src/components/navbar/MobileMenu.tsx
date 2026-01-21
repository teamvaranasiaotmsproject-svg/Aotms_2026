import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { FaBook, FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { navLinks } from "./navData";
import { User } from "@/store/authStore";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    isLoggedIn: boolean;
    user: User | null;
    cartItemCount: number;
    logout: () => void;
    activeDropdown: string | null;
    setActiveDropdown: (name: string | null) => void;
    setAuthMode: (mode: 'login' | 'register' | 'forgot') => void;
    setShowAuthModal: (show: boolean) => void;
}

export const MobileMenu = ({
    isOpen, onClose, isLoggedIn, user, cartItemCount, logout,
    activeDropdown, setActiveDropdown, setAuthMode, setShowAuthModal
}: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99998] bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[99999] shadow-2xl flex flex-col text-slate-900"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-border/50">
                            <img src={logo} alt="Logo" className="h-16 sm:h-24 w-auto" />
                            <button onClick={onClose} className="p-1.5 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-600" aria-label="Close Menu">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
                            {isLoggedIn ? (
                                <div className="mb-6 bg-slate-50 p-4 rounded-xl flex items-center gap-3 border border-border/50">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                                        {user?.avatar ? <img src={user.avatar} alt={user.name || "User Avatar"} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" /> : user?.name?.[0]}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-sm truncate text-slate-900">{user?.name}</p>
                                        <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                                        <div className="flex gap-2 mt-2">
                                            <Link to="/cart" onClick={onClose} className="text-[10px] font-bold text-white bg-[#0066CC] px-3 py-1.5 rounded-md uppercase tracking-wider flex items-center gap-1.5">
                                                <FaBook className="w-3 h-3" /> Cart ({cartItemCount})
                                            </Link>
                                            <Link to="/dashboard" onClick={onClose} className="text-[10px] font-bold text-white bg-[#0066CC] px-3 py-1.5 rounded-md uppercase tracking-wider">Dashboard</Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3 mb-6">
                                    <Button asChild className="w-full h-12 rounded-xl font-bold shadow-lg bg-[#0066CC] text-white hover:bg-[#0052a3] active:scale-95 transition-all">
                                        <Link to="/contact" onClick={onClose}>Book Free Demo</Link>
                                    </Button>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Button variant="outline" onClick={() => { onClose(); setAuthMode('login'); setShowAuthModal(true); }} className="font-bold h-11 rounded-xl bg-transparent border-slate-200 text-slate-700 hover:bg-slate-50 active:scale-95 transition-all">Login</Button>
                                        <Button variant="secondary" onClick={() => { onClose(); setAuthMode('register'); setShowAuthModal(true); }} className="font-bold h-11 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 border-none active:scale-95 transition-all">Sign Up</Button>
                                    </div>

                                </div>
                            )}

                            <div className="space-y-1">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="border-b border-slate-100 last:border-0">
                                        {link.hasDropdown ? (
                                            <div className="py-1">
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                    className="flex items-center justify-between w-full py-3 text-sm md:text-base font-bold text-slate-800 hover:bg-slate-50 rounded-lg px-2 -mx-2 transition-colors text-left"
                                                >
                                                    {link.name}
                                                    <ChevronDown className={`w-4 h-4 transition-transform text-slate-400 shrink-0 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {activeDropdown === link.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden bg-slate-50/80 rounded-lg mt-1"
                                                        >
                                                            <div className="flex flex-col p-2 gap-0.5">
                                                                {(link as any).menuCategories ? (
                                                                    <>
                                                                        {(link as any).menuCategories.map((category: any, catIdx: number) => (
                                                                            <div key={catIdx} className="mb-3 last:mb-0">
                                                                                <div className="px-2 py-1.5 mb-1">
                                                                                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                                                                                        {category.category}
                                                                                    </span>
                                                                                </div>
                                                                                {category.courses.map((course: any, courseIdx: number) => (
                                                                                    <Link
                                                                                        key={courseIdx}
                                                                                        to={course.href}
                                                                                        onClick={onClose}
                                                                                        className="flex items-center gap-3 p-3 rounded-md hover:bg-white transition-colors active:bg-slate-100"
                                                                                    >
                                                                                        <div className="text-primary shrink-0 opacity-80">
                                                                                            {course.icon && <course.icon className="w-4 h-4" />}
                                                                                        </div>
                                                                                        <div className="min-w-0">
                                                                                            <div className="text-xs md:text-sm font-bold truncate text-slate-700">{course.name}</div>
                                                                                        </div>
                                                                                    </Link>
                                                                                ))}
                                                                            </div>
                                                                        ))}
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        {link.dropdownItems?.map((item) => (
                                                                            <Link
                                                                                key={item.name}
                                                                                to={item.href}
                                                                                onClick={onClose}
                                                                                className="flex items-center gap-3 p-3 rounded-md hover:bg-white transition-colors active:bg-slate-100"
                                                                            >
                                                                                <div className="text-primary shrink-0 opacity-80">
                                                                                    {item.icon && <item.icon className="w-4 h-4" />}
                                                                                </div>
                                                                                <div className="min-w-0">
                                                                                    <div className="text-xs md:text-sm font-bold truncate text-slate-700">{item.name}</div>
                                                                                </div>
                                                                            </Link>
                                                                        ))}
                                                                    </>
                                                                )}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                onClick={onClose}
                                                className="block py-4 text-sm md:text-base font-bold text-slate-800 hover:text-primary px-2 -mx-2"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-8 justify-center">
                                <a href="https://www.instagram.com/academyoftechmasters?igsh=enZ5YjYwOXg1cW80&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 active:scale-95 transition-all"> <FaInstagram className="w-5 h-5" /> </a>
                                <a href="https://youtube.com/@aotms?si=mj3-j_JH4lHC3zeF" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 active:scale-95 transition-all"> <FaYoutube className="w-5 h-5" /> </a>
                                <a href="https://www.linkedin.com/in/academy-of-tech-masters-aotms-82274537a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 active:scale-95 transition-all"> <FaLinkedin className="w-5 h-5" /> </a>
                                <a href="https://twitter.com/aotms" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 active:scale-95 transition-all"> <FaXTwitter className="w-5 h-5" /> </a>
                                <a href="https://www.facebook.com/aotms" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 active:scale-95 transition-all"> <FaFacebook className="w-5 h-5" /> </a>
                                <a href="https://t.me/aotms" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 active:scale-95 transition-all"> <FaTelegram className="w-5 h-5" /> </a>
                            </div>
                        </div>

                        {isLoggedIn && (
                            <div className="p-4 border-t border-white/20">
                                <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 text-xs font-bold h-9 bg-red-50/50" onClick={logout}>
                                    <LogOut className="w-4 h-4 mr-2" /> Sign Out
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
