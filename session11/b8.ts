class CheckingAccount extends Account {
  private overdraftLimit: number;

  constructor(accountNumber: string, balance: number, overdraftLimit: number) {
    super(accountNumber, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount: number): void {
    const availableBalance = this.balance + this.overdraftLimit;
    if (amount <= availableBalance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. Current balance: $${this.balance}`);
    } else {
      console.log(`Exceeded overdraft limit. Cannot withdraw $${amount}.`);
    }
  }
}

const checkingAccount1 = new CheckingAccount("CA123456", 1000, 500); // Hạn mức vượt quá số tiền trong tài khoản là $500
checkingAccount1.withdraw(1500); // Rút $1500 (vượt quá số dư nhưng trong hạn mức)
checkingAccount1.withdraw(1000); // Rút $1000 (vượt quá số dư và hạn mức)
