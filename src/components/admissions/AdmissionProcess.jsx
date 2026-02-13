import { motion } from "framer-motion";

export default function AdmissionProcess() {
  const steps = [
    {
      number: "01",
      title: "Enquiry & Information",
      description:
        "Visit the school campus or contact our admission office to gather information about eligibility, documents, and academic details.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350",
      alt: "Parent enquiry at Golden Dreams Academy",
    },
    {
      number: "02",
      title: "Admission Form Submission",
      description:
        "Collect and submit the admission form along with required documents within the specified timeline.",
      image:
        "https://images.unsplash.com/photo-1603570419888-4b6b08d3d7a1",
      alt: "Admission form submission at Golden Dreams Academy",
    },
    {
      number: "03",
      title: "Interaction / Assessment",
      description:
        "Depending on the class level, students may be required to attend an interaction session or academic assessment.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      alt: "Student assessment at Golden Dreams Academy",
    },
    {
      number: "04",
      title: "Admission Confirmation",
      description:
        "Once selected, complete the fee payment process and receive official admission confirmation from the school.",
      image:
        "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
      alt: "Admission confirmation at Golden Dreams Academy",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-widest text-[#7B1E1E] uppercase">
            Admission Process
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6 leading-tight">
            Simple and Transparent Admission Procedure
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Follow these easy steps to complete the admission process at Golden Dreams Academy.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20 space-y-24">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-6 top-0 w-[2px] h-full bg-[#E5E7EB]" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative md:pl-20"
            >
              {/* Step Number */}
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white border-2 border-[#7B1E1E] flex items-center justify-center font-bold text-[#7B1E1E] shadow-sm">
                {step.number}
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.alt}
                      loading="lazy"
                      className="w-full h-[260px] md:h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
