class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    addToSelector(selector) {
        let personObj =
            $('<div>')
                .addClass('person ' + this.name)
                .append($('<p>')
                    .addClass('name')
                    .text(this.name))
                .append($('<p>')
                    .addClass('age')
                    .text(this.age))
                .append($('<div>')
                    .addClass('posts ' + this.name));

        $(selector)
            .append(personObj);
    }
}

module.exports = Person;