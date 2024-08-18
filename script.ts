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
}

// const myShape = new Shape('My shape'); // This will throw an Error
const shortCircle = new Circle('Short Circle', 0.5); // This will work fine.

console.log(shortCircle);
