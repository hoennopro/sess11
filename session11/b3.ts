class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  private id: string;

  constructor(name: string, id: string) {
    super(name);
    this.id = id;
  }

  displayInfo(): void {
    super.displayInfo();
    console.log(`ID: ${this.id}`);
  }
}

const student1 = new Student("asd", "12345");
student1.displayInfo();
