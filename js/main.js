const { name } = require("browser-sync");

const NAMES = [
  'Иван',
  'Дмитрий',
  'Мария',
  'Денис',
  'Виктор',
  'Юлия',
];

const PICTURE__COUNT = 25;
const AVATAR__COUNT = 6;
const LIKE__MIN__COUNT = 15;
const LIKE__MAX__COUNT = 200;
const COMMENT__COUNT = 20; // Не совсем понятно откуда взяли это кол-во чисел
const COMMENTS__STROKES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
'Наконец-то мы на каникулах. Урааа!',
'Хочется отдохнуть и отвлечься от всех дел и суеты',
'Фотограф у нас так себе, хотя у него профессиональный фотик',
'Поиск хорошего фотографа нужен как можно быстрее, иначе мы останемся без красивых фоток и памяти',
];


// Функция вернет число индексов из диапозона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElements = (array) => array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElements(COMMENTS__STROKES)
  ).join(' ')

const createComment = () => ({
  id: generateCommentId (),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR__COUNT)}.svg`,
  message: createMessage (),
  name: getRandomArrayElements(NAMES),
  });

  const createPicture = (index) => ({
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElements(DESCRIPTIONS),
    likes: getRandomInteger(LIKE__MIN__COUNT, LIKE__MAX__COUNT),
    comment: Array.from(
      { length: getRandomInteger(0, COMMENT__COUNT) },
    createComment
    ),
  });

const getPictures = () =>
  Array.from({ length: PICTURE__COUNT }, (_, pictureIndex) =>
  createPicture (pictureIndex + 1)
  );

getPictures();

