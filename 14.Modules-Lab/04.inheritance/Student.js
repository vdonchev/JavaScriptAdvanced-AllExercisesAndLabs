let Person = require('./Person');

class Student extends Person {
    constructor(name, phrse, dog, id) {
        super(name, phrse, dog);

        this.id = id;
    }

    saySomething() {
        return `Id: ${this.id} ${this.name} says: ${this.phrase}${this.dog.name} barks!`;
    }
}

module.exports = Student;