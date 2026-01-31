import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { useAuthStore } from "@/store/authStore";
import {
    MessageSquare,
    Trophy,
    Calendar,
    ArrowRight,
    LogOut,
    Star,
    BookOpen,
    Activity,
    LayoutDashboard,
    Users,
    Sparkles,
    Zap,
    TrendingUp,
    Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";

interface UserReview {
    _id: string;
    message: string;
    rating: number;
    createdAt: string;
    category: string;
    email?: string;
}

interface EventItem {
    id: string;
    name: string;
    date: string;
    mode: string;
    thumbnailUrl?: string;
    bannerUrl?: string;
    isCompleted?: boolean;
}

interface Lead {
    name: string;
    email: string;
    phone?: string;
    course?: string;
    event?: string;
    createdAt?: string;
}

const Dashboard = () => {
    const navigate = useNavigate();
    const { user, logout, setAuth, token } = useAuthStore();
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        name: "",
        phone: ""
    });

    const [myReviews, setMyReviews] = useState<UserReview[]>([]);
    const [workshops, setWorkshops] = useState<EventItem[]>([]);
    const [hackathons, setHackathons] = useState<EventItem[]>([]);
    const [activities, setActivities] = useState<EventItem[]>([]);
    const [allLeads, setAllLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [currentPopLead, setCurrentPopLead] = useState<Lead | null>(null);

    const [totalHackathons, setTotalHackathons] = useState(0);
    const [totalWorkshops, setTotalWorkshops] = useState(0);
    const [showSupportPopup, setShowSupportPopup] = useState(false);

    // Notification Popup Logic
    useEffect(() => {
        if (allLeads.length === 0) return;

        const interval = setInterval(() => {
            const randomLead = allLeads[Math.floor(Math.random() * allLeads.length)];
            setCurrentPopLead(randomLead);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000);
        }, 12000);

        return () => clearInterval(interval);
    }, [allLeads]);

    // Fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            if (!user?.email) return;

            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/feedback`);
                const userReviews = res.data.filter((r: UserReview) => r.email === user.email);
                setMyReviews(userReviews);

                // Fetch with all=true to get total counts for stats, filtering client-side for "Upcoming" list
                const [wRes, hRes, aRes, lRes] = await Promise.all([
                    axios.get(`${import.meta.env.VITE_API_URL}/api/events?type=workshop&all=true`),
                    axios.get(`${import.meta.env.VITE_API_URL}/api/events?type=hackathon&all=true`),
                    axios.get(`${import.meta.env.VITE_API_URL}/api/events?type=weekly-activity`), // Keep default (upcoming) for activities if desired, or duplicate logic
                    axios.get(`${import.meta.env.VITE_API_URL}/api/leads`),
                ]);

                // Store total counts
                setTotalWorkshops(wRes.data.length);
                setTotalHackathons(hRes.data.length);

                // Filter for "Upcoming Events" list (exclude completed)
                // The backend adds 'isCompleted' flag when 'all=true'
                // The backend adds 'isCompleted' flag when 'all=true'
                const upcomingWorkshops = wRes.data.filter((e: EventItem) => !e.isCompleted);
                const upcomingHackathons = hRes.data.filter((e: EventItem) => !e.isCompleted);
                const upcomingActivities = aRes.data.filter((e: EventItem) => !e.isCompleted);

                setWorkshops(upcomingWorkshops.slice(0, 3));
                setHackathons(upcomingHackathons.slice(0, 3));
                setActivities(upcomingActivities.slice(0, 3));
                setAllLeads(lRes.data);
            } catch (error) {
                console.error("Failed to fetch dashboard data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user]);

    const handleUpdateProfile = async () => {
        try {
            const res = await axios.put(
                `${import.meta.env.VITE_API_URL}/api/auth/update`,
                editForm,
                { headers: { "x-auth-token": token } }
            );

            // Start: Fix - Construct the user object correctly matching the User interface
            const updatedUser = {
                id: res.data.id,
                name: res.data.name,
                email: res.data.email,
                role: res.data.role,
                phone: res.data.phone,
                qualification: res.data.degree, // Mapping degree to qualification if needed, or update interface
                avatar: res.data.avatar
            };
            // End: Fix

            // Update local store
            // Assuming setAuth takes (user, token). We keep the same token.
            if (token) {
                setAuth(updatedUser, token);
            }

            setIsEditing(false);
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error("Failed to update profile", error);
            toast.error("Failed to update profile");
        }
    };


    // Stats Data with logo colors (lighter blue)
    const statsData = [
        { label: "Active Courses", value: "0", subtext: "Start Learning", icon: BookOpen, gradient: "from-[#0066CC] to-[#0052a3]" },
        { label: "Workshops", value: totalWorkshops.toString(), subtext: "Available Now", icon: Zap, gradient: "from-[#FD5A1A] to-orange-600" },
        { label: "Community", value: allLeads.length.toString(), subtext: "Students Active", icon: Users, gradient: "from-[#0066CC] to-[#FD5A1A]" },
        { label: "Hackathons", value: totalHackathons.toString(), subtext: "Competitions", icon: Trophy, gradient: "from-[#FD5A1A] to-red-600" },
    ];

    return (
        <div className="bg-gradient-to-br from-slate-50 via-blue-50/20 to-orange-50/20 min-h-screen relative">
            <Header />

            {/* Notification Popup - Optimized for mobile */}
            <AnimatePresence>
                {showPopup && currentPopLead && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-24 md:top-28 left-4 right-4 md:left-auto md:right-8 z-[9999] md:w-auto md:min-w-[320px] bg-white shadow-2xl rounded-2xl border-2 border-slate-200 p-3 md:p-4 flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FD5A1A] to-orange-600 flex items-center justify-center text-white shadow-lg shrink-0">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs md:text-sm text-slate-700 font-medium">
                                <span className="font-bold text-slate-900">{currentPopLead.name.split(' ')[0]}</span> just joined{' '}
                                <span className="text-[#0066CC] font-bold">{currentPopLead.course || "an event"}</span>!
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="pt-32 md:pt-36 pb-16 md:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Welcome Header Section */}
                <section className="bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden mb-6 md:mb-8">
                    {/* Gradient Background - Hidden on mobile for performance */}
                    <div className="hidden md:block absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-blue-100 to-orange-100 rounded-full blur-3xl -mr-20 -mt-20 opacity-60 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
                        <div className="space-y-2 md:space-y-3 max-w-2xl">
                            <div className="inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1 bg-gradient-to-r from-blue-50 to-orange-50 backdrop-blur-sm border border-[#0066CC]/20 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#0066CC] mb-1 md:mb-2">
                                <LayoutDashboard className="w-3 h-3" /> Dashboard
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                                Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#FD5A1A]">{user?.name?.split(' ')[0] || "Student"}</span> 👋
                            </h1>
                            <p className="text-slate-600 font-medium text-sm sm:text-base md:text-lg max-w-lg">
                                Ready to level up? Explore new courses and track your progress here.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
                            <Button
                                onClick={() => navigate('/courses')}
                                className="h-11 md:h-12 px-4 md:px-6 rounded-xl bg-gradient-to-r from-[#0066CC] to-[#0052a3] hover:from-[#0066CC]/90 hover:to-[#0066CC]/90 text-white font-bold shadow-lg shadow-[#0066CC]/20 flex-1 md:flex-none text-sm md:text-base"
                            >
                                <BookOpen className="w-4 h-4 mr-2" /> <span className="hidden sm:inline">Browse</span> Courses
                            </Button>
                            <Button
                                variant="outline"
                                onClick={logout}
                                className="h-11 md:h-12 w-11 md:w-12 rounded-xl border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
                            >
                                <LogOut className="w-4 md:w-5 h-4 md:h-5" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Stats Grid - Fully Responsive */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8">
                    {statsData.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.3 }}
                            className="bg-white p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/40 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={cn(
                                "w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 bg-gradient-to-br",
                                stat.gradient,
                                "text-white shadow-lg"
                            )}>
                                <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="space-y-0.5 md:space-y-1">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900">{stat.value}</h3>
                                <p className="text-[10px] md:text-xs lg:text-sm font-bold text-slate-700 uppercase tracking-wide leading-tight">{stat.label}</p>
                                <p className="text-[9px] md:text-[10px] lg:text-[11px] font-medium text-slate-400">{stat.subtext}</p>
                            </div>
                            <div className="hidden md:block absolute top-4 lg:top-5 right-4 lg:right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight className="w-4 h-4 text-slate-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">

                    {/* Left Column (Main Content) */}
                    <div className="lg:col-span-8 space-y-6 md:space-y-8">

                        {/* Active Registrations Marquee - Performance optimized */}
                        <section className="bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-lg p-4 md:p-6 overflow-hidden relative">
                            <div className="flex items-center justify-between mb-4 md:mb-6">
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-green-600">
                                        <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                    <h3 className="font-black text-slate-900 text-base md:text-lg">Live Registrations</h3>
                                </div>
                                <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
                                </span>
                            </div>

                            <div className="relative -mx-4 md:-mx-6">
                                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-white to-transparent z-10" />
                                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-white to-transparent z-10" />
                                <div className="flex overflow-hidden pb-3 md:pb-4">
                                    {allLeads.length > 0 ? (
                                        <motion.div
                                            animate={{ x: [0, -180 * Math.min(allLeads.length, 10)] }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: Math.max(15, Math.min(allLeads.length, 10) * 4),
                                                ease: "linear"
                                            }}
                                            className="flex gap-3 md:gap-4 px-4 md:px-6"
                                        >
                                            {[...allLeads.slice(0, 10), ...allLeads.slice(0, 10)].map((lead, idx) => (
                                                <div key={`${idx}-lead`} className="flex items-center gap-2 md:gap-3 bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-100 p-2.5 md:p-3 rounded-xl md:rounded-2xl w-[220px] md:w-[260px] shrink-0">
                                                    <div className="h-9 w-9 md:h-10 md:w-10 rounded-lg md:rounded-xl bg-gradient-to-br from-[#0066CC] to-[#FD5A1A] shadow-sm flex items-center justify-center text-[10px] md:text-xs font-bold text-white">
                                                        {lead.name.slice(0, 2).toUpperCase()}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-xs md:text-sm font-bold text-slate-900 truncate">{lead.name}</p>
                                                        <p className="text-[9px] md:text-[10px] text-slate-500 font-medium truncate">
                                                            Joined <span className="text-[#0066CC] font-bold">{lead.course || "Event"}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    ) : (
                                        <div className="w-full text-center py-6 md:py-8 text-slate-400 text-xs md:text-sm font-medium px-4">No active registrations at the moment.</div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Recent Events & Activities */}
                        <section>
                            <div className="flex items-center justify-between mb-4 md:mb-6">
                                <h3 className="text-lg md:text-xl font-black text-slate-900">Upcoming Events</h3>
                                <Button
                                    variant="ghost"
                                    className="text-[#0066CC] hover:text-[#FD5A1A] hover:bg-orange-50 font-bold text-xs md:text-sm h-7 md:h-8 px-2 md:px-3"
                                    onClick={() => navigate('/events')}
                                >
                                    View All
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                {[...workshops.slice(0, 1), ...hackathons.slice(0, 1), ...activities.slice(0, 2)].map((event, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => navigate(event.id.includes('h') ? '/hackathon' : event.id.includes('w') ? '/workshop' : '/events')}
                                        className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-600/30 transition-all cursor-pointer group flex gap-3 md:gap-4 items-center"
                                    >
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-slate-100 overflow-hidden shrink-0 relative">
                                            {event.thumbnailUrl ? (
                                                <img src={event.thumbnailUrl} alt={event.name} className="w-full h-full object-cover" loading="lazy" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 text-blue-600">
                                                    <Calendar className="w-6 h-6 md:w-8 md:h-8" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="min-w-0 flex-1 py-1">
                                            <div className="flex gap-1.5 md:gap-2 mb-1 md:mb-1.5">
                                                <span className={cn(
                                                    "px-1.5 md:px-2 py-0.5 rounded-md text-[8px] md:text-[9px] font-black uppercase tracking-wider",
                                                    idx === 0 ? "bg-gradient-to-r from-[#FD5A1A]/10 to-orange-100 text-[#FD5A1A]" : "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600"
                                                )}>
                                                    {idx === 0 ? "Workshop" : "Event"}
                                                </span>
                                            </div>
                                            <h4 className="font-bold text-slate-900 text-xs md:text-sm leading-tight mb-1 truncate group-hover:text-blue-600 transition-colors">{event.name}</h4>
                                            <div className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[10px] font-medium text-slate-400">
                                                <span>{event.date}</span>
                                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                <span>{event.mode}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {workshops.length === 0 && hackathons.length === 0 && (
                                    <div className="col-span-full py-10 md:py-12 text-center bg-white rounded-xl md:rounded-2xl border border-dashed border-slate-200">
                                        <Calendar className="w-10 h-10 md:w-12 md:h-12 text-slate-200 mx-auto mb-3" />
                                        <p className="text-slate-400 font-bold text-sm md:text-base">No upcoming events scheduled.</p>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Recent Reviews */}
                        <section>
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                <h3 className="text-lg md:text-xl font-black text-slate-900">Your Feedback</h3>
                                <div className="h-px bg-slate-200 flex-1" />
                            </div>
                            {myReviews.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    {myReviews.slice(0, 4).map((review) => (
                                        <div key={review._id} className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-100 shadow-sm relative">
                                            <div className="absolute top-3 md:top-5 right-3 md:right-5 flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={cn("w-2.5 h-2.5 md:w-3 md:h-3", i < review.rating ? "text-[#FD5A1A] fill-[#FD5A1A]" : "text-slate-200")} />
                                                ))}
                                            </div>
                                            <span className="px-2 md:px-2.5 py-0.5 md:py-1 bg-gradient-to-r from-slate-50 to-blue-50 text-slate-700 rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-2 md:mb-3 inline-block border border-slate-100">
                                                {review.category}
                                            </span>
                                            <p className="text-xs md:text-sm font-medium text-slate-600 italic leading-relaxed line-clamp-3">"{review.message}"</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-slate-100 text-center">
                                    <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-slate-200 mx-auto mb-3" />
                                    <p className="text-slate-400 font-medium text-xs md:text-sm">You haven't submitted any feedback yet.</p>
                                </div>
                            )}
                        </section>

                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="lg:col-span-4 space-y-4 md:space-y-6">

                        {/* Profile Card with Logo Colors */}
                        <div className="bg-gradient-to-br from-[#0066CC] to-[#0052a3] rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl shadow-[#0066CC]/20 group">
                            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-[#FD5A1A]/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-2xl -ml-10 -mb-10" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 p-1.5 bg-white/10 backdrop-blur-md rounded-full mb-4 md:mb-5">
                                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[#0066CC] text-2xl md:text-3xl font-black shadow-inner overflow-hidden">
                                        {user?.avatar ? (
                                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                        ) : (
                                            user?.name?.charAt(0).toUpperCase()
                                        )}
                                    </div>
                                </div>

                                {isEditing ? (
                                    <div className="w-full space-y-3 mb-4">
                                        <Input
                                            value={editForm.name}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                if (/^[a-zA-Z\s]*$/.test(val)) {
                                                    setEditForm({ ...editForm, name: val });
                                                }
                                            }}
                                            placeholder="Full Name"
                                            className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 text-center font-bold"
                                        />
                                        <Input
                                            value={editForm.phone}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                if (/^\d*$/.test(val) && val.length <= 10) {
                                                    setEditForm({ ...editForm, phone: val });
                                                }
                                            }}
                                            placeholder="Phone Number"
                                            className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 text-center font-bold"
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-1.5">{user?.name}</h3>
                                        <p className="text-blue-100/80 text-xs md:text-sm font-medium mb-4 md:mb-6 break-all px-2 md:px-4">{user?.email}</p>
                                    </>
                                )}

                                <div className="w-full bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 flex justify-between items-center mb-4 md:mb-6 border border-white/10">
                                    <div className="text-left">
                                        <p className="text-[9px] md:text-[10px] font-bold text-blue-200 uppercase tracking-wider">Status</p>
                                        <p className="font-bold text-xs md:text-sm">Active</p>
                                    </div>
                                    <div className="h-6 md:h-8 w-px bg-white/20" />
                                    <div className="text-right">
                                        <p className="text-[9px] md:text-[10px] font-bold text-blue-200 uppercase tracking-wider">Plan</p>
                                        <p className="font-bold text-xs md:text-sm">Free</p>
                                    </div>
                                </div>

                                {isEditing ? (
                                    <div className="flex gap-2 w-full">
                                        <Button
                                            onClick={() => setIsEditing(false)}
                                            variant="outline"
                                            className="flex-1 bg-transparent text-white border-white/40 hover:bg-white/10 h-10 md:h-12 rounded-xl"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={handleUpdateProfile}
                                            className="flex-1 bg-white text-[#0066CC] hover:bg-white/90 h-10 md:h-12 rounded-xl font-bold"
                                        >
                                            Save
                                        </Button>
                                    </div>
                                ) : (
                                    <Button
                                        onClick={() => {
                                            setEditForm({
                                                name: user?.name || "",
                                                phone: user?.phone || ""
                                            });
                                            setIsEditing(true);
                                        }}
                                        className="w-full bg-white text-[#0066CC] hover:bg-[#0066CC]/10 font-black h-10 md:h-12 rounded-xl transition-colors text-sm md:text-base"
                                    >
                                        Edit Profile
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Continue Learning Widget */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-slate-100 shadow-lg shadow-slate-200/30">
                            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-indigo-600">
                                    <Activity className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <h3 className="font-black text-slate-900 text-sm md:text-base">Current Progress</h3>
                            </div>
                            <div className="text-center py-4 md:py-6">
                                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-50 border-4 border-slate-100 text-slate-300 mb-2 md:mb-3">
                                    <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <p className="text-xs md:text-sm font-bold text-slate-900 mb-1">No Active Courses</p>
                                <p className="text-[10px] md:text-xs text-slate-400 font-medium mb-3 md:mb-4">Enroll in a course to track progress.</p>
                                <Button
                                    onClick={() => navigate('/courses')}
                                    className="w-full bg-gradient-to-r from-[#0066CC] to-[#0052a3] hover:from-[#0066CC]/90 hover:to-[#0066CC]/90 text-white font-bold h-9 md:h-10 rounded-xl text-xs md:text-sm"
                                >
                                    Start Learning
                                </Button>
                            </div>
                        </div>

                        {/* Help Widget */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl md:rounded-2xl p-5 md:p-6 text-white shadow-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <Award className="w-5 h-5 text-[#FD5A1A]" />
                                <h3 className="font-black text-base md:text-lg">Need Assistance?</h3>
                            </div>
                            <p className="text-slate-400 text-[10px] md:text-xs font-medium mb-4 md:mb-6 leading-relaxed">
                                Our support team is here to help with any academic or technical issues.
                            </p>
                            <Button
                                onClick={() => setShowSupportPopup(true)}
                                className="w-full bg-white/10 hover:bg-white/20 text-white border-none font-bold h-9 md:h-10 rounded-xl text-xs md:text-sm backdrop-blur-sm"
                            >
                                Contact Support
                            </Button>
                        </div>

                    </div>
                </div>

                {/* Support Popup */}
                {showSupportPopup && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowSupportPopup(false)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-[#0066CC]" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">Need Help?</h3>
                            <p className="text-slate-600 mb-8">Contact our support team anytime.</p>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Support</p>
                                    <a href="tel:8019952233" className="text-xl font-black text-slate-900 hover:text-[#0066CC] transition-colors block">8019952233</a>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Support</p>
                                    <a href="mailto:Info@aotms.in" className="text-xl font-black text-slate-900 hover:text-[#0066CC] transition-colors block">Info@aotms.in</a>
                                </div>
                            </div>

                            <Button
                                onClick={() => setShowSupportPopup(false)}
                                className="w-full h-12 rounded-xl bg-[#0066CC] hover:bg-[#0052a3] text-white font-bold"
                            >
                                Close
                            </Button>
                        </motion.div>
                    </div>
                )}

            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
