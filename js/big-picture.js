import { isEscapeKey } from './util.js';

// const COMMENTS_PER_PORTION = 5;
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureDetails = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureSocialCaption = bigPicture.querySelector('.social__caption');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentList = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');


// let commentsShown = 0;
let comments = [];

const createComments = ({ avatar, name, message }) => {
  const comment = commentTemplate.cloneNode(true);
  const commentPicture = comment.querySelector('.social__picture');
  commentPicture.src = avatar;
  commentPicture.alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < comments.length; i++) {
    const commentElement = createComments(comments[i]);
    fragment.append(commentElement);
  }
  // commentList.innerHTML = '';
  commentList.append(fragment);
  // commentCount.innerHTML = '${commentsShown}'; /** Добавить еще...но не совсем пойму что конкретно и для чего  */
};

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
  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  commentList.innerHTML = '';
  comments = data.comments;
  renderComments();
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
