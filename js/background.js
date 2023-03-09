const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImg = document.createElement("img");
const div = document.querySelector("div.container");
backgroundImg.src = `img/${chosenImage}`;
div.appendChild(backgroundImg);
// // appendChild(): 기장 뒤에 추가
// // prepend(): 가장 앞에 추가

// const backgroundImg = `url(img/${chosenImage})`;
// document.body.style.backgroundImage = backgroundImg;
