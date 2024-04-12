"use strict";
class Shape {
    calculateArea(arg1, arg2) {
        if (arg1 !== undefined && arg2 !== undefined) {
            // Hình chữ nhật
            return arg1 * arg2;
        }
        else if (arg1 !== undefined) {
            // Hình tròn
            return Math.PI * arg1 * arg1;
        }
        else {
            return 0; // Không có thông số truyền vào
        }
    }
    calculatePerimeter(arg1, arg2) {
        if (arg1 !== undefined && arg2 !== undefined) {
            // Hình chữ nhật
            return 2 * (arg1 + arg2);
        }
        else if (arg1 !== undefined) {
            // Hình tròn
            return 2 * Math.PI * arg1;
        }
        else {
            return 0; // Không có thông số truyền vào
        }
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
}
const rectangle = new Rectangle(5, 10);
const circle = new Circle(3);
console.log("Perimeter of rectangle:", rectangle.calculatePerimeter()); // Chu vi hình chữ nhật
console.log("Perimeter of circle:", circle.calculatePerimeter()); // Chu vi hình tròn
