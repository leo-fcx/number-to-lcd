import { NumberToLCD } from './numberToLCD'
import assert from 'power-assert'

describe('Number to LCD', () => {
  it('should defined method to convert specific digit', () => {
    assert(NumberToLCD.convertDigit);
  });

  it('should convert 0 to LCD representation', () => {
    let expected = ' - \n| |\n| |\n| |\n - ';
    assert.equal(NumberToLCD.convertDigit(0), expected);
  });

  it('should convert 1 to LCD representation', () => {
    let expected = '  |\n  |\n  |\n  |\n  |';
    assert.equal(NumberToLCD.convertDigit(1), expected);
  });

  it('should convert 2 to LCD representation', () => {
    let expected = ' - \n  |\n - \n|  \n - ';
    assert.equal(NumberToLCD.convertDigit(2), expected);
  });

  it('should convert 3 to LCD representation', () => {
    let expected = ' - \n  |\n - \n  |\n - ';
    assert.equal(NumberToLCD.convertDigit(3), expected);
  });

  it('should convert 4 to LCD representation', () => {
    let expected = '| |\n| |\n - \n  |\n  |';
    assert.equal(NumberToLCD.convertDigit(4), expected);
  });

  it('should convert 5 to LCD representation', () => {
    let expected = ' - \n|  \n - \n  |\n - ';
    assert.equal(NumberToLCD.convertDigit(5), expected);
  });

  it('should convert 6 to LCD representation', () => {
    let expected = ' - \n|  \n - \n| |\n - ';
    assert.equal(NumberToLCD.convertDigit(6), expected);
  });

  it('should convert 7 to LCD representation', () => {
    let expected = ' - \n  |\n  |\n  |\n  |';
    assert.equal(NumberToLCD.convertDigit(7), expected);
  });

  it('should convert 8 to LCD representation', () => {
    let expected = ' - \n| |\n - \n| |\n - ';
    assert.equal(NumberToLCD.convertDigit(8), expected);
  });

  it('should convert 9 to LCD representation', () => {
    let expected = ' - \n| |\n - \n  |\n - ';
    assert.equal(NumberToLCD.convertDigit(9), expected);
  });
});