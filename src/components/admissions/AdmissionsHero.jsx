import { motion } from "framer-motion";
import Breadcrumb from "../common/Breadcrumb";

export default function AdmissionsHero() {
  return (
    <section className="relative w-full min-h-[55vh] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="Admission process at Golden Dreams Academy Nathdwara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex items-center">
        <div className="w-full md:w-3/5">

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-[#F4B400] text-[#1F2937] text-xs font-bold tracking-wide px-4 py-2 rounded-full mb-6"
          >
            ADMISSIONS OPEN
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Admissions Open for Academic Session 2025-26
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 text-base leading-relaxed max-w-2xl mb-10"
          >
            Join Golden Dreams Academy and provide your child with structured,
            disciplined, and future-ready education from Nursery to Class 12.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button
              onClick={() => {
                const section = document.getElementById("admission-form");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#F4B400] text-[#1F2937] font-semibold px-8 py-3 rounded-full hover:bg-[#D89E00] transition-all duration-300"
            >
              Apply Now
            </button>

            <a
              href="/admission-form.pdf"
              download
              className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 text-center"
            >
              Download Admission Form
            </a>
          </motion.div>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Breadcrumb
              items={[
                { label: "Home", link: "/" },
                { label: "Admissions" }
              ]}
              className="text-gray-300"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}
