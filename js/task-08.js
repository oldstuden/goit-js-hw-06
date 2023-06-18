const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (!email.value || !password.value) {
    const message = 'Заповніть всі поля, будь ласка';
    alert(message);
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }
  formLogin.reset();
}
