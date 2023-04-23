/* eslint-disable no-undef */
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorAlert = document.getElementById('error');
const logInButton = document.getElementById('logInButton');

logInButton.addEventListener('click', () => {
  logInButton.disabled = true;
  const emailValidate = emailValidation(emailInput.value);
  const passwordValidate = passwordValidation(passwordInput.value);

  if (emailValidate && passwordValidate) {
    authFetch('/signIn', {
      email: emailInput.value,
      password: passwordInput.value,
    }).then((res) => {
      if (res.statusCode === 200) {
        window.location.href = '/home';
      } else if (res.error === true) {
        errorAlert.classList.add('visible');
        errorAlert.textContent = res.data.message;
      }
    });
  }
  logInButton.disabled = false;
});
