import { motion } from "framer-motion";

const achievements = [
  {
    title: "Olympiad Achievers",
    description:
      "Students participating and excelling in national level Olympiad examinations.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sports Competitions",
    description:
      "Winners and participants in inter-school sports competitions.",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cultural Events",
    description:
      "Recognition in dance, music, and cultural programs.",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function AcademicAchievementsSection() {
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
            STUDENT ACHIEVEMENTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Achievements Beyond Academics
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#FAF7F2] rounded-[28px] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-64 object-cover hover:scale-105 transition-all duration-500"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-800 px-5 pt-5 pb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 px-5 pb-6 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}