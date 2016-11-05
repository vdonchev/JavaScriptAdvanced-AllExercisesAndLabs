let Turtle = require('./Turtle');

class GalapagosTurtle extends Turtle {
    constructor(name, age, geneder) {
        super(name, age, geneder);

        this._eaten = [];
    }

    get thingsEaten() {
        return this._eaten;
    }

    grow(age) {
        super.grow(age);
        this._eaten = [];
    }

    eat(food) {
        this._eaten.push(food);
    }

    toString() {
        let output = `\nThings, eaten this year: ${this._eaten.join(', ')}`;
        return super.toString() + output;
    }
}

module.exports = GalapagosTurtle;