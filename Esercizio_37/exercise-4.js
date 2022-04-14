class BankAccount{
    constructor(balance){
        this.balance = balance
    }

    deposit(number){
        this.balance += number

    }

    withdraw(number){
        this.balance -=number
    }

    view(){
        console.log(this.balance)
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();