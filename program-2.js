//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    // Validate width
    if (typeof width !== "number" || width <= 0) {
      throw new Error("Width must be a positive number.");
    }
    // Validate height
    if (typeof height !== "number" || height <= 0) {
      throw new Error("Height must be a positive number.");
    }

    this.width = width;
    this.height = height;
  }

  // Calculate area of the rectangle
  calcArea() {
    return (this.height * this.width).toFixed(2);
  }

  // Calculate perimeter of the rectangle
  calcPerimeter() {
    return (2 * (this.height + this.width)).toFixed(2);
  }
}

try {
  const rect1 = new Rectangle(10, 15);
  console.log("Area:", rect1.calcArea()); // Output: Area: 150.00
  console.log("Perimeter:", rect1.calcPerimeter()); // Output: Perimeter: 50.00
} catch (error) {
  console.error(error.message);
}
