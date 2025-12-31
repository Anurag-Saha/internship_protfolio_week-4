document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("guestName").value.trim();
  const guests = document.getElementById("guests").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const message = document.getElementById("bookingMessage");

  if (!name || !guests || !date || !time) {
    message.textContent = "Please fill all fields.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Table booked successfully!";
  message.style.color = "green";
  this.reset();
});
/* Scroll Reveal Animation */
const animatedItems = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  animatedItems.forEach(item => {
    const position = item.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      item.classList.add("show");
    }
  });
});

/* Dark Mode Toggle */
const darkBtn = document.getElementById("darkToggle");

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}
