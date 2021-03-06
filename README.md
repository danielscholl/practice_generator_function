# Range Function using ES6 Generator and TDD with 'tape'

Generate all sorts of values based on a range of numbers, e.g:

```js
const [...foo] = grange(3, 6); // [3,4,5,6]
```

## Getting Started

This library requires a JavaScript engine with ES6 generator support. Works great with Node v6.

```sh
npm install --save grange
```

### Feature List

1. Simple Range Function that should allow numbers to be input and an array returned.
  - Test:  Should return an array of numbers from start to end
  - Test:  Should return a range that ends with the last numbers
  - Test:  Should allow a range that starts with 0
  - Test:  Should allow a range of only 1 number


2. Simple Range Generator Function that should allow numbers to be input and an array returned.
  - Test:  Should return an array of numbers from start to end
  - Test:  Should return a range that ends with the last numbers
  - Test:  Should allow a range that starts with 0
  - Test:  Should allow a range of only 1 number

3. Range Generator should increment in provided steps
  - Test:  Should obey step increment argument

4. Range Generator should allow for a transform function.
  - Test:  Should use transform function if provided.

----------
>Concept obtained from courses by Eric Elliott used for my own learning purposes 
