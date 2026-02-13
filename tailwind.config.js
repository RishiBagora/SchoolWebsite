/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px"
      }
    },

    extend: {
      /* ================================
         COLORS – SCHOOL BRAND THEME
      ================================= */
      colors: {
        brand: {
          maroon: "#7B1E1E",        // Primary – authority, trust
          maroonDark: "#651717",
          saffron: "#F4B400",       // Secondary – positivity
          saffronDark: "#D89E00"
        },

        background: {
          light: "#FAF7F2",         // Cream / off-white
          section: "#F3EFE7"
        },

        text: {
          primary: "#1F2937",       // Charcoal
          secondary: "#4B5563",
          muted: "#6B7280"
        },

        accent: {
          teal: "#0F766E"
        },

        border: {
          light: "#E5E7EB"
        }
      },

      /* ================================
         TYPOGRAPHY
      ================================= */
      fontFamily: {
        heading: ["Poppins", "Inter", "sans-serif"],
        body: ["Roboto", "Inter", "sans-serif"],
        hindi: ["Noto Sans Devanagari", "sans-serif"]
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }]
      },

      /* ================================
         BORDER RADIUS
      ================================= */
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem"
      },

      /* ================================
         SHADOWS – PREMIUM FEEL
      ================================= */
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        DEFAULT: "0 4px 12px rgba(0,0,0,0.08)",
        md: "0 6px 20px rgba(0,0,0,0.1)",
        lg: "0 10px 30px rgba(0,0,0,0.12)",
        soft: "0 8px 24px rgba(0,0,0,0.08)"
      },

      /* ================================
         TRANSITIONS & ANIMATIONS
      ================================= */
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)"
      },

      transitionDuration: {
        DEFAULT: "200ms",
        slow: "300ms"
      },

      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },

      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards"
      }
    }
  },

  plugins: []
};
