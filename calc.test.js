const add = require('./stringCalculator');

test('should return 0 if empty string provided', () => {
  expect(add('')).toBe(0);
});

test('should return single provided element', () => {
  expect(add('1')).toBe(1);
});

test('should return expected sum', () => {
    expect(add('1, 2')).toBe(3);
});