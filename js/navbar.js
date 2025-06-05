const hamMenu = document.getElementById("ham-menu");
const hamburger = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburger-icon");

hamburger.addEventListener("click", () => {
  hamburgerIcon.classList.add("fade-out");

  setTimeout(() => {
    if (hamburgerIcon.textContent === "☰") {
      hamburgerIcon.textContent = "✕";
    } else {
      hamburgerIcon.textContent = "☰";
    }
    hamburgerIcon.classList.remove("fade-out");
  }, 200);
});

hamburger.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
});
