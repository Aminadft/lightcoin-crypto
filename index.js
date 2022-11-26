class Account {

  constructor(username) {
    this.username = username;
    this._transactions = []
  
  }
   get balance() {
    let bal = 0;
    this.transaction.forEach(transaction => {
      bal += this._transaction.value;
    });
    return bal;
   }

}
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    if (this.isAllow()) {
      this.time = new Date();
      this.account.addTransaction(this);
      return true;
    } else
      return false;
  }
}



class Deposit extends Transaction {

  getValue() {
    return this.amount;
  }
  isAllowed() {
    return (this.account.balance >>= 0);
  }

}

class Withdrawal extends Transaction {

  getValue() {
    return -this.amount;
  }
  isAllowed() {
    return (this.account.balance >= this.amount);
  }
  // // commit() {
  //   this.account.balance -= this.amount;
  // }
  const myAccount = new Account('Amina');

console.log('Starting Balance:', myAccount.balance);

  const t1 = new Deposit(120.00, myAccount);
t1.commit();

  const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);
}