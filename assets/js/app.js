let goUpElement = document.getElementById("goup");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    goUpElement.classList.add("goup-active");
  } else {
    goUpElement.classList.remove("goup-active");
  }
});

goUpElement.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
