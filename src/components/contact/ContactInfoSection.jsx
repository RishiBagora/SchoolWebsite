import { motion } from "framer-motion";

export default function ContactInfoSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img
              src="/images/contact-reception.jpg" // replace with real reception image
              alt="Golden Dreams Academy reception area in Nathdwara"
              loading="lazy"
              className="w-full h-full object-cover rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
            />
          </motion.div>

          {/* Info Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Address */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 shadow-[0_8px_22px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.15)] transition-all duration-300">
              <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                School Address
              </h3>
              <p className="text-[#7B1E1E] font-medium">
                Golden Dreams Academy, Nathdwara, Rajasthan, India
              </p>
              <p className="text-sm text-[#4B5563] mt-1">
                Visit our campus during working hours for admission enquiries.
              </p>
            </div>

            {/* Phone */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 shadow-[0_8px_22px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.15)] transition-all duration-300">
              <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                Phone Number
              </h3>
              <a
                href="tel:+91XXXXXXXXXX"
                className="text-[#7B1E1E] font-medium hover:underline"
              >
                +91 XXXXX XXXXX
              </a>
              <p className="text-sm text-[#4B5563] mt-1">
                Available during office hours for admissions and general enquiries.
              </p>
            </div>

            {/* Email */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 shadow-[0_8px_22px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.15)] transition-all duration-300">
              <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                Email Address
              </h3>
              <a
                href="mailto:info@goldendreamsacademy.in"
                className="text-[#7B1E1E] font-medium hover:underline"
              >
                info@goldendreamsacademy.in
              </a>
              <p className="text-sm text-[#4B5563] mt-1">
                Send us your queries and we will respond promptly.
              </p>
            </div>

            {/* Office Hours */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 shadow-[0_8px_22px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.15)] transition-all duration-300">
              <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                Office Hours
              </h3>
              <p className="text-[#7B1E1E] font-medium">
                Monday – Saturday
              </p>
              <p className="text-sm text-[#4B5563] mt-1">
                9:00 AM – 3:00 PM
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
