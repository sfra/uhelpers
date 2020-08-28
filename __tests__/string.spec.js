const { string } = require('../string')


let s = 'http://somehost/profile'
describe('Sstring', () => {
  test('suffix', () => {
    expect(string.Sstring.suffix(s, 7)).toBe('http://somehost/');

    expect(string.Sstring.suffix(s, 'file')).toBe('http://somehost/pro');


  });


});







describe('toFixedString', () => {
  test('by number', () => {
    expect(string.toFixedString(10, 'start', '|', '|')).toBe('|start     |');
    expect(string.toFixedString(9, 'start', '', '|')).toBe('start    |');
    expect(string.toFixedString(10, 'start', '|', '|', '+')).toBe('|start+++++|');

  });

  test('by string', () => {
    expect(string.toFixedString('xxxxxx', 'start', '|', '|')).toBe('|start |');
    expect(string.toFixedString('xxxxxxx', 'start', '', '|')).toBe('start  |');
    expect(string.toFixedString('xxxxx', 'start', '|', '|', '+')).toBe('|start|');

  });

});