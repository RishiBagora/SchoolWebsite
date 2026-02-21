import { motion } from "framer-motion";

export default function CampusOverviewSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >

          {/* Image Block */}
          <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] group">
            <img
              src="/images/campus-overview.jpg"
              alt="Golden Dreams Academy campus overview in Nathdwara"
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div>

            {/* Label */}
            <p className="text-[13px] font-semibold tracking-[1.5px] text-[#7B1E1E] uppercase mb-5">
              Campus Environment
            </p>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-6">
              A Well-Structured and Safe Learning Environment
            </h2>

            {/* Paragraphs */}
            <p className="text-[15px] leading-[1.9] text-[#4B5563] mb-6">
              Golden Dreams Academy provides a clean, disciplined, and
              well-organized campus designed to support both academic
              excellence and holistic development.
            </p>

            <p className="text-[15px] leading-[1.9] text-[#4B5563]">
              Our infrastructure includes spacious classrooms, modern
              laboratories, library facilities, and dedicated activity
              areas to ensure a balanced educational experience.
            </p>

            {/* Highlight Strip */}
            <div className="mt-10 bg-[#FAF7F2] rounded-[20px] px-6 py-5">
              <p className="text-[#1F2937] font-medium">
                Designed to nurture discipline, focus, and academic growth.
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
