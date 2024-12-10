//Start  Handle Function addAndRemoveClassShow
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
//End  Handle Function addAndRemoveClassShow
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
// ========================================
// ========================================
// ========================================
// Start Handling My Slider
// ===================================
// First define images that will be displayed
// ===================================
const sliderImages = [
  "../images/slider-image 1.png",
  "../images/slider-image 2.png",
  "../images/slider-image 2.png",
  "../images/slider-image 1.png",
];
const mySlider = document.querySelector(".my-slider");
const sliderSContainer = document.querySelector(
  ".my-slider .sliders-container"
);
const dots = document.querySelector(".my-slider .dots");
let currentSlide = 0;
let numberOfSlide = 1;
// ===================================
// Second make slider elements and classes
// ===================================
for (let image of sliderImages) {
  let slide = document.createElement("div");
  let slideImage = document.createElement("img");
  let slideContent = document.createElement("div");
  let slideDesc = document.createElement("div");
  let slideNumber = document.createElement("div");
  let theNumber = document.createElement("div");
  let space = document.createElement("div");
  let bedroom = document.createElement("div");
  let slideType = document.createElement("div");
  let nextArrow = document.createElement("div");
  let dot = document.createElement("div");
  let innerDot = document.createElement("span");
  dot.id = `slide-${numberOfSlide}`;
  dot.className = "dot";
  dot.appendChild(innerDot);
  dots.appendChild(dot);
  slide.className = "slide";
  slide.dataset.target = `slide-${numberOfSlide}`;
  slide.style.order = `${numberOfSlide}`;
  slideImage.src = image;
  slideImage.className = "slide-image";
  slideContent.className = "slide-content";
  slideDesc.className = "slide-desc";
  slideNumber.className = "slide-number";
  theNumber.className = "the-number";
  space.className = "space";
  slideType.className = "slide-type";
  nextArrow.className = "next-arrow";
  slideNumber.innerHTML = `0${numberOfSlide}`;
  bedroom.innerHTML = "Bed Room";
  slideType.innerHTML = "Inner Peace";
  slideNumber.append(theNumber, space, bedroom);
  slideDesc.append(slideNumber, slideType);
  slideContent.append(slideDesc, nextArrow);
  slide.append(slideImage, slideContent);
  sliderSContainer.append(slide);
  numberOfSlide++;
}
// ===================================
// Handle Dots Pagination
// ===================================
const slides = document.querySelectorAll(".my-slider .slide");
const sliderDots = document.querySelectorAll(".my-slider .dots .dot");
// ===================================
// Put class active on first slide by currentSlideVariable
// ===================================
function getActiveSlide(currentSlide) {
  slides[currentSlide].classList.add("active");
}
getActiveSlide(currentSlide);
sliderDots.forEach((dot) => {
  // put class active on current dot
  slides.forEach((slide) => {
    if (slide.dataset.target === dot.id && slide.classList.contains("active")) {
      dot.classList.add("active");
    }
  });

  dot.addEventListener("click", () => {
    // Link between current dot and slide
    slides.forEach((slide, i) => {
      if (slide.dataset.target === dot.id) {
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        slide.classList.add("active");
        currentSlide = i;
      }
    });
    sliderDots.forEach((dot) => {
      dot.classList.remove("active");
    });
    dot.classList.add("active");
  });
});
// ==============================
// Handle Next Arrow Paginater
// ==============================
const goNext = document.querySelector(".my-slider .right-arrow");
goNext.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  getActiveSlide(currentSlide);
  sliderDots.forEach((dot) => {
    dot.classList.remove("active");
    slides.forEach((slide) => {
      if (
        slide.dataset.target === dot.id &&
        slide.classList.contains("active")
      ) {
        dot.classList.add("active");
      }
    });
  });
});
// End Handling My Slider
// ================================
// ================================
// ================================
// ================================
