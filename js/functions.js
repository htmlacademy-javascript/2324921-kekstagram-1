// // Пример
// // Строка является палиндромом
// имяФункции('топот'); // true
// // Несмотря на разный регистр, тоже палиндром
// имяФункции('ДовОд'); // true
// // Это не палиндром
// имяФункции('Кекс');  // false


// let calculateSum = function (numberFirst, numberSecond) {
//   let sum = numberFirst + numberSecond;
//   return sum;
// };

// calculateSum(); // Вернёт NaN
// calculateSum(2); // Вернёт NaN
// calculateSum(2, 5); // Вернёт 7
// calculateSum(9, 5); // Вернёт 14


// ДЗ
palindrome('34543') === true
palindrome('1345431') === true
palindrome('787') === true
palindrome('56725') === false

let palindrome = function (str) {
  let result = str;
  return true;
}

console.log(palindrome('34543'));
palindrome('34543');



// function palindrome(str) {
//   let check = '';
//   for (let i = str.length; i > 0; --i) {
//     check += str[i];
//   }
//   if (str == check) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindrome('34543'));

