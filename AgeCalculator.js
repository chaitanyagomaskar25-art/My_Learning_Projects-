const btn  = document.getElementById("btn");
const age = document.getElementById("showAge");
const userAge  = document.querySelector("input");
const currDate = new Date();

btn.addEventListener("click", ()=>{    
    const diff = currDate - new Date(userAge.value);
    const ageYears = diff / (1000 * 60 * 60 * 24 * 365);
    age.innerText = `Your Age is ${Math.floor(ageYears)} years`;
})