
import { useState } from "react";
import { Header as Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Plus, Minus, Search, MessageCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

const faqs = [
    {
        category: "Admissions & Enrollment",
        items: [
            {
                question: "What is the eligibility criteria for joining AOTMS courses?",
                answer: "Our courses are open to students, graduates, and working professionals from any background. While a basic understanding of computers is helpful, we start all our training from the fundamentals to ensure everyone can follow along."
            },
            {
                question: "Do I need a technical background to join?",
                answer: "No! We specialize in training students from non-IT backgrounds (B.Com, B.Sc, BBA, etc.) and transforming them into IT professionals. Our curriculum is designed to bridge the gap between non-tech education and IT industry requirements."
            },
            {
                question: "How do I register for a course?",
                answer: "You can register by visiting our campus in Vijayawada, calling our admissions team, or filling out the enrollment form on our website. Once registered, you will be guided through the batch selection process."
            },
            {
                question: "Can I join if I have a career gap?",
                answer: "Yes! A career gap is not a barrier at AOTMS. We focus on your current skills and project work. Many of our students have successfully restarted their careers after breaks of 2-5 years."
            },
            {
                question: "Do I need to bring my own laptop?",
                answer: "While we have computer labs available for practice, we highly recommend bringing your own laptop. This allows you to practice coding at home and build your own development environment, which is crucial for your career."
            }
        ]
    },
    {
        category: "Training & Curriculum",
        items: [
            {
                question: "Are the classes online or offline?",
                answer: "We offer both! You can choose our immersive offline classroom training at our Vijayawada campus for a hands-on experience, or opt for our live online sessions if you prefer learning from home."
            },
            {
                question: "Do you provide hands-on project experience?",
                answer: "Absolutely. We believe in 'Learning by Doing'. All our courses include real-time industry projects, mini-projects, and case studies to ensure you gain practical experience that employers value."
            },
            {
                question: "What if I miss a class?",
                answer: "Don't worry! We provide recorded sessions of all our classes. You can access these recordings anytime through our Learning Management System (LMS) to catch up or revise topics."
            },
            {
                question: "Do you have weekend batches for working professionals?",
                answer: "Yes, we understand the schedule of working professionals. We offer dedicated weekend batches that cover the same comprehensive curriculum."
            },
            {
                question: "Who are the trainers?",
                answer: "Our trainers are industry experts with 10+ years of real-world experience in top MNCs. They don't just teach theory; they share practical insights and best practices used in the industry."
            },
            {
                question: "Do you provide internship certificates?",
                answer: "Yes, upon successful completion of the training and project work, you will receive an internship experience certificate. This is highly valuable as it shows recruiters you have practical work experience."
            }
        ]
    },
    {
        category: "Placements & Career Support",
        items: [
            {
                question: "Do you offer placement assistance?",
                answer: "Yes, we provide 100% placement assistance. Our dedicated placement cell helps you with resume building, mock interviews, soft skills training, and scheduling interviews with our hiring partners until you get placed."
            },
            {
                question: "Which companies hire from AOTMS?",
                answer: "Our students have been placed in top MNCs and startups including TCS, Infosys, Wipro, Capgemini, HCL, Accenture, and many prominent product-based companies."
            },
            {
                question: "What is the average salary package?",
                answer: "The starting salary for our freshers typically ranges from 3.5 LPA to 6 LPA, while experienced professionals often see hikes of 50-100% on their current packages. We have students who have cracked offers up to 12 LPA."
            }
        ]
    },
    {
        category: "Certification & Fees",
        items: [
            {
                question: "Will I get a certificate upon completion?",
                answer: "Yes, you will receive a course completion certificate from AOTMS, which is recognized by our hiring partners. We also guide you in clearing global certifications (like AWS, Java, etc.) to boost your profile."
            },
            {
                question: "Do you offer installment options for fees?",
                answer: "Yes, we believe financial constraints shouldn't stop you from learning. We offer flexible EMI options and installment plans. Please contact our counselors for detailed fee structures."
            }
        ]
    }
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    const filteredFAQs = faqs.map(cat => ({
        ...cat,
        items: cat.items.filter(item =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.items.length > 0);

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-accent/20">
            <Helmet>
                <title>FAQ | Academy of Tech Masters</title>
                <meta name="description" content="Find answers to common questions about Academy of Tech Masters' IT courses, eligibility, placements, fees, and more." />
                <link rel="canonical" href="https://aotms.com/faq" />
            </Helmet>
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 md:pt-48 pb-12 bg-[#0066CC] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] opacity-5 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent pointer-events-none" />

                {/* Subtle Orange Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] opacity-60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] opacity-40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/200 text-accent font-mono text-xs font-bold tracking-widest uppercase mb-6">
                        Got Questions?
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Questions</span>
                    </h1>
                    <p className="text-blue-100/80 max-w-2xl mx-auto text-lg leading-relaxed">
                        Find answers to common questions about our courses, admissions, placement support, and more.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto mt-10 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                        <div className="relative flex items-center bg-white border border-slate-200 rounded-full px-6 py-4 shadow-xl">
                            <Search className="w-5 h-5 text-primary mr-3" />
                            <input
                                type="text"
                                placeholder="Search for questions..."
                                className="bg-transparent border-none outline-none text-slate-800 w-full placeholder:text-slate-400 font-medium"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Content */}
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">

                {filteredFAQs.length > 0 ? (
                    <div className="space-y-12">
                        {filteredFAQs.map((category, catIdx) => (
                            <div key={catIdx} className="scroll-mt-24">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-accent rounded-full" />
                                    {category.category}
                                </h3>
                                <div className="space-y-4">
                                    {category.items.map((item, idx) => {
                                        const id = `${catIdx}-${idx}`;
                                        const isOpen = openIndex === id;

                                        return (
                                            <div
                                                key={idx}
                                                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-primary shadow-lg shadow-primary/5' : 'border-slate-200 hover:border-primary/30'}`}
                                            >
                                                <button
                                                    onClick={() => toggleFAQ(id)}
                                                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                                                >
                                                    <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                                                        {item.question}
                                                    </span>
                                                    <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all ${isOpen ? 'bg-primary border-primary text-white rotate-180' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                                    </span>
                                                </button>
                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        >
                                                            <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50 mt-2">
                                                                {item.answer}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 border-dashed">
                        <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-800 mb-2">No results found</h3>
                        <p className="text-slate-500">We couldn't find any questions matching "{searchQuery}".</p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-6 text-primary font-semibold hover:underline"
                        >
                            Clear Search
                        </button>
                    </div>
                )}

                {/* Contact CTA */}
                <div className="mt-20 bg-[#0066CC] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10 text-white">
                            <MessageCircle className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Still have questions?</h2>
                        <p className="text-blue-100/80 mb-8 max-w-lg mx-auto">
                            Can't find the answer you're looking for? Our team is here to help you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/20 hover:scale-105">
                                Contact Us
                            </a>
                            <a href="tel:+918019942233" className="px-8 py-3 bg-white hover:bg-slate-50 text-primary font-bold rounded-xl transition-all hover:scale-105">
                                Call Support
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FAQPage;
