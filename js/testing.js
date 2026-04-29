function sDiv(b){
    document.getElementById('theDiv').innerHTML = b;
}
function go(){
        sDiv(data);
        data += c + "\n";
}
function alart(a){
    alert(a)
}

var data = "";
var c = "IM IN YOUR WALLS ";
var a = "I'M IN YOUR WALLS"
const alarting = setInterval(alart(a), 10000);
const textWall = setInterval(go, 10);
//yo mama so ugly when she looked into the mirror her reflection said "I quit."
