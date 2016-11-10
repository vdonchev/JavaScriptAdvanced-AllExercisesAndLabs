function* random(seed) {
    let key = 4871 * 7919;
    let x1 = seed;
    while (true) {
        x1 = (x1 * x1) % key;
        yield x1 % 100;
    }
}

// Example:
let rnd = random(100);
for (let i = 0; i < 10; i++) {
    console.log(rnd.next().value);
}
