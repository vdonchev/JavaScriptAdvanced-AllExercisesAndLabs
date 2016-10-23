function argumentInfo() {
    let passedArgs = {};

    for (let i = 0; i < arguments.length; i++) {
        let argType = typeof arguments[i];
        passedArgs[argType] != undefined ? passedArgs[argType]++ : passedArgs[argType] = 1;
        console.log(`${argType}: ${arguments[i]}`);
    }

    let sorted = [...Object.keys(passedArgs)]
        .sort((a, b) => passedArgs[b] - passedArgs[a])
        .forEach(item => console.log(`${item} = ${passedArgs[item]}`)); // tova ne minava

        // .forEach(item => console.log(item + ' = ' + passedArgs[item])); // tova minava
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });

console.log(typeof {test: 'asd'});
console.log(`${typeof {test: 'asd'}}`);