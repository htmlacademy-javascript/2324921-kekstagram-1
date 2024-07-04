import {NAMES, AVATAR_COUNT, COMMENTS_STROKES} from './data.js';
import {getRandomInteger, getRandomArrayElements} from './util.js';
import {generateCommentId} from './generator-id/create-generator-index.js';

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElements(COMMENTS_STROKES)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElements(NAMES),
});

export {createMessage, createComment};
