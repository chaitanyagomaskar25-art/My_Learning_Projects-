const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const result = document.getElementById("result");
const whoIsGreater = document.getElementById("whoIsGreater");


whoIsGreater.addEventListener("click", ()=>{
   const firstNum = value1.value;
    const secondNum = value2.value;
    if(firstNum === "" || secondNum === ""){
        alert("Enter the number")
    }else if (firstNum > secondNum) {
        result.innerText = `Greater number is: ${firstNum}`;
    } else if (secondNum > firstNum) {
        result.innerText = `Greater number is: ${secondNum}`;
    } else {
        result.innerText = "Both numbers are equal";
    }
})



