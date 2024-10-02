
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
btn1.addEventListener("click",incScore1);

function incrementScore(e){
    var button=e.target
    var sid=button.getAttribute("data.score");
    var currentscore=parseInt(score.innertext)
    score.innertext=currentScore+1
    

}
btn1.addEventListener("click",incrementScore);
btn2.addEventListener("click",incrementScore);
btn3.addEventListener("click",incrementScore);

