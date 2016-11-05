function mapSort(map, sortFunction) {
    if (sortFunction == undefined) {
        sortFunction = (a, b) => a[0].toString().localeCompare(b[0].toString());
    }

    let newMap = new Map;
    [...map.entries()]
        .sort(sortFunction)
        .forEach(e => newMap.set(e[0], e[1]));

    return newMap;
}

module.exports = mapSort;