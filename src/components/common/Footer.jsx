import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
        bg-[#7B1E1E] text-white
        pt-16 pb-8
        motion-safe:animate-fadeInUp
      "
      aria-label="Website footer"
    >
      {/* =========================
          Main Footer Content
      ========================= */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div
          className="
            grid gap-8
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* =========================
              Column 1 – School Info
          ========================= */}
          <div>
            <img
              src="/logo.png"
              alt="Golden Dreams Academy Logo"
              className="h-[48px] w-auto mb-4"
            />

            <h3 className="text-[20px] font-bold mb-3">
              Golden Dreams Academy
            </h3>

            <p className="text-[14px] text-[#FDECEC] leading-relaxed">
              Golden Dreams Academy is a trusted educational institution in
              Nathdwara dedicated to academic excellence, discipline, and
              holistic development from Nursery to Class 12.
            </p>
          </div>

          {/* =========================
              Column 2 – Quick Links
          ========================= */}
          <div>
            <h4 className="text-[#F4B400] font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-[10px] text-[14px]">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Academics", path: "/academics" },
                { label: "Admissions", path: "/admissions" },
                { label: "Facilities", path: "/facilities" },
                { label: "Results", path: "/results" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="hover:text-[#F4B400] transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              Column 3 – Academics Links
          ========================= */}
          <div>
            <h4 className="text-[#F4B400] font-semibold mb-4">
              Academics
            </h4>

            <ul className="space-y-[10px] text-[14px]">
              {[
                "Pre-Primary",
                "Primary School",
                "Middle School",
                "Secondary School",
                "Senior Secondary",
              ].map((item) => (
                <li key={item}>
                  <span className="hover:text-[#F4B400] transition-colors duration-200 cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              Column 4 – Contact Info
          ========================= */}
          <div>
            <h4 className="text-[#F4B400] font-semibold mb-4">
              Contact Information
            </h4>

            <ul className="space-y-3 text-[14px]">
              <li>
                <span className="font-semibold">Address:</span>{" "}
                Nathdwara, Rajasthan, India
              </li>

              <li>
                <span className="font-semibold">Phone:</span>{" "}
                +91 XXXXXXXXXX
              </li>

              <li>
                <span className="font-semibold">Email:</span>{" "}
                info@goldendreamsacademy.in
              </li>
            </ul>
          </div>
        </div>

        {/* =========================
            Divider
        ========================= */}
        <div className="mt-12 mb-6 h-px bg-[rgba(255,255,255,0.2)]" />

        {/* =========================
            Bottom Bar
        ========================= */}
        <div
          className="
            flex flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
            text-[13px]
            text-[#FDECEC]
          "
        >
          <span>
            © 2026 Golden Dreams Academy. All Rights Reserved.
          </span>

          <div className="flex gap-4">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Mandatory Disclosure",
            ].map((item) => (
              <span
                key={item}
                className="hover:text-[#F4B400] transition-colors duration-200 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
