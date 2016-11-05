let mathEnforcer = require('../math-enforcer').mathEnforcer;
let expect = require('chai').expect;

describe('test cases for mathEnforcer object', function () {
    describe('test cases for addFive(nums) function', function () {
        it('should return undefined on addFive("2")', () => {
            expect(mathEnforcer.addFive("2")).to.equal(undefined);
        });

        it('should return 69 on addFive(64)', () => {
            expect(mathEnforcer.addFive(64)).to.equal(69);
        });

        it('should return 0 on addFive(-5)', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it('should return 7.5 on addFive(2.5)', () => {
            expect(mathEnforcer.addFive(2.5)).to.equal(2.5 + 5);
        });

        it('should return 2.5 on addFive(-2.5)', () => {
            expect(mathEnforcer.addFive(-2.5)).to.equal(-2.5 + 5);
        });

        it('should return 5 on addFive(0)', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });
    });

    describe('test cases for subtractTeb(nums) function', function () {
        it('should return undefined on subtractTen("2")', () => {
            expect(mathEnforcer.subtractTen("2")).to.equal(undefined);
        });

        it('should return 69 on subtractTen(79)', () => {
            expect(mathEnforcer.subtractTen(79)).to.equal(69);
        });

        it('should return -20 on subtractTen(-10)', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });

        it('should return 2.5 on subtractTen(12.5)', () => {
            expect(mathEnforcer.subtractTen(12.5)).to.equal(12.5 - 10);
        });

        it('should return -12.5 on subtractTen(-2.5)', () => {
            expect(mathEnforcer.subtractTen(-2.5)).to.equal(-2.5 - 10);
        });

        it('should return -10 on subtractTen(0)', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });
    });

    describe('test cases for sum(numA, numB) function', function () {
        it('should return undefined on sum("2", 2)', () => {
            expect(mathEnforcer.sum("2", 2)).to.equal(undefined);
        });

        it('should return undefined on sum(2, "2")', () => {
            expect(mathEnforcer.sum(2, "2")).to.equal(undefined);
        });

        it('should return undefined on sum("2", "2")', () => {
            expect(mathEnforcer.sum("2", "2")).to.equal(undefined);
        });

        it('should return 4 on sum(2, 2)', () => {
            expect(mathEnforcer.sum(2, 2)).to.equal(4);
        });

        it('should return -4 on sum(-2, -2)', () => {
            expect(mathEnforcer.sum(-2, -2)).to.equal(-4);
        });

        it('should return 2 on sum(0, 2)', () => {
            expect(mathEnforcer.sum(0, 2)).to.equal(2);
        });

        it('should return 0 on sum(0, 0)', () => {
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
        });

        it('should return 3.7 on sum(2.5, 1.2)', () => {
            expect(mathEnforcer.sum(2.5, 1.2)).to.equal(2.5 + 1.2);
        });

        it('should return -18 on sum(-2.8, -15.2)', () => {
            expect(mathEnforcer.sum(-2.8, -15.2)).to.equal(-2.8 + -15.2);
        });
    });
});