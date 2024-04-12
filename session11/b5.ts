class Vehicle {
  protected name: string;
  private speed: number;

  constructor(name: string, speed: number) {
    this.name = name;
    this.speed = speed;
  }

  protected accelerate(): void {
    this.speed += 10;
    console.log(`Accelerating... Current speed: ${this.speed}`);
  }

  private brake(): void {
    this.speed -= 5;
    console.log(`Braking... Current speed: ${this.speed}`);
  }
}

class Car extends Vehicle {
  accelerateFromOutside(): void {
    // Có thể gọi phương thức accelerate vì nó là protected và được kế thừa
    this.accelerate();
  }

  brakeFromOutside(): void {
    // Không thể gọi phương thức brake vì nó là private
    // this.brake(); // Sẽ gây lỗi khi thực thi
  }
}

const car1 = new Car("My Car", 0);
car1.accelerateFromOutside(); // phương thức accelerate được gọi từ bên trong lớp con
// car1.brake(); // Lỗi không thể gọi phương thức brake từ bên ngoài lớp
