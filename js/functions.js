// // // Пример
// // Строка является палиндромом
// имяФункции('топот'); // true
// // Несмотря на разный регистр, тоже палиндром
// имяФункции('ДовОд'); // true
// // Это не палиндром
// имяФункции('Кекс');  // false


//                     ====== Полиндром =======

// //   -- 1-й Вариант. --
// const isPalindrome = (string) => {
//   const tempString = string
//     .toLowerCase()
//     .toUpperCase()
//     .replaceAll('', ' ');
//   let reverseString = '';
//   for (let i = tempString.length - 1; i >= 0; i--) {
//     reverseString += tempString.at(i);
//   }
//   return reverseString === tempString;
// };

// console.log(isPalindrome('Довд'));

// isPalindrome('КоМк')

// -- 2-й Вариант. --
const isPalindrome = (string) => {
  const tempString = string
    .toLowerCase()
    .toUpperCase()
    .replaceAll(' ', '');
  const reverseString = tempString.split('').reverse().join('');
  return reverseString === tempString;
};

isPalindrome('КоМк');

// ============   Функция для проверки длины строки    ==============

// Cтрока короче 20 символов
// имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
// имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
// имяФункции('проверяемая строка', 10); // false


// // -- 1-й Враиант. --
// const isLessOrEqual = (string, length) => {
//   if (string.length <= length) {
//     return true;
//   }
//   return false;
// };

// isLessOrEqual('проверяемая строка', 18);


// console.log(isLessOrEqual);
// isLessOrEqual('проверяемая строка', 10);

// -- 2-й Вариант. --
// const checkStringLength = (string, length) => {
//     return string.length <= length;
// }
// checkStringLength('проверяемая строка', 18);

//  -- 3-й Вариант (Самый локаничный и читаемый) --
const checkStringLength = (string, length) => string.length <= length;
checkStringLength('проверяемая строка', 18);


// ===============  Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9    ===============
//  и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

// имяФункции('2023 год');            // 2023
// имяФункции('ECMAScript 2022');     // 2022
// имяФункции('1 кефир, 0.5 батона'); // 105
// имяФункции('агент 007');           // 7
// имяФункции('а я томат');           // NaN


// -- 1-й Вариант. --
// const extractNumber = (string) => {
//   if (typeof string === 'number') {
//       return string;
//   }
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//       if (!Number.isNaN(parseInt(string.at(i), 10))) {
//         result += string.at(i)
//       }
//   }
//   return parseInt(result, 10);
// }
// console.log(extractNumber ('ECMAScript 2022'));

//  -- 2-й Вариант. --
// const extractNumber = (string) => {
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     if (!Number.isNaN(parseInt(string.at(i), 10))) {
//       result += string.at(i);
//     }
//   }
//   return parseInt(result, 10);
// };
// extractNumber('1 кефир, 0.5 батона');

// -- 3-й Вариант --
const extractNumber = (string) => {
  const digits = string.match(/\d+/g);
  return digits ? parseInt(digits.join(''), 10) : NaN;
};

extractNumber('1 кефир, 0.5 батона');
