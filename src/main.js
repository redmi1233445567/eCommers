const menuIcon = document.querySelector("nav .menu-icon");
const navMenu = document.querySelector("nav .menu");
const closeMenuIcon = document.querySelector("nav .menu .menu-header i");

menuIcon.addEventListener("click", () => {
  navMenu.classList.add("show");
});
closeMenuIcon.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
