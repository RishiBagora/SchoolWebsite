import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const levels = {
  "Pre-Primary": {
    age: "3–5 Years",
    title: "Pre-Primary Programme",
    bullets: [
      "Play-based learning approach",
      "Motor skill development",
      "Social interaction building",
      "Creative exploration activities",
    ],
    subjects: ["English Basics", "Numbers", "Art & Craft", "Music", "Physical Activities"],
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
  },
  Primary: {
    age: "6–10 Years",
    title: "Primary Education",
    bullets: [
      "Strong literacy foundation",
      "Numeracy skill development",
      "Digital introduction",
      "Creative thinking exercises",
    ],
    subjects: ["English", "Mathematics", "Science", "Computer", "Arts"],
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
  },
  Middle: {
    age: "11–13 Years",
    title: "Middle School",
    bullets: [
      "Concept clarity focus",
      "Project-based learning",
      "Critical thinking",
      "Skill-based assessments",
    ],
    subjects: [
      "Advanced Mathematics",
      "Science",
      "Social Studies",
      "Computer Science",
      "Languages",
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },
  Secondary: {
    age: "14–16 Years",
    title: "Secondary Education",
    bullets: [
      "Board exam preparation",
      "Career awareness guidance",
      "Analytical skill enhancement",
      "Practical lab exposure",
    ],
    subjects: [
      "Mathematics",
      "Science",
      "Social Science",
      "Computer Applications",
      "Languages",
    ],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
  },
  "Senior Secondary": {
    age: "17–18 Years",
    title: "Senior Secondary Programme",
    bullets: [
      "Stream specialization",
      "Career counseling",
      "Competitive exam preparation",
      "Leadership development",
    ],
    subjects: [
      "Science Stream",
      "Commerce Stream",
      "Arts Stream",
      "Computer Science",
      "Business Studies",
    ],
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
  },
};

export default function AcademicLevelsSection() {
  const tabs = Object.keys(levels);
  const [active, setActive] = useState("Pre-Primary");
  const data = levels[active];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
          Academic Journey
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          From early learning to career readiness.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex md:justify-center gap-3 md:gap-10 overflow-x-auto pb-4 relative">
        {tabs.map((tab) => {
          const isActive = active === tab;
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative whitespace-nowrap px-5 py-2 md:px-2 md:py-0 rounded-full md:rounded-none font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-[#7B1E1E] text-white shadow-lg md:bg-transparent md:text-[#7B1E1E]"
                  : "bg-white text-gray-700 border border-gray-300 md:border-none hover:text-[#7B1E1E]"
              }`}
            >
              {tab}

              {/* Desktop underline indicator */}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="hidden md:block absolute -bottom-2 left-0 right-0 h-[3px] bg-[#7B1E1E] rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content Panel */}
      <div className="mt-12 bg-[#FAF7F2] rounded-2xl shadow-xl p-6 md:p-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={data.image}
            src={data.image}
            alt={data.title}
            className="rounded-xl w-full h-full object-cover"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.4 }}
            loading="lazy"
          />
        </AnimatePresence>

        {/* Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={data.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              {data.age}
            </p>

            <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
              {data.title}
            </h3>

            <ul className="space-y-2 text-gray-700">
              {data.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {data.subjects.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-white rounded-full text-sm shadow"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-block bg-[#7B1E1E] text-white px-6 py-3 rounded-lg hover:bg-[#641717] transition shadow-md"
            >
              Admission Enquiry
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}