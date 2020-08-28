const  {  array } = require('../array')

let objInArray = { x: 11, y: 12 };

let arr = [{ x: 11, y: 12 }, { x: 11 }, 'Hello world', objInArray, { z: 22, u: 33 }];
describe('whichOne', () => {
  test('exists', () => {
    expect(array.whichOne(objInArray, arr)).toBe(3);

  })
  test('non-exists', () => {
    expect(array.whichOne({ x: 11 }, arr)).toBe(-1);

  })

  test('by value', () => {

    expect(array.whichOne(objInArray, arr, true)).toBe(0);
  });
});
