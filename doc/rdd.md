# RDD

This document is for tracking features.


## Finished Features

```js
const [...actual] = range(1, 5); // [1, 2, 3, 4, 5]
const [...actual] = range(0, 0); // [0]
const [...foo] = grange(3, 6); // [3, 4, 5, 6]
const [...bar] = grange(0, 9, {step: 3}); // [0, 3, 6, 9]
const [...baz] = grange(1, 3, n => n * 4); // [4, 8, 12, 16]
```


## Requested Features
```js
const [...bif] = grange(3, 1); // [3, 2, 1]

const loopGen = grange(1, 3, {loop: true});
const loop = range(0, 7).map(() => loopGen.next().value); // [1, 2, 3, 1, 2, 3, 1, 2]

// If you omit the start, everything should still work
const [...omittedStart] = grange(6, n => n * 2, {step: 2}); // [0, 4, 8, 12]
```
