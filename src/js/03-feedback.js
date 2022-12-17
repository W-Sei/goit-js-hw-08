import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const FORM_LOCAL_KEY = 'feedback-form-state';

feedbackForm.addEventListener(
  'input',
  throttle(() => {
    const dataSaved = { email: email.value, message: message.value };
    localStorage.setItem(FORM_LOCAL_KEY, JSON.stringify(dataSaved));
  }, 500)
);

feedbackForm.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  feedbackForm.reset();
  localStorage.removeItem(FORM_LOCAL_KEY);
});

const load = key => {
  try {
    return localStorage.getItem(key) === null
      ? undefined
      : JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(FORM_LOCAL_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}
