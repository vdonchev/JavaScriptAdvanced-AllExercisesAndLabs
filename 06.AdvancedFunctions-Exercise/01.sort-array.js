function sortArray(arr, option) {
    let sortAsc = (a, b) => a - b;
    let sortDesc = (a, b) => -(a - b);
    let sortStrategies = {
        asc: sortAsc,
        desc: sortDesc
    };

    return arr.sort(sortStrategies[option]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));