let incomes = [];
let expenses = [];

/* @element: (obiekt do listy)
id: String;
name: String;
value: Number;
*/

const calculator = document.querySelector("#calculator");
const incomeHeader = document.querySelector("#income-header");
const incomeName = document.querySelector("#income-name");
const incomeValue = document.querySelector("#income-value");
const incomeList = document.querySelector("#income-list");
const incomeSum = document.querySelector("#income-sum");
const expensesHeader = document.querySelector("#expenses-header");
const expensesName = document.querySelector("#expenses-name");
const expensesValue = document.querySelector("#expenses-value");
const expensesList = document.querySelector("#expenses-list");
const expensesSum = document.querySelector("#expenses-sum");
const incForm = document.querySelector("#inc-form");
const expForm = document.querySelector("#exp-form");

const renderInc = (inc) => {
  const Edit = document.createElement("button");
  Edit.classList.add("button");
  Edit.innerText = "Edytuj";

  const Remove = document.createElement("button");
  Remove.classList.add("button");
  Remove.innerText = "Usuń";

  const newInc = document.createElement("div");
  newInc.id = "inc-${inc.id}";
  newInc.classList.add("incList");

  const incTitle = document.createElement("p");
  incTitle.classList.add("inc-title");
  incTitle.innerHTML = `<span>${inc.name} - ${inc.value}</span>`;
  newInc.appendChild(incTitle);
  newInc.appendChild(Edit);
  newInc.appendChild(Remove);

  incomeList.appendChild(newInc);
};

const renderExp = (exp) => {
  const newExp = document.createElement("div");
  newExp.id = "exp-${exp.id}";
  newExp.classList.add("expList");

  const expTitle = document.createElement("p");
  expTitle.classList.add("exp-title");
  expTitle.innerHTML = `<span>${exp.name} - ${exp.value}</span>`;
  newExp.appendChild(expTitle);

  const expEdit = (e, id) => {
    const expenseIndex = expenses.findIndex((item) => item.id === id);
    expenses[expenseIndex].name.value = "";
    expForm.addEventListener("submit", (e) => addElement(e, "EXPENSE"));
  };

  const Edit = document.createElement("button");
  Edit.classList.add("button");
  Edit.innerText = "Edytuj";
  newExp.appendChild(Edit);
  Edit.addEventListener("click", (e) => expEdit(e, exp.id));

  const expRemove = (e, id) => {
    const expenseIndex = expenses.findIndex((item) => item.id === id);
    expenses[expenseIndex].name.value = "";
  };

  const Remove = document.createElement("button");
  Remove.classList.add("button");
  Remove.innerText = "Usuń";
  newExp.appendChild(Remove);
  Remove.addEventListener("click", (e) => expRemove(e, exp.id));

  expensesList.appendChild(newExp);
};

/*const renderEl = (element) => {
  const newEl = document.createElement("div");
  newEl.id = "el-${id}";
  newEl.classList.add("list");

  const elTitle = document.createElement("p");
  elTitle.classList.add("el-title");
  elTitle.innerHTML = `<span>${element.name} - ${element.value}</span>`;
  newEl.appendChild(elTitle);

  if (element.type === "INCOME") {
    incomeList.appendChild(newEl);
  } else element.type === "EXPENSE";
  expensesList.appendChild(newEl);
};*/

console.log("PAGE LOADED");

const addElement = (event, type) => {
  event.preventDefault();
  let name, value;
  if (type === "INCOME") {
    name = incomeName.value;
    value = incomeValue.value;
  }
  if (type === "EXPENSE") {
    name = expensesName.value;
    value = expensesValue.value;
  }

  const id = Date.now();
  const element = {
    id: id,
    name: name,
    value: value,
    type: type,
  };

  console.log(element);

  if (type === "INCOME") {
    incomes.push(element);
    renderInc(element);
  }
  if (type === "EXPENSE") {
    expenses.push(element);
    renderExp(element);
  }

  incomeName.value = "";
  incomeValue.value = "";
  expensesName.value = "";
  expensesValue.value = "";

  incomeSum.innerHTML = `Suma przychodów: `;
  expensesSum.innerHTML = `Suma wydatków:`;
};

incForm.addEventListener("submit", (e) => addElement(e, "INCOME"));
expForm.addEventListener("submit", (e) => addElement(e, "EXPENSE"));

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
