import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AdmissionFormCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[55vh] mt-32 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/admissions-cta.jpg" // replace with real image
          alt="Students at Golden Dreams Academy Nathdwara campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center flex flex-col items-center justify-center min-h-[55vh]">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl"
        >
          Secure Your Child’s Future with Golden Dreams Academy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-200 mt-6 max-w-2xl leading-relaxed"
        >
          Admissions for the academic session 2025-26 are now open. Limited seats available. 
          Begin the admission process today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-5"
        >
          <button
            onClick={() => navigate("/admissions/apply")}
            className="bg-[#F4B400] text-[#1F2937] font-semibold px-8 py-3.5 rounded-full hover:bg-[#D89E00] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F4B400] focus:ring-offset-2"
          >
            Apply for Admission
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="border border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Contact Admission Office
          </button>
        </motion.div>

        {/* Contact Info */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-300 text-sm mt-12 max-w-xl"
        >
          For admission assistance, visit our campus in Nathdwara or call the admission office during working hours.
        </motion.p>

      </div>
    </section>
  );
}
