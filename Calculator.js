const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const sub = document.getElementById("substract");
const divide = document.getElementById("divide");
const multi = document.getElementById("multiplication");
const equal = document.getElementById("equalTo");
const point = document.getElementById("point");
const square = document.getElementById("square");
const clearAll = document.getElementById("clearAll");
const removeOneDigit = document.getElementById("rightSide")
let input = document.getElementById("userinput"); 
let result = document.getElementById("output");


one.addEventListener("click", ()=>{ input.innerText += "1"; });
two.addEventListener("click", ()=>{ input.innerText += "2"; });
three.addEventListener("click", ()=>{ input.innerText += "3"; });
four.addEventListener("click", ()=>{ input.innerText += "4"; });
five.addEventListener("click", ()=>{ input.innerText += "5"; });
six.addEventListener("click", ()=>{ input.innerText += "6"; });
seven.addEventListener("click", ()=>{ input.innerText += "7"; });
eight.addEventListener("click", ()=>{ input.innerText += "8"; });
nine.addEventListener("click", ()=>{ input.innerText += "9"; });
zero.addEventListener("click", ()=>{ input.innerText += "0"; });
point.addEventListener("click", ()=>{ input.innerText += "."; });


function setOperator(operator) {
    let text = input.innerText.trim();
    if (text.endsWith("+") || text.endsWith("-") || text.endsWith("*") || text.endsWith("/")) {
        input.innerText = text.slice(0, -1);
    }
    input.innerText += operator;
}


plus.addEventListener("click", () => setOperator("+"));
sub.addEventListener("click", () => setOperator("-"));
multi.addEventListener("click", () => setOperator("*"));
divide.addEventListener("click", () => setOperator("/"));
square.addEventListener("click", () => setOperator("**"));


clearAll.addEventListener("click", ()=>{ 
    input.innerText = ""; 
    result.innerText = ""; 
});

equal.addEventListener("click", () => {
     let text = input.innerText.trim();
    if (text.endsWith("+") || text.endsWith("-") || text.endsWith("*") || text.endsWith("/")) {
        text = text.slice(0, -1);
    }
    try {
        result.innerText = (eval(text)).toFixed(2);
    } catch {
        result.innerText = "Error";
    }
});

removeOneDigit.addEventListener("click", ()=>{
    input.innerText = input.innerText.slice(0, -1)
});