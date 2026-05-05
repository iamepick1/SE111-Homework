

var tax = .2;
var pay = Number(prompt("what is your hourly pay?"));
var hours = Number(prompt("what is your hours worked every 2 week period?"));
var gpay = pay*hours;
var npay = gpay*(1-tax);
var taxes = gpay*tax;
console.log(gpay)
console.log(npay)
console.log(taxes)
var final = "Your net pay is: " + npay + "\nYour gross pay is: " + gpay + "\nUncle Sam Gets: " + taxes;
document.getElementById('content').innerHTML = final;