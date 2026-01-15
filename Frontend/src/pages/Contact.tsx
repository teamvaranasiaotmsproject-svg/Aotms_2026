import React, { useState } from 'react';
import { sanitizeInput, validate } from "@/utils/validation";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin, Send } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'sonner';

// Google Maps Embed used instead of Leaflet

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;

    // Apply Input Sanitization
    switch (name) {
      case 'name':
        value = sanitizeInput.name(value);
        break;
      case 'phone':
        value = sanitizeInput.phone(value);
        break;
      case 'email':
        value = sanitizeInput.email(value);
        break;
      case 'message':
        value = sanitizeInput.text(value);
        break;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!validate.isName(formData.name)) {
      toast.error("Please enter a valid name (letters only)");
      setLoading(false);
      return;
    }

    if (!validate.isEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }


    if (!validate.isPhone(formData.phone)) {
      toast.error("Please enter a valid phone number (exactly 10 digits)");
      setLoading(false);
      return;
    }

    try {
      const API_URL = "http://localhost:5000/api/contact";
      await axios.post(API_URL, formData);
      toast.success("Message sent successfully! We will get back to you soon.");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.msg || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-6 pt-48 pb-24">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Get In Touch */}
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl font-black text-slate-900 mb-6">Get in Touch</h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                  Have questions about our courses or need career guidance?
                  Reach out to us directly or fill out the form.
                  We're here to help you build your future in tech.
                </p>

                <div className="space-y-8">
                  {/* Phone */}
                  {/* Phone */}
                  <a href="https://wa.me/918019942233?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses." target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Phone / WhatsApp</h3>
                      <p className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">+91 80199 42233 / 52233</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:info@aotms.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</h3>
                      <p className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">info@aotms.com</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4 group cursor-default">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Address</h3>
                      <p className="text-base text-slate-900 font-medium leading-relaxed">
                        Pothuri Towers, 2nd Floor, MG Road,<br />
                        Near DV manor, Vijayawada - 520010
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-8 border-t border-slate-100">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      {[
                        { icon: Youtube, href: "https://youtube.com/@aotms" },
                        { icon: Instagram, href: "https://instagram.com/academyoftechmasters" },
                        { icon: Linkedin, href: "https://linkedin.com" },
                        { icon: Send, href: "https://t.me/aotms" },
                        { icon: FaXTwitter, href: "https://twitter.com/aotms" },
                      ].map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
                        >
                          <item.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-gradient-to-br from-[#0066CC] via-[#0066CC] to-accent p-8 md:p-10 rounded-[32px] shadow-2xl shadow-[#0066CC]/20 relative overflow-hidden border border-white/10">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 -z-0" />

              <h2 className="text-2xl font-bold text-white mb-2 relative z-10">Send a Message</h2>
              <p className="text-blue-100/70 mb-8 relative z-10">We usually respond within 24 hours.</p>

              <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-blue-200/80 uppercase tracking-wider ml-1">Full Name</label>
                    <Input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={50}
                      className="bg-white/5 border-white/10 h-12 px-4 rounded-xl text-white placeholder:text-white/30 focus-visible:ring-accent focus-visible:border-accent/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-blue-200/80 uppercase tracking-wider ml-1">Email Address</label>
                    <Input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={100}
                      className="bg-white/5 border-white/10 h-12 px-4 rounded-xl text-white placeholder:text-white/30 focus-visible:ring-accent focus-visible:border-accent/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-200/80 uppercase tracking-wider ml-1">Phone Number</label>
                  <Input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className="bg-white/5 border-white/10 h-12 px-4 rounded-xl text-white placeholder:text-white/30 focus-visible:ring-accent focus-visible:border-accent/50 transition-all"
                    placeholder="XXXXXXXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-200/80 uppercase tracking-wider ml-1">Message</label>
                  <Textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={1000}
                    className="bg-white/5 border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-white/30 focus-visible:ring-accent focus-visible:border-accent/50 min-h-[120px] transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-white hover:bg-gray-100 text-primary font-bold rounded-xl shadow-lg shadow-black/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          {/* Full Width Map Section */}
          <div className="w-full h-[450px] rounded-[32px] overflow-hidden shadow-xl border border-slate-200 relative z-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5236791966513!2d80.64593811057928!3d16.49963922770637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb43b8f6af1d%3A0x18151e18505cbaf8!2sAcademy%20Of%20Tech%20Masters!5e0!3m2!1sen!2sin!4v1768037573566!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Academy of Tech Masters Location"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;