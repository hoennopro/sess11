class Shape {
  calculateArea(): number;
  calculateArea(width: number, height: number): number;
  calculateArea(radius: number): number;

  calculateArea(arg1?: number, arg2?: number): number {
    if (arg1 !== undefined && arg2 !== undefined) {
      // Hình chữ nhật
      return arg1 * arg2;
    } else if (arg1 !== undefined) {
      // Hình tròn
      return Math.PI * arg1 * arg1;
    } else {
      return 0; // Không có thông số truyền vào
    }
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(3);

console.log("Area of rectangle:", rectangle.calculateArea()); // Diện tích hình chữ nhật
console.log("Area of circle:", circle.calculateArea()); // Diện tích hình tròn
