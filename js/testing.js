
function go(){
        theDiv.innerHTML += c;
}
function alart(a){
    alert(a)
}
function inp(){
    var input = document.getElementById('input');
    console.log(input.value)
}

var theDiv = document.getElementById('theDiv')
var c = "IM IN YOUR WALLS ";
var a = "I'M IN YOUR WALLS"
const eeee = setInterval(inp, 100);
// const alarting = setInterval(alart(a), 10000);
const textWall = setInterval(go, 10);
