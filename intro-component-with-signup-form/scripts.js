const form = document.querySelector('form');
const email = document.querySelector('#email');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const password = document.querySelector('#password');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInput({
    input: firstName,
    errorType: '.firstname-error',
    iconError: '.firstname'
  });
  validateInput({
    input: lastName,
    errorType: '.lastname-error',
    iconError: '.lastname'
  });
  validateInput({
    input: password,
    errorType: '.password-error',
    iconError: '.password'
  });
  validateEmail({ input: email, iconError: '.email' });
});

function validateInput({ input, errorType, iconError }) {
  if (!input.value) {
    showError({ input, errorType, iconError });
  } else {
    hideError({ input, errorType, iconError });
  }
}

function validateEmail({ input, iconError }) {
  if (!isValid(input.value)) {
    showError({ input, errorType: '.email-error', iconError });
  } else {
    hideError({ input, errorType: '.email-error', iconError });
  }
}

function showError({ input, errorType, iconError }) {
  const errorMsg = document.querySelector(errorType);
  const icon = document.querySelector(iconError);

  errorMsg.style.display = 'block';
  icon.style.display = 'block';
  input.classList.add('input-error');
}

function hideError({ input, errorType, iconError }) {
  const errorMsg = document.querySelector(errorType);
  const icon = document.querySelector(iconError);

  errorMsg.style.display = 'none';
  icon.style.display = 'none';
  input.classList.remove('input-error');
}

function isValid(email) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return regex.test(email);
}
