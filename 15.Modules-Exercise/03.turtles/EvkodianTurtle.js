let Turtle = require('./Turtle');

class EvkodianTurtle extends Turtle {
    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);

        this._evkodium = evkodiumValue;
    }

    get evkodium() {
        return {
            value: this._evkodium,
            density: this._calculateDensity()
        };
    }

    _calculateDensity() {
        if (this._gender == 'male') {
            return this._age * 3;
        }

        return this._age * 2;
    }

    toString() {
        return super.toString() + `\nEvkodium: ${this._evkodium * this._calculateDensity()}`;
    }
}

module.exports = EvkodianTurtle;