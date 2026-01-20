import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, User, LogOut } from "lucide-react";
import { FaBook } from "react-icons/fa";
import { toast } from "sonner";
import axios from "axios";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { TopNavbar } from "./TopNavbar";
import { navLinks } from "./navData";
import { AuthModal } from "./AuthModal";
import { MobileMenu } from "./MobileMenu";
import { CourseEnrollmentModal } from "@/components/ui/CourseEnrollmentModal";

export const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Auth Store
  const { user, token, setAuth, logout: storeLogout } = useAuthStore();
  const isLoggedIn = !!token;

  // Global UI Store for Auth Modal
  const { isAuthModalOpen, authModalMode, openAuthModal, closeAuthModal } = useUIStore();

  // Helper getters/setters to maintain compatibility with existing components
  const setShowAuthModal = (show: boolean) => (show ? openAuthModal(authModalMode) : closeAuthModal());
  const setAuthMode = openAuthModal;

  // Cart Store
  const { items, clearCart } = useCartStore();
  const cartItemCount = items.length;

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Enrollment Modal State
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const handleOpenEnrollment = () => {
    setIsEnrollmentOpen(true);
  };

  // Scroll Lock for Mobile Menu & Modal
  useEffect(() => {
    if (isMobileMenuOpen || isAuthModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, isAuthModalOpen]);

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch latest user data from MongoDB on mount (mongodb_fetch_avatar logic)
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (token) {
        try {
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
            headers: { 'x-auth-token': token }
          });
          const updatedUser = {
            ...res.data,
            id: res.data._id || res.data.id
          };
          delete updatedUser._id;
          setAuth(updatedUser, token);
        } catch (err) {
          console.error("Failed to sync user profile from MongoDB:", err);
        }
      }
    };
    fetchUserProfile();
  }, [token, setAuth]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const logout = () => {
    storeLogout();
    clearCart();
    toast.info("Signed out successfully");
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}
      >
        <TopNavbar
          isScrolled={isScrolled}
          setAuthMode={setAuthMode}
          setShowAuthModal={setShowAuthModal}
        />

        {/* Main Navbar */}
        <nav className={`bg-background/95 backdrop-blur-md border-b border-border/40 transition-all duration-300 flex items-center ${isScrolled ? 'h-16 md:h-16' : 'h-20 md:h-24'}`}>
          <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-full">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="AOTMS" className={`w-auto transition-all duration-300 hover:scale-105 ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'}`} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1.5 text-base font-semibold transition-colors duration-200 ${activeDropdown === link.name ? 'text-primary' : 'text-foreground/90 hover:text-primary'
                      }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-popover rounded-xl shadow-xl border border-border/50 overflow-hidden z-[150] ${(link as any).menuCategories ? 'w-[700px] p-4' : (link.isMegaMenu ? 'w-[600px] -left-20 translate-x-[-20%] p-2' : 'w-64 p-2')
                            }`}
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1.5 w-3 h-3 bg-popover border-t border-l border-border/50 rotate-45" />

                          {(link as any).menuCategories ? (
                            <div className="grid grid-cols-3 gap-y-4 gap-x-6 relative z-10">
                              {(link as any).menuCategories.map((category: any, idx: number) => (
                                <div key={idx} className="space-y-2">
                                  <div className="flex items-center gap-2 border-b border-border/40 pb-2 mb-1">
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{category.category}</span>
                                  </div>
                                  <div className="grid gap-1">
                                    {category.courses.map((course: any, cIdx: number) => {
                                      const isActive = location.pathname === course.href;
                                      return (
                                        <Link
                                          key={cIdx}
                                          to={course.href}
                                          onClick={() => setActiveDropdown(null)}
                                          className={`flex items-center gap-3 p-1.5 rounded-lg transition-all group/item ${isActive ? 'bg-blue-50' : 'hover:bg-blue-50'}`}
                                        >
                                          <div className={`p-1.5 rounded-md transition-colors ${isActive ? 'bg-primary text-white' : 'bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white'}`}>
                                            <course.icon className="w-3.5 h-3.5" />
                                          </div>
                                          <span className={`text-sm font-bold transition-colors ${isActive ? 'text-primary' : 'text-slate-900 group-hover/item:text-primary'}`}>
                                            {course.name}
                                          </span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className={`grid gap-1 relative z-10 ${link.isMegaMenu ? 'grid-cols-2 p-2' : 'grid-cols-1'}`}>
                              {link.dropdownItems?.map((item) => {
                                const isActive = location.pathname === item.href;
                                return (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className={`flex items-center gap-3 p-2.5 rounded-lg transition-all group/item ${isActive ? 'bg-blue-50 ring-1 ring-blue-100' : 'hover:bg-primary/5'}`}
                                  >
                                    <div className={`p-2 rounded-md transition-colors ${isActive ? 'bg-[#0066CC] text-white' : 'bg-primary/10 text-primary group-hover/item:bg-[#0066CC] group-hover/item:text-white'}`}>
                                      {item.icon && <item.icon className="w-4 h-4" />}
                                    </div>
                                    <div>
                                      <div className={`text-sm font-bold transition-colors ${isActive ? 'text-[#0066CC]' : 'text-foreground group-hover/item:text-[#0066CC]'}`}>
                                        {item.name}
                                      </div>
                                      <div className="text-[10px] text-muted-foreground font-medium line-clamp-1">
                                        {item.desc}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Cart Icon */}


              {/* User Profile */}
              {isLoggedIn ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full border border-border/60 hover:border-primary/30 transition-all bg-background">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name || "User Avatar"} className="w-8 h-8 rounded-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                    <ChevronDown className="w-3 h-3 text-muted-foreground" />
                  </button>

                  <div className="absolute right-0 top-[calc(100%+12px)] w-64 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-[150]">
                    <div className="px-4 py-3 border-b border-slate-100 mb-2">
                      <p className="font-bold text-slate-900 text-base truncate">{user?.name}</p>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{user?.email}</p>
                    </div>
                    <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors mb-1">
                      <User className="w-4 h-4 text-slate-500" />
                      Dashboard
                    </Link>
                    <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#DC2626] hover:bg-red-50 rounded-lg transition-colors">
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Button onClick={handleOpenEnrollment} className="h-10 px-6 font-bold rounded-full shadow-lg bg-[#0066CC] shadow-primary/20 hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                    Book Free Demo
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-foreground"
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6 md:w-7 md:h-7" />
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isLoggedIn={isLoggedIn}
        user={user}
        cartItemCount={cartItemCount}
        logout={logout}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        setAuthMode={setAuthMode}
        setShowAuthModal={setShowAuthModal}
      />

      <AuthModal
        showAuthModal={isAuthModalOpen}
        setShowAuthModal={setShowAuthModal}
        authMode={authModalMode}
        setAuthMode={setAuthMode}
      />

      <CourseEnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        source="Navbar - Free Demo"
      />
    </>
  );
};
