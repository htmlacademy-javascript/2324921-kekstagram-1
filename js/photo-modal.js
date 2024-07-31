import { isEscapeKey } from './util.js';

const photoModalElement = document.querySelector('.big-picture');
const photoModalOpenElement = photoModalElement.querySelector('.hidden');

photoModalOpenElement.addEventListener('click', () => {
  photoModalElement.classList.remove('hidden');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      photoModalElement.classList.add('hidden');
    }
  });

});

