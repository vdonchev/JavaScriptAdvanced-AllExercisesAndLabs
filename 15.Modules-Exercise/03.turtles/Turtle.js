class Turtle {
    constructor(name, age, geneder) {
        if (new.target === Turtle) {
            throw new Error;
        }

        this._name = name;
        this._age = age;
        this._gender = geneder;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get gender() {
        return this._gender;
    }

    grow(age) {
        this._age += age;
    }

    toString() {
        let output = `Turtle: ${this._name}\n`;
        output += `Aged - ${this._age}; Gender - ${this._gender}`;

        return output;
    }
}

module.exports = Turtle;