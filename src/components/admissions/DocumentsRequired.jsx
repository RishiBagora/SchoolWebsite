import { motion } from "framer-motion";

export default function DocumentsRequired() {
  const documents = [
    {
      title: "Birth Certificate",
      description:
        "Official proof of date of birth issued by competent authority.",
    },
    {
      title: "Previous Academic Mark Sheet",
      description:
        "Latest report card or mark sheet from previous school.",
    },
    {
      title: "Transfer Certificate (TC)",
      description:
        "Mandatory for students transferring from another school.",
    },
    {
      title: "Passport Size Photographs",
      description:
        "Recent passport-sized photographs of the student.",
    },
    {
      title: "Address Proof",
      description:
        "Valid address proof of parent/guardian.",
    },
    {
      title: "Aadhar Card (if applicable)",
      description:
        "Copy of student’s and parent’s identification document.",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-widest text-[#7B1E1E] uppercase">
            Required Documents
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6 leading-tight">
            Documents to be Submitted at the Time of Admission
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Please ensure the following documents are submitted along with the
            admission form for smooth processing.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-16 mt-20 items-start">

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4"
              alt="Admission documents required at Golden Dreams Academy"
              loading="lazy"
              className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Documents List */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {doc.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mt-20 bg-white border-l-4 border-[#7B1E1E] p-8 rounded-xl"
        >
          <p className="text-[#1F2937] font-medium leading-relaxed">
            All documents must be submitted in photocopy form along with
            original documents for verification during admission confirmation.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
