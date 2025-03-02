// console.log("connect....");

// Getting all the values
// const income = Number(document.getElementById("income").value);
// const software = Number(document.getElementById("software").value);
// const courses = Number(document.getElementById("courses").value);
// const internet = Number(document.getElementById("internet").value);
//

// Get Function by ID
function getInputValueById(id) {
  return Number(document.getElementById(id).value);
}

// function showError(id) {
//   return document.getElementById(id).classList.remove("hidden");
// }

// Add Event Listener for Calculate Button

const calculate = document.getElementById("calculate");
let serialNo = 0;

// console.log(calculate);
calculate.addEventListener("click", function () {
  //   console.log("kaj kortese.....?");
  serialNo += 1;
  //   const income = Number(document.getElementById("income").value);
  //   const software = Number(document.getElementById("software").value);
  //   const courses = Number(document.getElementById("courses").value);
  //   const internet = Number(document.getElementById("internet").value);

  // GET VALUE FROM FUNCTION
  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");

  if (income <= 0 || isNaN(income)) {
    document.getElementById("income-error").classList.remove("hidden");
    return;
  }
  // showError("income-error");
  if (software <= 0 || isNaN(software)) {
    document.getElementById("software-error").classList.remove("hidden");
    return;
  }
  // showError("software-error");
  if (courses <= 0 || isNaN(courses)) {
    document.getElementById("courses-error").classList.remove("hidden");
    return;
  }
  // showError("courses-error");
  if (internet <= 0 || isNaN(internet)) {
    document.getElementById("internet-error").classList.remove("hidden");
    return;
  }
  // showError("internet-error");
  //   console.log(income, software, courses, internet);
  const totalExpense = software + courses + internet;
  const balance = income - totalExpense;

  if (totalExpense > income) {
    document.getElementById("logic-error").classList.remove("hidden");
    return;
  }

  //   console.table({ totalExpense, balance });
  const totalExpenseElement = document.getElementById("total-expenses");
  totalExpenseElement.innerText = totalExpense.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const resultVisible = document.getElementById("results");
  resultVisible.classList.remove("hidden");

  const historyElement = document.createElement("div");
  historyElement.className =
    "bg-white border-l-2 p-4 rounded-md border-indigo-600";
  historyElement.innerHTML = `
  <p class='text-xs text-gray-500'>Serial No: ${serialNo}</p>
    <p class='text-xs text-gray-500'>${new Date().toLocaleDateString()}</p>
    <p class='text-xs'>Income: $${income.toFixed(2)}</p>
    <p class='text-xs text-gray-500'>Expenses: $${totalExpense.toFixed(2)}</p>
    <p class='text-xs text-gray-500'>Balance: $${balance.toFixed(2)}</p>
    `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyElement, historyContainer.firstChild);
});

// addEventListener for Savings button

const calculateSavings = document.getElementById("calculate-savings");

calculateSavings.addEventListener("click", function () {
  //   console.log("testing......");
  //   const income = Number(document.getElementById("income").value);
  //   const software = Number(document.getElementById("software").value);
  //   const courses = Number(document.getElementById("courses").value);
  //   const internet = Number(document.getElementById("internet").value);
  //   const savingsPercentage = Number(document.getElementById("savings").value);

  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");
  const savingsPercentage = getInputValueById("savings");

  if (savingsPercentage <= 0 || isNaN(savingsPercentage)) {
    document.getElementById("savings-error").classList.remove("hidden");
    return;
  }
  // console.log(savingsPercentage);
  const totalExpense = software + courses + internet;
  const balance = income - totalExpense;

  const savingAmount = (savingsPercentage * balance) / 100;
  const remainingBalance = balance - savingAmount;
  //   console.log(savingAmount);
  const savingsElement = document.getElementById("savings-amount");
  savingsElement.innerText = savingAmount.toFixed(2);

  const remainingBalanceElement = document.getElementById("remaining-balance");
  remainingBalanceElement.innerText = remainingBalance.toFixed(2);
});

// Tab Switching

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");

historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "w-1/2",
    "py-2",
    "rounded-l-md",
    "focus:outline-none",
    "transition-colors",
    "duration-200",
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  assistantTab.classList.remove(
    "py-2",
    "rounded-l-md",
    "focus:outline-none",
    "transition-colors",
    "duration-200",
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "w-1/2",
    "py-2",
    "rounded-l-md",
    "focus:outline-none",
    "transition-colors",
    "duration-200",
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  historyTab.classList.remove(
    "py-2",
    "rounded-l-md",
    "focus:outline-none",
    "transition-colors",
    "duration-200",
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});

// Live Input Validation
document.getElementById("income").addEventListener("input", function () {
  const inputValue = Number(document.getElementById("income").value);

  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("income-error").classList.remove("hidden");
    return;
  }
});

document.getElementById("software").addEventListener("input", function () {
  const inputValue = Number(document.getElementById("software").value);

  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("software-error").classList.remove("hidden");
    return;
  }
});

document.getElementById("courses").addEventListener("input", function () {
  const inputValue = Number(document.getElementById("courses").value);

  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("courses-error").classList.remove("hidden");
    return;
  }
});

document.getElementById("internet").addEventListener("input", function () {
  const inputValue = Number(document.getElementById("internet").value);

  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("internet-error").classList.remove("hidden");
    return;
  }
});

document.getElementById("savings").addEventListener("input", function () {
  const inputValue = Number(document.getElementById("savings").value);

  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("savings-error").classList.remove("hidden");
    return;
  }
});
