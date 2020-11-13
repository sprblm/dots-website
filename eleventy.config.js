const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItAnchor = require("markdown-it-anchor");

const dateFilters = require("./filters/dates.js");
const timestampFilters = require("./filters/timestamp.js");

module.exports = (eleventyConfig) => {
  // Add a readable date formatter filter to Nunjucks
  eleventyConfig.addFilter("dateDisplay", dateFilters);

  // Add a HTML timestamp formatter filter to Nunjucks
  eleventyConfig.addFilter("htmlDateDisplay", timestampFilters);

  // Minify our HTML
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Collections
  const byTitle = (a, b) => a.data.title.localeCompare(b.data.title, "en");
  eleventyConfig.addCollection("patternsByTitle", (collection) =>
    collection.getFilteredByTag("pattern").sort(byTitle)
  );
  eleventyConfig.addCollection("topicsByTitle", (collection) =>
    collection.getFilteredByTag("topic").sort(byTitle)
  );

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("article", "layouts/article.njk");
  eleventyConfig.addLayoutAlias("timeline", "layouts/timeline.njk");
  eleventyConfig.addLayoutAlias("pattern", "layouts/pattern.njk");
  eleventyConfig.addLayoutAlias("topic", "layouts/topic.njk");

  // Include our static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy({ "resources/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy({ "resources/files": "files" });
  eleventyConfig.addPassthroughCopy("robots.txt");

  const options = {
    html: true,
    breaks: false,
    linkify: false,
    typographer: true,
  };

  const markdownLib = markdownIt(options)
    .use(markdownItFootnote)
    .use(markdownItAnchor, { permalink: true, level: 2 });

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "globals",
    },
  };
};
