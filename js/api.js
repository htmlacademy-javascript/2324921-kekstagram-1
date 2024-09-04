// const getData = (onSuccess) => {
//   fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
//     .then((response) => response.json())
//     .then((form) => {
//       onSuccess(form);
//     });
// };

// const sendData = (onSuccess, onFail, body) => {

//   fetch(
//     'https://28.javascript.htmlacademy.pro/kekstagram',
//     {
//       method: 'POST',
//       body
//     },
//   )
//     .then((response) => {
//       if (response.ok) {
//         onSuccess();
//       } else {
//         onFail('Не удалось отправить форму. Попробуйте ещё раз');
//       }
//     })
//     .catch(() => {
//       onFail('Не удалось отправить форму. Попробуйте ещё раз');
//     });
// };


const getData = () => fetch(
  'https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json());

const sendData = (body) => fetch(
  'https://28.javascript.htmlacademy.pro/kekstagram',
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  })
  .catch(() => {
    throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
  });

export { getData, sendData };
