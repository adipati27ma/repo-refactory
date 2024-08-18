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

console.log(shortCircle.drawShape());
console.log(someOval.drawShape());
console.log(someOval.drawShapes('EXCHANGE'));
