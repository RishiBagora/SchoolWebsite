import { motion } from "framer-motion";

export default function SafetyAndSecuritySection() {
  const points = [
    "CCTV surveillance across campus",
    "Supervised entry and exit points",
    "Disciplined campus environment",
    "Teacher supervision during school hours",
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-[13px] font-semibold tracking-[1.5px] text-[#7B1E1E] uppercase mb-4">
              Safety & Security
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] mb-6 leading-tight">
              A Safe and Secure Campus Environment
            </h2>

            <p className="text-[15px] leading-[1.9] text-[#4B5563] mb-4">
              Student safety and well-being are our highest priorities. The campus is
              monitored and supervised to ensure a disciplined and secure learning
              environment.
            </p>

            <p className="text-[15px] leading-[1.9] text-[#4B5563] mb-10">
              Teachers and staff maintain constant supervision during school hours to
              ensure students feel safe and supported at all times.
            </p>

            {/* Security Points */}
            <div className="grid sm:grid-cols-2 gap-5">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#FAF7F2] rounded-[20px] p-5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-[14px] font-medium text-[#1F2937]"
                >
                  {point}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
            className="space-y-8"
          >
            {["/images/school-gate.jpg", "/images/cctv.jpg"].map((src, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 45 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.75 }}
                className="overflow-hidden rounded-[26px] shadow-[0_18px_45px_rgba(0,0,0,0.12)] group"
              >
                <img
                  src={src}
                  alt="Campus safety and security"
                  loading="lazy"
                  className="w-full h-[260px] object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-[0_28px_65px_rgba(0,0,0,0.18)]"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Highlight Note */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#FAF7F2] border-l-[5px] border-[#7B1E1E] p-7 max-w-3xl"
        >
          <p className="text-[#1F2937] font-medium">
            We strive to maintain a secure, disciplined, and supportive environment
            for every student.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
