const test = require('tape');
const range = require('../range.js');
const grange = require('../grange.js');

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

test('range generator returns an array of numbers', assert => {
  const message = `should return an array of numbers
    from 'start' to 'end'.`;

  const [...actual] = grange(3, 6);
  const expected = [3, 4, 5, 6];

  assert.same(actual, expected, message);
  assert.end();
});

test('range generator last ends with last number', assert => {
  const message = `should return a range that ends with the ending number.`;

  const [...actual] = grange(3, 6);
  const expected = 6;

  assert.equal(actual.pop(), expected, message);
  assert.end();
});

test('range generator starts with 0', assert => {
  const message = 'should return a range from 0 to `end`.';

  const [...actual] = grange(0, 3);
  const expected = [0, 1, 2, 3];

  assert.same(actual, expected, message);
  assert.end();
});

test('range generator of 0 - 0', assert => {
  const message = `should return [0].`;

  const [...actual] = grange(0, 0);
  const expected = [0];

  assert.same(actual, expected, message);
  assert.end();
});

