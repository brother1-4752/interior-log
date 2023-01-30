const headerForm = document.querySelector(".header__form");
const headerInput = document.querySelector(".header__input");
const headerUsername = document.querySelector(".header__username");
const sidebar__headerUsername = document.querySelector(
  ".sidebar__header--username"
);
const HIDE_CLASSNAME = "hide";

function onLogin(e) {
  e.preventDefault();
  const username = headerInput.value;
  headerUsername.innerHTML = `${username}님, 마음에 드는 인테리어 물품을 쇼핑일지에 담아보세요:)`;
  sidebar__headerUsername.innerHTML = `${username}님`;
  headerForm.classList.add(HIDE_CLASSNAME);
  headerUsername.classList.remove(HIDE_CLASSNAME);
  localStorage.setItem("user", username);
}

if (localStorage.getItem("user") === null) {
  headerForm.addEventListener("submit", onLogin);
} else {
  headerForm.classList.add(HIDE_CLASSNAME);
  headerUsername.classList.remove(HIDE_CLASSNAME);
  headerUsername.innerHTML = `${localStorage.getItem(
    "user"
  )}님, 마음에 드는 인테리어 물품을 쇼핑일지에 담아보세요:)`;
  sidebar__headerUsername.innerHTML = `${localStorage.getItem("user")}님`;
}
