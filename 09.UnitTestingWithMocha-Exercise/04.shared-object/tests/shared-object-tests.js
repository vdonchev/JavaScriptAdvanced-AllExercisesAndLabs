this.jsdom = require('jsdom-global')();
$ = require('jquery');

let sharedObject = require('../shared-object').sharedObject;
let expect = require('chai').expect;

describe('test cases for sharedObject functionality', function () {
    let testObject;
    beforeEach('init the object', function () {
        testObject = Object.create(sharedObject);
        document.body.innerHTML =
            `<div id="wrapper">
                <input type="text" id="name">
                <input type="text" id="income">
            </div>`;
    });

    describe('validate initial state', function () {
        it('should be object', () => {
            expect(testObject).to.an('object');
        });

        it('should return null on testObject.name', () => {
            expect(testObject.name).to.equal(null);
        });

        it('should return null on testObject.income', () => {
            expect(testObject.income).to.equal(null);
        });

        it('should return null on testObject.income', () => {
            expect(testObject.income).to.equal(null);
            expect(testObject.name).to.equal(null);
        });

        it('should return null on testObject.income', () => {
            expect(testObject.income).to.equal(null);
            expect($('#income').val()).to.equal('');
            expect(testObject.name).to.equal(null);
            expect($('#name').val()).to.equal('');
        });
    });

    describe('test cases for changeName(name) function', function () {
        it('should return null on testObject.name after changeName("")', () => {
            testObject.changeName('');
            expect(testObject.name).to.equal(null);
        });

        it('should return pesho on testObject.name after changeName("")', () => {
            testObject.name = 'pesho';
            testObject.changeName('');
            expect(testObject.name).to.equal('pesho');
        });

        it('should return test on testObject.name after changeName("test")', () => {
            testObject.changeName('test');
            expect(testObject.name).to.equal('test');
            expect($('#name').val()).to.equal('test');
        });

        it('should return anotherTest on testObject.name after changeName("anotherTest")', () => {
            testObject.changeName('anotherTest');
            expect(testObject.name).to.equal('anotherTest');
            expect($('#name').val()).to.equal('anotherTest');
        });

        it('should return "5" on testObject.name after changeName(5)', () => {
            testObject.changeName(5);
            expect(testObject.name).to.equal(5);
            expect($('#name').val()).to.equal('5');
        });
    });

    describe('test cases for changeIncome(income) function', function () {
        it('should return null on testObject.income after changeIncome("")', () => {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome('');
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('should return null on testObject.income after changeIncome("")', () => {
            let prevInput = $('#income').val();
            testObject.income = 88;
            testObject.changeIncome('');
            expect(testObject.income).to.equal(88);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('should return null on testObject.income after changeIncome(0)', () => {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome(0);
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('should return null on testObject.income after changeIncome(-20)', () => {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome(-20);
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('should return null on testObject.income after changeIncome(2.5)', () => {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome(2.5);
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('should return "18" on testObject.income after changeIncome("18")', () => {
            testObject.changeIncome(18);
            expect(testObject.income).to.equal(18);
            expect($('#income').val()).to.equal("18");
        });

        it('should return "50" on testObject.income after {1,-5,50})', () => {
            testObject.changeIncome(1);
            testObject.changeIncome(-5);
            testObject.changeIncome(50);
            expect(testObject.income).to.equal(50);
            expect($('#income').val()).to.equal("50");
        });
    });

    describe('test cases for updateName(name) function', function () {
        it('should not change anything on updateName()', () => {
            testObject.updateName('pesho');
            expect($('#name').val()).to.equal('');
            expect(testObject.name).to.equal(null);
        });

        it('should not change anything on updateName()', () => {
            testObject.name = 'kiro';
            testObject.updateName('pesho');
            expect($('#name').val()).to.equal('');
            expect(testObject.name).to.equal('kiro');
        });

        it('should update testObject.name on updateName()', () => {
            let nameInput = $('#name');
            nameInput.val('pesho');
            testObject.updateName();
            expect(testObject.name).to.equal('pesho');
            expect(nameInput.val()).to.equal('pesho');
        });

        it('should update testObject.name on updateName()', () => {
            testObject.name = 'test';
            let nameInput = $('#name');
            nameInput.val('pesho');
            testObject.updateName();
            expect(testObject.name).to.equal('pesho');
            expect(nameInput.val()).to.equal('pesho');
        });
    });

    describe('test cases for updateIncome() function', function () {
        it('should not change anything on updateIncome()', () => {
            testObject.updateIncome();
            expect($('#income').val()).to.equal('');
        });

        it('should not change anything on updateIncome()', () => {
            let incomeInput = $('#income');
            incomeInput.val(2.5);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('2.5');
            expect(testObject.income).to.equal(null);
        });

        it('should not change anything on updateIncome()', () => {
            let incomeInput = $('#income');
            incomeInput.val(2.5);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('2.5');
            expect(testObject.income).to.equal(null);
        });

        it('should not change anything on updateIncome()', () => {
            let incomeInput = $('#income');
            incomeInput.val('test');
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('test');
            expect(testObject.income).to.equal(null);
        });

        it('should not change anything on updateIncome() with previously set obj.income', () => {
            testObject.income = 65;
            let incomeInput = $('#income');
            incomeInput.val(-30);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('-30');
            expect(testObject.income).to.equal(65);
        });

        it('should not change anything on updateIncome() with previously set obj.income', () => {
            testObject.income = 65;
            let incomeInput = $('#income');
            incomeInput.val(0);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('0');
            expect(testObject.income).to.equal(65);
        });

        it('should change income on updateIncome() {50}', () => {
            let incomeInput = $('#income');
            incomeInput.val(50);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('50');
            expect(testObject.income).to.equal(50);
        });
    });
});