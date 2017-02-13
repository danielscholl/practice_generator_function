# RDD

This document is for tracking features.


## Finished Features

```js
const [...actual] = range(1, 5); // [1, 2, 3, 4, 5]
const [...actual] = range(0, 0); // [0]
const [...foo] = grange(3, 6); // [3, 4, 5, 6]
```


## Requested Features
```js
const [...bar] = grange(2, 6, {step: 2}); // [2, 4, 6]
const [...baz] = grange(1, 3, n => n * 2); // [2, 4, 6]
const [...bif] = grange(3, 1); // [3, 2, 1]

const loopGen = grange(1, 3, {loop: true});
const loop = range(0, 7).map(() => loopGen.next().value); // [1, 2, 3, 1, 2, 3, 1, 2]

// If you omit the start, everything should still work
const [...omittedStart] = grange(6, n => n * 2, {step: 2}); // [0, 4, 8, 12]
```
