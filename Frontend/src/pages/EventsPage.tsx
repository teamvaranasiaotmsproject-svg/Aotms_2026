import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { WeeklyActivityManager, EventItem } from "@/components/events/WeeklyActivityManager";
import { CertificateShowcase } from "@/components/CertificateShowcase";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, User, Mail, GraduationCap, Phone } from "lucide-react";

const EventsPage = () => {
    const [events, setEvents] = useState<EventItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [regLoading, setRegLoading] = useState(false);
    const [regForm, setRegForm] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        message: ""
    });

    const navigate = useNavigate();
    const { token } = useAuthStore();

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRegForm(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setRegLoading(true);

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/leads`, {
                ...regForm,
                type: 'event-general-inquiry'
            });
            toast.success("Registration inquiry sent! We'll contact you soon.");
            setRegForm({ name: "", email: "", phone: "", college: "", message: "" });
        } catch (error) {
            toast.error("Failed to send inquiry. Please try again.");
        } finally {
            setRegLoading(false);
        }
    };

    useEffect(() => {
        if (!token) {
            toast.error("Please sign in to access this page");
            navigate("/");
            return;
        }

        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events?type=event`);

                const adaptedEvents = response.data.map((item: { _id?: string; id?: string; name: string; description?: string; thumbnailUrl?: string; bannerUrl?: string; mode?: string; date?: string; duration?: string; tagline?: string; whatYouWillLearn?: string[]; level?: string; isRegistrationOpen?: boolean; }) => ({
                    id: item.id || item._id,
                    name: item.name,
                    description: item.description || "Join our community activities and tech talks.",
                    thumbnailUrl: item.thumbnailUrl || "/images/placeholder-thumb.jpg",
                    bannerUrl: item.bannerUrl || item.thumbnailUrl || "/images/placeholder-banner.jpg",
                    mode: item.mode || "Online",
                    date: item.date || "Upcoming",
                    duration: item.duration || "2 Hours",
                    tagline: item.tagline || "COMMUNITY EVENT",
                    whatYouWillLearn: item.whatYouWillLearn || ["Networking", "Tech Insights", "Community Growth"],
                    level: item.level || "All Levels",
                    isRegistrationOpen: item.isRegistrationOpen
                }));
                setEvents(adaptedEvents);
            } catch (error) {
                console.error("Failed to fetch events", error);
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
        <div className="bg-white min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 pt-28 md:pt-32">
                <WeeklyActivityManager
                    events={events}
                    title="Weekly Activities"
                    subtitle="Join our webinars and expert talks organized regularly for our student community."
                />
                <CertificateShowcase />
            </main>
            <Footer />
        </div>
    );
};

export default EventsPage;
