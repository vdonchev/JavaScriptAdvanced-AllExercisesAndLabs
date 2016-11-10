function* lookAndSay(num) {
    num += '';
    while (num = generateNextNode(num)) {
        yield num;
    }

    function generateNextNode(num) {
        let res = '';
        for (let i = 0; i < num.length; i++) {
            let current = num[i];
            let currentCount = 1;
            for (let innerIndex = i + 1; innerIndex < num.length; innerIndex++) {
                let next = num[innerIndex];
                if (current === next) {
                    currentCount++;
                } else {
                    i = innerIndex - 1;
                    break;
                }

                i = innerIndex;
            }

            res += `${currentCount}${current}`;
        }

        return res;
    }
}

// Example
let lookSequence = lookAndSay(1);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);