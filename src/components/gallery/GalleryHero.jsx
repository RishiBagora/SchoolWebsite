import { motion } from "framer-motion";
import Breadcrumb from "../common/Breadcrumb";

export default function GalleryHero() {
  return (
    <section className="relative w-full min-h-[60vh] overflow-hidden">

      {/* Collage Background */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
        <img src="/images/gallery1.jpg" className="w-full h-full object-cover" alt="Students in classroom" />
        <img src="/images/gallery2.jpg" className="w-full h-full object-cover" alt="Students playing sports" />
        <img src="/images/gallery3.jpg" className="w-full h-full object-cover hidden md:block" alt="School campus" />
        <img src="/images/gallery4.jpg" className="w-full h-full object-cover hidden md:block" alt="School events" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 flex items-center min-h-[60vh]">
        <div className="max-w-2xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#F4B400] text-[#1F2937] font-bold text-xs px-4 py-1.5 rounded-full inline-block mb-6 tracking-wide"
          >
            PHOTO GALLERY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Life at Golden Dreams Academy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 text-base md:text-lg leading-relaxed mb-6"
          >
            Explore moments from our campus, classrooms, activities, and events that
            reflect the vibrant life of our students.
          </motion.p>

          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Gallery" }
            ]}
            light
          />

        </div>
      </div>
    </section>
  );
}
