export class NumberToLCD {
  static convert(number) {
    switch (number) {
      case 0:
        return ' - \n| |\n| |\n| |\n - \n';
      case 1:
        return '  |\n  |\n  |\n  |\n  |\n';
      case 2:
        return ' - \n  |\n - \n|  \n - \n';
      default:
        return '';
    }
  }
}
