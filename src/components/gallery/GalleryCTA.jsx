import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function GalleryCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[55vh] mt-32 overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/gallery-cta.jpg"
          alt="Golden Dreams Academy campus life"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Visit Our Campus and Experience It Yourself
          </h2>

          <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10">
            Schedule a visit to explore our campus, meet our teachers, and learn
            more about the admission process.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#F4B400] text-[#1F2937] px-8 py-4 rounded-full font-semibold hover:bg-[#D89E00] transition w-full sm:w-auto"
            >
              Book a Campus Visit
            </button>

            <a
              href="tel:+91XXXXXXXXXX"
              className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition w-full sm:w-auto"
            >
              Call Admission Office
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
