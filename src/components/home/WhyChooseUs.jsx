import React from "react";
import SectionTitle from "../common/SectionTitle";

/* =========================
   Feature Data
========================= */
const FEATURES = [
  {
    icon: "🎓",
    title: "Experienced & Dedicated Faculty",
    description:
      "Our teachers are well-qualified, experienced, and committed to nurturing students academically and personally.",
  },
  {
    icon: "🛡️",
    title: "Safe & Disciplined Campus",
    description:
      "We provide a secure, disciplined, and positive environment where students can learn with confidence.",
  },
  {
    icon: "📘",
    title: "Strong Academic Foundation",
    description:
      "A structured curriculum from Nursery to Class 12 ensures academic excellence and consistent growth.",
  },
  {
    icon: "👥",
    title: "Holistic Development",
    description:
      "Along with academics, we encourage sports, cultural activities, and life skills for all-round development.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="
        bg-[#FAF7F2]
        pt-20 pb-20
        overflow-hidden
      "
      role="region"
      aria-label="Why choose Golden Dreams Academy"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* =========================
            Section Header
        ========================= */}
        <SectionTitle
          subtitle="WHY CHOOSE US"
          title="Why Parents Trust Golden Dreams Academy"
          description="We focus on quality education, strong values, and a safe learning environment to ensure every child reaches their full potential."
          align="center"
        />

        {/* =========================
            Feature Grid
        ========================= */}
        <div
          className="
            grid gap-8
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            mt-12
          "
        >
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white
                rounded-[14px]
                px-6 py-8
                text-center
                shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                transition-all duration-300 ease-out
                hover:-translate-y-1.5
                hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]
                motion-reduce:transition-none
                motion-reduce:hover:transform-none
              "
            >
              {/* Icon */}
              <div
                className="
                  text-[36px]
                  mb-4
                  text-[#7B1E1E]
                "
                aria-hidden="true"
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-[18px]
                  font-semibold
                  text-[#1F2937]
                  mb-3
                "
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-[15px]
                  leading-[1.7]
                  text-[#4B5563]
                "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
