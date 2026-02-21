import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const images = [
  { src: "/images/campus/campus-building.jpg", title: "Campus Building", aspect: "aspect-[4/3]" },
  { src: "/images/campus/classroom.jpg", title: "Smart Classrooms", aspect: "aspect-square" },
  { src: "/images/campus/lab.jpg", title: "Science Laboratory", aspect: "aspect-[4/5]" },
  { src: "/images/campus/library.jpg", title: "Modern Library", aspect: "aspect-square" },
  { src: "/images/campus/sports.jpg", title: "Sports Activities", aspect: "aspect-video" },
  { src: "/images/campus/corridor.jpg", title: "Clean Campus", aspect: "aspect-[4/3]" },
];

export default function CampusGalleryPreview() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(null);

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    show: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-10 right-0 w-[300px] h-[300px] bg-[#7B1E1E]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="OUR CAMPUS"
          title="A Glimpse of Life at Golden Dreams Academy"
          description="Explore our classrooms, labs, sports areas and vibrant campus life."
          alignment="center"
        />

        {/* Gallery */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto"
        >
          {images.map((img, index) => (
            <motion.button
              key={index}
              variants={item}
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden rounded-[20px]
                         shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
            >
              <img
                src={img.src}
                alt={img.title}
                className={`w-full ${img.aspect} object-cover 
                           group-hover:scale-110 transition duration-[1.2s]`}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 
                              group-hover:opacity-100 transition duration-500" />

              {/* Caption */}
              <div className="absolute bottom-4 left-4 text-white opacity-0 
                              group-hover:opacity-100 transition duration-500">
                <p className="font-semibold">{img.title}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Premium CTA */}
        <div className="mt-14 text-center">
          <a
            href="/gallery"
            className="inline-block bg-white border border-[#7B1E1E]
                       text-[#7B1E1E] px-10 py-4 rounded-full font-semibold
                       shadow-md hover:bg-[#7B1E1E] hover:text-white
                       transition duration-300"
          >
            View Full Gallery →
          </a>
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-8 text-white text-3xl"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          <img
            src={images[activeIndex].src}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}