class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount <= 0) throw new Error("Invalid amount");
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > this.#balance)
            throw new Error("Insufficient balance");

        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount();

account.deposit(5000);
console.log("Balance:", account.getBalance());

try {
    account.withdraw(6000);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Final Balance:", account.getBalance());