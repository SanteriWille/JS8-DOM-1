document.getElementById("btn").addEventListener("click", function () {

  let tall1 = Math.round(Math.random() * 10)
  let tall2 = Math.round(Math.random() * 10)
  document.getElementById("tall1").innerHTML = tall1;
  document.getElementById("tall2").innerHTML = tall2;

  if (tall1 == tall2) {
    document.getElementById("result").innerHTML = "De er like"
  } else if (tall1 > tall2) {
    document.getElementById("result").innerHTML = "Tall 1 er større enn tall 2"
  } else if (tall1 < tall2) {
    document.getElementById("result").innerHTML = "Tall 1 er mindre enn tall 2"
  } else {
    document.getElementById("result").innerHTML = "Det er en feil. Venligst sjekk din kode"
  }

})