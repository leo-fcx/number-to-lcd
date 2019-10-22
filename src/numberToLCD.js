export class NumberToLCD {
  static convert(number) {
    if (number)
      return '  |\n  |\n  |\n  |\n  |\n';

    return ' - \n| |\n| |\n| |\n - \n';
  }
}
