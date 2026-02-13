import { motion } from "framer-motion";

export default function SecondarySection() {
  return (
    <section className="bg-[#FAF7F2] py-[110px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-[70px] items-center">

          {/* ===== TEXT BLOCK ===== */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Section Label */}
            <span className="block mb-4 text-[13px] font-semibold tracking-[1.5px] uppercase text-[#7B1E1E]">
              SECONDARY EDUCATION
            </span>

            {/* Heading */}
            <h2 className="text-[#1F2937] font-bold text-[26px] md:text-[34px] lg:text-[42px] leading-[1.2] mb-6 max-w-[650px]">
              Focused Board Preparation with Structured Discipline
            </h2>

            {/* Paragraphs */}
            <p className="text-[16px] leading-[1.8] text-[#4B5563] mb-4">
              Classes 9 and 10 mark a crucial academic phase where students are
              systematically prepared for board examinations through structured
              lesson plans and performance tracking.
            </p>

            <p className="text-[16px] leading-[1.8] text-[#4B5563]">
              Our curriculum is aligned with board standards and supported by
              regular tests, revision schedules, and subject-focused guidance
              to ensure exam readiness.
            </p>

            {/* ===== Academic Focus Grid ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-9">
              {[
                {
                  title: "Board-Aligned Curriculum",
                  desc: "Structured syllabus coverage in accordance with board guidelines.",
                },
                {
                  title: "Regular Unit Tests & Pre-Boards",
                  desc: "Frequent assessments to monitor performance and improvement.",
                },
                {
                  title: "Focused Revision Strategy",
                  desc: "Planned revision cycles and concept reinforcement sessions.",
                },
                {
                  title: "Performance Tracking",
                  desc: "Individual progress monitoring with parent communication.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[18px] p-6 shadow-[0_8px_22px_rgba(0,0,0,0.08)]"
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

            {/* ===== Result Highlight Strip ===== */}
            <div className="mt-10 bg-white border-l-[5px] border-[#7B1E1E] p-6">
              <p className="text-[#1F2937] font-medium">
                Consistent academic discipline and exam-focused preparation
                ensure strong board performance and confidence among students.
              </p>
            </div>
          </motion.div>

          {/* ===== IMAGE BLOCK ===== */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[24px] shadow-[0_18px_45px_rgba(0,0,0,0.15)]">
              <img
                src="/images/secondary.jpg"
                alt="Secondary students preparing for board exams at Golden Dreams Academy"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
