
// Selectors
const leftSectionLi = document.querySelectorAll(".left-section .bullets li");
const leftSection = document.querySelector(".left-section");
const darkWhiteCheckbox = document.querySelector(".input");
const body = document.querySelector("body");
const header = document.querySelector("header");
const cards = document.querySelectorAll(".card");
let loader = document.querySelector(".loading-screen")


const savedColorOption = localStorage.getItem("color_option");

window.onload = function(){
if (savedColorOption === "white") {
  applyLightTheme();
  loader.style.display = "none";
  loader.style.visibility = "hidden"
} else {
  applyDarkTheme();
  loader.style.display = "none";
  loader.style.visibility = "hidden"
  }
}

// Check localStorage for color option

// Dark/White theme toggle
darkWhiteCheckbox.addEventListener("click", toggleDarkWhiteTheme);

// Left section LI click event
leftSectionLi.forEach((li) => {
  li.addEventListener("click", handleLeftSectionLiClick);
});

// Window scroll event
window.onscroll = handleWindowScroll;

// Functions
function applyLightTheme() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  loader.style.backgroundColor = "#ffff"
  cards.forEach((card) => {
    card.style.backgroundColor = "white";
  });
}

function applyDarkTheme() {
  darkWhiteCheckbox.classList = "input";
  darkWhiteCheckbox.checked = "checked";
  body.style.backgroundColor = "black";
  loader.style.backgroundColor = "black"
  body.style.color = "white";
  cards.forEach((card) => {
    card.style.backgroundColor = "var(--se-color)";
  });
}

function toggleDarkWhiteTheme() {
  if (darkWhiteCheckbox.classList.toggle("white")) {
    applyLightTheme();
    localStorage.setItem("color_option", "white");
  } else {
    applyDarkTheme();
    localStorage.setItem("color_option", "dark");
  }
}

function handleLeftSectionLiClick() {
  this.classList.add("active");
  leftSectionLi.forEach((c) => {
    if (c !== this) {
      c.classList.remove("active");
    }
  });
}

function handleWindowScroll() {
  const maxScroll = 119;
  const ratio = Math.min(window.scrollY / maxScroll, 1);
  const newTop = 150 - 150 * ratio;
  leftSection.style.top = newTop + "px";
}
