import { motion } from "framer-motion";

export default function ScienceLabsSection() {
  const labs = [
    {
      name: "Physics Laboratory",
      description:
        "Equipped with modern apparatus and instruments for practical experiments aligned with academic curriculum.",
      image: "/images/physics-lab.jpg",
      alt: "Physics laboratory at Golden Dreams Academy"
    },
    {
      name: "Chemistry Laboratory",
      description:
        "Spacious and organized laboratory designed for safe and effective chemical experiments.",
      image: "/images/chemistry-lab.jpg",
      alt: "Chemistry laboratory at Golden Dreams Academy"
    },
    {
      name: "Biology Laboratory",
      description:
        "Advanced lab facilities supporting practical study of life sciences with models and specimens.",
      image: "/images/biology-lab.jpg",
      alt: "Biology laboratory at Golden Dreams Academy"
    }
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-semibold tracking-[1.5px] text-[#7B1E1E] uppercase mb-4">
            Science Laboratories
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-4">
            Well-Equipped Laboratories for Practical Learning
          </h2>

          <p className="text-[15px] leading-[1.9] text-[#4B5563] max-w-3xl mx-auto">
            Our modern science laboratories provide hands-on learning experiences
            that strengthen theoretical knowledge through practical application.
          </p>
        </motion.div>

        {/* Lab Cards */}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {labs.map((lab, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 45 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="bg-[#FAF7F2] rounded-[28px] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out group"
            >
              <div className="overflow-hidden rounded-[26px] mb-5">
                <img
                  src={lab.image}
                  alt={lab.alt}
                  loading="lazy"
                  className="w-full h-56 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="text-[18px] font-semibold text-[#1F2937] mb-2">
                {lab.name}
              </h3>

              <p className="text-[14px] leading-[1.8] text-[#4B5563]">
                {lab.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Highlight Note */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#FAF7F2] border-l-[5px] border-[#7B1E1E] rounded-[22px] px-8 py-8 text-center"
        >
          <p className="text-[#1F2937] font-medium">
            Laboratory sessions are conducted under supervision to ensure safety
            and effective practical understanding.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
