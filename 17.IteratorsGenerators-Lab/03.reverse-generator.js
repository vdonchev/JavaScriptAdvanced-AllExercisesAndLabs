function* reverseArrayGenerator(arr) {
    let index = arr.length - 1;
    while (index >= 0) {
        yield arr[index--];
    }
}


// Example:
let arr = [10, 20, 30];
for (let item of reverseArrayGenerator(arr)) {
    console.log(item);
}