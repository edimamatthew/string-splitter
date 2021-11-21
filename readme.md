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

splitString('ABBCCDDEEBBAABB', "BB");
//=> ["A","BB","CCDDEE","BB","AA","BB"]

splitString('ASBBBDFBBSDFBBWERT', "BB");
//=> ["AS","BB","BDF","BB","SDF", "BB","WERT"]

splitString('ABBBBDF', "BB");
//=> ["A","BB","BB","DF"]
```

## Test

```
$ npm test
```