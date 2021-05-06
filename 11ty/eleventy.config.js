/* eslint-disable import/no-extraneous-dependencies */
const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItContainer = require("markdown-it-container");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItWikilinks = require("@f3rno/markdown-it-wikilinks");
const slugify = require("slugify");

const dateFilters = require("./filters/dates.js");
const timestampFilters = require("./filters/timestamp.js");
const patternPreview = require("./shortcodes/patternPreview.js");
const renderRelatedPatterns = require("./shortcodes/renderRelatedPatterns.js");
const patternListing = require("./shortcodes/patternListing.js");

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

  const byLastUpdated = (a, b) => {
    if (a.data.created == null) return -1;
    if (b.data.created == null) return 1;
    return a.data.created > b.data.created;
  };

  const insertPatterns = (getPatternsByTopic) => (topic) => {
    // eslint-disable-next-line
    topic.data.patterns = getPatternsByTopic(topic.data.slug).sort(
      byLastUpdated
    );
    return topic;
  };

  eleventyConfig.addCollection("patternsByTitle", (collection) =>
    collection.getFilteredByTag("pattern").sort(byTitle)
  );
  eleventyConfig.addCollection("patternsByLastUpdated", (collection) =>
    collection.getFilteredByTag("pattern").sort(byLastUpdated)
  );
  eleventyConfig.addCollection("topicsByTitle", (collection) =>
    collection
      .getFilteredByTag("topic")
      .map(
        insertPatterns((topicSlug) =>
          collection
            .getFilteredByTags("pattern")
            .filter((pattern) => pattern.data.topic === topicSlug)
        )
      )
      .sort(byTitle)
  );

  // Shortcodes
  eleventyConfig.addShortcode("patternPreview", patternPreview);
  eleventyConfig.addShortcode("renderRelatedPatterns", renderRelatedPatterns);
  eleventyConfig.addShortcode("patternListing", patternListing);

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
  eleventyConfig.addPassthroughCopy({ "public/zines": "zines" });

  // Add assets for individual patterns
  eleventyConfig.addPassthroughCopy("site/library/**/*.{svg,png,jpg,jpeg}");

  eleventyConfig.addPassthroughCopy("site/projects/**/*.{svg,png,jpg,jpeg}");

  const options = {
    html: true,
    breaks: false,
    linkify: false,
    typographer: true,
  };

  // Configure wikilinks to transfrom in the right way, i.e.:
  //     [[some link]] => href="/library/some-link"
  const wikilinksOptions = {
    generatePageNameFromLabel: (label) => slugify(label, { lower: true }),
    relativeBaseURL: "/library/",
    uriSuffix: "",
  };

  const markdownLib = markdownIt(options)
    .use(markdownItWikilinks(wikilinksOptions))
    .use(markdownItFootnote)
    .use(markdownItAnchor, { permalink: true, level: 1 })
    .use(markdownItContainer, "examples");

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
