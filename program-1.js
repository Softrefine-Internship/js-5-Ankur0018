// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
  constructor(name, age, country) {
    // Validate name
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Name must be a non-empty string.");
    }
    // Validate age
    if (!Number.isInteger(age) || age <= 0) {
      throw new Error("Age must be a positive integer.");
    }
    // Validate country
    if (typeof country !== "string" || country.trim() === "") {
      throw new Error("Country must be a non-empty string.");
    }

    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    return `${this.name} is ${this.age} years old and resides in ${this.country}`;
  }
}

try {
  const ankur = new Person("Ankur", 21, "India");
  console.log(ankur.displayDetails());

  const sophia = new Person("Sophia", 25, "USA");
  console.log(sophia.displayDetails());
} catch (error) {
  console.error(error.message);
}
