function* fibonacci() {
    yield 1;
    yield 1;
    let first = 1;
    let second = 1;

    while (true) {
        let temp = first + second;
        first = second;
        second = temp;
        yield temp;
    }
}

// Example:
let fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);