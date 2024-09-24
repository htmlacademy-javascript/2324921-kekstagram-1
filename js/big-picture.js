import { isEscapeKey } from './util.js';

const COMMENTS_PER_PORTION = 5;
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const bodyElement = document.body;
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureDetailsElement = bigPictureElement.querySelector('.big-picture__img img');
const bigPictureLikesElement = bigPictureElement.querySelector('.likes-count');
const bigPictureSocialCaptionElement = bigPictureElement.querySelector('.social__caption');
const cancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentListElement = bigPictureElement.querySelector('.social__comments');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const startingCommentsCountElement = bigPictureElement.querySelector('.starting-comments-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');

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
    commentsLoaderElement.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComments(comments[i]);
    fragment.append(commentElement);
  }

  commentListElement.innerHTML = '';
  commentListElement.append(fragment);
  startingCommentsCountElement.textContent = commentsShown;
  commentsCountElement.textContent = comments.length;
};

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
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
  bigPictureDetailsElement.src = url;
  bigPictureDetailsElement.alt = description;
  bigPictureLikesElement.textContent = likes;
  bigPictureSocialCaptionElement.textContent = description;
};

const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoaderElement.classList.add('hidden');
  commentCountElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  commentListElement.innerHTML = '';
  comments = data.comments;
  commentsShown = 0;
  renderComments();
};

commentsLoaderElement.addEventListener('click', () => {
  renderComments();
});

cancelButtonElement.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
