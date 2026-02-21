import { motion } from "framer-motion";

export default function ResultsHero() {
  return (
    <section className="relative w-full min-h-[60vh] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/results/results-hero.jpg"
          alt="Students celebrating academic achievements at Golden Dreams Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-28 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <span className="bg-[#F4B400] text-[#1F2937] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider inline-block mb-6">
            ACADEMIC ACHIEVEMENTS
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Celebrating Our Students’ Success
          </h1>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed mb-6">
            Golden Dreams Academy takes pride in consistent academic excellence 
            and outstanding board examination results year after year.
          </p>

          {/* Breadcrumb placeholder */}
          <p className="text-sm text-gray-300">
            Home <span className="mx-2 text-[#F4B400]">/</span> Results
          </p>
        </motion.div>
      </div>
    </section>
  );
}
