import { motion } from "framer-motion";

export default function TeachingApproachSection() {
  const points = [
    "Concept-based teaching methodology",
    "Regular assessment and feedback",
    "Board exam preparation support",
    "Personal mentorship and guidance",
  ];

  return (
    <section className="bg-[#FAF7F2] py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#7B1E1E] tracking-widest font-semibold text-sm mb-4">
            OUR TEACHING APPROACH
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6 leading-snug">
            Structured Learning with Personal Attention
          </h2>

          <p className="text-[#4B5563] leading-relaxed mb-5">
            At Golden Dreams Academy, our teaching methodology emphasizes conceptual
            clarity, disciplined classroom environment, and consistent academic progress.
          </p>

          <p className="text-[#4B5563] leading-relaxed mb-8">
            Teachers focus on individual student development, providing guidance and
            support tailored to each learner’s needs.
          </p>

          {/* Points Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-sm font-medium text-[#1F2937]"
              >
                {point}
              </motion.div>
            ))}
          </div>

          {/* Highlight Note */}
          <div className="bg-white border-l-4 border-[#7B1E1E] mt-10 p-6 rounded-xl">
            <p className="text-[#1F2937] font-medium">
              Our approach ensures academic discipline, clarity of concepts,
              and strong foundation for future success.
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
        >
          <img
            src="/images/faculty/teaching.jpg"
            alt="Teaching session at Golden Dreams Academy"
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}
