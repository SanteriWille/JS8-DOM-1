document.getElementById("btn").addEventListener("click", function () {
  var input = document.getElementById("input").value;

  function checkPalindrome(str) {
    const input = str.split('').reverse().join('');
    if (str === input) 
      return true;
    else
      return false;
  }

  result = checkPalindrome(input);
  if (result == true) {
    document.getElementById("result").innerHTML = "Det er en palindrome";
  } else if (result == false) {
    document.getElementById("result").innerHTML = "Det er ikke en palindrome";
  } else {
    document.getElementById("result").innerHTML = "Plis skriv inn noe i boksen";
  }
})