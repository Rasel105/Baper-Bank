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

function updateBalance(amount, isAdd) {
    const balaceTotal = document.getElementById("balance-total");
    const balaceTotalText = balaceTotal.innerText;
    const previousBalanceTotal = parseFloat(balaceTotalText);
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
        updateTotalField("deposit-total", newDepositAmount);
        updateBalance(newDepositAmount, true);
    });

document
    .getElementById("withdraw-button")
    .addEventListener("click", function() {
        const newWithrawAmount = getInputValue("withdraw-input");
        updateTotalField("withdraw-total", newWithrawAmount);
        updateBalance(newWithrawAmount, false);
    });