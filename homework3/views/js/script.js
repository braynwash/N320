document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("colorButton");
  if (button) {
    button.addEventListener("click", function () {
      const colors = ["lightyellow", "lightgreen", "lightblue"];
      document.body.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    });
  }
});
