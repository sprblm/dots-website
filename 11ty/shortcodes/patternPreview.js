/* eslint-disable import/no-extraneous-dependencies */

/**
 * Render a thumbnail display of a given pattern object
 */
module.exports = (pattern) => `
<div class="pattern-preview">
  <a href="${pattern.data.page.url}">
    <img
      class="pattern-preview-illustration"
      src="${pattern.data.page.url}illustration.svg" />
    <h3 class="my-4">${pattern.data.title}</h3>
    <p class="leading-snug text" >${pattern.data.description || ""}</p>
  </a>
</div>
`;
