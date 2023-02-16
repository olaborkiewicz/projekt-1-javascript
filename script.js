let incomes = [];
console.log(incomes);
let expenses = [];
console.log(expenses);

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

//////////////////////////////////////////////////////////////////

const renderInc = (inc) => {
  const Edit = document.createElement("button");
  Edit.classList.add("button");
  Edit.innerText = "Edytuj";

  const Remove = document.createElement("button");
  Remove.classList.add("button");
  Remove.innerText = "Usuń";

  const newInc = document.createElement("div");
  newInc.id = `inc-${inc.id}`;
  newInc.classList.add("incList");

  const incTitle = document.createElement("p");
  incTitle.classList.add("inc-title");
  incTitle.innerHTML = `<span>${inc.name} - ${inc.value}</span>`;
  newInc.appendChild(incTitle);
  newInc.appendChild(Edit);
  newInc.appendChild(Remove);

  incomeList.appendChild(newInc);

  Edit.addEventListener("click", function () {
    newInc.remove();

    const editedName = document.createElement("input");
    editedName.classList.add("edit-name");
    editedName.setAttribute("placeholder", "Nazwa przychodu");

    const editedValue = document.createElement("input");
    editedValue.classList.add("edit-value");
    editedValue.setAttribute("placeholder", "Kwota");

    let Save = document.createElement("button");
    Save.classList.add("button");
    Save.innerText = "Zapisz";

    const editedInc = document.createElement("form");
    editedInc.id = "edited-inc";
    editedInc.appendChild(editedName);
    editedInc.appendChild(editedValue);
    editedInc.appendChild(Save);

    incomeList.appendChild(editedInc);
  });

  Save.addEventListener("click", function () {
    editedInc.remove();
  });

  Remove.addEventListener("click", function () {
    newInc.remove();
  });
};

/////////////////////////////////////////////////////////////////////////////////////

const renderExp = (exp) => {
  const Edit = document.createElement("button");
  Edit.classList.add("button");
  Edit.innerText = "Edytuj";

  const Remove = document.createElement("button");
  Remove.classList.add("button");
  Remove.innerText = "Usuń";

  const newExp = document.createElement("div");
  newExp.id = `exp-${exp.id}`;
  newExp.classList.add("expList");

  const expTitle = document.createElement("p");
  expTitle.classList.add("exp-title");
  expTitle.innerHTML = `<span>${exp.name} - ${exp.value}</span>`;
  newExp.appendChild(expTitle);
  newExp.appendChild(Edit);
  newExp.appendChild(Remove);

  expensesList.appendChild(newExp);

  Edit.addEventListener("click", function () {
    newExp.remove();

    const editedName = document.createElement("input");
    editedName.classList.add("edit-name");
    editedName.setAttribute("placeholder", "Nazwa przychodu");

    const editedValue = document.createElement("input");
    editedValue.classList.add("edit-value");
    editedValue.setAttribute("placeholder", "Kwota");

    let Save = document.createElement("button");
    Save.classList.add("button");
    Save.innerText = "Zapisz";

    const editedExp = document.createElement("form");
    editedExp.id = "edited-exp";
    editedExp.appendChild(editedName);
    editedExp.appendChild(editedValue);
    editedExp.appendChild(Save);

    expensesList.appendChild(editedExp);
  });

  Save.addEventListener("click", function () {
    editedExp.remove();
  });

  Remove.addEventListener("click", function () {
    newExp.remove();
  });
};

/////////////////////////////////////////////////////////////////

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
    console.log("income array: ", incomes);
  }
  if (type === "EXPENSE") {
    expenses.push(element);
    renderExp(element);
    console.log("expenses array: ", expenses);
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
