// Night reading mode: click the button to add or remove the "night" class on <body>
var button = document.getElementById("night-button");

button.addEventListener("click", function () {
  document.body.classList.toggle("night");
});
