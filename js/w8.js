function submit(){
    arr.push(add.value)
    list.innerHTML = ""
    for(let m=0;m<arr.length;m++){
        list.innerHTML += `<li>${arr[m]}</li>`
    }
    
    console.log(arr)
}

arr = ["burger","cake","cheese","the blood of the damned","sugar","lava","chicken"]

const add = document.getElementById('add');
const list = document.getElementById('list');
const enter = document.getElementById("enter")
enter.addEventListener("click", submit)

for(let m=0;m<arr.length;m++){
    list.innerHTML += `<li>${arr[m]}</li>`
}