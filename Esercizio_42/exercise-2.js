class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try{
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }else{
        this.#amount += amount;
      }
      }catch(err){
       console.log('Questo campo non accetta valori negativi')
    }

  }

  withdraw(amount) {
  try{
    if(amount<0){
      throw new Error('Questo campo non accetta valori negativi')
    }else if(this.#amount < amount){
      throw new Error('Non puoi prelevare una cifra superiore al bilancio corrente')
    }else{
      this.#amount -= amount;
    }
  }catch(err){
    console.log(err)
  }
}


//     try{
//     if (amount < 0) {
//       throw new Error('The amount provided cannot be negative');
//     }else{
//       try{
//         if(this.#amount < amount) {
//           throw new Error('You cannot withdraw more than account balance');
//         }else{
//           this.#amount -= amount;
//         }
//       }catch(err){
//         console.log('Non puoi prelevare una cifra superiore al bilancio corrente')
//       }
//     }

//   }catch(err){
//     console.log('Questo campo non accetta valori negativi')
//   }
// }


  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();