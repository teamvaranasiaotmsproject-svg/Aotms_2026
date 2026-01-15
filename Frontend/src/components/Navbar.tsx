import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Phone, Mail,
  User, LogOut, Eye, EyeOff, KeyRound, ArrowLeft,
  GraduationCap, Smartphone, Trophy, Calendar, Laptop, Building2,
  LogIn, UserPlus, BookOpen, HelpCircle, MessageSquare, ShoppingCart
} from "lucide-react";
import {
  FaReact, FaAws, FaBrain, FaChartBar, FaShieldAlt,
  FaJava, FaPython, FaDatabase, FaCloud, FaCode,
  FaInstagram, FaYoutube, FaLinkedin, FaTwitter,
  FaNetworkWired, FaUserTie, FaAngular, FaBook, FaFacebook
} from "react-icons/fa";
import { SiMui, SiThreads } from "react-icons/si";

import { toast } from "sonner";
import axios from "axios";
import logo from "@/assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";

// --- Configuration & Data ---

const courses = [
  { name: "AI & Machine Learning", href: "/course/ai-machine-learning", icon: FaBrain },
  { name: "Cyber Security", href: "/course/cyber-security", icon: FaShieldAlt },
  { name: "Data Analytics", href: "/course/data-analytics", icon: FaChartBar },
  { name: "Data Science", href: "/course/data-science", icon: FaDatabase },
  { name: "DevOps", href: "/course/devops", icon: FaCloud },
  { name: "Embedded Systems", href: "/course/embedded-systems", icon: FaCode },
  { name: "Java Full Stack", href: "/course/java-full-stack", icon: FaJava },
  { name: "MEAN Stack", href: "/course/mean-stack", icon: FaAngular },
  { name: "MERN Stack", href: "/course/mern-stack", icon: FaReact },
  { name: "Multi-Cloud Consultant", href: "/course/multi-cloud-consultant", icon: FaUserTie },
  { name: "Multi-Cloud Engineering", href: "/course/multi-cloud-data-engineering", icon: FaNetworkWired },
  { name: "Python Full Stack", href: "/course/python-full-stack", icon: FaPython },
  { name: "Quantum Computing", href: "/course/quantum-computing", icon: FaBrain },
  { name: "UI/UX Design", href: "/course/ui-ux-design", icon: SiMui },
  { name: "QA Automation", href: "/course/qa-automation", icon: FaCode },
];

const navLinks = [
  {
    name: "What We Do",
    href: "/#what-we-do",
    hasDropdown: true,
    dropdownItems: [
      { name: "Placement", href: "/placements", icon: FaChartBar, desc: "Success records" },
      { name: "Internships", href: "/internships", icon: GraduationCap, desc: "Industrial training" },
      { name: "Resources", href: "/resources", icon: FaDatabase, desc: "Learning materials" },
    ]
  },
  {
    name: "Courses",
    href: "/courses",
    hasDropdown: true,
    dropdownItems: courses.map(c => ({ ...c, desc: "Professional Program" })),
    isMegaMenu: true
  },
  {
    name: "Initiatives",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Workshops", href: "/workshop", icon: Laptop, desc: "Hands-on sessions" },
      { name: "Hackathons", href: "/hackathon", icon: FaCode, desc: "Build & Compete" },
      { name: "Weekly Activities", href: "/events", icon: Calendar, desc: "Academic Initiatives" },
    ]
  },
  {
    name: "Who We Are",
    href: "/about-us",
    hasDropdown: false, // Changed to false as Info is now separate
  },
  {
    name: "Info",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Blog", href: "/blog", icon: FaCloud, desc: "Tech insights" },
      { name: "FAQ", href: "/faq", icon: HelpCircle, desc: "Common questions" },
      { name: "Feedback", href: "/feedback", icon: MessageSquare, desc: "Share your thoughts" },
      { name: "Contact", href: "/contact", icon: Mail, desc: "Get in touch" },
    ]
  },
];

const socialLinks = [
  // Keeping structure in case needed
];

