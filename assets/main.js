//Start  Handle Function addAndRemoveClassShow
const overlay = document.querySelector(".overlay");
const menuIcon = document.querySelectorAll("nav .menu-icon");
const navMenu = document.querySelector("nav .menu");
const closeMenuIcon = document.querySelector("nav .menu .menu-header svg");
const allSmallLinksHeaders = document.querySelectorAll(
  "footer .footer-links-small .group .group-header"
);
const allLinksUls = document.querySelectorAll(
  "footer .footer-links-small .group ul"
);
const shoppingCartIcon = document.querySelectorAll(".cart-icon");
const shoppingCart = document.querySelector(".shopping-cart");
const closeShoppingCartIcon = document.querySelector(
  ".shopping-cart .menu-header svg"
);

function controlAddandRemoveClassShow(openIcon, element, closeIcon) {
  openIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
      element.classList.add("show");
      overlay.classList.add("show");
    });
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
if (mySlider) {
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
      if (
        slide.dataset.target === dot.id &&
        slide.classList.contains("active")
      ) {
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
}

// ================================
// ================================
// ================================
// ================================
// Start Logic of Our Products Section
const products = [
  {
    id: 1,
    proImg: "../src/img/image 1.png",
    proName: "Product name1",
    proDiscription: "Sort Description1",
    proPrice: "3.500.000",
    newPrice: "2.500.000",
    proDiscount: 30,
    new: false,
    like: false,
  },
  {
    id: 2,
    proImg: "../src/img/image 1.png",
    proName: "Product name2",
    proDiscription: "Sort Description2",
    proPrice: "2.500.000",
    newPrice: "",
    new: false,
    like: false,
  },
  {
    id: 3,
    proImg: "../src/img/image 1.png",
    proName: "Product name3",
    proDiscription: "Sort Description3",
    proPrice: "7.000.000",
    newPrice: "3.500.000",
    proDiscount: 50,
    new: false,
    like: false,
  },
  {
    id: 4,
    proImg: "../src/img/image 1.png",
    proName: "Product name4",
    proDiscription: "Sort Description4",
    proPrice: "500.000",
    newPrice: "",
    new: true,
    like: false,
  },
  {
    id: 5,
    proImg: "../src/img/image 1.png",
    proName: "Product name5",
    proDiscription: "Sort Description5",
    proPrice: "1.500.000",
    newPrice: "",
    like: false,
  },
  {
    id: 6,
    proImg: "../src/img/image 1.png",
    proName: "Product name6",
    proDiscription: "Sort Description6",
    proPrice: "150.000",
    newPrice: "",
    new: true,
    like: false,
  },
  {
    id: 7,
    proImg: "../src/img/image 1.png",
    proName: "Product name7",
    proDiscription: "Sort Description7",
    proPrice: "7.000.000",
    newPrice: "3.500.000",
    proDiscount: 50,
    like: false,
  },
  {
    id: 8,
    proImg: "../src/img/image 1.png",
    proName: "Product name8",
    proDiscription: "Sort Description8",
    proPrice: "500.000",
    newPrice: "",
    new: true,
    like: false,
  },
];
const productsContainer = document.querySelector(
  ".our-products-section .the-products"
);
if (productsContainer) {
  products.forEach((product) => {
    let card = document.createElement("div");
    card.className = "card";
    let cardImage = document.createElement("div");
    cardImage.className = "card-image";
    let image = document.createElement("img");
    image.src = product.proImg;
    let theDiscount = document.createElement("span");
    let newProduct = document.createElement("span");
    let cardInfo = document.createElement("div");
    cardInfo.className = "card-info";
    let cardTitle = document.createElement("h4");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = product.proName;
    let cardDesc = document.createElement("p");
    cardDesc.className = "card-desc";
    cardDesc.innerHTML = product.proDiscription;
    let thePrice = document.createElement("div");
    thePrice.className = "the-price";
    let price = document.createElement("span");
    let oldPrice = document.createElement("del");
    price.className = "price";
    price.innerHTML = product.proPrice;
    if (product.proDiscount) {
      theDiscount.className = "the-discount";
      theDiscount.innerHTML = `${product.proDiscount}%`;
      price.innerHTML = product.newPrice;
      oldPrice.className = "old-price";
      oldPrice.innerHTML = product.proPrice;
    }
    if (product.new) {
      newProduct.className = "new-product";
      newProduct.innerHTML = `New`;
    }
    let addCardBtnAndActions = document.createElement("div");
    addCardBtnAndActions.className = "add-card-and-actions";
    addCardBtnAndActions.innerHTML = `
    <a class="add-to-card-btn my-btn my-light-btn" href="../src/Singel-Pro.html">Add To Card</a>
    <div class="actions">
      <div class="share">
        <i class="fa-solid fa-share-nodes"></i>
        <span>Share</span>
      </div>
      <div class="compare">
        <i class="fa-solid fa-right-left"></i>
        <span>Compare</span>
      </div>
      <div class="like" id="like-${product.id}">
        <svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.16668 3.5C4.94551 3.5 2.33334 6.08533 2.33334 9.275C2.33334 11.8498 3.35418 17.9608 13.4027
           24.1383C13.5827 24.2479 13.7893 24.3058 14 24.3058C14.2107 24.3058 14.4173 24.2479 14.5973
            24.1383C24.6458 17.9608 25.6667 11.8498 25.6667 9.275C25.6667 6.08533 23.0545 3.5 19.8333
             3.5C16.6122 3.5 14 7 14 7C14 7 11.3878 3.5 8.16668 3.5Z"
              stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Like</span>
      </div>
    </div>
    `;
    cardImage.append(image, theDiscount, newProduct);
    thePrice.append(price, oldPrice);
    cardInfo.append(cardTitle, cardDesc, thePrice);
    card.append(cardImage, cardInfo, addCardBtnAndActions);
    productsContainer.appendChild(card);
  });
}
// End Logic of Our Products Sectio
const likes = document.querySelectorAll(
  ".our-products-section .card .actions .like"
);

likes.forEach((like) => {
  like.addEventListener("click", () => {
    const heartLike = document.querySelector(
      `.our-products-section .card .actions #${like.id} svg`
    );
    heartLike.classList.toggle("active");
    console.log(heartLike);
  });
});
