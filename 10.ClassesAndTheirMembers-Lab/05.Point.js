class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointA, pointB) {
        return Math.sqrt(
            Math.pow(pointB.x - pointA.x, 2) +
            Math.pow(pointB.y - pointA.y, 2));
    }
}