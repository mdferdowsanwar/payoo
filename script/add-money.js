document.getElementById("add-money-btn").addEventListener("click", function() {
    // Get the bank name
    const bankName = getValueFromInput("add-money-bank");
    if(bankName === "Select a Bank"){
        alert("Please select a bank");
        return;
    }
    // Get bank acc number
    const bankAccount = getValueFromInput("add-money-number");
    if(bankAccount.length !== 11){
        alert("Invalid bank account");
        return;
    }
    // Get adding amount
    const addAmount = getValueFromInput("add-money-amount");
    // Set new balance
    const newBalance = getBalance() + Number(addAmount);
    // Get the pin & verify
    const pin = getValueFromInput("add-money-pin");
    if(pin === "1234"){
        alert(`Add money successful to ${bankName} at ${new Date()}`);
        setBalance(newBalance);
    } else {
        alert("Invalid pin number");
        return;
    }
    // Get the history div
    const history = document.getElementById("history-container");
    // Create new div
    const newHistory = document.createElement("div");
    // Add inner HTML
    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Add money success from ${bankName}, Acc-${bankAccount} to <b>${addAmount} BDT</b> at ${new Date()}
        </div>
    `
    // Append to history div
    history.append(newHistory);
});