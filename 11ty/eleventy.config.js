/* eslint-disable import/no-extraneous-dependencies */
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

  // Configure 11ty to merge directory-level data with item-level data (e.g tags)
  eleventyConfig.setDataDeepMerge(true);

  const byTitle = (a, b) => {
    if (a.data.title == null) return -1;
    if (b.data.title == null) return 1;
    return a.data.title.localeCompare(b.data.title, "en");
  };

  const insertPatterns = (getPatternsByTopic) => (topic) => {
    // eslint-disable-next-line
    topic.data.patterns = getPatternsByTopic(topic.data.tagName);
    return topic;
  };

  eleventyConfig.addCollection("patternsByTitle", (collection) =>
    collection.getFilteredByTag("pattern").sort(byTitle)
  );
  eleventyConfig.addCollection("topicsByTitle", (collection) =>
    collection
      .getFilteredByTag("topic")
      .map(
        insertPatterns((topicTag) =>
          collection.getFilteredByTags("pattern", topicTag)
        )
      )
      .sort(byTitle)
  );

  // Shortcodes
  eleventyConfig.addShortcode(
    "patternPreview",
    (pattern) => `
    <div class="pattern-preview">
      <img width="322" height="204"  />
      <p>${pattern.data.title}</p>
    </div>
  `
  );

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("article", "layouts/article.njk");
  eleventyConfig.addLayoutAlias("timeline", "layouts/timeline.njk");
  eleventyConfig.addLayoutAlias("pattern", "layouts/pattern.njk");
  eleventyConfig.addLayoutAlias("topic", "layouts/topic.njk");

  // Include our static assets
  eleventyConfig.addPassthroughCopy({ "styles/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy({ public: "files" });
  eleventyConfig.addPassthroughCopy({ "public/robots.txt": "robots.txt" });

  const options = {
    html: true,
    breaks: false,
    linkify: false,
    typographer: true,
  };

  const markdownLib = markdownIt(options)
    .use(markdownItFootnote)
    .use(markdownItAnchor, { permalink: true, level: 1 });

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "site",
      output: "dist",
      includes: "_includes",
      data: "_globals",
    },
  };
};
