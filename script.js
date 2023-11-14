const submitButton = document.querySelector('.button-submit');
const errorIcon = document.querySelector('.error-icon');
const errorText = document.querySelector('.error-text');
const inputEmail = document.querySelector('.input-email');
const email = document.querySelector('.email');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitButton.addEventListener('click', () => {
  const valid = emailRegex.test(email.value);

  if (valid) {
    errorIcon.classList.add('hidden');
    errorText.classList.add('hidden');
    inputEmail.classList.remove('border-error');

    alert(`Your Email: ${email.value}`);

    email.value = '';
    return
  }

  errorIcon.classList.remove('hidden');
  errorText.classList.remove('hidden');
  inputEmail.classList.add('border-error');
});