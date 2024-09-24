// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  calcArea(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calcArea() {
    return `Area of circle is ${(Math.PI * this.radius * this.radius).toFixed(
      2
    )} units`;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calcArea() {
    return `Area of triangle is ${(0.5 * this.base * this.height).toFixed(
      2
    )} units`;
  }
}

const circ1 = new Circle(10);
console.log(circ1.calcArea());

const triangle1 = new Triangle(10, 15);
console.log(triangle1.calcArea());
