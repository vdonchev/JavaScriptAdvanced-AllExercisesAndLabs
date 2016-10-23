function orderRectangles(data) {
    let rectangles = [];
    for (let line of data) {
        let rect = (function () {
            let current =         {
                width: Number(line[0]),
                height: Number(line[1]),
                area: function () {
                    return current.width * current.height;
                },
                compareTo: function (other) {
                    let result = other.area() - current.area();
                    return result || other.width - current.width;
                }
            };

            return current;
        })();

        rectangles.push(rect);
    }

    return rectangles.sort((rA, rB) => rA.compareTo(rB));
}

orderRectangles([[10,5], [3,20], [5,12]]);