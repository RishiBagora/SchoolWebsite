import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../common/Breadcrumb";

export default function ContactHero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[50vh] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-hero.jpg" // replace with real campus image
          alt="Golden Dreams Academy campus in Nathdwara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex items-center min-h-[50vh]">
        <div className="w-full lg:w-3/5">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-[#F4B400] text-[#1F2937] text-xs font-bold px-4 py-1.5 rounded-full tracking-wide mb-6"
          >
            GET IN TOUCH
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            Contact Golden Dreams Academy
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-200 max-w-2xl leading-relaxed mb-8"
          >
            We are here to assist you with admissions, academic queries, and general information.
            Reach out to us or visit our campus in Nathdwara.
          </motion.p>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="tel:+91XXXXXXXXXX"
              className="bg-[#F4B400] text-[#1F2937] font-semibold px-8 py-3.5 rounded-full hover:bg-[#D89E00] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F4B400] focus:ring-offset-2"
            >
              Call Now
            </a>

            <button
              onClick={() => window.open("https://maps.google.com", "_blank")}
              className="border border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Get Directions
            </button>
          </motion.div>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <Breadcrumb
              textColor="text-gray-200"
              linkColor="text-[#F4B400]"
              separatorColor="text-white/60"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
