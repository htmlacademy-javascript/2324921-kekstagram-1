// import { COMMENTS_PER_PORTION } from './const.js';
// import { isEscapeKey } from './util.js';
import { renderThumbnails } from "./thumbnail";

const COMMENTS_PER_PORTION = 5;

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureDetails = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureSocialCaption = bigPicture.querySelector('.social__caption');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');
const container = document.querySelector('.big-picture');
// const commentCount = bigPicture.querySelector('.social__comment-count');
// const commentList = bigPicture.querySelector('.social__comments');
// const commentsLoader = bigPicture.querySelector('.comments-loader');

let commentsShown = 0;
// let comments = [];

const createComment = ({ avatar, name, message }) => {
  const comment = commentTemplate.cloneNode(true);
  const commentPicture = comment.querySelector('.social__picture');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"> <p class="social__text"></p>';
  comment.classList.add('social__comment');

  commentPicture.src = avatar;
  commentPicture.alt = name;
  comment.querySelector('.social__text').textContent = message;
  comment.dataset.commentId = id;

  return comment;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  // if (commentsShown >= comments.length) {
  //   // commentsLoader.classList.add('hidden');
  //   commentsShown = comments.length;
  // } else {
  //   // commentsLoader.classList.remove('hidden');
  // }

  const fragment = document.createDocumentFragment();
  bigPicture.forEach((social__comment) => {
    const comment = createComment(social__comment);
    fragment.append(comment);
  });
  container.append(fragment);
};

// const fragment = document.createDocumentFragment();
// for (let i = 0; i < commentsShown; i++) {
//   const commentElement = createComment(comments[i]);
//   fragment.append(commentElement);
// }
// commentList.innerHTML = '';
// commentList.append(fragment);
// commentCount.innerHTML = '${commentsShown}'; /** Добавить еще...но не совсем пойму что конкретно и для чего  */
// };

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
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
  renderComments(data.comments);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
