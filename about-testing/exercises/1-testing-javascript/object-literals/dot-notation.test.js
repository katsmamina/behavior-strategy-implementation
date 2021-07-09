'use strict';

describe('dot notation', () => {
  describe('types of tasty treats', () => {
    const orite = 'bread'; // added bread
    const obj = {
      fav: orite,
      wet: 'soup',
    };
    it('bread', () => {
      expect(obj.fav).toEqual('bread'); // fav
    });
    it('soup', () => {
      expect(obj.wet).toEqual('soup');
    });
  });
  describe('a menagerie', () => {
    const swimming = 'mackerel';
    const obj = {
      flying: 'crane', // added 'crane'
      swimming: swimming, // added swimming first part
      running: 'cheetah', // added running
    };
    it('obj.flying', () => {
      expect(obj.flying).toEqual('crane'); // obj.flying
    });
    it('obj.running', () => {
      expect(obj.running).toEqual('cheetah'); // cheetah 
    });
    it('obj.swimming', () => {
      expect(obj.swimming).toEqual('mackerel'); 
    });
  });
});
