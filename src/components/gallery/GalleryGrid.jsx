import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryGrid({ activeCategory = "All" }) {
  // 👉 Replace with real images later
  const images = [
    { id: 1, src: "/gallery/campus1.jpg", category: "Campus", alt: "School campus" },
    { id: 2, src: "/gallery/class1.jpg", category: "Classrooms", alt: "Classroom learning" },
    { id: 3, src: "/gallery/lab1.jpg", category: "Labs", alt: "Science lab" },
    { id: 4, src: "/gallery/sport1.jpg", category: "Sports", alt: "Students playing sports" },
    { id: 5, src: "/gallery/event1.jpg", category: "Events", alt: "School event" },
    { id: 6, src: "/gallery/activity1.jpg", category: "Activities", alt: "Student activities" },
    { id: 7, src: "/gallery/campus2.jpg", category: "Campus", alt: "Campus courtyard" },
    { id: 8, src: "/gallery/class2.jpg", category: "Classrooms", alt: "Smart classroom" },
    { id: 9, src: "/gallery/sport2.jpg", category: "Sports", alt: "Playground" },
  ];

  const [filtered, setFiltered] = useState(images);
  const [lightbox, setLightbox] = useState(null);

  // 🔥 Filter logic
  useEffect(() => {
    if (activeCategory === "All") setFiltered(images);
    else setFiltered(images.filter((img) => img.category === activeCategory));
  }, [activeCategory]);

  // ESC close lightbox
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <section className="bg-white py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Masonry Columns */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-3xl shadow-lg cursor-pointer group break-inside-avoid"
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <p className="text-center text-[#4B5563] mt-16">
            No images available in this category.
          </p>
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Preview"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
