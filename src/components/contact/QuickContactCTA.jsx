import { motion } from "framer-motion";

export default function QuickContactCTA() {
  return (
    <section className="relative w-full min-h-[50vh] mt-32 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-cta.jpg" 
          alt="Golden Dreams Academy welcoming campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/65"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center justify-center min-h-[50vh]">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight mb-5"
        >
          We Welcome You to Visit Our Campus
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-200 text-base leading-relaxed max-w-2xl mb-10"
        >
          Connect with our admission team, explore our campus, and experience
          the disciplined academic environment of Golden Dreams Academy.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          {/* Call Button */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="bg-[#F4B400] hover:bg-[#D89E00] text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 text-center w-full sm:w-auto"
          >
            Call Admission Office
          </a>

          {/* Directions Button */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white hover:bg-white/15 font-semibold px-8 py-3 rounded-full transition-all duration-300 text-center w-full sm:w-auto"
          >
            Get Directions
          </a>

          {/* Enquiry Scroll Button */}
          <button
            onClick={() => {
              const formSection = document.getElementById("contact-form");
              formSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-[#F4B400] text-[#F4B400] hover:bg-[#F4B400]/15 font-semibold px-8 py-3 rounded-full transition-all duration-300 text-center w-full sm:w-auto"
          >
            Send Enquiry
          </button>
        </motion.div>
      </div>
    </section>
  );
}
