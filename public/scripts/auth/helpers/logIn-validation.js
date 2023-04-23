/* eslint-disable no-unused-vars */
const alertPassword = document.getElementById('passwordAlert');
const emailAlert = document.getElementById('emailAlert');

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
