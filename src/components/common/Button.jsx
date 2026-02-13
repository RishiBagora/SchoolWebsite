import React from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold leading-[1.2] rounded-[10px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-200 ease-out";

const variantStyles = {
  primary:
    "bg-[#7B1E1E] text-white shadow-sm hover:bg-[#651717] hover:shadow-md active:bg-[#541212] active:shadow-sm focus-visible:ring-[#7B1E1E]",

  secondary:
    "bg-[#F4B400] text-[#1F2937] shadow-sm hover:bg-[#D89E00] hover:shadow-md active:bg-[#C18E00] active:shadow-sm focus-visible:ring-[#F4B400]",

  outline:
    "bg-transparent border border-[#7B1E1E] text-[#7B1E1E] hover:bg-[rgba(123,30,30,0.08)] active:bg-[rgba(123,30,30,0.12)] focus-visible:ring-[#7B1E1E]",
};

const sizeStyles = {
  small: "px-4 py-2 text-sm min-h-[36px]",
  medium: "px-6 py-3 text-base min-h-[44px]",
  large: "px-8 py-4 text-lg min-h-[52px]",
};

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  leftIcon,
  rightIcon,
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${
          isDisabled
            ? "bg-[#E5E7EB] text-[#9CA3AF] border-[#D1D5DB] cursor-not-allowed pointer-events-none shadow-none"
            : "hover:-translate-y-[1px] active:translate-y-0"
        }
        motion-reduce:transition-none motion-reduce:hover:transform-none
        ${className}
      `}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span className="sr-only">Loading</span>
        </span>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
