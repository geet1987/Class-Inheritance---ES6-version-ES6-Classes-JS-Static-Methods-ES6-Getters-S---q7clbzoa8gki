// import using require
import shape from ./shape;
// declare class
class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y, radius);
        this.radius = radius
    }
 
    getArea() {...}
 
}
 
let circle = new Circle(1,2,3);

// export class using module.exports
default export circle;
