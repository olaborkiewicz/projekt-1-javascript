let incomes = [];
let expenses = [];

/* @element: (obiekt do listy)
id: String;
name: String;
value: Number;
*/

const calculator = document.getElementById("#calculator");
const incomeHeader = document.getElementById("#income-header");
const incomeName = document.getElementById("#income-name");
const incomeValue = document.getElementById("#income-value");
const incomeList = document.getElementById("#income-list");
const incomeSum = document.getElementById("#income-sum");
const expensesHeader = document.getElementById("#expenses-header");
const expensesName = document.getElementById("#expenses-name");
const expensesValue = document.getElementById("#expenses-value");
const expensesList = document.getElementById("#expenses-list");
const expensesSum = document.getElementById("#expenses-sum");
const button = document.getElementById("#button");

const renderInc = (inc) => {
  const newInc = document.createElement("div");
  newInc.id = "inc-${inc.id}";
  newInc.classList.add("incList");

  const incTitle = document.createElement("p");
  incTitle.classList.add("inc-title");
  incTitle.innerHTML = `<span>${inc.name}</span>`;
  newInc.appendChild(incTitle);

  incomeList.appendChild(newInc);
};

const renderExp = (exp) => {
  const newExp = document.createElement("div");
  newExp.id = "exp-${exp.id}";
  newExp.classList.add("expList");

  const expTitle = document.createElement("p");
  expTitle.classList.add("exp-title");
  expTitle.innerHTML = `<span>${exp.name}</span>`;
  newExp.appendChild(expTitle);

  expensesList.appendChild(newExp);
};

const addElement = (event) => {
  event.preventDefault();
  const nameInc = incomeName.value;
  console.log(nameInc);
};

const incId = Date.now();
const inc = {
  id: incId,
  name: incomeName,
  value: incomeValue,
};
incomes.push(inc);
renderInc(inc);

const expId = Date.now();

const exp = {
  id: expId,
  name: expensesName,
  value: expensesValue,
};
expenses.push(exp);
renderExp(exp);

incomeName.value = "";
incomeValue.value = "";
expensesName.value = "";
expensesValue.value = "";

incomeSum.innerHTML = `Suma przychodów: ${incomeSum.value}`;
expensesSum.innerHTML = `Suma wydatków: ${expensesSum.value}`;

/*let valueMain = incomeValue - expensesValue;

if (incomeSum > expensesSum) {
  calculator.innerText = `Możesz jeszcze wydać ${valueMain} złotych`;
} else if (incomeSum === expensesSum) {
  calculator.innerText = "Bilans wynosi zero";
} else incomeSum < expensesSum;
{
  calculator.innerText = `Bilans jest ujemny. Jesteś na minusie ${valueMain} złotych`;
}

const listInc = document.createElement("li");
listInc.id = "income-element";
listInc.classList.add("li-income");
document.incomeList.appendChild(listInc);

button.addEventListener("click", () => {
  const nameInc = incomeName.value;
  const amountInc = incomeValue.value;
  listInc.innerText = `${nameInc} - ${amountInc}`;
});*/
