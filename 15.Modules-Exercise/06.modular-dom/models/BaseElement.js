class BaseElement {
    constructor() {
        if (new.target === BaseElement) {
            throw new Error('Abstract class cannot be instantiated.');
        }

        this.element = null;
    }

    appendTo(selector) {
        this.createElement();
        $(selector).append(this.element);
    }

    createElement() {
        this.element = this.getElementString();
    }

    getElementString() {
        // to be overwritten and implemented by derived class
    }
}

module.exports = BaseElement;