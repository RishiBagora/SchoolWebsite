import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FacultyCTA() {
  return (
    <section className="relative w-full min-h-[55vh] mt-32 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/faculty/faculty-cta.jpg"
          alt="Golden Dreams Academy faculty and students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 py-28 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Connect with Our Admission Team
          </h2>

          <p className="text-gray-200 leading-relaxed mb-10 max-w-2xl mx-auto">
            Visit our campus, interact with our faculty, and learn how we guide
            students toward academic excellence and character development.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/contact">
              <button className="bg-[#F4B400] text-[#1F2937] px-8 py-3.5 rounded-full font-semibold hover:bg-[#D89E00] transition-all duration-300 w-full sm:w-auto">
                Book a Campus Visit
              </button>
            </Link>

            <a href="tel:+91XXXXXXXXXX">
              <button className="border border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 w-full sm:w-auto">
                Call Admission Office
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
