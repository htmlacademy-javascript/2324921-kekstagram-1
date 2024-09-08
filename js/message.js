import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success');
const fragment = document.createDocumentFragment();

// const successInner = document.querySelector('.success__inner');
const successButton = document.querySelector('.success__button');
const errorButton = document.querySelector('.error__button');

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  successButton.addEventListener('click', showSuccessMessage);
  fragment.appendChild(successMessage);
};

const hideSuccessMessage = () => {
  // body.classList.add('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const showErrorMessage = () => {
  const errorMessage = successTemplate.cloneNode(true);
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
