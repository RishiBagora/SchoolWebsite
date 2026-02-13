import React from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

/* =========================
   Academics Data
========================= */
const ACADEMICS = [
  {
    icon: "🧩",
    level: "Pre-Primary",
    classes: "Nursery – KG",
    description:
      "Play-based learning focused on early literacy, numeracy, and social skills.",
  },
  {
    icon: "📖",
    level: "Primary School",
    classes: "Class 1 – 5",
    description:
      "Strong foundation in core subjects with emphasis on curiosity and confidence.",
  },
  {
    icon: "🧠",
    level: "Middle School",
    classes: "Class 6 – 8",
    description:
      "Concept clarity, critical thinking, and structured skill development.",
  },
  {
    icon: "🎯",
    level: "Secondary",
    classes: "Class 9 – 10",
    description:
      "Board-oriented preparation with academic discipline and focused guidance.",
  },
  {
    icon: "🎓",
    level: "Senior Secondary",
    classes: "Class 11 – 12",
    description:
      "Subject specialization and career-oriented academic preparation.",
  },
];

export default function AcademicsPreview() {
  return (
    <section
      className="
        bg-white
        pt-20 pb-20
      "
      role="region"
      aria-label="Academics overview"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* =========================
            Section Header
        ========================= */}
        <SectionTitle
          subtitle="OUR ACADEMICS"
          title="A Structured Academic Journey from Nursery to Class 12"
          description="We follow a well-planned curriculum designed to nurture curiosity, build strong fundamentals, and prepare students for future academic success."
          align="center"
        />

        {/* =========================
            Academics Grid
        ========================= */}
        <div
          className="
            grid gap-6
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-5
            mt-12
          "
        >
          {ACADEMICS.map((item) => (
            <div
              key={item.level}
              className="
                bg-[#FAF7F2]
                rounded-[14px]
                px-5 py-7
                text-center
                shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                transition-all duration-300 ease-out
                hover:-translate-y-1.5
                hover:shadow-[0_10px_26px_rgba(0,0,0,0.12)]
                motion-reduce:transition-none
                motion-reduce:hover:transform-none
              "
            >
              {/* Icon */}
              <div
                className="
                  text-[32px]
                  mb-4
                  text-[#7B1E1E]
                "
                aria-hidden="true"
              >
                {item.icon}
              </div>

              {/* Level */}
              <h3
                className="
                  text-[17px]
                  font-semibold
                  text-[#1F2937]
                  mb-1
                "
              >
                {item.level}
              </h3>

              {/* Classes */}
              <span
                className="
                  block
                  text-[14px]
                  font-medium
                  text-[#7B1E1E]
                  mb-3
                "
              >
                {item.classes}
              </span>

              {/* Description */}
              <p
                className="
                  text-[15px]
                  leading-[1.7]
                  text-[#4B5563]
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* =========================
            CTA Area
        ========================= */}
        <div className="mt-12 text-center">
          <p className="text-[#4B5563] mb-4">
            Explore our complete academic structure
          </p>

          <NavLink to="/academics">
            <Button>View Academics</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
