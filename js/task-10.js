function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const items = [];
const box = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
console.dir(controls);
controls.children[0].addEventListener('blur', onBuild);
let numberBuild = controls.children[0].min;
function onBuild(evt) {
  numberBuild = evt.currentTarget.value;
  console.log(evt.currentTarget.value);
  return numberBuild;
}
// const creatEl = document.querySelector('[data-create]');
// creatEl.addEventListener('click', onCreat);
// console.dir(creatEl);
let widthDiv = 30;
for (let i = 0; i < numberBuild; i += 1) {
  const divEl = document.createElement('div');
  divEl.style.width = `${widthDiv}px`;
  divEl.style.height = `${widthDiv}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  items.push(divEl);
  widthDiv += 10;
}

// console.log(items.join(''));
//

// const divEl = document.createElement('div');
// divEl.style.width = '30px';
// divEl.style.height = '30px';
// divEl.style.backgroundColor = getRandomHexColor();
const creatEl = document.querySelector('[data-create]');
creatEl.addEventListener('click', onCreat);
function onCreat() {
  box.append(...items);
}
