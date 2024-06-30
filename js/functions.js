// // Добавочный символ использован один раз
// имяФункции('1', 2, '0');      // '01'

// // Добавочный символ использован три раза
// имяФункции('1', 4, '0');      // '0001'

// // Добавочные символы обрезаны с конца
// имяФункции('q', 4, 'werty');  // 'werq'

// // Добавочные символы использованы полтора раза
// имяФункции('q', 4, 'we');     // 'wweq'

// // Добавочные символы не использованы, исходная строка не изменена
// имяФункции('qwerty', 4, '0'); // 'qwerty'

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }
  return pad.slice (0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}
console.log(myPadStart('1', 2, '0'));
