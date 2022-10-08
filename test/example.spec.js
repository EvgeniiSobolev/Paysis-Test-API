import {expect} from 'chai';

describe('Operations with numbers', function () {
    const a = 6;
    const b = 8;
    it('Addition works properly', function () {
        expect(a + b).to.eq(14)
    })

    it('Subtraction works properly', function () {
        expect(a - b).to.eq(-2)
    });
});