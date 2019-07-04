function myPassword() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunction () {
  alert("Successfully Submitted");
}

// document.getElementById("order") .addEventListener ("submit", myFunction);

// function myFunction () {
//   alert ("Successfully Submitted");
// }