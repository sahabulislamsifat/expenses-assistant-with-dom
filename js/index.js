// console.log("connect....");

// Add Event Listener for Calculate Button

const calculate = document.getElementById("calculate");

// console.log(calculate);
calculate.addEventListener("click", function () {
  //   console.log("kaj kortese.....?");
  const income = Number(document.getElementById("income").value);
  const software = Number(document.getElementById("software").value);
  const courses = Number(document.getElementById("courses").value);
  const internet = Number(document.getElementById("internet").value);

  //   console.log(income, software, courses, internet);
  const totalExpense = software + courses + internet;
  const balance = income - totalExpense;

  //   console.table({ totalExpense, balance });
  const totalExpenseElement = document.getElementById("total-expenses");
  totalExpenseElement.innerText = totalExpense.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const resultVisible = document.getElementById("results");
  resultVisible.classList.remove("hidden");
});
