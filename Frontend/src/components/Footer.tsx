import { FaTelegram, FaWhatsapp, FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

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

const footerCourses = [
  { name: "Quantum Computing", slug: "Quantum-Computing" },
  { name: "Cybersecurity", slug: "Cybersecurity" },
  { name: "AI with Machine Learning", slug: "AI-with-Machine-Learning" },
  { name: "DevOps (AWS/Azure)", slug: "DevOps-AWS-Azure" },
  { name: "Embedded Systems", slug: "Embedded-Systems" },
  { name: "Data Science", slug: "Data-Science" },
  { name: "Cloud Computing", slug: "Cloud-Computing" },
  { name: "Python Full Stack", slug: "Python-full-stack" },
  { name: "Java Full Stack", slug: "Java-full-stack" },
  { name: "MERN Full Stack", slug: "MERN-full-stack" }
];

const courses = footerCourses.map(course => ({
  name: course.name,
  href: `/course/${course.slug}`
}));

const socialLinks = [
  { icon: FaYoutube, href: "https://youtube.com/@aotms?si=mj3-j_JH4lHC3zeF", label: "YouTube", color: "bg-[#FF0000] hover:bg-[#CC0000]" },
  { icon: FaInstagram, href: "https://www.instagram.com/academyoftechmasters?igsh=enZ5YjYwOXg1cW80&utm_source=qr", label: "Instagram", color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:brightness-110" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn", color: "bg-[#0077B5] hover:bg-[#005582]" },
  { icon: FaXTwitter, href: "https://twitter.com/aotms", label: "X", color: "bg-[#000000] hover:bg-[#222222]" },
  { icon: FaFacebook, href: "https://www.facebook.com/aotms", label: "Facebook", color: "bg-[#1877F2] hover:bg-[#155ab0]" },
  { icon: FaTelegram, href: "https://t.me/aotms", label: "Telegram", color: "bg-[#26A5E4] hover:bg-[#1c7aa8]" },
  { icon: FaWhatsapp, href: "https://wa.me/918019942233", label: "Whatsapp", color: "bg-[#25D366] hover:bg-[#1da851]" },
  { icon: FaEnvelope, href: "mailto:Info@aotms.com", label: "Email", color: "bg-[#D44638] hover:bg-[#b03a2e]" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0066CC] pt-10 pb-6 md:pt-14 md:pb-8 border-t border-white/20 font-sans text-white relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-2">

          {/* Column 1: Brand & Contact (Span 3) */}
          <div className="md:col-span-2 lg:col-span-3 space-y-4">
            <div className="flex flex-col items-start gap-6 lg:block">
              <Link to="/" className="inline-block bg-white p-3 rounded-2xl shadow-md transform transition-transform hover:scale-105">
                <img src={logo} alt="AOTMS Logo" className="h-22 md:h-25 w-auto" />
              </Link>
              {/* Mobile Socials */}
              <div className="flex lg:hidden flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-all transform hover:scale-110",
                      social.color
                    )}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <p className="text-xs md:text-sm text-white/100 leading-relaxed max-w-sm">
              Transforming careers through industry-leading tech education. Master the future with Academy of Tech Masters.
            </p>

            <div className="space-y-4 pt-1">
              {/* Contact Items */}
              <div className="flex flex-col gap-3 text-xs md:text-sm">
                <a
                  href="https://www.google.com/maps/search/Academy+of+Tech+Masters+Vijayawada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-accent transition-all group"
                >
                  <FaMapMarkerAlt className="w-4 h-4 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="text-white font-medium">Vijayawada - 520010, AP, India.</span>
                    <span className="text-[10px] text-accent font-bold uppercase tracking-wider mt-0.5">Get Directions</span>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <FaPhone className="w-4 h-4 text-accent shrink-0" />
                  <a href="tel:+918019952233" className="text-white hover:text-accent font-medium transition-colors">+91 80199 52233</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-4 h-4 text-accent shrink-0" />
                  <a href="mailto:Info@aotms.com" className="text-white hover:text-accent font-medium transition-colors">Info@aotms.com</a>
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
                    className="text-xs md:text-sm text-white hover:text-accent transition-colors block"
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
                    className="text-xs md:text-sm text-white hover:text-accent transition-colors truncate block"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect (Span 3 - The Gap Filler) */}
          <div className="hidden lg:block lg:col-span-3">
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white mb-4">Connect with us</h4>
            <div className="grid grid-cols-3 gap-3 w-fit">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-white hover:scale-110 shadow-md hover:shadow-lg transition-all duration-300",
                    social.color
                  )}
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
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
            <p className="text-sm text-white/80 leading-relaxed">
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
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-white/70">
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
