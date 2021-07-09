'use strict';

/**
 * Sorts an array of numbers from smallest to largest.
 * Returns a new array without modifying the original array.
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [arrOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 * @example
 *
 * sortNumbers([1.5, 1, -1.5, 0, -1]);
 * // -> [-1.5, -1, 0, 1, 1.5]
 *
 * @example
 * sortNumbers([-1, 0, 1]);
 * // -> [-1, 0, 1]
 */
const sortNumbers = (arrOfNumbers = []) => {
  // create a copy of the argument to avoid side-effects
  const copiedAndSorted = [...arrOfNumbers];

  // sort the elements in the copied array
  copiedAndSorted.sort((a, b) => (a) - (b));

  // return the copied & sorted array of numbers
  return copiedAndSorted;
};

describe('sortNumbers sorts an array of numbers', () => {
  // test positive numbers
  it('check positive numbers', () => {
    const actual = sortNumbers([3, 2, 6]);
    const expected = [2, 3, 6];
    expect(sortNumbers(actual)).toEqual(expected);
  });

  // test negative numbers
  it('testing negative numbers', () => {
    const actual = [-1, -5, -33];
    const expected = [-33, -5, -1];
    expect(sortNumbers(actual)).toEqual(expected);
  });

  // test decimal numbers
  it('testing decimal numbers', () => {
    const actual = [1.2, 5.6, 3.3];
    const expected = [1.2, 3.3, 5.6];
    expect(sortNumbers(actual)).toEqual(expected);
  });
  // test everything all together
  it('testing all numbers', () => {
    const actual = [-33, 5, 2.3, -9];
    const expected = [-33, -9, 2.3, 5];
    expect(sortNumbers(actual)).toEqual(expected);
  });
  // test for side-effects
  // describe('', () => {});
});
