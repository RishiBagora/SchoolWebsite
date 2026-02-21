import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FinalFacilitiesCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[55vh] mt-32 overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/images/campus-cta.jpg"
        alt="Golden Dreams Academy campus environment"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center flex flex-col items-center justify-center min-h-[55vh]">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
        >
          Experience Our Campus First-Hand
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-200 max-w-2xl mb-10 leading-relaxed"
        >
          Schedule a campus visit and explore the facilities, infrastructure,
          and disciplined academic environment of Golden Dreams Academy.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#F4B400] text-[#1F2937] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#D89E00]"
          >
            Book a Campus Visit
          </button>

          <a
            href="tel:+91XXXXXXXXXX"
            className="border border-white text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-white/15"
          >
            Call Admission Office
          </a>
        </motion.div>
      </div>
    </section>
  );
}
