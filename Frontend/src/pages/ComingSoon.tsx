import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Rocket, Construction } from "lucide-react";

const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Header />

            <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-20">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066CC]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="container mx-auto px-4 py-20 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#0066CC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Rocket className="w-12 h-12 text-[#FF6B35] animate-bounce" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-5xl md:text-7xl font-black text-[#111111] tracking-tight mb-6"
                    >
                        Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A00]">Soon</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                    >
                        We are building something amazing. This page is currently under construction and will be live very soon. Stay tuned!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="/" className="px-8 py-4 bg-[#111111] hover:bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 shadow-lg shadow-gray-900/20">
                            Back to Home
                        </a>
                        <a href="/contact" className="px-8 py-4 bg-white hover:bg-gray-50 text-[#111111] border border-slate-200 rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 shadow-lg">
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ComingSoon;
