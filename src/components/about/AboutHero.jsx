import { motion, useReducedMotion } from "framer-motion";
import Breadcrumb from "../common/Breadcrumb";

export default function AboutHero({
  title = "About Golden Dreams Academy",
  subtitle = "A place where education meets discipline and values",
  backgroundImage = "/images/about/about-hero.jpg",
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative w-full min-h-[35vh] md:min-h-[45vh] overflow-hidden"
      aria-label="About Page Hero Section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label="Golden Dreams Academy campus Nathdwara"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-18 w-full">
          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 16 }
            }
            animate={
              prefersReducedMotion ? {} : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-full md:max-w-[80%] lg:max-w-[60%]"
          >
            {/* Title */}
            <h1
              className="
                text-white font-bold leading-[1.2]
                text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px]
                mb-3
              "
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-[#FDECEC] text-[16px] font-medium max-w-[600px]">
              {subtitle}
            </p>

            {/* Breadcrumb */}
            <div className="mt-4">
              <Breadcrumb
                items={[
                  { label: "Home", link: "/" },
                  { label: "About" },
                ]}
                className="text-[#E5E7EB]"
                separator="›"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
