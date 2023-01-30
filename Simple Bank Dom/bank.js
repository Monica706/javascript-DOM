

//============================ Deposite balance ========================================//

let deposite = document.getElementById('deposit-btn');

deposite.addEventListener('click', function(e){
  let depositValue = document.getElementById('deposit-input').value;
   let depositNewValue = parseFloat(depositValue);

//------------------------------------------------------//
  let depositeBalance = document.getElementById('deposit').innerHTML;
  let depositNewBalance = parseFloat(depositeBalance);
 
  let total_deposit = depositNewValue + depositNewBalance;
  document.getElementById('deposit').innerHTML = total_deposit;


//------------deposit-balance adding with total balance -------//

let balanceValue = document.getElementById('balance').innerHTML;
let balanceNewValue = parseFloat(balanceValue);
  
  let total_balance = depositNewValue + balanceNewValue;
  document.getElementById('balance').innerHTML = total_balance;

});

//============================ Deposite balance ========================================//


//============================ withdrow balance ========================================//

 let withdraw = document.getElementById('withdraw-btn');

  withdraw.addEventListener('click', function() {
    let withdrawValue = document.getElementById('withdraw-input').value;
    let withdrawNewValue = parseFloat(withdrawValue);
    //------------------------------------//

    let withdrawbalance = document.getElementById('withdraw').innerHTML;
    let withdrawNewbalance = parseFloat(withdrawbalance);

    let total_withdraw = withdrawNewValue + withdrawNewbalance;
    document.getElementById('withdraw').innerHTML = total_withdraw;

    //------------withdraw-balance removing from balance -------//

    let balanceValue = document.getElementById('balance').innerHTML;
     let balanceNewValue = parseFloat(balanceValue);
  
    let totalMainbalance = balanceNewValue - withdrawNewValue;
    document.getElementById('balance').innerHTML = totalMainbalance;

  });

//============================ withdrow balance ========================================//