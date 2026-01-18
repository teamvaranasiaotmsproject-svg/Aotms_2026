import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { EventManager, EventItem } from "@/components/events/EventManager";
import { CertificateShowcase } from "@/components/CertificateShowcase";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";
import axios from "axios";

const WorkshopsPage = () => {
    const [events, setEvents] = useState<EventItem[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { token } = useAuthStore();

    useEffect(() => {
        if (!token) {
            toast.error("Please sign in to access this page");
            navigate("/");
            return;
        }

        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events?type=workshop`);

                const adaptedEvents = response.data.map((item: { _id?: string; id?: string; name: string; description?: string; thumbnailUrl?: string; bannerUrl?: string; mode?: string; date?: string; duration?: string; tagline?: string; whatYouWillLearn?: string[]; level?: string; isRegistrationOpen?: boolean; }) => ({
                    id: item.id || item._id,
                    name: item.name,
                    description: item.description || "Join this intensive workshop to master new skills.",
                    thumbnailUrl: item.thumbnailUrl || "/images/placeholder-thumb.jpg",
                    bannerUrl: item.bannerUrl || item.thumbnailUrl || "/images/placeholder-banner.jpg",
                    mode: item.mode || "Online",
                    date: item.date || "TBA",
                    duration: item.duration || "One Day",
                    tagline: item.tagline || "INTENSIVE WORKSHOP SERIES",
                    whatYouWillLearn: item.whatYouWillLearn || ["Industry Standard Tools", "Professional Workflow", "Certificate of Completion"],
                    level: item.level || "Beginner to Pro",
                    isRegistrationOpen: item.isRegistrationOpen
                }));
                setEvents(adaptedEvents);
            } catch (error) {
                console.error("Failed to fetch workshops", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [token, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="pt-32 container mx-auto text-center">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="h-8 w-64 bg-slate-200 rounded mb-4"></div>
                        <div className="h-64 w-full max-w-4xl bg-slate-100 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main className="pt-28 md:pt-32">
                <EventManager
                    events={events}
                    title="Workshops"
                    subtitle="Master in-demand skills with our expert-led intensive workshops."
                />
                <CertificateShowcase />
            </main>
            <Footer />
        </div>
    );
};

export default WorkshopsPage;
