const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Возвращает случайный элемент из массива
const getRandomArrayElements = (array) => array[getRandomInteger(0, array.length - 1)];

export { getRandomInteger, getRandomArrayElements };
