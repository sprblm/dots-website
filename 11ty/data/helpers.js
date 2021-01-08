module.exports = {
  // environment helper
  environment: process.env.ELEVENTY_ENV,
  is_netlify_production: process.env.CONTEXT === "production",
};
