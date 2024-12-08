//Start  Handle showing nav menu at small screens
const overlay = document.querySelector(".overlay");
const menuIcon = document.querySelector("nav .menu-icon");
const navMenu = document.querySelector("nav .menu");
const closeMenuIcon = document.querySelector("nav .menu .menu-header svg");
const allSmallLinksHeaders = document.querySelectorAll(
  "footer .footer-links-small .group .group-header"
);
const allLinksUls = document.querySelectorAll(
  "footer .footer-links-small .group ul"
);
const shoppingCartIcon = document.querySelector("nav .cart-icon svg");
const shoppingCart = document.querySelector(".shopping-cart");
const closeShoppingCartIcon = document.querySelector(
  ".shopping-cart .menu-header svg"
);

function controlAddandRemoveClassShow(openIcon, element, closeIcon) {
  openIcon.addEventListener("click", () => {
    element.classList.add("show");
    overlay.classList.add("show");
  });
  closeIcon.addEventListener("click", () => {
    element.classList.remove("show");
    overlay.classList.remove("show");
  });
}
controlAddandRemoveClassShow(menuIcon, navMenu, closeMenuIcon);
controlAddandRemoveClassShow(
  shoppingCartIcon,
  shoppingCart,
  closeShoppingCartIcon
);
//End  Handle showing nav menu at small screens
// =========================================
// =========================================
// =========================================
// Start Handle showing footer links at small screens
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
// End Handle showing footer links at small screens
// =========================================
// =========================================
// =========================================
// Start Handle showing advies content in checkout page
// const advices = document.querySelectorAll(".checkout-page .advices");
const advices = document.querySelectorAll(".checkout-page .advices .advice");
const advicesName = document.querySelectorAll(
  ".checkout-page .advices .advice .advice-name"
);
const advicesContent = document.querySelectorAll(
  ".checkout-page .advices .advice .advice-content"
);
advicesName.forEach((adviceName) => {
  adviceName.addEventListener("click", () => {
    advicesContent.forEach((adviceContent) => {
      if (adviceContent.dataset.target === adviceName.id) {
        const theAdvice = adviceName.parentElement;
        theAdvice.classList.toggle("active");
      }
    });
  });
});
// End Handle showing advies content in checkout page
