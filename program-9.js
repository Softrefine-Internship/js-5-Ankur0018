// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  constructor(name, branches = []) {
    this.name = name;
    this.branches = branches;
  }

  add(branch) {
    this.branches.push(branch);
  }

  remove(branch) {
    const index = this.branches.findIndex(
      (b) => b.toLowerCase() === branch.toLowerCase()
    );
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log(`Branch "${branch}" removed successfully`);
    } else {
      console.log(`Branch "${branch}" not found.`);
    }
  }

  displayBranches() {
    console.log(`Branches : ${this.branches}`);
  }
}

const SBI = new Bank("SBI", ["Zanzarda Road"]);
SBI.add("Kalva Chowk");
SBI.displayBranches();

SBI.remove("Zanzarda Road");
SBI.displayBranches();
