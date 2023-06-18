let counterValue = 0;
const value = document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
buttonDecrement.addEventListener('click', onDecrement);
buttonIncrement.addEventListener('click', onIncrement);
function onDecrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
function onIncrement() {
  counterValue += 1;
  value.textContent = counterValue;
}
