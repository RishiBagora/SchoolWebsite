import { motion } from "framer-motion";

export default function ResultsCTA() {
  return (
    <section className="relative w-full min-h-[55vh] mt-28 overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
        alt="Golden Dreams Academy achievers"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Be a Part of Our Next Success Story
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Join Golden Dreams Academy and give your child the opportunity to
            achieve academic excellence and holistic growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="/admissions"
              className="bg-[#F4B400] text-gray-800 font-semibold px-8 py-4 rounded-full hover:bg-[#D89E00] transition-all duration-300"
            >
              Apply for Admission
            </a>

            <a
              href="tel:+91XXXXXXXXXX"
              className="border border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Call Admission Office
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}