import { isEscapeKey } from './util.js';

const succesButton = document.querySelector('.success__button');
const errorButton = document.querySelector('.error__button');

const showSuccesMessage = () => {
  isEscapeKey();
};
const showErrorMessage = () => {

};

succesButton.addEventListener('click', showSuccesMessage);
errorButton.addEventListener('click', showErrorMessage);

export { showSuccesMessage, showErrorMessage };
