class Numberbox {
    constructor(label, selector, minValue, maxValue) {
        this._label = label;
        this._elements = $(selector);
        this.minValue = minValue;
        this.maxValue = maxValue;
        this._value = minValue;

        let that = this;
        $(selector).change(function () {
            that.value = $(this).val();
        });
    }

    get label() {
        return this._label;
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(val) {
        if (Number(val) < this.minValue || Number(val) > this.maxValue) {
            throw new Error('Passed in value is out of range');
        }

        this._value = val;
        $(this._elements).val(val);
    }
}

module.exports = Numberbox;