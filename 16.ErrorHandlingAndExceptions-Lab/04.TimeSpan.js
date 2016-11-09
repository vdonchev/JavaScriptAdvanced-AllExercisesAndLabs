class TimeSpan {
    constructor(hours, minutes, seconds) {
        this._seconds = 0;

        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    set hours(value) {
        TimeSpan._validateValue(value, 'hours');
        this._seconds += Number(value) * 60 * 60;
    }

    set minutes(value) {
        TimeSpan._validateValue(value, 'minutes');
        this._seconds += Number(value) * 60;
    }

    set seconds(value) {
        TimeSpan._validateValue(value, 'seconds');
        this._seconds += Number(value);
    }

    toString() {
        let timeSpan = `${Math.trunc(this._seconds / 60 / 60)}:`;
        timeSpan += `0${Math.trunc(this._seconds / 60) % 60}`.slice(-2) + ':';
        timeSpan += `0${this._seconds % 60}`.slice(-2);
        return timeSpan;
    }

    static _validateValue(value, name) {
        if (!Number.isInteger(value)) {
            throw new RangeError(`Invalid ${name}: ${value}`);
        }
    }
}

// Examples
try {
    console.log('' + new TimeSpan(7, 8, 5));
    console.log('' + new TimeSpan(12, 76, -5));
    console.log('' + new TimeSpan(3, 2, {}));
} catch (err) {
    console.log(err.message);
}
