const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  const bodyTag = document.querySelector("body");
  const buttonClick = document.querySelector("button");
  
  function buttonHandler() {
    const chosenColor1 = colors[Math.floor(Math.random() * 10)];
    const chosenColor2 = colors[Math.floor(Math.random() * 10)];
    bodyTag.style = `background : linear-gradient(45deg, ${chosenColor1}, ${chosenColor2})`;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient
  }
  
  buttonClick.addEventListener("click", buttonHandler);
  