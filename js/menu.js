const menus = document.querySelectorAll(".category-item");
const pages = document.querySelectorAll(".contents");
let covertedPages = Array.from(pages);

function switchScreen(e) {
  const title = e.target.parentNode.querySelector("h3").innerText;
  //   console.log("두번쨰", title);

  covertedPages.forEach((page) => {
    if (page.children[0].innerText === title) {
      console.log(title);
    }
  });
  //   console.log(title);
  //   covertedPages.filter((page, title) => {
  //     page.classList.contains(title);
  //   });
  // console.log(covertedPages);
}

menus.forEach((menu) => {
  menu.addEventListener("click", switchScreen);
});
