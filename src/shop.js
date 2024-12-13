let productsBox = document.querySelector(".Products-Box");
let btOne = document.querySelector(".bt-one");
let btTwo = document.querySelector(".bt-two");
let btThree = document.querySelector(".bt-three");
let btNext = document.querySelector(".bt-Next");
let numberPageShow = document.querySelector(".Number-Page-Show");
let numberAllPage = document.querySelector(".Number-All-Page");
let show = document.querySelector(".show");

const data = [
  {
    page: 1,
    products: [
      {
        id: 1,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name1",
        proDiscription: "Sort Description1",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 2,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name2",
        proDiscription: "Sort Description2",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 3,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name3",
        proDiscription: "Sort Description3",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 4,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name4",
        proDiscription: "Sort Description4",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 5,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name5",
        proDiscription: "Sort Description5",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 6,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name6",
        proDiscription: "Sort Description6",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 7,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name7",
        proDiscription: "Sort Description7",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 8,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name8",
        proDiscription: "Sort Description8",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 9,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name9",
        proDiscription: "Sort Description9",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 10,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name10",
        proDiscription: "Sort Description10",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 11,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name11",
        proDiscription: "Sort Description11",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
    ],
  },
  {
    page: 2,
    products: [
      {
        id: 1,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 2,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 3,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 4,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 5,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 6,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 7,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 8,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 9,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 10,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 11,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
    ],
  },
  {
    page: 3,
    products: [
      {
        id: 1,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 2,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 3,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 4,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 5,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 6,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 7,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 8,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 9,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 10,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
      {
        id: 11,
        proImg: [
          "./img/image 1.png",
          "./img/image 3.png",
          "./img/image 4.png",
          "./img/image 1.png",
        ],
        proName: "Product name",
        proDiscription: "Sort Description",
        proPrice: {
          price: "Fix Price",
          dicount: "30%",
          oldPrice: "Rp 3.500.000",
        },
        like: false,
      },
    ],
  },
];

// maping the products from data

let pageNumper = 0;

function showData() {
  data[pageNumper].products.map((box) => {
    let begBox = document.createElement("div");
    begBox.className = "Beg-Box";
    begBox.style.cssText =
      "overflow: hidden; background-color: #F4F5F7; display: flex; width: 285px; height: 400px; position:relative; cursor: pointer; flex-direction: column; transition: all";
    // add to beg box
    let frontBox = document.createElement("div");
    // add to front box
    let secImg = document.createElement("div");
    secImg.style.cssText = "height: 65%; width: 100%; position:relative";
    // add to secImg
    // img
    let img = document.createElement("img");
    img.style.cssText = "max-height: 100%; width: 100%";
    img.src = box.proImg[pageNumper];
    // img
    // discount
    let discount = document.createElement("div");
    discount.textContent = box.proPrice.dicount;
    discount.style.cssText =
      "background-color: #dc2626; border-radius: 50%; padding: 6px; width: 50px; height: 50px; color: white; display: flex; justify-content: center; align-items: center; position: absolute; top: 20px; right: 20px";
    // discount
    secImg.append(img);
    secImg.append(discount);
    // end add to secImg
    let text = document.createElement("div");
    text.style.cssText = "padding: 10px";
    // add to text
    let name = document.createElement("h3");
    name.textContent = box.proName;
    name.style.cssText = "font-weight: bold; font-size: 26px";

    let discription = document.createElement("p");
    discription.textContent = box.proDiscription;
    discription.style.cssText = "font-size: 16px; color: #898989";

    let priceBox = document.createElement("div");
    priceBox.style.cssText = "justify-content: space-between; display: flex";
    // add to price box
    let price = document.createElement("p");
    price.textContent = box.proPrice.price;
    price.style.cssText = "font-weight: bold; font-size: 20px";

    let oldPrice = document.createElement("p");
    oldPrice.textContent = box.proPrice.oldPrice;
    oldPrice.style.cssText =
      "font-size: 16px; color: #898989; text-decoration: line-through;";

    priceBox.append(price);
    priceBox.append(oldPrice);
    // end add to price box

    text.append(name);
    text.append(discription);
    text.append(priceBox);
    //end add to text

    frontBox.append(secImg);
    frontBox.append(text);
    // end add to front box

    let back = document.createElement("div");
    back.className = "Back-Box";
    back.style.cssText =
      "background-color: black; opacity: 0.6; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; display: none; justify-content: center; align-items: center; flex-direction: column; gap: 20px";
    // add to back

    let addCard = document.createElement("div");
    addCard.textContent = "Add Card";
    addCard.style.cssText =
      "font-size: 16px; background-color: white; color: #B88E2F; padding: 10px 30px";
    addCard.addEventListener("click", () => {
      localStorage.setItem("singelPro", JSON.stringify(box));
      window.location = "./singel-pro.html";
    });

    let reactIconBox = document.createElement("div");
    reactIconBox.style.cssText =
      "display: flex; align-items: center; gap: 10px";
    // add to react icon box
    let shareBox = document.createElement("div");
    shareBox.style.cssText =
      "display: flex ; gap: 5px; align-items: center; color: white";
    let imgShare = document.createElement("img");
    imgShare.src = "./img/gridicons_share.png";
    let pShare = document.createElement("p");
    pShare.textContent = "Share";
    shareBox.append(imgShare);
    shareBox.append(pShare);
    reactIconBox.append(shareBox);

    let compareBox = document.createElement("div");
    compareBox.style.cssText =
      "display: flex ; gap: 5px; align-items: center; color: white";
    let imgCompare = document.createElement("img");
    imgCompare.src = "./img/Group.png";
    let pCompare = document.createElement("p");
    pCompare.textContent = "Compare";
    compareBox.append(imgCompare);
    compareBox.append(pCompare);
    reactIconBox.append(compareBox);

    let likeBox = document.createElement("div");
    likeBox.style.cssText =
      "display: flex ; gap: 5px; align-items: center; color: white";
    let imgLike = document.createElement("img");
    imgLike.src = "./img/Heart.png";
    let pLike = document.createElement("p");
    pLike.textContent = "Like";
    likeBox.append(imgLike);
    likeBox.append(pLike);
    reactIconBox.append(likeBox);
    // end add to react icon box

    back.append(addCard);
    back.append(reactIconBox);
    // end add to back

    begBox.append(frontBox);
    begBox.append(back);
    // end add to beg box

    productsBox.append(begBox);

    frontBox.addEventListener("mouseover", () => {
      back.style.display = "flex";
      begBox.style.transform = "translate(0, -10px)";
    });

    back.addEventListener("mouseleave", () => {
      back.style.display = "none";
      begBox.style.transform = "translate(0, 0)";
    });

    if (pageNumper > 1) {
      btNext.style.cursor = "no-drop";
    } else {
      btNext.style.cursor = "pointer";
    }

    numberAllPage.textContent =
      data[0].products.length +
      data[1].products.length +
      data[2].products.length;
    numberPageShow.textContent = `1 - ${data[pageNumper].products.length}`;
    show.textContent = data[pageNumper].products.length;
  });
}

showData();

btOne.addEventListener("click", () => {
  pageNumper = 0;
  productsBox.innerHTML = "";
  showData();
  btOne.style.backgroundColor = "#B88E2F";
  btTwo.style.backgroundColor = "#F9F1E7";
  btThree.style.backgroundColor = "#F9F1E7";
  window.scroll({
    top: 100,
    left: 0,
    behavior: "smooth",
  });
});

btTwo.addEventListener("click", () => {
  pageNumper = 1;
  productsBox.innerHTML = "";
  showData();
  btOne.style.backgroundColor = "#F9F1E7";
  btTwo.style.backgroundColor = "#B88E2F";
  btThree.style.backgroundColor = "#F9F1E7";
  window.scroll({
    top: 100,
    left: 0,
    behavior: "smooth",
  });
});

btThree.addEventListener("click", () => {
  pageNumper = 2;
  productsBox.innerHTML = "";
  showData();
  btOne.style.backgroundColor = "#F9F1E7";
  btTwo.style.backgroundColor = "#F9F1E7";
  btThree.style.backgroundColor = "#B88E2F";
  window.scroll({
    top: 100,
    left: 0,
    behavior: "smooth",
  });
});

btNext.addEventListener("click", () => {
  if (pageNumper < 2) {
    pageNumper = pageNumper + 1;
    productsBox.innerHTML = "";
    showData();
    btOne.style.backgroundColor = "#F9F1E7";
    if (pageNumper == 1) {
      btTwo.style.backgroundColor = "#B88E2F";
      btThree.style.backgroundColor = "#F9F1E7";
    } else {
      btThree.style.backgroundColor = "#B88E2F";
      btTwo.style.backgroundColor = "#F9F1E7";
    }
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  }
});
