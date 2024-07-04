// // Функция вернет число индексов из заданного диапозона
// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

// // Возвращает случайный элемент из массива
// const getRandomArrayElements = (array) => array[getRandomInteger(0, array.length - 1)];

// const createIdGenerator = () => {
//   let lastGeneratedId = 0;

//   return () => {
//     lastGeneratedId += 1;
//     return lastGeneratedId;
//   };
// };

// const generateCommentId = createIdGenerator();

// const createMessage = () =>
//   Array.from({ length: getRandomInteger(1, 2) }, () =>
//     getRandomArrayElements(COMMENTS_STROKES)
//   ).join(' ');

// const createComment = () => ({
//   id: generateCommentId(),
//   avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
//   message: createMessage(),
//   name: getRandomArrayElements(NAMES),
// });

// const createPicture = (index) => ({
//   id: index,
//   url: `photos/${index}.jpg`,
//   description: getRandomArrayElements(DESCRIPTIONS),
//   likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
//   comment: Array.from(
//     { length: getRandomInteger(0, COMMENT_COUNT) },
//     createComment
//   ),
// });

// const getPictures = () =>
//   Array.from({ length: PICTURE_COUNT }, (_, pictureIndex) =>
//     createPicture(pictureIndex + 1)
//   );

// getPictures();
