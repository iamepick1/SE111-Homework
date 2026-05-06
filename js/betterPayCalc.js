function submit(){
    fname = first.value
    lname = last.value
    pay = Number(rate.value)
    hours = Number(hour.value)
    console.log(fname)
    console.log(lname)
    console.log(pay)
    console.log(hours)
    full = fname + " " + lname
    console.log(full)
    gpay = pay*hours;
    npay = gpay*(1-tax);
    taxes = gpay*tax;
    console.log(gpay.toFixed(2))
    console.log(npay.toFixed(2))
    console.log(taxes.toFixed(2))
    finalMessage = `${full}\n${pay}\n${hours}\n`
    final = `${npay.toFixed(2)}\n${gpay.toFixed(2)}\n${taxes.toFixed(2)}`;
    info.innerHTML = final;
}
function submitNow(){
    alert(`${full}\nHOURS: ${hours}\nRATE: $${pay.toFixed(2)}\n\nGROSS PAY: $${gpay.toFixed(2)}\nTAX AMOUNT: $${taxes.toFixed(2)}\nNET PAY: $${npay.toFixed(2)}`)
}

const info = document.getElementById('info')
const check = document.getElementById("check")
const submitB = document.getElementById("submit")
const first = document.getElementById('first');
const last = document.getElementById('last');
const hour = document.getElementById('hours');
const rate = document.getElementById('rate');
const enter = document.getElementById("enter")
enter.addEventListener("click", submit)
submitB.addEventListener("click", submitNow)

var fname = ""
var lname = ""
var full = ""
var tax = .2;
var pay = 0
var hours = 0
var gpay = 0
var npay = 0
var taxes = 0
var final = ""
var finalMessage = ""