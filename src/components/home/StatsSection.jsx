import React, { useEffect, useRef, useState } from "react";

/* =========================
   Stats Data
========================= */
const STATS = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 1200, suffix: "+", label: "Students Enrolled" },
  { value: 50, suffix: "+", label: "Qualified Teachers" },
  { value: 95, suffix: "%", label: "Board Results Success" },
];

/* =========================
   Single Stat Item
========================= */
function StatItem({ value, suffix, label, index }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1200;
          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out
            setCount(Math.floor(eased * value));

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="
        flex flex-col items-center
        text-center
        px-4
      "
    >
      <span
        className="
          text-[#F4B400]
          font-bold
          text-[28px] md:text-[40px]
          leading-none
        "
      >
        {count}
        {suffix}
      </span>

      <span
        className="
          mt-2
          text-[15px]
          font-medium
          text-white
          opacity-95
        "
      >
        {label}
      </span>
    </div>
  );
}

/* =========================
   Stats Section
========================= */
export default function StatsSection() {
  return (
    <section
      className="
        bg-[#7B1E1E]
        py-18
        pt-[72px] pb-[72px]
      "
      role="region"
      aria-label="School statistics"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          className="
            grid gap-8
            grid-cols-2
            md:grid-cols-2
            lg:grid-cols-4
            items-center
            text-center
            motion-safe:animate-fadeInUp
          "
        >
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="relative flex justify-center"
            >
              <StatItem {...stat} index={index} />

              {/* Vertical Divider (Desktop only) */}
              {index !== STATS.length - 1 && (
                <span
                  className="
                    hidden lg:block
                    absolute right-0 top-1/2
                    -translate-y-1/2
                    h-[48px] w-px
                    bg-[rgba(255,255,255,0.25)]
                  "
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
