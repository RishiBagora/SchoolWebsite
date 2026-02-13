import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const approachData = [
  {
    title: "Student-Centered Learning",
    description:
      "We focus on understanding each student’s learning pace and provide personalized attention to strengthen concepts and confidence.",
    image: "/images/about/approach-student-centered.jpg",
    alt: "Student-centered learning at Golden Dreams Academy",
  },
  {
    title: "Academic Discipline",
    description:
      "A structured curriculum, regular assessments, and disciplined routines ensure academic consistency and strong results.",
    image: "/images/about/approach-discipline.jpg",
    alt: "Disciplined academic environment at Golden Dreams Academy",
  },
  {
    title: "Holistic Development",
    description:
      "Along with academics, we encourage sports, cultural activities, and life skills to support all-round student development.",
    image: "/images/about/approach-holistic.jpg",
    alt: "Holistic development activities at Golden Dreams Academy",
  },
];

export default function OurApproach() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-[#FAF7F2] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionTitle
          subtitle="OUR APPROACH"
          title="How We Educate, Guide, and Inspire Students"
          description="Our teaching approach combines academic discipline, student-centric learning, and continuous guidance to ensure consistent growth at every stage."
          alignment="center"
        />

        {/* Cards Grid */}
        <motion.div
          initial={
            prefersReducedMotion ? false : { opacity: 0, y: 24 }
          }
          whileInView={
            prefersReducedMotion ? {} : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
            mt-14
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8
            max-w-[1200px]
            mx-auto
          "
        >
          {approachData.map((item, index) => (
            <motion.article
              key={index}
              whileHover={
                prefersReducedMotion ? {} : { y: -6 }
              }
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="
                bg-white
                rounded-[20px]
                overflow-hidden
                shadow-[0_8px_26px_rgba(0,0,0,0.08)]
                hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)]
                transition-all duration-300 ease-out
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="
                    w-full
                    aspect-[4/3]
                    object-cover
                    transition-transform duration-300 ease-out
                    hover:scale-105
                  "
                />
              </div>

              {/* Text */}
              <div className="p-5 text-left">
                <h3 className="text-[18px] font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
