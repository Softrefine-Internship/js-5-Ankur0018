// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    return `${this.name} is ${this.age} years old and resides in ${this.country}`;
  }
}

const Ankur = new Person("Ankur", 21, "India");
console.log(Ankur);
console.log(Ankur.displayDetails());
