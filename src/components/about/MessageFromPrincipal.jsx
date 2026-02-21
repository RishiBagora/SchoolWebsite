import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

export default function MessageFromPrincipal() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  };

  const item = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    show: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-10 right-0 w-[280px] h-[280px] bg-[#7B1E1E]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* PRINCIPAL IMAGE */}
          <motion.div
            variants={item}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Photo frame */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FAF7F2] rounded-[30px]" />

              <img
                src="/images/about/principal.jpg"
                alt="Principal of Golden Dreams Academy Nathdwara"
                className="relative w-full max-w-[360px] aspect-[3/4] object-cover 
                           rounded-[26px] shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
              />

              {/* Floating quote card */}
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl w-[240px]">
                <p className="text-4xl text-[#7B1E1E] leading-none">“</p>
                <p className="text-sm text-gray-600 font-medium mt-1">
                  Education builds the foundation of life.
                </p>
              </div>
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div variants={item} className="max-w-[640px]">
            <SectionTitle
              subtitle="FROM THE PRINCIPAL’S DESK"
              title="A Message from the Principal"
              alignment="left"
            />

            {/* Quote Style Paragraph */}
            <motion.p
              variants={item}
              className="mt-6 text-[20px] leading-[1.9] text-gray-700 font-medium"
            >
              At Golden Dreams Academy, education goes beyond academics. We
              focus on shaping character, discipline and values that stay with
              students for a lifetime.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 text-[18px] leading-[1.9] text-gray-600"
            >
              Our dedicated educators work passionately to provide a safe,
              supportive and intellectually stimulating environment where every
              child can grow with confidence and curiosity.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 text-[18px] leading-[1.9] text-gray-600"
            >
              We guide students to become responsible individuals prepared to
              face future challenges with integrity, compassion and
              determination.
            </motion.p>

            {/* Signature block */}
            <motion.div variants={item} className="mt-10">
              <div className="h-[1px] w-16 bg-[#7B1E1E] mb-4" />
              <p className="text-xl font-semibold text-gray-800">
                Principal Name
              </p>
              <p className="text-gray-500 text-sm">
                Principal, Golden Dreams Academy
              </p>
            </motion.div>

            {/* Highlight box */}
            <motion.div
              variants={item}
              className="mt-10 bg-[#FAF7F2] rounded-xl p-6 border border-[#7B1E1E]/20"
            >
              <p className="text-gray-800 font-medium">
                Our focus remains on nurturing disciplined, confident and
                academically strong students in a value-driven environment.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}