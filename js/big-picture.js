// import { COMMENTS_PER_PORTION } from './const.js';
// import { isEscapeKey } from './util.js';

const COMMENTS_PER_PORTION = 5  /** Возможно эту перем. вынести в файл const.js и импортировать в этот модуль*/

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
  // const commentPicture = comment.querySelector('.social__picture');
  comment.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"> <p class="social__text"></p>'
  comment.classList.add('social__comment');

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
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
  commentList.innerHTML = '';
  commentList.append(fragment);
  commentCount.innerHTML = '${commentsShown}'; /** Добавить еще...но не совсем пойму что конкретно и для чего  */
};

const onCancelButtonClick = () => {
  showBigPicture();
};

const renderPictureDetails = ({ url, likes, description }) => {
  bigPicture.querySelector('big-picture__img img').src = url;
  bigPicture.querySelector('big-picture__img img').alt = description;
  bigPicture.querySelector('likes-count').textContent = likes;
  bigPicture.querySelector('social__caption').textContent = description;
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

