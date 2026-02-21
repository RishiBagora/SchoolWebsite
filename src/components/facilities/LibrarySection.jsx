import { motion } from "framer-motion";

export default function LibrarySection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Text Content (Left) */}
          <div>
            <p className="text-[13px] font-semibold tracking-[1.5px] text-[#7B1E1E] uppercase mb-4">
              Library Facility
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-6">
              A Dedicated Space for Focused Learning and Reading
            </h2>

            <p className="text-[15px] leading-[1.9] text-[#4B5563] mb-5">
              The school library provides a quiet and structured environment 
              that encourages disciplined study and reading habits among students.
            </p>

            <p className="text-[15px] leading-[1.9] text-[#4B5563]">
              A wide collection of academic books, reference materials, and 
              subject-specific resources supports curriculum-based learning 
              and board exam preparation.
            </p>

            {/* Highlight Box */}
            <div className="mt-10 bg-[#FAF7F2] rounded-[22px] p-7 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <p className="text-[#1F2937] font-medium">
                The library nurtures concentration, independent study habits, 
                and academic excellence.
              </p>
            </div>
          </div>

          {/* Image (Right) */}
          <div className="group overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <img
              src="/images/library.jpg"
              alt="Library at Golden Dreams Academy Nathdwara"
              loading="lazy"
              className="w-full h-[420px] object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
