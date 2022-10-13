module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-var-requires": "warn",
    "prettier/prettier": [
      "warn",
      {
        singleQuote: false,
        tabs: false,
        endOfLine: "auto",
        trailingComma: "es5",
        proseWrap: "always",
      },
    ],
  },
};
