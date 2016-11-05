let Turtle = require('./Turtle');

class NinjaTurtle extends Turtle {
    constructor(name, age, gender, maskColor, weapon) {
        super(name, age, gender);

        this.maskColor = maskColor;
        this.weapon = weapon;
        this.level = 0;
    }

    grow(age) {
        super.grow(age);
        this.level += age;
    }

    toString() {
        let output = '';
        if (this.level < 25) {
            output = `\n${this._name.slice(0, 3)} wears a ${this.maskColor} mask, and is an apprentice with the ${this.weapon}.`;
        } else if(this.level < 100) {
            output = `\n${this._name.slice(0, 3)} wears a ${this.maskColor} mask, and is smokin strong with the ${this.weapon}.`;
        } else {
            output = `\n${this._name.slice(0, 3)} wears a ${this.maskColor} mask, and is BEYOND GODLIKE with the ${this.weapon}.`;
        }

        return super.toString() + output;
    }
}

module.exports = NinjaTurtle;