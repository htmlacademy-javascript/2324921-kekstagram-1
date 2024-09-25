import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const hideMessage = () => {
  document.querySelector('.message').remove();
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
}

const messageTypeToTemplate = {
  success: successTemplate,
  error: errorTemplate,
};

const showMessage = (type) => {
  const messageElement = messageTypeToTemplate[type].cloneNode(true);
  messageElement.querySelector(`.${type}__button`);
  messageElement.addEventListener('click', () => {
    hideMessage();
  });
  messageElement.addEventListener('click', (evt) => {
    if (evt.target === messageElement) {
      hideMessage();
    }
  });
  document.body.appendChild(messageElement);
  document.addEventListener('keydown', onDocumentKeydown);
};

export { showMessage };
