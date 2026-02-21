import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 100,
    suffix: "%",
    label: "Board Result",
    description: "Consistent pass percentage in board examinations",
  },
  {
    number: 95,
    suffix: "%",
    label: "Highest Score",
    description: "Top score achieved by our students",
  },
  {
    number: 50,
    suffix: "+",
    label: "Distinctions",
    description: "Students scoring distinction grades",
  },
  {
    number: 200,
    suffix: "+",
    label: "Successful Students",
    description: "Graduates progressing toward higher education",
  },
];

export default function ResultsStatsSection() {
  return (
    <section className="bg-[#FAF7F2] py-28">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7B1E1E] text-xs font-semibold tracking-widest mb-4">
            OUR PERFORMANCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Consistent Academic Excellence
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[28px] p-10 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#7B1E1E] mb-2">
                <CountUp end={stat.number} duration={2} enableScrollSpy />
                {stat.suffix}
              </h3>

              <p className="font-semibold text-gray-800 mb-1">
                {stat.label}
              </p>

              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
