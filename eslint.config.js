import js from "@eslint/js";

export default [
  {
    files: ["public/**/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
      },
    },
  },
  js.configs.recommended,
];
