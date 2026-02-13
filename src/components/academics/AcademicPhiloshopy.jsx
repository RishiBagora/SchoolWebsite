import { motion } from "framer-motion";

export default function AcademicPhilosophy() {
  return (
    <section className="bg-white py-[90px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="
            grid md:grid-cols-2 gap-[64px]
            items-center
          "
        >
          {/* ===== TEXT BLOCK ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Section Label */}
            <span
              className="
                block mb-4
                text-[13px] font-semibold
                tracking-[1.5px] uppercase
                text-[#7B1E1E]
              "
            >
              OUR ACADEMIC PHILOSOPHY
            </span>

            {/* Heading */}
            <h2
              className="
                text-[#1F2937]
                font-bold
                text-[26px] md:text-[32px] lg:text-[38px]
                leading-[1.25]
                mb-6
                max-w-[580px]
              "
            >
              Building Strong Foundations with Discipline and Concept Clarity
            </h2>

            {/* Paragraphs */}
            <p className="text-[16px] leading-[1.8] text-[#4B5563] mb-4">
              At Golden Dreams Academy, our academic philosophy is centered on
              clarity of concepts, disciplined routines, and consistent
              evaluation to ensure steady student progress.
            </p>

            <p className="text-[16px] leading-[1.8] text-[#4B5563] mb-4">
              We believe that a strong foundation built during early years
              creates confident learners in higher classes. Our structured
              teaching approach supports gradual development across all
              academic levels.
            </p>

            <p className="text-[16px] leading-[1.8] text-[#4B5563]">
              With regular assessments, focused classroom engagement, and
              guided mentorship, we ensure that every student receives balanced
              academic support.
            </p>

            {/* Highlight Strip */}
            <div
              className="
                mt-8
                bg-[#FAF7F2]
                border-l-[4px] border-[#7B1E1E]
                p-5
              "
            >
              <p className="text-[#1F2937] font-medium leading-[1.7]">
                Our goal is not only to prepare students for examinations, but
                to develop confident, disciplined, and responsible individuals.
              </p>
            </div>
          </motion.div>

          {/* ===== IMAGE BLOCK ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
              <img
                src="/images/academic-philosophy.jpg"
                alt="Structured classroom teaching at Golden Dreams Academy"
                loading="lazy"
                className="
                  w-full h-full object-cover
                  transition-transform duration-500 ease-out
                  hover:scale-[1.03]
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
