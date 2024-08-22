abstract class Shape {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  drawShape() {}
}

class Circle extends Shape {
  radius: number;
  constructor(name: string, radius: number) {
    super(name);
    this.radius = radius;
  }

  drawShape(): string {
    return `Drawing a circle with radius: ${this.radius}`;
  }
}

class Oval extends Circle {
  constructor(name: string, radius: number) {
    super(name, radius);
  }

  drawShape(): string {
    return `Drawing an oval with some calculation for radius: ${this.radius}`;
  }

  drawShapes(method: string): string {
    return `Drawing an oval with some calculation ${method} method for radius: ${this.radius}`;
  }
}

// const myShape = new Shape('My shape'); // This will throw an Error
const shortCircle = new Circle('Short Circle', 0.5); // This will work fine.
const someOval = new Oval('Short Circle', 1); // This will work fine.

// console.log(shortCircle.drawShape());
// console.log(someOval.drawShape());
// console.log(someOval.drawShapes('EXCHANGE'));

// End of Practice Section_________________________________________________________

// Encapsulation==========================================================
// kelas product (nama, harga, stock) => purchase_quantity berdasarkan stock
// parent payment ()
class Product {
  private name: string;
  private price: number;
  private stock: number;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  // docs: getter setter Price
  getPrice(): number {
    return this.price;
  }
  setPrice(price: number): void {
    this.price = price;
  }

  // docs: getter setter Stock
  getStock(): number {
    return this.stock;
  }
  setStock(stock: number): void {
    this.stock = stock;
  }

  purchaseQuantity(quantity: number): number {
    this.stock - quantity;

    const totalPrice = quantity * this.price;
    return totalPrice;
  }
}

const productA = new Product('Product A', 1000, 10);

console.log('total harga harus dibayar:', productA.purchaseQuantity(2));

// Polymorphism==========================================================
// Buatlah sebuah kelas parent PaymentMethod dengan metode processPayment(amount) yang akan di-override oleh subclass.
// Buatlah tiga subclass CreditCard, PayPal, dan BankTransfer ya
abstract class PaymentMethod {
  processPayment(amount: number): void {}
}

class CreditCard extends PaymentMethod {
  processPayment(amount: number): string {
    return `Processing payment for amount: ${amount} using Credit Card`;
  }
}

class PayPal extends PaymentMethod {
  processPayment(amount: number): string {
    return `Processing payment for amount: ${amount} using PAYPAL`;
  }
}

class BankTransfer extends PaymentMethod {
  processPayment(amount: number): string {
    return `Processing payment for amount: ${amount} using Bank Mandiri`;
  }
}

const creditA = new CreditCard();
const paypalA = new PayPal();
const bankMandiri = new BankTransfer();

console.log(creditA.processPayment(1000));
console.log(paypalA.processPayment(1000));
console.log(bankMandiri.processPayment(1000));
