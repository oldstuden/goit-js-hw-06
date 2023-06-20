function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const items = [];
const box = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
const creatEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
let numberBuild;
creatEl.addEventListener('click', onCreat);
function onCreat() {
  numberBuild = controls.children[0].value;
  let widthDiv = 30;
  for (let i = 0; i < numberBuild; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${widthDiv}px`;
    divEl.style.height = `${widthDiv}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    items.push(divEl);
    widthDiv += 10;
  }
  box.append(...items);
}
destroyEl.addEventListener('click', () => {
  box.innerHTML = ''; // box.remove();
});
