import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    relation: "Parent of Class 5 Student",
    text: "Golden Dreams Academy has provided my child with a strong academic foundation and a disciplined environment.",
    image: "/images/parents/parent-1.jpg",
  },
  // ... baki items yahan add karein (kam se kam 5-6 items rakhein)
];

const Testimonials = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const baseX = useMotionValue(0);

  // Speed: 0.4 - 0.6 is perfect for slow & premium feel
  const speed = 0.5;

  useEffect(() => {
    if (scrollRef.current) {
      setContainerWidth(scrollRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    if (!isPaused && containerWidth > 0) {
      let moveBy = speed * (delta / 15);
      let newX = baseX.get() - moveBy;

      // Reset logic for infinite loop
      if (newX <= -containerWidth) {
        newX = 0;
      }
      baseX.set(newX);
    }
  });

  // Infinite effect ke liye array double
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="TESTIMONIALS"
          title="What Parents Say"
          alignment="center"
        />

        {/* Masking Container: Isse edges fade ho jayenge */}
        <div 
          className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            ref={scrollRef}
            className="flex gap-6 w-max"
            style={{ x: baseX }}
          >
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="w-[280px] md:w-[320px] bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  {/* Quote Icon (Optional for Clean Look) */}
                  <span className="text-3xl text-[#7B1E1E] opacity-20 font-serif leading-none italic block mb-2">“</span>
                  <p className="text-[14px] leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover grayscale-[30%]"
                  />
                  <div className="overflow-hidden">
                    <p className="text-[14px] font-bold text-gray-800 truncate leading-tight">
                      {item.name}
                    </p>
                    <p className="text-[12px] text-[#7B1E1E] font-medium truncate">
                      {item.relation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;