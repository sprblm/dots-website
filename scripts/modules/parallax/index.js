import $$ from "@utilities/selectors";

function shiftParallax() {
  Array.from($$.parallax).forEach((layer) => {
    layer.style.setProperty("--parallax-shift", Math.random());
    layer.style.setProperty("visibility", "visible");
  });
}

window.onload = () => {
  shiftParallax();
};
