var container = document.getElementById("personalInfo")

var fchild = document.createElement("p")
fchild.innerText = "Name = Manisha"
container.appendChild(fchild)

var schild = document.createElement("p")
schild.innerHTML = "<p><b>address</b></p>"
container.appendChild(schild)

var tchild = document.createElement("p")
tchild.innerHTML = "<p><b>phone number</b></p>"
container.appendChild(tchild)

