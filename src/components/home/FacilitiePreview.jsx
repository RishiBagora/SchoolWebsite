import React from "react";
import SectionTitle from "../common/SectionTitle";

/* =========================
   Facilities Data
========================= */
const FACILITIES = [
  {
    title: "Smart Classrooms",
    description:
      "Digitally enabled classrooms that enhance interactive and effective learning.",
    image: {
      src: "/facilities/classroom.jpg",
      alt: "Smart classroom at Golden Dreams Academy",
    },
  },
  {
    title: "Science & Computer Labs",
    description:
      "Well-equipped laboratories that encourage practical learning and experimentation.",
    image: {
      src: "/facilities/labs.jpg",
      alt: "Science and computer labs at Golden Dreams Academy",
    },
  },
  {
    title: "Library & Learning Resources",
    description:
      "A quiet and resource-rich library that promotes reading and research habits.",
    image: {
      src: "/facilities/library.jpg",
      alt: "Library at Golden Dreams Academy",
    },
  },
  {
    title: "Sports & Activity Area",
    description:
      "Dedicated spaces for physical education, sports, and outdoor activities.",
    image: {
      src: "/facilities/sports.jpg",
      alt: "Sports facilities at Golden Dreams Academy",
    },
  },
  {
    title: "Safe Transportation",
    description:
      "Reliable transport facilities with trained staff ensuring student safety.",
    image: {
      src: "/facilities/transport.jpg",
      alt: "School transportation facility",
    },
  },
  {
    title: "Campus Safety & Security",
    description:
      "Secure campus with disciplined environment and comprehensive safety measures.",
    image: {
      src: "/facilities/campus.jpg",
      alt: "Safe and secure campus at Golden Dreams Academy",
    },
  },
];

export default function FacilitiesPreview() {
  return (
    <section
      className="
        bg-[#FAF7F2]
        pt-20 pb-20
      "
      aria-label="School facilities preview"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* =========================
            Section Header
        ========================= */}
        <SectionTitle
          subtitle="OUR FACILITIES"
          title="A Safe, Modern & Student-Friendly Campus"
          description="Our campus is designed to provide students with a secure, engaging, and well-equipped environment that supports both academic and personal growth."
          align="center"
        />

        {/* =========================
            Facilities Grid
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
          {FACILITIES.map((facility) => (
            <div
              key={facility.title}
              className="
                bg-white
                rounded-[16px]
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
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={facility.image.src}
                  alt={facility.image.alt}
                  loading="lazy"
                  className="
                    w-full
                    h-[180px] md:h-[200px] lg:h-[220px]
                    object-cover
                    transition-transform duration-300 ease-out
                    group-hover:scale-105
                    motion-reduce:transform-none
                  "
                />
              </div>

              {/* Text Content */}
              <div className="p-5">
                <h3
                  className="
                    text-[18px]
                    font-semibold
                    text-[#1F2937]
                    mb-2
                  "
                >
                  {facility.title}
                </h3>

                <p
                  className="
                    text-[15px]
                    leading-[1.7]
                    text-[#4B5563]
                  "
                >
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
