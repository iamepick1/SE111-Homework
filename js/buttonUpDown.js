function up(){
    numb++;
    number.innerHTML = numb
}
function down(){
    numb--;
    number.innerHTML = numb
}
function answer(){
    pAns.innerHTML += "\nanswer"
}

const number = document.getElementById("number")
const upB = document.getElementById("up")
const downB = document.getElementById("down")
const gAns = document.getElementById("why")
const pAns = document.getElementById("answer")
var numb = 2;
up
upB.addEventListener("click",up)
downB.addEventListener("click",down)
gAns.addEventListener("click",answer)