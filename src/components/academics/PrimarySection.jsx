import { motion } from "framer-motion";

export default function PrimarySection() {
  return (
    <section className="bg-[#FAF7F2] py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-[60px] items-center">
          
          {/* ===== TEXT BLOCK ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Section Label */}
            <span className="block mb-4 text-[13px] font-semibold tracking-[1.5px] uppercase text-[#7B1E1E]">
              PRIMARY EDUCATION
            </span>

            {/* Heading */}
            <h2 className="text-[#1F2937] font-bold text-[26px] md:text-[32px] lg:text-[40px] leading-[1.2] mb-6 max-w-[600px]">
              Strengthening Concepts and Academic Confidence
            </h2>

            {/* Paragraphs */}
            <p className="text-[16px] leading-[1.8] text-[#4B5563] mb-4">
              During the Primary stage (Class 1–5), we focus on building strong
              academic foundations across core subjects while maintaining
              structured discipline and engagement.
            </p>

            <p className="text-[16px] leading-[1.8] text-[#4B5563]">
              Students are encouraged to develop reading fluency, writing
              skills, mathematical understanding, and subject curiosity in a
              supportive classroom environment.
            </p>

            {/* ===== Subjects Grid ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-9">
              {[
                {
                  title: "Language Development",
                  desc: "Focused learning in English and Hindi to enhance reading, writing, and communication skills.",
                },
                {
                  title: "Mathematics",
                  desc: "Strong emphasis on concept clarity, problem-solving, and logical thinking.",
                },
                {
                  title: "Environmental Studies",
                  desc: "Introduction to basic science and social concepts through structured lessons.",
                },
                {
                  title: "Co-Curricular Activities",
                  desc: "Activities that build creativity, discipline, and confidence.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[16px] p-5 shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
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

            {/* ===== Academic Structure Highlight ===== */}
            <div className="mt-9 bg-white border-l-[4px] border-[#7B1E1E] p-5">
              <p className="text-[#1F2937] font-medium">
                Regular assessments, structured lesson plans, and disciplined
                routines ensure consistent academic growth during primary
                years.
              </p>
            </div>
          </motion.div>

          {/* ===== IMAGE BLOCK ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative md:order-last"
          >
            <div className="overflow-hidden rounded-[22px] shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
              <img
                src="/images/primary.jpg"
                alt="Primary students studying at Golden Dreams Academy"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
