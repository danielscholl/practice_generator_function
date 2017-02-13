const test = require('tape');
const range = require('../range.js');

test('range', assert => {
  const message = `should return an array of numbers
    from 'start' to 'end'.`;

  const actual = range(1, 5);
  const expected = [1, 2, 3, 4, 5];

  assert.same(actual, expected, message);
  assert.end();
});

test('range', assert => {
  const message = `should return a range that ends with the ending number.`;

  const actual = range(3, 6).pop();
  const expected = 6;

  assert.equal(actual, expected, message);
  assert.end();
});

test('range starts with 0', assert => {
  const message = 'should return a range from 0 to `end`.';

  const actual = range(0, 3);
  const expected = [0, 1, 2, 3];

  assert.same(actual, expected, message);
  assert.end();
});

test('range of 0 - 0', assert => {
  const message = `should return [0].`;

  const actual = range(0, 0);
  const expected = [0];

  assert.same(actual, expected, message);
  assert.end();
});
