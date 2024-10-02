var btn = document.getElementById("btn");
var emailInput=document.getElementById("exampleInputEmail1");
var passwordInput=document.getElementById("exampleInputpassword1");
var text = document.getElementById("text");

btn.addEventListener("click",function (e){
    var email = emailInput.Value;
    var password = passwordInput.Value;
    text.value = "email:" +email + "/npassword:" +password;


});