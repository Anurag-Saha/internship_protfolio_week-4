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
