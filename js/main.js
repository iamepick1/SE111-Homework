
function check(){
    a = 1
}
async function load(){
    for(let i=0;i<101;i++){
    console.log(`loading ${i}%`)
    await delay(Math.random()*400)
} 
}
async function infarr(){
    while(0==0){
        arr.push(l)
        l++
        delay(1000)
        console.log(arr)
    }
} 

const delay  = ms => new Promise(resolve => setTimeout(resolve, ms));
var arr2 = Array(10).fill(0)
var arr = Array(10).fill(arr2)
console.log(arr)
l = 0
for(let y=0;y<arr.length;y++){
    for(let x=0;x<arr[0].length;x++){
        arr[y][x] = l;
        l++
        console.log(x)
        console.log(y)
        console.log(arr)
        
    }
}

console.log(arr)

var a = 23413
var conGreet = "Hello what are you looking at!"
console.log(conGreet)
// console.log(a)
// check()
// console.log(a)

