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

var changeColor= function (balance){

  if(balance < 0){
    $("h2").css("color","red");
  }

  else if(balance <= 99.00){
    $("h2").css("color","purple");
  }

  else if (balance < 500.00){
    $("h2").css("color","blue");
  }

  else if (balance >= 500.00){
    $("h2").css("color","green");
  }
}

var newAccount = Object.create(BankAccount);


$(document).ready(function(){
  $("form#sign-in").submit(function(event){
    event.preventDefault();
    var name=$("input#name").val();
    var IDeposit=parseFloat($("input#InitialDeposit").val());
    newAccount.balance= IDeposit;
    newAccount.personName= name;

    $(".Account-holder").text(newAccount.personName);
    changeColor(newAccount.balance);
    $("#FinalBalance").text(newAccount.balance.toFixed(2));
    $(".hideUntilNewAccount").show();
    $(".hideAfterNewAccountIsMade").css("display","none");

    $("input#InitialDeposit").val("");
    $("input#name").val("");
  });

  $("form#deposit").submit(function(event){
    event.preventDefault();
    var newDeposit=parseFloat($("input#DepositAmount").val());
    var newWithdrawal=parseFloat($("input#WithdrawalAmount").val());
    if (isNaN(newDeposit) && isNaN(newWithdrawal)){
      alert("Please enter a number");
      newDeposit=0;
      newWithdrawal=0;
    }

    else if (!newDeposit){
      newDeposit=0;
    }
    else if(!newWithdrawal){

      newWithdrawal=0;
    }




    newAccount.deposit(newDeposit);
    newAccount.withdraw(newWithdrawal);
    console.log(newAccount.balance.toFixed(2));
    changeColor(newAccount.balance);

    $("#FinalBalance").text(newAccount.balance.toFixed(2));

    $("input#DepositAmount").val("");
    $("input#WithdrawalAmount").val("")
  });

});
