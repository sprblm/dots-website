/* eslint-disable import/no-extraneous-dependencies */
const slugify = require("slugify");

/**
 * Render links for a list of pattern names
 *
 * Used in the pattern detail page sidebar
 */
module.exports = (patterns, collection) => {
  const patternExists = (patternName) =>
    collection.filter(
      (p) =>
        slugify(p.data.title, { lower: true }) ===
        slugify(patternName, { lower: true })
    ).length !== 0;

  const patternList = patterns
    .sort()
    .map((p) =>
      patternExists(p)
        ? `
  <li class="pattern-related-pattern">
    <span>${p}</span>
    <a class="link-reference" href="/library/${slugify(p, {
      lower: true,
    })}">View</a>
  </li>`
        : `
  <li class="pattern-related-pattern">
      <span>${p}</span>
      <a class="link-reference" href="/library/${slugify(p, {
        lower: true,
      })}">Missing pattern</a>
  </li>`
    )
    .reduce((prev, cur) => prev + cur, "");
  return `<ul class="pattern-related-patterns">${patternList}</ul>`;
};
