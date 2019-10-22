export class NumberToLCD {
  static convert(number) {
    const numbers = [
      [' - ', '| |', '| |', '| |', ' - '],
      ['  |', '  |', '  |', '  |', '  |'],
      [' - ', '  |', ' - ', '|  ', ' - '],
      [' - ', '  |', ' - ', '  |', ' - ']
    ];
    const digit = numbers[number];

    if (digit)
      return digit.join('\n');

    return '';
  }
}
