import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

export default function AssessmentSystem() {
  const assessmentItems = [
    {
      title: "Unit Tests",
      description:
        "Regular short assessments to evaluate concept understanding.",
    },
    {
      title: "Term Examinations",
      description:
        "Comprehensive exams conducted at the end of each academic term.",
    },
    {
      title: "Pre-Board Exams",
      description:
        "Board-pattern examinations for senior classes to ensure exam readiness.",
    },
    {
      title: "Performance Reports",
      description:
        "Detailed report cards shared with parents for transparency.",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-[110px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ================= Section Header ================= */}
        <SectionTitle
          subtitle="ASSESSMENT SYSTEM"
          title="Structured Evaluation and Continuous Performance Monitoring"
          description="Our assessment framework ensures transparency, accountability, and consistent academic progress across all classes."
          align="center"
        />

        {/* ================= Full Width Image ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-[50px] overflow-hidden rounded-[26px] shadow-[0_20px_55px_rgba(0,0,0,0.15)]"
        >
          <img
            src="/images/assessment-system.jpg"
            alt="Students appearing for assessment at Golden Dreams Academy"
            loading="lazy"
            className="w-full aspect-[16/9] object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
        </motion.div>

        {/* ================= Assessment Grid ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[28px] mt-[70px]">
          {assessmentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="bg-white rounded-[20px] p-[26px] shadow-[0_10px_28px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out"
            >
              <h3 className="text-[#1F2937] font-semibold text-[16px] mb-3">
                {item.title}
              </h3>
              <p className="text-[#4B5563] text-[14px] leading-[1.7]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= Highlight Strip ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-[80px] bg-white border-l-[6px] border-[#7B1E1E] p-[32px] rounded-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
        >
          <p className="text-[#1F2937] font-medium text-[16px] leading-[1.8]">
            Continuous evaluation ensures that students receive timely academic
            support and parents remain informed about progress throughout the
            academic year.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
