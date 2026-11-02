const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = Number(document.getElementById("age").value);

  if (age <= 0) {
    message.textContent = "Please enter a valid age!";
    message.style.color = "red";
    return;
  }

  message.textContent = "Welcome to My Website, " + name + "!";
  message.style.color = "green";
});
