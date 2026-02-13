import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

export default function AcademicSupport() {
  const supportItems = [
    {
      title: "Doubt-Clearing Sessions",
      description:
        "Dedicated sessions for clarifying subject-specific doubts.",
    },
    {
      title: "Remedial Classes",
      description:
        "Extra academic support for students requiring additional guidance.",
    },
    {
      title: "Career Counseling",
      description:
        "Guidance for stream selection and higher education planning.",
    },
    {
      title: "Parent Communication",
      description:
        "Regular updates and meetings to ensure transparency.",
    },
  ];

  return (
    <section className="relative bg-white pt-[140px] pb-[120px] overflow-hidden">

      {/* ================= Background Image Layer ================= */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/academic-support.jpg"
          alt="Teacher mentoring student at Golden Dreams Academy"
          loading="lazy"
          className="w-full h-[520px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-white"></div>
      </div>

      {/* ================= Floating Content Card ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-[1000px] mx-auto px-6 relative"
      >
        <div className="bg-white rounded-[28px] shadow-[0_40px_90px_rgba(0,0,0,0.12)] p-[60px]">

          <SectionTitle
            subtitle="ACADEMIC SUPPORT"
            title="Personal Attention and Structured Mentoring"
            description="Every student receives focused academic guidance through structured support systems designed for steady progress."
            align="center"
          />

          <p className="text-[#4B5563] text-[16px] leading-[1.9] mt-[40px] text-center max-w-[700px] mx-auto">
            Our mentoring framework ensures that students receive clarity,
            discipline, and personalized academic attention throughout their
            learning journey.
          </p>
        </div>
      </motion.div>

      {/* ================= Support Matrix Section ================= */}
      <div className="max-w-[1100px] mx-auto px-6 mt-[120px]">
        <div className="grid md:grid-cols-2 gap-[60px]">

          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-2 w-4 h-4 bg-[#7B1E1E] rounded-full"></div>

              <h3 className="text-[#1F2937] text-[18px] font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-[#4B5563] text-[15px] leading-[1.8]">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* ================= Wide Highlight Panel ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-[1100px] mx-auto px-6 mt-[120px]"
      >
        <div className="border-l-[6px] border-[#7B1E1E] bg-[#FAF7F2] p-[40px] rounded-[20px]">
          <p className="text-[#1F2937] text-[17px] leading-[1.9] font-medium">
            We are committed to ensuring no student is left behind. Through
            continuous monitoring, mentoring sessions, and structured academic
            planning, we provide a secure foundation for long-term success.
          </p>
        </div>
      </motion.div>

    </section>
  );
}
