import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

export default function MessageFromPrincipal() {
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
            className="flex justify-center lg:justify-start"
          >
            <img
              src="/images/about/principal.jpg"
              alt="Principal of Golden Dreams Academy Nathdwara"
              loading="lazy"
              className="
                w-full max-w-[360px]
                aspect-[3/4]
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
          >
            <SectionTitle
              subtitle="FROM THE PRINCIPAL’S DESK"
              title="A Message from the Principal"
              alignment="left"
            />

            <div className="mt-6 max-w-[640px]">
              <p className="text-gray-600 text-[16px] leading-[1.8] mb-4">
                At Golden Dreams Academy, we believe that education is not just
                about academic excellence but about shaping character,
                discipline, and values that last a lifetime.
              </p>

              <p className="text-gray-600 text-[16px] leading-[1.8] mb-4">
                Our dedicated team of educators works tirelessly to provide a
                safe, supportive, and intellectually stimulating environment
                where every child can grow with confidence.
              </p>

              <p className="text-gray-600 text-[16px] leading-[1.8]">
                We are committed to guiding our students towards becoming
                responsible individuals who are prepared to face future
                challenges with integrity and determination.
              </p>

              {/* Signature */}
              <div className="mt-6 italic text-gray-800">
                <p className="font-medium">Principal Name</p>
                <p className="text-sm">
                  Principal, Golden Dreams Academy
                </p>
              </div>

              {/* Highlight Box */}
              <div
                className="
                  mt-8
                  bg-[#FAF7F2]
                  border-l-4 border-[#7B1E1E]
                  p-5
                  text-gray-800
                "
              >
                Our focus remains on nurturing disciplined, confident, and
                academically strong students in a value-driven environment.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
