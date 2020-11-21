const path = require("path");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "prettier", // keep last
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@utilities", path.resolve(__dirname, "scripts/utilities")],
          ["@modules", path.resolve(__dirname, "scripts/modules")],
          ["~", path.resolve(__dirname, "scripts")],
        ],
      },
    },
  },
};
