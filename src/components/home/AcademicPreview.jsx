import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Baby, 
  BookOpen, 
  Lightbulb, 
  Target, 
  GraduationCap, 
  ArrowRight 
} from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const ACADEMICS = [
  {
    icon: <Baby strokeWidth={1.5} />,
    level: "Pre-Primary",
    classes: "Nursery – KG",
    description: "Play-based foundation focused on early literacy and social exploration.",
    color: "from-blue-500/10 to-transparent",
    iconColor: "text-blue-600",
  },
  {
    icon: <BookOpen strokeWidth={1.5} />,
    level: "Primary School",
    classes: "Class 1 – 5",
    description: "Core academic fundamentals blended with creative confidence building.",
    color: "from-emerald-500/10 to-transparent",
    iconColor: "text-emerald-600",
  },
  {
    icon: <Lightbulb strokeWidth={1.5} />,
    level: "Middle School",
    classes: "Class 6 – 8",
    description: "Transitioning to concept clarity and structured critical thinking.",
    color: "from-amber-500/10 to-transparent",
    iconColor: "text-amber-600",
  },
  {
    icon: <Target strokeWidth={1.5} />,
    level: "Secondary",
    classes: "Class 9 – 10",
    description: "Board-oriented preparation with rigorous academic discipline.",
    color: "from-rose-500/10 to-transparent",
    iconColor: "text-rose-600",
  },
  {
    icon: <GraduationCap strokeWidth={1.5} />,
    level: "Senior Secondary",
    classes: "Class 11 – 12",
    description: "Specialized streams designed for career and university readiness.",
    color: "from-violet-500/10 to-transparent",
    iconColor: "text-violet-600",
  },
];

export default function AcademicsPreview() {
  return (
    <section className="bg-white py-24 overflow-hidden" role="region">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            subtitle="Educational Path"
            title="A Structured Journey from Nursery to Success"
            description="Our curriculum is a deliberate progression designed to build competence and character at every stage."
            align="center"
          />
        </motion.div>

        {/* Academics Journey Grid */}
        <div className="relative mt-20">
          {/* Subtle connecting line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 relative z-10">
            {ACADEMICS.map((item, index) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                {/* Visual Accent */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                <div className="relative z-10">
                  {/* Icon with Circle Background */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-white shadow-md group-hover:scale-110 ${item.iconColor}`}>
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.level}
                  </h3>
                  
                  <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${item.iconColor}`}>
                    {item.classes}
                  </p>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Step Number */}
                  <div className="absolute top-6 right-8 text-slate-100 font-black text-4xl italic group-hover:text-slate-200 transition-colors">
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Improved CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="h-px w-20 bg-slate-200 mb-8" />
          <NavLink to="/academics">
            <Button className="group bg-slate-900 text-white hover:bg-slate-800 px-10 py-4 rounded-full flex items-center gap-3 transition-all">
              Explore Our Methodology
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}