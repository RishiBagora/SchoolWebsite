import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const images = [
  {
    src: "/images/campus/campus-building.jpg",
    alt: "Golden Dreams Academy school building Nathdwara",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/campus/classroom.jpg",
    alt: "Classroom learning at Golden Dreams Academy",
    aspect: "aspect-square",
  },
  {
    src: "/images/campus/lab.jpg",
    alt: "Science lab at Golden Dreams Academy",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/campus/library.jpg",
    alt: "School library Golden Dreams Academy",
    aspect: "aspect-square",
  },
  {
    src: "/images/campus/sports.jpg",
    alt: "Sports activities at Golden Dreams Academy",
    aspect: "aspect-video",
  },
  {
    src: "/images/campus/corridor.jpg",
    alt: "Clean campus environment Golden Dreams Academy",
    aspect: "aspect-[4/3]",
  },
];

export default function CampusGalleryPreview() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = () => setActiveIndex(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionTitle
          subtitle="OUR CAMPUS"
          title="A Glimpse of Life at Golden Dreams Academy"
          description="Explore our campus, classrooms, and learning spaces through real moments captured at our school."
          alignment="center"
        />

        {/* Gallery Grid */}
        <motion.div
          initial={
            prefersReducedMotion ? false : { opacity: 0 }
          }
          whileInView={
            prefersReducedMotion ? {} : { opacity: 1 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="
            mt-14
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-4
            max-w-[1200px]
            mx-auto
          "
        >
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="
                relative overflow-hidden
                rounded-[14px]
                shadow-[0_6px_20px_rgba(0,0,0,0.1)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#7B1E1E]
              "
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`
                  w-full h-full object-cover
                  ${img.aspect}
                  transition-transform duration-300 ease-out
                  hover:scale-105
                `}
              />
            </button>
          ))}
        </motion.div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <a
            href="/gallery"
            className="
              inline-block
              border border-[#7B1E1E]
              text-[#7B1E1E]
              px-8 py-3
              rounded-full
              text-[15px]
              font-medium
              hover:bg-[#7B1E1E]
              hover:text-white
              transition-colors duration-300
            "
          >
            Open Full Gallery
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/90
            flex items-center justify-center
            px-4
          "
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="
              max-h-[90vh]
              max-w-[90vw]
              object-contain
            "
          />
        </div>
      )}
    </section>
  );
}
