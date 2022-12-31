const slides = document.querySelectorAll(".slide");
const toggleButtons = document.querySelectorAll(".toggleBut");
const texts = document.querySelectorAll(".text");
const pagesDown = document.querySelector(".pages-switcher__down");
const pagesTop = document.querySelector(".pages-switcher__top");
const musics = document.querySelectorAll(".music");
console.log(Object.keys(slides));
let i = 1;

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearClasses(slides, "active");

    console.log(slide);

    slide.classList.add("active");
    if (slide)
    for (const music of musics) {
      
    }
  });
}

for (const button of toggleButtons) {
  button.addEventListener("click", () => {
    switch (i) {
      case 0:
        toggleButtons.forEach((elem) => {
          elem.style.transform = null;
        });
        clearClasses(texts, "visible");
        i++;
        break;
      case 1:
        toggleButtons.forEach((elem) => {
          elem.style.transform = "rotate(-90deg)";
        });
        for (const text of texts) {
          text.classList.add("visible");
        }
        i--;
        break;
    }
  });
}

const clearClasses = (elems, classes) => {
  elems.forEach((slide) => {
    slide.classList.remove(`${classes}`);
  });
};

pagesDown.addEventListener("click", () => {
  window.scrollBy(0, window.innerHeight);
});

pagesTop.addEventListener("click", () => {
  window.scrollBy(0, -window.innerHeight);
});