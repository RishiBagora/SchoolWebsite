import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AcademicsCTASection() {
  const navigate = useNavigate();

  return (
    <section className="relative mt-32 min-h-[50vh] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
          alt="Students at Golden Dreams Academy campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 text-center flex flex-col items-center justify-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
        >
          Ready to Begin a Structured Academic Journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-200 text-base leading-relaxed max-w-2xl mb-10"
        >
          Join Golden Dreams Academy and provide your child with disciplined,
          concept-focused, and future-ready education from Nursery to Class 12.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <button
            onClick={() => navigate("/admissions")}
            className="bg-[#F4B400] text-[#1F2937] font-semibold px-8 py-3 rounded-full hover:bg-[#D89E00] transition-all duration-300"
          >
            Apply for Admission
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Contact for Academic Enquiry
          </button>
        </motion.div>

      </div>
    </section>
  );
}
