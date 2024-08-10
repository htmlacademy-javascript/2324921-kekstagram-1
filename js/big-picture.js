import { isEscapeKey } from './util.js';

const COMMENTS_PER_PORTION = 5;
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
const startingCommentsCount = bigPicture.querySelector('.starting-comments-count');
const commentsCount = bigPicture.querySelector('.comments-count');

let commentsShown = 0;
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
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComments(comments[i]);
    fragment.append(commentElement);
  }

  commentList.innerHTML = '';
  commentList.append(fragment);
  startingCommentsCount.textContent = commentsShown;
  commentsCount.textContent = comments.length;
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
  commentCount.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  commentList.innerHTML = '';
  comments = data.comments;
  commentsShown = 0;
  renderComments();
};

commentsLoader.addEventListener('click', () => {
  renderComments();
});

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
