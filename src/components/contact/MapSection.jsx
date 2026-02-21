import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="bg-white pt-24 pb-0">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[13px] font-semibold tracking-[1.5px] text-[#7B1E1E] uppercase mb-3"
        >
          Our Location
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
        >
          Visit Our Campus in Nathdwara
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Find us easily using the map below or get directions directly through Google Maps.
        </motion.p>
      </div>

      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
          title="Golden Dreams Academy location map"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </motion.div>

      {/* Direction Button */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center mt-8 mb-20 px-6"
      >
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F4B400] hover:bg-[#D89E00] text-gray-800 font-semibold px-7 py-3 rounded-full transition-all duration-300 w-full md:w-auto text-center"
        >
          Open in Google Maps
        </a>
      </motion.div>
    </section>
  );
}
