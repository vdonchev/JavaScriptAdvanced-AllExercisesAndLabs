let Extensible = (function () {
    let uniqueId = 0;

    return class Extensible {
        constructor() {
            this.id = uniqueId++;
        }

        extend(otherObject) {
            for (let prop in otherObject) {
                if (otherObject.hasOwnProperty(prop)) {
                    if (typeof otherObject[prop] == 'function') {
                        Extensible.prototype[prop] = otherObject[prop];
                    } else {
                        this[prop] = otherObject[prop];
                    }
                }
            }
        }
    }
})();