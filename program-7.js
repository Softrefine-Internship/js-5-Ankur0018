// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;

    if (!Number.isInteger(year) || year < 0) {
      throw new Error("Enter a valid Year");
    }
    this.year = year;
  }

  displayDetails() {
    console.log(
      `${this.author}'s book ${this.title} was published in the year ${this.year}`
    );
  }
}

class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);

    if (!Number.isInteger(price) || price < 0) {
      throw new Error("Enter a valid amount");
    }

    this.price = price;
  }

  displayDetails() {
    console.log(
      ` Book "${this.title}" written by "${this.author}" was published in the year ${this.year} and is of ${this.price} Rs`
    );
  }
}

try {
  const ebook1 = new Ebook("Do Epic Shit", "Ankur Warikoo", 2021, 450);
  ebook1.displayDetails();
} catch (error) {
  console.error(`Error:`, error.message);
}
