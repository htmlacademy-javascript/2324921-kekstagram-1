




// // ДЗ по 4му разделу
// const NAMES = [
//   'Иван',
//   'Дмитрий',
//   'Мария',
//   'Денис',
//   'Виктор',
//   'Юлия'
// ];

// const PICTURE_COUNT = 25;
// const AVATAR_COUNT = 6;
// const LIKE_MIN_COUNT = 15;
// const LIKE_MAX_COUNT = 200;
// const COMMENT_COUNT = 20; // Не совсем понятно откуда взяли это кол-во чисел
// const COMMENTS_STROKES = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
// ];

// const DESCRIPTIONS = [
//   'Наконец-то мы на каникулах. Урааа!',
//   'Хочется отдохнуть и отвлечься от всех дел и суеты',
//   'Фотограф у нас так себе, хотя у него профессиональный фотик',
//   'Поиск хорошего фотографа нужен как можно быстрее, иначе мы останемся без красивых фоток и памяти',
// ];


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
