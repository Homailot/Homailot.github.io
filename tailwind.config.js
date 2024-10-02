/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "selector";
export const theme = {
  extend: {
    fontFamily: {
      display: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      body: ["Merriweather", ...defaultTheme.fontFamily.serif],
    },
    boxShadow: {
      DEFAULT: "0px 6px 24px 0px rgb(0 0 0 / 0.05)",
      outline:
        "0px 6px 24px 0px rgb(0 0 0 / 0.05), 0px 0px 0px 1px rgb(0 0 0 / 0.08) ",
    },
    keyframes: {
      "slide-in-left": {
        "0%": {
          transform: "translateX(-100%)",
          opacity: 0,
        },
        "100%": {
          transform: "translateX(0)",
          opacity: 1,
        },
      },
      "slide-in-top": {
        "0%": {
          transform: "translateY(-100%)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0)",
          opacity: 1,
        },
      },
      "slide-in-bottom": {
        "0%": {
          transform: "translateY(100%)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0)",
          opacity: 1,
        },
      },
      "card-drop-1": {
        "0%": {
          opacity: 0,
          transform: "scale(2)",
        },
        "100%": {
          opacity: 1,
          transform: "scale(1) rotate(-5deg)",
        },
      },
      "card-drop-2-lg": {
        "0%": {
          opacity: 0,
          transform: "scale(2)",
        },
        "100%": {
          opacity: 1,
          transform: "scale(1) rotate(6deg)",
        },
      },
      "card-drop-2": {
        "0%": {
          opacity: 0,
          transform: "scale(2)",
        },
        "100%": {
          opacity: 1,
          transform: "scale(1) rotate(2.33deg)",
        },
      },
      "card-drop-3": {
        "0%": {
          opacity: 0,
          transform: "scale(2)",
        },
        "100%": {
          opacity: 1,
          transform: "scale(1) rotate(7.33deg)",
        },
      },
    },
    animation: {
      "slide-in-left": "slide-in-left 1.2s ease-in-out",
      "slide-in-top": "slide-in-top 1.2s ease-in-out",
      "slide-in-bottom": "slide-in-bottom 1.2s ease-in-out",
    },
    colors: {
      "satin-linen": {
        50: "#f9f7f3",
        100: "#f1eee3",
        200: "#e4dec9",
        300: "#d0c4a1",
        400: "#bca87b",
        500: "#ae9461",
        600: "#a18155",
        700: "#866948",
        800: "#6d553f",
        900: "#594735",
        950: "#2f241b",
      },
      manatee: {
        50: "#f6f6f7",
        100: "#eeeff1",
        200: "#e0e1e5",
        300: "#ccccd5",
        400: "#b6b6c3",
        500: "#a2a2b2",
        600: "#908e9f",
        700: "#7b7989",
        800: "#656370",
        900: "#54535c",
        950: "#313036",
      },
      mamba: {
        50: "#f9f8fa",
        100: "#f3f3f4",
        200: "#e9e8ec",
        300: "#d8d6dc",
        400: "#c1bdc8",
        500: "#a7a2b0",
        600: "#91899a",
        700: "#817889",
        800: "#6b6572",
        900: "#59535f",
        950: "#3a373e",
      },
      "oslo-gray": {
        50: "#f6f6f7",
        100: "#eef0f1",
        200: "#e0e3e5",
        300: "#ccd2d5",
        400: "#b7bdc2",
        500: "#a3abb1",
        600: "#858c95",
        700: "#7a8088",
        800: "#64686f",
        900: "#54575b",
        950: "#313335",
      },
      "crown-of-thorns": {
        50: "#fdf3f3",
        100: "#fbe5e5",
        200: "#f8d0d1",
        300: "#f1b0b1",
        400: "#e78283",
        500: "#da595b",
        600: "#c63c3e",
        700: "#a62f31",
        800: "#8a2a2b",
        900: "#73292a",
        950: "#3e1112",
      },
      comet: {
        50: "#f6f7f9",
        100: "#ecedf2",
        200: "#d5d7e2",
        300: "#b1b6c8",
        400: "#868eaa",
        500: "#676f90",
        600: "#565d7c",
        700: "#434861",
        800: "#3a3f52",
        900: "#343646",
        950: "#22242f",
      },
    },
  },
};
export const plugins = [];
