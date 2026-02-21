import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import {
  ClipboardCheck,
  FileText,
  GraduationCap,
  BarChart3,
} from "lucide-react";

export default function AssessmentSystem() {
  const prefersReducedMotion = useReducedMotion();

  const assessmentItems = [
    {
      icon: ClipboardCheck,
      title: "Unit Tests",
      description:
        "Regular short assessments to evaluate concept understanding.",
    },
    {
      icon: FileText,
      title: "Term Examinations",
      description:
        "Comprehensive exams conducted at the end of each academic term.",
    },
    {
      icon: GraduationCap,
      title: "Pre-Board Exams",
      description:
        "Board-pattern exams to ensure readiness for final examinations.",
    },
    {
      icon: BarChart3,
      title: "Performance Reports",
      description:
        "Detailed report cards shared with parents regularly.",
    },
  ];

  const item = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    show: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">

        <SectionTitle
          subtitle="ASSESSMENT SYSTEM"
          title="Structured Evaluation & Continuous Monitoring"
          description="Our assessment framework ensures transparency, accountability and steady academic progress."
          alignment="center"
        />

        {/* Image Banner */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 rounded-[26px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.18)] relative"
        >
          <img
            src="/images/assessment-system.jpg"
            alt="Students appearing for assessment"
            className="w-full aspect-[16/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white max-w-md">
            <p className="font-semibold text-lg">
              Continuous evaluation ensures academic clarity & progress
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {assessmentItems.map((itemData, i) => {
            const Icon = itemData.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center
                           shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#7B1E1E]/10 
                                flex items-center justify-center mb-4">
                  <Icon size={26} className="text-[#7B1E1E]" />
                </div>

                <h3 className="font-semibold text-gray-800 mb-2">
                  {itemData.title}
                </h3>
                <p className="text-gray-600 text-sm leading-[1.7]">
                  {itemData.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { number: "4", label: "Assessments / Year" },
              { number: "100%", label: "Parent Transparency" },
              { number: "Regular", label: "Progress Reports" },
              { number: "Board Ready", label: "Exam Preparation" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-bold text-[#7B1E1E]">
                  {stat.number}
                </p>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}