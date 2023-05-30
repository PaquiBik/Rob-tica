var title = document.getElementById("neon-title");
var colors = ["red", "blue", "purple"];
var currentIndex = 0;

function changeColor() {
  title.style.color = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColor, 3000);

setTimeout(function() {
  clearInterval(changeColorInterval);
}, 11000);
