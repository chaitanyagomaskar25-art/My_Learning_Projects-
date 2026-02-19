const d = document.getElementById("decrease");
const i = document.getElementById("increase");
const r = document.getElementById("reset");
const nums = document.getElementById("number")
let num = 0
d.addEventListener("click", () =>{
    num = num - 1;
    nums.innerText = num;
   
})

r.addEventListener("click", () =>{
    num = 0;
    nums.innerText = num;
    
})

i.addEventListener("click", () =>{
     num = num + 1;
    nums.innerText = num;
   
})


