function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mult(a,b){
    return a*b
}
function div(a,b){
    return a/b
}

while(0==0){
    var sel = Number(prompt("1, add\n2, subtract\n3, multiply\n4, divide\n\n(put the number of the one you choose)"))

    var n1 = Number(prompt("what is the first number you would like to use"))
    var n2 = Number(prompt("what is the second number you would like to use"))

    if(sel===1){
        alert(add(n1,n2))
    }else if(sel===2){
        alert(sub(n1,n2))
    }else if(sel===3){
        alert(mult(n1,n2))
    }else if(sel===4){
        alert(div(n1,n2))
    }else{
        alert("please put a number 1-4 inclusive")
    }
}