const degrees = ["B.Tech", "M.Tech", "MCA", "MBA", "Others"];
const departments = ["CSE", "IT", "ECE", "EEE", "MECH", "CIVIL", "AI & DS", "AIML", "CYBER SECURITY", "DATA SCIENCE"];
const countryCodes = [
  { code: "+91", label: "India", iso: "in" },
  { code: "+1", label: "USA", iso: "us" },
  { code: "+44", label: "UK", iso: "gb" },
  { code: "+1", label: "Canada", iso: "ca" },
  { code: "+61", label: "Australia", iso: "au" },
  { code: "+49", label: "Germany", iso: "de" },
  { code: "+33", label: "France", iso: "fr" },
  { code: "+971", label: "UAE", iso: "ae" },
  { code: "+65", label: "Singapore", iso: "sg" },
  { code: "+81", label: "Japan", iso: "jp" },
  { code: "+82", label: "South Korea", iso: "kr" },
  { code: "+60", label: "Malaysia", iso: "my" },
  { code: "+966", label: "Saudi Arabia", iso: "sa" },
  { code: "+974", label: "Qatar", iso: "qa" },
  { code: "+27", label: "South Africa", iso: "za" },
  { code: "+64", label: "New Zealand", iso: "nz" }
];

const passoutYears = Array.from({ length: 15 }, (_, i) => String(new Date().getFullYear() + 5 - i));
const courseOptions = [
  { name: "MERN Stack", icon: FaReact },
  { name: "Python Full Stack", icon: FaPython },
  { name: "Java Full Stack", icon: FaJava },
  { name: "Cyber Security", icon: FaShieldAlt },
  { name: "AI & Machine Learning", icon: FaBrain },
  { name: "Data Science", icon: FaDatabase },
  { name: "Cloud Computing", icon: FaCloud },
  { name: "UI/UX Design", icon: Laptop },
  { name: "Other", icon: BookOpen }
];

// --- Components ---

