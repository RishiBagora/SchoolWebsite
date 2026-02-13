import { motion } from "framer-motion";

export default function EligibilityCriteria() {
  const criteria = [
    {
      title: "Pre-Primary (Nursery & KG)",
      points: [
        "Minimum age requirement as per academic session guidelines.",
        "Basic interaction may be conducted.",
        "Birth certificate required for verification.",
      ],
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350",
      alt: "Pre-primary students at Golden Dreams Academy",
    },
    {
      title: "Primary & Middle School (Class 1–8)",
      points: [
        "Successful completion of previous class.",
        "Submission of previous academic records.",
        "Transfer Certificate (if applicable).",
      ],
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      alt: "Primary students at Golden Dreams Academy",
    },
    {
      title: "Secondary (Class 9–10)",
      points: [
        "Academic performance review from previous school.",
        "Transfer Certificate mandatory.",
        "Subject readiness evaluation if required.",
      ],
      image:
        "https://images.unsplash.com/photo-1519452575417-564c1401ecc0",
      alt: "Secondary students at Golden Dreams Academy",
    },
    {
      title: "Senior Secondary (Class 11–12)",
      points: [
        "Successful completion of Class 10 board examination.",
        "Stream selection based on academic performance.",
        "Submission of mark sheet and required documents.",
      ],
      image:
        "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
      alt: "Senior secondary students at Golden Dreams Academy",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-widest text-[#7B1E1E] uppercase">
            Eligibility Criteria
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6 leading-tight">
            Admission Eligibility Guidelines
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Applicants must meet the following age and academic eligibility
            criteria based on the class level.
          </p>
        </motion.div>

        {/* Criteria Blocks */}
        <div className="mt-20 space-y-24">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-3xl shadow-md">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-[320px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold text-[#1F2937] mb-6">
                  {item.title}
                </h3>

                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-600 leading-relaxed text-sm md:text-base"
                    >
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 bg-[#FAF7F2] border-l-4 border-[#7B1E1E] p-8 rounded-xl"
        >
          <p className="text-[#1F2937] font-medium">
            Final admission is subject to document verification and seat
            availability.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
