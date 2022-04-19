"use strict";
window.addEventListener("load", () => {
  let progressBar = document.querySelectorAll(".progress-bar");
  let values = ["80%", "60%", "70%", "50%"];
  progressBar.forEach((progress, index) => {
    progress.style.width = values[index];
  });
});

const links = document.querySelectorAll(".navbar-nav nav-item nav-link");
for (const link of links) {
  link.addEventListener("click", smoothScroll);
}
function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behaviour: "smooth",
  });
}

console.log(links);
