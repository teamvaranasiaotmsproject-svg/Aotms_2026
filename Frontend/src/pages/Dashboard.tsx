import { motion } from "framer-motion";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuthStore } from "@/store/authStore";
import {
    MessageSquare,
    Trophy,
    Calendar,
    ArrowRight,
    Download,
    LogOut,
    Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserReview {
    _id: string;
    message: string;
    rating: number;
    createdAt: string;
    category: string;
    email?: string;
}

const Dashboard = () => {
    const { user, logout } = useAuthStore();
    const [myReviews, setMyReviews] = useState<UserReview[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch user's reviews
    useEffect(() => {
        const fetchUserData = async () => {
            if (!user?.email) return;

            try {
                // In a real app, you'd filter by user ID/email on backend. 
                // For now, we fetch all and filter client-side or assume an endpoint exists.
                // Since our current feedback API returns all, we simulate "My Reviews"
                const res = await axios.get('https://aotms-2026.onrender.com/api/feedback');
                // Filter by email if logged in user has email
                const userReviews = res.data.filter((r: any) => r.email === user.email);
                setMyReviews(userReviews);
            } catch (error) {
                console.error("Failed to fetch dashboard data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user]);

    // Calculate generic stats
    const stats = [
        { label: "My Reviews", value: myReviews.length.toString(), icon: MessageSquare, color: "blue" },
        // Placeholder for future implementation
        { label: "Events Joined", value: "0", icon: Calendar, color: "orange" },
        { label: "Certificates", value: "0", icon: Trophy, color: "purple" },
    ];

    const upcomingEvents = [
        // Mock Data for now
        {
            id: 1,
            title: "AI Hackathon 2024",
            date: "Aug 15, 2024",
            type: "Hackathon",
            status: "Registered"
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            <Header />

            <main className="pt-32 md:pt-40 pb-20 container mx-auto px-4 sm:px-6">
                {/* Welcome Section */}
                <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                            Hello, <span className="text-blue-600">{user?.name?.split(' ')[0] || "Student"}!</span>
                        </h1>
                        <p className="text-slate-500 font-medium">Welcome back to your dashboard.</p>
                    </div>
                    <Button variant="outline" onClick={logout} className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100">
                        <LogOut className="w-4 h-4" /> Sign Out
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 rounded-2xl border flex items-center gap-5 ${stat.color === 'blue' ? 'bg-blue-50 border-blue-100' :
                                stat.color === 'orange' ? 'bg-orange-50 border-orange-100' :
                                    'bg-purple-50 border-purple-100'
                                }`}
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                stat.color === 'orange' ? 'bg-orange-100 text-orange-500' :
                                    'bg-purple-100 text-purple-600'
                                }`}>
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <p className={`text-4xl font-black ${stat.color === 'blue' ? 'text-blue-900' :
                                    stat.color === 'orange' ? 'text-orange-900' :
                                        'text-purple-900'
                                    }`}>{stat.value}</p>
                                <p className={`text-sm font-bold uppercase tracking-wider ${stat.color === 'blue' ? 'text-blue-600' :
                                    stat.color === 'orange' ? 'text-orange-600' :
                                        'text-purple-600'
                                    }`}>{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Main Content Column: Reviews */}
                    <div className="lg:col-span-2 space-y-10">

                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-blue-600" /> My Reviews
                                </h2>
                            </div>

                            {loading ? (
                                <div className="text-center py-10 text-slate-400">Loading your activity...</div>
                            ) : myReviews.length > 0 ? (
                                <div className="space-y-4">
                                    {myReviews.map((review, idx) => (
                                        <motion.div
                                            key={review._id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all"
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-blue-100">
                                                        {review.category || "General"}
                                                    </span>
                                                    <span className="text-xs font-medium text-slate-400">
                                                        {new Date(review.createdAt).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < review.rating ? "fill-orange-400 text-orange-400" : "fill-slate-100 text-slate-100"}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-slate-600 font-medium leading-relaxed">
                                                "{review.message}"
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-slate-50 rounded-2xl p-10 text-center border border-dashed border-slate-200">
                                    <MessageSquare className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">No Reviews Yet</h3>
                                    <p className="text-slate-500 mb-6 max-w-sm mx-auto">You haven't submitted any feedback yet. Share your experience to see it here!</p>
                                    <Button onClick={() => window.location.href = '/feedback'}>Write a Review</Button>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-8">
                        {/* Profile Summary Card */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-blue-900/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 z-0" />
                            <div className="relative z-10 text-center">
                                <div className="w-24 h-24 mx-auto rounded-full p-1 bg-white border-2 border-orange-100 shadow-lg mb-4">
                                    <img src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=random`} alt={user?.name} className="w-full h-full rounded-full object-cover" />
                                </div>
                                <h3 className="text-lg font-black text-slate-900">{user?.name}</h3>
                                <p className="text-sm font-medium text-slate-500 mb-4">{user?.email}</p>

                                <div className="flex justify-center flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Student</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity / Upcoming Events Widget */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-blue-900/5">
                            <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-orange-500" /> Upcoming Events
                            </h3>
                            <div className="space-y-4">
                                {upcomingEvents.map((event) => (
                                    <div key={event.id} className="flex gap-4 items-start p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex flex-col items-center justify-center shrink-0 font-bold leading-none">
                                            <span className="text-sm">{event.date.split(' ')[0]}</span>
                                            <span className="text-lg">{event.date.split(' ')[1].replace(',', '')}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">{event.title}</h4>
                                            <p className="text-xs font-semibold text-slate-500 mb-2">{event.type}</p>
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wide">{event.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Help Widget */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl shadow-blue-600/20">
                            <h3 className="font-black text-lg mb-2">Need Help?</h3>
                            <p className="text-blue-100 text-sm font-medium mb-6">Contact support for assistance with your account.</p>
                            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold border-none" onClick={() => window.location.href = '/contact'}>
                                Contact Support
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;
