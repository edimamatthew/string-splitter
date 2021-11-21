# string-splitter

> Get the array of a string split by the separator provided

Useful to be able to turn a string into an array of different pieces based on the separator

## Install

```
$ npm install string-splitter
```

## Usage

```js
import splitString from 'string-splitter';

splitString("ABBCCDDEEBBAABB", "BB");
// => ["A", "BB", "CCDDEE", "BB", "AA", "BB"]

splitString("", "BB");
// => []

splitString("ASDFSDFWERT", "BB");
// => ["ASDFSDFWERT"]

splitString("ASBBDFBBSDFBBWERT", "BB");
// => ["AS", "BB", "DF", "BB", "SDF", "BB", "WERT"]

splitString("ASBBBDFBBSDFBBWERT", "BB");
// => ["AS", "BB", "BDF", "BB", "SDF", "BB", "WERT"]

splitString("ABBBBDF", "BB");
// => ["A", "BB", "BB", "DF"]

splitString("004002390045600", "00");
// => ["00", "4", "00", "239", "00", "456", "00"]

```

## Test

```
$ npm test
```