let isSymmetric = require('../is-symmetric').isSymmetric;
let expect = require('chai').expect;

describe('Tests for isSymmetric(arr)', () => {
    describe('Regular cases', () => {
        // odd count - numbers only
        it('should return true on isSymmetric([1,2,1])', () => {
            expect(isSymmetric([1, 2, 1])).to.be.true;
        });

        // even count - numbers only
        it('should return false on isSymmetric([1,2,-1])', () => {
            expect(isSymmetric([1, 2, -1])).to.be.false;
        });

        // odd count - numbers only
        it('should return true on isSymmetric([10,20,20,10])', () => {
            expect(isSymmetric([10, 20, 20, 10])).to.be.true;
        });

        // even count - numbers only
        it('should return false on isSymmetric([10,20,30,10])', () => {
            expect(isSymmetric([10, 20, 30, 10])).to.be.false;
        });

        // odd count - mixed types
        it('should return true on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
            expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, new Date(2016, 8, 15), "pesho"])).to.be.true;
        });

        // even count - mixed types
        it('should return false on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
            expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, "pesho"])).to.be.false;
        });
    });

    describe('Tests for isSymmetric(arr) - Edge cases', () => {
        // number and string representation of the same number
        it('should return false on isSymmetric(["2",2])', () => {
            expect(isSymmetric(["2", 2])).to.be.false;
        });

        // 1 item
        it('should return true on isSymmetric([2])', () => {
            expect(isSymmetric([2])).to.be.true;
        });

        // []
        it('should return true on isSymmetric([])', () => {
            expect(isSymmetric([])).to.be.true;
        });

        // string instead []
        it('should return false on isSymmetric("hello")', () => {
            expect(isSymmetric("hello")).to.be.false;
        });

        // [[], [], []]
        it('should return true on isSymmetric([[1,2], [2], [1,2]])', () => {
            expect(isSymmetric([[1,2], [2], [1,2]])).to.be.true;
        });
    });
});