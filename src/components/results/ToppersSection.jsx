import { motion } from "framer-motion";

const toppers = [
  {
    name: "Aarav Sharma",
    class: "Class 10",
    percentage: "96%",
    year: "2024",
    image: "/images/toppers/topper1.jpg",
  },
  {
    name: "Riya Mehta",
    class: "Class 12",
    percentage: "95%",
    year: "2024",
    image: "/images/toppers/topper2.jpg",
  },
  {
    name: "Kabir Singh",
    class: "Class 10",
    percentage: "94%",
    year: "2024",
    image: "/images/toppers/topper3.jpg",
  },
];

export default function ToppersSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7B1E1E] text-xs font-semibold tracking-widest mb-4">
            OUR TOPPERS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Celebrating Outstanding Achievers
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {toppers.map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#FAF7F2] rounded-[28px] p-7 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
            >
              <img
                src={student.image}
                alt={student.name}
                loading="lazy"
                className="w-40 h-40 mx-auto object-cover rounded-[20px] border-4 border-[#F4B400] mb-5"
              />

              <h3 className="text-xl font-bold text-gray-800">
                {student.name}
              </h3>

              <p className="text-[#7B1E1E] font-semibold text-sm mb-1">
                {student.class} • {student.year}
              </p>

              <p className="text-3xl font-extrabold text-[#F4B400] mb-1">
                {student.percentage}
              </p>

              <p className="text-sm text-gray-600">
                Board Examination Topper
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}