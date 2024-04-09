document.getElementById("btnRed").addEventListener("click", function () {
  document.getElementById("red").style.background = "red";
})


document.getElementById("btnBlue").addEventListener("click", function () {
  document.getElementById("blue").style.background = "blue";
})


document.getElementById("btnRandom").addEventListener("click", function () {
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }  

  document.getElementById("random").style.background = getRandomColor();
})