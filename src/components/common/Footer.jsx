import React from "react";
import { NavLink } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Navigation Data
  const links = {
    quick: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Admissions", path: "/admissions" },
      { label: "Facilities", path: "/facilities" },
    ],
    academics: [
      "Pre-Primary", "Primary School", "Middle School", "Senior Secondary"
    ]
  };

  return (
    <footer className="bg-[#7B1E1E] relative overflow-hidden text-white" aria-label="Footer">
      
      {/* Subtle Texture Overlay - Isse plain red sasta nahi lagega */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 pb-12">
          
          {/* Column 1: Identity */}
          <div className="space-y-6">
            <div className="bg-white p-2 inline-block rounded-xl shadow-lg">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#F4B400]">
                Golden Dreams Academy
              </h3>
              <p className="text-[13px] text-red-100/80 leading-relaxed mt-3 max-w-xs">
                Nurturing young minds in Nathdwara with a perfect blend of 
                traditional values and modern digital excellence.
              </p>
            </div>
            {/* Social Icons with Theme Color */}
            <div className="flex gap-3">
              {[<Facebook />, <Instagram />, <ExternalLink />].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-red-400/30 bg-red-800/40 hover:bg-[#F4B400] hover:text-[#7B1E1E] transition-all duration-300">
                  {React.cloneElement(icon, { size: 16 })}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-[#F4B400] text-sm uppercase tracking-[2px] font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {links.quick.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} className="text-sm text-red-100 hover:text-white flex items-center gap-2 group transition-all">
                    <ArrowRight size={12} className="text-[#F4B400] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h4 className="text-[#F4B400] text-sm uppercase tracking-[2px] font-bold mb-6">Academics</h4>
            <ul className="space-y-3">
              {links.academics.map((item) => (
                <li key={item} className="text-sm text-red-100 flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F4B400]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Container */}
          <div className="bg-red-900/40 p-6 rounded-2xl border border-red-400/20 backdrop-blur-sm">
            <h4 className="text-[#F4B400] text-sm uppercase tracking-[2px] font-bold mb-6">Visit Us</h4>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="text-[#F4B400] shrink-0" size={18} />
                <p className="text-[13px] leading-snug">Opp. New Bus Stand, Nathdwara, Rajasthan</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-[#F4B400] shrink-0" size={18} />
                <p className="text-sm font-bold">+91 9414XXXXXX</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="text-[#F4B400] shrink-0" size={18} />
                <p className="text-sm truncate">info@goldendreams.in</p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider with Gradient */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-red-200/60">
            © {currentYear} Golden Dreams Academy. Built for Excellence.
          </p>
          <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-red-200/80">
            <a href="#" className="hover:text-[#F4B400] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F4B400] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#F4B400] transition-colors">Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}