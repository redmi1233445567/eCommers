let shortImg1 = document.querySelector(".Short-Img1");
let shortImg2 = document.querySelector(".Short-Img2");
let shortImg3 = document.querySelector(".Short-Img3");
let shortImg4 = document.querySelector(".Short-Img4");
let bigImg = document.querySelector(".Big-Img");
let proNameSingel = document.querySelector(".Pro-Name")
let proPriceSingel = document.querySelector(".Pro-Price");
let plus = document.querySelector(".plus");
let negative = document.querySelector(".negative");
let count = document.querySelector(".count");
let proudectNameLanding = document.querySelector(".Proudect-Name-Landing");


let data = JSON.parse(localStorage.singelPro);

proudectNameLanding.textContent = data.proName

shortImg1.src = data.proImg[0];
shortImg2.src = data.proImg[1];
shortImg3.src = data.proImg[2];
shortImg4.src = data.proImg[3];

bigImg.src = data.proImg[0];

shortImg1.addEventListener(("click"), () => {
    bigImg.src = data.proImg[0];
});

shortImg2.addEventListener(("click"), () => {
    bigImg.src = data.proImg[1];
});

shortImg3.addEventListener(("click"), () => {
    bigImg.src = data.proImg[2];
});

shortImg4.addEventListener(("click"), () => {
    bigImg.src = data.proImg[3];
});

proNameSingel.textContent = data.proName;
proPriceSingel.textContent = data.proPrice.price;


plus.addEventListener(("click"), ()=> {
    count.textContent = +count.textContent + 1;
});

negative.addEventListener(("click"), ()=> {
    count.textContent = +count.textContent - 1;
});