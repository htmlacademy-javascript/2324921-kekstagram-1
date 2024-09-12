import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const hideMessage = () => {
  document.querySelector('.message').remove();
  document.removeEventListener('keydown', onDocumentKeydown);
};

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  successMessage.querySelector('.success__button').addEventListener('click', () => {
    hideMessage();
  });
  successMessage.addEventListener('click', (evt) => {
    if (evt.target === successMessage) {
      hideMessage();
    }
  });
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
}

const showErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  errorMessage.querySelector('.error__button').addEventListener('click', () => {
    hideMessage();
  });

  errorMessage.addEventListener('click', (evt) => {
    if (evt.target === errorMessage) {
      hideMessage();
    }
  });
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', onDocumentKeydown);
};

export { showSuccessMessage, showErrorMessage };
