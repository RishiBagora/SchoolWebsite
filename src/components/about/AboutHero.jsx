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
      className="relative w-full min-h-[50vh] md:min-h-[65vh] flex items-center overflow-hidden"
      aria-label="About Page Hero Section"
    >
      {/* Background Image */}
      <motion.div
        initial={prefersReducedMotion ? false : { scale: 1.05 }}
        animate={prefersReducedMotion ? {} : { scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Soft Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.15),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1200px] mx-auto px-6 py-24">

          <motion.div
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, y: 30 }
            }
            animate={
              prefersReducedMotion
                ? {}
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[750px]"
          >
            {/* Highlight Badge */}
            <motion.span
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 10 }
              }
              animate={
                prefersReducedMotion
                  ? {}
                  : { opacity: 1, y: 0 }
              }
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-5 px-4 py-1.5 rounded-full 
                         bg-white/10 backdrop-blur-md 
                         text-[#FFD700] text-sm font-semibold tracking-wide"
            >
              ✨ Excellence Since 2010
            </motion.span>

            {/* Title */}
            <h1
              className="
                text-white font-extrabold leading-[1.1]
                text-[34px] sm:text-[42px] md:text-[52px] lg:text-[60px]
                tracking-tight
                mb-6
              "
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-200 text-[18px] md:text-[20px] font-medium leading-relaxed max-w-[600px]">
              {subtitle}
            </p>

            {/* Breadcrumb */}
            <div className="mt-8">
              <Breadcrumb
                items={[
                  { label: "Home", link: "/" },
                  { label: "About" },
                ]}
                className="text-gray-300 text-sm"
                separator="›"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}