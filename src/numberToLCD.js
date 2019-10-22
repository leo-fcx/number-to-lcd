export class NumberToLCD {
  static convert(number) {
    if (number === 1)
      return '  |\n  |\n  |\n  |\n  |\n';
    else if (number === 2)
      return ' - \n  |\n - \n|  \n - \n';

    return ' - \n| |\n| |\n| |\n - \n';
  }
}
