class Vehicle {
  protected name: string;
  protected speed: number;
  protected id: string;

  constructor(name: string, speed: number, id: string) {
    this.name = name;
    this.speed = speed;
    this.id = id;
  }

  slowDown(amount: number): void {
    this.speed -= amount;
  }

  speedUp(amount: number): void {
    this.speed += amount;
  }

  showSpeed(): void {
    console.log(`Current speed of ${this.name}: ${this.speed}`);
  }
}

class Bicycle extends Vehicle {
  private gear: number;

  constructor(name: string, speed: number, id: string, gear: number) {
    super(name, speed, id);
    this.gear = gear;
  }

  showSpeed(): void {
    super.showSpeed();
    console.log(`Current gear: ${this.gear}`);
  }
}

const bicycle1 = new Bicycle("My Bicycle", 10, "001", 3);
bicycle1.showSpeed();

bicycle1.speedUp(15);
bicycle1.showSpeed();
bicycle1.slowDown(5);
bicycle1.showSpeed();
