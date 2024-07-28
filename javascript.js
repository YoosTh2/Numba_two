function logInput() {
    const firstName = document.getElementById('fname').value;
    console.log("First name : " ,firstName);

    const lastName = document.getElementById('lname').value;
    console.log("Last name : " ,lastName);

    const email = document.getElementById('email').value;
    console.log("Email : " ,email);

    const number = document.getElementById('number').value;
    console.log("Age : " ,number);

    let password = document.getElementById("password")
  , confirm_password = document.getElementById("C-password");


    console.log("Password : ",password.value)
    console.log("Confirm Password : ",confirm_password.value)
}

let password = document.getElementById("password")
  , confirm_password = document.getElementById("C-password");

function validatePassword(){

  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }

}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

