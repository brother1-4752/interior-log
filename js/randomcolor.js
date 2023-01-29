const colors = [
  "#000000cc",
  "#ff0000b3",
  "#FFDE59cc",
  "#989BE9",
  "#7AE497",
  "#8DCCFF",
];

const randomNumber = Math.floor(Math.random() * colors.length);
const journalHeader = document.querySelector(".journal__header");
const pendingContainer = document.querySelector(".pending__container");
const boughtContainer = document.querySelector(".bought__container");

function changeThemeColor() {
  journalHeader.style.backgroundColor = colors[randomNumber];
  pendingContainer.style.backgroundColor = colors[randomNumber];
  boughtContainer.style.backgroundColor = colors[randomNumber];
}

window.addEventListener("load", changeThemeColor);
