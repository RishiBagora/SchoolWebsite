import { motion } from "framer-motion";
import Breadcrumb from "../common/Breadcrumb";

export default function FacultyHero() {
  return (
    <section className="relative w-full min-h-[60vh] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/faculty-hero.jpg"
          alt="Faculty at Golden Dreams Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-28 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, staggerChildren: 0.2 }}
        >
          {/* Badge */}
          <span className="inline-block bg-[#F4B400] text-[#1F2937] text-xs font-bold px-4 py-1.5 rounded-full tracking-wide mb-6">
            OUR FACULTY
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mb-6">
            Meet Our Experienced and Dedicated Teachers
          </h1>

          {/* Description */}
          <p className="text-gray-200 max-w-2xl leading-relaxed mb-8">
            Our faculty members are committed to nurturing students through
            quality teaching, discipline, and personalized attention.
          </p>

          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Faculty", path: "/faculty" },
            ]}
            textColor="text-gray-200"
            linkColor="text-[#F4B400]"
          />
        </motion.div>
      </div>
    </section>
  );
}
