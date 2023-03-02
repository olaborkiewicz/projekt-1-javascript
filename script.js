let incomes = [];
let expenses = [];

const calculator = document.querySelector("#calculator");
const incomeName = document.querySelector("#income-name");
const incomeValue = document.querySelector("#income-value");
const incomeList = document.querySelector("#income-list");
const incomeSum = document.querySelector("#income-sum");
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
    editedName.setAttribute("placeholder", "Nazwa");
    editedName.value = inc.name;

    const editedValue = document.createElement("input");
    editedValue.classList.add("edit-value");
    editedValue.setAttribute("placeholder", "Kwota");
    editedValue.value = inc.value;

    const save = document.createElement("button");
    save.classList.add("button-save");
    save.innerText = "Zapisz";
    save.addEventListener("click", () => {
      inc.name = editedName.value;
      inc.value = editedValue.value;

      if (inc.name === "") {
        alert("Uzupełnij pole 'Nazwa'!");
        save.setAttribute("disabled");
      }

      if (Number(editedValue.value) > 0) {
        updateSummary(incomes, incomeSum, "Suma przychodów: ");
        displayAsRow(inc, parent);
        calculatorValue();
      } else {
        alert("Wpisano złą wartość pola 'Kwota'");
        save.setAttribute("disabled");
      }
    });

    parent.appendChild(editedName);
    parent.appendChild(editedValue);
    parent.appendChild(save);
  };

  const displayAsRow = (inc, parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }

    const buttonIncPanel = document.createElement("div");

    const edit = document.createElement("button");
    edit.classList.add("button");
    edit.innerText = "Edytuj";
    edit.addEventListener("click", () => displayAsForm(inc, parent));
    buttonIncPanel.appendChild(edit);

    const remove = document.createElement("button");
    remove.classList.add("button");
    remove.innerText = "Usuń";
    remove.addEventListener("click", function () {
      parent.remove();
      incomes = incomes.filter((item) => item.id !== inc.id);
      updateSummary(incomes, incomeSum, "Suma przychodów: ");
      calculatorValue();
    });
    buttonIncPanel.appendChild(remove);

    const incTitle = document.createElement("p");
    incTitle.classList.add("inc-title");
    incTitle.innerHTML = `<span>${inc.name} - ${inc.value}</span>`;
    parent.appendChild(incTitle);
    parent.appendChild(buttonIncPanel);
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
    editedName.setAttribute("placeholder", "Nazwa");
    editedName.value = exp.name;

    const editedValue = document.createElement("input");
    editedValue.classList.add("edit-value");
    editedValue.setAttribute("placeholder", "Kwota");
    editedValue.value = exp.value;

    const save = document.createElement("button");
    save.classList.add("button-save");
    save.innerText = "Zapisz";
    save.addEventListener("click", () => {
      exp.name = editedName.value;
      exp.value = editedValue.value;

      if (exp.name === "") {
        alert("Uzupełnij pole 'Nazwa'!");
        save.setAttribute("disabled");
      }

      if (Number(editedValue.value) > 0) {
        updateSummary(expenses, expensesSum, "Suma wydatków: ");
        displayAsRow(exp, parent);
        calculatorValue();
      } else {
        alert("Wpisano złą wartość pola 'Kwota'");
        save.setAttribute("disabled");
      }
    });

    parent.appendChild(editedName);
    parent.appendChild(editedValue);
    parent.appendChild(save);
  };

  const displayAsRow = (exp, parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }

    const buttonExpPanel = document.createElement("div");

    const edit = document.createElement("button");
    edit.classList.add("button");
    edit.innerText = "Edytuj";
    edit.addEventListener("click", () => displayAsForm(exp, parent));
    buttonExpPanel.appendChild(edit);

    const remove = document.createElement("button");
    remove.classList.add("button");
    remove.innerText = "Usuń";
    remove.addEventListener("click", function () {
      parent.remove();
      expenses = expenses.filter((item) => item.id !== exp.id);
      updateSummary(expenses, expensesSum, "Suma wydatków: ");
      calculatorValue();
    });

    buttonExpPanel.appendChild(remove);

    const expTitle = document.createElement("p");
    expTitle.classList.add("exp-title");
    expTitle.innerHTML = `<span>${exp.name} - ${exp.value}</span>`;
    parent.appendChild(expTitle);
    parent.appendChild(buttonExpPanel);
  };

  displayAsRow(exp, newExp);
  expensesList.appendChild(newExp);
};

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

  if (name === "") {
    alert("Uzupełnij pole 'Nazwa'!");
    save.setAttribute("disabled");
  }

  if (value <= 0) {
    alert("Wpisano złą wartość w polu 'Kwota'!");
    save.setAttribute("disabled");
  }

  const id = Date.now();
  const element = {
    id: id,
    name: name,
    value: value,
    type: type,
  };

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
