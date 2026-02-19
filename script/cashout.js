document.getElementById("cashout-btn").addEventListener("click", function() {
    // Get the agent number
    const agentNumber = getValueFromInput("agent-number");
    if(agentNumber.length !== 11){
        alert("Invalid number");
        return;
    }
    // Get the cashout amount
    const cashoutAmount = getValueFromInput("cashout-amount");
    // Get the current balance
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    // Balance calculate
    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    // Get the pin and verify
    const cashoutPin = getValueFromInput("cashout-pin");
    if(cashoutPin === "1234"){
        alert("Cashout successfull");
        balanceElement.innerText = newBalance;
    } else {
        alert("Invalid pin");
        return;
    }

});

/*
document.getElementById("cashout-btn").addEventListener("click", function() {
    // Get the agent number
    const agentNumberInput =  document.getElementById("agent-number");
    const agentNumber = agentNumberInput.value;
    if(agentNumber.length !== 11){
        alert("Invalid number");
        return;
    }
    // Get the cashout amount
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    // Get the current balance
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    // Get the pin and verify
    const cashoutPinInput = document.getElementById("cashout-pin");
    const cashoutPin = cashoutPinInput.value;
    if(cashoutPin === "1234"){
        alert("Cashout successfull");
        balanceElement.innerText = newBalance;
    } else {
        alert("Invalid pin");
        return;
    }
})
*/