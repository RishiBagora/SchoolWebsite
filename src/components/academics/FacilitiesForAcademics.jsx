import { motion } from "framer-motion";

export default function FacilitiesForAcademics() {
  const facilities = [
    {
      name: "Modern Classrooms",
      description:
        "Spacious and well-ventilated classrooms that promote focused learning.",
      image: "/images/classroom.jpg",
      alt: "Modern classroom at Golden Dreams Academy",
      large: true,
    },
    {
      name: "Science Laboratories",
      description:
        "Fully equipped labs to support practical and experimental learning.",
      image: "/images/science-lab.jpg",
      alt: "Science laboratory at Golden Dreams Academy",
    },
    {
      name: "Computer Lab",
      description:
        "Technology-enabled learning environment with structured computer education.",
      image: "/images/computer-lab.jpg",
      alt: "Computer lab at Golden Dreams Academy",
    },
    {
      name: "Library",
      description:
        "A well-stocked library encouraging reading habits and research skills.",
      image: "/images/library.jpg",
      alt: "Library at Golden Dreams Academy",
    },
    {
      name: "Examination Hall",
      description:
        "Organized examination environment ensuring discipline and fairness.",
      image: "/images/exam-hall.jpg",
      alt: "Examination hall at Golden Dreams Academy",
    },
    {
      name: "Safe & Clean Campus",
      description:
        "A disciplined and secure campus that supports focused academic growth.",
      image: "/images/campus.jpg",
      alt: "Clean campus at Golden Dreams Academy",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] pt-[120px] pb-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ================= Section Header ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[720px] mb-[80px]"
        >
          <p className="text-[#7B1E1E] text-[13px] font-semibold tracking-[1.5px] uppercase mb-4">
            Academic Facilities
          </p>

          <h2 className="text-[#1F2937] text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.2] mb-5">
            Well-Equipped Infrastructure for Effective Learning
          </h2>

          <p className="text-[#4B5563] text-[16px] leading-[1.8]">
            Our campus is equipped with modern facilities designed to support
            structured academic learning and student development.
          </p>
        </motion.div>

        {/* ================= Editorial Layout ================= */}
        <div className="grid lg:grid-cols-3 gap-[28px]">

          {/* Left Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative rounded-[28px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          >
            <img
              src={facilities[0].image}
              alt={facilities[0].alt}
              loading="lazy"
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-[32px]">
              <h3 className="text-white text-[22px] font-semibold mb-2">
                {facilities[0].name}
              </h3>
              <p className="text-gray-200 text-[15px] leading-[1.7]">
                {facilities[0].description}
              </p>
            </div>
          </motion.div>

          {/* Right Vertical Stack */}
          <div className="flex flex-col gap-[28px]">

            {facilities.slice(1, 3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-[24px] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-[190px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-[20px] bg-gradient-to-t from-black/75 to-transparent">
                  <h4 className="text-white text-[17px] font-semibold mb-1">
                    {item.name}
                  </h4>
                  <p className="text-gray-200 text-[14px] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Bottom Masonry Grid */}
        <div className="grid md:grid-cols-3 gap-[28px] mt-[60px]">
          {facilities.slice(3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-[24px] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-[20px]">
                <h4 className="text-white text-[17px] font-semibold mb-1">
                  {item.name}
                </h4>
                <p className="text-gray-200 text-[14px] leading-[1.6]">
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
