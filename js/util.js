const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const ALERT_SHOW_TIME = 5000;

// Эффекты и масштабирование для картинки
const imageElement = document.querySelector('.img-upload__preview img');

// Возвращает случайный элемент из массива
const getRandomArrayElements = (array) => array[getRandomInteger(0, array.length - 1)];

//Закрывает модальное окно при нажатии на клавишу "Esc"
const isEscapeKey = (evt) => evt.key === 'Escape';

// Сообщение о неудачной отправке формы
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// Функция  для устранения дребезга:
function debounce(callback, timeoutDelay = 500) {

  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

// Функция  для пропуска кадров:
function throttle(callback, delayBetweenFrames) {

  let lastTime = 0;

  return (...rest) => {

    const now = new Date();

    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export { getRandomInteger, getRandomArrayElements, isEscapeKey, imageElement, showAlert, debounce, throttle };
