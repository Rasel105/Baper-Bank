function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = "";
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balaceTotal = document.getElementById("balance-total");
    const balaceTotalText = balaceTotal.innerText;
    const previousBalanceTotal = parseFloat(balaceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balaceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balaceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balaceTotal.innerText = previousBalanceTotal - amount;
    }
}

document
    .getElementById("deposit-button")
    .addEventListener("click", function() {
        const newDepositAmount = getInputValue("diposit-input");

        if (newDepositAmount > 0) {
            updateTotalField("deposit-total", newDepositAmount);
            updateBalance(newDepositAmount, true);
        }
    });

document
    .getElementById("withdraw-button")
    .addEventListener("click", function() {
        const withrawAmount = getInputValue("withdraw-input");
        const currentBalace = getCurrentBalance();
        if (withrawAmount > 0 && withrawAmount <= currentBalace) {
            updateTotalField("withdraw-total", withrawAmount);
            updateBalance(withrawAmount, false);
        }
        if (withrawAmount > currentBalace) {
            alert("You cannot withdraw more than current balance");
        }
    });