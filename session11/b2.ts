class Employee {
  public name: string;
  protected company: string;
  private phone: string;

  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }

  printInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Company: ${this.company}`);
    console.log(`Phone: ${this.phone}`);
  }
}

class Manager extends Employee {
  public teamSize: number;

  constructor(name: string, company: string, phone: string, teamSize: number) {
    super(name, company, phone);
    this.teamSize = teamSize;
  }

  printInfo(): void {
    super.printInfo();
    console.log(`Team Size: ${this.teamSize}`);
  }
}

const manager1 = new Manager("eqw", "asd", "9876543210", 10);
manager1.printInfo();
