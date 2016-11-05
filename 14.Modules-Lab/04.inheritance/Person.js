let Entity = require('./Entity');
let Dog = require('./Dog');

class Person extends Entity {
    constructor(name, phrase, dog) {
        super(name);

        this.phrase = phrase;
        this.dog = dog;
    }

    saySomething() {
        return `${this.name} says: ${this.phrase}${this.dog.name} barks!`;
    }
}

module.exports = Person;