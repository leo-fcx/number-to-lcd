import { NumberToLCD } from './numberToLCD'
import assert from 'power-assert'

describe('Number to LCD', () => {
  it('should be defined', () => {
    assert(NumberToLCD.convert)
  });

  it('should convert 0 to LCD representation', () => {
    let expected = ' - \n| |\n| |\n| |\n - \n';
    assert(NumberToLCD.convert(0), expected);
  });
});