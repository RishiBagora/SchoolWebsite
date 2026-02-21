import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, ShieldCheck, ChevronDown } from "lucide-react";
import Button from "../common/Button";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] },
  }),
};

export default function HeroSection() {
  const trustItems = [
    { text: "Nursery to 12th", icon: <GraduationCap size={18} /> },
    { text: "Expert Faculty", icon: <Users size={18} /> },
    { text: "Safe Campus", icon: <ShieldCheck size={18} /> },
  ];

  return (
    <section
      className="relative w-full h-[90vh] min-h-[650px] overflow-hidden bg-[#0f172a]"
      aria-label="Golden Dreams Academy Hero"
    >
      {/* Background with subtle Zoom Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://resources.finalsite.net/images/f_auto,q_auto/v1712204027/aesacin/anvnnjzscghby9d3amxy/AMIT77761.jpg"
          alt="Students at Golden Dreams Academy"
          className="w-full h-full object-cover"
        />
        {/* Advanced Multi-layer Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          
          {/* Subtitle */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-400 font-bold tracking-widest uppercase text-xs md:text-sm">
              Nurturing Young Minds
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-white font-extrabold leading-[1.1] text-4xl md:text-6xl lg:text-7xl mb-6"
          >
            Building a Foundation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              For Tomorrow
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            Golden Dreams Academy provides a premier educational experience in Nathdwara. 
            We blend academic rigor with character building to prepare students for a global future.
          </motion.p>

          {/* CTA Buttons */}
<motion.div 
  custom={3}
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
  className="flex flex-col sm:flex-row items-center gap-4 mt-2"
>
  <NavLink to="/admissions" className="w-full sm:w-auto">
    <Button 
      className="
        group w-full sm:w-auto
        bg-amber-500 hover:bg-amber-600 
        text-slate-950 font-bold text-lg
        px-8 py-4 rounded-xl
        flex items-center justify-center gap-3
        transition-all duration-300 transform hover:scale-[1.02] active:scale-95
        shadow-[0_20px_50px_rgba(245,158,11,0.2)]
      "
    >
      Apply for Admission
      <ArrowRight 
        className="group-hover:translate-x-1 transition-transform duration-300" 
        size={22} 
      />
    </Button>
  </NavLink>

  <NavLink to="/contact" className="w-full sm:w-auto">
    <Button
      variant="outline"
      className="
        w-full sm:w-auto
        border-white/30 text-white backdrop-blur-md 
        hover:bg-white hover:text-slate-900 
        px-8 py-4 rounded-xl text-lg font-semibold
        flex items-center justify-center
        transition-all duration-300
      "
    >
      Contact Us
    </Button>
  </NavLink>
</motion.div>

          {/* Trust Badges - Glassmorphism style */}
          <motion.div 
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mt-12"
          >
            {trustItems.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm"
              >
                <span className="text-amber-400">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[3px] opacity-60">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} className="text-amber-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}