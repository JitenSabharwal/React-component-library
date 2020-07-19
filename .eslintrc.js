const path = require("path")

module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      }, // this loads <rootdir>/tsconfig.json to eslint
      webpack: {
        config: path.join(__dirname, "src/webpack/common.ts"),
      },
    },
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["import", "react-hooks", "sort-destructure-keys", "@calm/react-intl"],
  rules: {
    // too many changes
    "@typescript-eslint/ban-types": "warn",
    // too many changes - end

    // a nice idea for some parts of the code, but definitely not all.
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],

    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "sort-destructure-keys/sort-destructure-keys": "error", // Mainly to sort render props
    "import/no-unresolved": "error",

    "object-shorthand": "error",
    "prefer-destructuring": "warn",

    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off",
    "react/jsx-key": "off",
    "react/jsx-no-target-blank": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "react/no-children-prop": "off",
    "react/no-unescaped-entities": "off",
    "react/no-direct-mutation-state": "off",
    "react/self-closing-comp": ["error", { component: true, html: true }],
    "react/jsx-boolean-value": ["error", "always"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "sort-destructure-keys/sort-destructure-keys": "error", // Mainly to sort render props

    // problem inside components..
    "no-irregular-whitespace": "warn",

    // i18n linter settings
    "@calm/react-intl/missing-formatted-message": [
      2,
      {
        noTrailingWhitespace: true,
        ignoreLinks: false,
        enforceLabels: true,
        enforceImageAlts: false,
        enforceInputProps: true,
      },
    ],
    "@calm/react-intl/missing-attribute": [
      2,
      {
        noTrailingWhitespace: true,
        noSpreadOperator: false,
        requireDescription: false,
        formatDefineMessages: true,
      },
    ],
    "@calm/react-intl/missing-values": 2,
  },
  overrides: [
    {
      files: ["*.story.tsx", "*.test.tsx", "*.test.tsx.snap"],
      rules: {
        "@calm/react-intl/missing-formatted-message": [
          0,
          {
            noTrailingWhitespace: false,
            ignoreLinks: true,
            enforceLabels: false,
            enforceImageAlts: false,
            enforceInputProps: false,
          },
        ],
        "@calm/react-intl/missing-attribute": [
          0,
          {
            noTrailingWhitespace: false,
            noSpreadOperator: false,
            requireDescription: false,
            formatDefineMessages: false,
          },
        ],
        "@calm/react-intl/missing-values": 0,
      },
    },
  ],
}
