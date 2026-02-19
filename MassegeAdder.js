const userText = document.getElementById("userText");
const btn = document.querySelector("button");
const textarea = document.querySelector("textarea");
let a = [];
let num = 1
const r = document.getElementById("refresh");

r.addEventListener("click", () => {
    textarea.value = "";
    userText.value = "";
    a = [];
    num = 1;
})


btn.addEventListener("click", () => {
   if(userText.value === ""){
      a.push();
   }
   else{
    a.push(num + ") " + userText.value);
    textarea.value =  a.join("\n");
    userText.value = "";
    num++
   }
})
