// background.js

const images = ["0.jpeg", "1.jpeg", "2.jpeg"]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); // element를 만들어주는 createElement

bgImage.src = `img/${chosenImage}`; // 생성한 element의 src 속성 사용

document.body.appendChild(bgImage); // appendChild() : body에 html을 추가