// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
  constructor(accNo, name, balance) {
    this.accNo = accNo;
    this.name = name;
    this.balance = balance;
  }

  deposit(money) {
    this.balance += money;
    console.log(
      `${money} Rs credited to your Bank account number ${this.accNo} and your current balance is ${this.balance} Rs`
    );
  }

  withdraw(money) {
    if (money < this.balance) {
      this.balance -= money;
      console.log(
        `${money} Rs debited from your Bank account number ${this.accNo} and your current balance is ${this.balance} Rs`
      );
    } else console.log(`Insufficient Balance`);
  }

  transfer(money, receiverAcc) {
    if (money > this.balance || !this || !receiverAcc) return;
    this.balance -= money;
    receiverAcc.balance += money;

    console.log(
      `${money} Rs debited from your Bank account number ${this.accNo} and transferred to ${BankAcc2.name}'s account number ${BankAcc2.accNo}`
    );
  }
}

const BankAcc1 = new BankAccount(125145, "Ankur", 50000);
const BankAcc2 = new BankAccount(421496, "Ayush", 40000);
console.log(BankAcc1);
BankAcc1.deposit(5000);
BankAcc1.withdraw(10000);

BankAcc1.transfer(20000, BankAcc2);
console.log(BankAcc2);
console.log(BankAcc1);
