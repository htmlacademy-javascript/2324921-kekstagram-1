import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';
import { isEscapeKey } from './util.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Заполненное поле неверно';

const formElement = document.querySelector('.img-upload__form');
const fileFieldElement = document.querySelector('#upload-file');
const overlayElement = formElement.querySelector('.img-upload__overlay');
const submitButtonElement = formElement.querySelector('#upload-submit');
const bodyElement = document.body;
const cancelButtonElement = document.querySelector('#upload-cancel');
const hashtagFieldElement = document.querySelector('.text__hashtags');
const commentFieldElement = document.querySelector('.text__description');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const showModal = () => {
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  formElement.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () => document.activeElement === hashtagFieldElement || document.activeElement === commentFieldElement;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused() && !document.querySelector('.error')) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileFieldChange = () => {
  showModal();
};

// Проверка валидации хештега по написания и кол-ву символов
const isValidTag = (tag) => VALID_SYMBOLS.test(tag);
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagFieldElement,
  validateTags,
  TAG_ERROR_TEXT
);

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Загружаем...'
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = SubmitButtonText.IDLE;
};

const setOnFormSubmit = (cb) => {
  formElement.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(evt.target));
      unblockSubmitButton();
    }
  });
};

fileFieldElement.addEventListener('change', onFileFieldChange);
cancelButtonElement.addEventListener('click', onCancelButtonClick);

export { setOnFormSubmit, hideModal };
