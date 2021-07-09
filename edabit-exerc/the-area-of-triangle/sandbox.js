const triangleArea = (base, height) => (base * height) / 2;

describe('calculate the area of the triangle', () => {
    it('1, 1 -> 0.5', () => expect(triangleArea(1,1)).toEqual(0.5));
    it('2, 2 -> 2', () => expect(triangleArea(2,2)).toEqual(2));
    it('3, 3 -> 4.5', () => expect(triangleArea(3,3)).toEqual(4.5));
  });