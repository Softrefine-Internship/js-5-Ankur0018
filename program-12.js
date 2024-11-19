// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

const readline = require("readline");

class University {
  constructor(name, departments = []) {
    this.name = name;
    this.departments = departments;
  }

  add(department) {
    this.departments.push(department);
  }

  remove(department) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const index = this.departments.findIndex((d) => d === department);
    if (index !== -1) {
      rl.question(
        `Are you sure you want to remove the department "${department}"? (yes/no): `,
        (answer) => {
          if (answer.trim().toLowerCase() === "yes") {
            this.departments.splice(index, 1);
            console.log(`Department "${department}" removed.`);
          } else {
            console.log(`Department "${department}" removal canceled.`);
          }
          rl.close();
        }
      );
    } else {
      console.log(`Department "${department}" not found.`);
      rl.close();
    }
  }

  displayDepartments() {
    console.log(`Departments in ${this.name}:`, this.departments);
  }
}

const uni1 = new University("IIT-B", ["CSE", "IT", "Mechanical", "Electrical"]);

uni1.add("Civil");
uni1.displayDepartments();

uni1.remove("IT");

// uni1.remove("Metallurgy");

uni1.displayDepartments();
