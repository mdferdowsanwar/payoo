function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    return Number(balance);
}

function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

function showOnly(id){
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    const history = document.getElementById("history");
    //Hidden all the form
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    history.classList.add("hidden");
    //Remove parameter id's hidden class
    const selectedId = document.getElementById(id);
    selectedId.classList.remove("hidden");
} 