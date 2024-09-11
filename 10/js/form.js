import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Заполненное поле неверно';

const form = document.querySelector('.img-upload__form');
const fileField = document.querySelector('#upload-file');
const overlay = form.querySelector('.img-upload__overlay');
const submitButton = form.querySelector('#upload-submit');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  form.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === commentField;

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
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
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Загружаем...'
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(evt.target))
      unblockSubmitButton();
    }
  });
};

fileField.addEventListener('change', onFileFieldChange);
cancelButton.addEventListener('click', onCancelButtonClick);

export { setOnFormSubmit, hideModal };
