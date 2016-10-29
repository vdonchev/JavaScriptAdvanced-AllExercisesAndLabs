class Textbox {
    constructor(selector, regex) {
        this.selector = selector;
        this._elements = $(selector);
        this._invalidSymbols = regex;

        let that = this;
        $(selector).on('input change', function () {
            that.value = $(this).val();
        });
    }

    get value() {
        return $(this.selector).val();
    }

    set value(value) {
        $(this.selector).val(value);
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test($(this.selector).val());
    }
}