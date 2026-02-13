import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const trustData = [
  {
    title: "Education from Nursery to Class 12",
    description:
      "A complete and continuous academic journey under one trusted institution.",
    image: "/images/about/why-nursery-12.jpg",
    alt: "Nursery to senior students at Golden Dreams Academy",
  },
  {
    title: "Experienced & Dedicated Faculty",
    description:
      "Qualified teachers focused on academic clarity, discipline, and student care.",
    image: "/images/about/why-faculty.jpg",
    alt: "Experienced teachers at Golden Dreams Academy",
  },
  {
    title: "Safe & Disciplined Environment",
    description:
      "A secure campus with structured routines that support focused learning.",
    image: "/images/about/why-discipline.jpg",
    alt: "Safe and disciplined campus at Golden Dreams Academy",
  },
  {
    title: "Strong Academic Results",
    description:
      "Consistent board results reflecting our academic commitment.",
    image: "/images/about/why-results.jpg",
    alt: "Academic achievements at Golden Dreams Academy",
  },
];

export default function WhyGDA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-[#FAF7F2] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionTitle
          subtitle="WHY CHOOSE US"
          title="Why Parents Choose Golden Dreams Academy"
          description="A strong academic foundation, disciplined environment, and student-focused approach make us a trusted educational institution."
          alignment="center"
        />

        {/* Trust Cards */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
            mt-14
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            gap-7
            max-w-[1200px]
            mx-auto
          "
        >
          {trustData.map((item, index) => (
            <motion.article
              key={index}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="
                bg-white
                rounded-[18px]
                overflow-hidden
                shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]
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
              <div className="p-[18px] text-left">
                <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Strip */}
        <div className="mt-16">
          <div
            className="
              bg-[#7B1E1E]
              rounded-[20px]
              px-8 py-10
              flex flex-col md:flex-row
              items-center justify-between
              gap-6
              text-center md:text-left
            "
          >
            <p className="text-white text-[18px] font-medium">
              Ready to take the next step in your child’s education?
            </p>

            <a
              href="/admissions"
              className="
                bg-[#F4B400]
                text-[#1F2937]
                px-8 py-3
                rounded-full
                text-[15px]
                font-semibold
                hover:bg-[#D89E00]
                transition-colors duration-300
              "
            >
              Apply for Admission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
