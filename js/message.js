import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success');

// const successInner = document.querySelector('.success__inner');
const successButton = document.querySelector('.success__button');
const errorButton = document.querySelector('.error__button');

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  successButton.addEventListener('click', showSuccessMessage);
  const fragment = document.createDocumentFragment();
  fragment.appendChild(successMessage);
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideSuccessMessage = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
  successButton.removeEventListener('click', showSuccessMessage);
};

const showErrorMessage = () => {
  const errorMessage = successTemplate.cloneNode(true);
  const fragment = document.createDocumentFragment();
  errorButton.addEventListener('click', showErrorMessage);
  fragment.appendChild(errorMessage);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideSuccessMessage();
  }
}

export { showSuccessMessage, showErrorMessage };
