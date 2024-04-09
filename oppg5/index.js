document.getElementById("btn").addEventListener("click", function () {
  /* let hVerdi = document.querySelector("#input1").value;
  let bVerdi = Number(document.querySelector("#input2").value);
  console.log(hVerdi, bVerdi);

  for (let i = 0; i < bVerdi; i++) {
    document.write("*")
  }
  document.write("<br>")
  console.log(bVerdi);
  for (let i = 0; i < hVerdi; i++) {
    document.write("*")
    for (let j = 0; j < bVerdi+1; j++) {
      document.write("&nbsp")
      
    }
    document.write("*")
    document.write("<br>")
  } */
  let tall1 = document.getElementById("input1").value;
   let tall2 = document.getElementById("input2").value;
   for (let i = 1; i <= tall1; i++) {
      for (j = 1; j <= tall2; j++) {
         if (i == 1 || i == tall1 || j == (tall2 - 1) || j == 1) {
            document.write("*");
         } else
            document.write("&nbsp; &nbsp;");
      }
      document.write("<br>");
   }
});
