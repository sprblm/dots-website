const FilterBar = (function setupFilterbar() {
  const filterbarInput = document.getElementById("filterbar-input");
  const container = document.getElementById("pattern-listing-entries");
  const noResults = document.getElementById("pattern-listing-no-results");

  if (container == null) {
    console.log("no filterlist container");
    return;
  }

  function updateSearchResults() {
    const searchPhrase = filterbarInput.value.toLowerCase();
    const items = container.getElementsByTagName("a");

    let val;
    let numResults = 0;
    for (let i = 0; i < items.length; i += 1) {
      val = items[i].text.toLowerCase();
      if (val.includes(searchPhrase)) {
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
})();

export default FilterBar;
