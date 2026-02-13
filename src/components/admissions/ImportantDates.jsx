import { motion } from "framer-motion";

export default function ImportantDates() {
  const timeline = [
    {
      date: "01 January 2025",
      title: "Admission Enquiry Opens",
      description:
        "Parents may visit the campus or contact the admission office for information.",
      highlight: false,
    },
    {
      date: "15 January 2025",
      title: "Application Form Submission Begins",
      description:
        "Admission forms available for collection and submission.",
      highlight: false,
    },
    {
      date: "15 February 2025",
      title: "Last Date for Form Submission",
      description:
        "All application forms must be submitted before the deadline.",
      highlight: true,
    },
    {
      date: "20 February 2025",
      title: "Interaction / Assessment Schedule",
      description:
        "Students may be called for interaction or assessment as applicable.",
      highlight: false,
    },
    {
      date: "01 March 2025",
      title: "Admission Confirmation",
      description:
        "Selected candidates will receive official confirmation.",
      highlight: false,
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-widest text-[#7B1E1E] uppercase">
            Important Dates
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6 leading-tight">
            Admission Schedule for Academic Session 2025-26
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Please take note of the following key dates related to the admission process.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-[2px] bg-[#E5E7EB]" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative md:pl-16"
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-0 top-2 w-8 h-8 rounded-full border-4 border-white bg-[#7B1E1E] shadow-sm" />

                {/* Card */}
                <div
                  className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    item.highlight
                      ? "bg-[#FFF8E1] border-l-4 border-[#F4B400]"
                      : "bg-[#FAF7F2]"
                  }`}
                >
                  <p className="text-sm font-semibold text-[#7B1E1E] mb-2">
                    {item.date}
                  </p>

                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notice Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#FAF7F2] border-l-4 border-[#7B1E1E] p-8 rounded-xl"
        >
          <p className="text-[#1F2937] font-medium leading-relaxed">
            Admission is subject to seat availability. Dates may be updated by the school administration if required.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
