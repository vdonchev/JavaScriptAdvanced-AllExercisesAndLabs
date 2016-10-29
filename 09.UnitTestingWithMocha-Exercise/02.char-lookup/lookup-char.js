function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "";
    }

    return string.charAt(index);
}
console.log(lookupChar("hello", -3))
console.log(lookupChar("hello", 44))

module.exports = {lookupChar};