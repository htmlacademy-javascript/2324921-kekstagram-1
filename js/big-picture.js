import { isEscapeKey } from './util.js';

// const COMMENTS_PER_PORTION = 5;
// const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureDetails = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureSocialCaption = bigPicture.querySelector('.social__caption');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const renderPictureDetails = ({ url, likes, description }) => {
  bigPictureDetails.src = url;
  bigPictureDetails.alt = description;
  bigPictureLikes.textContent = likes;
  bigPictureSocialCaption.textContent = description;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
