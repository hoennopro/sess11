"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`Current speed of ${this.name}: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showSpeed() {
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
