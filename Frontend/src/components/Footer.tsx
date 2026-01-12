import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Resources", href: "#" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/FAQ" },
  { name: "Feedback", href: "/feedback" },
  { name: "Terms & Conditions", href: "/terms" },
];

const courses = [
  { name: "Quantum Computing", href: "/course/quantum-computing" },
  { name: "Cyber Security", href: "/course/cyber-security" },
  { name: "AI with Machine Learning", href: "/course/ai-ml" },
  { name: "DevOps", href: "/course/devops" },
  { name: "Embedded Systems", href: "/course/embedded-systems" },
  { name: "Data Science", href: "/course/data-science" },
  { name: "Cloud Computing", href: "/course/multi-cloud-engineering" },
  { name: "Python Full Stack", href: "/course/python-full-stack" },
  { name: "Java Full Stack", href: "/course/java-full-stack" },
  { name: "MERN Stack", href: "/course/mern-stack" }
];

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com/@aotms?si=mj3-j_JH4lHC3zeF", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/academyoftechmasters?igsh=enZ5YjYwOXg1cW80&utm_source=qr", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0066CC] pt-10 pb-6 md:pt-14 md:pb-8 border-t border-white/20 font-sans text-white relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-2">

          {/* Column 1: Brand & Contact (Span 3) */}
          <div className="md:col-span-2 lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between lg:block">
              <Link to="/" className="inline-block bg-white p-3 rounded-2xl shadow-md transform transition-transform hover:scale-105">
                <img src={logo} alt="AOTMS Logo" className="h-10 md:h-14 w-auto" />
              </Link>
              {/* Mobile Socials */}
              <div className="flex lg:hidden gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:bg-accent hover:text-white transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <p className="text-xs md:text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Transforming careers through industry-leading tech education. Master the future with Academy of Tech Masters.
            </p>

            <div className="space-y-2 pt-1">
              {/* Contact Items */}
              <div className="flex flex-col gap-2 text-xs md:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80">Vijayawada - 520010, AP, India.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href="tel:+918019942233" className="text-primary-foreground/80 hover:text-accent transition-colors">+91 80199 42233</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a href="mailto:Info@aotms.com" className="text-primary-foreground/80 hover:text-accent transition-colors">Info@aotms.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Company (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white mb-3">Company</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses (Span 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white mb-3">Trending Courses</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.href}
                    className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors truncate block"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect (Span 3 - The Gap Filler) */}
          <div className="hidden lg:block lg:col-span-3">
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white mb-3">Connect with us</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-accent hover:border-accent hover:text-white text-primary-foreground/80 transition-all duration-300 group w-full max-w-[200px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <social.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section - Restored */}
        <div className="bg-primary-foreground/5 rounded-2xl p-6 md:p-8 mb-6 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group border border-primary-foreground/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/10 transition-colors duration-500" />

          <div className="text-center lg:text-left max-w-lg">
            <h4 className="text-lg md:text-xl font-bold text-white mb-2">Subscribe to our Newsletter</h4>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Get the latest insights, tutorials, and trends in tech delivered directly to your inbox.
            </p>
          </div>

          <form className="flex w-full max-w-md gap-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your work email"
              className="bg-primary text-white border border-primary-foreground/20 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-primary-foreground/30 text-sm"
              required
            />
            <button className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20 text-sm sm:text-base whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] md:text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} AOTMS. All rights reserved. Engineered by Team AOTMS</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
