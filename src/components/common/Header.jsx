import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

/* =========================
   Navigation Items
========================= */
const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Facilities", path: "/facilities" },
  { label: "Results", path: "/results" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

/* =========================
   Mobile Menu Component
========================= */
function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`
        fixed inset-0 z-50 bg-white
        transform transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}
        motion-reduce:transition-none
      `}
      aria-hidden={!open}
    >
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#E5E7EB]">
        <span className="text-[#1F2937] font-semibold text-lg">Menu</span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-[#1F2937] text-2xl focus:outline-none"
        >
          ✕
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className="flex flex-col px-6 py-6 gap-5 text-[16px]">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `
              font-medium transition-colors duration-200
              ${
                isActive
                  ? "text-[#7B1E1E] font-semibold"
                  : "text-[#1F2937] hover:text-[#7B1E1E]"
              }
            `
            }
          >
            {item.label}
          </NavLink>
        ))}

        <div className="mt-6">
          <Button className="w-full">Apply Now</Button>
        </div>
      </nav>
    </div>
  );
}

/* =========================
   Header Component
========================= */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 bg-white
          border-b border-[#E5E7EB]
          transition-all duration-200 ease-out
          ${scrolled ? "shadow-[0_4px_12px_rgba(0,0,0,0.08)]" : ""}
        `}
      >
        {/* =========================
            Top Bar (Desktop Only)
        ========================= */}
        <div className="hidden md:block bg-[#7B1E1E] text-white text-[13px]">
          <div className="max-w-[1400px] mx-auto px-6 h-[36px] flex items-center justify-between">
            <span>📞 +91 98765 43210</span>
            <span>✉️ info@goldendreamsacademy.in</span>
            <span>🕘 Mon–Sat: 9:00 AM – 4:00 PM</span>
          </div>
        </div>

        {/* =========================
            Main Header
        ========================= */}
        <div className="h-[72px] flex items-center">
          <div className="max-w-[1400px] mx-auto w-full px-6 flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Golden Dreams Academy Nathdwara Logo"
                className="h-[40px] md:h-[48px] w-auto"
              />
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-[15px]">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    font-medium transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B1E1E]
                    ${
                      isActive
                        ? "text-[#7B1E1E] font-semibold"
                        : "text-[#1F2937] hover:text-[#7B1E1E]"
                    }
                  `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Button size="small">Apply Now</Button>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="lg:hidden text-[#1F2937] text-[28px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B1E1E]"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
