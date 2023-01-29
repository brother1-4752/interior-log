const plusBtn = document.querySelector(".plus");
const boughtBtn = document.querySelector(".bought");
const pendingBox = document.querySelector(".pending__container");
const boughtBox = document.querySelector(".bought__container");
const pendingList = document.querySelector(".pending--list");
const boughtList = document.querySelector(".bought--list");

const journalForm = document.querySelector(".journal__header--form");
const journalInput = document.querySelector(".journal__header--input");

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

function submitJournalForm(e) {
  function clickDoneBtn(e) {
    function clickBackBtn(e) {
      const thingToBeBack = e.target.parentElement.parentElement;
      pendingList.appendChild(thingToBeBack);
      e.target.parentElement.classList.add(HIDE_CLASSNAME);
      e.target.parentElement.previousElementSibling.classList.remove(
        HIDE_CLASSNAME
      );
    }

    const thingToBeDone = e.target.parentElement.parentElement;
    boughtList.appendChild(thingToBeDone);
    e.target.parentElement.classList.add(HIDE_CLASSNAME);

    const backBtn = document.createElement("div");
    thingToBeDone.appendChild(backBtn);
    backBtn.innerHTML = `<i class="fa-solid fa-left-long"></i>`;

    backBtn.addEventListener("click", clickBackBtn);
  }

  function clickDeleteBtn(e) {
    const thingToDelete = e.target.parentElement.parentElement;
    thingToDelete.remove();
  }

  e.preventDefault();
  const todo = journalInput.value;
  const deleteBtn = document.createElement("div");
  const doneBtn = document.createElement("div");
  const pendingItem = document.createElement("li");
  const pendingSpan = document.createElement("span");
  pendingList.appendChild(pendingItem);
  pendingItem.appendChild(pendingSpan);
  pendingItem.appendChild(deleteBtn);
  pendingItem.appendChild(doneBtn);
  pendingSpan.innerHTML = `${todo}`;
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  doneBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  localStorage.setItem("THING_TO_BUY", todo);
  journalInput.value = "";

  deleteBtn.addEventListener("click", clickDeleteBtn);
  doneBtn.addEventListener("click", clickDoneBtn);
}

plusBtn.addEventListener("click", showContainer);
boughtBtn.addEventListener("click", showContainer);
journalForm.addEventListener("submit", submitJournalForm);
