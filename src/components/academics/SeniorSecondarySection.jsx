import { motion } from "framer-motion";

export default function SeniorSecondarySection() {
  const streams = [
    {
      name: "Science",
      subjects: "Physics, Chemistry, Mathematics / Biology",
      desc: "Focused preparation for engineering, medical, and science-based higher education paths.",
      image: "/images/senior-science.jpg",
      alt: "Science stream students in lab at Golden Dreams Academy",
    },
    {
      name: "Commerce",
      subjects: "Accountancy, Business Studies, Economics",
      desc: "Strong conceptual understanding for careers in finance, business, and management.",
      image: "/images/senior-commerce.jpg",
      alt: "Commerce stream students at Golden Dreams Academy",
    },
    {
      name: "Arts",
      subjects: "History, Political Science, Sociology, Humanities subjects",
      desc: "Encouraging analytical thinking and conceptual depth in humanities disciplines.",
      image: "/images/senior-arts.jpg",
      alt: "Arts stream students at Golden Dreams Academy",
    },
  ];

  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ===== Section Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="block mb-4 text-[13px] font-semibold tracking-[1.5px] uppercase text-[#7B1E1E]">
            SENIOR SECONDARY EDUCATION
          </span>

          <h2 className="text-[#1F2937] font-bold text-[28px] md:text-[36px] lg:text-[44px] leading-[1.2] mb-5 max-w-[720px]">
            Stream Specialization with Focused Career Preparation
          </h2>

          <p className="text-[16px] leading-[1.8] text-[#4B5563] max-w-[680px]">
            Classes 11 and 12 mark a decisive academic stage where students
            specialize in chosen streams and prepare for higher education with
            structured academic guidance.
          </p>
        </motion.div>

        {/* ===== Streams Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[60px]">
          {streams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="bg-[#FAF7F2] rounded-[22px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={stream.image}
                  alt={stream.alt}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out hover:scale-[1.05]"
                />
              </div>

              <div className="p-5">
                <h3 className="text-[#1F2937] font-semibold text-[18px] mb-2">
                  {stream.name}
                </h3>

                <p className="text-[#7B1E1E] text-[14px] mb-3 font-medium">
                  {stream.subjects}
                </p>

                <p className="text-[#4B5563] text-[14px] leading-[1.7]">
                  {stream.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== Academic Support Highlight ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-[60px] bg-[#FAF7F2] border-l-[5px] border-[#7B1E1E] p-7"
        >
          <p className="text-[#1F2937] font-medium leading-[1.7]">
            Intensive board preparation, regular mock tests, career counseling
            sessions, and subject-specific mentoring ensure students are fully
            prepared for competitive exams and higher education pathways.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
