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
  rules: {},
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@utilities", path.resolve(__dirname, "resources/js/utilities")],
          ["@modules", path.resolve(__dirname, "resources/js/modules")],
        ],
      },
    },
  },
};
