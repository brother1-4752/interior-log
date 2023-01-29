const headerMenu = document.querySelector(".header__menu");
const sidebar = document.querySelector(".sidebar");

function showSidebar() {
  if (sidebar.classList.contains(HIDE_CLASSNAME)) {
    sidebar.classList.remove(HIDE_CLASSNAME);
  } else {
    sidebar.classList.add(HIDE_CLASSNAME);
  }
}

headerMenu.addEventListener("click", showSidebar);