export const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Auth Store
  const { user, token, setAuth, logout: storeLogout } = useAuthStore();
  const isLoggedIn = !!token;

  // Cart Store
  const { items, clearCart } = useCartStore(); // Destructure clearCart
  const cartItemCount = items.length;
  const navigate = useNavigate(); // Initialize navigate hook

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const selectedCountry = countryCodes.find(c => c.code === countryCode) || countryCodes[0];

  const [degree, setDegree] = useState(degrees[0]);
  const [department, setDepartment] = useState(departments[0]);
  const [passoutYear, setPassoutYear] = useState(passoutYears[0]);
  const [selectedCourse, setSelectedCourse] = useState(courseOptions[0].name);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const selectedCourseData = courseOptions.find(c => c.name === selectedCourse) || courseOptions[0];
  const [otherCourse, setOtherCourse] = useState('');

  const [passwordStrength, setPasswordStrength] = useState<'Weak' | 'Medium' | 'Strong' | ''>('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation Helpers
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

  // Scroll Lock for Mobile Menu
  useEffect(() => {
    if (isMobileMenuOpen || showAuthModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, showAuthModal]);

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Auth Handlers
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;

    // Validation
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

      if (passwordStrength !== 'Strong') {
        newErrors.password = "Password is not strong enough";
      }
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

  const logout = () => {
    storeLogout();
    clearCart(); // Clear cart immediately on logout
    toast.info("Signed out successfully");
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
    navigate('/'); // Navigate to home page after logout
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}
      >
        {/* Top Bar (Hidden on Scroll) */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-[#0075CF] text-white text-xs font-semibold border-b border-primary-foreground/10 relative z-50 py-1 md:py-0"
            >
              <div className="container mx-auto px-4 h-8 md:h-9 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-6">
                  <a href="tel:+918019952233" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                    <Phone className="w-3 h-3" />
                    <span>8019952233</span>
                  </a>
                  <a href="mailto:Info@aotms.com" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors">
                    <Mail className="w-3 h-3" />
                    <span>Info@aotms.com</span>
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  {/* Social Links */}
                  <div className="hidden md:flex items-center gap-3 text-xs">
                    <span className="opacity-80">Follow us :</span>
                    <div className="flex items-center gap-2.5">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
                        <FaInstagram className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-accent transition-colors">
                        <FaYoutube className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                        <FaLinkedin className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent transition-colors">
                        <FaTwitter className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors">
                        <FaFacebook className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      </a>
                      <a href="https://threads.net" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="hover:text-accent transition-colors">
                        <SiThreads className="w-3 h-3 md:w-3 md:h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-3 bg-white/20"></div>

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
                      <Link to="/cart" className="flex items-center gap-1.5 hover:text-accent uppercase tracking-wider font-bold text-xs transition-colors">
                        <FaBook className="w-3.5 h-3.5" />
                        <span>Cart ({cartItemCount})</span>
                      </Link>
                      <span className="text-white/30">|</span>
                      <Link to="/dashboard" className="flex items-center gap-1.5 hover:text-accent uppercase tracking-wider font-bold text-xs transition-colors">
                        <User className="w-3 h-3" />
                        <span>Account</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navbar */}
        <nav className={`bg-background/95 backdrop-blur-md border-b border-border/40 transition-all duration-300 flex items-center ${isScrolled ? 'h-16 md:h-20' : 'h-18 md:h-24'}`}>
          <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-full">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="AOTMS" className={`w-auto transition-all duration-300 hover:scale-105 ${isScrolled ? 'h-8 md:h-12' : 'h-14 md:h-24'}`} />
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
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${activeDropdown === link.name ? 'text-primary' : 'text-foreground/80 hover:text-primary'
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
                          className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-popover rounded-xl shadow-xl border border-border/50 p-2 overflow-hidden z-50 ${link.isMegaMenu ? 'w-[600px] -left-20 translate-x-[-20%]' : 'w-64'
                            }`}
                        >
                          {/* Triangle Tip */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1.5 w-3 h-3 bg-popover border-t border-l border-border/50 rotate-45" />

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
              <Link to="/cart" className="relative p-2 text-slate-900">
                <FaBook className="w-5 h-5 pointer-events-none" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* User Profile */}
              {isLoggedIn ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full border border-border/60 hover:border-primary/30 transition-all bg-background">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name || "User Avatar"} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                    <ChevronDown className="w-3 h-3 text-muted-foreground" />
                  </button>

                  {/* Profile Dropdown */}
                  <div className="absolute right-0 top-[calc(100%+8px)] w-56 bg-white rounded-xl shadow-xl border border-border/50 p-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    <div className="px-3 py-2 border-b border-border/50 mb-1">
                      <p className="font-bold text-sm truncate">{user?.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                    </div>
                    <Link to="/dashboard" className="flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-primary/5 rounded-lg text-foreground">
                      <User className="w-4 h-4" /> Dashboard
                    </Link>
                    <button onClick={logout} className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-red-50 text-red-600 rounded-lg">
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Button asChild className="h-10 px-6 font-bold rounded-full shadow-lg bg-[#0075CF] shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all">
                    <Link to="/contact">Book Free Demo</Link>
                  </Button>
                  <Button variant="ghost" onClick={() => { setAuthMode('login'); setShowAuthModal(true); }} className="font-bold hover:bg-primary/5">
                    Login
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-3">

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden text-foreground"
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6 md:w-7 md:h-7" />
              </Button>
            </div>

          </div>
        </nav>
      </motion.header>

      {/* --- Mobile Menu Drawer --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[1001] shadow-2xl flex flex-col text-slate-900"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/50">
                <img src={logo} alt="Logo" className="h-16 sm:h-24 w-auto" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-1.5 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-600" aria-label="Close Menu">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">

                {/* User Info (Mobile) */}
                {isLoggedIn ? (
                  <div className="mb-6 bg-slate-50 p-4 rounded-xl flex items-center gap-3 border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                      {user?.avatar ? <img src={user.avatar} alt={user.name || "User Avatar"} className="w-full h-full rounded-full object-cover" /> : user?.name?.[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate text-slate-900">{user?.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                      <div className="flex gap-2 mt-2">
                        <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-[10px] font-bold text-white bg-[#0075CF] px-3 py-1.5 rounded-md uppercase tracking-wider">Dashboard</Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 mb-6">
                    <Button asChild className="w-full h-12 rounded-xl font-bold shadow-lg bg-[#0075CF] text-white hover:bg-[#0066CC]">
                      <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book Free Demo</Link>
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" onClick={() => { setIsMobileMenuOpen(false); setAuthMode('login'); setShowAuthModal(true); }} className="font-bold h-11 rounded-xl bg-transparent border-slate-200 text-slate-700 hover:bg-slate-50">Login</Button>
                      <Button variant="secondary" onClick={() => { setIsMobileMenuOpen(false); setAuthMode('register'); setShowAuthModal(true); }} className="font-bold h-11 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 border-none">Sign Up</Button>
                    </div>
                  </div>
                )}

                {/* Navigation Links */}
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
                                  {link.dropdownItems?.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
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
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-4 text-sm md:text-base font-bold text-slate-800 hover:text-primary px-2 -mx-2"
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Social Links Mobile */}
                <div className="flex items-center gap-4 mt-8 justify-center">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition"> <FaInstagram className="w-5 h-5" /> </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition"> <FaYoutube className="w-5 h-5" /> </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition"> <FaLinkedin className="w-5 h-5" /> </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition"> <FaTwitter className="w-5 h-5" /> </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition"> <FaFacebook className="w-5 h-5" /> </a>
                  <a href="https://threads.net" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition"> <SiThreads className="w-5 h-5" /> </a>
                </div>

              </div>

              {/* Footer Actions */}
              {isLoggedIn && (
                <div className="p-4 border-t border-white/20">
                  <Button variant="ghost" className="w-full justify-start text-red-200 hover:text-white hover:bg-red-500/50 text-xs font-bold h-9" onClick={logout}>
                    <LogOut className="w-4 h-4 mr-2" /> Sign Out
                  </Button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Auth Modal (Preserved Functionality) */}
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
              className="relative w-full max-w-[420px] bg-white rounded-3xl shadow-2xl p-8 overflow-hidden z-[1003]"
            >
              <button onClick={() => setShowAuthModal(false)} className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400" aria-label="Close Modal">
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 text-center">
                <h2 className="text-2xl font-black text-slate-900">
                  {authMode === 'login' ? 'Welcome Back' : authMode === 'register' ? 'Join Us' : 'Reset Password'}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {authMode === 'login' ? 'Please sign in to continue' : authMode === 'register' ? 'Start your learning journey' : 'Enter email to recover account'}
                </p>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {authMode === 'register' && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Input
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className={cn("h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white", errors.firstName && "border-red-500 bg-red-50/50")}
                        />
                        {errors.firstName && <p className="text-xs text-red-500 ml-2 mt-1 font-bold">{errors.firstName}</p>}
                      </div>
                      <div>
                        <Input
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className={cn("h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white", errors.lastName && "border-red-500 bg-red-50/50")}
                        />
                        {errors.lastName && <p className="text-[10px] text-red-500 ml-2 mt-1 font-bold">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <div className="flex gap-2">
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                            className="w-[100px] h-11 rounded-xl bg-slate-50 border-transparent hover:bg-slate-100 transition-colors flex items-center justify-between px-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                          >
                            <div className="flex items-center gap-2">
                              <img
                                src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                                alt={selectedCountry.label}
                                className="w-6 h-auto shadow-sm"
                              />
                              <span className="text-xs font-bold text-slate-700">{selectedCountry.code}</span>
                            </div>
                            <ChevronDown className={cn("w-3 h-3 text-slate-400 transition-transform", isCountryDropdownOpen ? "rotate-180" : "")} />
                          </button>

                          {/* Custom Country Dropdown List */}
                          <AnimatePresence>
                            {isCountryDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 z-[1005] overflow-hidden p-1.5"
                              >
                                <div className="max-h-60 overflow-y-auto custom-scrollbar">
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
                                      <div className="flex items-center gap-2.5">
                                        <img
                                          src={`https://flagcdn.com/w40/${c.iso}.png`}
                                          alt={c.label}
                                          className="w-5 h-auto"
                                        />
                                        <span>{c.label}</span>
                                      </div>
                                      <span className="opacity-60">{c.code}</span>
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Backdrop to close dropdown */}
                          {isCountryDropdownOpen && (
                            <div
                              className="fixed inset-0 z-[-1]"
                              onClick={() => setIsCountryDropdownOpen(false)}
                            />
                          )}
                        </div>
                        <Input
                          placeholder="Enter 10-digit mobile number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                          className={cn("flex-1 h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white placeholder:text-slate-400 placeholder:text-xs", errors.phone && "border-red-500 bg-red-50/50")}
                        />
                      </div>
                      {errors.phone && <p className="text-[10px] text-red-500 ml-2 mt-1 font-bold">{errors.phone}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-slate-400 ml-2">Degree</label>
                        <select
                          aria-label="Degree"
                          value={degree}
                          onChange={(e) => setDegree(e.target.value)}
                          className="w-full h-11 rounded-xl bg-slate-50 border-transparent px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors"
                        >
                          {degrees.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-slate-400 ml-2">Department</label>
                        <select
                          aria-label="Department"
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="w-full h-11 rounded-xl bg-slate-50 border-transparent px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors"
                        >
                          {departments.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-slate-400 ml-2">Passout Year</label>
                        <select
                          title="Passout Year"
                          aria-label="Passout Year"
                          value={passoutYear}
                          onChange={(e) => setPassoutYear(e.target.value)}
                          className="w-full h-11 rounded-xl bg-slate-50 border-transparent px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                        >
                          {passoutYears.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Related Course</label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
                            className="w-full h-11 rounded-xl bg-slate-50 border-transparent hover:bg-slate-100 transition-all flex items-center justify-between px-3 focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-600 font-medium text-sm"
                          >
                            <div className="flex items-center gap-2">
                              <selectedCourseData.icon className="w-4 h-4 text-[#0A3D91]" />
                              <span>{selectedCourse}</span>
                            </div>
                            <ChevronDown className={cn("w-3 h-3 text-slate-400 transition-transform", isCourseDropdownOpen ? "rotate-180" : "")} />
                          </button>

                          <AnimatePresence>
                            {isCourseDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 z-[1010] overflow-hidden p-1.5"
                              >
                                <div className="max-h-64 overflow-y-auto custom-scrollbar">
                                  {courseOptions.map((c) => (
                                    <button
                                      key={c.name}
                                      type="button"
                                      onClick={() => {
                                        setSelectedCourse(c.name);
                                        setIsCourseDropdownOpen(false);
                                      }}
                                      className={cn(
                                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs transition-colors text-left",
                                        selectedCourse === c.name ? "bg-blue-50 text-blue-700 font-bold" : "hover:bg-slate-50 text-slate-600"
                                      )}
                                    >
                                      <c.icon className={cn("w-4 h-4", selectedCourse === c.name ? "text-blue-700" : "text-slate-400")} />
                                      {c.name}
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
                      </div>
                    </div>

                    {selectedCourse === 'Other' && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                        <Input
                          placeholder="Specify Course Name"
                          value={otherCourse}
                          onChange={(e) => setOtherCourse(e.target.value)}
                          className={cn("h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white", errors.otherCourse && "border-red-500 bg-red-50/50")}
                        />
                        {errors.otherCourse && <p className="text-[10px] text-red-500 ml-2 mt-1 font-bold">{errors.otherCourse}</p>}
                      </motion.div>
                    )}
                  </>
                )}

                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cn("h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white", errors.email && "border-red-500 bg-red-50/50")}
                  />
                  {errors.email && <p className="text-xs text-red-500 ml-2 mt-1 font-bold">{errors.email}</p>}
                </div>

                {authMode !== 'forgot' && (
                  <div className="space-y-4">
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={authMode === 'register' ? handlePasswordChange : (e) => setPassword(e.target.value)}
                        className={cn("h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white pr-10", errors.password && "border-red-500 bg-red-50/50")}
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      {errors.password && <p className="text-xs text-red-500 ml-2 mt-1 font-bold">{errors.password}</p>}
                    </div>
                    {authMode === 'register' && password && (
                      <div className="mt-2">
                        <div className="flex items-center gap-1 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full flex-1 transition-all duration-300 ${passwordStrength ? (passwordStrength === 'Weak' ? 'bg-red-500' : passwordStrength === 'Medium' ? 'bg-yellow-500' : 'bg-green-500') : 'bg-transparent'}`} />
                          <div className={`h-full flex-1 transition-all duration-300 ${passwordStrength === 'Medium' || passwordStrength === 'Strong' ? (passwordStrength === 'Medium' ? 'bg-yellow-500' : 'bg-green-500') : 'bg-transparent'}`} />
                          <div className={`h-full flex-1 transition-all duration-300 ${passwordStrength === 'Strong' ? 'bg-green-500' : 'bg-transparent'}`} />
                        </div>
                        <p className="text-[10px] text-right font-bold mt-1 text-slate-500 uppercase">{passwordStrength || 'Weak'}</p>
                        <p className="text-[10px] text-slate-400">Must contain 8+ chars, 1 upper, 1 lower, 1 number, 1 special.</p>
                      </div>
                    )}
                    {authMode === 'register' && (
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className={cn("h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white pr-10", errors.confirmPassword && "border-red-500 bg-red-50/50")}
                        />
                        {errors.confirmPassword && <p className="text-[10px] text-red-500 ml-2 mt-1 font-bold">{errors.confirmPassword}</p>}
                      </div>
                    )}
                  </div>
                )}

                {authMode === 'login' && (
                  <div className="text-right -mt-2">
                    <button
                      type="button"
                      onClick={() => setAuthMode('forgot')}
                      className="text-xs font-bold text-primary hover:underline hover:text-accent transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                <Button disabled={isLoading} className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20">
                  {isLoading ? 'Processing...' : authMode === 'login' ? 'Sign In' : authMode === 'register' ? 'Create Account' : 'Send Link'}
                </Button>
              </form>

              <div className="mt-6 text-center pt-4 border-t border-border/50">
                <button
                  onClick={() => {
                    if (authMode === 'forgot') setAuthMode('login');
                    else setAuthMode(authMode === 'login' ? 'register' : 'login');
                  }}
                  className="text-sm font-bold text-primary hover:underline"
                >
                  {authMode === 'login' ? "Don't have an account? Sign Up" : authMode === 'register' ? "Already have an account? Sign In" : "Back to Login"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
