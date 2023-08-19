import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailData = document.querySelector('input');
const messageData = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const THROTTLE_INTERVAL = 500;

feedbackForm.addEventListener(
  'input',
  throttle(handleInput, THROTTLE_INTERVAL)
);

function handleInput(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  const object = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
}

function updateInput() {
  const localStorageString = localStorage.getItem(LOCALSTORAGE_KEY);
  const localStorageObject = JSON.parse(localStorageString);

  if (localStorageObject === null) {
    return;
  } else {
    emailData.value = localStorageObject.email;
    messageData.textContent = localStorageObject.message;
  }
}

updateInput();
feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
  emailData.value = '';
  messageData.textContent = '';
}
