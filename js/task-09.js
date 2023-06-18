function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());
const bodyColor = document.querySelector('body');
const changeColor = document.querySelector('.change-color');
const resultColor = document.querySelector('.color');
changeColor.addEventListener('click', onChange);
function onChange() {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  resultColor.textContent = randomColor;
}
