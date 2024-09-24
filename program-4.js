// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accNo, balance) {
    this.accNo = accNo;
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
}

const acc1 = new BankAccount(1254, 20000);
console.log(acc1);
acc1.deposit(1000);
acc1.withdraw(1500);
