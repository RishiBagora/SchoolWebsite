import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2, GraduationCap } from "lucide-react";

const CTASection = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section 
      className="relative min-h-[65vh] flex items-center py-24 overflow-hidden bg-[#7B1E1E]" 
      aria-label="Admissions Call to Action"
    >
      {/* Background Image with Theme-based Tint */}
      <motion.div 
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ backgroundImage: "url('/images/cta/happy-students-campus.jpg')" }}
      />

      {/* Layered Gradient for Readability and Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5a1414] via-transparent to-[#7B1E1E]" />
      
      {/* Decorative Gold Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F4B400]/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F4B400]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Animated Badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F4B400]/10 border border-[#F4B400]/30 text-[#F4B400] text-xs font-bold uppercase tracking-[0.2em] mb-10 shadow-lg backdrop-blur-md"
          >
             <GraduationCap size={16} />
             Session 2026-27 Now Open
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-5xl mb-8"
          >
            Shape Your Child’s <br />
            <span className="text-[#F4B400] italic">Dreams Into Reality.</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-red-50 text-lg md:text-2xl max-w-3xl leading-relaxed mb-12 opacity-90"
          >
            Admissions are now open from Nursery to Class 12. Join Golden Dreams 
            Academy for a perfect balance of discipline and modern learning.
          </motion.p>

          {/* Action Buttons with Theme Contrast */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <a
              href="/admissions"
              className="group w-full sm:w-auto bg-[#F4B400] hover:bg-white text-[#7B1E1E] font-black px-12 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_20px_40px_rgba(244,180,0,0.2)]"
            >
              Apply for Admission
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </a>

            <a
              href="/contact"
              className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-[#7B1E1E] hover:border-white font-bold px-12 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 backdrop-blur-sm"
            >
              <Phone size={20} />
              Enquire Now
            </a>
          </motion.div>

          {/* Trust Labels */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-x-12 gap-y-4"
          >
            {["Legacy of Excellence", "Modern Infrastructure", "Holistic Values"].map((text) => (
              <div key={text} className="flex items-center gap-3 text-red-50/70 text-sm font-semibold tracking-wide">
                <CheckCircle2 size={18} className="text-[#F4B400]" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;