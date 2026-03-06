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
    const currentBalance = getBalance();
    // Balance calculate
    const newBalance = currentBalance - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    // Get the pin and verify
    const cashoutPin = getValueFromInput("cashout-pin");
    if(cashoutPin === "1234"){
        alert("Cashout successfull");
        setBalance(newBalance);
    } else {
        alert("Invalid pin");
        return;
    }

    // Get the history div
    const history = document.getElementById("history-container");
    // Create new div
    const newHistory = document.createElement("div");
    // Add inner HTML
    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Cashout success to acc-${agentNumber} to <b>${cashoutAmount} BDT</b> at ${new Date()}
        </div>
    `
    // Append to history div
    history.append(newHistory);

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