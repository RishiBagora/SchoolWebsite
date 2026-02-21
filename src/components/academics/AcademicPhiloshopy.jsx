import { motion, useReducedMotion } from "framer-motion";

export default function AcademicPhilosophy() {
  const prefersReducedMotion = useReducedMotion();

  const item = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    show: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* decorative glow */}
      <div className="absolute -top-16 left-0 w-[260px] h-[260px] bg-[#7B1E1E]/10 blur-3xl rounded-full" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ===== TEXT BLOCK ===== */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-[620px]"
          >
            {/* Label */}
            <span className="block mb-4 text-sm font-semibold tracking-widest uppercase text-[#7B1E1E]">
              OUR ACADEMIC PHILOSOPHY
            </span>

            {/* Heading */}
            <h2 className="text-[#1F2937] font-extrabold leading-[1.2]
                           text-[28px] sm:text-[34px] lg:text-[40px] mb-6">
              Building Strong Foundations with Discipline & Concept Clarity
            </h2>

            {/* Paragraphs */}
            <p className="text-[17px] sm:text-[18px] leading-[1.9] text-gray-600 mb-4">
              Our academic philosophy focuses on clarity of concepts, disciplined
              routines and consistent evaluation to ensure steady progress for
              every student.
            </p>

            <p className="text-[17px] sm:text-[18px] leading-[1.9] text-gray-600 mb-4">
              A strong foundation in early years creates confident learners in
              higher classes. Our structured teaching approach supports gradual
              development across all academic stages.
            </p>

            <p className="text-[17px] sm:text-[18px] leading-[1.9] text-gray-600">
              Through regular assessments and guided mentorship, we provide
              balanced academic support to every student.
            </p>

            {/* Premium highlight card */}
            <div className="mt-8 bg-[#FAF7F2] border border-[#7B1E1E]/20 
                            rounded-xl p-6 backdrop-blur-md">
              <p className="text-gray-800 font-medium leading-[1.8]">
                Our goal is not only exam success, but developing confident,
                disciplined and responsible individuals.
              </p>
            </div>
          </motion.div>

          {/* ===== IMAGE BLOCK ===== */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-[26px] 
                            shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
              <img
                src="https://www.shutterstock.com/image-photo/primary-school-teacher-walking-classroom-600nw-2492761215.jpg"
                alt="Structured classroom teaching"
                loading="lazy"
                className="w-full h-full object-cover 
                           transition duration-[1.2s] hover:scale-105"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 bg-white 
                            rounded-2xl shadow-xl p-6 w-[220px]">
              <p className="text-3xl font-extrabold text-[#7B1E1E]">100%</p>
              <p className="text-gray-600 text-sm font-medium">
                Focus on Concept Clarity
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}