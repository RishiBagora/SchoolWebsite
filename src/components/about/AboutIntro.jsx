import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

export default function AboutIntro() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18 },
    },
  };

  const item = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    show: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#7B1E1E]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* IMAGE SIDE */}
          <motion.div variants={item} className="relative group">
            {/* Image */}
            <div className="overflow-hidden rounded-[26px] shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
              <img
                src="/images/about/about-intro.jpg"
                alt="Students learning at Golden Dreams Academy Nathdwara"
                loading="lazy"
                className="w-full h-full aspect-[4/3] object-cover
                           group-hover:scale-105 transition duration-[1.2s]"
              />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 w-[220px]">
              <p className="text-3xl font-extrabold text-[#7B1E1E]">15+</p>
              <p className="text-gray-600 text-sm font-medium">
                Years of Excellence in Education
              </p>
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div variants={item} className="max-w-[620px]">
            <SectionTitle
              subtitle="ABOUT US"
              title="Shaping Futures Through Knowledge, Discipline & Values"
              alignment="left"
            />

            <motion.p
              variants={item}
              className="mt-6 text-gray-600 text-[18px] leading-[1.9]"
            >
              Golden Dreams Academy is a trusted educational institution in
              Nathdwara providing quality education from Nursery to Class 12.
              We focus on building strong academic foundations while nurturing
              discipline, confidence, and character in every student.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 text-gray-600 text-[18px] leading-[1.9]"
            >
              Our experienced faculty, structured curriculum, and supportive
              environment help students grow into responsible individuals ready
              to succeed in the modern world.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              variants={container}
              className="mt-10 grid sm:grid-cols-2 gap-5"
            >
              {[
                "Education from Nursery to Class 12",
                "Experienced & Dedicated Teachers",
                "Discipline & Value-Based Learning",
                "Holistic Student Development",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="bg-gray-50 rounded-xl px-5 py-4 
                             shadow-sm hover:shadow-md 
                             transition-all duration-300"
                >
                  <p className="font-semibold text-gray-800">✓ {text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA */}
            <motion.div variants={item} className="mt-10">
              <button
                onClick={() =>
                  document
                    .getElementById("vision")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="
                  relative overflow-hidden
                  bg-[#7B1E1E] text-white
                  px-9 py-4 rounded-full
                  font-semibold tracking-wide
                  shadow-lg hover:shadow-xl
                  transition duration-300
                "
              >
                <span className="relative z-10">
                  Discover Our Vision →
                </span>

                {/* Glow Hover Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-transparent opacity-0 hover:opacity-100 transition duration-500" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}