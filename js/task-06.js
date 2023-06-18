const inputSymbol = document.querySelector('#validation-input');
inputSymbol.addEventListener('blur', onValid);
const dataLength = inputSymbol.dataset.length;
function onValid(evt) {
  const evtLength = evt.currentTarget.value.length;
  if (evtLength == dataLength) {
    inputSymbol.classList.add('valid');
    inputSymbol.classList.remove('invalid');
  } else {
    inputSymbol.classList.add('invalid');
    inputSymbol.classList.remove('valid');
  }
}
