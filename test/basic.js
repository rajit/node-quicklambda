'use strict';

var expect = require('chai').expect;

var _ = require('../index.js');

describe('quicklambda', function () {
    it('should create simple accessor function usable in .map', function () {
        var list = [{ a: 'b', c: 'd' }, { a: 'y', c: 'w' }];
        expect(list.map(_.a)).to.deep.equal(['b', 'y']);
    });

    it('should create double-level accessor function', function () {
        var obj = { a: 'b', c: { d: 'e' } };
        expect(_.c.d(obj)).to.equal('e');
    });

    it('should create triple-level accessor function', function () {
        var obj = { a: 'b', c: { d: 'e', f: { g: 'h' } } };
        expect(_.c.f.g(obj)).to.equal('h');
    })
});
