import { motion } from "framer-motion";
import Breadcrumb from "../common/Breadcrumb";

export default function FacilitiesHero() {
  return (
    <section className="relative w-full min-h-[60vh] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/facilities-hero.jpg" 
          alt="Golden Dreams Academy campus infrastructure in Nathdwara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/65"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 flex flex-col justify-center min-h-[60vh]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          {/* Badge */}
          <div className="inline-block bg-[#F4B400] text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full tracking-wide mb-6">
            OUR FACILITIES
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            World-Class Facilities at Golden Dreams Academy
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-base leading-relaxed max-w-2xl mb-8">
            Our modern infrastructure, well-equipped labs, smart classrooms,
            and safe campus environment provide students with the ideal setting
            for academic excellence and overall development.
          </p>

          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Facilities", path: "/facilities" }
            ]}
            className="text-gray-200"
            linkClassName="text-[#F4B400] hover:underline"
            separatorClassName="text-white/60"
          />

        </motion.div>
      </div>
    </section>
  );
}
