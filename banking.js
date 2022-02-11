function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = "";
    return amountValue;
}

document
    .getElementById("deposit-button")
    .addEventListener("click", function() {
        // get the amount deposited
        // const deposositInput = document.getElementById("diposit-input");
        // const newDepositAmountText = deposositInput.value;
        // const newDepositAmount = parseFloat(newDepositAmountText);
        const newDepositAmount = getInputValue("diposit-input");

        // update deposit total
        const depositTotal = document.getElementById("deposit-total");
        const previousDepositText = depositTotal.innerText;
        const previousDepositAmount = parseFloat(previousDepositText);
        const newDepositTotal = previousDepositAmount + newDepositAmount;

        depositTotal.innerText = newDepositTotal;

        // update acount balance
        const balaceTotal = document.getElementById("balance-total");
        const balaceTotalText = balaceTotal.innerText;

        const previousBalanceTotal = parseFloat(balaceTotalText);
        const newBalanceTotal = previousBalanceTotal + newDepositAmount;

        balaceTotal.innerText = newBalanceTotal;
        // clear the deposit input field

        // deposositInput.value = "";
    });

// handle withdraw event handler

document
    .getElementById("withdraw-button")
    .addEventListener("click", function() {
        // const withdrawInput = document.getElementById("withdraw-input");

        // const withdrawAmoutnText = withdrawInput.value;
        // const newWithrawAmount = parseFloat(withdrawAmoutnText);

        const newWithrawAmount = getInputValue("withdraw-input");

        // set Withdraw total
        const withdrawTotal = document.getElementById("withdraw-total");

        const previousWithdrawText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawText);

        const newWithDrawTotal = previousWithdrawTotal + newWithrawAmount;

        withdrawTotal.innerText = newWithDrawTotal;

        // update balaceTotal
        const balaceTotal = document.getElementById("balance-total");
        const previousBalanceText = balaceTotal.innerText;

        const previousBalanceTotal = parseFloat(previousBalanceText);

        const newBalanceTotal = previousBalanceTotal - newWithrawAmount;

        balaceTotal.innerText = newBalanceTotal;
        document.getElementsByClassName;
        // clear withdraw input
        // withdrawInput.value = "";
    });