import js from "@eslint/js";
import stylistic from '@stylistic/eslint-plugin';
import imports from "eslint-plugin-import";
import jsdoc from 'eslint-plugin-jsdoc';
import jsxA11Y from "eslint-plugin-jsx-a11y";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from 'typescript-eslint';

export default [
  // building the website gets eslint errors without this ignore separated out from the others...
  {
    ignores: [
      "**/dist/**/*",
      "**/*.es.js",
      "**/*.umd.js",
      "**/examples/**/*",
      "**/artifacts/**/*",
    ],
  },
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    ignores: [
      "**/vite.config.js",
      "**/dist/**/*",
      "**/node_modules/**/*",
      "**/examples/**",
      "**/artifacts/**/*",
      "**/*.es.js",
      "**/*.umd.js",
    ],
    plugins: {
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11Y,
      jsdoc,
      "import": imports,
      js,
      '@stylistic': stylistic,
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
      "@stylistic/indent": ["error", 2, { SwitchCase: 1 }],
      "no-alert": "error",
      "no-bitwise": "error",
      "no-console": "error",
      "no-new-wrappers": "error",
      "import/extensions": "error",
      "no-unused-vars": [
        "error", {
          args: "after-used",
        },
      ],

      "@stylistic/prop-types": "off",
      "@stylistic/jsx-one-expression-per-line": "off",
      "react-refresh/only-export-components": "error",
      "linebreak-style": "error",
      "import/prefer-default-export": "off",
      "@stylistic/react-in-jsx-scope": "off",

      "@stylistic/max-len": [
        "error",
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
        2, {
          assert: "either",
          depth: 3,
        },
      ],

      "import/no-cycle": "off",

      "no-param-reassign": [
        "error", {
          props: true,
          ignorePropertyModificationsForRegex: ["^draft"],
        },
      ],

      "no-underscore-dangle": [
        "error", {
          enforceInMethodNames: false,
          enforceInClassFields: false,
        },
      ],

      "no-use-before-define": [
        "error", {
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
        "error", {
          ImportDeclaration: {
            consistent: true,
          },

          ObjectExpression: {
            consistent: true,
            multiline: true,
          },

          ObjectPattern: {
            consistent: true,
            multiline: true,
          },
        },
      ],
    },
  },
];
