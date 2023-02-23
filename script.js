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

const renderInc = (inc) => {
  const newInc = document.createElement("div");
  newInc.id = `inc-${inc.id}`;
  newInc.classList.add("incList");

  const displayAsForm = (inc, parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }
    const editedName = document.createElement("input");
    editedName.classList.add("edit-name");
    editedName.setAttribute("placeholder", "Nazwa przychodu");
    editedName.value = inc.name;

    const editedValue = document.createElement("input");
    editedValue.classList.add("edit-value");
    editedValue.setAttribute("placeholder", "Kwota");
    editedValue.value = inc.value;

    let Save = document.createElement("button");
    Save.classList.add("button-save");
    Save.innerText = "Zapisz";
    Save.addEventListener("click", () => {
      inc.name = editedName.value;
      inc.value = editedValue.value;

      if (Number(editedValue.value) > 0) {
        updateSummary(incomes, incomeSum, "Suma przychodów: ");
        displayAsRow(inc, parent);
        calculatorValue();
      } else {
        alert("Wpisano złą wartość pola 'Kwota'");
      }
    });

    parent.appendChild(editedName);
    parent.appendChild(editedValue);
    parent.appendChild(Save);
  };

  const displayAsRow = (inc, parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }

    const ButtonIncPanel = document.createElement("div");

    const Edit = document.createElement("button");
    Edit.classList.add("button");
    Edit.innerText = "Edytuj";
    Edit.addEventListener("click", () => displayAsForm(inc, parent));
    ButtonIncPanel.appendChild(Edit);

    const Remove = document.createElement("button");
    Remove.classList.add("button");
    Remove.innerText = "Usuń";
    Remove.addEventListener("click", function () {
      parent.remove();
      incomes = incomes.filter((item) => item.id !== inc.id);
      updateSummary(incomes, incomeSum, "Suma przychodów: ");
      calculatorValue();
    });
    ButtonIncPanel.appendChild(Remove);

    const incTitle = document.createElement("p");
    incTitle.classList.add("inc-title");
    incTitle.innerHTML = `<span>${inc.name} - ${inc.value}</span>`;
    parent.appendChild(incTitle);
    parent.appendChild(ButtonIncPanel);
  };

  displayAsRow(inc, newInc);
  incomeList.appendChild(newInc);
};

const renderExp = (exp) => {
  const newExp = document.createElement("div");
  newExp.id = `exp-${exp.id}`;
  newExp.classList.add("expList");

  const displayAsForm = (exp, parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }

    const editedName = document.createElement("input");
    editedName.classList.add("edit-name");
    editedName.setAttribute("placeholder", "Nazwa wydatku");
    editedName.value = exp.name;

    const editedValue = document.createElement("input");
    editedValue.classList.add("edit-value");
    editedValue.setAttribute("placeholder", "Kwota");
    editedValue.value = exp.value;

    let Save = document.createElement("button");
    Save.classList.add("button-save");
    Save.innerText = "Zapisz";
    Save.addEventListener("click", () => {
      exp.name = editedName.value;
      exp.value = editedValue.value;

      if (Number(editedValue.value) > 0) {
        updateSummary(expenses, expensesSum, "Suma wydatków: ");
        displayAsRow(exp, parent);
        calculatorValue();
      } else {
        alert("Wpisano złą wartość pola 'Kwota'");
      }
    });

    parent.appendChild(editedName);
    parent.appendChild(editedValue);
    parent.appendChild(Save);
  };

  const displayAsRow = (exp, parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }

    const ButtonExpPanel = document.createElement("div");

    const Edit = document.createElement("button");
    Edit.classList.add("button");
    Edit.innerText = "Edytuj";
    Edit.addEventListener("click", () => displayAsForm(exp, parent));
    ButtonExpPanel.appendChild(Edit);

    const Remove = document.createElement("button");
    Remove.classList.add("button");
    Remove.innerText = "Usuń";
    Remove.addEventListener("click", function () {
      parent.remove();
      expenses = expenses.filter((item) => item.id !== exp.id);
      updateSummary(expenses, expensesSum, "Suma wydatków: ");
      calculatorValue();
    });

    ButtonExpPanel.appendChild(Remove);

    const expTitle = document.createElement("p");
    expTitle.classList.add("exp-title");
    expTitle.innerHTML = `<span>${exp.name} - ${exp.value}</span>`;
    parent.appendChild(expTitle);
    parent.appendChild(ButtonExpPanel);
  };

  displayAsRow(exp, newExp);
  expensesList.appendChild(newExp);
};

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

  if (value < 0) {
    alert("Wpisano ujemną wartość w polu 'Kwota'!");
    Save.setAttribute("disabled");
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

  updateSummary(incomes, incomeSum, "Suma przychodów: ");
  updateSummary(expenses, expensesSum, "Suma wydatków: ");
  calculatorValue();
};

const updateSummary = (array, summaryForm, label) => {
  summaryForm.innerHTML =
    label + array.reduce((acc, value) => acc + Number(value.value), 0);
};

incForm.addEventListener("submit", (e) => addElement(e, "INCOME"));
expForm.addEventListener("submit", (e) => addElement(e, "EXPENSE"));

const calculatorValue = () => {
  const incSum = incomes.reduce((acc, value) => acc + Number(value.value), 0);
  const expSum = expenses.reduce((acc, value) => acc + Number(value.value), 0);
  const sumSum = incSum - expSum;

  if (sumSum > 0) {
    calculator.innerHTML = `<span class="calculator-content">Możesz jeszcze wydać ${sumSum} zł</span>`;
  } else if (sumSum === 0) {
    calculator.innerHTML = `<span class="calculator-content">Bilans wynosi zero</span>`;
  } else {
    calculator.innerHTML = `<span class="calculator-content">Bilans jest ujemny. Jesteś na minusie ${sumSum} zł</span>`;
  }
};
