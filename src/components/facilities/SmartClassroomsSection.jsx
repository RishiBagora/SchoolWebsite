import { motion } from "framer-motion";

export default function SmartClassroomsSection() {
  return (
    <section className="bg-[#FAF7F2] py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold tracking-[1.5px] text-[#7B1E1E] uppercase mb-4">
            Smart Classrooms
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-4">
            Technology-Enabled Learning Environment
          </h2>

          <p className="text-[15px] leading-[1.9] text-[#4B5563] max-w-3xl mx-auto">
            Our smart classrooms integrate modern teaching tools with
            structured academic delivery to enhance student understanding
            and engagement.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              src: "/images/smartboard.jpg",
              alt: "Smart classroom with digital board at Golden Dreams Academy"
            },
            {
              src: "/images/classroom-seating.jpg",
              alt: "Disciplined classroom seating at Golden Dreams Academy"
            },
            {
              src: "/images/projector-teaching.jpg",
              alt: "Technology-enabled teaching at Golden Dreams Academy"
            }
          ].map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="overflow-hidden rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] group"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-[22px] px-8 py-8 shadow-[0_15px_40px_rgba(0,0,0,0.10)] text-center"
        >
          <p className="text-[#1F2937] text-[15px] leading-[1.8]">
            Smart classrooms help improve concept clarity, visual learning,
            and interactive academic sessions, ensuring better retention and
            understanding.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
