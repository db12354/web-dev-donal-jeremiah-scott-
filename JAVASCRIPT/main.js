/*
function validateForm() {
  // Get the value of the input field with id="numb"
  
  let x = document.getElementById("phone").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  // The || symbol means OR
  if(x.length !== 10 && isNaN(x)){
    text = "Invalid phone number!";
  } else {
    text = "input sent!";
  }
  document.getElementById("submit").innerHTML = text;
}
  this didnt work so i decided it would be easier to do a different one 
*/

function validateForm() {
  let x = document.forms["myForm"]["first"].value;
  let y = document.forms["myForm"]["second"].value;
  if (x && y !== '') {
    alert("Submitted succesfully, feel free to send another.");
    return true;
  }
  else{
    alert("Please fill in all of the boxes!");
    return false;
  }
} 