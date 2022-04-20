class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if(amount<0){
      throw new Error('Questo campo non accetta valori negativi')
    }else{
      this.#amount += amount;
    }
  }



  // try{
  //   if(amount>= 0){
  //     this.#amount += amount;
  //   }else{
  //     throw err
  //   }
  // }
  // catch(err){
  //   console.log("questo campo non accetta valori negativi")
  // }





  withdraw(amount) {
    if(amount<0){
      throw new Error('Questo campo non accetta valori negativi')
    }else if(amount>this.#amount){
      throw new Error('Non puoi prelevare una cifra superiore al bilancio corrente')
    }else{
      this.#amount -= amount;
    }

  }







  //   try{
  //     if(amount<0){
  //       throw err
  //     }else{
  //       try{
  //         if(amount>this.#amount){
  //           throw err
  //         }else{
  //           this.#amount -= amount;
  //         }
  //       }catch(err){
  //         console.log('non puoi prelevare una cifra superiore al suo saldo')
  //       }
  //     }
  //   }catch(err){
  //     console.log('questo campo non accetta valori negativi')
  //   }
  // }






  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();