import { useCartStore } from "@/store/cartStore";
import { Link } from "react-router-dom";
import { Trash2, Wallet, ArrowRight, IndianRupee } from "lucide-react";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import scannerImg from "@/assets/Scanner.jpeg";
import { FaWhatsapp, FaGooglePay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";

const Cart = () => {
    const { items, removeFromCart } = useCartStore();
    const total = items.reduce((sum, item) => sum + (item.price || 0), 0);

    return (
        <div className="min-h-screen bg-slate-50 font-inter">
            <Header />
            <main className="container mx-auto px-4 pt-36 pb-24 md:pt-48 md:pb-32">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Shopping Cart</h1>

                {items.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Wallet className="w-10 h-10 text-slate-400" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
                        <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like you haven't added any courses yet. Explore our catalog to find the perfect course for your career.</p>
                        <Link to="/#courses" className="btn-primary inline-flex items-center gap-2">
                            Browse Courses <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-center">
                                    <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                                        {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-900 text-lg">{item.name}</h3>
                                        {/* Displaying simple details as requested */}
                                        <p className="text-slate-500 text-sm">Course Price: ₹{item.price?.toLocaleString()}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg text-slate-900">₹{item.price?.toLocaleString()}</p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 text-sm hover:underline mt-1 flex items-center justify-end gap-1"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 sticky top-32">
                                <h2 className="text-xl font-bold text-slate-900 mb-6">Payment Details</h2>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-lg font-black text-slate-900 pb-4 border-b border-slate-100">
                                        <span>Total Amount</span>
                                        <span>₹{total.toLocaleString()}</span>
                                    </div>
                                </div>

                                {/* QR Code Scanner Section */}
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center mb-6">
                                    <p className="text-sm font-medium text-slate-500 mb-4">Scan QR to Pay</p>

                                    <div className="bg-white p-3 rounded-xl inline-block shadow-sm border border-slate-100 mb-4">
                                        <img src={scannerImg} alt="Payment Scanner" className="w-48 h-48 object-contain" />
                                    </div>

                                    <div className="flex items-center justify-center gap-3 mb-3 opacity-80">
                                        <span className="font-black text-slate-700 italic tracking-tighter">BHIM</span>
                                        <div className="h-4 w-px bg-slate-300"></div>
                                        <span className="font-black text-slate-700 italic tracking-tighter">UPI</span>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="text-xs text-slate-500 font-mono bg-white py-1.5 px-3 rounded-lg border border-slate-200 inline-block text-center w-full break-all">
                                            vyapar.174327814713@hdfcbank
                                        </div>
                                        <div className="text-sm font-bold text-slate-900 pt-1">
                                            +91 80199 42233
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Icons */}
                                <div className="flex justify-center items-center gap-6 mb-8 grayscale hover:grayscale-0 transition-all duration-300">
                                    <div className="flex flex-col items-center gap-1 group">
                                        <SiPhonepe className="w-6 h-6 text-[#5f259f] group-hover:scale-110 transition-transform" />
                                        <span className="text-[10px] text-slate-400">PhonePe</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 group">
                                        <FaGooglePay className="w-10 h-6 text-slate-600 group-hover:scale-110 transition-transform" />
                                        <span className="text-[10px] text-slate-400 -mt-1">GPay</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 group">
                                        <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-50 transition-colors">
                                            <IndianRupee className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-600" />
                                        </div>
                                        <span className="text-[10px] text-slate-400">e-Rupee</span>
                                    </div>
                                </div>

                                {/* WhatsApp Button */}
                                <a
                                    href="https://wa.me/918019942233?text=Payment%20successful"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 hover:shadow-green-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                    Get in Touch
                                </a>
                                <p className="text-xs text-center text-slate-400 mt-3 px-4">
                                    After payment, please click above to confirm your order details via WhatsApp.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Cart; 
