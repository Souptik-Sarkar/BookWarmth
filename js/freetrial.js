function formData() {
  var name = document.forms["trialform"]["name"];
  var email = document.forms["trialform"]["email"];

  if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }
  else if (email.value == "") {
    window.alert("Please enter email address");
    email.focus();
    return false;
  }
  else{
    return true;
  }
}
