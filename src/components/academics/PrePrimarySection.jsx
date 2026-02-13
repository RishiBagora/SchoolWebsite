import { motion } from "framer-motion";

export default function PrePrimarySection() {
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
                src="/images/pre-primary.jpg"
                alt="Pre-primary students learning at Golden Dreams Academy"
                loading="lazy"
                className="
                  w-full aspect-[4/3] object-cover
                  transition-transform duration-500 ease-out
                  hover:scale-[1.04]
                "
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
            <span
              className="
                block mb-4
                text-[13px] font-semibold
                tracking-[1.5px] uppercase
                text-[#7B1E1E]
              "
            >
              PRE-PRIMARY EDUCATION
            </span>

            {/* Heading */}
            <h2
              className="
                text-[#1F2937]
                font-bold
                text-[26px] md:text-[32px] lg:text-[40px]
                leading-[1.2]
                mb-6
                max-w-[600px]
              "
            >
              Building Strong Foundations in the Early Years
            </h2>

            {/* Paragraphs */}
            <p className="text-[16px] leading-[1.8] text-[#4B5563] mb-4">
              Our Pre-Primary program focuses on structured play-based learning
              that helps children develop basic literacy, numeracy,
              communication, and social skills.
            </p>

            <p className="text-[16px] leading-[1.8] text-[#4B5563]">
              We create a safe and nurturing classroom environment where young
              learners build curiosity, discipline, and confidence through
              guided activities.
            </p>

            {/* ===== Learning Focus Grid ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-9">
              {[
                {
                  title: "Early Literacy Development",
                  desc: "Introduction to alphabets, reading readiness, and phonetic awareness.",
                },
                {
                  title: "Basic Numeracy Skills",
                  desc: "Counting, number recognition, and foundational mathematical concepts.",
                },
                {
                  title: "Social & Emotional Growth",
                  desc: "Confidence building, teamwork, and classroom discipline.",
                },
                {
                  title: "Activity-Based Learning",
                  desc: "Creative activities that encourage imagination and expression.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-[#FAF7F2]
                    rounded-[16px]
                    p-5
                    shadow-[0_6px_18px_rgba(0,0,0,0.06)]
                  "
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
