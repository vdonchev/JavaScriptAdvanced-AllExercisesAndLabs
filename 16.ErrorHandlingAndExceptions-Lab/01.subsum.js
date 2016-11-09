function subsum(collection, startIndex, endIndex) {
    if (!Array.isArray(collection)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > collection.length - 1) {
        endIndex = collection.length - 1;
    }

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(collection[i]);
    }

    return sum;
}

// Examples:
console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300)); // 150
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); // 3.3
console.log(subsum([10, 'twenty', 30, 40], 0, 2)); // NaN
console.log(subsum([], 1, 2)); //	0
console.log(subsum('text', 0, 2)); // NaN