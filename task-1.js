const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const bodyRef = document.querySelector("body");
const startButtonRef = document.querySelector("[data-action = start ]");
const stopButtonRef = document.querySelector("[data-action = stop ]");
const CHANGE_COLORS_DELAY = 1000;

let colorSwitch = null;

startButtonRef.addEventListener("click", onStartButtonClick);
stopButtonRef.addEventListener("click", onStopButtonClick);



const randomColorIndex = () => randomIntegerFromInterval(0, colors.length - 1);

function onStartButtonClick() {
  colorSwitch = setInterval(() => {
    bodyRef.style.backgroundColor = colors[randomColorIndex()];
  }, CHANGE_COLORS_DELAY);

  startButtonRef.setAttribute("disabled", "disabled");
}

function onStopButtonClick() {
  clearInterval(colorSwitch);
  startButtonRef.removeAttribute("disabled");
}



//функция randomIntegerFromInterval
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};