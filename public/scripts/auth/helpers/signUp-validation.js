/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const usernameValidation = (username) => {
  const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
  usernameAlert.textContent = '';
  if (!usernameRegex.test(username)) {
    usernameAlert.style = 'font-size : 14px;';
    usernameAlert.textContent = 'Must contain only letters (both upper and lowercase), numbers and Must be between 3 and 20 characters long.';
    usernameAlert.classList.add('visible');
    return false;
  }
  usernameAlert.classList.remove('visible');
  return true;
};
const emailValidation = (email) => {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  emailAlert.textContent = '';
  if (!emailRegex.test(email)) {
    emailAlert.textContent = 'Email should be a valid email.';
    emailAlert.classList.add('visible');
    return false;
  }
  emailAlert.classList.remove('visible');
  return true;
};
const passwordValidation = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,100}$/;
  alertPassword.textContent = '';
  if (!passwordRegex.test(password)) {
    alertPassword.classList.add('visible');
    alertPassword.style = 'font-size : 14px;';
    alertPassword.textContent = 'Must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.';
    return false;
  }
  alertPassword.classList.remove('visible');
  return true;
};
const confirmPasswordValidation = (password, confirmPassword) => {
  confirmPasswordAlert.textContent = '';
  if (password !== confirmPassword) {
    confirmPasswordAlert.textContent = 'Passwords do not match';
    confirmPasswordAlert.classList.add('visible');
    return false;
  }
  confirmPasswordAlert.classList.remove('visible');
  return true;
};
