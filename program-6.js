// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getAnnualSalary() {
    return `${(this.salary * 12).toFixed(2)} Rs`;
  }
}

class Manager extends Employee {
  bonus = 15000;
  constructor(name, salary, branch) {
    super(name, salary);
    this.branch = branch;
  }

  getAnnualSalary() {
    return `${(this.salary * 12 + this.bonus).toFixed(2)} Rs`;
  }
}

const emp1 = new Employee("emp1", 25000);
console.log(emp1.getAnnualSalary());

const Ankur = new Manager("Ankur", 50000, "IT");
console.log(Ankur);
console.log(Ankur.getAnnualSalary());
