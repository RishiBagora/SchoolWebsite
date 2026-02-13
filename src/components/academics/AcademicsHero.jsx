import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../common/Breadcrumb";
import Button from "../common/Button";

export default function AcademicsHero() {
  return (
    <section
      className="
        relative w-full min-h-[45vh] md:min-h-[55vh]
        flex items-center overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src="/images/academics-hero.jpg"
        alt="Academic classroom environment at Golden Dreams Academy Nathdwara"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Academic Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[rgba(0,0,0,0.75)]
          via-[rgba(0,0,0,0.65)]
          to-[rgba(0,0,0,0.55)]
        "
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[720px]"
          >
            {/* Badge */}
            <span
              className="
                inline-block mb-5
                bg-[#F4B400] text-[#1F2937]
                text-[12px] font-semibold
                tracking-[1px]
                px-4 py-[6px]
                rounded-full
              "
            >
              ACADEMICS
            </span>

            {/* Heading */}
            <h1
              className="
                text-white font-bold
                text-[28px] md:text-[36px] lg:text-[48px]
                leading-[1.15]
                mb-5
              "
            >
              Structured Learning from Nursery to Class 12
            </h1>

            {/* Description */}
            <p
              className="
                text-[#F3F4F6]
                text-[16px]
                leading-[1.7]
                mb-6
                max-w-[640px]
              "
            >
              At Golden Dreams Academy, our academic framework is designed to
              build strong foundations, ensure disciplined learning, and prepare
              students for academic excellence at every stage.
            </p>

            {/* Breadcrumb */}
            <div className="mt-3">
              <Breadcrumb
                items={[
                  { label: "Home", link: "/" },
                  { label: "Academics" },
                ]}
                className="text-[#E5E7EB]"
              />
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("academic-journey")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Button
                  className="px-8 py-3 text-[15px] font-semibold"
                >
                  Explore Academic Structure
                </Button>
              </button>

              <a
                href="/prospectus.pdf"
                download
                className="
                  px-8 py-3
                  border border-white
                  rounded-full
                  text-white text-[15px] font-medium
                  hover:bg-[rgba(255,255,255,0.15)]
                  transition-colors duration-200
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  text-center
                "
              >
                Download Prospectus
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
