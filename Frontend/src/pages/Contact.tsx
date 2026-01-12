import React, { useState } from 'react';
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const API_URL = `${import.meta.env.VITE_API_URL}/api/contact`;
      await axios.post(API_URL, formData);
      toast.success("Message sent successfully! We will get back to you soon.");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.msg || "Something went wrong. Please try again.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FF6B35]/20">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              We'd Love to Hear <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#FF6B35]">
                From You
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about our courses, placements, or just want to say hello?
              Our team is ready to help you start your journey.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 -mt-20 relative z-20 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-12 min-h-[800px]">

              {/* Left Side: Contact Info (5 cols) */}
              <div className="lg:col-span-5 bg-[#0B1221] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                {/* Background Details */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B35]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                  <p className="text-slate-400 mb-12">Reach out to us through any of these channels.</p>

                  <div className="space-y-8">
                    <a href="https://wa.me/918019942233" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FF6B35] group-hover:border-[#FF6B35] transition-all duration-300">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 group-hover:text-[#FF6B35] transition-colors">Call or WhatsApp</h4>
                        <p className="text-slate-400 text-sm group-hover:text-white transition-colors">+91 80199 42233</p>
                      </div>
                    </a>

                    <a href="mailto:info@aotms.com" className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FF6B35] group-hover:border-[#FF6B35] transition-all duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 group-hover:text-[#FF6B35] transition-colors">Email Us</h4>
                        <p className="text-slate-400 text-sm group-hover:text-white transition-colors">info@aotms.com</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FF6B35] group-hover:border-[#FF6B35] transition-all duration-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 group-hover:text-[#FF6B35] transition-colors">Visit Us</h4>
                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-white transition-colors">
                          Pothuri Towers, 2nd Floor, MG Road,<br />
                          Near DV Manor, Vijayawada - 520010
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
                  <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Follow Us</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Youtube, href: "https://youtube.com/@aotms", name: "YouTube" },
                      { icon: Instagram, href: "https://instagram.com/academyoftechmasters", name: "Instagram" },
                      { icon: Linkedin, href: "https://linkedin.com", name: "LinkedIn" }
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.name}
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                      >
                        <item.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Form (7 cols) */}
              <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="max-w-lg mx-auto w-full">
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Send us a Message</h3>
                  <p className="text-slate-500 mb-10">Use the form below to get in touch with our admissions team.</p>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                        <Input
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-slate-50 border-slate-200 h-12 px-4 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                        <Input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-slate-50 border-slate-200 h-12 px-4 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                      <Input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-slate-50 border-slate-200 h-12 px-4 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all"
                        placeholder="+91 99999 99999"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                      <Textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-slate-50 border-slate-200 px-4 py-3 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all min-h-[150px] resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all hover:-translate-y-1 active:scale-[0.98] text-base group"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>Send Message</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 h-[450px] relative group">
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/50 rounded-[2.5rem] z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5236791966513!2d80.64593811057928!3d16.49963922770637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb43b8f6af1d%3A0x18151e18505cbaf8!2sAcademy%20Of%20Tech%20Masters!5e0!3m2!1sen!2sin!4v1768037573566!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Academy of Tech Masters Location"
              className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 border-0"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
