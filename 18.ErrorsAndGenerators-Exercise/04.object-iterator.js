function makeIterable(obj) {
    let index = 0;
    let keys = Object.keys(obj)
        .sort()
        .reverse();
    
    return {
        next: function () {
            if (index >= keys.length) {
                return {
                    done: true
                }
            } else {
                return {
                    done: false,
                    value: keys[index++]
                }
            }
        }
    }
}

// Example:
let obj = {name: "gosho", "13": true, book: "Lord of the Drinks", 2: 2, age: 15, passportNumber: 12345678};
let iterator = makeIterable(obj);
while(true){
    let res = iterator.next();
    if(res.done) break;
    console.log(res.value);
}
