/* eslint-disable no-undef */
const bars = document.getElementById('bars');
const strengthDiv = document.getElementById('strength');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorAlert = document.getElementById('error');
usernameInput.addEventListener(
  'keyup',
  debounce((input) => {
    const { value } = input.target;
    updateUi(value, 'username', usernameSpinner);
  }, 600),
);
usernameInput.addEventListener('keydown', () => {
  usernameSpinner.classList.add('visible');
});

emailInput.addEventListener(
  'keyup',
  debounce((input) => {
    const { value } = input.target;
    updateUi(value, 'email', emailSpinner);
  }, 600),
);

emailInput.addEventListener('keydown', () => {
  emailSpinner.classList.add('visible');
});
passwordInput.addEventListener('keyup', () => {
  const { value: password } = passwordInput;
  const strengthText = getStrength(password);
  bars.classList = '';
  if (strengthText) {
    strengthDiv.classList.add('active');
    strengthDiv.innerText = `${strengthText} Password`;
    bars.classList.add(strengthText);
  } else {
    strengthDiv.classList.remove('active');
    strengthDiv.innerText = '';
  }
});
signUpButton.addEventListener('click', () => {
  signUpButton.disabled = true;
  const usernameValidate = usernameValidation(usernameInput.value);
  const emailValidate = emailValidation(emailInput.value);
  const passwordValidate = passwordValidation(passwordInput.value);
  const confirmPasswordValidate = confirmPasswordValidation(
    passwordInput.value,
    confirmPasswordInput.value,
  );
  if (
    usernameValidate
    && emailValidate
    && passwordValidate
    && confirmPasswordValidate
  ) {
    authFetch('/signUp', {
      username: usernameInput.value,
      password: passwordInput.value,
      email: emailInput.value,
    }).then((res) => {
      if (res.statusCode === 200) {
        window.location.href = '/home';
      } else if (res.error === true) {
        errorAlert.classList.add('visible');
        errorAlert.textContent = res.data.message;
      }
    });
  }
  signUpButton.disabled = false;
});
