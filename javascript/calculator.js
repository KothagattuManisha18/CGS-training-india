var display = document.getElementById("display")

var btns = document.getElementsByClassName("number")

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", expression)
}

function expression (e){
    var cur=e.target
    if(cur.innerText == "="){
        var result = eval(display.value)
        display.value=result
    } else{
        display.innerText = display.value + cur.innerText
    }
}