const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Эффекты и масштабирование для картинки
const imageElement = document.querySelector('.img-upload__preview');

// Возвращает случайный элемент из массива
const getRandomArrayElements = (array) => array[getRandomInteger(0, array.length - 1)];

//Закрывает модальное окно при нажатии на клавишу "Esc"
const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomInteger, getRandomArrayElements, isEscapeKey, imageElement };
