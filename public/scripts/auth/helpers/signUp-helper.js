/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-spread */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

// there are a feature i will delay it for now.
const usernames = ['david', 'david1', 'david2'];
const emails = ['david', 'david1', 'david2'];
const strength = {
  1: 'weak',
  2: 'medium',
  3: 'strong',
};

const usernameSpinner = document.getElementById('usernameSpinner');
const emailSpinner = document.getElementById('emailSpinner');
const usernameAlert = document.getElementById('alert');
const emailAlert = document.getElementById('emailAlert');
const confirmPasswordAlert = document.getElementById('confirmPasswordAlert');
const alertPassword = document.getElementById('passwordAlert');
const signUpButton = document.getElementById('signUpButton');
const isExists = (value, list, alert, text) => {
  const exists = list.some((u) => u === value);
  if (exists) {
    alert.textContent = text;
    alert.style = 'font-size: 18px;';
    alert.classList.add('visible');
  } else {
    alert.classList.remove('visible');
  }
};
const updateUi = (value, type, spinnerElement) => {
  spinnerElement.classList.remove('visible');
  if (type === 'username') {
    if (value) {
      isExists(value, usernames, usernameAlert, 'Username already exists');
    }
  } else if (type === 'email') {
    if (value) {
      isExists(value, emails, emailAlert, 'Email already exists');
    }
  }
};
const debounce = (callback, time) => {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      callback.apply(null, args);
    }, time);
  };
};

const getIndicator = (password, strengthValue) => {
  for (let index = 0; index < password.length; index++) {
    const char = password.charCodeAt(index);
    if (!strengthValue.upper && char >= 65 && char <= 90) {
      strengthValue.upper = true;
    } else if (!strengthValue.numbers && char >= 48 && char <= 57) {
      strengthValue.numbers = true;
    } else if (!strengthValue.lower && char >= 97 && char <= 122) {
      strengthValue.lower = true;
    }
  }

  let strengthIndicator = 0;

  for (const metric in strengthValue) {
    if (strengthValue[metric] === true) {
      strengthIndicator++;
    }
  }

  return strength[strengthIndicator] ?? '';
};

const getStrength = (password) => {
  const strengthValue = {
    upper: false,
    numbers: false,
    lower: false,
  };

  return getIndicator(password, strengthValue);
};
