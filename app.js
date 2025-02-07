const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector(".text_about").onmouseover = (event) => {
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

    if (iterations >= event.target.dataset.value.length)
      clearInterval(interval);

    iterations += 1 / 2;
  }, 30);
};

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
