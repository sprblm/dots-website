/* eslint-disable import/no-extraneous-dependencies */
const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItWikilinks = require("@f3rno/markdown-it-wikilinks");
const slugify = require("slugify");

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
    topic.data.patterns = getPatternsByTopic(topic.data.slug);
    return topic;
  };

  eleventyConfig.addCollection("patternsByTitle", (collection) =>
    collection.getFilteredByTag("pattern").sort(byTitle)
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

  /**
   * Render a thumbnail display of a given pattern object
   */
  eleventyConfig.addShortcode(
    "patternPreview",
    (pattern) => `
    <div class="pattern-preview">
      <a href="${pattern.data.page.url}">
        <img width="322" height="204" src="/images/illustrations/placeholder.svg" />
        <h3 class="mt-8 mb-4">${pattern.data.title}</h3>
        <p>${pattern.data.description || ""}</p>
      </a>
    </div>
  `
  );

  /**
   * Render links for a list of pattern names
   *
   * Used in the pattern detail page sidebar
   */
  eleventyConfig.addShortcode("renderRelatedPatterns", (patterns, byTitle) => {
    // console.log(eleventyConfig);

    // console.log(byTitle);
    const patternExists = (name) =>
      byTitle.filter((p) => p.fileSlug === slugify(name)).length !== 0;

    const patternList = patterns
      .sort()
      .map((p) =>
        patternExists(p)
          ? `
      <li class="pattern-related-pattern">
        <span>${p}</span>
        <a class="link-reference" href="/patterns/${slugify(p, {
          lower: true,
        })}">View</a>
      </li>`
          : `
      <li class="pattern-related-pattern">
          <span>${p}</span>
          <a class="link-reference" href="https://github.com/simplysecure/dots-patterns/issues/new?assignees=&labels=pattern-submission&template=pattern-proposal-template.md&title=%5Bsubmission%5D">Help define this missing pattern</a>
      </li>`
      )
      .reduce((prev, cur) => prev + cur, "");
    return `<ul class="pattern-related-patterns">${patternList}</ul>`;
  });

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

  // Add assets for individual patterns
  eleventyConfig.addPassthroughCopy("site/patterns/**/*.{svg,png}");

  const options = {
    html: true,
    breaks: false,
    linkify: false,
    typographer: true,
  };

  // Configure wikilinks to transfrom in the right way, i.e.:
  //     [[some link]] => href="/patterns/some-link"
  const wikilinksOptions = {
    generatePageNameFromLabel: (label) => slugify(label, { lower: true }),
    relativeBaseURL: "/patterns/",
    uriSuffix: "",
  };

  const markdownLib = markdownIt(options)
    .use(markdownItWikilinks(wikilinksOptions))
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
