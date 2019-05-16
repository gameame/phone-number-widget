function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

function getRandomInput() {
  const inputs = document.getElementsByTagName("input");
  const numElems = inputs.length;
  const chosen = getRandomInt(0, 10);
  return document.getElementsByTagName("input")[chosen];
}

function getRandomAction () {
  const inc = 1;  // +1 or -1
  return (input) => {
    input.value = (parseInt(input.value) + inc) % 10;
  }
}

function setHandler(button) {
  const firstInput = getRandomInput();
  const secondInput = getRandomInput();
  const firstInputAction = getRandomAction();
  const secondInputAction = getRandomAction();
  button.addEventListener("click", (ev) => {
    firstInputAction(firstInput);
    secondInputAction(secondInput);
  });
  button.addEventListener("mouseover", (ev) => {
    firstInput.classList.add("hint");
    secondInput.classList.add("hint");
  });
  button.addEventListener("mouseout", (ev) => {
    firstInput.classList.remove("hint");
    secondInput.classList.remove("hint");
  });
  console.log(firstInput);
  firstInput.addEventListener("mouseenter", (ev) => {
    button.classList.add("hint");
  });
  secondInput.addEventListener("mouseenter", (ev) => {
    button.classList.add("hint");
  });
  firstInput.addEventListener("mouseout", (ev) => {
    button.classList.remove("hint");
  });
  secondInput.addEventListener("mouseout", (ev) => {
    button.classList.remove("hint");
  });
}

(() => {
  console.log("init");
  const buttons = document.getElementsByTagName("button");
  for (var buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
    setHandler(buttons[buttonIndex]);
  }
})()
