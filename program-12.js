// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
  constructor(name, departments = []) {
    this.name = name;
    this.departments = departments;
  }

  add(department) {
    this.departments.push(department);
  }

  remove(department) {
    const index = this.departments.findIndex((d) => d === department);
    if (index !== -1) {
      this.departments.splice(index, 1);
    } else {
      console.log(`Department "${department}" not found.`);
    }
  }

  displayBranches() {
    console.log(this.departments);
  }
}

const uni1 = new University("IIT-B", ["CSE", "IT", "Mechanical", "Electric"]);
uni1.add("Civil");
uni1.displayBranches();
uni1.remove("IT");
uni1.displayBranches();
uni1.remove("Metallurgy");
