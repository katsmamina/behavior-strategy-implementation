'use strict';

describe('bracket notation', () => {
  describe('types of tasty treats', () => {
    const key1 = 'dry';
    const key2 = 'wet'; // added wet
    const obj = {};
    obj[key2] = 'soup'; // soup
    obj[key1] = 'bread'; // key1
    it('obj.wet', () => {
      expect(obj.wet).toEqual('soup');
    });
    it('obj.dry', () => {
      expect(obj[key1]).toEqual('bread');
    });
  });
  describe('a menagerie', () => {
    const motion = 'running';
    const fastAnimal = 'cheetah';
    const water = _;
    const obj = {
      swimming: 'mackerel',
    };
    obj['_'] = _;
    obj['flying'] = _;
    it('obj.flying', () => {
      expect(obj.flying).toEqual('crane');
    });
    it('obj.running', () => {
      expect(obj.running).toEqual(fastAnimal);
    });
    it('obj.swimming', () => {
      expect(obj[water]).toEqual('mackerel');
    });
  });
});
