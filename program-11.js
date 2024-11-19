// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.
const readline = require("readline");

class BankAccount {
  constructor(accNo, name, balance) {
    this.accNo = accNo;
    this.name = name;
    this.balance = balance;
  }

  deposit(money) {
    this.balance += money;
    console.log(
      `${money} Rs credited to your Bank account number ${this.accNo}. Current balance: ${this.balance} Rs.`
    );
  }

  withdraw(money) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `Are you sure you want to withdraw ${money} Rs from your Bank account number ${this.accNo}? (yes/no): `,
      (answer) => {
        if (answer.trim().toLowerCase() === "yes") {
          if (money <= this.balance) {
            this.balance -= money;
            console.log(
              `${money} Rs debited from your Bank account number ${this.accNo}. Current balance: ${this.balance} Rs.`
            );
          } else {
            console.log("Insufficient balance.");
          }
        } else {
          console.log("Withdrawal cancelled.");
        }
        rl.close();
      }
    );
  }

  transfer(money, receiverAcc) {
    if (money > this.balance) {
      console.log(`Transfer failed: Insufficient balance.`);
      return;
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `Are you sure you want to transfer ${money} Rs to ${receiverAcc.name} (Account No: ${receiverAcc.accNo})? (yes/no): `,
      (answer) => {
        if (answer.trim().toLowerCase() === "yes") {
          // Deduct from sender account
          this.balance -= money;
          // Add money to receiver's account
          receiverAcc.balance += money;
          console.log(
            `${money} Rs successfully transferred from Account No: ${this.accNo} (${this.name}) to Account No: ${receiverAcc.accNo} (${receiverAcc.name}).`
          );
        } else {
          console.log("Transfer cancelled.");
        }
        rl.close();
      }
    );
  }
}

const BankAcc1 = new BankAccount(125145, "Ankur", 50000);
const BankAcc2 = new BankAccount(421496, "Ayush", 40000);

console.log(BankAcc1);
console.log(BankAcc2);

BankAcc1.deposit(5000);
console.log(BankAcc1);
BankAcc1.transfer(5000, BankAcc2);
