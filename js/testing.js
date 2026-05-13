
function go(){
        theDiv.innerHTML += c;
}
function alart(){
    alert(b)
}
function inp(){
    var input = document.getElementById('input');
    console.log(input.value)
}


var user ={
    fname:"",
    lname:"",
    ip:"i cant get this"
}

var theDiv = document.getElementById('theDiv')
var c = "IM IN YOUR WALLS ";
var b = "I'M IN YOUR WALLS";

const eeee = setInterval(inp, 100);
// const alarting = setInterval(alart(a), 10000);
const textWall = setInterval(go, 10);
const noMore = document.getElementById("content")
noMore.addEventListener("mouseover", alart)