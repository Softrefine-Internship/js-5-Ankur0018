// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    if (typeof make !== "string" || make.trim() === "") {
      throw new Error("Make must be non empty string.");
    }

    if (typeof model !== "string" || model.trim() === "") {
      throw new Error("Model must be non empty string.");
    }

    if (!Number.isInteger(year) || year <= 0) {
      throw new Error("Enter a valid Year");
    }

    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(
      `${this.make}'s model ${this.model} is manufactured in the year ${this.year}`
    );
  }
}

class Car extends Vehicle {
  constructor(make, model, year, noOfDoors) {
    super(make, model, year);

    if (!Number.isInteger(noOfDoors) || noOfDoors < 0) {
      throw new Error("Enter a valid number of Doors");
    }

    this.noOfDoors = noOfDoors;
  }

  displayDetails() {
    console.log(
      `${this.make}'s model ${this.model} is manufactured in the year ${this.year} and contains ${this.noOfDoors} doors.`
    );
  }
}

try {
  const BMW = new Car("BMW", "M7", 2020, 4);
  BMW.displayDetails();
} catch (error) {
  console.log(`Error:`, error.message);
}
