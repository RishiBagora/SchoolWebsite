import React from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

/* =========================
   Results Data
========================= */
const RESULTS = [
  {
    name: "Student Name",
    class: "Class 10",
    achievement: "95% in Board Examination",
    year: "2025",
    image: {
      src: "/results/result-1.jpg",
      alt: "Board topper student of Golden Dreams Academy",
    },
  },
  {
    name: "Student Name",
    class: "Class 12",
    achievement: "School Topper – Science Stream",
    year: "2025",
    image: {
      src: "/results/result-2.jpg",
      alt: "Class 12 school topper Golden Dreams Academy",
    },
  },
  {
    name: "Student Name",
    class: "Academic Competition",
    achievement: "State-Level Academic Award",
    year: "2024",
    image: {
      src: "/results/result-3.jpg",
      alt: "Student achievement award Golden Dreams Academy",
    },
  },
];

export default function ResultsHighlight() {
  return (
    <section
      className="
        bg-white
        pt-20 pb-20
      "
      aria-label="Academic results and achievements"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* =========================
            Section Header
        ========================= */}
        <SectionTitle
          subtitle="OUR RESULTS"
          title="Proven Academic Excellence & Student Achievements"
          description="Our students consistently perform well in board examinations and academic competitions, reflecting our strong teaching foundation and disciplined learning environment."
          align="center"
        />

        {/* =========================
            Results Grid
        ========================= */}
        <div
          className="
            grid gap-8
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            mt-12
          "
        >
          {RESULTS.map((result) => (
            <div
              key={result.achievement}
              className="
                bg-[#FAF7F2]
                rounded-[18px]
                overflow-hidden
                shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                transition-all duration-300 ease-out
                hover:-translate-y-1.5
                hover:shadow-[0_14px_32px_rgba(0,0,0,0.12)]
                group
                motion-reduce:transition-none
                motion-reduce:hover:transform-none
              "
            >
              {/* Highlight Strip */}
              <div
                className="
                  bg-[#7B1E1E]
                  text-white
                  text-[12px]
                  font-semibold
                  text-center
                  py-2
                "
              >
                Top Performer
              </div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={result.image.src}
                  alt={result.image.alt}
                  loading="lazy"
                  className="
                    w-full
                    h-[260px] md:h-[300px] lg:h-[320px]
                    object-cover
                    transition-transform duration-300 ease-out
                    group-hover:scale-105
                    motion-reduce:transform-none
                  "
                />
              </div>

              {/* Text Content */}
              <div className="p-5 text-center md:text-center">
                <h3
                  className="
                    text-[17px]
                    font-semibold
                    text-[#1F2937]
                    mb-1
                  "
                >
                  {result.name}
                </h3>

                <p className="text-[14px] text-[#6B7280] mb-2">
                  {result.class} • {result.year}
                </p>

                <p
                  className="
                    text-[15px]
                    font-medium
                    text-[#7B1E1E]
                  "
                >
                  {result.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            CTA Area
        ========================= */}
        <div className="mt-12 text-center">
          <p className="text-[#4B5563] mb-4">
            View detailed board results and achievements
          </p>

          <NavLink to="/results">
            <Button>View All Results</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
