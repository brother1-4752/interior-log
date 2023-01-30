const plusBtn = document.querySelector(".plus");
const boughtBtn = document.querySelector(".bought");
const pendingBox = document.querySelector(".pending__container");
const boughtBox = document.querySelector(".bought__container");

const journalForm = document.querySelector(".journal__header--form");
const journalInput = document.querySelector(".journal__header--input");
const pendingList = document.querySelector(".pending--list");
const boughtList = document.querySelector(".bought--list");

let PENDING_TODOS = [];
let BOUGHT_TODOS = [];
const PENDING_KEY = "pending";
const BOUGHT_KEY = "BOUGHT";

function showContainer(e) {
  const currentBox =
    `${e.target.dataset.value}` === `${pendingBox.className}`
      ? pendingBox
      : boughtBox;

  if (currentBox.style.opacity != 1) {
    currentBox.style.opacity = 1;
  } else {
    currentBox.style.opacity = 0;
  }
}

function saveBoughtToDos() {
  localStorage.setItem(BOUGHT_KEY, JSON.stringify(BOUGHT_TODOS));
}

function savePendingToDos() {
  localStorage.setItem(PENDING_KEY, JSON.stringify(PENDING_TODOS));
}

function clickBackBtn(e) {
  const thingToBeBack = e.target.parentElement.parentElement;
  const todo = thingToBeBack.innerText;
  const backTodoObj = {
    text: todo,
    id: thingToBeBack.id,
  };
  PENDING_TODOS.push(backTodoObj);
  paintPendingTodos(backTodoObj);

  // BOUGHT_TODOS = BOUGHT_TODOS.filter((t) => t.id !== thingToBeBack.id);

  PENDING_TODOS = PENDING_TODOS.filter(
    (t) => t.id !== parseInt(thingToBeBack.id)
  );

  thingToBeBack.remove();
  savePendingToDos();
  saveBoughtToDos();
}

function paintBoughtTodos(obj) {
  const deleteBtn = document.createElement("div");
  const backBtn = document.createElement("div");
  const boughtItem = document.createElement("li");
  const boughtSpan = document.createElement("span");

  boughtItem.id = obj.id;

  boughtItem.appendChild(boughtSpan);
  boughtItem.appendChild(deleteBtn);
  boughtItem.appendChild(backBtn);
  boughtSpan.innerText = obj.text;
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteBtn.addEventListener("click", clickDeleteBtn);
  backBtn.innerHTML = `<i class="fa-solid fa-left-long"></i>`;
  backBtn.addEventListener("click", clickBackBtn);
  boughtList.appendChild(boughtItem);
}

function clickDoneBtn(e) {
  const thingToBeDone = e.target.parentElement.parentElement;
  const todo = thingToBeDone.innerText;
  const doneTodoObj = {
    text: todo,
    id: thingToBeDone.id,
  };
  BOUGHT_TODOS.push(doneTodoObj);
  paintBoughtTodos(doneTodoObj);

  BOUGHT_TODOS = BOUGHT_TODOS.filter(
    (t) => t.id !== parseInt(thingToBeDone.id)
  );

  PENDING_TODOS = PENDING_TODOS.filter(
    (t) => t.id !== parseInt(thingToBeDone.id)
  );
  thingToBeDone.remove();
  savePendingToDos();
  saveBoughtToDos();
}

function clickDeleteBtn(e) {
  const thingToDelete = e.target.parentElement.parentElement;
  PENDING_TODOS = PENDING_TODOS.filter(
    (todo) => todo.id !== parseInt(thingToDelete.id)
  );

  BOUGHT_TODOS = BOUGHT_TODOS.filter((todo) => todo.id !== thingToDelete.id);
  thingToDelete.remove();
  savePendingToDos();
  saveBoughtToDos();
}

function paintPendingTodos(newObj) {
  const deleteBtn = document.createElement("div");
  const doneBtn = document.createElement("div");
  const pendingItem = document.createElement("li");
  const pendingSpan = document.createElement("span");

  pendingItem.id = newObj.id;

  pendingItem.appendChild(pendingSpan);
  pendingItem.appendChild(deleteBtn);
  pendingItem.appendChild(doneBtn);
  pendingSpan.innerText = newObj.text;
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteBtn.addEventListener("click", clickDeleteBtn);
  doneBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  doneBtn.addEventListener("click", clickDoneBtn);
  pendingList.appendChild(pendingItem);
}

function submitJournalForm(e) {
  e.preventDefault();
  const todo = journalInput.value;
  journalInput.value = "";
  const newTodoObj = {
    text: todo,
    id: Date.now(),
  };

  PENDING_TODOS.push(newTodoObj);
  paintPendingTodos(newTodoObj);
  savePendingToDos();
  saveBoughtToDos();
}

plusBtn.addEventListener("click", showContainer);
boughtBtn.addEventListener("click", showContainer);
journalForm.addEventListener("submit", submitJournalForm);

const savedPendingToDos = localStorage.getItem(PENDING_KEY);
const savedBoughtToDos = localStorage.getItem(BOUGHT_KEY);

if (savedPendingToDos !== null) {
  const parsedPendingToDos = JSON.parse(savedPendingToDos);
  PENDING_TODOS = parsedPendingToDos;
  parsedPendingToDos.forEach(paintPendingTodos);
}

if (savedBoughtToDos !== null) {
  const parsedBoughtToDos = JSON.parse(savedBoughtToDos);
  BOUGHT_TODOS = parsedBoughtToDos;
  parsedBoughtToDos.forEach(paintBoughtTodos);
}
