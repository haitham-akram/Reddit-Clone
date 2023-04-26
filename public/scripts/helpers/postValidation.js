/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const validation = (element, alerts, type) => {
  const elementRegex = /^[A-Za-z0-9\s\W]+$/;
  alerts.textContent = '';
  if (!elementRegex.test(element)) {
    alerts.textContent = `${type} field is required.`;
    alerts.classList.add('visible');
    return false;
  }
  alerts.classList.remove('visible');
  return true;
};
