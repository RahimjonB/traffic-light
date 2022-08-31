let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

function traffic(){
    setInterval(()=>{
        
    
    setTimeout(()=>{
        red.style.backgroundColor = "red";
    }, 500)
    setTimeout(()=>{
        red.style.backgroundColor = "black";
    },10000)
    setTimeout(()=>{
        yellow.style.backgroundColor = "yellow";
    },10500)
    setTimeout(()=>{
        yellow.style.backgroundColor = "black";
    },13000)
    setTimeout(()=>{
        green.style.backgroundColor = "green";
    },14000)
    setTimeout(()=>{
        green.style.backgroundColor = "black";
    },21000)
    setTimeout(()=>{
        green.style.backgroundColor = "green";
    },21500)
    setTimeout(()=>{
        green.style.backgroundColor = "black";
    },22000)
    setTimeout(()=>{
        green.style.backgroundColor = "green";
    },22500)
    setTimeout(()=>{
        green.style.backgroundColor = "black";
    },23000)
}, 23100);
}

traffic();