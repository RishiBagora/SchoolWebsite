import { motion } from "framer-motion";

export default function MiddleSchoolSection() {
  return (
    <section className="bg-white py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-[60px] items-center">
          
          {/* ===== IMAGE BLOCK ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[22px] shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
              <img
                src="/images/middle-school.jpg"
                alt="Middle school students learning at Golden Dreams Academy"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
              />
            </div>
          </motion.div>

          {/* ===== TEXT BLOCK ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {/* Section Label */}
            <span className="block mb-4 text-[13px] font-semibold tracking-[1.5px] uppercase text-[#7B1E1E]">
              MIDDLE SCHOOL
            </span>

            {/* Heading */}
            <h2 className="text-[#1F2937] font-bold text-[26px] md:text-[32px] lg:text-[40px] leading-[1.2] mb-6 max-w-[620px]">
              Strengthening Concepts and Analytical Thinking
            </h2>

            {/* Paragraphs */}
            <p className="text-[16px] leading-[1.8] text-[#4B5563] mb-4">
              During Classes 6–8, students transition into more subject-focused
              learning with deeper concept exploration and analytical skill
              development.
            </p>

            <p className="text-[16px] leading-[1.8] text-[#4B5563]">
              Our structured teaching approach ensures clarity in Mathematics,
              Science, Languages, and Social Studies while encouraging
              independent thinking and disciplined study habits.
            </p>

            {/* ===== Subjects Grid ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-9">
              {[
                {
                  title: "Mathematics & Logical Reasoning",
                  desc: "Focused on strengthening numerical accuracy and analytical problem-solving.",
                },
                {
                  title: "Science (Physics, Chemistry, Biology Basics)",
                  desc: "Concept-based teaching supported by practical exposure.",
                },
                {
                  title: "Languages",
                  desc: "Enhanced grammar, comprehension, and expressive communication.",
                },
                {
                  title: "Social Sciences",
                  desc: "Understanding history, geography, civics, and societal concepts.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FAF7F2] rounded-[16px] p-5 shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                >
                  <h4 className="font-semibold text-[#1F2937] mb-2 text-[14px]">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-[#4B5563] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* ===== Discipline Highlight ===== */}
            <div className="mt-9 bg-white border-l-[4px] border-[#7B1E1E] p-5">
              <p className="text-[#1F2937] font-medium">
                Regular assessments, homework structure, and academic discipline
                ensure consistent progress and preparation for higher classes.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
