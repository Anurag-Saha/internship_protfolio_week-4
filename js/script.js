const darkBtn = document.getElementById("darkToggle");

/* Load saved theme */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (darkBtn) darkBtn.textContent = "☀️";
}

/* Toggle dark mode */
if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      darkBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      darkBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
}


/* =========================
   SCROLL ANIMATIONS
========================= */
const animatedItems = document.querySelectorAll(".animate");

function revealOnScroll() {
  animatedItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on load
