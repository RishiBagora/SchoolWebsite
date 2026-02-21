import { motion } from "framer-motion";

const leadershipData = [
  {
    name: "Dr. Anjali Sharma",
    designation: "Principal",
    qualification: "M.A., B.Ed., Ph.D.",
    experience: "18+ Years Experience",
    message:
      "Our mission is to nurture disciplined, confident, and future-ready students through structured academics and strong moral values.",
    image: "/images/principal.jpg",
  },
  {
    name: "Mr. Rajesh Mehta",
    designation: "Academic Director",
    qualification: "M.Sc., B.Ed.",
    experience: "15+ Years Experience",
    message:
      "We focus on concept-based learning and continuous academic growth to prepare students for real-world challenges.",
    image: "/images/director.jpg",
  },
];

export default function LeadershipSection() {
  return (
    <section className="bg-[#FAF7F2] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#7B1E1E] tracking-widest font-semibold text-sm mb-4">
            SCHOOL LEADERSHIP
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
            Meet Our Leadership
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {leadershipData.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white rounded-[28px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.10)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-[#1F2937] mt-6">
                {leader.name}
              </h3>

              <p className="text-[#7B1E1E] font-semibold mt-1">
                {leader.designation}
              </p>

              <p className="text-[#4B5563] text-sm mt-4">
                {leader.qualification}
              </p>

              <p className="text-[#4B5563] text-sm mb-4">
                {leader.experience}
              </p>

              <p className="text-[#4B5563] leading-relaxed">
                {leader.message}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
