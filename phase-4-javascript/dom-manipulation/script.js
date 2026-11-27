const form = document.querySelector("form");
const input = document.getElementById("need");
const heading = document.querySelector(".card h1");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value;

  if (text === "") {
    alert("Please type something first");
  } else {
    heading.textContent = "Project posted: " + text;
    input.value = "";
  }
});
