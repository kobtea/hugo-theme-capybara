module.exports = {
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cc9966",
        "primary-dark": "#c68c53",
        "primary-light": "#F8F5F0",
        accent: "#93C54B",
        "accent-dark": "#339900",
        code: "var(--tw-prose-code)",
        "code-light": "#F5F5F5",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.accent"),
              "&:hover": {
                color: theme("colors.accent-dark"),
              },
            },
            code: {
              color: theme("colors.code"),
              backgroundColor: theme("colors.code-light"),
            },
            "code::before": {
              content: '""',
              padding: "0.2rem",
            },
            "code::after": {
              content: '""',
              padding: "0.2rem",
            },
            pre: {
              color: theme("colors.code"),
              backgroundColor: theme("colors.code-light"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
