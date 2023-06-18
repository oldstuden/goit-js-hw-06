const inputActiv = document.querySelector('#name-input');
const spanActiv = document.querySelector('#name-output');
console.log(spanActiv.textContent);
inputActiv.addEventListener('input', onChange);
function onChange(evt) {
  spanActiv.textContent = evt.currentTarget.value;
  if (!evt.currentTarget.value) {
    spanActiv.textContent = 'Anonymos';
  }
}
