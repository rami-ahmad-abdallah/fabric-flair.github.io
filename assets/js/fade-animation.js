let fadeUpItems = document.querySelectorAll(".fade-up");
let screenHeight = screen.height;

let screenWidth = screen.width;

fadeUpItems.forEach((item) => {
  let itemDistance = item.getBoundingClientRect().top;
  if (itemDistance <= screenHeight - 100) {
    activateFadeUp(item);
  }
});

document.addEventListener("scroll", () => {
  fadeUpItems.forEach((item) => {
    let itemDistance = item.getBoundingClientRect().top;
    if (itemDistance <= screenHeight - 100) {
      activateFadeUp(item);
    }
  });
});

// ACTIVATING THE FADE UP EFFECT FUNCTION
function activateFadeUp(item) {
  item.classList.add("fade-up-activate");
}
