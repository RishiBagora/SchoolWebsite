import { motion } from "framer-motion";

const teachers = [
  {
    name: "Mrs. Neha Sharma",
    subject: "Mathematics",
    qualification: "M.Sc., B.Ed.",
    experience: "10 Years Experience",
    image: "/images/teachers/t1.jpg",
  },
  {
    name: "Mr. Amit Verma",
    subject: "Science",
    qualification: "M.Sc., B.Ed.",
    experience: "8 Years Experience",
    image: "/images/teachers/t2.jpg",
  },
  {
    name: "Mrs. Pooja Singh",
    subject: "English",
    qualification: "M.A., B.Ed.",
    experience: "9 Years Experience",
    image: "/images/teachers/t3.jpg",
  },
  {
    name: "Mr. Rahul Joshi",
    subject: "Social Studies",
    qualification: "M.A., B.Ed.",
    experience: "7 Years Experience",
    image: "/images/teachers/t4.jpg",
  },
  {
    name: "Mrs. Kavita Mehta",
    subject: "Hindi",
    qualification: "M.A., B.Ed.",
    experience: "11 Years Experience",
    image: "/images/teachers/t5.jpg",
  },
  {
    name: "Mr. Sandeep Jain",
    subject: "Computer Science",
    qualification: "MCA, B.Ed.",
    experience: "6 Years Experience",
    image: "/images/teachers/t6.jpg",
  },
  {
    name: "Mrs. Ritu Agarwal",
    subject: "Biology",
    qualification: "M.Sc., B.Ed.",
    experience: "8 Years Experience",
    image: "/images/teachers/t7.jpg",
  },
  {
    name: "Mr. Manoj Gupta",
    subject: "Physical Education",
    qualification: "M.P.Ed.",
    experience: "12 Years Experience",
    image: "/images/teachers/t8.jpg",
  },
];

export default function TeachersGridSection() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#7B1E1E] tracking-widest font-semibold text-sm mb-4">
            OUR TEACHERS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
            Meet Our Teaching Team
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#FAF7F2] rounded-[28px] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-[22px] mb-5"
              />

              <h3 className="text-lg font-bold text-[#1F2937]">
                {teacher.name}
              </h3>

              <p className="text-[#7B1E1E] font-semibold text-sm mb-3">
                {teacher.subject}
              </p>

              <p className="text-[#4B5563] text-sm">
                {teacher.qualification}
              </p>
              <p className="text-[#4B5563] text-sm">
                {teacher.experience}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
