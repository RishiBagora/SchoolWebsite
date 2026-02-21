import { motion } from "framer-motion";

export default function TransportFacilitySection() {
  const points = [
    "Safe and monitored bus routes",
    "Supervised boarding and drop-off",
    "Comfortable and reliable transport",
    "Route details available at school office",
  ];

  return (
    <section className="bg-[#FAF7F2] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] group"
          >
            <img
              src="/images/school-bus.jpg"
              alt="Golden Dreams Academy school transport facility"
              loading="lazy"
              className="w-full h-[420px] object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="text-[13px] font-semibold tracking-[1.5px] text-[#7B1E1E] uppercase mb-4"
            >
              School Transport
            </motion.p>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] mb-6 leading-tight"
            >
              Safe and Reliable Transport Services
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="text-[15px] leading-[1.9] text-[#4B5563] mb-4"
            >
              The school provides transport facilities covering selected routes to ensure
              students travel safely and comfortably.
            </motion.p>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="text-[15px] leading-[1.9] text-[#4B5563] mb-8"
            >
              Transport services are managed with proper supervision and safety
              guidelines for secure daily travel.
            </motion.p>

            {/* POINTS */}
            <div className="space-y-4 mb-10">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-[20px] p-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-[14px] font-medium text-[#1F2937]"
                >
                  {point}
                </motion.div>
              ))}
            </div>

            {/* NOTE */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="bg-white border-l-[5px] border-[#7B1E1E] p-6"
            >
              <p className="text-[#1F2937] font-medium">
                Transport routes and availability can be confirmed from the school office during admission enquiry.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
