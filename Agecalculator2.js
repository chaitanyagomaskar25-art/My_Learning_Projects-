const btn  = document.getElementById("btn");
const age = document.getElementById("showAge");
const userAge  = document.querySelector("input");

btn.addEventListener("click", ()=>{
    const currDate = new Date();
    const userDateOfBirth = new Date(userAge.value);

    let years = currDate.getFullYear() - userDateOfBirth.getFullYear();
    let months = currDate.getMonth() - userDateOfBirth.getMonth();
    let days = currDate.getDate() - userDateOfBirth.getDate(); 

   if (userAge.value === "") {
    age.innerText = `Your Age is: 0 years, 0 months, 0 days`;
     return;
}
   
    if(days < 0){
        months--;
       const prevMonthDays = new Date(currDate.getFullYear(), currDate.getMonth(), 0).getDate();
        days += prevMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }
        age.innerText = `Your Age is: ${years} years, ${months} months, ${days} days`;
 
}) 


 