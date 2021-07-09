'use strict';

describe('arrays and objects, similar but different.', () => {
  describe('arrays:', () => {
    it('an array is equal to itself', () => {
      const actual = [1, 2, 3];
      const expected = [1, 2, 3];
      expect(actual).toEqual(expected);
    });
    it('two different arrays are not strictly equal', () => {
      const actual = [1, 2, 3];
      const expected = [1, 2, 3];
      const areDifferentArrays = actual !== expected;
      expect(areDifferentArrays).toEqual(true);
    });
    it('arrays with the same values will pass', () => {
      const actual = [1, 2, 3];
      const expected = [1, 2, 3];
      expect(actual).toEqual(expected);
    });
    it('the order of entries is important', () => {
      // correct these arrays to pass the assertion
      const actual = [1, 2, 3];
      const expected = [1, 2, 3];
      expect(actual).toEqual(expected);
    });
  });
  describe('objects', () => {
    it('an object is equal to itself', () => {
      const actual = {a: 1, b: 2};
      const expected = {a: 1, b: 2};
      expect(actual).toEqual(expected);
    });
    it('two different objects are not strictly equal', () => {
      const actual = { a: 1, b: 2 };
      const expected = {a: 1, b: 2};
      const areNotTheSameObject = actual !== expected;
      expect(areNotTheSameObject).toEqual(true);
    });
    it('objects with the same values will pass', () => {
      const actual = { a: 1, b: 2 };
      const expected = {a: 1, b: 2};
      expect(actual).toEqual(expected);
    });
    it('the order of key/value pairs is not important', () => {
      const actual = { a: 1, b: 2 };
      const expected = { b: 2, a: 1 };
      expect(actual).toEqual(expected);
    });
  });
});
