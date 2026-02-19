const w = document.getElementById("weight");
const h = document.getElementById("height");
const result = document.getElementById("button");

    result.addEventListener("click", () =>{
        const W = Number(w.value);
     const H = Number(h.value)/100;
     if(!W || W <= 0){
        result.innerHTML = "<h2>Plese Enter Valid Weight</h2>";
        result.style.color ="red";
        return;
     }
     if(!H || H <= 0){
        result.innerHTML = "<h2>Plese Enter Valid Height</h2>";
        result.style.color ="red";
        return;
     }
     const BMI = (W /(H * H)).toFixed(2);
     if(BMI < 18){
        result.innerHTML = `<h2>Your BMI is ${BMI} . Body weight is lower than healthy range. You may need more nutrition and medical advice if required.</h2>`;
        result.style.color = "#E94560"
     } else if(BMI >= 18 && BMI <= 25){
        result.innerHTML = `<h2>Your BMI is ${BMI} . Ideal and healthy body weight range. Keep maintaining your lifestyle!</h2>`;
        result.style.color = "#ffff"
     } else if(BMI >= 25 && BMI <= 29){
         result.innerHTML = `<h2>Your BMI is ${BMI} . Weight is higher than normal range. Increasing activity and balanced diet can help.</h2>`;
         result.style.color = "#F4B400"
     } else if(BMI >= 30 ){
         result.innerHTML = `<h2>Your BMI is ${BMI} . Much higher body weight than healthy range. It is recommended to consult a doctor for health guidance.</h2>`;
         result.style.color = "#D72638"
     }
        
         setTimeout(() => {
    result.innerHTML = '<h2 class="result">Click Here to see the result</h2>';
    w.value = "";
    h.value = "";
    result.style.color = "white"
  }, 10000);
    })

    
    


  

