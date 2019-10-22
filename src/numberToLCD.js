export class NumberToLCD {
  static convert(number) {
    const numbers = [
      [' - ', '| |', '| |', '| |', ' - '],
      ['  |', '  |', '  |', '  |', '  |'],
      [' - ', '  |', ' - ', '|  ', ' - '],
    ];

    switch (number) {
      case 0:
        return numbers[0].join('\n');
      case 1:
        return numbers[1].join('\n');
      case 2:
        return numbers[2].join('\n');
      default:
        return '';
    }
  }
}
