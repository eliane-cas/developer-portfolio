// HERO LETTERS ANIMATION

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let isAnimating = false;

document.querySelector(".text_about").onmouseover = (event) => {
  if (isAnimating) return;

  isAnimating = true;

  console.log(event.target.dataset.value.length);
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
      isAnimating = false;
    }

    iterations += 1 / 2;
  }, 30);
};

// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// CAROUSEL

const btnLeft = document.querySelector(".carousel_btn_left");
const btnRight = document.querySelector(".carousel_btn_right");

const carouselItemsArray = [...document.querySelectorAll(".carousel_item")];

let currentIndex = 0;

function updateCarousel() {
  carouselItemsArray.forEach((item, index) => {
    item.classList.toggle("active", index == currentIndex);
    item.classList.toggle("inactive", index !== currentIndex);
  });
}

btnRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselItemsArray.length;
  updateCarousel();
});

btnLeft.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselItemsArray.length) % carouselItemsArray.length;
  updateCarousel();
});
