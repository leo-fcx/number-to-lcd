import { NumberToLCD } from './numberToLCD'
import assert from 'power-assert'

describe('Number to LCD', () => {
  it('should be defined', () => {
    assert(NumberToLCD.convert)
  });

  it('should convert 0 to LCD representation', () => {
    let expected = ' - \n| |\n| |\n| |\n - \n';
    assert.equal(NumberToLCD.convert(0), expected);
  });

  it('should convert 1 to LCD representation', () => {
    let expected = '  |\n  |\n  |\n  |\n  |\n';
    assert.equal(NumberToLCD.convert(1), expected);
  });

  it('should convert 2 to LCD representation', () => {
    let expected = ' - \n  |\n - \n|  \n - \n';
    console.log(expected)
    assert.equal(NumberToLCD.convert(2), expected);
  });
});