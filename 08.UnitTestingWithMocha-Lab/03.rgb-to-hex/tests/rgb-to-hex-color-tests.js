let rgbToHexColor = require('../rgb-to-hex-color').rgbToHexColor;
let expect = require('chai').expect;

describe('Tests for rgbToHexColor()', () => {
    it('should return #B0171F on rgbToHexColor(176,	23,	31)', () => {
        expect(rgbToHexColor(176,	23,	31)).to.equal('#B0171F');
        expect(rgbToHexColor(176,	23,	31)).to.be.an('string');
    });

    it('should return undefined on rgbToHexColor(176,	23,	-31)', () => {
        expect(rgbToHexColor(176, 23, -31)).to.be.undefined;
    });

    it('should return #000000 on rgbToHexColor(0, 0, 0)', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

    it('should return #FFFFFF on rgbToHexColor(255, 255, 255)', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('should return #002264 on rgbToHexColor(0, 34, 100)', () => {
        expect(rgbToHexColor(0, 34, 100)).to.equal('#002264');
    });

    it('should return undefined on rgbToHexColor(0, 34)', () => {
        expect(rgbToHexColor(0, 34)).to.be.undefined;
    });

    it('should return undefined on rgbToHexColor(255, 255, 256)', () => {
        expect(rgbToHexColor(255, 255, 256)).to.be.undefined;
    });

    it('should return undefined on rgbToHexColor(0, -1, 0)', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it('should return undefined on rgbToHexColor(0)', () => {
        expect(rgbToHexColor(0)).to.be.undefined;
    });

    it('should return undefined on rgbToHexColor("pesho")', () => {
        expect(rgbToHexColor("pesho")).to.be.undefined;
    });

    it('should return undefined on rgbToHexColor([])', () => {
        expect(rgbToHexColor([])).to.be.undefined;
    });
});