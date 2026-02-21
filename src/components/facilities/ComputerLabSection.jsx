import { motion } from "framer-motion";

export default function ComputerLabSection() {
  return (
    <section className="bg-[#FAF7F2] py-28">
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
            Computer Lab
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-4">
            Advanced Computer Laboratory for Digital Learning
          </h2>

          <p className="text-[15px] leading-[1.9] text-[#4B5563] max-w-3xl mx-auto">
            Our computer lab is equipped with modern systems and structured learning programs 
            to enhance students’ digital skills and technical knowledge.
          </p>
        </motion.div>

        {/* Split Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Block */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 45 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="text-[15px] leading-[1.9] text-[#4B5563] mb-5">
              The computer laboratory provides hands-on practical sessions under teacher supervision, 
              ensuring students gain essential digital literacy skills.
            </p>

            <p className="text-[15px] leading-[1.9] text-[#4B5563]">
              From basic computer fundamentals to advanced applications, students are guided 
              through structured programs aligned with academic curriculum.
            </p>

            {/* Highlight Box */}
            <div className="mt-8 bg-white rounded-[22px] p-7 shadow-[0_15px_40px_rgba(0,0,0,0.10)]">
              <p className="text-[#1F2937] font-medium">
                Technology integration supports both academic learning and 
                future career readiness.
              </p>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 45 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            {/* Image 1 */}
            <div className="overflow-hidden rounded-[26px] shadow-[0_18px_45px_rgba(0,0,0,0.12)] group">
              <img
                src="/images/computer-lab-students.jpg"
                alt="Students using computers at Golden Dreams Academy"
                loading="lazy"
                className="w-full h-64 object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-[0_28px_65px_rgba(0,0,0,0.18)]"
              />
            </div>

            {/* Image 2 */}
            <div className="overflow-hidden rounded-[26px] shadow-[0_18px_45px_rgba(0,0,0,0.12)] group">
              <img
                src="/images/computer-lab-interior.jpg"
                alt="Computer lab infrastructure at Golden Dreams Academy"
                loading="lazy"
                className="w-full h-64 object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-[0_28px_65px_rgba(0,0,0,0.18)]"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
