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




----------
>NOTE: Pulled from courses by Eric Elliott for my own learning purposes 
