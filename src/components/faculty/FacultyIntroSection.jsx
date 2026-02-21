import { motion } from "framer-motion";

export default function FacultyIntroSection() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
        >
          <img
            src="/images/faculty-intro.jpg"
            alt="Teacher mentoring students at Golden Dreams Academy"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-[#7B1E1E] font-semibold tracking-widest text-sm mb-4">
            DEDICATED EDUCATORS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6 leading-tight">
            Committed to Guiding Every Student
          </h2>

          <p className="text-[#4B5563] leading-relaxed mb-5">
            Our teachers bring experience, dedication, and a student-focused
            approach to every classroom, ensuring quality education and
            disciplined learning.
          </p>

          <p className="text-[#4B5563] leading-relaxed">
            Through mentorship, personal attention, and structured teaching
            methods, faculty members help students achieve academic success and
            personal growth.
          </p>

          {/* Highlight Box */}
          <div className="mt-10 bg-[#FAF7F2] rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <p className="text-[#1F2937] font-medium">
              Experienced teachers play a vital role in shaping students’
              academic journey and character development.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
