const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Заполненное поле неверно';

const form = document.querySelector('.img-upload__form');
const fileField = document.querySelector('#upload-file');
const Overlay = form.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

imgUploadForm.addEventListener('submit', () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__form',
  errorClass: 'img-upload__form--invalid',
  successClass: 'img-upload__form--valid',
  errorTextParent: 'img-upload__form',
  errorTextTag: 'span',
  errorTextClass: 'fimg-upload__form-error'
});

pristine.addValidator(imgUploadForm.querySelector('#nickname'), validateNickname);

// Проверка валидации формы
imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
