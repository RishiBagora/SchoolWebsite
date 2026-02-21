import { motion } from "framer-motion";

export default function SportsFacilitiesSection() {
  const images = [
    "/images/playground.jpg",
    "/images/outdoor-sports.jpg",
    "/images/indoor-sports.jpg",
  ];

  return (
    <section className="bg-[#FAF7F2] py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[13px] font-semibold tracking-[1.5px] text-[#7B1E1E] uppercase mb-4">
            Sports & Physical Activities
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] mb-4 leading-tight">
            Encouraging Physical Fitness and Team Spirit
          </h2>

          <p className="text-[15px] leading-[1.9] text-[#4B5563]">
            Our sports facilities promote discipline, teamwork, and physical 
            well-being alongside academic excellence.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 45 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              className="group overflow-hidden rounded-[26px] shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
            >
              <img
                src={src}
                alt="Sports facilities at Golden Dreams Academy"
                loading="lazy"
                className="w-full h-[260px] object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-[0_28px_65px_rgba(0,0,0,0.18)]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Block */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto bg-white rounded-[22px] p-8 text-center shadow-[0_15px_40px_rgba(0,0,0,0.10)]"
        >
          <p className="text-[#1F2937] text-[15px] leading-[1.8]">
            Regular sports activities and structured physical training sessions 
            help students build confidence, stamina, and leadership skills.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
