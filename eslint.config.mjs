import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  // Next.js recommended configs
  ...nextVitals,
  ...nextTs,

  // Disable ESLint rules that conflict with Prettier
  prettier,

  // Global ignores (override eslint-config-next defaults)
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "*.config.*",      // ignore config files
    "components/ui/**" // ignore auto-generated shadcn components
  ]),

  // 👇 Add custom rules here (optional)
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      // Add more project-specific rules here
    },
  },
]);

export default eslintConfig;