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
}