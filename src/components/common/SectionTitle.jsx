import React from "react";

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "left",
  spacing = "default",
  className = "",
}) {
  const alignmentClasses =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  const spacingClasses =
    spacing === "compact"
      ? "pt-10 pb-8"
      : "pt-16 pb-14";

  return (
    <div
      className={`
        w-full flex flex-col
        ${alignmentClasses}
        ${spacingClasses}
        ${className}
        motion-safe:animate-fadeInUp
      `}
    >
      {/* Subtitle */}
      {subtitle && (
        <span
          className="
            text-[#7B1E1E]
            text-[13px] md:text-[14px]
            font-semibold
            tracking-[1.2px]
            uppercase
            mb-2
          "
        >
          {subtitle}
        </span>
      )}

      {/* Title */}
      <h2
        className="
          text-[#1F2937]
          font-bold
          leading-[1.25] md:leading-[1.2]
          text-[24px] md:text-[30px] lg:text-[36px]
          max-w-[720px]
          mb-3
        "
      >
        {title}
      </h2>

      {/* Decorative Line */}
      <span
        aria-hidden="true"
        className="
          block
          w-[48px]
          h-[3px]
          bg-[#7B1E1E]
          rounded-[2px]
          mt-4
        "
      />

      {/* Description */}
      {description && (
        <p
          className="
            text-[#4B5563]
            text-[15px] md:text-[16px]
            leading-[1.7]
            max-w-[680px]
            mt-2
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
