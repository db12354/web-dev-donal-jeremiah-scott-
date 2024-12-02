function validateForm() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("phone").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  // The || symbol means OR
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Invalid phone number!";
  } else {
    text = "input sent!";
  }
  document.getElementById("submit").innerHTML = text;
}