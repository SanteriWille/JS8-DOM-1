document.getElementById("toCel").addEventListener("click", function () {
  var temp = document.getElementById("textbox").value;
  temp = (temp - 32) * (5 / 9);
  result.textContent = temp.toFixed(1) + "°C"
})

document.getElementById("toFahr").addEventListener("click", function () {
  var temp = document.getElementById("textbox").value;
  temp = temp * 9 / 5 + 32;
  result.textContent = temp.toFixed(1) + "°F";
})