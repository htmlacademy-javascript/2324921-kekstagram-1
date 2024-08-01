// import { COMMENTS_PER_PORTION } from './const.js';
// import { isEscapeKey } from './util.js';

const COMMENTS_PER_PORTION = 5  /** Возможно эту перем. вынести в файл const.js*/

const bigPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');

let commentsShown = 0;
let comments = [];

const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement('li');
  const commentPicture = comment.querySelector('.social__picture');

  comment.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"> <p class="social__text"></p>'
  comment.classList.add('social__comment');

  commentPicture.src = avatar;
  commentPicture.alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = commenst.length;
  }
  else {
    commentsLoader.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

};

// const photoModalElement = document.querySelector('.big-picture');
// const photoModalOpenElement = photoModalElement.querySelector('.hidden');

// photoModalOpenElement.addEventListener('click', () => {
//   photoModalElement.classList.remove('hidden');
//   document.addEventListener('keydown', (evt) => {
//     if (isEscapeKey(evt)) {
//       evt.preventDefault();
//       photoModalElement.classList.add('hidden');
//     }
//   });

// });

