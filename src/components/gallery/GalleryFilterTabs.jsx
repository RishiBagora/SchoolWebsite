import { useState } from "react";
import { motion } from "framer-motion";

export default function GalleryFilterTabs({ onChange }) {
  const tabs = [
    "All",
    "Campus",
    "Classrooms",
    "Labs",
    "Sports",
    "Events",
    "Activities",
  ];

  const [active, setActive] = useState("All");

  const handleClick = (tab) => {
    setActive(tab);
    if (onChange) onChange(tab);
  };

  return (
    <section className="bg-white pb-10 px-6">
      <div className="max-w-4xl mx-auto overflow-x-auto no-scrollbar">
        <div className="flex gap-3 w-max mx-auto">

          {tabs.map((tab) => {
            const isActive = active === tab;

            return (
              <motion.button
                key={tab}
                onClick={() => handleClick(tab)}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: isActive ? 1 : 0.95 }}
                transition={{ duration: 0.25 }}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300
                ${
                  isActive
                    ? "bg-[#7B1E1E] text-white shadow-lg"
                    : "bg-[#FAF7F2] text-[#4B5563] hover:bg-[#F4B400] hover:text-[#1F2937]"
                }`}
              >
                {tab}
              </motion.button>
            );
          })}

        </div>
      </div>
    </section>
  );
}
