this.jsdom = require('jsdom-global')();
$ = require('jquery');

let nuke = require('../nuke').nuke;
let expect = require('chai').expect;

describe('test cases for nuke function', function () {
    let testObject;
    beforeEach('init the object', function () {
        document.body.innerHTML =
            `<div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some more text</span>
                </div>
            </div>`;
    });

    it('should do nothing on invalid selectors', () => {
        let selector = $('#target');
        let prev = selector.html();
        nuke(2, "#target");
        expect(selector.html()).to.equal(prev);
    });

    it('should do nothing on nuke(2, "#target")', () => {
        let selector = $('#target');
        let prev = selector.html();
        nuke('.nested', '.inside');
        expect(selector.html()).to.equal(prev);
    });

    it('should do noting if 1 parameters isn\'t valid selector', ()=> {
        let selector1 = '#target';
        let selector2 = 'nested';
        let len = $(selector1).length;
        nuke(selector1, selector2);
        expect($(selector1).length).to.be.equal(len);
    });

    it('should do noting if parameters are equals', () => {
        let selector = '#target';
        let before = document.body.innerHTML;
        nuke(selector, selector);
        let after = document.body.innerHTML;
        expect(before).to.be.equal(after);
    });

    it('should remove nodes whit correct selectors', () => {
        let selector1 = '.target';
        let selector2 = '.nested';
        nuke(selector1, selector2);
        let after = $(selector1 + selector2);
        expect(after.length).to.be.equal(0);
    });
});