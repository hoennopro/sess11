class Product {
  protected name: string;
  protected price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getDescription(): void {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  }
}

class Electronics extends Product {
  private brand: string;

  constructor(name: string, price: number, brand: string) {
    super(name, price);
    this.brand = brand;
  }

  getDescription(): void {
    super.getDescription();
    console.log(`Brand: ${this.brand}`);
  }
}

const electronics1 = new Electronics("Smartphone", 500, "Apple");
electronics1.getDescription();
