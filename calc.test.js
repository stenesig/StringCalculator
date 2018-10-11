const add = require('./stringCalculator');

test('should return 0 if empty string provided', () => {
  expect(add('')).toBe(0);
});

test('should return single provided element', () => {
  expect(add('1')).toBe(1);
});

test('should return expected sum seperated with comma', () => {
    expect(add('1, 2')).toBe(3);
});

test('should return expected sum seperated with new line', () =>{
    expect(add('1, 2 \n 3')).toBe(6);
    expect(add('1\n 2, 3\n 4')).toBe(10);
});

test('should throw negative numbers', () => {
    expect(() => add('-2, 3, 5, -8, 7\n 9')).toThrow();
});

test('should ignore numbers over 1000', () => {
    expect(add('1001, 2')).toBe(2);
});
