import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: {
            react,
            "react-hooks": reactHooks,
            "jsx-a11y": jsxA11y,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            ...reactHooks.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        files: ["**/*.astro"],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: [".astro"],
            },
        },
        rules: {
            // Astro specific rules can go here
        }
    },
    {
        ignores: ["dist/", ".astro/", "node_modules/", "public/"]
    }
);
