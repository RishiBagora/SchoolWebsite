import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const JOURNEY_STAGES = [
  {
    stage: "Pre-Primary",
    classes: "Nursery – KG",
    focus: "Foundational learning & basic skills",
    image: "/images/journey-preprimary.jpg",
    alt: "Pre-primary students at Golden Dreams Academy",
  },
  {
    stage: "Primary",
    classes: "Class 1 – 5",
    focus: "Concept building & literacy development",
    image: "/images/journey-primary.jpg",
    alt: "Primary students at Golden Dreams Academy",
  },
  {
    stage: "Middle School",
    classes: "Class 6 – 8",
    focus: "Concept strengthening & analytical skills",
    image: "/images/journey-middle.jpg",
    alt: "Middle school students at Golden Dreams Academy",
  },
  {
    stage: "Secondary",
    classes: "Class 9 – 10",
    focus: "Board preparation & academic discipline",
    image: "/images/journey-secondary.jpg",
    alt: "Secondary students at Golden Dreams Academy",
  },
  {
    stage: "Senior Secondary",
    classes: "Class 11 – 12",
    focus: "Subject specialization & career guidance",
    image: "/images/journey-senior.jpg",
    alt: "Senior secondary students at Golden Dreams Academy",
  },
];

export default function AcademicJourneyOverview() {
  return (
    <section className="bg-[#FAF7F2] py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle
          subtitle="ACADEMIC JOURNEY"
          title="A Structured Learning Path from Early Years to Senior Secondary"
          description="Our curriculum ensures a seamless progression where each stage builds upon the previous one with clarity and discipline."
          align="center"
        />

        {/* ===== Journey Grid ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            mt-16
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5
            gap-6
            relative
          "
        >
          {JOURNEY_STAGES.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Desktop Connecting Line */}
              {index !== JOURNEY_STAGES.length - 1 && (
                <div
                  className="
                    hidden lg:block
                    absolute top-1/2 right-[-12px]
                    w-[24px] h-[1px]
                    bg-[#E5E7EB]
                  "
                />
              )}

              {/* Card */}
              <div
                className="
                  bg-white rounded-[22px]
                  overflow-hidden
                  shadow-[0_10px_28px_rgba(0,0,0,0.08)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-2
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.14)]
                "
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="
                      w-full aspect-square object-cover
                      transition-transform duration-500 ease-out
                      hover:scale-[1.06]
                    "
                  />
                </div>

                {/* Text */}
                <div className="p-4 text-center sm:text-left lg:text-center">
                  <h3 className="text-[16px] font-semibold text-[#1F2937] mb-1">
                    {item.stage}
                  </h3>

                  <p className="text-[14px] text-[#7B1E1E] mb-1">
                    {item.classes}
                  </p>

                  <p className="text-[14px] text-[#4B5563] leading-[1.6]">
                    {item.focus}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
