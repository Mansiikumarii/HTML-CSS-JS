function setError(id,error){
element = document.getElementById(id);
element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm(){
var returnVal = true;
var name = document.forms['myForm']["fname"].value;


if(name.length < 5){
    setError("name","*Name must be at least 5 characters");
    returnVal = false;
}

var email = document.forms['myForm']["femail"].value;
if(email.length>30){
    setError("email","*Email length is too long");
    returnVal = false;
}

var phone = document.forms['myForm']['fphone'].value;
if(phone.length != 10){
    setError("phone","Phone number should be of 10 digit");
    returnVal = false;
}

return returnVal;
}