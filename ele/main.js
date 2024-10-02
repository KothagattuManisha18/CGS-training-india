var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

function incrementScore(e){
    var button = e.target
    var sid = button.getAttribute("data-score");
    var score = document.getElementById(sid)
    var currentScore = parseInt(score.innerText)
    score.innerText = currentScore+1
}

btn1.addEventListener("click", incrementScore);
btn2.addEventListener("click", incrementScore);
btn3.addEventListener("click", incrementScore);
btn4.addEventListener("click", incrementScore);

function GameOver(){
    var scores = [
        { id: "s1", name: "JANASENA" },
        { id: "s2", name: "BJP" },
        { id: "s3", name: "CONGRESS" },
        { id: "s4", name: "BRS" }
    ];
    var highestScore = 0;
    var winner = '';
    scores.forEach(function(scoreObj) {
        var scoreElement = document.getElementById(scoreObj.id);
        var currentScore = parseInt(scoreElement.innerText);
        if (currentScore > highestScore) {
            highestScore = currentScore;
            winner = scoreObj.name;
        }
    });
    alert("The winner is: " + winner + " with a score of " + highestScore);
}
document.querySelector('.btn-submit').addEventListener('click', GameOver);