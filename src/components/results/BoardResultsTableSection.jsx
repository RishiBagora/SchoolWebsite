
import { motion } from "framer-motion";

const resultsData = [
  { year: "2024", class10: "100%", class12: "98%", highestScore: "95%", distinctions: "48" },
  { year: "2023", class10: "100%", class12: "97%", highestScore: "94%", distinctions: "44" },
  { year: "2022", class10: "99%", class12: "96%", highestScore: "93%", distinctions: "41" },
];

export default function BoardResultsTableSection() {
  return (
    <section className="bg-[#FAF7F2] py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#7B1E1E] text-xs font-semibold tracking-widest mb-4">
            YEAR-WISE PERFORMANCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Board Examination Results Overview
          </h2>
        </motion.div>

        {/* Table Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[26px] shadow-lg overflow-x-auto"
        >
          <table className="min-w-full text-left">
            <thead className="bg-[#7B1E1E] text-white text-sm">
              <tr>
                <th className="px-6 py-4">Year</th>
                <th className="px-6 py-4">Class 10 Result %</th>
                <th className="px-6 py-4">Class 12 Result %</th>
                <th className="px-6 py-4">Highest Score</th>
                <th className="px-6 py-4">Distinctions</th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-800">
              {resultsData.map((row, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-[#FAF7F2] transition-colors"
                >
                  <td className="px-6 py-4 font-semibold">{row.year}</td>
                  <td className="px-6 py-4">{row.class10}</td>
                  <td className="px-6 py-4">{row.class12}</td>
                  <td className="px-6 py-4">{row.highestScore}</td>
                  <td className="px-6 py-4">{row.distinctions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Highlight Note */}
        <div className="mt-10 bg-white border-l-4 border-[#F4B400] p-6 rounded-xl">
          <p className="text-gray-800 font-medium">
            Our consistent board results reflect the dedication of students,
            teachers, and parents working together.
          </p>
        </div>

      </div>
    </section>
  );
}