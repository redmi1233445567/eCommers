const menuIcon = document.querySelector("nav .menu-icon");
const navMenu = document.querySelector("nav .menu");
const closeMenuIcon = document.querySelector("nav .menu .menu-header i");
const allSmallLinksHeaders = document.querySelectorAll(
  "footer .footer-links-small .group .group-header"
);
const allLinksUls = document.querySelectorAll(
  "footer .footer-links-small .group ul"
);

menuIcon.addEventListener("click", () => {
  navMenu.classList.add("show");
});
closeMenuIcon.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

allSmallLinksHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // Toggle hidden class on icons
    const minusIcon = document.querySelector(
      `.footer-links-small .group #${header.id} .fa-minus`
    );
    const plusIcon = document.querySelector(
      `.footer-links-small .group #${header.id} .fa-plus`
    );
    console.log(header.id);
    plusIcon.classList.toggle("hidden");
    minusIcon.classList.toggle("hidden");

    // Toggle show class on ul
    allLinksUls.forEach((ul) => {
      if (ul.dataset.target === header.id) {
        ul.classList.toggle("show");
      }
    });
  });
});
