import React from "react";

const SIZE_MAP = {
  small: {
    spinner: "h-[24px] w-[24px]",
    border: "border-[3px]",
  },
  medium: {
    spinner: "h-[40px] w-[40px]",
    border: "border-[4px]",
  },
  large: {
    spinner: "h-[56px] w-[56px]",
    border: "border-[5px]",
  },
};

export default function Loader({
  size = "medium",
  fullscreen = false,
  text = "Loading...",
  className = "",
}) {
  const sizeConfig = SIZE_MAP[size] || SIZE_MAP.medium;

  const spinner = (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading content"
      className={`
        inline-flex flex-col items-center justify-center
        ${className}
      `}
    >
      <div
        className={`
          ${sizeConfig.spinner}
          ${sizeConfig.border}
          rounded-full
          border-[#E5E7EB]
          border-t-[#7B1E1E]
          animate-spin
          motion-reduce:animate-none
        `}
        style={{
          animationDuration: "800ms",
          animationTimingFunction: "linear",
        }}
      />

      {text && (
        <span
          className="
            mt-2
            text-[14px]
            font-medium
            text-[#4B5563]
            text-center
          "
        >
          {text}
        </span>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div
        className="
          fixed inset-0 z-[999]
          flex items-center justify-center
          bg-[rgba(255,255,255,0.85)]
        "
      >
        {spinner}
      </div>
    );
  }

  return spinner;
}
