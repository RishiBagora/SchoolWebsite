import { motion } from "framer-motion";

const stats = [
  {
    value: "100%",
    label: "Board Pass Percentage",
    description:
      "Consistent high success rate in board examinations.",
  },
  {
    value: "90%+",
    label: "Top Scoring Students",
    description:
      "Students achieving above 90% marks.",
  },
  {
    value: "5+",
    label: "Years of Consistent Results",
    description:
      "Stable academic performance across years.",
  },
  {
    value: "Regular",
    label: "Merit Achievements",
    description:
      "Recognition in various academic categories.",
  },
];

const toppers = [
  {
    name: "Student Name",
    percentage: "95%",
    class: "Class 10",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
  },
  {
    name: "Student Name",
    percentage: "93%",
    class: "Class 12 Science",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Student Name",
    percentage: "91%",
    class: "Class 12 Commerce",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328d8a18",
  },
];

export default function ResultsSnapshot() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#7B1E1E] text-xs font-semibold tracking-[1.5px] uppercase mb-4">
            Academic Results
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight mb-5">
            Consistent Performance and Board Excellence
          </h2>

          <p className="text-[#4B5563] text-base leading-relaxed">
            Our consistent academic performance reflects disciplined preparation,
            structured teaching, and student dedication.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FAF7F2] rounded-2xl p-7 text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#7B1E1E] mb-2">
                {item.value}
              </h3>
              <p className="text-sm font-semibold text-[#1F2937] mb-2">
                {item.label}
              </p>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-24 mb-16 border-t border-[#E5E7EB]" />

        {/* Toppers Gallery */}
        <div className="grid md:grid-cols-3 gap-8">
          {toppers.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={student.image}
                  alt="Board topper at Golden Dreams Academy"
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-lg font-semibold text-[#1F2937]">
                  {student.name}
                </h4>
                <p className="text-[#7B1E1E] font-bold text-xl mt-1">
                  {student.percentage}
                </p>
                <p className="text-sm text-[#6B7280] mt-1">
                  {student.class}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
