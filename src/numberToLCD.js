export class NumberToLCD {
  static numbers = [
    [' - ', '| |', '| |', '| |', ' - '],
    ['  |', '  |', '  |', '  |', '  |'],
    [' - ', '  |', ' - ', '|  ', ' - '],
    [' - ', '  |', ' - ', '  |', ' - '],
    ['| |', '| |', ' - ', '  |', '  |'],
    [' - ', '|  ', ' - ', '  |', ' - '],
    [' - ', '|  ', ' - ', '| |', ' - '],
    [' - ', '  |', '  |', '  |', '  |'],
    [' - ', '| |', ' - ', '| |', ' - '],
    [' - ', '| |', ' - ', '  |', ' - ']
  ];

  static convertDigit(number) {
    const digit = NumberToLCD.numbers[number];

    if (digit)
      return digit.join('\n');

    return '';
  }

  static convert(number) {
    const result = ['', '', '', '', ''];
    const numbers = number.toString().split('');
    const digits = numbers.map((item) => {
      return NumberToLCD.numbers[parseInt(item)];
    });

    result.forEach((res, index) => {
      digits.forEach((digit) => {
        result[index] = result[index] + digit[index];
      });
    });

    return result.join('\n');
  }
}