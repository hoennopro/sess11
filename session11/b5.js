"use strict";
class Vehicle {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`Accelerating... Current speed: ${this.speed}`);
    }
    brake() {
        this.speed -= 5;
        console.log(`Braking... Current speed: ${this.speed}`);
    }
}
class Car extends Vehicle {
    accelerateFromOutside() {
        // Có thể gọi phương thức accelerate vì nó là protected và được kế thừa
        this.accelerate();
    }
    brakeFromOutside() {
        // Không thể gọi phương thức brake vì nó là private
        // this.brake(); // Sẽ gây lỗi khi thực thi
    }
}
const car1 = new Car("My Car", 0);
car1.accelerateFromOutside(); // phương thức accelerate được gọi từ bên trong lớp con
// car1.brake(); // Lỗi không thể gọi phương thức brake từ bên ngoài lớp
