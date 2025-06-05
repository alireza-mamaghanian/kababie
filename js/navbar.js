// Grab mobile menu and hamburger icon from DOM
const hamMenu = document.getElementById("ham-menu");
const hamburger = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburger-icon");

// Toggle hamburger icon between ☰ and ✕ with fade animation
hamburger.addEventListener("click", () => {
  // Fade out animation for smoother icon switch
  hamburgerIcon.classList.add("fade-out");

  // Switch icon after fade
  setTimeout(() => {
    if (hamburgerIcon.textContent === "☰") {
      hamburgerIcon.textContent = "✕";
    } else {
      hamburgerIcon.textContent = "☰";
    }
    hamburgerIcon.classList.remove("fade-out");
  }, 200);
});
// Toggle the mobile navigation menu visibility
hamburger.addEventListener("click", () => {
  hamMenu.classList.toggle("active"); // Activates or deactivates fullscreen menu
});
