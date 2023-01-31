const menus = document.querySelectorAll(".category-item");
const pages = document.querySelectorAll(".contents");
const sidebarMenus = document.querySelectorAll(".category-row > span");

let covertedPages = Array.from(pages);

function switchScreen(e) {
  const title = e.target.parentNode.querySelector("h3").innerText;

  covertedPages.forEach((page) => {
    if (
      page.children[0].innerText === title &&
      page.classList.contains("hide")
    ) {
      let removeCurrentPage = covertedPages.filter((page) =>
        page.classList.contains("show")
      );
      removeCurrentPage[0].classList.remove("show");
      removeCurrentPage[0].classList.add("hide");
      page.classList.remove("hide");
      page.classList.add("show");
    }
  });
}

function switchScreenBySidebarMenus(e) {
  const title = e.target.innerText;
  covertedPages.forEach((page) => {
    if (
      page.children[0].innerText === title &&
      page.classList.contains("hide")
    ) {
      let removeCurrentPage = covertedPages.filter((page) =>
        page.classList.contains("show")
      );
      removeCurrentPage[0].classList.remove("show");
      removeCurrentPage[0].classList.add("hide");
      page.classList.remove("hide");
      page.classList.add("show");
    }
  });
}

menus.forEach((menu) => {
  menu.addEventListener("click", switchScreen);
});

sidebarMenus.forEach((s_menu) => {
  s_menu.addEventListener("click", switchScreenBySidebarMenus);
});
