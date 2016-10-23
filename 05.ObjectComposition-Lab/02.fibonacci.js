function generateFibSequence(num) {
    let getNextFibonacci = (function () {
        let first = 0;
        let prev = 1;

        return function () {
            let temp = first;
            first = prev;
            prev = temp + first;
            return first;
        }
    })();

    let fibNums = [];
    for (let ith = 0; ith < num; ith++) {
        fibNums.push(getNextFibonacci());
    }

    return fibNums;
}

console.log(generateFibSequence(15));