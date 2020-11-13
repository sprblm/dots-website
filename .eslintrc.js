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
    sourceType: "script",
  },
  rules: {},
};
