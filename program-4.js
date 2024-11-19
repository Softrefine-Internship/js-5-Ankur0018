// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

const readline = require("readline");

class BankAccount {
  constructor(accNo, balance) {
    // Validate account number
    if (!Number.isInteger(accNo) || accNo <= 0) {
      throw new Error("Account number must be a positive integer.");
    }

    // Validate balance
    if (typeof balance !== "number" || balance < 0) {
      throw new Error("Balance must be a non-negative number.");
    }

    this.accNo = accNo;
    this.balance = balance;
  }

  deposit(money) {
    // Validate deposit amount
    if (typeof money !== "number" || money <= 0) {
      console.log("Deposit amount must be a positive number.");
      return;
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `Are you sure you want to deposit ${money} Rs to your account number ${this.accNo}? (yes/no): `,
      (answer) => {
        if (answer.trim().toLowerCase() === "yes") {
          console.log(answer);
          this.balance += money;
          console.log(
            `${money} Rs credited to your bank account number ${this.accNo}. Current balance: ${this.balance} Rs.`
          );
        } else {
          console.log("Deposit cancelled.");
        }
        rl.close();
      }
    );
  }

  withdraw(money) {
    // Validate withdrawal amount
    if (typeof money !== "number" || money <= 0) {
      console.log("Withdrawal amount must be a positive number.");
      return;
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `Are you sure you want to withdraw ${money} Rs from your account number ${this.accNo}? (yes/no): `,
      (answer) => {
        if (answer.trim().toLowerCase() === "yes") {
          if (money <= this.balance) {
            this.balance -= money;
            console.log(
              `${money} Rs debited from your bank account number ${this.accNo}. Current balance: ${this.balance} Rs.`
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
}

// Test cases
try {
  const acc1 = new BankAccount(1254, 20000);
  console.log(acc1);

  acc1.deposit(1000);

  acc1.withdraw(1500);

  // acc1.deposit(-500);
  // acc1.withdraw(25000);
} catch (error) {
  console.error("Error:", error.message);
}
