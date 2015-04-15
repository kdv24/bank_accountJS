var BankAccount = {
    personName: "",
    balance: 0,
    withdraw: function(amount) {
      this.balance = this.balance - amount;
    },
    deposit: function(amount) {
      this.balance = this.balance + amount;
    }
};

var newAccount = Object.create(BankAccount);


$(document).ready(function(){
  $("form#sign-in").submit(function(event){
    event.preventDefault();
    var name=$("input#name").val();
    var IDeposit=parseFloat($("input#InitialDeposit").val());
    newAccount.balance= IDeposit;
    newAccount.personName= name;

    $(".Account-holder").text(newAccount.personName);
    $("#FinalBalance").text(newAccount.balance.toFixed(2));
    $(".hideUntilNewAccount").show();
    $(".hideAfterNewAccountIsMade").css("display","none");

    $("input#InitialDeposit").val("");
    $("input#name").val("");
  });

  $("form#deposit").submit(function(event){
    event.preventDefault();
    var newDeposit=parseFloat($("input#DepositAmount").val());
    newAccount.deposit(newDeposit);
    $("#FinalBalance").text(newAccount.balance.toFixed(2));
  });

});
