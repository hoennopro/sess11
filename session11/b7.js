"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. Current balance: $${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. Current balance: $${this.balance}`);
        }
        else {
            console.log("Insufficient funds to withdraw.");
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        const monthlyInterest = (this.balance * this.interestRate) / 12;
        console.log(`Monthly interest: $${monthlyInterest}`);
        return monthlyInterest;
    }
}
const savingsAccount1 = new SavingsAccount("SA123456", 1000, 0.05); // Lãi suất 5% mỗi năm
const monthlyInterest = savingsAccount1.calculateInterest(); // Tính lãi hàng tháng
savingsAccount1.deposit(500); // Gửi thêm $500 vào tài khoản
const updatedMonthlyInterest = savingsAccount1.calculateInterest(); // Tính lại lãi hàng tháng sau khi gửi tiền
