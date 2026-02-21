import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Award, 
  BookOpenCheck, 
  Users2, 
  ArrowUpRight 
} from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const FEATURES = [
  {
    icon: <Users2 strokeWidth={1.5} size={28} />,
    title: "Expert Pedagogy",
    description: "Our faculty comprises seasoned educators dedicated to personalized mentorship and advanced learning methodologies.",
  },
  {
    icon: <ShieldCheck strokeWidth={1.5} size={28} />,
    title: "Secure Ecosystem",
    description: "A meticulously monitored campus environment ensuring the highest standards of safety and student well-being.",
  },
  {
    icon: <Award strokeWidth={1.5} size={28} />,
    title: "Academic Excellence",
    description: "A rigorous K-12 curriculum focused on cognitive development and preparing students for global opportunities.",
  },
  {
    icon: <BookOpenCheck strokeWidth={1.5} size={28} />,
    title: "Holistic Curricula",
    description: "Integrating competitive sports, performing arts, and leadership training into the core academic journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <SectionTitle
          subtitle="Institutional Excellence"
          title="The Golden Dreams Advantage"
          description="Setting the benchmark for quality education in Nathdwara through innovation and values."
          align="left" // Professional layouts often look better with left-alignment
        />

        <div className="grid gap-px bg-slate-200 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 border border-slate-200 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 hover:bg-slate-50 transition-colors duration-500 relative"
            >
              {/* Minimalist Icon Block */}
              <div className="mb-8 text-slate-400 group-hover:text-amber-600 transition-colors duration-500">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">
                {feature.title}
              </h3>

              <p className="text-slate-500 leading-relaxed text-sm mb-6">
                {feature.description}
              </p>

              {/* Subtle "Learn More" Hint */}
              {/* <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-amber-600 transition-all duration-500">
                Details <ArrowUpRight size={14} />
              </div>
               */}
              {/* Border Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}