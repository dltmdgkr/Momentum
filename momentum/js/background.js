const images = ["멍.jpg", "멍멍.jpg", "멍멍멍.jpg"];
const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);