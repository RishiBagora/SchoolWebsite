import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const approachData = [
  {
    title: "Student-Centered Learning",
    description:
      "We focus on understanding each student’s learning pace and provide personalized attention to strengthen concepts and confidence.",
    image: "/images/about/approach-student-centered.jpg",
    icon: "🎓",
  },
  {
    title: "Academic Discipline",
    description:
      "A structured curriculum, regular assessments, and disciplined routines ensure academic consistency and strong results.",
    image: "/images/about/approach-discipline.jpg",
    icon: "📘",
  },
  {
    title: "Holistic Development",
    description:
      "Along with academics, we encourage sports, cultural activities, and life skills to support all-round student development.",
    image: "/images/about/approach-holistic.jpg",
    icon: "🌱",
  },
];

export default function OurApproach() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    show: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-[#FAF7F2] py-24 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-10 left-0 w-[300px] h-[300px] bg-[#7B1E1E]/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 right-0 w-[300px] h-[300px] bg-yellow-400/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="OUR APPROACH"
          title="How We Educate, Guide & Inspire"
          description="Our teaching philosophy blends discipline, innovation, and personal mentorship to ensure consistent academic and character growth."
          alignment="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto"
        >
          {approachData.map((itemData, index) => (
            <motion.article
              key={index}
              variants={item}
              whileHover={prefersReducedMotion ? {} : { y: -10 }}
              transition={{ duration: 0.35 }}
              className="group bg-white/70 backdrop-blur-md rounded-[26px]
                         shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                         hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                         transition-all duration-500 overflow-hidden"
            >
              {/* Image Block */}
              <div className="relative overflow-hidden">
                <img
                  src={itemData.image}
                  alt={itemData.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover
                             group-hover:scale-110 transition duration-[1.2s]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70" />

                {/* Icon badge */}
                <div className="absolute top-5 left-5 w-12 h-12 rounded-full
                                bg-white/80 backdrop-blur-md
                                flex items-center justify-center
                                text-xl shadow-md">
                  {itemData.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[20px] font-bold text-gray-800 mb-3">
                  {itemData.title}
                </h3>

                <p className="text-[16px] leading-[1.8] text-gray-600">
                  {itemData.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}