import React from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

/* =========================
   News & Events Data
========================= */
const NEWS_EVENTS = [
  {
    title: "Annual Day Celebration",
    date: "15 December 2025",
    summary:
      "Students showcased their talents through performances, speeches, and cultural activities.",
    image: {
      src: "/news/annual-day.jpg",
      alt: "Annual Day celebration at Golden Dreams Academy",
    },
  },
  {
    title: "Science Exhibition",
    date: "02 November 2025",
    summary:
      "Innovative projects presented by students highlighting creativity and scientific thinking.",
    image: {
      src: "/news/science-exhibition.jpg",
      alt: "Science exhibition at Golden Dreams Academy",
    },
  },
  {
    title: "Sports Day Event",
    date: "18 October 2025",
    summary:
      "An energetic sports event encouraging teamwork, discipline, and physical fitness.",
    image: {
      src: "/news/sports-day.jpg",
      alt: "Sports day at Golden Dreams Academy",
    },
  },
];

export default function NewsEventsPreview() {
  return (
    <section
      className="
        bg-[#FAF7F2]
        pt-20 pb-20
      "
      aria-label="School news and events"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* =========================
            Section Header
        ========================= */}
        <SectionTitle
          subtitle="NEWS & EVENTS"
          title="Latest Activities & School Updates"
          description="From academic events to cultural celebrations, our school environment is dynamic and full of learning opportunities."
          align="center"
        />

        {/* =========================
            News & Events Grid
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
          {NEWS_EVENTS.map((item) => (
            <div
              key={item.title}
              className="
                bg-white
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
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
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
              <div className="p-5 text-left">
                <h3
                  className="
                    text-[17px]
                    font-semibold
                    text-[#1F2937]
                    mb-1
                  "
                >
                  {item.title}
                </h3>

                <span
                  className="
                    block
                    text-[13px]
                    font-medium
                    text-[#7B1E1E]
                    mb-3
                  "
                >
                  {item.date}
                </span>

                <p
                  className="
                    text-[15px]
                    leading-[1.7]
                    text-[#4B5563]
                  "
                >
                  {item.summary}
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
            Explore more school activities and announcements
          </p>

          <NavLink to="/news">
            <Button>View All News & Events</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
