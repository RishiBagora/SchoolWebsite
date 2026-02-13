import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

export default function AboutIntro() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-12 items-center
          "
        >
          {/* Image Block */}
          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0 }
            }
            whileInView={
              prefersReducedMotion ? {} : { opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/images/about/about-intro.jpg"
              alt="Students learning at Golden Dreams Academy Nathdwara"
              loading="lazy"
              className="
                w-full h-auto
                aspect-[4/3]
                object-cover
                rounded-[18px]
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              "
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 24 }
            }
            whileInView={
              prefersReducedMotion ? {} : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-full"
          >
            <SectionTitle
              subtitle="ABOUT US"
              title="Golden Dreams Academy – Shaping Futures with Quality Education"
              alignment="left"
            />

            <div className="mt-6 max-w-[560px]">
              <p className="text-gray-600 text-[16px] leading-[1.8] mb-5">
                Golden Dreams Academy is a well-established educational
                institution in Nathdwara, committed to providing quality
                education from Nursery to Class 12. Our focus lies in nurturing
                young minds with strong academic foundations, discipline, and
                values.
              </p>

              <p className="text-gray-600 text-[16px] leading-[1.8]">
                With experienced faculty, structured curriculum, and a
                student-friendly environment, we aim to create confident,
                responsible, and capable individuals ready to face future
                challenges.
              </p>

              {/* Highlight Points */}
              <ul className="mt-6 space-y-3 text-gray-800 font-medium">
                <li>Education from Nursery to Class 12</li>
                <li>Experienced and dedicated teaching staff</li>
                <li>Focus on discipline and holistic development</li>
              </ul>

              {/* Optional CTA */}
              <div className="mt-8">
                <button
                  onClick={() =>
                    document
                      .getElementById("vision")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="
                    bg-[#7B1E1E]
                    text-white
                    px-7 py-3
                    rounded-full
                    text-[15px]
                    font-medium
                    hover:bg-[#651717]
                    transition-colors duration-300
                  "
                >
                  Know More About Our Vision
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
