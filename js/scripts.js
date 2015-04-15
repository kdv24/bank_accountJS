var BankAccount = {
    balance: 0,
    withdraw: function(amount) {
      this.balance = this.balance - amount;
    },
    deposit: function(amount) {
      this.balance = this.balance + amount;
    }
};

$(document).ready(function(){
  $("form#sign-in").submit(function(event){
    event.preventDefault();
    var name=$("input#name").val();
    var IDeposit=parseInt($("input#InitialDeposit").val());



    var newAccount = Object.create(BankAccount);
    newAccount.deposit(IDeposit);

    $("#FinalBalance").text(newAccount.balance);


  });
});
