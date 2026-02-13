import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdmissionFAQ() {
  const faqs = [
    {
      question: "What is the minimum age requirement for Nursery admission?",
      answer:
        "The minimum age requirement is determined as per academic session guidelines. Please contact the admission office for specific details.",
    },
    {
      question: "Is there an entrance test for admission?",
      answer:
        "Depending on the class level, students may be required to attend an interaction session or academic assessment.",
    },
    {
      question: "Is school transport available?",
      answer:
        "Yes, transport facilities are available for selected routes. Please enquire at the admission office for route details.",
    },
    {
      question: "Can students transfer from another school mid-session?",
      answer:
        "Transfer admissions are subject to seat availability and submission of required documents including Transfer Certificate.",
    },
    {
      question: "How can I obtain the admission form?",
      answer:
        "The admission form can be collected from the school office or downloaded from the website if available.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[#FAF7F2] py-28">
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
            Frequently Asked Questions
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6 leading-tight">
            Common Admission Queries
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Find answers to commonly asked questions regarding the admission process.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="mt-16 space-y-5 max-w-4xl">

          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#7B1E1E] focus:ring-offset-2 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#1F2937]">
                    {item.question}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
