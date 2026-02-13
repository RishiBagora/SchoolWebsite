import { motion, useReducedMotion } from "framer-motion";

const CTASection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden"
      aria-label="Admissions Call To Action"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"

        style={{
          backgroundImage:
            "url('/images/cta/happy-students-campus.jpg')",
            
        }}
        role="img"
        aria-label="Happy students at Golden Dreams Academy Nathdwara"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7B1E1E]/90 via-[#7B1E1E]/75 to-[#7B1E1E]/60" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1100px] mx-auto px-6 py-20 text-center md:text-center text-left">
          <motion.div
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, y: 28 }
            }
            whileInView={
              prefersReducedMotion
                ? {}
                : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center md:items-center items-start"
          >
            {/* Subtitle */}
            <span className="text-[14px] font-semibold tracking-[1.5px] uppercase text-[#F4B400] mb-4">
              Admissions Open
            </span>

            {/* Heading */}
            <h2 className="font-bold text-white leading-[1.2] max-w-[720px]
                           text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] mb-6">
              Give Your Child the Right Start for a Bright Future
            </h2>

            {/* Description */}
            <p className="text-[#FDECEC] text-[16px] leading-[1.7] max-w-[720px] mb-10">
              Admissions are now open for Nursery to Class 12. Join Golden Dreams
              Academy and give your child a disciplined, supportive, and
              high-quality learning environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a
                href="/admissions"
                className="bg-[#F4B400] text-[#1F2937] font-semibold
                           px-8 py-4 rounded-full text-[15px]
                           hover:bg-[#D89E00] transition-colors duration-300
                           text-center"
              >
                Apply for Admission
              </a>

              <a
                href="/contact"
                className="border border-white text-white font-semibold
                           px-8 py-4 rounded-full text-[15px]
                           hover:bg-white/20 transition-colors duration-300
                           text-center"
              >
                Contact School
              </a>
            </div>

            {/* Trust Strip */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-center justify-start gap-x-8 gap-y-3 text-white text-[14px] opacity-90">
              <span>Admissions from Nursery to Class 12</span>
              <span>Experienced & Qualified Teachers</span>
              <span>Safe & Disciplined Campus</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
