node-quicklambda
================

A tiny module for generating property access functions with a tiny amount of code

## Usage

```js
var _ = require('quicklambda');

var fruits = [{
    name: 'Apple',
    extra: {
        taste: 'Sweet',
        shape: 'dimpled sphere'
    }
}, {
    name: 'Pear',
    extra: {
        taste: 'Sweet',
        shape: 'lop-sided stretched sphere'
    }
}, {
    name: 'Lemon',
    extra: {
        taste: 'Sour',
        shape: 'elongated sphere'
    }
}];

var fruitNames = fruits.map(_.name);
// ['Apple', 'Pear', 'Lemon']

var fruitTastes = fruits.map(_.extra.taste);
// ['Sweet', 'Sweet', 'Sour']
```

## Note

Proxies must be available to use this module.

### Enable Proxies in node

```shell
node --harmony-proxies
```
