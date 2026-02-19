const c = document.getElementById("celsius");
const f = document.getElementById("farenhit");
const k = document.getElementById("kelvin");


c.addEventListener('input', () =>{
    let C = Number(c.value);
    f.value = ((C * 9/5)+ 32).toFixed(2);
    k.value = C + 273.15;
})


f.addEventListener('input', () =>{
    let F = Number(f.value);
    c.value = ((F-32) * 5/9).toFixed(2);
    k.value = ((F - 32)*5/9 + 273.15.toFixed(2));
})


k.addEventListener('input', () =>{
    let K = Number(k.value);
   c.value = K - 273.15;
   f.value = ((K-273.15) * 9/5 + 32).toFixed(2)
})