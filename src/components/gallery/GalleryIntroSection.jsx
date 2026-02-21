import { motion } from "framer-motion";

export default function GalleryIntroSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#7B1E1E] text-xs font-semibold tracking-[1.5px] uppercase mb-5"
        >
          CAPTURING MOMENTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] mb-6"
        >
          Explore Our Campus Life
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#4B5563] text-base leading-relaxed max-w-2xl mx-auto"
        >
          Browse through photographs showcasing academics, activities, events, and the everyday experiences of students at Golden Dreams Academy.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-20 h-1 bg-[#F4B400] rounded-full mx-auto mt-14"
        />
        
      </div>
    </section>
  );
}

