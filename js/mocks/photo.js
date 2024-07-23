import { getRandomArrayElements, getRandomInteger } from '../util.js';
import { DESCRIPTIONS, LIKE_MIN_COUNT, LIKE_MAX_COUNT, COMMENT_COUNT, PICTURE_COUNT } from './const.js';
import { createComment } from './comment.js';

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElements(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment
  ),
});

const getPictures = () =>
  Array.from({ length: PICTURE_COUNT }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export { getPictures };
