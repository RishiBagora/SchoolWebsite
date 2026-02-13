import React from "react";
import { NavLink } from "react-router-dom";

export default function Breadcrumb({
  items = [],
  className = "",
  separator = ">",
}) {
  if (!items.length) return null;

  // Mobile: show first + last with ellipsis
  const mobileItems =
    items.length > 2
      ? [items[0], { label: "...", ellipsis: true }, items[items.length - 1]]
      : items;

  // SEO: BreadcrumbList schema (clean, no undefined fields)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.link && { item: item.link }),
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`
        w-full
        mt-4 mb-6
        text-[13px] md:text-[14px]
        font-medium
        ${className}
      `}
    >
      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <ol className="flex flex-wrap items-center text-[#6B7280]">
        {/* Desktop Breadcrumb */}
        <li className="hidden md:flex items-center">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <span key={index} className="flex items-center">
                {item.link && !isLast ? (
                  <NavLink
                    to={item.link}
                    className="
                      text-[#7B1E1E]
                      hover:underline
                      underline-offset-2
                      hover:text-[#651717]
                      transition-colors duration-150
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#7B1E1E]
                    "
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <span
                    className={
                      isLast
                        ? "text-[#1F2937] font-semibold cursor-default"
                        : ""
                    }
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="mx-2 text-[#9CA3AF]"
                  >
                    {separator}
                  </span>
                )}
              </span>
            );
          })}
        </li>

        {/* Mobile Breadcrumb */}
        <li className="flex md:hidden items-center">
          {mobileItems.map((item, index) => {
            const isLast = index === mobileItems.length - 1;

            if (item.ellipsis) {
              return (
                <span
                  key="ellipsis"
                  aria-hidden="true"
                  className="mx-2 text-[#9CA3AF]"
                >
                  ...
                </span>
              );
            }

            return (
              <span key={index} className="flex items-center">
                {item.link && !isLast ? (
                  <NavLink
                    to={item.link}
                    className="
                      text-[#7B1E1E]
                      hover:underline
                      underline-offset-2
                      hover:text-[#651717]
                      transition-colors duration-150
                    "
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <span className="text-[#1F2937] font-semibold">
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="mx-2 text-[#9CA3AF]"
                  >
                    {separator}
                  </span>
                )}
              </span>
            );
          })}
        </li>
      </ol>
    </nav>
  );
}
