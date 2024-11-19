// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  calcArea(height, width) {
    if (!Number.isInteger(height) || height < 0) {
      throw new Error("Enter Valid Height");
    }

    if (!Number.isInteger(width) || width < 0) {
      throw new Error("Enter Valid Width");
    }
    this.height = height;
    this.width = width;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();

    if (!Number.isInteger(radius) || radius < 0) {
      throw new Error("Enter Valid Radius");
    }
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

    if (!Number.isInteger(base) || height < 0) {
      throw new Error("Enter Valid Height");
    }

    if (!Number.isInteger(height) || height < 0) {
      throw new Error("Enter Valid Height");
    }
    this.base = base;
    this.height = height;
  }

  calcArea() {
    return `Area of triangle is ${(0.5 * this.base * this.height).toFixed(
      2
    )} units`;
  }
}

try {
  const circ1 = new Circle(10);
  console.log(circ1.calcArea());

  const triangle1 = new Triangle(10, 15);
  console.log(triangle1.calcArea());
} catch (error) {
  console.error(`Error:`, error.message);
}
