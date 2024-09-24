//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return (this.height * this.width).toFixed(2);
  }

  calcPerimeter() {
    return (2 * (this.height + this.width)).toFixed(2);
  }
}

const rect1 = new Rectangle(10, 15);
console.log("Area:", rect1.calcArea());
console.log("Perimeter:", rect1.calcPerimeter());
