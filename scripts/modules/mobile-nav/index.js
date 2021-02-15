import $$ from "@utilities/selectors";

function toggleMobileMenu() {
  this.classList.toggle("menu-toggle-active");
  $$.mobileNav.classList.toggle("menu-visible");
  $$.wrapper.classList.toggle("menu-visible");

  // set aria-expanded attribute on menu toggle button
  if (this.getAttribute("aria-expanded") === "false") {
    this.setAttribute("aria-expanded", "true");
  } else {
    this.setAttribute("aria-expanded", "false");
  }
}

const MobileNav = (function MobileNav() {
  $$.mobileNavToggle.addEventListener("click", toggleMobileMenu);
})();

export default MobileNav;
