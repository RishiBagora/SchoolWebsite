import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

export default function VisionMission() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-[#FAF7F2] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionTitle
          subtitle="OUR VISION & MISSION"
          title="Guided by Values, Driven by Excellence"
          description="Our vision and mission define our purpose and guide every step of our educational journey."
          alignment="center"
        />

        {/* Content Blocks */}
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
            grid grid-cols-1 lg:grid-cols-2
            gap-12
            max-w-[1200px]
            mx-auto
          "
        >
          {/* Vision Block */}
          <div className="bg-white rounded-[18px] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <img
              src="/images/about/vision.jpg"
              alt="Students learning in classroom at Golden Dreams Academy"
              loading="lazy"
              className="
                w-full
                aspect-[4/3]
                object-cover
                rounded-[16px]
                mb-6
              "
            />

            <h3 className="text-[20px] font-semibold text-gray-800 mb-3">
              Our Vision
            </h3>

            <p className="text-[16px] leading-[1.8] text-gray-600">
              To nurture responsible, confident, and knowledgeable individuals
              by providing quality education rooted in discipline, values, and
              lifelong learning.
            </p>
          </div>

          {/* Mission Block */}
          <div className="bg-white rounded-[18px] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <img
              src="/images/about/mission.jpg"
              alt="Teacher guiding students at Golden Dreams Academy"
              loading="lazy"
              className="
                w-full
                aspect-[4/3]
                object-cover
                rounded-[16px]
                mb-6
              "
            />

            <h3 className="text-[20px] font-semibold text-gray-800 mb-3">
              Our Mission
            </h3>

            <p className="text-[16px] leading-[1.8] text-gray-600">
              To deliver a balanced education that promotes academic excellence,
              moral values, discipline, and holistic development through
              experienced teaching and a supportive learning environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
