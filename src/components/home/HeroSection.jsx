import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full
        min-h-[85vh] md:min-h-[85vh] min-h-[70vh]
        overflow-hidden
        bg-[#FAF7F2]
      "
      aria-label="Hero section"
    >
      {/* =========================
          Background Image
      ========================= */}
      <div className="absolute inset-0">
        <img
          src="https://resources.finalsite.net/images/f_auto,q_auto/v1712204027/aesacin/anvnnjzscghby9d3amxy/AMIT77761.jpg"
          alt="Students studying at Golden Dreams Academy Nathdwara"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[rgba(123,30,30,0.85)]
            via-[rgba(123,30,30,0.55)]
            to-[rgba(123,30,30,0.15)]
          "
        />
      </div>

      {/* =========================
          Content Container
      ========================= */}
      <div
        className="
          relative z-10
          max-w-[1200px]
          mx-auto
          px-6
          py-16
          flex
          items-center
          min-h-[85vh]
        "
      >
        <div
          className="
            w-full
            md:w-[70%]
            lg:w-[60%]
            motion-safe:animate-fadeInUp
          "
        >
          {/* Subtitle */}
          <span
            className="
              block
              text-[13px] md:text-[14px]
              font-semibold
              tracking-[1.5px]
              uppercase
              text-[#F4B400]
              mb-3
            "
          >
            Nurturing Young Minds
          </span>

          {/* Main Heading */}
          <h1
            className="
              text-white
              font-bold
              leading-[1.15]
              text-[28px] md:text-[36px] lg:text-[48px]
              max-w-[720px]
              mb-5
            "
          >
            Building a Strong Foundation for a Brighter Tomorrow
          </h1>

          {/* Description */}
          <p
            className="
              text-[#FDECEC]
              text-[15px] md:text-[17px]
              leading-[1.7]
              max-w-[640px]
              mb-8
            "
          >
            Golden Dreams Academy is a trusted school in Nathdwara offering
            quality education from Nursery to Class 12, focusing on academic
            excellence, discipline, and holistic development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <NavLink to="/admissions">
              <Button className="bg-[#F4B400] text-[#1F2937] hover:bg-[#D89E00]">
                Apply for Admission
              </Button>
            </NavLink>

            <NavLink to="/contact">
              <Button
                variant="outline"
                className="
                  border-white
                  text-white
                  hover:bg-[rgba(255,255,255,0.15)]
                "
              >
                Contact Us
              </Button>
            </NavLink>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-10 text-[14px] text-white">
            {[
              "Classes Nursery to 12th",
              "Experienced Faculty",
              "Safe & Disciplined Campus",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-[#F4B400]">●</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================
          Scroll Indicator
      ========================= */}
      <div
        className="
          absolute bottom-6 left-1/2
          -translate-x-1/2
          text-white
          opacity-70
          animate-bounce
          motion-reduce:animate-none
        "
        aria-hidden="true"
      >
        ↓
      </div>
    </section>
  );
}
