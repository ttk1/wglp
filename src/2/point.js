exports.getPoint = (x, y, z) => {
    return new Point(x, y, z);
}
class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}