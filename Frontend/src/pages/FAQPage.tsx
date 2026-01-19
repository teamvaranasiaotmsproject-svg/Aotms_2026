
import { useState } from "react";
import { Header as Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { Plus, Minus, Search, MessageCircle, HelpCircle, MapPin, Clock, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

const faqs = [
    {
        category: "Admissions & Enrollment",
        items: [
            {
                question: "What is the eligibility criteria for joining AOTMS courses?",
                answer: "AOTMS Vijayawada welcomes students, graduates, and working professionals from diverse backgrounds. With training that starts from the fundamentals and progresses step by step, we make it easy for anyone to build strong IT skills. This beginner-friendly, career-focused approach makes AOTMS the most accessible IT training institute in Vijayawada."
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
            },
            {
                question: "What is the batch size?",
                answer: "We maintain small batch sizes of 15-25 students to ensure personalized attention. This allows our trainers to focus on each student's learning pace and address individual doubts effectively."
            },
            {
                question: "Can I switch batches if needed?",
                answer: "Yes, we understand that schedules can change. You can request a batch transfer by contacting our academic coordinator. We'll accommodate your request based on seat availability in other batches."
            }
        ]
    },
    {
        category: "Training & Curriculum",
        items: [
            {
                question: "Are the classes online or offline?",
                answer: "We offer both! You can choose our immersive offline classroom training at our state-of-the-art Vijayawada campus for a hands-on experience, or opt for our live online sessions if you prefer learning from home. Our Vijayawada center is equipped with modern facilities to provide the best learning environment."
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
                answer: "Our Vijayawada trainers are industry experts with 12+ years of real-world experience in top MNCs like TCS, Infosys, and Wipro. They don't just teach theory; they share practical insights and best practices used in the industry, bringing global IT expertise to Vijayawada."
            },
            {
                question: "Do you provide internship certificates?",
                answer: "Yes, upon successful completion of the training and project work, you will receive an internship experience certificate. This is highly valuable as it shows recruiters you have practical work experience."
            },
            {
                question: "How long are the courses?",
                answer: "Course duration varies by program. Most of our comprehensive courses range from 3-6 months. We also offer fast-track options for working professionals and extended programs for students who want deeper learning."
            },
            {
                question: "Do you provide study materials?",
                answer: "Yes! All students receive comprehensive study materials including PDFs, video tutorials, code repositories, and access to our online learning portal with lifetime validity. You'll also get access to premium learning resources and e-books."
            },
            {
                question: "What is the class timing?",
                answer: "We offer flexible timings to suit different schedules: Morning batches (9 AM - 12 PM), Afternoon batches (2 PM - 5 PM), Evening batches (6 PM - 9 PM), and Weekend batches (Sat-Sun, 9 AM - 5 PM)."
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
                answer: "Our students from Vijayawada have been placed in top MNCs and startups including TCS, Infosys, Wipro, Capgemini, HCL, Accenture, Tech Mahindra, and many prominent product-based companies across India and abroad. AOTMS Vijayawada has become a preferred recruitment partner for leading IT companies."
            },
            {
                question: "What is the average salary package?",
                answer: "The starting salary for our freshers from Vijayawada typically ranges from 3.5 LPA to 6 LPA, while experienced professionals often see hikes of 50-100% on their current packages. We have students who have cracked offers up to 12 LPA."
            },
            {
                question: "How many students have been placed?",
                answer: "Over the past 5 years, we have successfully placed 2000+ students from Vijayawada and surrounding areas in top IT companies. Our placement success rate is 95% for students who complete the full program and actively participate in placement drives."
            },
            {
                question: "Do you conduct mock interviews?",
                answer: "Absolutely! We conduct multiple rounds of mock interviews including technical, HR, and managerial rounds. Our trainers provide detailed feedback on your performance and help you improve your interview skills until you're fully confident."
            },
            {
                question: "Will you help with resume building?",
                answer: "Yes, our placement team works one-on-one with each student to create a professional, ATS-friendly resume that highlights your skills, projects, and achievements. We also help you build a strong LinkedIn profile and GitHub portfolio."
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
                answer: "Yes, we believe financial constraints shouldn't stop you from learning. We offer flexible EMI options and installment plans. Please contact our counselors at our Vijayawada center for detailed fee structures."
            },
            {
                question: "Are there any scholarships available?",
                answer: "Yes! We offer merit-based scholarships for top performers, early bird discounts for early enrollments, and special discounts for students from economically weaker sections. Group enrollments also get special pricing."
            },
            {
                question: "What is included in the course fee?",
                answer: "The course fee includes all training sessions, study materials, project guidance, placement assistance, internship certificate, course completion certificate, access to premium tools and software, and lifetime access to our learning portal."
            }
        ]
    },
    {
        category: "Tools & Technologies",
        items: [
            {
                question: "What programming languages and tools will I learn?",
                answer: "Depending on your chosen course, you'll learn industry-standard tools and technologies. For example, Full Stack courses cover HTML, CSS, JavaScript, React, Node.js, MongoDB; Data Science includes Python, Pandas, NumPy, Scikit-learn, TensorFlow; Cloud courses cover AWS, Azure, Docker, Kubernetes, and more."
            },
            {
                question: "Do you provide access to premium tools and software?",
                answer: "Yes! At our Vijayawada training center, we provide access to all necessary premium tools, IDEs, cloud platforms, and software licenses required for your course. You'll get hands-on experience with the same tools used in top IT companies."
            },
            {
                question: "Will I learn the latest technologies?",
                answer: "Absolutely. Our Vijayawada curriculum is regularly updated to include the latest industry trends and technologies. We ensure you learn what's currently in demand in the IT job market, from AI/ML frameworks to modern DevOps tools, making AOTMS Vijayawada a hub for cutting-edge tech education in Andhra Pradesh."
            },
            {
                question: "Do you teach version control and collaboration tools?",
                answer: "Yes, we teach Git, GitHub, and other collaboration tools as part of our curriculum. These are essential skills for any IT professional and are covered in all our technical courses at AOTMS Vijayawada."
            },
            {
                question: "Will I get hands-on practice with real tools?",
                answer: "Absolutely! At our Vijayawada training center, you'll work with the same tools used in the industry - IDEs like VS Code, IntelliJ IDEA, cloud platforms like AWS and Azure, databases like MySQL and MongoDB, and DevOps tools like Docker and Jenkins. Our labs are equipped with high-performance systems for optimal learning."
            }
        ]
    },
    {
        category: "Location & Facilities",
        items: [
            {
                question: "Where is AOTMS located in Vijayawada?",
                answer: "AOTMS is strategically located in the heart of Vijayawada, Andhra Pradesh - one of the fastest-growing IT education hubs in South India. Our campus is easily accessible from all parts of the city and well-connected by public transport."
            },
            {
                question: "What facilities are available at the Vijayawada campus?",
                answer: "Our Vijayawada campus features state-of-the-art computer labs with high-speed internet, air-conditioned classrooms, a dedicated project room, library with technical books, comfortable seating arrangements, and a cafeteria for breaks."
            },
            {
                question: "Is parking available?",
                answer: "Yes, we provide free parking facilities for both two-wheelers and four-wheelers at our Vijayawada campus. The parking area is secure and monitored for the safety of your vehicles, making it convenient for students commuting from different parts of Vijayawada."
            },
            {
                question: "Can I visit the campus before enrolling?",
                answer: "Absolutely! We encourage prospective students to visit our Vijayawada campus, meet our trainers, see our facilities, and attend a free demo class. You can schedule a campus tour by calling us or booking online."
            },
            {
                question: "Do you have hostel facilities?",
                answer: "While we don't have in-house hostel facilities, we can help you find safe and affordable accommodation near our Vijayawada campus."
            }
        ]
    },
    {
        category: "Technical Support & Doubt Clearing",
        items: [
            {
                question: "How can I get my doubts cleared?",
                answer: "At AOTMS Vijayawada, we provide multiple channels for doubt clearing: during class sessions, dedicated doubt-clearing sessions after class, WhatsApp support groups, one-on-one mentoring sessions at our Vijayawada campus, and our online discussion forum where trainers respond within 24 hours."
            },
            {
                question: "Is there support available after course completion?",
                answer: "Yes! We provide support to all our Vijayawada alumni. You can reach out to us anytime for technical guidance, career advice, or placement assistance. We also invite alumni to advanced workshops and networking events at our Vijayawada center, fostering a strong tech community in the city."
            },
            {
                question: "Can I access trainers outside class hours?",
                answer: "Yes, our trainers are available for consultation during designated office hours. You can also schedule one-on-one sessions for personalized guidance on projects or complex topics."
            },
            {
                question: "Do you have an online learning portal?",
                answer: "Yes! All students get access to our comprehensive Learning Management System (LMS) where you can access recorded lectures, assignments, quizzes, project guidelines, study materials, and track your progress throughout the course."
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
                <title>FAQ - IT Training in Vijayawada | Academy of Tech Masters</title>
                <meta name="description" content="Find answers to common questions about AOTMS Vijayawada's IT courses, eligibility, placements, fees, facilities, and more. Premier IT training institute in Vijayawada, Andhra Pradesh." />
                <meta name="keywords" content="AOTMS FAQ, IT training Vijayawada, coding courses Vijayawada, placement assistance Vijayawada, tech education Andhra Pradesh" />
                <link rel="canonical" href="https://aotms.com/faq" />
            </Helmet>
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 md:pt-48 pb-12 bg-[#0066CC] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] opacity-5 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent pointer-events-none" />

                {/* Subtle Orange Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FD5A1A] opacity-60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FD5A1A] opacity-40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1.5 px-3 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-black tracking-widest uppercase mb-6 backdrop-blur-md">
                        Got Questions?
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#FD5A1A] drop-shadow-sm">Questions</span>
                    </h1>
                    <p className="text-blue-100/80 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                        Your trusted IT training partner in Vijayawada. Find answers to common questions about our courses, admissions, placement support, facilities, and more at AOTMS Vijayawada.
                    </p>

                    {/* Vijayawada Location Badge */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-3xl mx-auto">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2.5 text-white">
                            <MapPin className="w-4 h-4 text-[#FD5A1A]" />
                            <span className="font-semibold text-sm">Vijayawada, Andhra Pradesh</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2.5 text-white">
                            <Clock className="w-4 h-4 text-[#FD5A1A]" />
                            <span className="font-semibold text-sm">Mon - Sat: 9 AM - 8 PM</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2.5 text-white">
                            <Phone className="w-4 h-4 text-[#FD5A1A]" />
                            <span className="font-semibold text-sm">+91 80199 52233</span>
                        </div>
                    </div>

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
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FD5A1A]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10 text-white">
                            <MessageCircle className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Still have questions?</h2>
                        <p className="text-blue-100/80 mb-8 max-w-lg mx-auto">
                            Can't find the answer you're looking for? Our Vijayawada team is here to help you. Visit our campus or call us for personalized guidance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="px-8 py-3 bg-[#FD5A1A] hover:bg-[#e04f16] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#FD5A1A]/20 hover:scale-105">
                                Contact Us
                            </a>
                            <a href="tel:+918019952233" className="px-8 py-3 bg-white hover:bg-slate-50 text-[#0075CF] font-bold rounded-xl transition-all hover:scale-105">
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
