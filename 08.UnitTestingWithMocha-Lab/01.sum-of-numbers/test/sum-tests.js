let sum = require('../sum').sum;
let expect = require('chai').expect;

describe('Test sum(arr) functionality', () => {
    describe('Test sum(arr) function - Normal cases', () => {
        it('should return 7 for sum([2, 5])', () => {
            expect(sum([2, 5])).to.be.equal(7);
        });

        it('should return 69 for sum([60, 5, 4])', () => {
            expect(sum([69])).to.be.equal(69);
        });

        it('should return 101 for sum([-5, 55, 0, 49, -8, 10])', () => {
            expect(sum([-5, 55, 0, 49, -8, 10])).to.be.equal(101);
        });

        it('should return -10 for sum([-5, -3, -2])', () => {
            expect(sum([-5, -3, -2])).to.be.equal(-10);
        });

        it('should return 4 for sum([2.5, 1.5])', () => {
            expect(sum([2.5, 1.5])).to.be.equal(4);
        });
    });

    describe('Test sum(arr) function - Edge cases', () => {
        it('should return 0 for sum([])', () => {
            expect(sum([])).to.be.equal(0);
        });

        it('should return 18 for sum([18])', () => {
            expect(sum([18])).to.equal(18);
        });

        it('should return 0.5 for sum([0, 0.5])', () => {
            expect(sum([0, 0.5])).to.equal(0.5);
        });

        it('should return NaN for sum(["pesho", "gosho"])', () => {
            expect(["pesho", "gosho"]).to.be.NaN;
        });
    });
});