const menus = document.querySelectorAll(".category-item");
const pages = document.querySelectorAll(".contents");
const covertedPages = Array.from(pages);

function switchScreen(e) {
  const title = e.target.parentNode.querySelector("h3").innerText;
  console.log(title);
  //   const filteredPages = covertedPages.filter((page, title) => {
  //     page.classList.contains(title);
  //   });
  //   console.log(filteredPages);
}

menus.forEach((menu) => {
  menu.addEventListener("click", switchScreen);
});
