const calculator = document.getElementById("#calculator");
const incomeHeader = document.getElementById("#income-header");
const incomeList = document.getElementById("#income-list");
const incomeSum = document.getElementById("#income-sum");
const expensesHeader = document.getElementById("#expenses-header");
const expensesList = document.getElementById("#expenses-list");
const incomeName = document.getElementById("#income-name");
const incomeValue = document.getElementById("#income-value");
const button = document.getElementById("#button");
const expensesName = document.getElementById("#expenses-name");
const expensesValue = document.getElementById("#expenses-value");
const expensesSum = document.getElementById("#expenses-sum");

let valueMain = incomeValue - expensesValue;

if (incomeSum > expensesSum) {
  calculator.innerText = `Możesz jeszcze wydać ${valueMain} złotych`;
} else if (incomeSum === expensesSum) {
  calculator.innerText = "Bilans wynosi zero";
} else incomeSum < expensesSum;
{
  calculator.innerText = `Bilans jest ujemny. Jesteś na minusie ${valueMain} złotych`;
}

const nameInc = incomeName.value;
if (!nameInc.length) {
  incomeName.innerText = "Nazwa przychodu";
}

const amountInc = incomeValue.value;
if (!amountInc.length) {
  incomeValue.innerText = "Kwota";
}

const listInc = document.createElement("li");
listInc.id = "income-element";
listInc.classList.add("li-income");
document.incomeList.appendChild(listInc);

button.addEventListener("click", () => {
  listInc.innerText = `${nameInc} - ${amountInc}`;
});
