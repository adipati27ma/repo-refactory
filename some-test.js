class OtherCircle {
  radius = 0;

  area() {
    return `Drawing a circle with radius: ${this.radius}`;
  }
}

class OtherOval extends OtherCircle {
  area() {
    return `Drawing an oval with calculation of radius: ${this.radius}`;
  }

  area(method) {
    return `Drawing an oval with calculation method of ${method} while radius = ${this.radius}`;
  }
}

const newOvalAdipati = new OtherOval(10);

console.log(newOvalAdipati.area());
