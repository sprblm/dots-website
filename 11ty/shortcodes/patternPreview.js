/* eslint-disable import/no-extraneous-dependencies */

/**
 * Render a thumbnail display of a given pattern object
 */
module.exports = (pattern) => `
<div class="pattern-preview">
  <a href="${pattern.data.page.url}">
    <img width="322" height="204" src="/images/illustrations/placeholder.svg" />
    <h3 class="mt-8 mb-4">${pattern.data.title}</h3>
    <p>${pattern.data.description || ""}</p>
  </a>
</div>
`;
