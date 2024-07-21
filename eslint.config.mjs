import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,  // Adjust based on your needs
        sourceType: "module",
      },
    },
    rules: {
      // Define or override rules here
    },
    plugins: {
      // Add plugins here if needed
    },
  },
  pluginJs.configs.recommended,
];