// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(ID, name, price) {
    this.ID = ID;
    this.name = name;
    this.price = price;

    // Validate that the price is a positive number
    if (isNaN(price) || price <= 0) {
      throw new Error("Price must be a positive number.");
    }
  }

  purchase(quantity) {
    // Validate that the quantity is a positive integer
    if (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity)) {
      throw new Error("Quantity must be a positive integer.");
    }

    return `Total Price: ${(quantity * this.price).toFixed(2)} Rs`;
  }
}

class PersonalCareProduct extends Product {
  constructor(ID, name, price, yearsOfWarranty) {
    super(ID, name, price);
    this.yearsOfWarranty = yearsOfWarranty;

    // Validate that the warranty period is a positive integer
    if (
      isNaN(yearsOfWarranty) ||
      yearsOfWarranty < 0 ||
      !Number.isInteger(yearsOfWarranty)
    ) {
      throw new Error("Warranty period must be a non-negative integer.");
    }
  }

  purchase(quantity) {
    // Validate that the quantity is a positive integer
    if (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity)) {
      throw new Error("Quantity must be a positive integer.");
    }

    return `Total Price of your order "${this.name}" is ${(
      quantity * this.price
    ).toFixed(2)} Rs and has ${this.yearsOfWarranty} years of warranty period`;
  }
}

try {
  const BeardofaceWash = new PersonalCareProduct(
    1505255,
    "Beardo Face Wash",
    500,
    2
  );
  console.log(BeardofaceWash.purchase(2));
} catch (error) {
  console.error("Error:", error.message);
}
