import { motion, useReducedMotion } from "framer-motion";
import Breadcrumb from "../common/Breadcrumb";
import Button from "../common/Button";

export default function AcademicsHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
      
      {/* Background Zoom Animation */}
      <motion.div
        initial={prefersReducedMotion ? false : { scale: 1.08 }}
        animate={prefersReducedMotion ? {} : { scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/images/academics-hero.jpg"
          alt="Academic classroom environment"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

      {/* Golden glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(244,180,0,0.18),transparent_40%)]" />

      <div className="relative z-10 w-full">
        <div className="max-w-[1200px] mx-auto px-6 py-28">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[760px]"
          >
            {/* Premium badge */}
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-5 py-2 rounded-full 
                         bg-[#F4B400]/15 text-[#FFD54F]
                         backdrop-blur-md text-sm font-semibold tracking-widest"
            >
              ACADEMICS
            </motion.span>

            {/* Title */}
            <h1 className="text-white font-extrabold leading-[1.1]
                           text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px]
                           tracking-tight mb-6">
              Structured Learning from Nursery to Class 12
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-[18px] md:text-[20px] leading-[1.9] max-w-[650px]">
              Our academic framework builds strong foundations, encourages
              disciplined learning and prepares students for consistent
              academic excellence at every stage.
            </p>

            {/* Breadcrumb */}
            <div className="mt-6">
              <Breadcrumb
                items={[
                  { label: "Home", link: "/" },
                  { label: "Academics" },
                ]}
                className="text-gray-300"
              />
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <button
                onClick={() =>
                  document.getElementById("academic-journey")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Button className="px-10 py-4 text-[16px] font-semibold shadow-lg">
                  Explore Academic Structure →
                </Button>
              </button>

              <a
                href="/prospectus.pdf"
                download
                className="px-10 py-4 rounded-full border border-white/60
                           text-white font-semibold backdrop-blur-md
                           hover:bg-white/15 transition duration-300"
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