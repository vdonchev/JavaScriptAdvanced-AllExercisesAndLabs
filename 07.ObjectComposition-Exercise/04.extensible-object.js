function generateExtensibleObject() {
    let myObj = {};

    myObj.extend = function (source) {
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                if (typeof source[prop] == 'function') {
                    Object.getPrototypeOf(myObj)[prop] = source[prop]
                } else {
                    myObj[prop] = source[prop]
                }
            }
        }
    };

    return myObj;
}