let createCalculator = require('../add-subtract').createCalculator;
let expect = require('chai').expect;

let calculator;
beforeEach('Init a calculator instance', () => {
    calculator = createCalculator();
});

describe('Test calculator createCalculator()', () => {
    it('should be object, instance of calculator', () => {
        expect(calculator).to.be.an('object');
    });

    it('should have add, subtract, get functions', () => {
        expect(calculator.hasOwnProperty('add')).to.be.true;
        expect(calculator.hasOwnProperty('subtract')).to.be.true;
        expect(calculator.hasOwnProperty('get')).to.be.true;
    });

    it('should return 0 on get on empty calculator', () => {
        expect(calculator.get()).to.equal(0);
    });

    it('should return 5 on {add 5, get}', () => {
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
    });

    it('should return 5 on {add "5", get}', () => {
        calculator.add("5");
        expect(calculator.get()).to.equal(5);
    });

    it('should return -5 on {subtract 5, get}', () => {
        calculator.subtract(5);
        expect(calculator.get()).to.equal(-5);
    });

    it('should return -280 on {add -70, add -70, add -70, add -70, get}', () => {
        calculator.add(-70);
        calculator.add(-70);
        calculator.add(-70);
        calculator.add(-70);
        expect(calculator.get()).to.equal(-280);
    });

    it('should return -10 on {subtract 5, subtract 5, get}', () => {
        calculator.subtract(5);
        calculator.subtract(5);
        expect(calculator.get()).to.equal(-10);
    });

    it('should return 69 on {add 70, subtract 1, get}', () => {
        calculator.add(70);
        calculator.subtract(1);
        expect(calculator.get()).to.equal(69);
    });

    it('should return 138 on {add 70, subtract 1, add 70, subtract 1, get}', () => {
        calculator.add(70);
        calculator.subtract(1);
        calculator.add(70);
        calculator.subtract(1);
        expect(calculator.get()).to.equal(138);
    });

    it('should return 69 on {subtract 1, add 70, get}', () => {
        calculator.subtract(1);
        calculator.add(70);
        expect(calculator.get()).to.equal(69);
    });

    it('should return 0.30000000000000004 on {add 0.1, add 0.2, get}', () => {
        calculator.add(0.1);
        calculator.add(0.2);
        expect(calculator.get()).to.equal(0.1 + 0.2);
    });

    it('should return NaN on {add "pesho", get}', () => {
        calculator.add('pesho');
        expect(calculator.get()).to.be.NaN;
    });

    it('should return NaN on {subtract "pesho", get}', () => {
        calculator.subtract('pesho');
        expect(calculator.get()).to.be.NaN;
    });

    it('should return 3 on {add 1.1, add 2.9, get}', () => {
        calculator.add(1.1);
        calculator.add(2.9);
        expect(calculator.get()).to.equal(1.1 + 2.9);
    });

    it('should return 16.5 on {add 1.5, subtract 18.54, get}', () => {
        calculator.add(1.5);
        calculator.subtract(18.54);
        expect(calculator.get()).to.equal(1.5 - 18.54);
    });

    it('should return 16.5 on {subtract 18, add 1.5, get}', () => {
        calculator.subtract(18);
        calculator.add(1.5);
        expect(calculator.get()).to.equal(1.5 - 18);
    });

    it('should return NaN on {add EMPTY, get}', () => {
        calculator.add();
        expect(calculator.get()).to.be.NaN;
    });

    it('should return NaN on {subtract EMPTY, get}', () => {
        calculator.subtract();
        expect(calculator.get()).to.be.NaN;
    });
});