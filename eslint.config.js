import js from "@eslint/js"; // Use this as a config, not a plugin
import stylistic from "@stylistic/eslint-plugin";
import imports from "eslint-plugin-import-x";
import jsdoc from "eslint-plugin-jsdoc";
import jsxA11Y from "eslint-plugin-jsx-a11y-x";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";
// import eslintReact from "@eslint-react/eslint-plugin";

export default [
  // 1. Base ignores (Applied globally)
  {
    ignores: [
      "**/dist/**/*",
      "**/*.es.js",
      "**/*.umd.js",
      "**/examples/**/*",
      "**/artifacts/**/*",
      "**/.history/**/*",
      "**/vite.config.js",
      "**/node_modules/**/*",
    ],
  },

  // 2. Include base recommended configs!
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  // eslintReact.configs.recommended,

  // 3. Your custom rules and overrides
  {
    // Explicitly tell ESLint which files this block applies to
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11Y,
      jsdoc,
      import: imports,
      "@stylistic": stylistic,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      "@typescript-eslint/no-dynamic-delete": 0,
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": false, // Tells ESLint to allow @ts-expect-error without any description
          "ts-ignore": true, // Keeps @ts-ignore banned (recommended)
          "ts-nocheck": true, // Keeps @ts-nocheck banned (recommended)
          "ts-check": false, // Allows @ts-check
        },
      ],
      "@stylistic/indent": ["error", 2, { SwitchCase: 1 }],

      // I changed some of these to "warn" as an example so you actually see warnings!
      "no-alert": "warn",
      "no-console": "warn",
      "no-unused-vars": [
        "warn",
        {
          args: "after-used",
        },
      ],

      "no-bitwise": "error",
      "no-new-wrappers": "error",
      "import/extensions": "error",
      "@stylistic/prop-types": "off",
      "@stylistic/jsx-one-expression-per-line": "off",
      "react-refresh/only-export-components": "warn",
      "linebreak-style": "error",
      "import/prefer-default-export": "off",
      "@stylistic/react-in-jsx-scope": "off",

      "@stylistic/max-len": [
        "warn", // Often better as a warning so it doesn't break builds
        {
          code: 150,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],

      "@stylistic/comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "only-multiline",
          exports: "always-multiline",
          functions: "never",
        },
      ],

      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          assert: "either",
          depth: 3,
        },
      ],

      "import/no-cycle": "off",

      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsForRegex: ["^draft"],
        },
      ],

      "no-underscore-dangle": [
        "error",
        {
          enforceInMethodNames: false,
          enforceInClassFields: false,
        },
      ],

      "no-use-before-define": [
        "error",
        {
          functions: false,
          classes: true,
          variables: true,
          allowNamedExports: false,
        },
      ],

      "jsdoc/require-returns-description": 0,
      "jsdoc/require-param-description": 0,
      "jsdoc/require-property-description": 0,
      "jsdoc/require-jsdoc": 0,
      "jsdoc/no-undefined-types": "error",

      "@stylistic/object-curly-newline": [
        "error",
        {
          ImportDeclaration: { consistent: true },
          ObjectExpression: { consistent: true, multiline: true },
          ObjectPattern: { consistent: true, multiline: true },
        },
      ],
      "react-hooks/exhaustive-deps": "off",
    },
  },
];
