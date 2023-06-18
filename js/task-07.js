const controlSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
controlSize.addEventListener('input', onSize);
function onSize() {
  textSize.style.fontSize = `${controlSize.value}px`;
}
