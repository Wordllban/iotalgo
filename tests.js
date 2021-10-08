const chai = require('chai')
const expect = chai.expect;
const findSquare = require('./app')

describe('Bug tracker board', () => {
    it('should return a side of square X that can pack all the N rectangles', () => {
        expect(findSquare(10, 2, 3)).to.deep.equal(9);
        expect(findSquare(2, 1000000000, 999999999)).to.deep.equal(1999999998);
        expect(findSquare(4, 1, 1)).to.deep.equal(2)
    });
});