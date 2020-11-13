/*
  A simple ISO timestamp for Nunjucks
*/
function timestampFilter() {
  const timestamp = new Date();
  return `${timestamp.getFullYear()}-${
    timestamp.getMonth() + 1
  }-${timestamp.getDate()}`;
}

module.exports = timestampFilter;
