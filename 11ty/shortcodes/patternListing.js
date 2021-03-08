module.exports = (collection, sort) => {
  const items = collection.map(
    (item) =>
      `<a href="/patterns/${item.fileSlug.toLowerCase()}"><li>${
        item.data.title
      }</li></a>`
  );
  return `<section id="pattern-listing">
    <div class="filterbar">
      <input type="text" id="filterbar-input" placeholder="Search patterns..." />
      <div class="button-group">
        <a class="btn btn-sm${
          sort === "alphabetical" ? " btn-active" : ""
        }" href="/patterns/list">Alphabetical</a>
        <a class="btn btn-sm${
          sort === "lastUpdated" ? " btn-active" : ""
        }" href="/patterns/list/last-updated">Last Updated</a>
      </div>
    </div>
    <ul id="pattern-listing-entries">
      ${items.reduce((prev, cur) => prev.concat(cur), "")}
    </ul>
    <p id="pattern-listing-no-results">No patterns found for this search term.</p>
  </section>

  <script>
    function setupFilterbar() {
      var filterbarInput = document.getElementById("filterbar-input");
      var container = document.getElementById("pattern-listing-entries");
      var noResults = document.getElementById("pattern-listing-no-results");

      function updateSearchResults() {
        var searchPhrase = filterbarInput.value.toLowerCase();
        var items = container.getElementsByTagName("a");

        var val;
        var numResults = 0;
        for (i = 0; i < items.length; i++) {
          val = items[i].text.toLowerCase();
          if(val.includes(searchPhrase)) {
            items[i].style.display = "initial";
            numResults += 1;
          } else {
            items[i].style.display = "none";
          }
        }

        if (numResults === 0) {
          noResults.style.display = "block";
        } else {
          noResults.style.display = "none";
        }

      }

      updateSearchResults();
      filterbarInput.addEventListener("keyup", updateSearchResults);
    }
    setupFilterbar();
  </script>`;
};
