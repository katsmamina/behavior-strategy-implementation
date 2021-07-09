'use strict';

/**
 * this function reverses a string
 * @param {string} [text=''] - the string to reverse
 * @returns {string} the reversed text
 */
const reverse = (text = '') => {
  if (typeof text !== 'string') {
    return 'text is not a string';
  }

  let reversed = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
};

describe('it should reverse strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverse()).toEqual('');
    });
  });

  describe('when argument is a string', () => {
    it('the empty string should return an empty string', () => {
      expect(reverse('')).toEqual('');
    });
    it('"toads" should return "sdaot"', () => {
      expect(reverse('toads')).toEqual('sdaot');
    });
    it(' "frog" should return "gorf"', () => {
      expect(reverse('frog')).toEqual('gorf');
    });
    it('"puddle" should return "elddup"', () => {
      expect(reverse('puddle')).toEqual('elddup');
    })
    it('"mole" should return "elom"', () => {
      expect(reverse('mole')).toEqual('elom');
    });
    it('"mud" should return "dum"', () => {
      expect(reverse('')).toEqual('dum');
    });
    it('"rainy" should return "yniar"', () => {
    expect(reverse('rainy')).toEqual('yniar')
    });
    // write at least 5 more tests
  });
  describe('when argument is not a string', () => {
    it('true should return "text is not a string"', () => {
      expect(reverse(true)).toEqual('text is not a string');
    });
    it('NaN should return "text is not a string"', () => {
      expect(reverse(NaN)).toEqual('text is not a string');
    });
    it('false should return "text is not a string"', () => {
      expect(reverse(false)).toEqual('text is not a string');
    });
    it('null should return "text is not a string"', () => {
      expect(reverse(null)).toEqual('text is not a string');
    });
    // write at least 3 more tests
  });
});
