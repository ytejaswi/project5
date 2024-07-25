let bill = document.getElementById("billAmount");
let percentage = document.getElementById("percentageTip");
let tip = document.getElementById("tipAmount");
let total = document.getElementById("totalAmount");
let error = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input.";

function manipulateButton() {
  let billAmountTotal = bill.value;
  let percentageAmount = percentage.value;

  if (billAmountTotal === "") {
    error.textContent = errorMessage;
  } else if (percentageAmount === "") {
    error.textContent = errorMessage;
  } else {
    error.textContent = "";
    let billAmount = parseInt(billAmountTotal);
    let percentageTip = parseInt(percentageAmount);

    let calculatedTip = (percentageTip / 100) * billAmount;
    let totalAmount = billAmount + calculatedTip;

    tip.value = calculatedTip;
    total.value = totalAmount;
  }
}
