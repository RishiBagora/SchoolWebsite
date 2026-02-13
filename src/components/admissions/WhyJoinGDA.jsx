import { motion } from "framer-motion";

export default function WhyJoinGDA() {
  const highlights = [
    {
      title: "Strong Academic Framework",
      description: "Structured curriculum from Nursery to Class 12.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350",
      alt: "Structured classroom at Golden Dreams Academy",
    },
    {
      title: "Experienced Faculty",
      description:
        "Dedicated teachers focused on concept clarity and discipline.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      alt: "Experienced teacher at Golden Dreams Academy",
    },
    {
      title: "Modern Infrastructure",
      description:
        "Well-equipped labs, library, and safe campus.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754",
      alt: "Infrastructure at Golden Dreams Academy",
    },
    {
      title: "Consistent Results",
      description:
        "Strong board performance and academic achievements.",
      image:
        "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
      alt: "Academic achievements at Golden Dreams Academy",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-widest text-[#7B1E1E] uppercase">
            Why Choose Golden Dreams Academy
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight mt-4 mb-6">
            A Trusted Institution for Structured and Disciplined Education
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Our consistent academic performance, disciplined environment,
            and supportive learning approach make us a preferred choice
            for parents in Nathdwara.
          </p>
        </motion.div>

        {/* Minimal Image-Based Layout */}
        <div className="mt-20 space-y-24">

          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="overflow-hidden rounded-3xl shadow-lg">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-[320px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1F2937] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
