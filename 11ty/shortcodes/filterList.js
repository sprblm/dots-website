module.exports = (collection) => {
  const items = collection.map(
    (item) =>
      `<a href="/patterns/${item.fileSlug.toLowerCase()}"><li>${
        item.data.title
      }</li></a>`
  );
  return `<section id="filterlist">
    <div class="filterbar">
      <input type="text" id="filterlist-input" />
      <div class="button-group">
        <a href="?alphabetical">Alphabetical</a>
        <a href="?lastUpdated">Last Updated</a>
      </div>
    </div>
    <ul id="filterlist-results">
      ${items.reduce((prev, cur) => prev.concat(cur), "")}
    </ul>
  </section>

  <script>
    function filterList() {
      var searchInput = document.getElementById("filterlist-input");
      var container = document.getElementById("filterlist-results");

      function updateSearchResults() {
        var searchPhrase = searchInput.value.toLowerCase();
        var items = container.getElementsByTagName("a");

        var val;
        for (i = 0; i < items.length; i++) {
          val = items[i].text.toLowerCase();
          if(val.includes(searchPhrase)) {
            items[i].style.display = "";
          } else {
            items[i].style.display = "none";
          }
        }

      }

      updateSearchResults();
      searchInput.addEventListener("keyup", updateSearchResults);
    }
    filterList();
  </script>`;
};
